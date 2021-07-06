//Loads in calcite
import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath('dist/mk/slider/assets');
defineCustomElements();

//Loads in jquery and base styling
import './style.css';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

//Loads in arcgis
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from '@arcgis/core/layers/GroupLayer'
import ColorSlider from "@arcgis/core/widgets/smartMapping/ColorSlider";
import * as colorRendererCreator from "@arcgis/core/smartMapping/renderers/color";
import histogram from "@arcgis/core/smartMapping/statistics/histogram";
import * as watchUtils from "@arcgis/core/core/watchUtils";
import FeatureFilter from "@arcgis/core/views/layers/support/FeatureFilter";

var current_focus = 'Milton Keynes'

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    esriConfig.apiKey = data['access_token'];

    //Loads in layers
    const buildings = new FeatureLayer({
        url: "https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Buildings/FeatureServer/"
    });

    const data_map = new FeatureLayer({
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
        generateRenderer();
        layerView.filter = {
            where: "new_con = '" + current_focus + "'"
        };

        view.ui.add('dropdown', 'top-right');
        $('#dropdown').show();

        $('#dropdown').on('calciteDropdownSelect', function() {
            current_focus = $('#dropdown').prop('selectedItems')[0].textContent;
            $('#slider').html('');

            generateRenderer();
            layerView.filter = {
                where: "new_con = '" + current_focus + "' OR old_con = '" + current_focus + "'"
            };
        });
    });

    //Histogram (deprivation)

    function generateRenderer() {
        $('#dephisto').hide();
        var expression = "if ($feature.new_con =='" + current_focus + "' || $feature.old_con == '" + current_focus + "') {return $feature.dep;} else {return 'test';}";

        const colorParams = {
            layer: data_map,
            valueExpression: '$feature.dep',
            view: view,
            theme: "above-and-below",
            outlineOptimizationEnabled: true,
            maxValue: 32844,
            minValue: 0
        };

        let rendererResult;

        colorRendererCreator
            .createContinuousRenderer(colorParams)
            .then((response) => {
                console.log(response);
                rendererResult = response;
                rendererResult.visualVariable.stops = [
                    { "color": [202, 0, 32, 255], "value": 8211 },
                    { "color": [244, 165, 130, 255], "value": 12316.5 },
                    { "color": [247, 247, 247, 255], "value": 16422 },
                    { "color": [146, 197, 222, 255], "value": 20527.5 },
                    { "color": [5, 113, 176, 255], "value": 24633 }
                ];

                data_map.renderer = rendererResult.renderer;
                return histogram({
                    layer: data_map,
                    valueExpression: expression,
                    view: view,
                    numBins: 20,
                    minValue: 0,
                    maxValue: 32844
                });
            })
            .then((histogramResult) => {
                const colorSlider = ColorSlider.fromRendererResult(
                    rendererResult,
                    histogramResult
                );

                colorSlider.container = "slider";
                colorSlider.primaryHandleEnabled = true;

                colorSlider.labelFormatFunction = (value, type) => {
                    return Math.round(value);
                };

                colorSlider.histogramConfig.dataLineCreatedFunction = (
                    lineElement,
                    labelElement,
                    index
                ) => {
                    if (index != null) {
                        lineElement.setAttribute("x2", "66%");
                        const sign = index === 0 ? "-" : "+";
                        labelElement.innerHTML = sign + "σ";
                    }
                };

                function changeEventHandler() {
                    const renderer = data_map.renderer.clone();
                    const colorVariable = renderer.visualVariables[0].clone();
                    const outlineVariable = renderer.visualVariables[1];
                    colorVariable.stops = colorSlider.stops;
                    renderer.visualVariables = [colorVariable, outlineVariable];
                    data_map.renderer = renderer;
                }

                colorSlider.viewModel.precision = 1;

                view.ui.add("dephisto", "bottom-left");
                $('#dephisto').show();

                colorSlider.on(
                    ["thumb-change", "thumb-drag", "min-change", "max-change"],
                    changeEventHandler
                );
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    }
});