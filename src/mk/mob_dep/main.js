//Loads in Calcite, JQuery, common styles
import * as common from '../common.js'

//Loads in styles
import './style.css';

//Loads in statistics
import summary from 'summary';

//Loads in Esri
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

var current_constituency = 'Combined'
var current_choice = 'Deprivation'
var current_focus;
var range;
var median;
var theme;
var bins;
var colors;
var slider;

function selectChoices() {
    if (current_choice == "Deprivation") {
        current_focus = 'dep';
        range = [0, 32844];
        median = 18422;
        bins = 12;
        theme = colorRamps.byName("Blue and Red 9");
        colors = theme.colors;
    }
    if (current_choice == "Social Mobility") {
        current_focus = 'tundra';
        range = [0.2, 0.6];
        median = 0.421;
        bins = 10;
        theme = colorRamps.byName("Pink and Blue 1");
        colors = theme.colors;
        colors = colors.reverse();
    }
}

//Sets default renderer
var defaultStops = [{
    "value": 14553,
    "color": [215, 25, 28, 255]
}, {
    "value": 18666,
    "color": [253, 174, 97, 255]
}, {
    "value": 21903,
    "color": [255, 255, 191, 255]
}, {
    "value": 24175,
    "color": [171, 217, 233, 255]
}, {
    "value": 26095,
    "color": [44, 123, 182, 255]
}]

const defaultSym = {
    type: "simple-fill",
    outline: {
        color: [128, 128, 128, 0.2],
        width: "0.5px"
    }
};

const defaultRenderer = {
    type: "simple",
    symbol: defaultSym,
    visualVariables: [{
        type: "color",
        field: "dep",
        stops: defaultStops
    }]
};

//Lines to be drawn
var titles = [
    "25% Quartile",
    "Local Average",
    "Eng. Average",
    "75% Quartile"
];

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    esriConfig.apiKey = data['access_token'];

    //Loads in layers
    const buildings = new FeatureLayer({
        url: "https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Buildings/FeatureServer"
    });

    const data_map = new FeatureLayer({
        renderer: defaultRenderer,
        maxScale: 0,
        url: 'https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Data/FeatureServer'
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

    var view = new MapView({
        map: map,
        zoom: 11,
        constraints: {
            minZoom: 10,
        },
        center: [-0.75, 52.04],
        container: 'map',
    });

    //Filters
    view.whenLayerView(data_map).then((layerView) => {
        common.attribution($('.esri-attribution__sources'), ' | Ordnance Survey, Gov.UK, Office for Students');

        generateRenderer(layerView);

        //Add dropdown
        view.ui.add('dropdown', 'top-right');
        $('#dropdown').show();

        //Dropdown fcontrol
        var props;
        $('#dropdown').on('calciteDropdownSelect', function() {
            if (props != $('#dropdown').prop('selectedItems')) {
                props = $('#dropdown').prop('selectedItems');
                current_constituency = $(props[0]).attr('choice')
                current_choice = $(props[1]).attr('choice');
                generateRenderer(layerView);
            }
        });
    });

    //Creates continuous renderer
    function generateRenderer(layerView) {

        //Establishes variables
        var expression;
        var rendererResult;
        var where;

        //Establishes variables, based on focus
        selectChoices();

        //Filters map layer
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

                    //Gets histogram query
                    //Accounts for None/Null glitch in tundra
                    if (current_focus == 'tundra') {
                        expression = "if ($feature." + current_focus + " != 0) {return $feature." + current_focus + ";} else {return 'test';}";
                    } else {
                        expression = "$feature." + current_focus
                    }

                    return histogram({
                        layer: data_map,
                        valueExpression: expression,
                        view: view,
                        numBins: bins,
                        classificationMethod: "equal-interval",
                        minValue: range[0],
                        maxValue: range[1],
                        features: features
                    });
                })
                .then((histogramResult) => {

                    //Establishes slider
                    if (!slider) {
                        slider = ColorSlider.fromRendererResult(
                            rendererResult,
                            histogramResult
                        );

                        view.ui.add("histo", "bottom-left");

                        //Event handler for slider on colour slider move
                        function changeEventHandler() {
                            const renderer = data_map.renderer.clone();
                            var colorVariable = renderer.visualVariables[0].clone();
                            colorVariable.stops = slider.stops;
                            renderer.visualVariables = [colorVariable];
                            data_map.renderer = renderer;
                        }

                        slider.set({
                            container: "slider",
                            primaryHandleEnabled: true,
                            handlesSyncedToPrimary: true
                        });

                        slider.on(
                            ["thumb-change", "thumb-drag", "min-change", "max-change"],
                            changeEventHandler
                        );

                        slider.histogramConfig.dataLineCreatedFunction = function(lineElement, labelElement, index) {
                            $(lineElement).text(titles[index]);
                            $(labelElement).attr("x2", "66%");
                        };

                        slider.histogramConfig.average = null;
                        slider.histogramConfig.standardDeviation = null;

                        $('#histo').show();
                    }

                    //Updates slider
                    var right_side = true;

                    slider.set({
                        labelFormatFunction: (value, type) => {
                            if (right_side) {
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
                                    right_side = false;
                                }
                            }
                        },
                        stops: stops,
                        max: range[1],
                        min: range[0],
                        histogramConfig: {
                            bins: histogramResult.bins,
                            dataLines: [{
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
                            }]
                        }
                    });

                    if (current_choice == "Social Mobility") {
                        $('#title').html("Higher Education Participation (TUNDRA)<br>" + $($('#dropdown').prop('selectedItems')[0]).text());
                    }
                    if (current_choice == "Deprivation") {
                        $('#title').html("Deprivation Ranking<br>" + $($('#dropdown').prop('selectedItems')[0]).text());
                    }
                })
                .catch((error) => {
                    console.error("Error: ", error);
                });
        });
    }
});