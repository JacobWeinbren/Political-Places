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

var current_constituency = 'Combined';
var legend;

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    esriConfig.apiKey = data['access_token'];

    const data_map = new FeatureLayer({
        title: "Population Change 2009-2019",
        url: 'https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Population/FeatureServer'
    });

    //Establishes view
    const map = new Map({
        basemap: 'arcgis-dark-gray',
        layers: [data_map]
    });

    var view = new MapView({
        map: map,
        zoom: 11,
        center: [-0.75, 52.04],
        container: 'map'
    });

    view.constraints.minZoom = 10;
    view.constraints.maxZoom = 13;

    //Filters
    view.whenLayerView(data_map).then((layerView) => {
        generateRenderer(layerView);

        //Add dropdown
        view.ui.add('dropdown', 'top-right');
        $('#dropdown').show();

        //Dropdown fcontrol
        $('#dropdown').on('calciteDropdownSelect', function() {
            current_constituency = $($('#dropdown').prop('selectedItems')[0]).attr('choice')
            generateRenderer(layerView);
        });
    });

    //Creates continuous renderer
    function generateRenderer(layerView) {

        //Establishes variables
        var expression;
        var rendererResult;
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

        //Builds the colour slider
        const params = {
            layer: data_map,
            field: "pop",
            theme: "above-and-below",
            symbolOptions: {
                symbolStyle: "circle-arrow"
            },
            valueExpressionTitle: "Percentage Change (%)",
            defaultSymbolEnabled: false,
            minValue: -40,
            maxValue: 40
        };

        // when the promise resolves, apply the renderer to the layer
        colorAndSizeRendererCreator.createContinuousRenderer(params)
            .then(function(response) {
                rendererResult = response;
                rendererResult.renderer.visualVariables[0].valueUnit = "meters";
                rendererResult.renderer.visualVariables[0].valueRepresentation = "area";
                data_map.renderer = rendererResult.renderer;

                if (!legend) {
                    legend = new Legend({
                        view,
                        container: $('#legend')[0]
                    });

                    view.ui.add("legend", "bottom-left");
                    $('#legend').show();
                }

                console.log(rendererResult, legend);
            });
    }
});