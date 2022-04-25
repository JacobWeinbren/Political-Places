import{aR as e,is as t,Z as r,_ as s,e6 as i,it as o,iu as a,a0 as l,s as n,cj as p,cP as y,bY as d,r as u,iv as c,iw as h,C as g,c$ as f,t as v,e as b,cn as m,aV as S,ix as w,iy as O,iz as j,de as x,e9 as F,cc as I,iA as L,cf as T,iB as B,iC as A,ce as E,b5 as q,iD as R,iE as _,ed as N,ee as P,ef as k,iq as M,eg as U,iF as D,ek as Q,iG as K,eA as V,aW as C,iH as J,iI as H,iJ as Z}from"../main.js";import{t as G,l as $}from"./FetchAssociatedFeatureLayer-365bbeca.js";import{n as z,A as W,K as X}from"./SceneService-e7870a89.js";import{s as Y,l as ee,u as te,m as re}from"./I3SLayerDefinitions-56350cd9.js";import"./originUtils-06de0f79.js";import"./resourceUtils-d1c79459.js";let se=class extends(e(t)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};r([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],se.prototype,"title",void 0),r([i("service","title",["alias","name"])],se.prototype,"readTitle",null),r([s()],se.prototype,"layer",void 0),r([s({type:o,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],se.prototype,"id",void 0),r([i("service","id")],se.prototype,"readIdOnlyOnce",null),r([s(a(String))],se.prototype,"modelName",void 0),r([s(a(Boolean))],se.prototype,"isEmpty",void 0),r([s({type:Boolean,json:{name:"visibility",write:!0}})],se.prototype,"visible",void 0),r([s({type:Number,json:{write:!0}})],se.prototype,"opacity",void 0),se=r([l("esri.layers.buildingSublayers.BuildingSublayer")],se);const ie=se,oe=n.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),ae=L();let le=class extends(p.LoadableMixin(y(ie))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new d(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return u(r)&&"number"==typeof s?new c({portalItem:r,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return u(this.associatedLayer)?this.associatedLayer.displayField:null}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=u(e)?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=z(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,oe,t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return h(this,e)}async _fetchService(e){const t=(await g(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,s,i,o;const a=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(s=r.domains)?void 0:s[e];return a&&"inherited"!==a.type?a:null!=(i=null==(o=this.getField(e))?void 0:o.domain)?i:null}getFeatureType(e){return e&&u(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return u(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return u(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=u(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:G,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}}createQuery(){const e=new f;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:u(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return u(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),v(this.associatedLayer))throw new b("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new b("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};r([s({readOnly:!0})],le.prototype,"parsedUrl",null),r([s({type:Y,readOnly:!0})],le.prototype,"nodePages",void 0),r([s({type:[ee],readOnly:!0})],le.prototype,"materialDefinitions",void 0),r([s({type:[te],readOnly:!0})],le.prototype,"textureSetDefinitions",void 0),r([s({type:[re],readOnly:!0})],le.prototype,"geometryDefinitions",void 0),r([s({readOnly:!0})],le.prototype,"serviceUpdateTimeStamp",void 0),r([s({readOnly:!0})],le.prototype,"store",void 0),r([s({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],le.prototype,"rootNode",void 0),r([s({readOnly:!0})],le.prototype,"attributeStorageInfo",void 0),r([s(ae.fields)],le.prototype,"fields",void 0),r([s({readOnly:!0})],le.prototype,"fieldsIndex",null),r([s({readOnly:!0,type:c})],le.prototype,"associatedLayer",void 0),r([i("service","associatedLayer",["associatedLayerID"])],le.prototype,"readAssociatedLayer",null),r([s(ae.outFields)],le.prototype,"outFields",void 0),r([s({type:String,readOnly:!0})],le.prototype,"objectIdField",null),r([s({readOnly:!0,type:String,json:{read:!1}})],le.prototype,"displayField",null),r([s({readOnly:!0,type:String})],le.prototype,"apiKey",null),r([s({readOnly:!0,type:m})],le.prototype,"fullExtent",null),r([s({readOnly:!0,type:S})],le.prototype,"spatialReference",null),r([s({readOnly:!0})],le.prototype,"version",null),r([s({readOnly:!0,type:w})],le.prototype,"elevationInfo",null),r([s({readOnly:!0,type:Number})],le.prototype,"minScale",null),r([s({readOnly:!0,type:Number})],le.prototype,"maxScale",null),r([s({readOnly:!0,type:Number})],le.prototype,"effectiveScaleRange",null),r([s({type:["hide","show"],json:{write:!0}})],le.prototype,"listMode",void 0),r([s({types:O,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],le.prototype,"renderer",void 0),r([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],le.prototype,"definitionExpression",void 0),r([s(j)],le.prototype,"popupEnabled",void 0),r([s({type:x,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],le.prototype,"popupTemplate",void 0),r([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],le.prototype,"normalReferenceFrame",void 0),r([s({readOnly:!0,json:{read:!1}})],le.prototype,"defaultPopupTemplate",null),r([s()],le.prototype,"types",null),r([s()],le.prototype,"typeIdField",null),r([s({json:{write:!1}}),F(new I({"3DObject":"3d-object",Point:"point"}))],le.prototype,"layerType",void 0),r([s()],le.prototype,"geometryType",null),r([s()],le.prototype,"profile",null),r([s({readOnly:!0,json:{read:!1}})],le.prototype,"capabilities",null),le=r([l("esri.layers.buildingSublayers.BuildingComponentSublayer")],le);const ne=le;var pe;const ye={type:T,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:de}}},read:!1}};function de(e,t,r){if(e&&Array.isArray(e))return new T(e.map((e=>{const t=function(e){return"group"===e.layerType?ue:ne}(e);if(t){const s=new t;return s.read(e,r),s}r&&r.messages&&e&&r.messages.push(new B("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}let ue=pe=class extends ie{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return A(this,(e=>pe.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};r([s({type:["hide","show","hide-children"],json:{write:!0}})],ue.prototype,"listMode",void 0),r([s(ye)],ue.prototype,"sublayers",void 0),ue=pe=r([l("esri.layers.buildingSublayers.BuildingGroupSublayer")],ue),function(e){e.sublayersProperty=ye,e.readSublayers=de,e.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))}}(ue||(ue={}));const ce=ue;let he=class extends E{constructor(){super(...arguments),this.type=null}};r([s({type:String,readOnly:!0,json:{write:!0}})],he.prototype,"type",void 0),he=r([l("esri.layers.support.BuildingFilterAuthoringInfo")],he);const ge=he;var fe;let ve=fe=class extends E{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new fe({filterType:this.filterType,filterValues:q(this.filterValues)})}};r([s({type:String,json:{write:!0}})],ve.prototype,"filterType",void 0),r([s({type:[String],json:{write:!0}})],ve.prototype,"filterValues",void 0),ve=fe=r([l("esri.layers.support.BuildingFilterAuthoringInfoType")],ve);const be=ve;var me;const Se=T.ofType(be);let we=me=class extends E{clone(){return new me({filterTypes:q(this.filterTypes)})}};r([s({type:Se,json:{write:!0}})],we.prototype,"filterTypes",void 0),we=me=r([l("esri.layers.support.BuildingFilterAuthoringInfoBlock")],we);const Oe=we;var je;const xe=T.ofType(Oe);let Fe=je=class extends ge{constructor(){super(...arguments),this.type="checkbox"}clone(){return new je({filterBlocks:q(this.filterBlocks)})}};r([s({type:["checkbox"]})],Fe.prototype,"type",void 0),r([s({type:xe,json:{write:!0}})],Fe.prototype,"filterBlocks",void 0),Fe=je=r([l("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],Fe);const Ie=Fe;let Le=class extends E{};r([s({readOnly:!0,json:{read:!1}})],Le.prototype,"type",void 0),Le=r([l("esri.layers.support.BuildingFilterMode")],Le);const Te=Le;var Be;let Ae=Be=class extends Te{constructor(){super(...arguments),this.type="solid"}clone(){return new Be}};r([s({type:["solid"],readOnly:!0,json:{write:!0}})],Ae.prototype,"type",void 0),Ae=Be=r([l("esri.layers.support.BuildingFilterModeSolid")],Ae);const Ee=Ae;var qe;let Re=qe=class extends Te{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new qe({edges:q(this.edges)})}};r([F({wireFrame:"wire-frame"})],Re.prototype,"type",void 0),r([s(R)],Re.prototype,"edges",void 0),Re=qe=r([l("esri.layers.support.BuildingFilterModeWireFrame")],Re);const _e=Re;var Ne;let Pe=Ne=class extends Te{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Ne}};r([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],Pe.prototype,"type",void 0),Pe=Ne=r([l("esri.layers.support.BuildingFilterModeXRay")],Pe);const ke=Pe;var Me;const Ue={nonNullable:!0,types:{key:"type",base:Te,typeMap:{solid:Ee,"wire-frame":_e,"x-ray":ke}},json:{read:e=>{switch(e&&e.type){case"solid":return Ee.fromJSON(e);case"wireFrame":return _e.fromJSON(e);case"x-ray":return ke.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let De=Me=class extends E{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Ee,this.title=""}clone(){return new Me({filterExpression:this.filterExpression,filterMode:q(this.filterMode),title:this.title})}};r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],De.prototype,"filterExpression",void 0),r([s(Ue)],De.prototype,"filterMode",void 0),r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],De.prototype,"title",void 0),De=Me=r([l("esri.layers.support.BuildingFilterBlock")],De);const Qe=De;var Ke;const Ve=T.ofType(Qe);let Ce=Ke=class extends E{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=_(),this.name=null}clone(){return new Ke({description:this.description,filterBlocks:q(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:q(this.filterAuthoringInfo)})}};r([s({type:String,json:{write:!0}})],Ce.prototype,"description",void 0),r([s({type:Ve,json:{write:{enabled:!0,isRequired:!0}}})],Ce.prototype,"filterBlocks",void 0),r([s({types:{key:"type",base:ge,typeMap:{checkbox:Ie}},json:{read:e=>"checkbox"===(e&&e.type)?Ie.fromJSON(e):null,write:!0}})],Ce.prototype,"filterAuthoringInfo",void 0),r([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Ce.prototype,"id",void 0),r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ce.prototype,"name",void 0),Ce=Ke=r([l("esri.layers.support.BuildingFilter")],Ce);const Je=Ce,He=n.getLogger("esri.layers.support.BuildingSummaryStatistics");let Ze=class extends E{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};r([s({type:String})],Ze.prototype,"fieldName",void 0),r([s({type:String})],Ze.prototype,"modelName",void 0),r([s({type:String})],Ze.prototype,"label",void 0),r([s({type:Number})],Ze.prototype,"min",void 0),r([s({type:Number})],Ze.prototype,"max",void 0),r([s({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],Ze.prototype,"mostFrequentValues",void 0),r([s({type:[Number]})],Ze.prototype,"subLayerIds",void 0),Ze=r([l("esri.layers.support.BuildingFieldStatistics")],Ze);let Ge=class extends(p.LoadableMixin(y(E))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(He.error("building summary statistics are not loaded"),null)}load(e){const t=u(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await g(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};r([s({constructOnly:!0,type:String})],Ge.prototype,"url",void 0),r([s({readOnly:!0,type:[Ze],json:{read:{source:"summary"}}})],Ge.prototype,"fields",null),Ge=r([l("esri.layers.support.BuildingSummaryStatistics")],Ge);const $e=Ge,ze=n.getLogger("esri.layers.BuildingSceneLayer"),We=T.ofType(Je),Xe=q(ce.sublayersProperty);Xe.json.origins["web-scene"]={type:[ne],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},Xe.json.origins["portal-item"]={type:[ne],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let Ye=class extends(W(N(P(k(M(U(D(Q)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new K({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new We,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=ce.readSublayers(e,t,r);return ce.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:t,context:r}){ce.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages.push(new b("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const s=[];ce.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push(q(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=V(this.parsedUrl.path,t.statisticsHRef);return new $e({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=u(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(C).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return J(this,(e=>{ce.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(X.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(X.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new b("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&ze.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&ze.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new $(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){ze.warn("Associated feature service item could not be loaded",e)}}};r([s({type:["BuildingSceneLayer"]})],Ye.prototype,"operationalLayerType",void 0),r([s({readOnly:!0})],Ye.prototype,"allSublayers",void 0),r([s(Xe)],Ye.prototype,"sublayers",void 0),r([i("service","sublayers")],Ye.prototype,"readSublayers",null),r([s({type:We,nonNullable:!0,json:{write:!0}})],Ye.prototype,"filters",void 0),r([s({type:String,json:{write:!0}})],Ye.prototype,"activeFilterId",void 0),r([s({readOnly:!0,type:$e})],Ye.prototype,"summaryStatistics",void 0),r([i("summaryStatistics",["statisticsHRef"])],Ye.prototype,"readSummaryStatistics",null),r([s({type:[String],json:{read:!1}})],Ye.prototype,"outFields",void 0),r([s(H)],Ye.prototype,"fullExtent",void 0),r([s({type:["show","hide","hide-children"]})],Ye.prototype,"listMode",void 0),r([s(a(S))],Ye.prototype,"spatialReference",void 0),r([s(Z)],Ye.prototype,"elevationInfo",null),r([s({json:{read:!1},readOnly:!0})],Ye.prototype,"type",void 0),r([s()],Ye.prototype,"associatedFeatureServiceItem",void 0),Ye=r([l("esri.layers.BuildingSceneLayer")],Ye);const et=Ye;export{et as default};
