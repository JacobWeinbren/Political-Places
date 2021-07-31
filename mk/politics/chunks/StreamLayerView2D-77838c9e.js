import{V as e,W as t,X as r,a as i,cZ as s,t as a,r as n}from"../main.js";import{Z as o}from"./FeatureLayerView2D-a90694e7.js";import{f as l}from"./schemaUtils-479a0995.js";import"./clickToleranceUtils-020a3191.js";import"./definitions-8d307e62.js";import"./LayerView-43916105.js";import"./Container-a8067c10.js";import"./mat4f32-2308129f.js";import"./popupUtils-106c1c97.js";import"./drapedUtils-c521cc58.js";import"./Utils-ad846f73.js";import"./Texture-138e8e36.js";import"./MaterialKey-16cef785.js";import"./visualVariablesUtils-dada2dcd.js";import"./CIMSymbolHelper-2f16d122.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";function c(e,t){if(a(e)&&a(t))return null;const r={};return n(t)&&(r.geometry=t.toJSON()),n(e)&&(r.where=e),r}let p=class extends o{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))])}destroy(){this.connectionStatus="disconnected"}get connectionError(){if(this.errorString)return new i("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),"data-received"===e&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new i("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=s.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),i=l(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,a=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:a,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval}}};e([t()],p.prototype,"errorString",void 0),e([t({readOnly:!0})],p.prototype,"connectionError",null),e([t()],p.prototype,"connectionStatus",void 0),p=e([r("esri.views.2d.layers.StreamLayerView2D")],p);var d=p;export{d as default};
