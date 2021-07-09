//Loads in calcite
import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath('dist/mk/slider/assets');
defineCustomElements();

//Loads in jquery and base styling
import './style.css';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

//Loads in statistics
import summary from 'summary'

//Loads in arcgis
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from '@arcgis/core/layers/GroupLayer'
import ColorSlider from "@arcgis/core/widgets/smartMapping/ColorSlider";
import * as colorRendererCreator from "@arcgis/core/smartMapping/renderers/color";
import histogram from "@arcgis/core/smartMapping/statistics/histogram";
import Query from "@arcgis/core/rest/support/Query";

var current_constituency = 'Milton Keynes'
var current_focus = 'dep'
var range = [0, 32844];

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    esriConfig.apiKey = data['access_token'];

    //Loads in layers
    const buildings = new FeatureLayer({
        visible: false,
        url: "https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Buildings/FeatureServer/"
    });

    const data_map = new FeatureLayer({
        visible: false,
        url: 'https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Data/FeatureServer/'
    });

    //Groups and overlaps layers
    const group = new GroupLayer({
        layers: [buildings, data_map],
    });
    data_map.blendMode = 'source-in';

    //Establishes view
    const map = new Map({
        basemap: 'arcgis-dark-gray',
        layers: [group]
    });

    const view = new MapView({
        map: map,
        zoom: 11,
        center: [-0.75, 52.04],
        container: 'map',
    });

    //Filters
    view.whenLayerView(data_map).then((layerView) => {
        generateRenderer(layerView);

        //Add dropdown
        view.ui.add('dropdown', 'top-right');
        $('#dropdown').show();

        //Dropdown fcontrol
        $('#dropdown').on('calciteDropdownSelect', function() {
            current_constituency = $('#dropdown').prop('selectedItems')[0].textContent;
            generateRenderer(layerView);
        });
    });

    //Creates continuous renderer
    function generateRenderer(layerView) {
        //Resets the slider and histogram
        $('#slider').html('');
        $('#dephisto').hide();

        //Establishes variables
        var expression;
        var rendererResult;
        var vv;
        var where;

        var titles = ["25% Quartile", "Local Average", "Eng. Average", "75% Quartile"];

        //Filters map
        if (current_constituency == "All Combined") {
            where = "";
        } else {
            where = "new_con = '" + current_constituency + "' OR old_con = '" + current_constituency + "'";
        }

        layerView.filter = {
            where: where
        };

        //Sets histogram params
        const colorParams = {
            layer: data_map,
            valueExpression: "$feature." + current_focus,
            view: view,
            theme: "above-and-below",
            outlineOptimizationEnabled: true,
            maxValue: range[1],
            minValue: range[0],
        };

        var query = new Query();
        query.where = where;
        query.outFields = ['dep'];

        data_map.queryFeatures(query).then(function(results) {

            //Gets the statistics for the data
            var features = results.features;
            var temp_array = [];
            for (var i = 0; i < features.length; i++) {
                temp_array.push(features[i]['attributes'][current_focus]);
            }
            temp_array = summary(temp_array, false);

            //Builds the colour slider
            colorRendererCreator
                .createContinuousRenderer(colorParams)
                .then((response) => {
                    //Establishes renderer
                    rendererResult = response;
                    vv = rendererResult.visualVariable;
                    data_map.renderer = response.renderer;

                    //Shows map
                    data_map.visible = true;
                    buildings.visible = true;

                    //Gets histogram query
                    if (current_constituency == "All Combined") {
                        expression = "$feature." + current_focus;
                    } else {
                        expression = "if ($feature.new_con =='" + current_constituency + "' || $feature.old_con == '" + current_constituency + "') {return $feature." + current_focus + ";} else {return 'test';}";
                    }

                    return histogram({
                        layer: data_map,
                        valueExpression: expression,
                        view: view,
                        numBins: 20,
                        minValue: range[0],
                        maxValue: range[1],
                    });

                })
                .then((histogramResult) => {
                    //Establishes slider
                    const slider = ColorSlider.fromRendererResult(
                        rendererResult,
                        histogramResult
                    );

                    slider.set({
                        container: "slider",
                        primaryHandleEnabled: true,
                        handlesSyncedToPrimary: true,
                    });

                    //Sets labels
                    slider.histogramConfig.average = null;
                    slider.histogramConfig.standardDeviation = null;

                    slider.histogramConfig.dataLines = [{
                        value: temp_array.quartile(0.25),
                        label: titles[0]
                    }, {
                        value: temp_array.median(),
                        label: titles[1]
                    }, {
                        value: 16422,
                        label: titles[2]
                    }, {
                        value: temp_array.quartile(0.75),
                        label: titles[3]
                    }];

                    //Smaller lines for quartiles
                    slider.histogramConfig.dataLineCreatedFunction = (
                        lineElement,
                        labelElement,
                        index
                    ) => {
                        $(lineElement).text(titles[index]);
                        $(labelElement).attr("x2", "66%");
                    };

                    //Sets colour stops
                    slider.stops[0].value = temp_array.quartile(0.25);
                    slider.stops[1].value = temp_array.quartile(0.375);
                    slider.stops[2].value = temp_array.median();
                    slider.stops[3].value = temp_array.quartile(0.625);
                    slider.stops[4].value = temp_array.quartile(0.75);

                    //Adds in context to slider
                    var left_side = true;

                    slider.labelFormatFunction = (value, type) => {
                        if (left_side) {
                            if (type == "max") {
                                return "Least Deprived";
                            }
                            if (type == "value") {
                                return ""
                            }
                            if (type == "min") {
                                return "Most Deprived";
                                left_slide = false;
                            }
                        } else {
                            return Math.round(value);
                        }
                    }

                    //Event handler for slider
                    function changeEventHandler() {
                        const renderer = data_map.renderer.clone();
                        const colorVariable = renderer.visualVariables[0].clone();
                        const outlineVariable = renderer.visualVariables[1];
                        colorVariable.stops = slider.stops;
                        renderer.visualVariables = [colorVariable, outlineVariable];
                        data_map.renderer = renderer;
                    }

                    //Show histogram
                    view.ui.add("dephisto", "bottom-left");
                    $('#dephisto').show();

                    slider.on(
                        ["thumb-change", "thumb-drag", "min-change", "max-change"],
                        changeEventHandler
                    );
                })
                .catch((error) => {
                    console.error("Error: ", error);
                });
        });
    }
});