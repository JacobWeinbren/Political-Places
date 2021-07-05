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

        let basemap = new Basemap({
            portalItem: {
                id: "a118075240bc4e4f8062265ecdad0e7e"
            }
        });

        /*const b = new VectorTileLayer({
            url: "https://vectortileservices5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Data/VectorTileServer"
        });*/

        var map = new Map({
            basemap: basemap,
            layers: [b]
        });

        const view = new MapView({
            map: map,
            zoom: 11,
            container: "map",
            constraints: {
                minZoom: 10,
                maxZoom: 20,
            }
            spatialReference: {
                wkid: 3857
            }
            center: [50, -0.3]
        });

        console.log(view)
    });
});