import{aO as e,gH as t,V as r,W as s,cY as i,gb as o,gI as a,X as l,n,cb as p,dF as y,bN as d,r as u,gJ as c,gK as h,L as g,dt as f,t as v,a as b,bO as m,aS as S,gL as w,gM as O,gN as F,e4 as j,d1 as I,bB as x,gO as L,c7 as T,gP as B,gQ as A,cI as E,b3 as q,gR as N,gS as P,d6 as _,d7 as R,d8 as M,gF as k,d9 as U,gT as Q,dd as D,gU as K,dw as V,cv as C,gV as J,gW as H,gX as W}from"../main.js";import{s as X,l as Z}from"./FetchAssociatedFeatureLayer-0fc03c2d.js";import{n as G,R as $}from"./SceneService-fadcda00.js";import{s as z,l as Y,u as ee,m as te}from"./I3SLayerDefinitions-4ea3f81e.js";import"./resourceUtils-4c54ebd2.js";let re=class extends(e(t)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};r([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],re.prototype,"title",void 0),r([i("service","title",["alias","name"])],re.prototype,"readTitle",null),r([s()],re.prototype,"layer",void 0),r([s({type:o,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],re.prototype,"id",void 0),r([i("service","id")],re.prototype,"readIdOnlyOnce",null),r([s(a(String))],re.prototype,"modelName",void 0),r([s(a(Boolean))],re.prototype,"isEmpty",void 0),r([s({type:Boolean,json:{name:"visibility",write:!0}})],re.prototype,"visible",void 0),r([s({type:Number,json:{write:!0}})],re.prototype,"opacity",void 0),re=r([l("esri.layers.buildingSublayers.BuildingSublayer")],re);var se=re;const ie=n.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),oe=L();let ae=class extends(p.LoadableMixin(y(se))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new d(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return u(r)&&"number"==typeof s?new c({portalItem:r,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return u(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=u(e)?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=G(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,ie,t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return h(this,e)}async _fetchService(e){const t=(await g(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,s,i,o;const a=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(s=r.domains)?void 0:s[e];return a&&"inherited"!==a.type?a:null!=(i=null==(o=this.getField(e))?void 0:o.domain)?i:null}getFeatureType(e){return e&&u(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return u(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return u(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=u(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:X,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}}createQuery(){const e=new f;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:u(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return u(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),v(this.associatedLayer))throw new b("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new b("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};r([s({readOnly:!0})],ae.prototype,"parsedUrl",null),r([s({type:z,readOnly:!0})],ae.prototype,"nodePages",void 0),r([s({type:[Y],readOnly:!0})],ae.prototype,"materialDefinitions",void 0),r([s({type:[ee],readOnly:!0})],ae.prototype,"textureSetDefinitions",void 0),r([s({type:[te],readOnly:!0})],ae.prototype,"geometryDefinitions",void 0),r([s({readOnly:!0})],ae.prototype,"serviceUpdateTimeStamp",void 0),r([s({readOnly:!0})],ae.prototype,"store",void 0),r([s({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],ae.prototype,"rootNode",void 0),r([s({readOnly:!0})],ae.prototype,"attributeStorageInfo",void 0),r([s(oe.fields)],ae.prototype,"fields",void 0),r([s({readOnly:!0})],ae.prototype,"fieldsIndex",null),r([s({readOnly:!0,type:c})],ae.prototype,"associatedLayer",void 0),r([i("service","associatedLayer",["associatedLayerID"])],ae.prototype,"readAssociatedLayer",null),r([s(oe.outFields)],ae.prototype,"outFields",void 0),r([s({type:String,readOnly:!0})],ae.prototype,"objectIdField",null),r([s({readOnly:!0,type:String,json:{read:!1}})],ae.prototype,"displayField",null),r([s({readOnly:!0,type:String,aliasOf:"layer.apiKey"})],ae.prototype,"apiKey",void 0),r([s({readOnly:!0,type:m,aliasOf:"layer.fullExtent"})],ae.prototype,"fullExtent",void 0),r([s({readOnly:!0,type:S,aliasOf:"layer.spatialReference"})],ae.prototype,"spatialReference",void 0),r([s({readOnly:!0,aliasOf:"layer.version"})],ae.prototype,"version",void 0),r([s({readOnly:!0,type:w,aliasOf:"layer.elevationInfo"})],ae.prototype,"elevationInfo",void 0),r([s({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],ae.prototype,"minScale",void 0),r([s({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],ae.prototype,"maxScale",void 0),r([s({type:["hide","show"],json:{write:!0}})],ae.prototype,"listMode",void 0),r([s({types:O,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ae.prototype,"renderer",void 0),r([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ae.prototype,"definitionExpression",void 0),r([s(F)],ae.prototype,"popupEnabled",void 0),r([s({type:j,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],ae.prototype,"popupTemplate",void 0),r([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ae.prototype,"normalReferenceFrame",void 0),r([s({readOnly:!0,json:{read:!1}})],ae.prototype,"defaultPopupTemplate",null),r([s()],ae.prototype,"types",null),r([s()],ae.prototype,"typeIdField",null),r([s({json:{write:!1}}),I(new x({"3DObject":"3d-object",Point:"point"}))],ae.prototype,"layerType",void 0),r([s()],ae.prototype,"geometryType",null),r([s()],ae.prototype,"profile",null),r([s({readOnly:!0,json:{read:!1}})],ae.prototype,"capabilities",null),ae=r([l("esri.layers.buildingSublayers.BuildingComponentSublayer")],ae);var le,ne=ae;const pe={type:T,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ye}}},read:!1}};function ye(e,t,r){if(e&&Array.isArray(e))return new T(e.map((e=>{const t=function(e){return"group"===e.layerType?de:ne}(e);if(t){const s=new t;return s.read(e,r),s}r&&r.messages&&e&&r.messages.push(new B("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}let de=le=class extends se{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return A(this,(e=>le.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};r([s({type:["hide","show","hide-children"],json:{write:!0}})],de.prototype,"listMode",void 0),r([s(pe)],de.prototype,"sublayers",void 0),de=le=r([l("esri.layers.buildingSublayers.BuildingGroupSublayer")],de),function(e){e.sublayersProperty=pe,e.readSublayers=ye,e.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))}}(de||(de={}));var ue=de;let ce=class extends E{constructor(){super(...arguments),this.type=null}};r([s({type:String,readOnly:!0,json:{write:!0}})],ce.prototype,"type",void 0),ce=r([l("esri.layers.support.BuildingFilterAuthoringInfo")],ce);var he,ge=ce;let fe=he=class extends E{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new he({filterType:this.filterType,filterValues:q(this.filterValues)})}};r([s({type:String,json:{write:!0}})],fe.prototype,"filterType",void 0),r([s({type:[String],json:{write:!0}})],fe.prototype,"filterValues",void 0),fe=he=r([l("esri.layers.support.BuildingFilterAuthoringInfoType")],fe);var ve,be=fe;const me=T.ofType(be);let Se=ve=class extends E{clone(){return new ve({filterTypes:q(this.filterTypes)})}};r([s({type:me,json:{write:!0}})],Se.prototype,"filterTypes",void 0),Se=ve=r([l("esri.layers.support.BuildingFilterAuthoringInfoBlock")],Se);var we,Oe=Se;const Fe=T.ofType(Oe);let je=we=class extends ge{constructor(){super(...arguments),this.type="checkbox"}clone(){return new we({filterBlocks:q(this.filterBlocks)})}};r([s({type:["checkbox"]})],je.prototype,"type",void 0),r([s({type:Fe,json:{write:!0}})],je.prototype,"filterBlocks",void 0),je=we=r([l("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],je);var Ie=je;let xe=class extends E{};r([s({readOnly:!0,json:{read:!1}})],xe.prototype,"type",void 0),xe=r([l("esri.layers.support.BuildingFilterMode")],xe);var Le,Te=xe;let Be=Le=class extends Te{constructor(){super(...arguments),this.type="solid"}clone(){return new Le}};r([s({type:["solid"],readOnly:!0,json:{write:!0}})],Be.prototype,"type",void 0),Be=Le=r([l("esri.layers.support.BuildingFilterModeSolid")],Be);var Ae,Ee=Be;let qe=Ae=class extends Te{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Ae({edges:q(this.edges)})}};r([I({wireFrame:"wire-frame"})],qe.prototype,"type",void 0),r([s(N)],qe.prototype,"edges",void 0),qe=Ae=r([l("esri.layers.support.BuildingFilterModeWireFrame")],qe);var Ne,Pe=qe;let _e=Ne=class extends Te{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Ne}};r([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],_e.prototype,"type",void 0),_e=Ne=r([l("esri.layers.support.BuildingFilterModeXRay")],_e);var Re,Me=_e;const ke={nonNullable:!0,types:{key:"type",base:Te,typeMap:{solid:Ee,"wire-frame":Pe,"x-ray":Me}},json:{read:e=>{switch(e&&e.type){case"solid":return Ee.fromJSON(e);case"wireFrame":return Pe.fromJSON(e);case"x-ray":return Me.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Ue=Re=class extends E{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Ee,this.title=""}clone(){return new Re({filterExpression:this.filterExpression,filterMode:q(this.filterMode),title:this.title})}};r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ue.prototype,"filterExpression",void 0),r([s(ke)],Ue.prototype,"filterMode",void 0),r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ue.prototype,"title",void 0),Ue=Re=r([l("esri.layers.support.BuildingFilterBlock")],Ue);var Qe,De=Ue;const Ke=T.ofType(De);let Ve=Qe=class extends E{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=P(),this.name=null}clone(){return new Qe({description:this.description,filterBlocks:q(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:q(this.filterAuthoringInfo)})}};r([s({type:String,json:{write:!0}})],Ve.prototype,"description",void 0),r([s({type:Ke,json:{write:{enabled:!0,isRequired:!0}}})],Ve.prototype,"filterBlocks",void 0),r([s({types:{key:"type",base:ge,typeMap:{checkbox:Ie}},json:{read:e=>{switch(e&&e.type){case"checkbox":return Ie.fromJSON(e);default:return null}},write:!0}})],Ve.prototype,"filterAuthoringInfo",void 0),r([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Ve.prototype,"id",void 0),r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ve.prototype,"name",void 0),Ve=Qe=r([l("esri.layers.support.BuildingFilter")],Ve);var Ce=Ve;const Je=n.getLogger("esri.layers.support.BuildingSummaryStatistics");let He=class extends E{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};r([s({type:String})],He.prototype,"fieldName",void 0),r([s({type:String})],He.prototype,"modelName",void 0),r([s({type:String})],He.prototype,"label",void 0),r([s({type:Number})],He.prototype,"min",void 0),r([s({type:Number})],He.prototype,"max",void 0),r([s({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],He.prototype,"mostFrequentValues",void 0),r([s({type:[Number]})],He.prototype,"subLayerIds",void 0),He=r([l("esri.layers.support.BuildingFieldStatistics")],He);let We=class extends(p.LoadableMixin(y(E))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(Je.error("building summary statistics are not loaded"),null)}load(e){const t=u(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await g(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};r([s({constructOnly:!0,type:String})],We.prototype,"url",void 0),r([s({readOnly:!0,type:[He],json:{read:{source:"summary"}}})],We.prototype,"fields",null),We=r([l("esri.layers.support.BuildingSummaryStatistics")],We);var Xe=We;const Ze=n.getLogger("esri.layers.BuildingSceneLayer"),Ge=T.ofType(Ce),$e=q(ue.sublayersProperty);$e.json.origins["web-scene"]={type:[ne],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},$e.json.origins["portal-item"]={type:[ne],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let ze=class extends($(_(R(M(k(U(Q(D)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new K({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new Ge,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=ue.readSublayers(e,t,r);return ue.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:t,context:r}){ue.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages.push(new b("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const s=[];ue.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push(q(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=V(this.parsedUrl.path,t.statisticsHRef);return new Xe({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=u(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(C).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return J(this,(e=>{ue.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new b("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&Ze.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Ze.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new Z(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){Ze.warn("Associated feature service item could not be loaded",e)}}};r([s({type:["BuildingSceneLayer"]})],ze.prototype,"operationalLayerType",void 0),r([s({readOnly:!0})],ze.prototype,"allSublayers",void 0),r([s($e)],ze.prototype,"sublayers",void 0),r([i("service","sublayers")],ze.prototype,"readSublayers",null),r([s({type:Ge,nonNullable:!0,json:{write:!0}})],ze.prototype,"filters",void 0),r([s({type:String,json:{write:!0}})],ze.prototype,"activeFilterId",void 0),r([s({readOnly:!0,type:Xe})],ze.prototype,"summaryStatistics",void 0),r([i("summaryStatistics",["statisticsHRef"])],ze.prototype,"readSummaryStatistics",null),r([s({type:[String],json:{read:!1}})],ze.prototype,"outFields",void 0),r([s(H)],ze.prototype,"fullExtent",void 0),r([s({type:["show","hide","hide-children"]})],ze.prototype,"listMode",void 0),r([s(a(S))],ze.prototype,"spatialReference",void 0),r([s(W)],ze.prototype,"elevationInfo",null),r([s({json:{read:!1},readOnly:!0})],ze.prototype,"type",void 0),r([s()],ze.prototype,"associatedFeatureServiceItem",void 0),ze=r([l("esri.layers.BuildingSceneLayer")],ze);var Ye=ze;export{Ye as default};
