import{iv as e,iw as t,er as r,dm as o,Z as i,_ as a,iC as l,j_ as n,a0 as s,ez as y,j2 as p,i$ as u,j1 as d,j$ as c,el as m,em as f,en as g,aT as h,ch as b,iA as S,b3 as v,cp as w,ck as O,t as N,e as J,r as L,cs as T,cj as C,iG as x,ed as M,bJ as I,bm as j,dt as R,dr as E,ds as D,cC as _}from"../main.js";import{n as G}from"./objectIdUtils-06678159.js";let P=class extends(e(t(r))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new o,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};i([a({type:l})],P.prototype,"elevationInfo",void 0),i([a(n(o,"graphics"))],P.prototype,"graphics",void 0),i([a({type:["show","hide"]})],P.prototype,"listMode",void 0),i([a()],P.prototype,"screenSizePerspectiveEnabled",void 0),i([a({readOnly:!0})],P.prototype,"type",void 0),i([a({constructOnly:!0})],P.prototype,"internal",void 0),P=i([s("esri.layers.GraphicsLayer")],P);const F=P;function z(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const A=new y({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),$=new y({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let k=class extends F{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};i([a({readOnly:!0})],k.prototype,"sublayers",null),i([a()],k.prototype,"layer",void 0),i([a({readOnly:!0})],k.prototype,"visibilityMode",void 0),k=i([s("esri.layers.MapNotesLayer.MapNotesSublayer")],k);const B=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new p).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new u).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new d).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new d).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new c).toJSON()}];let W=class extends(e(t(m(f(g(r)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new b(B.map((e=>new k({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!z(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!z(t))return null;const o=t.layers.map((e=>{const t=new S;return t.read(e,r),t}));return new b({items:o})}readLegacyfeatureCollectionJSON(e,t){return z(t)?v(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every((e=>!e.layerDefinition.extent)))return new w({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:h.WGS84});const r=h.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?w.fromJSON(r).union(e):e}),new w({spatialReference:r}))}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?h.fromJSON(t.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(e,t,r){if(z(t))return null;const o=[];for(let e=0;e<t.layers.length;e++){var i;const{layerDefinition:r,featureSet:a}=t.layers[e],l=null!=(i=r.geometryType)?i:a.geometryType,n=B.find((e=>{var t,o,i;return l===e.geometryTypeJSON&&(null==(t=r.drawingInfo)||null==(o=t.renderer)||null==(i=o.symbol)?void 0:i.type)===e.identifyingSymbol.type}));if(n){const e=new k({id:n.layerId,title:r.name,layer:this,graphics:a.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:o})=>O.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:o})))});o.push(e)}}return new b(o)}writeSublayers(e,t,r,o){const{minScale:i,maxScale:a}=this;if(N(e))return;const l=e.some((e=>e.graphics.length>0));var n;if(!this.capabilities.operations.supportsMapNotesEditing)return void(l&&(null==o||null==(n=o.messages)||n.push(new J("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const s=[];let y=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if(L(e.geometry)){y=e.geometry.spatialReference.toJSON();break e}for(const t of B){const r=e.find((e=>t.layerId===e.id));this._writeMapNoteSublayer(s,r,t,i,a,y,o)}T("featureCollection.layers",s,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=v(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(N(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const o of r.graphics)if(L(o.geometry)){const r=o.geometry;e?j(r.spatialReference,e)||(R(r.spatialReference,e)||E()||await D(),o.geometry=_(r,e)):e=r.spatialReference,t.push(o)}const r=await C(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return N(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,t,r,o,i,a,l){const n=[];if(!N(t)){for(const e of t.graphics)this._writeMapNote(n,e,r.geometryType,l);this._normalizeObjectIds(n,A),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:v(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:o,maxScale:i,objectIdField:"OBJECTID",fields:[A.toJSON(),$.toJSON()],spatialReference:a},featureSet:{features:n,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){if(N(t))return;const{geometry:i,symbol:a,popupTemplate:l}=t;if(N(i))return;var n,s;if(i.type!==r)return void(null==o||null==(n=o.messages)||n.push(new x("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(N(a))return void(null==o||null==(s=o.messages)||s.push(new x("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const y={attributes:{...t.attributes},geometry:i.toJSON(),symbol:a.toJSON()};L(l)&&(y.popupInfo=l.toJSON()),e.push(y)}_normalizeObjectIds(e,t){const r=t.name;let o=G(r,e)+1;const i=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r])}}};i([a({readOnly:!0})],W.prototype,"capabilities",void 0),i([M(["portal-item","web-map"],"capabilities",["layers"])],W.prototype,"readCapabilities",null),i([a({readOnly:!0})],W.prototype,"featureCollections",void 0),i([M(["web-map","portal-item"],"featureCollections",["layers"])],W.prototype,"readFeatureCollections",null),i([a({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],W.prototype,"featureCollectionJSON",void 0),i([M(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],W.prototype,"readLegacyfeatureCollectionJSON",null),i([a({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],W.prototype,"featureCollectionType",void 0),i([a({json:{write:!1}})],W.prototype,"fullExtent",void 0),i([M(["web-map","portal-item"],"fullExtent",["layers"])],W.prototype,"readFullExtent",null),i([a({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],W.prototype,"legendEnabled",void 0),i([a({type:["show","hide"]})],W.prototype,"listMode",void 0),i([a({type:Number,nonNullable:!0,json:{write:!1}})],W.prototype,"minScale",void 0),i([M(["web-map","portal-item"],"minScale",["layers"])],W.prototype,"readMinScale",null),i([a({type:Number,nonNullable:!0,json:{write:!1}})],W.prototype,"maxScale",void 0),i([M(["web-map","portal-item"],"maxScale",["layers"])],W.prototype,"readMaxScale",null),i([a({readOnly:!0})],W.prototype,"multipointLayer",null),i([a({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],W.prototype,"operationalLayerType",void 0),i([a({readOnly:!0})],W.prototype,"pointLayer",null),i([a({readOnly:!0})],W.prototype,"polygonLayer",null),i([a({readOnly:!0})],W.prototype,"polylineLayer",null),i([a({type:h})],W.prototype,"spatialReference",void 0),i([M(["web-map","portal-item"],"spatialReference",["layers"])],W.prototype,"readSpatialReference",null),i([a({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],W.prototype,"sublayers",void 0),i([M("web-map","sublayers",["layers"])],W.prototype,"readSublayers",null),i([I("web-map","sublayers")],W.prototype,"writeSublayers",null),i([a({readOnly:!0})],W.prototype,"textLayer",null),i([a()],W.prototype,"title",void 0),i([a({readOnly:!0,json:{read:!1}})],W.prototype,"type",void 0),W=i([s("esri.layers.MapNotesLayer")],W);const U=W;export{U as default};