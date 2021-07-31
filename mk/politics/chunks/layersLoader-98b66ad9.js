import{L as e,a as t,cm as r,cn as a}from"../main.js";import{a as n}from"./lazyLayerLoader-aa5ff718.js";import{o as l}from"./jsonContext-69494f7a.js";async function o(t){const{data:r}=await e(t,{responseType:"json",query:{f:"json"}});return r}async function s(e,t){const a=e.instance,n=a.portalItem,{url:o,title:s}=n,u=l(n);if("group"===a.type)return a.read({title:s},u),i(a,e);o&&a.read({url:o},u);const c=await d(e,t);return c&&a.read(c,u),a.resourceReferences={portalItem:n,paths:u.readResourcePaths},a.read({title:s},u),r(a,u)}function i(e,r){let a;const l=e.portalItem.type;switch(l){case"Feature Service":a=n.FeatureLayer;break;case"Stream Service":a=n.StreamLayer;break;case"Scene Service":a=n.SceneLayer;break;case"Feature Collection":a=n.FeatureLayer;break;default:throw new t("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let o;return a().then((e=>(o=e,d(r)))).then((async t=>"Feature Service"===l?(t=await y(t,e.portalItem.url),c(e,o,t)):m(t)>0?c(e,o,t):u(e,o)))}function u(e,t){return e.portalItem.url?o(e.portalItem.url).then((r=>{var a,n;function l(e){return{id:e.id,name:e.name}}r&&c(e,t,{layers:null==(a=r.layers)?void 0:a.map(l),tables:null==(n=r.tables)?void 0:n.map(l)})})):Promise.resolve()}function c(e,t,r){let a=r.layers||[];const n=r.tables||[];"Feature Collection"===e.portalItem.type&&(a.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&n.push(e)})),a=a.filter((e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),a.reverse().forEach((a=>{const n=p(e,t,r,a);e.add(n)})),n.reverse().forEach((a=>{const n=p(e,t,r,a);e.tables.add(n)}))}function p(e,t,r,n){const l=new t({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||a.getDefault()};l.read(n,t);const o=r.showLegend;null!=o&&l.read({showLegend:o},t)}return l}function d(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",t).catch((()=>null)).then((async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(r)){let t,a=!0;return e&&m(e)>0&&(null==r.layerId&&(r.layerId=f(e)),t=function(e,t){const r=e.layers;if(r)for(let e=0;e<r.length;e++)if(r[e].id===t)return r[e];const a=e.tables;if(a)for(let e=0;e<a.length;e++)if(a[e].id===t)return a[e];return null}(e,r.layerId),t&&(1===m(e)&&(a=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),a&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function y(e,t){var r,a;if(null==(null==(r=e)?void 0:r.layers)||null==(null==(a=e)?void 0:a.tables)){const r=await o(t);(e=e||{}).layers=e.layers||(null==r?void 0:r.layers),e.tables=e.tables||(null==r?void 0:r.tables)}return e}function f(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function m(e){var t,r,a,n;return(null!=(t=null==e||null==(r=e.layers)?void 0:r.length)?t:0)+(null!=(a=null==e||null==(n=e.tables)?void 0:n.length)?a:0)}var v=Object.freeze({__proto__:null,getFirstLayerOrTableId:f,getNumLayersAndTables:m,load:async function(e,r){const a=e.instance.portalItem;return a&&a.id?(await a.load(r),function(e){const r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new t("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}(e),s(e,r)):Promise.resolve()},preprocessFSItemData:y});export{f,m as h,v as l,y as m,o as n};
