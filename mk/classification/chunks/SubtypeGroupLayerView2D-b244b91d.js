import{Z as e,a0 as i,K as s,r as t,cP as r}from"../main.js";import a from"./FeatureLayerView2D-0103f1b4.js";import"./Container-b7f00e71.js";import"./enums-c2efc4ce.js";import"./LayerView-8e7f01dd.js";import"./schemaUtils-66513252.js";import"./Utils-a0a3c935.js";import"./enums-38e3b49b.js";import"./Texture-56619848.js";import"./VertexElementDescriptor-a4fd480a.js";import"./visualVariablesUtils-f8e41de3.js";import"./createSymbolSchema-8071cf2a.js";import"./MaterialKey-44c98e9c.js";import"./CIMSymbolHelper-6613d020.js";import"./BidiEngine-c2cc3a82.js";import"./GeometryUtils-b220a1b2.js";import"./ExpandedCIM-bf2c7d03.js";import"./quantizationUtils-2dc92c9e.js";import"./MD5-0ecdfe5e.js";import"./util-97a2cb19.js";import"./popupUtils-57d395e0.js";import"./floorFilterUtils-7545278c.js";import"./RefreshableLayerView-4ae15847.js";let l=class extends a{initialize(){this.handles.add([s(this.view,"viewpoint",(()=>this._update()))])}_injectOverrides(e){let i=super._injectOverrides(e);const s=this.view.scale,a=this.layer.sublayers.filter((e=>function(e,i){return!e.visible||0!==e.minScale&&i>e.minScale||0!==e.maxScale&&i<e.maxScale}(e,s))).map((e=>e.subtypeCode));if(!a.length)return i;i=t(i)?i:(new r).toJSON();const l=`NOT ${this.layer.subtypeField} IN (${a.join(",")})`;return i.where=i.where?`(${i.where}) AND (${l})`:l,i}_setLayersForFeature(e){const i=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[i.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},i=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${i})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};l=e([i("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const o=l;export{o as default};