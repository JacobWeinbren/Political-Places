import{V as e,W as i,X as r,a as s}from"../main.js";import{Z as a}from"./FeatureLayerView2D-17933559.js";import"./clickToleranceUtils-bf4050f5.js";import"./definitions-402d8636.js";import"./LayerView-5e039deb.js";import"./Container-88c6eda1.js";import"./mat4f32-3672828c.js";import"./schemaUtils-def58247.js";import"./Utils-2634df4a.js";import"./Texture-f8971cb4.js";import"./MaterialKey-6acb05c3.js";import"./visualVariablesUtils-737f2c8d.js";import"./CIMSymbolHelper-c7aee081.js";import"./Rect-756e9a32.js";import"./BidiEngine-220e093f.js";import"./MD5-31e8fb3f.js";import"./popupUtils-c7af750c.js";import"./drapedUtils-c5e7233c.js";const t=a=>{let t=class extends a{initialize(){const{layer:e,view:i}=this;e.source.supportsSpatialReference(i.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})))}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([i()],t.prototype,"layer",void 0),e([i({readOnly:!0})],t.prototype,"availableFields",null),t=e([r("esri.views.layers.OGCFeatureLayerView")],t),t};let l=class extends(t(a)){};l=e([r("esri.views.2d.layers.OGCFeatureLayerView2D")],l);var o=l;export{o as default};
