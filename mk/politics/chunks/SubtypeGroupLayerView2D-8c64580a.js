import{V as e,X as i,F as s,t as r}from"../main.js";import{Z as t,y as a}from"./FeatureLayerView2D-314ce54f.js";import"./clickToleranceUtils-020a3191.js";import"./definitions-8d307e62.js";import"./LayerView-e3df7f04.js";import"./Container-b5ad26a9.js";import"./mat4f32-2308129f.js";import"./schemaUtils-baabd3f1.js";import"./Utils-44abebd7.js";import"./Texture-edd22bb8.js";import"./MaterialKey-b8df0959.js";import"./visualVariablesUtils-46f52d5a.js";import"./CIMSymbolHelper-c052e1dc.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";import"./popupUtils-2d63b22c.js";import"./drapedUtils-bb37f63f.js";let l=class extends t{initialize(){this.handles.add([s(this.view,"viewpoint",(()=>this._update()))])}_injectOverrides(e){const i=super._injectOverrides(e),s=this.view.scale,t=this.layer.sublayers.filter((e=>function(e,i){return!e.visible||0!==e.minScale&&i>e.minScale||0!==e.maxScale&&i<e.maxScale}(e,s))).map((e=>e.subtypeCode));if(!t.length)return i;const l=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;if(r(i))return new a({where:l});const o=i.clone();return o.where+=` AND ${l}`,o}_setLayersForFeature(e){const i=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[i.name],r=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=r,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode})))},i=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${i})`:"1=2";let r=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return r+=s,{...super._createSchemaConfig(),...e,definitionExpression:r}}};l=e([i("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);var o=l;export{o as default};