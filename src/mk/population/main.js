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
import Legend from "@arcgis/core/widgets/Legend";
import Color from "@arcgis/core/Color";

//Loads arrow generator
import * as arrow from '../arrow.js';

var legend;
var current_constituency = 'Combined';

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    esriConfig.apiKey = data['access_token'];

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
                valueExpressionTitle: "Shift in Percentage Points",
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
        common.attribution($('.esri-attribution__sources'), ' | Ordnance Survey, ONS');

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