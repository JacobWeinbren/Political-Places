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
import * as colorRamps from "@arcgis/core/smartMapping/symbology/support/colorRamps";

var current_constituency = 'Milton Keynes'
var choice = 'Deprivation'
var current_focus;
var range;
var median;
var theme;
var bins;
var colors;

function selectChoices() {
    if (choice == "Deprivation") {
        $('#title').text("Deprivation Ranking");
        current_focus = 'dep';
        range = [0, 32844];
        median = 18422;
        bins = 20;
        theme = colorRamps.byName("Blue and Red 9");
        colors = theme.colors;
    }
    if (choice == "Social Mobility") {
        $('#title').text("Higher Education Participation (TUNDRA)");
        current_focus = 'tundra';
        range = [0.2, 0.6];
        median = 0.421;
        bins = 15;
        theme = colorRamps.byName("Pink and Blue 1");
        colors = theme.colors;
        colors = colors.reverse();
    }
}

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
            current_constituency = $($('#dropdown').prop('selectedItems')[0]).attr('choice')
            choice = $($('#dropdown').prop('selectedItems')[1]).attr('choice');
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
        var where;

        selectChoices();

        var titles = ["25% Quartile", "Local Average", "Eng. Average", "75% Quartile"];

        //Filters map
        if (current_constituency == "Combined") {
            where = "";
        } else {
            where = "new_con = '" + current_constituency + "' OR old_con = '" + current_constituency + "'";
        }

        layerView.filter = {
            where: where
        };

        //Sets histogram params
        var colorParams = {
            layer: data_map,
            theme: "above-and-below",
            outlineOptimizationEnabled: true,
            minValue: range[0],
            maxValue: range[1],
            view: view
        };

        //Tundra 0 is equal to null, something to do with the json to feature in arcgis
        if (current_focus == 'dep') {
            colorParams.valueExpression = "$feature." + current_focus
        } else {
            colorParams.valueExpression = "if ($feature." + current_focus + " != 0) {return $feature." + current_focus + "} else {return 'test';}"
        }

        //Filter the map to the constituency
        var query = new Query();
        query.where = where;
        query.outFields = [current_focus];

        data_map.queryFeatures(query).then(function(results) {

            //Gets the statistics for the data
            var features = results.features;
            var temp_array = [];
            for (var i = 0; i < features.length; i++) {
                var temp_item = features[i]['attributes'][current_focus]
                if (current_focus == 'tundra') {
                    if (temp_item != 0) {
                        temp_array.push(temp_item);
                    }
                } else {
                    temp_array.push(temp_item);
                }
            }
            temp_array = summary(temp_array, false);

            //Gets colours
            var stops = [{
                value: temp_array.quartile(0.25),
                color: colors[0]
            }, {
                value: temp_array.quartile(0.375),
                color: colors[1]
            }, {
                value: temp_array.median(),
                color: colors[2]
            }, {
                value: temp_array.quartile(0.625),
                color: colors[3]
            }, {
                value: temp_array.quartile(0.75),
                color: colors[4]
            }];

            //Builds the colour slider
            colorRendererCreator
                .createContinuousRenderer(colorParams)
                .then((response) => {

                    //Establishes renderer
                    rendererResult = response;
                    rendererResult.stops = rendererResult.renderer.visualVariables[0].stops = stops;
                    data_map.renderer = rendererResult.renderer;

                    //Shows map
                    data_map.visible = true;
                    buildings.visible = true;

                    //Gets histogram query
                    //Accounts for None/Null glitch in tundra
                    if (current_focus == 'tundra') {
                        if (current_constituency == "Combined") {
                            expression = "if ($feature." + current_focus + " != 0) {return $feature." + current_focus + "} else {return 'test';}";
                        } else {
                            expression = "if (($feature.new_con == '" + current_constituency + "' || $feature.old_con == '" + current_constituency + "') && ($feature." + current_focus + " != 0)) {return $feature." + current_focus + ";} else {return 'test';}";
                        }
                    } else {
                        if (current_constituency == "Combined") {
                            expression = "$feature." + current_focus
                        } else {
                            expression = "if ($feature.new_con == '" + current_constituency + "' || $feature.old_con == '" + current_constituency + "') {return $feature." + current_focus + ";} else {return 'test';}";
                        }
                    }

                    return histogram({
                        layer: data_map,
                        valueExpression: expression,
                        view: view,
                        numBins: bins,
                        minValue: range[0],
                        maxValue: range[1]
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
                        value: median,
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
                    slider.stops = stops;

                    //Adds in context to slider
                    var left_side = true;

                    slider.labelFormatFunction = (value, type) => {
                        if (left_side) {
                            if (type == "max") {
                                if (current_focus == "dep") {
                                    return "Least Deprived";
                                }
                                if (current_focus == "tundra") {
                                    return "Most Socially Mobile";
                                }

                            }
                            if (type == "value") {
                                return ""
                            }
                            if (type == "min") {
                                if (current_focus == "dep") {
                                    return "Most Deprived";
                                }
                                if (current_focus == "tundra") {
                                    return "Least Socially Mobile";
                                }
                                left_slide = false;
                            }
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