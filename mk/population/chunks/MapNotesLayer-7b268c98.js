import{gj as e,gk as t,d8 as r,e2 as o,V as a,W as i,gq as l,hA as n,X as s,dh as y,gS as p,gP as u,gR as d,hB as c,d2 as m,d3 as f,d4 as g,aR as h,c2 as b,go as S,b2 as v,bP as w,c5 as O,t as N,a as J,r as L,cb as T,c4 as x,gu as C,cT as M,by as I,b7 as R,hk as j,e4 as E,e6 as P,cn as D}from"../main.js";import{n as G}from"./objectIdUtils-739bfbe1.js";let _=class extends(e(t(r))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new o,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};a([i({type:l})],_.prototype,"elevationInfo",void 0),a([i(n())],_.prototype,"graphics",void 0),a([i({type:["show","hide"]})],_.prototype,"listMode",void 0),a([i()],_.prototype,"screenSizePerspectiveEnabled",void 0),a([i({readOnly:!0})],_.prototype,"type",void 0),a([i({constructOnly:!0})],_.prototype,"internal",void 0),_=a([s("esri.layers.GraphicsLayer")],_);var F=_;function A(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const z=new y({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),k=new y({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let B=class extends F{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};a([i({readOnly:!0})],B.prototype,"sublayers",null),a([i()],B.prototype,"layer",void 0),a([i({readOnly:!0})],B.prototype,"visibilityMode",void 0),B=a([s("esri.layers.MapNotesLayer.MapNotesSublayer")],B);const W=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new p).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new u).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new d).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new d).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new c).toJSON()}];let $=class extends(e(t(m(f(g(r)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new b(W.map((e=>new B({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!A(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!A(t))return null;const o=t.layers.map((e=>{const t=new S;return t.read(e,r),t}));return new b({items:o})}readLegacyfeatureCollectionJSON(e,t){return A(t)?v(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new w({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:h.WGS84});const r=h.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?w.fromJSON(r).union(e):e}),new w({spatialReference:r}))}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?h.fromJSON(t.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(e,t,r){if(A(t))return null;const o=[];for(let e=0;e<t.layers.length;e++){var a;const{layerDefinition:r,featureSet:i}=t.layers[e],l=null!=(a=r.geometryType)?a:i.geometryType,n=W.find((e=>{var t,o,a;return l===e.geometryTypeJSON&&(null==(t=r.drawingInfo)||null==(o=t.renderer)||null==(a=o.symbol)?void 0:a.type)===e.identifyingSymbol.type}));if(n){const e=new B({id:n.layerId,title:r.name,layer:this,graphics:i.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:o})=>O.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:o})))});o.push(e)}}return new b(o)}writeSublayers(e,t,r,o){const{minScale:a,maxScale:i}=this;if(N(e))return;const l=e.some((e=>e.graphics.length>0));var n;if(!this.capabilities.operations.supportsMapNotesEditing)return void(l&&(null==o||null==(n=o.messages)||n.push(new J("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const s=[];let y=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if(L(e.geometry)){y=e.geometry.spatialReference.toJSON();break e}for(const t of W){const r=e.find((e=>t.layerId===e.id));this._writeMapNoteSublayer(s,r,t,a,i,y,o)}T("featureCollection.layers",s,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=v(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(N(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const o of r.graphics)if(L(o.geometry)){const r=o.geometry;e?R(r.spatialReference,e)||(j(r.spatialReference,e)||E()||await P(),o.geometry=D(r,e)):e=r.spatialReference,t.push(o)}const r=await x(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return N(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,t,r,o,a,i,l){const n=[];if(!N(t)){for(const e of t.graphics)this._writeMapNote(n,e,r.geometryType,l);this._normalizeObjectIds(n,z),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:v(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:o,maxScale:a,objectIdField:"OBJECTID",fields:[z.toJSON(),k.toJSON()],spatialReference:i},featureSet:{features:n,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){if(N(t))return;const{geometry:a,symbol:i,popupTemplate:l}=t;if(N(a))return;var n,s;if(a.type!==r)return void(null==o||null==(n=o.messages)||n.push(new C("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(N(i))return void(null==o||null==(s=o.messages)||s.push(new C("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const y={attributes:{...t.attributes},geometry:a.toJSON(),symbol:i.toJSON()};L(l)&&(y.popupInfo=l.toJSON()),e.push(y)}_normalizeObjectIds(e,t){const r=t.name;let o=G(r,e)+1;const a=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||a.has(e[r]))&&(e[r]=o++),a.add(e[r])}}};a([i({readOnly:!0})],$.prototype,"capabilities",void 0),a([M(["portal-item","web-map"],"capabilities",["layers"])],$.prototype,"readCapabilities",null),a([i({readOnly:!0})],$.prototype,"featureCollections",void 0),a([M(["web-map","portal-item"],"featureCollections",["layers"])],$.prototype,"readFeatureCollections",null),a([i({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],$.prototype,"featureCollectionJSON",void 0),a([M(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],$.prototype,"readLegacyfeatureCollectionJSON",null),a([i({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],$.prototype,"featureCollectionType",void 0),a([i({json:{write:!1}})],$.prototype,"fullExtent",void 0),a([M(["web-map","portal-item"],"fullExtent",["layers"])],$.prototype,"readFullExtent",null),a([i({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],$.prototype,"legendEnabled",void 0),a([i({type:["show","hide"]})],$.prototype,"listMode",void 0),a([i({type:Number,nonNullable:!0,json:{write:!1}})],$.prototype,"minScale",void 0),a([M(["web-map","portal-item"],"minScale",["layers"])],$.prototype,"readMinScale",null),a([i({type:Number,nonNullable:!0,json:{write:!1}})],$.prototype,"maxScale",void 0),a([M(["web-map","portal-item"],"maxScale",["layers"])],$.prototype,"readMaxScale",null),a([i({readOnly:!0})],$.prototype,"multipointLayer",null),a([i({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],$.prototype,"operationalLayerType",void 0),a([i({readOnly:!0})],$.prototype,"pointLayer",null),a([i({readOnly:!0})],$.prototype,"polygonLayer",null),a([i({readOnly:!0})],$.prototype,"polylineLayer",null),a([i({type:h})],$.prototype,"spatialReference",void 0),a([M(["web-map","portal-item"],"spatialReference",["layers"])],$.prototype,"readSpatialReference",null),a([i({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],$.prototype,"sublayers",void 0),a([M("web-map","sublayers",["layers"])],$.prototype,"readSublayers",null),a([I("web-map","sublayers")],$.prototype,"writeSublayers",null),a([i({readOnly:!0})],$.prototype,"textLayer",null),a([i()],$.prototype,"title",void 0),a([i({readOnly:!0,json:{read:!1}})],$.prototype,"type",void 0),$=a([s("esri.layers.MapNotesLayer")],$);var q=$;export default q;
