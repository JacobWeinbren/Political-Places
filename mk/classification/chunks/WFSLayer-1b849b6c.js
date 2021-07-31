import{S as e,c6 as t,dU as r,r as i,cU as s,bP as o,a,bk as n,g9 as l,cg as p,c$ as u,s as d,F as c,V as y,W as f,X as h,gV as m,gj as g,gU as w,gl as v,gk as F,d2 as b,d3 as I,d4 as O,d8 as R,aR as S,hA as j,hB as x,hP as P,hQ as q,dh as T,cb as U,cj as _,gp as E,dn as C,gq as N,hC as D,hD as J,hE as k,cT as W,by as X,hT as Y,hG as Q,hs as L,hF as V,gJ as G,gs as B,d$ as z,ht as M,gt as $}from"../main.js";import{a as A,u as H}from"./clientSideDefaults-cd15a431.js";import{D as K,X as Z,_ as ee,W as te,v as re}from"./wfsUtils-6435d85a.js";import"./QueryEngineCapabilities-e0f82f0e.js";import"./_rollupPluginBabelHelpers-480b9bd2.js";import"./geojson-933218ad.js";let ie=class extends(e(t)){constructor(){super(...arguments),this.capabilities=A(!1,!1),this.type="wfs",this._updateCustomParameters=r((()=>{var e;const t=this.layer.customParameters;return null==(e=this._connection)?void 0:e.invoke("setCustomParameters",t)}))}load(e){var t;const r=null!=(t=i(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return s.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:r.count,extent:o.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async refresh(e={}){await this.load(e);const{extent:t}=await this._connection.invoke("refresh",void 0,e);return this.sourceJSON.extent=t,{extent:t}}async _createLoadOptions(e){const{url:t,customParameters:r,name:i,namespaceUri:s,spatialReference:o,fields:p,geometryType:u,swapXY:d}=this.layer;if(!t)throw new a("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities=this.wfsCapabilities||await K(t,{customParameters:r,...e});const c=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e]))?await Z(this.wfsCapabilities,i,s,{spatialReference:o,customParameters:r,signal:null==e?void 0:e.signal}):{...ee(p),geometryType:u,name:i,namespaceUri:s,spatialReference:o,swapXY:d},y=n(te(this.wfsCapabilities.readFeatureTypes(),c.name,c.namespaceUri)),f=l.toJSON(c.geometryType);return{customParameters:r,featureType:y,fields:c.fields.map((e=>e.toJSON())),geometryField:c.geometryField,geometryType:f,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:c.objectIdField,spatialReference:c.spatialReference.toJSON(),swapXY:c.swapXY}}async _startWorker(e){const[t,r]=await p([this._createLoadOptions(e),u("WFSSourceWorker",{...e,strategy:d("feature-layers-workers")?"dedicated":"local"})]),i=t.error||r.error||null,s=r.value||null;if(i)throw s&&s.close(),i;const o=t.value;this._connection=r.value;const{extent:a}=await this._connection.invoke("load",o,e);this.sourceJSON={extent:a,fields:o.fields,geometryType:o.geometryType,objectIdField:o.objectIdField,geometryField:o.geometryField,drawingInfo:H(o.geometryType),name:o.featureType.title,wfsInfo:{name:o.featureType.name,featureUrl:o.getFeatureUrl,maxFeatures:3e3,swapXY:o.swapXY,supportedSpatialReferences:o.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:o.featureType.namespaceUri}},this.handles.add(c(this.layer,"customParameters",(()=>this._updateCustomParameters().catch((()=>{})))))}};y([f()],ie.prototype,"capabilities",void 0),y([f({constructOnly:!0})],ie.prototype,"layer",void 0),y([f()],ie.prototype,"sourceJSON",void 0),y([f()],ie.prototype,"type",void 0),y([f()],ie.prototype,"wfsCapabilities",void 0),ie=y([h("esri.layers.graphics.sources.WFSSource")],ie);var se,oe=ie;const ae=$();let ne=se=class extends(m(g(w(v(F(b(I(O(R))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new oe({layer:this}),this.spatialReference=S.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:t,fields:r,geometryField:i,geometryType:s,name:o,namespaceUri:a,objectIdField:n,spatialReference:l,swapXY:p,url:u,wfsCapabilities:d}=e;return new se({customParameters:t,fields:r,geometryField:i,geometryType:s,name:o,namespaceUri:a,objectIdField:n,spatialReference:l,swapXY:p,url:u,wfsCapabilities:d})}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),j(this.renderer,this.fieldsIndex),x(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return P(e,t)}writeWebSceneFeatureReduction(e,t,r,i){q(e,t,"layerDefinition.featureReduction",i)}writeFields(e,t,r){const i=e.filter((e=>e.name!==re));this.geometryField&&i.unshift(new T({name:this.geometryField,alias:this.geometryField,type:"geometry"})),U(r,i.map((e=>e.toJSON())),t)}get parsedUrl(){return this.url?_(this.url):null}set renderer(e){j(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return E(this,e)}createQuery(){const e=new C;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:r}=this;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}getFieldDomain(e,t){var r;return null==(r=this.getField(e))?void 0:r.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(C.from(e)||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(C.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(C.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(C.from(e)||this.createQuery(),t)))}refresh(){this.source.refresh().then((e=>{this.read(e,{origin:"service"}),super.refresh()}))}};y([f({readOnly:!0,aliasOf:"source.capabilities"})],ne.prototype,"capabilities",void 0),y([f({type:String})],ne.prototype,"copyright",void 0),y([f({readOnly:!0})],ne.prototype,"createQueryVersion",null),y([f({json:{read:{source:"wfsInfo.customParameters"},write:{target:"wfsInfo.customParameters",ignoreOrigin:!0}}})],ne.prototype,"customParameters",void 0),y([f({readOnly:!0})],ne.prototype,"defaultPopupTemplate",null),y([f({type:String})],ne.prototype,"definitionExpression",void 0),y([f({type:String})],ne.prototype,"displayField",void 0),y([f({type:N})],ne.prototype,"elevationInfo",void 0),y([f({types:{key:"type",base:D,typeMap:{selection:J,cluster:k}},json:{write:{target:"layerDefinition.featureReduction"}}})],ne.prototype,"featureReduction",void 0),y([W("featureReduction",["layerDefinition.featureReduction"])],ne.prototype,"readFeatureReduction",null),y([X("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:Y}})],ne.prototype,"writeWebSceneFeatureReduction",null),y([f({readOnly:!0,json:{read:{source:"wfsInfo.featureUrl"},write:{target:"wfsInfo.featureUrl",ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"featureUrl",void 0),y([f({type:[T],json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields",ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"fields"}}}}})],ne.prototype,"fields",void 0),y([X("fields")],ne.prototype,"writeFields",null),y([f(ae.fieldsIndex)],ne.prototype,"fieldsIndex",void 0),y([f({type:o,json:{origins:{service:{read:{source:"extent"}}}}})],ne.prototype,"fullExtent",void 0),y([f()],ne.prototype,"geometryField",void 0),y([f({type:l.apiValues,json:{read:{source:"layerDefinition.geometryType",reader:l.read},write:{target:"layerDefinition.geometryType",writer:l.write,ignoreOrigin:!0},origins:{service:{read:l.read}}}})],ne.prototype,"geometryType",void 0),y([f({type:String})],ne.prototype,"id",void 0),y([f(Q)],ne.prototype,"labelsVisible",void 0),y([f({type:[L],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:V},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],ne.prototype,"labelingInfo",void 0),y([f(G)],ne.prototype,"legendEnabled",void 0),y([f({type:["show","hide"]})],ne.prototype,"listMode",void 0),y([f({type:String})],ne.prototype,"objectIdField",void 0),y([f({type:["WFS"]})],ne.prototype,"operationalLayerType",void 0),y([f({json:{read:{source:"wfsInfo.maxFeatures"},write:{target:"wfsInfo.maxFeatures",ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"maxFeatures",void 0),y([f({readOnly:!0,json:{read:{source:"mode"},write:{target:"mode",ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"mode",void 0),y([f({json:{read:{source:"wfsInfo.name"},write:{target:"wfsInfo.name",ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"name",void 0),y([f({json:{read:{source:"wfsInfo.wfsNamespace"},write:{target:"wfsInfo.wfsNamespace",ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"namespaceUri",void 0),y([f(ae.outFields)],ne.prototype,"outFields",void 0),y([f({readOnly:!0})],ne.prototype,"parsedUrl",null),y([f(B)],ne.prototype,"popupEnabled",void 0),y([f({type:z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],ne.prototype,"popupTemplate",void 0),y([f({types:M,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},read:{source:"layerDefinition.drawingInfo.renderer"},write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],ne.prototype,"renderer",null),y([f({type:Boolean})],ne.prototype,"screenSizePerspectiveEnabled",void 0),y([f({readOnly:!0})],ne.prototype,"source",void 0),y([f({type:S,json:{read:{source:"layerDefinition.spatialReference"},write:{target:"layerDefinition.spatialReference",ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"extent.spatialReference"}}}}})],ne.prototype,"spatialReference",void 0),y([f({readOnly:!0,json:{read:{source:"wfsInfo.supportedSpatialReferences"},write:{target:"wfsInfo.supportedSpatialReferences",ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"spatialReferences",void 0),y([f({json:{read:{source:"wfsInfo.swapXY"},write:{target:"wfsInfo.swapXY",ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"swapXY",void 0),y([f({json:{read:{source:"title"},write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"name"}}}}})],ne.prototype,"title",void 0),y([f({json:{read:!1},readOnly:!0})],ne.prototype,"type",void 0),y([f({type:String,json:{write:!0}})],ne.prototype,"url",void 0),y([f({readOnly:!0,json:{read:{source:"wfsInfo.version"},write:{target:"wfsInfo.version",ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"version",void 0),y([f({aliasOf:"source.wfsCapabilities"})],ne.prototype,"wfsCapabilities",void 0),ne=se=y([h("esri.layers.WFSLayer")],ne);var le=ne;export{le as default};
