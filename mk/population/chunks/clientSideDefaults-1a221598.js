import{ct as t,cu as s,cv as e,b3 as r,d as p}from"../main.js";import{t as o}from"./QueryEngineCapabilities-a7990f7e.js";function n(r){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===r||"esriGeometryMultipoint"===r?t:"esriGeometryPolyline"===r?s:e}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let i=1;function a(t,s){if(p("esri-csp-restrictions"))return()=>({[s]:null,...t});try{let e=`this.${s} = null;`;for(const s in t)e+=`this${u.test(s)?`.${s}`:`["${s}"]`} = ${JSON.stringify(t[s])};`;const r=new Function(`\n      return class AttributesClass$${i++} {\n        constructor() {\n          ${e};\n        }\n      }\n    `)();return()=>new r}catch(e){return()=>({[s]:null,...t})}}function c(t={}){return[{name:"New Feature",description:"",prototype:{attributes:r(t)}}]}function l(t,s){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:o,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}export{a,l as c,c as l,n};
