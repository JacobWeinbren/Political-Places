import{r as e,cP as r,t as a,a as t,cQ as n,cR as l,cj as s,L as o}from"../main.js";import{a as u}from"./lazyLayerLoader-68a71f1d.js";async function i(e){var r;const a=null==(r=e.properties)?void 0:r.customParameters,t=await d(e.url,a),n={...e.properties,url:e.url};if(!t.sublayerIds)return null!=t.layerOrTableId&&(n.layerId=t.layerOrTableId,n.sourceJSON=t.sourceJSON),new t.Constructor(n);const l=new((await import("../main.js").then((function(e){return e.iG}))).default)({title:t.parsedUrl.title});return c(l,t,n),l}function y(e,r){return e?e.find((e=>e.id===r)):null}function c(r,a,t){function n(r,n){const l={...t,layerId:r,sublayerTitleMode:"service-name"};return e(n)&&(l.sourceJSON=n),new a.Constructor(l)}a.sublayerIds.forEach((e=>{const t=n(e,y(a.sublayerInfos,e));r.add(t)})),a.tableIds.forEach((e=>{const t=n(e,y(a.tableInfos,e));r.tables.add(t)}))}async function d(e,n){let l=r(e);if(a(l)&&(l=await f(e,n)),a(l))throw new t("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:s,sublayer:o}=l;let i;const y={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(s){case"MapServer":i=null!=o?"FeatureLayer":async function(e,r){return(await S(e,r)).tileInfo}(e,n).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":i=S(e,n).then((e=>{const r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":i=S(l.url.path,n).then((e=>{const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){const a=e.layers[0].layerType;if(null!=r[a])return r[a]}return"SceneLayer"}));break;default:i=y[s]}const c="FeatureServer"===s,d={parsedUrl:l,Constructor:null,layerOrTableId:c?o:null,sublayerIds:null,tableIds:null},p=await i;if({FeatureLayer:!0,SceneLayer:!0}[p]&&null==o){const r=await v(e,s,n);if(c&&(d.sublayerInfos=r.layerInfos,d.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length)d.sublayerIds=r.layerIds,d.tableIds=r.tableIds;else if(c){var I,b;d.layerOrTableId=null!=(I=r.layerIds[0])?I:r.tableIds[0],d.sourceJSON=null!=(b=r.layerInfos[0])?b:r.tableInfos[0]}}return d.Constructor=await async function(e){return(0,u[e])()}(p),d}async function f(r,a){var t;const o=await S(r,a);let u=null,i=null;const y=o.type;if("Feature Layer"===y||"Table"===y?(u="FeatureServer",i=o.id):"indexedVector"===y?u="VectorTileServer":o.hasOwnProperty("mapName")?u="MapServer":o.hasOwnProperty("bandCount")&&o.hasOwnProperty("pixelSizeX")?u="ImageServer":o.hasOwnProperty("maxRecordCount")&&o.hasOwnProperty("allowGeometryUpdates")?u="FeatureServer":o.hasOwnProperty("streamUrls")?u="StreamServer":p(o)?(u="SceneServer",i=o.id):o.hasOwnProperty("layers")&&p(null==(t=o.layers)?void 0:t[0])&&(u="SceneServer"),!u)return null;const c=null!=i?n(r):null;return{title:e(c)&&o.name||l(r),serverType:u,sublayer:i,url:{path:e(c)?c.serviceUrl:s(r).path}}}function p(e){return(null==e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function v(e,r,a){var t,n;let l,s=!1;if("FeatureServer"===r){const r=await async function(e,r){var a,t;let n=await S(e,r);n=n||{},n.layers=(null==(a=n.layers)?void 0:a.filter(I))||[];const l={serviceJSON:n};if(n.currentVersion<10.5)return l;const s=await S(e+"/layers",r);return l.layersJSON={layers:(null==s||null==(t=s.layers)?void 0:t.filter(I))||[],tables:(null==s?void 0:s.tables)||[]},l}(e,a);s=!!r.layersJSON,l=r.layersJSON||r.serviceJSON}else l=await S(e,a);const o=null==(t=l)?void 0:t.layers,u=null==(n=l)?void 0:n.tables;return{layerIds:(null==o?void 0:o.map((e=>e.id)).reverse())||[],tableIds:(null==u?void 0:u.map((e=>e.id)).reverse())||[],layerInfos:s?o:[],tableInfos:s?u:[]}}function I(e){return!e.type||"Feature Layer"===e.type}async function S(e,r){return(await o(e,{responseType:"json",query:{f:"json",...r}})).data}export{i as fromUrl};
