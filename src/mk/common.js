//Loads in Calcite
import '@esri/calcite-components/dist/calcite/calcite.css';
import { setAssetPath, CalciteButton, CalciteDropdown, CalciteDropdownGroup, CalciteDropdownItem, CalciteIcon } from '@esri/calcite-components/dist/custom-elements';

setAssetPath('dist/mk/assets');

customElements.define('calcite-button', CalciteButton);
customElements.define('calcite-dropdown', CalciteDropdown);
customElements.define('calcite-dropdown-group', CalciteDropdownGroup);
customElements.define('calcite-dropdown-item', CalciteDropdownItem);

//Loads in JQuery and base styling
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

//Loads in common styles
import './common.css'