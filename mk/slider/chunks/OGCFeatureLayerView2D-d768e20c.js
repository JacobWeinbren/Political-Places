import{V as e,W as i,X as r,a as s}from"../main.js";import{Z as t}from"./FeatureLayerView2D-9cf5a403.js";import"./clickToleranceUtils-48e6bd9a.js";import"./definitions-2e4d5fbc.js";import"./LayerView-ce864cbf.js";import"./Container-783a9c35.js";import"./mat4f32-cfee47e9.js";import"./schemaUtils-260b7b4b.js";import"./Utils-ec7f800e.js";import"./Texture-de2c3ed0.js";import"./MaterialKey-dc8991b4.js";import"./visualVariablesUtils-03634024.js";import"./CIMSymbolHelper-06604369.js";import"./Rect-d509ee5a.js";import"./BidiEngine-c0dea1b1.js";import"./MD5-9535e672.js";import"./popupUtils-ef7e5bd4.js";import"./drapedUtils-def5c04c.js";const a=t=>{let a=class extends t{initialize(){const{layer:e,view:i}=this;e.source.supportsSpatialReference(i.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})))}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([i()],a.prototype,"layer",void 0),e([i({readOnly:!0})],a.prototype,"availableFields",null),a=e([r("esri.views.layers.OGCFeatureLayerView")],a),a};let l=class extends(a(t)){};l=e([r("esri.views.2d.layers.OGCFeatureLayerView2D")],l);var o=l;export default o;
