import{V as e,W as i,X as r,a as s}from"../main.js";import{Z as t}from"./FeatureLayerView2D-985109c0.js";import"./clickToleranceUtils-020a3191.js";import"./definitions-8d307e62.js";import"./LayerView-1755cd35.js";import"./Container-e933b5f1.js";import"./mat4f32-2308129f.js";import"./schemaUtils-481e671f.js";import"./Utils-ffbfdeca.js";import"./Texture-ce7d8edf.js";import"./MaterialKey-0908fd8a.js";import"./visualVariablesUtils-14f3e375.js";import"./CIMSymbolHelper-5673c65d.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";import"./popupUtils-df68b487.js";import"./drapedUtils-f5b6f02b.js";const a=t=>{let a=class extends t{initialize(){const{layer:e,view:i}=this;e.source.supportsSpatialReference(i.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})))}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([i()],a.prototype,"layer",void 0),e([i({readOnly:!0})],a.prototype,"availableFields",null),a=e([r("esri.views.layers.OGCFeatureLayerView")],a),a};let l=class extends(a(t)){};l=e([r("esri.views.2d.layers.OGCFeatureLayerView2D")],l);var o=l;export{o as default};