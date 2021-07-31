import{S as e,T as s,V as r,W as a,dI as t,X as i}from"../main.js";import{n as l}from"./sublayerUtils-ec6996bf.js";const y={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let n=class extends(e(s)){constructor(e){super(e),this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>e.toExportImageJSON()));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&l(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(y[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter((e=>null!=e.definitionExpression));return e.length?JSON.stringify(e.reduce(((e,s)=>(e[s.id]=s.definitionExpression,e)),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,r=s=>{const a=this.scale,t=0===a,i=0===s.minScale||a<=s.minScale,l=0===s.maxScale||a>=s.maxScale;s.visible&&(t||i&&l)&&(s.sublayers?s.sublayers.forEach(r):e.unshift(s))};s&&s.forEach(r);const a=this._get("visibleSublayers");return!a||a.length!==e.length||a.some(((s,r)=>e[r]!==s))?e:a}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};r([a({readOnly:!0})],n.prototype,"dynamicLayers",null),r([a({readOnly:!0})],n.prototype,"hasDynamicLayers",null),r([a()],n.prototype,"layer",null),r([a({readOnly:!0})],n.prototype,"layers",null),r([a({readOnly:!0})],n.prototype,"layerDefs",null),r([a({type:Number})],n.prototype,"scale",void 0),r([a(t)],n.prototype,"timeExtent",void 0),r([a({readOnly:!0})],n.prototype,"version",null),r([a({readOnly:!0})],n.prototype,"visibleSublayers",null),n=r([i("esri.layers.mixins.ExportImageParameters")],n);export{n};