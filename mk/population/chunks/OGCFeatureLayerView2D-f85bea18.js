import{Z as e,_ as r,a0 as t}from"../main.js";import i from"./FeatureLayerView2D-deee5de1.js";import"./enums-35498f65.js";import"./LayerView-de5b4b81.js";import"./Container-82e53333.js";import"./schemaUtils-7453161c.js";import"./Utils-c08a2f63.js";import"./number-5bcfe158.js";import"./enums-23145ba2.js";import"./Texture-5f8b05e1.js";import"./VertexElementDescriptor-8df85f96.js";import"./visualVariablesUtils-063210a3.js";import"./createSymbolSchema-39b74070.js";import"./MaterialKey-d541ae9c.js";import"./alignmentUtils-24585d5f.js";import"./CIMSymbolHelper-465929e0.js";import"./BidiEngine-f827276a.js";import"./GeometryUtils-bb99d32f.js";import"./cimAnalyzer-24efe167.js";import"./quantizationUtils-a920170a.js";import"./ExpandedCIM-4556b381.js";import"./MD5-6234308b.js";import"./util-f5009057.js";import"./popupUtils-2eca8a96.js";import"./RefreshableLayerView-c2e0606d.js";const s=i=>{let s=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([r()],s.prototype,"layer",void 0),e([r({readOnly:!0})],s.prototype,"availableFields",null),s=e([t("esri.views.layers.OGCFeatureLayerView")],s),s};let a=class extends(s(i)){supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}};a=e([t("esri.views.2d.layers.OGCFeatureLayerView2D")],a);const o=a;export{o as default};