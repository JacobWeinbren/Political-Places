import{Z as e,_ as t,a0 as r,e as i,dc as s,t as a,r as n}from"../main.js";import o from"./FeatureLayerView2D-05d03a89.js";import{e as c}from"./util-d39d466d.js";import"./enums-7acaa04d.js";import"./LayerView-2a9200ad.js";import"./Container-4f30f201.js";import"./schemaUtils-9dbe5b20.js";import"./Utils-be23a2c6.js";import"./number-b530ed41.js";import"./enums-154d47de.js";import"./Texture-8b92d5d4.js";import"./VertexElementDescriptor-d5c236cd.js";import"./visualVariablesUtils-bfc5f6ed.js";import"./createSymbolSchema-6ec90458.js";import"./MaterialKey-c7d0c6a2.js";import"./alignmentUtils-3fedcae3.js";import"./CIMSymbolHelper-cbb4397a.js";import"./BidiEngine-07ac28a3.js";import"./GeometryUtils-fb44f136.js";import"./cimAnalyzer-7a366be2.js";import"./quantizationUtils-6ec6d37f.js";import"./ExpandedCIM-ce334afc.js";import"./MD5-318d1b0b.js";import"./popupUtils-430dfded.js";import"./RefreshableLayerView-e6cd22bf.js";function l(e,t){if(a(e)&&a(t))return null;const r={};return n(t)&&(r.geometry=t.toJSON()),n(e)&&(r.where=e),r}let d=class extends o{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update())),this.watch("suspended",(e=>{e?this._proxy.pauseStream():this._proxy.resumeStream()}))])}get connectionError(){if(this.errorString)return new i("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),"data-received"===e&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new i("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=s.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),i=c(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,a=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:a,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([t()],d.prototype,"errorString",void 0),e([t({readOnly:!0})],d.prototype,"connectionError",null),e([t()],d.prototype,"connectionStatus",void 0),d=e([r("esri.views.2d.layers.StreamLayerView2D")],d);const p=d;export{p as default};
