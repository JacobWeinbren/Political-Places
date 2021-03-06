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
import Legend from "@arcgis/core/widgets/Legend";
import Color from "@arcgis/core/Color";

//Loads arrow generator
import * as arrow from '../arrow.js';

var legend;
var current_constituency = 'Combined';
const multi = .7;

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    esriConfig.apiKey = data['access_token'];

    var data_map = new FeatureLayer({
        url: 'https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Population/FeatureServer',
        copyright: "ONS",
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
                symbol: arrow.createArrowSymbol(
                    new Color("#2c7bb6"),
                    0
                )
            }, {
                value: "down",
                label: "Decrease",
                symbol: arrow.createArrowSymbol(
                    new Color("#d7191c"),
                    180
                )
            }],

            visualVariables: [{
                type: "size",
                valueExpression: 'return Abs($feature.pop);',
                valueExpressionTitle: "Shift in Percentage",
                minDataValue: 0,
                maxDataValue: 30,
                maxSize: {
                    type: "size",
                    valueExpression: "$view.scale",
                    stops: [
                        { size: 40 * multi, value: 288895 },
                        { size: 30 * multi, value: 2311162 },
                        { size: 20 * multi, value: 18489297 },
                        { size: 10 * multi, value: 147914381 }
                    ]
                },
                minSize: {
                    type: "size",
                    valueExpression: "$view.scale",
                    stops: [
                        { size: 6 * multi, value: 288895 },
                        { size: 4 * multi, value: 2311162 },
                        { size: 3 * multi, value: 18489297 },
                        { size: 2 * multi, value: 147914381 }
                    ]
                }
            }]
        }
    });

    //Establishes view
    const map = new Map({
        basemap: 'arcgis-light-gray',
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