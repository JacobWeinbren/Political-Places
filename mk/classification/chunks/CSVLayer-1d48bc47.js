import{V as e,W as t,X as i,c6 as o,r,cU as n,bP as s,c$ as l,s as a,cT as u,gI as d,ga as c,go as p,aR as y,dn as h}from"../main.js";import{a as f}from"./clientSideDefaults-3e5502f7.js";import"eng/classification.json";import"./QueryEngineCapabilities-57c37141.js";let m=class extends o{constructor(e){super(e),this.type="csv"}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>n.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:s.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _startWorker(e){this._connection=await l("CSVSourceWorker",{strategy:a("feature-layers-workers")?"dedicated":"local",signal:e});const t=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((e=>e.toJSON())),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=t.locationInfo,this.sourceJSON=t.layerDefinition,this.columnDelimiter=t.columnDelimiter}};e([t()],m.prototype,"type",void 0),e([t()],m.prototype,"url",void 0),e([t()],m.prototype,"delimiter",void 0),e([t()],m.prototype,"fields",void 0),e([t()],m.prototype,"latitudeField",void 0),e([t()],m.prototype,"longitudeField",void 0),e([t()],m.prototype,"spatialReference",void 0),e([t()],m.prototype,"timeInfo",void 0),e([t()],m.prototype,"locationInfo",void 0),e([t()],m.prototype,"sourceJSON",void 0),e([t()],m.prototype,"columnDelimiter",void 0),m=e([i("esri.layers.graphics.sources.CSVSource")],m);var g=m;let v=class extends p{constructor(...e){super(...e),this.capabilities=f(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.customParameters=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=y.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e)}async createGraphicsSource(e){const t=new g({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(h.from(e)||this.createQuery()))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(h.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(h.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(h.from(e)||this.createQuery())))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};e([t({readOnly:!0,json:{read:!1,write:!1}})],v.prototype,"capabilities",void 0),e([t({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],v.prototype,"delimiter",void 0),e([t({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],v.prototype,"editingEnabled",void 0),e([t({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],v.prototype,"fields",void 0),e([t({type:Boolean,readOnly:!0})],v.prototype,"isTable",null),e([u("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],v.prototype,"readWebMapLabelsVisible",null),e([t({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],v.prototype,"latitudeField",void 0),e([t({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],v.prototype,"customParameters",void 0),e([t({type:["show","hide"]})],v.prototype,"listMode",void 0),e([t({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],v.prototype,"locationType",void 0),e([t({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],v.prototype,"longitudeField",void 0),e([t({type:["CSV"]})],v.prototype,"operationalLayerType",void 0),e([t()],v.prototype,"outFields",void 0),e([t({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],v.prototype,"path",void 0),e([t({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],v.prototype,"portalItem",void 0),e([t({json:{read:!1},cast:null,type:g,readOnly:!0})],v.prototype,"source",void 0),e([t({json:{read:!1},value:"csv",readOnly:!0})],v.prototype,"type",void 0),e([t({json:{read:d,write:{isRequired:!0,ignoreOrigin:!0,writer:c}}})],v.prototype,"url",null),v=e([i("esri.layers.CSVLayer")],v);var w=v;export default w;
