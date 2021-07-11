//Loads in calcite
import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath('dist/mk/assets');
defineCustomElements();

//Loads in jquery and base styling
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

//Loads in styles
import './style.css';

//Loads in arcgis
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";