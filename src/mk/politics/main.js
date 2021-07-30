//Loads in Calcite, JQuery, common styles
import '../common.js'

//Loads in styles
import './style.css';

//Loads arrow generator
import * as arrow from '../arrow.js';

//Loads in Esri
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from '@arcgis/core/layers/GroupLayer'
import Legend from "@arcgis/core/widgets/Legend";
import Color from "@arcgis/core/Color";

var current_focus = 'Results';
var legend;

const results_renderer = {
    type: "unique-value",
    field: "winner",
    valueExpressionTitle: "Winning Party",
    uniqueValueInfos: [{
        value: "Lab",
        label: "Labour",
        symbol: {
            type: "simple-fill",
            color: "#E4003B"
        }
    }, {
        value: "Con",
        label: "Conservative",
        symbol: {
            type: "simple-fill",
            color: "#0087DC"
        }
    }, {
        value: "LDem",
        label: "Liberal Democrats",
        symbol: {
            type: "simple-fill",
            color: "#FAA61A"
        }
    }],
    visualVariables: [{
        type: "opacity",
        valueExpression: 'return $feature.majority;',
        valueExpressionTitle: "Majority in Percentage Points",
        stops: [
            { value: 0, opacity: .3 },
            { value: 5, opacity: .75 },
            { value: 10, opacity: 1 }
        ]
    }]
}

const swing_renderer = {
    type: "unique-value",
    field: "swing_party",
    valueExpressionTitle: "Swing Towards",
    uniqueValueInfos: [{
        value: "Lab",
        label: "Labour",
        symbol: arrow.createArrowSymbol(
            new Color("#E4003B"),
            45
        )
    }, {
        value: "Con",
        label: "Conservative",
        symbol: arrow.createArrowSymbol(
            new Color("#0087DC"),
            -45
        )
    }, {
        value: "LDem",
        label: "Liberal Democrats",
        symbol: arrow.createArrowSymbol(
            new Color("#FAA61A"),
            0
        )
    }],
    visualVariables: [{
        type: "size",
        valueExpression: 'return $feature.swing;',
        valueExpressionTitle: "Swing in Percentage Points",
        stops: [{
            value: 0,
            size: 0
        }, {
            value: 5,
            size: 20
        }, {
            value: 20,
            size: 40
        }]
    }]
}

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    esriConfig.apiKey = data['access_token'];

    //Loads in layers
    const buildings = new FeatureLayer({
        url: "https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Buildings/FeatureServer"
    });

    var data_map = new FeatureLayer({
        url: 'https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Politics/FeatureServer',
        title: "2021 Local Election Results - Britain Elects",
        maxScale: 0,
        renderer: results_renderer
    });

    //Groups and overlaps layers
    const group = new GroupLayer({
        layers: [buildings, data_map],
    });
    data_map.blendMode = 'source-in';

    //Establishes view
    const map = new Map({
        basemap: 'arcgis-light-gray',
        layers: [group]
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
        $('.esri-attribution__sources')[0].append(' | Ordnance Survey, Britain Elects');
        $('.esri-attribution__sources').on('data-attribute-changed', function() {
            $('.esri-attribution__sources')[0].append(' | Ordnance Survey, Britain Elects');
        });

        //Add dropdown
        view.ui.add('dropdown', 'top-right');
        $('#dropdown').show();

        //Add legend
        if (!legend) {
            legend = new Legend({
                view,
                container: $('#legend')[0],
                layerInfos: [{
                    layer: data_map
                }]
            });

            view.ui.add("legend", "bottom-left");
            $('#legend').show();
        }

        //Dropdown control
        var props;
        $('#dropdown').on('calciteDropdownSelect', function() {
            if (props != $('#dropdown').prop('selectedItems')) {
                props = $('#dropdown').prop('selectedItems');
                current_focus = $(props[0]).attr('choice')

                if (current_focus == 'Results') {
                    buildings.opacity = 1;
                    data_map.blendMode = 'source-in';
                    data_map.renderer = results_renderer;
                } else if (current_focus == 'Swing') {
                    data_map.opacity = 0;
                    data_map.renderer = swing_renderer;
                    data_map.opacity = 1;
                    buildings.opacity = 0;
                    data_map.blendMode = 'normal';
                }
            }
        });
    });
});