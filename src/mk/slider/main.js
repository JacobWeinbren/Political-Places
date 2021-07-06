//Loads in calcite
import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath('dist/mk/slider/assets');
defineCustomElements();

//Loads in jquery and base styling
import './style.css';
import $ from 'jquery';

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

    //Adds in dropdown
    view.when(function() {
        view.ui.add('dropdown', 'top-right');
        $('#dropdown').show();

        $('#dropdown').on('calciteDropdownSelect', function() {
            current_focus = $('#dropdown').selectedItems[0].textContent;
        });
    });

    //Histogram (deprivation)
    var expression = "if ($feature.new_con == 'Milton Keynes') {return $feature.dep;} else {return 'test';}";

    watchUtils.whenFalseOnce(view, "updating", generateRenderer);

    function generateRenderer() {
        const colorParams = {
            layer: data_map,
            valueExpression: expression,
            view: view,
            theme: "above-and-below",
            outlineOptimizationEnabled: true
        };

        let rendererResult;

        colorRendererCreator
            .createContinuousRenderer(colorParams)
            .then((response) => {
                rendererResult = response;
                data_map.renderer = rendererResult.renderer;
                return histogram({
                    layer: data_map,
                    valueExpression: colorParams.valueExpression,
                    view: view,
                    numBins: 70
                });
            })
            .then((histogramResult) => {
                const colorSlider = ColorSlider.fromRendererResult(
                    rendererResult,
                    histogramResult
                );
                colorSlider.min = 0;
                colorSlider.max = 32844;
                colorSlider.container = "slider";
                colorSlider.primaryHandleEnabled = true;
                colorSlider.labelFormatFunction = (value, type) => {
                    return Math.round(value);
                };
                colorSlider.viewModel.precision = 1;

                colorSlider.viewModel.setValue(1, 16422);
                colorSlider.viewModel.setValue(2, 24633);
                colorSlider.viewModel.setValue(0, 8211);

                view.ui.add("dephisto", "bottom-left");

                function changeEventHandler() {
                    const renderer = data_map.renderer.clone();
                    const colorVariable = renderer.visualVariables[0].clone();
                    const outlineVariable = renderer.visualVariables[1];
                    colorVariable.stops = colorSlider.stops;
                    renderer.visualVariables = [colorVariable, outlineVariable];
                    data_map.renderer = renderer;
                }
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