import{w as e,hm as t,c6 as s,ho as r,hp as l,r as i,bP as a,df as o,c2 as n,V as u,W as y,dc as h,hq as p,cT as d,X as b,gj as c,gl as v,gk as f,d2 as g,d3 as m,d4 as S,d8 as w,gz as E,aR as _,cR as x,cq as k,by as L,d7 as O}from"../main.js";import{j,S as F,g as M,d as R}from"./kmlUtils-6e65ba8a.js";import"./aaBoundingBox-9278e5ff.js";var I;let P=I=class extends(e.EventedMixin(t(s))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){r(this,"networkLink").then((()=>l(this,"visible"))).then((()=>this.load()))}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=i(e)?e.signal:null,s=this._fetchService(this._get("networkLink").href,t).then((e=>{const t=j(e.sublayers);this.fullExtent=a.fromJSON(t),this.sourceJSON=e;const s=o(n.ofType(I),F(I,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(s),Promise.resolve(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]),this._set("sublayers",e)}castSublayers(e){return o(n.ofType(I),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}_fetchService(e,t){return M(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>R(e.data)))}};u([y()],P.prototype,"description",void 0),u([y()],P.prototype,"id",void 0),u([y({readOnly:!0,value:null})],P.prototype,"networkLink",void 0),u([y({json:{write:{allowNull:!0}}})],P.prototype,"parent",void 0),u([y({value:null,json:{write:{allowNull:!0}}})],P.prototype,"sublayers",null),u([h("sublayers")],P.prototype,"castSublayers",null),u([y({value:null,json:{read:{source:"name",reader:e=>p(e)}}})],P.prototype,"title",void 0),u([y({value:!0})],P.prototype,"visible",null),u([d("visible",["visibility"])],P.prototype,"readVisible",null),u([y()],P.prototype,"sourceJSON",void 0),u([y({value:null})],P.prototype,"layer",null),u([y({type:a})],P.prototype,"fullExtent",void 0),P=I=u([b("esri.layers.support.KMLSublayer")],P);var T=P;const C=["kml","xml"];let K=class extends(c(v(f(g(m(S(w))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new E({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=_.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,s){return F(T,t,s,this._visibleFolders)}writeSublayers(e,t){const s=[],r=e.toArray();for(;r.length;){const e=r[0];e.networkLink||(e.visible&&s.push(e.id),e.sublayers&&r.push(...e.sublayers.toArray())),r.shift()}t.visibleFolders=s}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?x(this.url,C)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],s=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(s))};return e&&e.forEach(s),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=i(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(k).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:M(this.url,this.outSpatialReference,this.refreshInterval,e))),s=R(t.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const t=s=>{if(s.sublayers)for(const r of s.sublayers.items)t(r),r.visible&&r.fullExtent&&(e?e.union(r.fullExtent):e=r.fullExtent.clone())};return t(this),e}};u([y({readOnly:!0})],K.prototype,"allSublayers",void 0),u([y({type:_})],K.prototype,"outSpatialReference",void 0),u([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],K.prototype,"path",void 0),u([y({readOnly:!0,json:{read:!1,write:!1}})],K.prototype,"legendEnabled",void 0),u([y({type:["show","hide","hide-children"]})],K.prototype,"listMode",void 0),u([y({type:["KML"]})],K.prototype,"operationalLayerType",void 0),u([y({})],K.prototype,"resourceInfo",void 0),u([y({type:n.ofType(T),json:{write:{ignoreOrigin:!0}}})],K.prototype,"sublayers",void 0),u([d(["web-map","portal-item"],"sublayers",["visibleFolders"])],K.prototype,"readSublayersFromItemOrWebMap",null),u([d("service","sublayers",["sublayers"])],K.prototype,"readSublayers",null),u([L("sublayers")],K.prototype,"writeSublayers",null),u([y({readOnly:!0,json:{read:!1}})],K.prototype,"type",void 0),u([y({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],K.prototype,"title",null),u([y(O)],K.prototype,"url",void 0),u([y({readOnly:!0})],K.prototype,"visibleSublayers",null),u([y({type:a})],K.prototype,"extent",void 0),u([y()],K.prototype,"fullExtent",null),K=u([b("esri.layers.KMLLayer")],K);var N=K;export default N;
