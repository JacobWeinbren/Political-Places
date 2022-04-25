import{Z as e,_ as t,a0 as r,e as i,d3 as s,t as a,r as o}from"../main.js";import n from"./FeatureLayerView2D-0103f1b4.js";import{e as c}from"./util-97a2cb19.js";import"./Container-b7f00e71.js";import"./enums-c2efc4ce.js";import"./LayerView-8e7f01dd.js";import"./schemaUtils-66513252.js";import"./Utils-a0a3c935.js";import"./enums-38e3b49b.js";import"./Texture-56619848.js";import"./VertexElementDescriptor-a4fd480a.js";import"./visualVariablesUtils-f8e41de3.js";import"./createSymbolSchema-8071cf2a.js";import"./MaterialKey-44c98e9c.js";import"./CIMSymbolHelper-6613d020.js";import"./BidiEngine-c2cc3a82.js";import"./GeometryUtils-b220a1b2.js";import"./ExpandedCIM-bf2c7d03.js";import"./quantizationUtils-2dc92c9e.js";import"./MD5-0ecdfe5e.js";import"./popupUtils-57d395e0.js";import"./floorFilterUtils-7545278c.js";import"./RefreshableLayerView-4ae15847.js";function l(e,t){if(a(e)&&a(t))return null;const r={};return o(t)&&(r.geometry=t.toJSON()),o(e)&&(r.where=e),r}let p=class extends n{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update())),this.watch("suspended",(e=>{e?this._proxy.pauseStream():this._proxy.resumeStream()}))])}get connectionError(){if(this.errorString)return new i("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),"data-received"===e&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new i("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=s.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),i=c(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,a=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:a,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([t()],p.prototype,"errorString",void 0),e([t({readOnly:!0})],p.prototype,"connectionError",null),e([t()],p.prototype,"connectionStatus",void 0),p=e([r("esri.views.2d.layers.StreamLayerView2D")],p);const d=p;export{d as default};