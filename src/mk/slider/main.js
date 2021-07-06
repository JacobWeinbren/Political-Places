import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath('dist/mk/slider/assets');
defineCustomElements();

import './style.css';
import $ from 'jquery';

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    esriConfig.apiKey = data['access_token'];

    const map = new Map({
        basemap: 'arcgis-dark-gray'
    });

    const view = new MapView({
        map: map,
        zoom: 11,
        center: [-0.75, 52.04],
        container: "map",
    });

    view.when(function() {
        view.ui.add("dropdown", "bottom-right");
        $("#dropdown").show();
    });
});