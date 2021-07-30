//Loads in Calcite, JQuery, common styles
import '../common.js'

//Loads in styles
import './style.css';

//Loads in statistics
import summary from 'summary';

//Loads in Esri
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ColorSizeSlider from "@arcgis/core/widgets/smartMapping/ColorSizeSlider";
import * as colorAndSizeRendererCreator from "@arcgis/core/smartMapping/renderers/univariateColorSize";
import Legend from "@arcgis/core/widgets/Legend";
import * as cimSymbolUtils from "@arcgis/core/symbols/support/cimSymbolUtils";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import Color from "@arcgis/core/Color";

//Loads in Arrow
const aboveSymbol = new CIMSymbol({
    data: {
        "type": "CIMSymbolReference",
        "symbol": {
            "type": "CIMPointSymbol",
            "haloSize": 1,
            "scaleX": 1,
            "angleAlignment": "Display",
            "symbolLayers": [{
                "type": "CIMVectorMarker",
                "enable": true,
                "anchorPointUnits": "Relative",
                "dominantSizeAxis3D": "Y",
                "size": 10,
                "billboardMode3D": "FaceNearPlane",
                "scaleSymbolsProportionally": true,
                "respectFrame": true,
                "frame": { "xmin": 0, "ymin": 0, "xmax": 32, "ymax": 32 },
                "clippingPath": {
                    "type": "CIMClippingPath",
                    "clippingType": "Intersect",
                    "path": {
                        "rings": [
                            [
                                [0, 0],
                                [32, 0],
                                [32, 32],
                                [0, 32],
                                [0, 0]
                            ]
                        ]
                    }
                },
                "markerGraphics": [{
                    "type": "CIMMarkerGraphic",
                    "symbol": { "type": "CIMPolygonSymbol", "symbolLayers": [{ "type": "CIMSolidFill", "enable": true, "color": [5, 113, 176, 255], "colorLocked": false }] },
                    "geometry": {
                        "rings": [
                            [
                                [16.1, 0],
                                [16.1, 20.9],
                                [25.7, 10.9],
                                [25.7, 19.1],
                                [12.9, 31.9],
                                [0, 19.1],
                                [0, 11],
                                [9.6, 21],
                                [9.6, 0],
                                [16.1, 0]
                            ]
                        ]
                    }
                }]
            }]
        }
    }
});

var legend;
var current_constituency = 'Combined';

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    esriConfig.apiKey = data['access_token'];

    function createArrowSymbol(color, rotation) {
        const symbol = aboveSymbol.clone();
        cimSymbolUtils.applyCIMSymbolColor(symbol, color);
        cimSymbolUtils.applyCIMSymbolRotation(symbol, rotation);
        return symbol;
    }

    var data_map = new FeatureLayer({
        url: 'https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Population/FeatureServer',
        title: "MK Population Change 2009-2019",
        maxScale: 0,
        renderer: {
            type: "unique-value",
            valueExpression: "var pop = $feature.pop; if (pop > 0){return 'up';} else if (pop < 0) {return 'down';} return null;",
            valueExpressionTitle: "Population Change Direction",
            //Blue and red 9
            uniqueValueInfos: [{
                value: "up",
                label: "Increase",
                symbol: createArrowSymbol(
                    new Color("#2c7bb6"),
                    0
                )
            }, {
                value: "down",
                label: "Decrease",
                symbol: createArrowSymbol(
                    new Color("#d7191c"),
                    180
                )
            }],

            visualVariables: [{
                type: "size",
                valueExpression: 'return Abs($feature.pop);',
                valueExpressionTitle: "Shift in percentage points",
                stops: [{
                    value: 0,
                    size: 5
                }, {
                    value: 15,
                    size: 15
                }, {
                    value: 30,
                    size: 20
                }, {
                    value: 100,
                    size: 30
                }]
            }]
        }
    });

    //Establishes view
    const map = new Map({
        basemap: 'arcgis-dark-gray',
        layers: [data_map]
    });

    var view = new MapView({
        map: map,
        zoom: 11,
        constraints: {
            minZoom: 10
        },
        center: [-0.75, 52.04],
        container: 'map'
    });

    //Filters
    view.whenLayerView(data_map).then((layerView) => {
        $('.esri-attribution__sources')[0].append(' | Ordnance Survey, ONS')
        generateRenderer(layerView);

        //Add dropdown
        view.ui.add('dropdown', 'top-right');
        $('#dropdown').show();

        //Add legend
        if (!legend) {
            legend = new Legend({
                view,
                container: $('#legend')[0]
            });

            view.ui.add("legend", "bottom-left");
            $('#legend').show();
        }

        //Dropdown control
        var props;
        $('#dropdown').on('calciteDropdownSelect', function() {
            if (props != $('#dropdown').prop('selectedItems')) {
                props = $('#dropdown').prop('selectedItems');
                current_constituency = $(props[0]).attr('choice')
                generateRenderer(layerView);
            }
        });
    });

    //Creates continuous renderer
    function generateRenderer(layerView) {
        var where;

        //Filters map layer
        if (current_constituency == "Combined") {
            where = "";
        } else {
            where = "new_con = '" + current_constituency + "' OR old_con = '" + current_constituency + "'";
        }

        layerView.filter = {
            where: where
        };
    }
});