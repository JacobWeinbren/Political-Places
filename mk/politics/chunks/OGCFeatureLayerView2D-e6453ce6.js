import{V as e,W as i,X as r,a}from"../main.js";import{Z as s}from"./FeatureLayerView2D-970dc24d.js";import"./clickToleranceUtils-020a3191.js";import"./definitions-8d307e62.js";import"./LayerView-33414922.js";import"./Container-f8952d6a.js";import"./mat4f32-2308129f.js";import"./schemaUtils-c0dec4d3.js";import"./Utils-55d7c2c6.js";import"./Texture-c105cc80.js";import"./MaterialKey-429f10e7.js";import"./visualVariablesUtils-9a9af480.js";import"./CIMSymbolHelper-da3f398d.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";import"./popupUtils-78b7a503.js";import"./drapedUtils-82f198dc.js";const t=s=>{let t=class extends s{initialize(){const{layer:e,view:i}=this;e.source.supportsSpatialReference(i.spatialReference)||this.addResolvingPromise(Promise.reject(new a("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})))}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([i()],t.prototype,"layer",void 0),e([i({readOnly:!0})],t.prototype,"availableFields",null),t=e([r("esri.views.layers.OGCFeatureLayerView")],t),t};let l=class extends(t(s)){};l=e([r("esri.views.2d.layers.OGCFeatureLayerView2D")],l);var o=l;export{o as default};