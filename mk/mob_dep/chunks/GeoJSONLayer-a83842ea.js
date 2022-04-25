import{s as e,Z as t,_ as i,a0 as s,cj as r,ck as o,r as n,d9 as a,cn as l,e as u,t as d,aB as p,cS as c,d as h,g_ as y,iX as f,iY as m,iZ as g,ip as v,i_ as b,iq as O,ir as S,ee as I,eg as j,ek as E,aV as F,i$ as x,j0 as _,bB as w,iw as J,c$ as N,iJ as R,j1 as q,es as P,iK as T,j2 as k,j3 as D,j4 as G,iR as Q,j5 as Z,iz as z,de as C,j6 as L,iy as V,j7 as B,j8 as A,j9 as U,ej as W,iA as $}from"../main.js";import{c as M}from"./clientSideDefaults-be1e4608.js";import"./QueryEngineCapabilities-ec743cd2.js";const K=e.getLogger("esri.layers.graphics.sources.GeoJSONSource");let X=class extends r{constructor(){super(...arguments),this.type="geojson",this.refresh=o((async e=>{await this.load();const{extent:t,timeExtent:i}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,i&&(this.sourceJSON.timeInfo.timeExtent=[i.start,i.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=n(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>a.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:l.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new u("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,i=[],s=[],r=[];if(e.addFeatures)for(const t of e.addFeatures)i.push(this._serializeFeature(t));if(e.deleteFeatures)for(const i of e.deleteFeatures)"objectId"in i&&null!=i.objectId?s.push(i.objectId):"attributes"in i&&null!=i.attributes[t]&&s.push(i.attributes[t]);if(e.updateFeatures)for(const t of e.updateFeatures)r.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:i,updates:r,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:i})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(i))))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new u("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,i=this._geometryForSerialization(e);return i?{geometry:i.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return d(t)?null:"mesh"===t.type||"extent"===t.type?p.fromExtent(t.extent):t}async _startWorker(e){this._connection=await c("GeoJSONSourceWorker",{strategy:h("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:i,hasZ:s,geometryType:r,objectIdField:o,url:n,timeInfo:a,customParameters:l}=this.layer,u="defaults"===this.layer.originOf("spatialReference"),d={url:n,customParameters:l,fields:t&&t.map((e=>e.toJSON())),geometryType:y.toJSON(r),hasZ:s,objectIdField:o,timeInfo:a?a.toJSON():null,spatialReference:u?null:i&&i.toJSON()},p=await this._connection.invoke("load",d,{signal:e});for(const e of p.warnings)K.warn(e.message,{layer:this.layer,warning:e});p.featureErrors.length&&K.warn(`Encountered ${p.featureErrors.length} validation errors while loading features`,p.featureErrors),this.sourceJSON=p.layerDefinition,this.capabilities=M(this.sourceJSON.hasZ,!0)}};t([i()],X.prototype,"capabilities",void 0),t([i()],X.prototype,"type",void 0),t([i({constructOnly:!0})],X.prototype,"layer",void 0),t([i()],X.prototype,"sourceJSON",void 0),X=t([s("esri.layers.graphics.sources.GeoJSONSource")],X);const Y=X,H=$();let ee=class extends(f(m(g(v(b(O(S(I(j(E)))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new Y({layer:this}),this.spatialReference=F.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.source.load(e).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),x(this.renderer,this.fieldsIndex),_(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?w(this.url):null}set renderer(e){x(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=w(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const i=await import("./editingSupport-cf932d11.js");await this.load();const s=await i.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),s}on(e,t){return super.on(e,t)}createPopupTemplate(e){return J(this,e)}createQuery(){const e=new N,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:i,timeExtent:s}=this;return e.timeExtent=null!=i&&null!=s?s.offset(-i.value,i.unit):s||null,e}getFieldDomain(e,t){let i,s=!1;const r=t&&t.feature,o=r&&r.attributes,n=this.typeIdField&&o&&o[this.typeIdField];return null!=n&&this.types&&(s=this.types.some((t=>t.id==n&&(i=t.domains&&t.domains[e],i&&"inherited"===i.type&&(i=this._getLayerDomain(e)),!0)))),s||i||(i=this._getLayerDomain(e)),i}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(N.from(e)||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(N.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(N.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(N.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return n(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((i=>(i.name===e&&(t=i.domain),!!t))),t}};t([i({readOnly:!0,json:{read:!1,write:!1}})],ee.prototype,"capabilities",null),t([i({type:String})],ee.prototype,"copyright",void 0),t([i({readOnly:!0})],ee.prototype,"createQueryVersion",null),t([i({readOnly:!0})],ee.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ee.prototype,"definitionExpression",void 0),t([i({type:String})],ee.prototype,"displayField",void 0),t([i({type:Boolean})],ee.prototype,"editingEnabled",void 0),t([i(R)],ee.prototype,"elevationInfo",void 0),t([i(q)],ee.prototype,"featureReduction",void 0),t([i({type:[P],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],ee.prototype,"fields",void 0),t([i(H.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),t([i({type:l,json:{name:"extent"}})],ee.prototype,"fullExtent",void 0),t([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:y.read}}})],ee.prototype,"geometryType",void 0),t([i({type:Boolean})],ee.prototype,"hasZ",void 0),t([i(T)],ee.prototype,"id",void 0),t([i({type:Boolean,readOnly:!0})],ee.prototype,"isTable",null),t([i(k)],ee.prototype,"labelsVisible",void 0),t([i({type:[D],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:G},write:!0}})],ee.prototype,"labelingInfo",void 0),t([i(Q)],ee.prototype,"legendEnabled",void 0),t([i({type:["show","hide"]})],ee.prototype,"listMode",void 0),t([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],ee.prototype,"objectIdField",void 0),t([i(Z)],ee.prototype,"opacity",void 0),t([i({type:["GeoJSON"]})],ee.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],ee.prototype,"parsedUrl",null),t([i(z)],ee.prototype,"popupEnabled",void 0),t([i({type:C,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),t([i({types:L,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:V}}}})],ee.prototype,"renderer",null),t([i(B)],ee.prototype,"screenSizePerspectiveEnabled",void 0),t([i({readOnly:!0})],ee.prototype,"source",void 0),t([i({type:F})],ee.prototype,"spatialReference",void 0),t([i({type:[A]})],ee.prototype,"templates",void 0),t([i()],ee.prototype,"title",void 0),t([i({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),t([i({type:String,readOnly:!0})],ee.prototype,"typeIdField",void 0),t([i({type:[U]})],ee.prototype,"types",void 0),t([i(W)],ee.prototype,"url",null),ee=t([s("esri.layers.GeoJSONLayer")],ee);const te=ee;export{te as default};
