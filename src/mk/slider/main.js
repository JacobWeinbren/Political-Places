import './style.scss'

import $ from "jquery";

console.log('test');

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    require([
        "esri/config",
        "esri/Map",
        "esri/views/MapView",
        "esri/Basemap",
        "esri/layers/VectorTileLayer",
        "esri/geometry/SpatialReference",
    ], function(
        esriConfig,
        Map,
        MapView,
        Basemap,
        VectorTileLayer,
        SpatialReference
    ) {
        esriConfig.apiKey = data['access_token'];

        const vtlLayer = new VectorTileLayer({
            url: "https://vectortileservices5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Data/VectorTileServer"
        });

        var map = new Map({
            basemap: 'arcgis-dark-gray',
            layers: [vtlLayer]
        });

        const view = new MapView({
            map: map,
            zoom: 11,
            center: [-0.7594, 52.0406],
            container: "map",
            constraints: {
                minZoom: 10,
                maxZoom: 20,
            }
        });
    });
});