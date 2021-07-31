import{V as e,W as t,X as r,cJ as i,gB as o,d2 as s,b4 as n,hZ as a,gf as l,h_ as d,ge as p,gd as u,n as y,d7 as c,d8 as f,d9 as h,gy as v,da as g,gN as m,de as w,dn as b,ch as I,r as x,cw as S,gE as C,h$ as T,a as F,dx as P,L as R,gH as j,e5 as q,cZ as B,gR as E,gY as N,bE as L,gI as V}from"../main.js";import{R as O}from"./SceneService-8f3ed982.js";import"./resourceUtils-368be33c.js";let _=class extends i{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};e([t({type:String,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"field",void 0),e([t({readOnly:!0,nonNullable:!0,json:{read:!1}})],_.prototype,"type",void 0),_=e([r("esri.layers.pointCloudFilters.PointCloudFilter")],_);var A,$=_;let D=A=class extends ${constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new A({field:this.field,requiredClearBits:n(this.requiredClearBits),requiredSetBits:n(this.requiredSetBits)})}};e([t({type:[o],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],D.prototype,"requiredClearBits",void 0),e([t({type:[o],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],D.prototype,"requiredSetBits",void 0),e([s({pointCloudBitfieldFilter:"bitfield"})],D.prototype,"type",void 0),D=A=e([r("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],D);var K,k=D;let M=K=class extends ${constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new K({field:this.field,includedReturns:n(this.includedReturns)})}};e([t({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"includedReturns",void 0),e([s({pointCloudReturnFilter:"return"})],M.prototype,"type",void 0),M=K=e([r("esri.layers.pointCloudFilters.PointCloudReturnFilter")],M);var G,U=M;let Z=G=class extends ${constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new G({field:this.field,mode:this.mode,values:n(this.values)})}};e([t({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],Z.prototype,"mode",void 0),e([s({pointCloudValueFilter:"value"})],Z.prototype,"type",void 0),e([t({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],Z.prototype,"values",void 0),Z=G=e([r("esri.layers.pointCloudFilters.PointCloudValueFilter")],Z);const z={key:"type",base:$,typeMap:{value:Z,bitfield:k,return:U}},H={key:"type",base:a,typeMap:{"point-cloud-class-breaks":l,"point-cloud-rgb":d,"point-cloud-stretch":p,"point-cloud-unique-value":u},errorContext:"renderer"},J=y.getLogger("esri.layers.PointCloudLayer"),W=V();let X=class extends(O(c(f(h(v(g(m(w)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,r){return Array.isArray(e)?e.map((e=>{const t=new b;return"FieldTypeInteger"===e.type&&((e=n(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new b({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,r,i){I("layerDefinition.drawingInfo.renderer",e.write(null,i),t)}load(e){const t=x(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(S).then((()=>this._fetchService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){const t=C(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t}formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const r=e.fieldInfos.find((e=>e.fieldName===t.name));if(!r)return;const i=new T({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-returns-decoded"}formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const r=e.fieldInfos.find((e=>e.fieldName===t.name));if(!r)return;const i=new T({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new F("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new F("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.attributeStorageInfo)if(e.name===r.name){const r=P(this.parsedUrl.path,`./statistics/${e.key}`);return R(r,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new F("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new F("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new F("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new F("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&J.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&J.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};e([t({type:["PointCloudLayer"]})],X.prototype,"operationalLayerType",void 0),e([t(j)],X.prototype,"popupEnabled",void 0),e([t({type:q,json:{name:"popupInfo",write:!0}})],X.prototype,"popupTemplate",void 0),e([t({readOnly:!0,json:{read:!1}})],X.prototype,"defaultPopupTemplate",null),e([t({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],X.prototype,"opacity",void 0),e([t({type:["show","hide"]})],X.prototype,"listMode",void 0),e([t({types:[z],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],X.prototype,"filters",void 0),e([t({type:[b]})],X.prototype,"fields",void 0),e([t(W.fieldsIndex)],X.prototype,"fieldsIndex",void 0),e([B("service","fields",["fields","attributeStorageInfo"])],X.prototype,"readServiceFields",null),e([t(W.outFields)],X.prototype,"outFields",void 0),e([t({readOnly:!0})],X.prototype,"attributeStorageInfo",void 0),e([t(E)],X.prototype,"elevationInfo",null),e([t({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],X.prototype,"path",void 0),e([t(N)],X.prototype,"legendEnabled",void 0),e([t({types:H,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:H},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],X.prototype,"renderer",void 0),e([L("renderer")],X.prototype,"writeRenderer",null),e([t({json:{read:!1},readOnly:!0})],X.prototype,"type",void 0),X=e([r("esri.layers.PointCloudLayer")],X);var Y=X;export{Y as default};
