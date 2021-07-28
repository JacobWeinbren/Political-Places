//Loads in Calcite, JQuery, common styles
import '../common.js'

//Loads in styles
import './style.css';

//Loads in Esri
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

$.getJSON('https://ancient-dawn-46f2.jacobweinbren.workers.dev/', function(data) {

    esriConfig.apiKey = data['access_token'];

    //Loads in layers
    const buildings = new FeatureLayer({
        url: "https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Buildings/FeatureServer/"
    });

    const data_map = new FeatureLayer({
        renderer: renderer,
        url: 'https://services5.arcgis.com/N6Nhpnxaedla81he/arcgis/rest/services/MK_Population/FeatureServer'
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

    var view = new MapView({
        map: map,
        zoom: 11,
        center: [-0.75, 52.04],
        container: 'map'
    });
});