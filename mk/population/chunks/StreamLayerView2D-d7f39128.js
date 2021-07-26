import{V as e,W as t,X as r,a as i,cU as s,t as a,r as n}from"../main.js";import{Z as o}from"./FeatureLayerView2D-177b3b4d.js";import{f as l}from"./schemaUtils-2b6452bd.js";import"./clickToleranceUtils-ff9b54b8.js";import"./definitions-9b706c30.js";import"./LayerView-d567179c.js";import"./Container-529d87ac.js";import"./mat4f32-da8dff1b.js";import"./popupUtils-9d4b3437.js";import"./drapedUtils-4646ef1b.js";import"./Utils-8f3351b9.js";import"./Texture-4f49b301.js";import"./MaterialKey-a0ce035e.js";import"./visualVariablesUtils-8b028813.js";import"./CIMSymbolHelper-48c73628.js";import"./Rect-0833d92c.js";import"./BidiEngine-aedaa270.js";import"./MD5-d159e5d6.js";function c(e,t){if(a(e)&&a(t))return null;const r={};return n(t)&&(r.geometry=t.toJSON()),n(e)&&(r.where=e),r}let d=class extends o{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))])}destroy(){this.connectionStatus="disconnected"}get connectionError(){if(this.errorString)return new i("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),"data-received"===e&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new i("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=s.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),i=l(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,a=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:a,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval}}};e([t()],d.prototype,"errorString",void 0),e([t({readOnly:!0})],d.prototype,"connectionError",null),e([t()],d.prototype,"connectionStatus",void 0),d=e([r("esri.views.2d.layers.StreamLayerView2D")],d);var p=d;export default p;
