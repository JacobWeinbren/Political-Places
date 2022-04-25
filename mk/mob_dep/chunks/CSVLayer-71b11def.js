import{Z as e,_ as t,a0 as i,cj as r,ck as o,r as n,d9 as s,cn as a,cS as l,d as u,e6 as d,iP as c,ic as y,iv as p,aV as h,bB as m,c$ as f,e as g}from"../main.js";import{c as w}from"./clientSideDefaults-be1e4608.js";import"./QueryEngineCapabilities-ec743cd2.js";let v=class extends r{constructor(e){super(e),this.type="csv",this.refresh=o((async e=>{await this.load();const{extent:t,timeExtent:i}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,i&&(this.sourceJSON.timeInfo.timeExtent=[i.start,i.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=n(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const i=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return s.fromJSON(i)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const i=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:i.count,extent:a.fromJSON(i.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _startWorker(e){this._connection=await l("CSVSourceWorker",{strategy:u("feature-layers-workers")?"dedicated":"local",signal:e});const{url:t,delimiter:i,fields:r,latitudeField:o,longitudeField:n,spatialReference:s,timeInfo:a}=this.loadOptions,d=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:i,fields:null==r?void 0:r.map((e=>e.toJSON())),latitudeField:o,longitudeField:n,spatialReference:null==s?void 0:s.toJSON(),timeInfo:null==a?void 0:a.toJSON()}},{signal:e});this.locationInfo=d.locationInfo,this.sourceJSON=d.layerDefinition,this.delimiter=d.delimiter}};e([t()],v.prototype,"type",void 0),e([t()],v.prototype,"loadOptions",void 0),e([t()],v.prototype,"customParameters",void 0),e([t()],v.prototype,"locationInfo",void 0),e([t()],v.prototype,"sourceJSON",void 0),e([t()],v.prototype,"delimiter",void 0),v=e([i("esri.layers.graphics.sources.CSVSource")],v);const S=v;let O=class extends p{constructor(...e){super(...e),this.capabilities=w(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=h.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){if(!e)return void this._set("url",e);const t=m(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async createGraphicsSource(e){const t=new S({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(f.from(e)||this.createQuery()))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(f.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(f.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(f.from(e)||this.createQuery())))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new g("CSVLayer",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return n(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};e([t({readOnly:!0,json:{read:!1,write:!1}})],O.prototype,"capabilities",void 0),e([t({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],O.prototype,"delimiter",void 0),e([t({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],O.prototype,"editingEnabled",void 0),e([t({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],O.prototype,"fields",void 0),e([t({type:Boolean,readOnly:!0})],O.prototype,"isTable",null),e([d("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],O.prototype,"readWebMapLabelsVisible",null),e([t({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],O.prototype,"latitudeField",void 0),e([t({type:["show","hide"]})],O.prototype,"listMode",void 0),e([t({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],O.prototype,"locationType",void 0),e([t({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],O.prototype,"longitudeField",void 0),e([t({type:["CSV"]})],O.prototype,"operationalLayerType",void 0),e([t()],O.prototype,"outFields",void 0),e([t({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],O.prototype,"path",void 0),e([t({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],O.prototype,"portalItem",void 0),e([t({json:{read:!1},cast:null,type:S,readOnly:!0})],O.prototype,"source",void 0),e([t({json:{read:!1},value:"csv",readOnly:!0})],O.prototype,"type",void 0),e([t({json:{read:c,write:{isRequired:!0,ignoreOrigin:!0,writer:y}}})],O.prototype,"url",null),O=e([i("esri.layers.CSVLayer")],O);const b=O;export{b as default};