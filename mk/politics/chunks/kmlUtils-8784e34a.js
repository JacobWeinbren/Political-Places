import{L as e,aS as t,b3 as o,cJ as r,eg as n,l as s,cZ as a,e5 as i,e4 as f,eh as l}from"../main.js";import{k as u,a as y,D as p,f as c}from"./aaBoundingBox-bb542b36.js";const m={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const t=e.folders||[],r=t.slice(),n=new Map,s=new Map,a=new Map,i=new Map,f=new Map,l={esriGeometryPoint:s,esriGeometryPolyline:a,esriGeometryPolygon:i};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=o(e);t.featureSet.features=[];const r=e.featureSet.geometryType;n.set(r,t);const f=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?b(s,f,e.featureSet.features):"esriGeometryPolyline"===r?b(a,f,e.featureSet.features):"esriGeometryPolygon"===r&&b(i,f,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{f.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((o=>{const n=function(e,t,o){const r=function(e,t){let o;return t.some((t=>t.id===e&&(o=t,!0))),o}(e,o);return r&&(r.parentFolderId=t,r.networkLink=r),r}(o,t.id,e.networkLinks);n&&r.push(n)}))})),r.forEach((e=>{e.featureInfos&&(e.points=o(n.get("esriGeometryPoint")),e.polylines=o(n.get("esriGeometryPolyline")),e.polygons=o(n.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map((t=>{switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const o=l[t.type].get(t.id);o&&e[m[t.type]].featureSet.features.push(o);break}case"GroundOverlay":{const o=f.get(t.id);o&&e.mapImages.push(o);break}}})),e.fullExtent=G([e]))}));const u=G(r);return{folders:t,sublayers:r,extent:u}}function g(t,o,a,i){const f=r&&r.findCredential(t);t=n(t,{token:f&&f.token});const l=s.kmlServiceUrl;return e(l,{query:{url:t,model:"simple",folders:"",refresh:0!==a||void 0,outSR:JSON.stringify(o)},responseType:"json",signal:i})}function S(e,t,o=null,r=[]){const n=[],s={},a=t.sublayers,i=t.folders.map((e=>e.id));return a.forEach((t=>{const a=new e;if(o?a.read(t,o):a.read(t),r.length&&i.indexOf(a.id)>-1&&(a.visible=-1!==r.indexOf(a.id)),s[t.id]=a,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=s[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(a)}else n.unshift(a)})),n}function b(e,t,o){o.forEach((o=>{e.set(o.attributes[t],o)}))}async function h(e){const t=a.fromJSON(e.featureSet).features,o=e.layerDefinition,r=i(o.drawingInfo.renderer),n=f.fromJSON(e.popupInfo),s=[];for(const e of t){const t=await r.getSymbolAsync(e);e.symbol=t,e.popupTemplate=n,e.visible=!0,s.push(e)}return s}function G(e){const o=y(),r=y(p);for(const t of e){if(t.polygons&&t.polygons.featureSet&&t.polygons.featureSet.features)for(const e of t.polygons.featureSet.features)l(o,e.geometry),c(r,o);if(t.polylines&&t.polylines.featureSet&&t.polylines.featureSet.features)for(const e of t.polylines.featureSet.features)l(o,e.geometry),c(r,o);if(t.points&&t.points.featureSet&&t.points.featureSet.features)for(const e of t.points.featureSet.features)l(o,e.geometry),c(r,o);if(t.mapImages)for(const e of t.mapImages)l(o,e.extent),c(r,o)}return u(r,p)?null:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:t.WGS84}}export{S,h as b,d,g,G as j};
