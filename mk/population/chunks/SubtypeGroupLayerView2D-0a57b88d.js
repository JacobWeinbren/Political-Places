import{V as e,X as i,F as s,t as r}from"../main.js";import{Z as t,y as a}from"./FeatureLayerView2D-30dbfea6.js";import"./clickToleranceUtils-32aa5a86.js";import"./definitions-bd7968b3.js";import"./LayerView-63b9e31b.js";import"./Container-f03aad03.js";import"./mat4f32-2521725d.js";import"./schemaUtils-de46570b.js";import"./Utils-c52d8073.js";import"./Texture-e92108c0.js";import"./MaterialKey-efe53db3.js";import"./visualVariablesUtils-887ee144.js";import"./CIMSymbolHelper-08e81b2e.js";import"./Rect-46a6423d.js";import"./BidiEngine-a3336f07.js";import"./MD5-73ac3f43.js";import"./popupUtils-cb5617cf.js";import"./drapedUtils-5cedfdde.js";let l=class extends t{initialize(){this.handles.add([s(this.view,"viewpoint",(()=>this._update()))])}_injectOverrides(e){const i=super._injectOverrides(e),s=this.view.scale,t=this.layer.sublayers.filter((e=>function(e,i){return!e.visible||0!==e.minScale&&i>e.minScale||0!==e.maxScale&&i<e.maxScale}(e,s))).map((e=>e.subtypeCode));if(!t.length)return i;const l=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;if(r(i))return new a({where:l});const o=i.clone();return o.where+=` AND ${l}`,o}_setLayersForFeature(e){const i=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[i.name],r=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=r,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode})))},i=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${i})`:"1=2";let r=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return r+=s,{...super._createSchemaConfig(),...e,definitionExpression:r}}};l=e([i("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);var o=l;export{o as default};