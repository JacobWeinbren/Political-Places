import{V as e,W as i,X as r,a}from"../main.js";import{Z as s}from"./FeatureLayerView2D-d8a4a540.js";import"./clickToleranceUtils-2abebeb9.js";import"./definitions-53d29f17.js";import"./LayerView-94237881.js";import"./Container-894c1bdf.js";import"./mat4f32-b5b66fd7.js";import"./schemaUtils-215cc845.js";import"./Utils-f7f1dc2e.js";import"./Texture-af954294.js";import"./MaterialKey-50023ca0.js";import"./visualVariablesUtils-b0756f87.js";import"./CIMSymbolHelper-c13790db.js";import"./Rect-df6cbc83.js";import"./BidiEngine-2645f818.js";import"./MD5-8aa08108.js";import"./popupUtils-d80d453f.js";import"./drapedUtils-d2d87ff1.js";const t=s=>{let t=class extends s{initialize(){const{layer:e,view:i}=this;e.source.supportsSpatialReference(i.spatialReference)||this.addResolvingPromise(Promise.reject(new a("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})))}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([i()],t.prototype,"layer",void 0),e([i({readOnly:!0})],t.prototype,"availableFields",null),t=e([r("esri.views.layers.OGCFeatureLayerView")],t),t};let l=class extends(t(s)){};l=e([r("esri.views.2d.layers.OGCFeatureLayerView2D")],l);var o=l;export{o as default};
