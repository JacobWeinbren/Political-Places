import{C as e,e as t,cx as r,by as n}from"../main.js";import{a}from"./lazyLayerLoader-dd8cb95b.js";import{o as l}from"./jsonContext-a3543387.js";async function o(t){const{data:r}=await e(t,{responseType:"json",query:{f:"json"}});return r}async function s(e,t){const n=e.instance,a=n.portalItem,{url:o,title:s}=a,u=l(a);if("group"===n.type)return n.read({title:s},u),i(n,e);o&&n.read({url:o},u);const c=await d(e,t);return c&&n.read(c,u),n.resourceReferences={portalItem:a,paths:u.readResourcePaths},n.read({title:s},u),r(n,u)}function i(e,r){let n;const l=e.portalItem.type;switch(l){case"Feature Service":case"Feature Collection":n=a.FeatureLayer;break;case"Stream Service":n=a.StreamLayer;break;case"Scene Service":n=a.SceneLayer;break;default:throw new t("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let o;return n().then((e=>(o=e,d(r)))).then((async t=>"Feature Service"===l?(t=await y(t,e.portalItem.url),c(e,o,t)):m(t)>0?c(e,o,t):u(e,o)))}function u(e,t){return e.portalItem.url?o(e.portalItem.url).then((r=>{var n,a;function l(e){return{id:e.id,name:e.name}}r&&c(e,t,{layers:null==(n=r.layers)?void 0:n.map(l),tables:null==(a=r.tables)?void 0:a.map(l)})})):Promise.resolve()}function c(e,t,r){let n=r.layers||[];const a=r.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&a.push(e)})),n=n.filter((e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((n=>{const a=p(e,t,r,n);e.add(a)})),a.reverse().forEach((n=>{const a=p(e,t,r,n);e.tables.add(a)}))}function p(e,t,r,a){const l=new t({portalItem:e.portalItem.clone(),layerId:a.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||n.getDefault()};l.read(a,t);const o=r.showLegend;null!=o&&l.read({showLegend:o},t)}return l}function d(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",t).catch((()=>null)).then((async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(r)){let t,n=!0;return e&&m(e)>0&&(null==r.layerId&&(r.layerId=f(e)),t=function(e,t){const r=e.layers;if(r)for(let e=0;e<r.length;e++)if(r[e].id===t)return r[e];const n=e.tables;if(n)for(let e=0;e<n.length;e++)if(n[e].id===t)return n[e];return null}(e,r.layerId),t&&(1===m(e)&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),n&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function y(e,t){var r,n;if(null==(null==(r=e)?void 0:r.layers)||null==(null==(n=e)?void 0:n.tables)){const r=await o(t);(e=e||{}).layers=e.layers||(null==r?void 0:r.layers),e.tables=e.tables||(null==r?void 0:r.tables)}return e}function f(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function m(e){var t,r,n,a;return(null!=(t=null==e||null==(r=e.layers)?void 0:r.length)?t:0)+(null!=(n=null==e||null==(a=e.tables)?void 0:a.length)?n:0)}var v=Object.freeze({__proto__:null,getFirstLayerOrTableId:f,getNumLayersAndTables:m,load:async function(e,r){const n=e.instance.portalItem;return n&&n.id?(await n.load(r),function(e){const r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new t("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}(e),s(e,r)):Promise.resolve()},preprocessFSItemData:y});export{f,m as h,v as l,y as m,o as n};
