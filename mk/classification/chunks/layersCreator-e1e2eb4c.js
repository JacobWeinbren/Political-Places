import{cf as e,cg as r,ch as a,c2 as t}from"../main.js";import{a as y}from"./lazyLayerLoader-efc5b8e0.js";import{t as i,l as n}from"./portalLayers-5b90b57c.js";import"./layersLoader-b803df23.js";import"./jsonContext-194a8398.js";async function L(r,a,t,y){if(!r.layerType||"ArcGISFeatureLayer"!==r.layerType)return!1;if(r.url)return!1;if(r.featureCollectionType&&r.featureCollectionType===t)return!0;if(r.itemId){const t=new e({id:r.itemId,portal:a});return await t.load(),"Feature Collection"===t.type&&i(t,y)}return!1}async function o(e,a,t){if(!a)return;const y=[];for(const e of a){const r=I(e,t);"GroupLayer"===e.layerType?y.push(M(r,e,t)):y.push(r)}const i=await r(y);for(const r of i)!r.value||t.filter&&!t.filter(r.value)||e.add(r.value)}const c={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},l={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},s={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},u={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function I(e,r){return async function(e,r,t){const y=new e;return y.read(r,t.context),"group"===y.type&&T(r)&&await m(y,r,t.context),await a(y,t.context),y}(await d(e,r),e,r)}async function d(r,a){const t=a.context,i=g(t);let o=r.layerType||r.type;!o&&a&&a.defaultLayerType&&(o=a.defaultLayerType);const c=i[o];let l=c?y[c]:y.UnknownLayer;const s=t&&t.portal;if(f(r)){if(r.itemId){const a=new e({id:r.itemId,portal:s});await a.load();const t=(await n(a)).className||"UnknownLayer";l=y[t]}}else"ArcGISFeatureLayer"===o?await function(e,r){return L(e,r,"notes","Map Notes")}(r,s)?l=y.MapNotesLayer:await function(e,r){return L(e,r,"route","Route Layer")}(r,s)?l=y.RouteLayer:T(r)&&(l=y.GroupLayer):r.wmtsInfo&&r.wmtsInfo.url&&r.wmtsInfo.layerIdentifier?l=y.WMTSLayer:"WFS"===o&&"2.0.0"!==r.wfsInfo.version&&(l=y.UnsupportedLayer);return l()}function T(e){if("ArcGISFeatureLayer"!==e.layerType||f(e))return!1;const r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function f(e){return"Feature Collection"===e.type}function g(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=s;break;case"ground":r=l;break;default:r=c}break;default:switch(e.layerContainerType){case"basemap":r=S;break;case"tables":r=u;break;default:r=p}}return r}async function M(e,r,a){const y=new t,i=o(y,Array.isArray(r.layers)?r.layers:[],a),n=await e;if(await i,"group"===n.type)return n.layers.addMany(y),n}async function m(e,r,a){const t=y.FeatureLayer,i=await t(),n=r.featureCollection,L=n.showLegend,o=n.layers.map((e=>{const r=new i;return r.read(e,a),null!=L&&r.read({showLegend:L},a),r}));e.layers.addMany(o)}export{o as populateOperationalLayers};
