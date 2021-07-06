import{gj as e,gl as t,cz as o,cA as r,gk as i,cB as s,cG as l,d4 as a,r as n,ce as p,L as y,l as c,V as d,W as u,cj as S,gD as h,gN as g,cF as v,X as m,gO as f,gP as b,gQ as C,gR as R,gS as j}from"../main.js";const F=["atom","xml"],x={base:f,key:"type",typeMap:{"simple-line":b},errorContext:"symbol"},k={base:f,key:"type",typeMap:{"picture-marker":C,"simple-marker":R},errorContext:"symbol"},w={base:f,key:"type",typeMap:{"simple-fill":j},errorContext:"symbol"};let O=class extends(e(t(o(r(i(s(l))))))){constructor(...e){super(...e),this.description=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.outSpatialReference=null,this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?a(this.url,F)||"GeoRSS":e||""}set title(e){this._set("title",e)}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}load(e){const t=n(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(p).then((()=>this._fetchService(t)))),Promise.resolve(this)}async _fetchService(e){const{data:t}=await y(c.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(t,{origin:"service"})}};d([u()],O.prototype,"description",void 0),d([u({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],O.prototype,"title",null),d([u()],O.prototype,"featureCollections",void 0),d([S("service","featureCollections",["featureCollection.layers"])],O.prototype,"readFeatureCollections",null),d([u(h)],O.prototype,"id",void 0),d([u(g)],O.prototype,"legendEnabled",void 0),d([u({types:x,json:{write:!0}})],O.prototype,"lineSymbol",void 0),d([u({type:["show","hide"]})],O.prototype,"listMode",void 0),d([u({types:k,json:{write:!0}})],O.prototype,"pointSymbol",void 0),d([u({types:w,json:{write:!0}})],O.prototype,"polygonSymbol",void 0),d([u({type:["GeoRSS"]})],O.prototype,"operationalLayerType",void 0),d([u()],O.prototype,"outSpatialReference",void 0),d([u(v)],O.prototype,"url",void 0),d([u({readOnly:!0,json:{read:!1},value:"geo-rss"})],O.prototype,"type",void 0),O=d([m("esri.layers.GeoRSSLayer")],O);var G=O;export default G;
