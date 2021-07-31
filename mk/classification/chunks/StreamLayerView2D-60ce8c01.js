import{V as e,W as t,X as r,a as i,cU as a,t as s,r as n}from"../main.js";import{Z as o}from"./FeatureLayerView2D-78d60498.js";import{f as l}from"./schemaUtils-c6ee0bc9.js";import"./clickToleranceUtils-2abebeb9.js";import"./definitions-53d29f17.js";import"./LayerView-bafa3c63.js";import"./Container-0df6053f.js";import"./mat4f32-b5b66fd7.js";import"./popupUtils-5d1ac49f.js";import"./drapedUtils-f504b0ab.js";import"./Utils-a8bd9dca.js";import"./Texture-71a7f37e.js";import"./MaterialKey-3288654b.js";import"./visualVariablesUtils-8caa47d5.js";import"./CIMSymbolHelper-e4c40435.js";import"./Rect-df6cbc83.js";import"./BidiEngine-2645f818.js";import"./MD5-8aa08108.js";function c(e,t){if(s(e)&&s(t))return null;const r={};return n(t)&&(r.geometry=t.toJSON()),n(e)&&(r.where=e),r}let p=class extends o{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))])}destroy(){this.connectionStatus="disconnected"}get connectionError(){if(this.errorString)return new i("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),"data-received"===e&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new i("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=a.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),i=l(e.geometryType),a=e.timeInfo&&e.timeInfo.toJSON()||null,s=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:a,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:s,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval}}};e([t()],p.prototype,"errorString",void 0),e([t({readOnly:!0})],p.prototype,"connectionError",null),e([t()],p.prototype,"connectionStatus",void 0),p=e([r("esri.views.2d.layers.StreamLayerView2D")],p);var d=p;export{d as default};
