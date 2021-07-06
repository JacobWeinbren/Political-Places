import{V as e,W as t,X as r,cl as i,fS as o,cr as s,b2 as n,n as a,cy as l,cz as d,cA as p,gk as u,cB as y,gy as c,cG as f,cP as h,g9 as v,r as g,ce as m,gp as b,hN as w,a as I,c$ as x,L as C,gs as S,dE as P,cj as T,gC as F,gN as R,by as j,gt as q}from"../main.js";import{R as B}from"./SceneService-501cdea1.js";import{c as N,d as E,b as L,a as V}from"./PointCloudUniqueValueRenderer-9d7a8341.js";import"./resourceUtils-9d0b4a17.js";let O=class extends i{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};e([t({type:String,json:{write:{enabled:!0,isRequired:!0}}})],O.prototype,"field",void 0),e([t({readOnly:!0,nonNullable:!0,json:{read:!1}})],O.prototype,"type",void 0),O=e([r("esri.layers.pointCloudFilters.PointCloudFilter")],O);var _,A=O;let $=_=class extends A{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new _({field:this.field,requiredClearBits:n(this.requiredClearBits),requiredSetBits:n(this.requiredSetBits)})}};e([t({type:[o],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],$.prototype,"requiredClearBits",void 0),e([t({type:[o],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],$.prototype,"requiredSetBits",void 0),e([s({pointCloudBitfieldFilter:"bitfield"})],$.prototype,"type",void 0),$=_=e([r("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],$);var k,D=$;let G=k=class extends A{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new k({field:this.field,includedReturns:n(this.includedReturns)})}};e([t({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],G.prototype,"includedReturns",void 0),e([s({pointCloudReturnFilter:"return"})],G.prototype,"type",void 0),G=k=e([r("esri.layers.pointCloudFilters.PointCloudReturnFilter")],G);var K,M=G;let U=K=class extends A{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new K({field:this.field,mode:this.mode,values:n(this.values)})}};e([t({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"mode",void 0),e([s({pointCloudValueFilter:"value"})],U.prototype,"type",void 0),e([t({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"values",void 0),U=K=e([r("esri.layers.pointCloudFilters.PointCloudValueFilter")],U);const z={key:"type",base:A,typeMap:{value:U,bitfield:D,return:M}};var W;let X=W=class extends N{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new W({...this.cloneProperties(),field:n(this.field)})}};e([s({pointCloudRGBRenderer:"point-cloud-rgb"})],X.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],X.prototype,"field",void 0),X=W=e([r("esri.renderers.PointCloudRGBRenderer")],X);const H={key:"type",base:N,typeMap:{"point-cloud-class-breaks":E,"point-cloud-rgb":X,"point-cloud-stretch":L,"point-cloud-unique-value":V},errorContext:"renderer"},J=a.getLogger("esri.layers.PointCloudLayer"),Q=q();let Y=class extends(B(l(d(p(u(y(c(f)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,r){return Array.isArray(e)?e.map((e=>{const t=new h;return"FieldTypeInteger"===e.type&&((e=n(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new h({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,r,i){v("layerDefinition.drawingInfo.renderer",e.write(null,i),t)}load(e){const t=g(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(m).then((()=>this._fetchService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){const t=b(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t}formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const r=e.fieldInfos.find((e=>e.fieldName===t.name));if(!r)return;const i=new w({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-returns-decoded"}formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const r=e.fieldInfos.find((e=>e.fieldName===t.name));if(!r)return;const i=new w({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new I("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new I("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.attributeStorageInfo)if(e.name===r.name){const r=x(this.parsedUrl.path,`./statistics/${e.key}`);return C(r,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new I("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new I("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new I("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new I("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&J.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&J.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};e([t({type:["PointCloudLayer"]})],Y.prototype,"operationalLayerType",void 0),e([t(S)],Y.prototype,"popupEnabled",void 0),e([t({type:P,json:{name:"popupInfo",write:!0}})],Y.prototype,"popupTemplate",void 0),e([t({readOnly:!0,json:{read:!1}})],Y.prototype,"defaultPopupTemplate",null),e([t({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],Y.prototype,"opacity",void 0),e([t({type:["show","hide"]})],Y.prototype,"listMode",void 0),e([t({types:[z],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],Y.prototype,"filters",void 0),e([t({type:[h]})],Y.prototype,"fields",void 0),e([t(Q.fieldsIndex)],Y.prototype,"fieldsIndex",void 0),e([T("service","fields",["fields","attributeStorageInfo"])],Y.prototype,"readServiceFields",null),e([t(Q.outFields)],Y.prototype,"outFields",void 0),e([t({readOnly:!0})],Y.prototype,"attributeStorageInfo",void 0),e([t(F)],Y.prototype,"elevationInfo",null),e([t({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],Y.prototype,"path",void 0),e([t(R)],Y.prototype,"legendEnabled",void 0),e([t({types:H,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:H},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],Y.prototype,"renderer",void 0),e([j("renderer")],Y.prototype,"writeRenderer",null),e([t({json:{read:!1},readOnly:!0})],Y.prototype,"type",void 0),Y=e([r("esri.layers.PointCloudLayer")],Y);var Z=Y;export default Z;
