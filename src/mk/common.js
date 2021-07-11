//Loads in Calcite
import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath('dist/mk/assets');
defineCustomElements();

//Loads in JQuery and base styling
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

//Loads in common styles
import './common.css'