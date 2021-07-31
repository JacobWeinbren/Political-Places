import{ck as e,a as r}from"../main.js";import{a}from"./lazyLayerLoader-65a4c0c2.js";import{m as t,h as n,f as s,n as c}from"./layersLoader-2963b522.js";function o(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}function l(e){switch(e.type){case"Map Service":return function(e){return c(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}));case"Feature Service":return function(e){return y(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){if(await e.load(),o(e,"Map Notes"))return{className:"MapNotesLayer"};if(o(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===n(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return y(e).then((r=>{if("object"==typeof r){const a={};let t;if(null!=r.id?(a.layerId=r.id,t=`${e.url}/layers/${r.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const a of Object.keys(r))if(-1!==e.typeKeywords.indexOf(a))return{className:r[a]}}return c(t).then((e=>{let r="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:a}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var r,a,t;await e.load();const n=null!=(r=null==(a=e.typeKeywords)?void 0:a.map((e=>e.toLowerCase())))?r:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const s=await e.fetchData(),o=null==s?void 0:s.layerType;return"ArcGISTiledImageServiceLayer"===o?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===o?{className:"ImageryLayer"}:"map"===(null==(t=(await c(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Feed":return{className:"StreamLayer"};default:return Promise.reject(new r("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function i(e){return(0,a[e.className])().then((r=>({constructor:r,properties:e.properties})))}function y(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async r=>"Feature Service"===e.type?u(r=await t(r,e.url)):n(r)>0?u(r):c(e.url).then(u)))}function u(e){return 1===n(e)&&{id:s(e)}}var m=Object.freeze({__proto__:null,fromItem:function(r){return!r.portalItem||r.portalItem instanceof e||(r={...r,portalItem:new e(r.portalItem)}),function(e){return e.load().then(l).then(i)}(r.portalItem).then((e=>{const a={portalItem:r.portalItem,...e.properties},t=e.constructor;return Promise.resolve(new t(a))}))},selectLayerClassPath:l});export{l,m as p,o as t};
