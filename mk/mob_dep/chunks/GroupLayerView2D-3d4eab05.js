import{V as e,W as i,e7 as t,X as r,c8 as s,dF as a}from"../main.js";import{t as l}from"./VertexArrayObject-e84eac6c.js";import"./Texture-10461545.js";import{o as n}from"./WGLContainer-d5345133.js";import{d,l as h}from"./LayerView-a96933e3.js";import"./definitions-402d8636.js";import"./Utils-49d09c16.js";import"./ShaderCompiler-f0f48f10.js";import"./config-eda66a4a.js";import"./GeometryUtils-c03a3235.js";import"./MaterialKey-3f12a3f7.js";import"./Container-30d4452e.js";import"./mat4f32-3672828c.js";import"./earcut-9c8a3447.js";class o extends n{constructor(){super(...arguments),this._lastWidth=0,this._lastHeight=0,this.requiresDedicatedFBO=!1}dispose(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)}doRender(e){const i=this.createRenderParams(e),{context:t,painter:r,profiler:s}=i;this._prevFBO=t.getBoundFramebufferObject(),s.recordContainerStart(this.name);const a=this._getFbo(i),l=r.getRenderTarget();t.bindFramebuffer(a),r.setRenderTarget(a),t.setDepthWriteEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.setClearDepth(1),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT),t.setDepthWriteEnabled(!1);for(const i of this.children)i.beforeRender(e);for(const e of this.children)e.processRender(i);for(const i of this.children)i.afterRender(e);r.setRenderTarget(l),t.bindFramebuffer(this._prevFBO),r.beforeRenderLayer(i,this._clippingInfos?255:0,this.computedOpacity),t.setStencilTestEnabled(!1),t.setStencilWriteMask(0),r.blitTexture(t,a.colorTexture,9728),r.compositeLayer(i,this.computedOpacity),s.recordContainerEnd()}createRenderParams(e){return{...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(e){const{context:i,painter:t}=e,{width:r,height:s}=i.getViewport();if(r!==this._lastWidth||s!==this._lastHeight)if(this._lastWidth=r,this._lastHeight=s,this._renderTarget)this._renderTarget.resize(r,s);else{const e={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:r,height:s},a={colorTarget:0,depthStencilTarget:3};this._renderTarget=new l(i,a,e,t.getSharedStencilBuffer())}return this._renderTarget}}let c=class extends d{constructor(e){super(e),this.type="group",this.layerViews=new s}initialize(){this.handles.add([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),this.layerViews.on("after-changes",(()=>this._layerViewsAfterChangesHandler())),this.layer.watch("visibilityMode",(()=>this._visibilityModeHandler()),!0),this.watch("visible",(()=>this._visibleHandler()),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()}set layerViews(e){this._set("layerViews",a(e,this._get("layerViews")))}isUpdating(){return this.layerViews.some((e=>e.updating))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,i)=>e+i.updatingProgress),0)/this.layerViews.length}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((i=>i.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>{const i=this._findLayerViewForLayer(e);return i&&i.visible}));return e&&this._findLayerViewForLayer(e)}_enforceExclusiveVisibility(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((i=>{i.visible=i===e})))}_layerViewsChangeHandler(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((e=>e.watch("visible",(i=>this._layerViewVisibleHandler(i,e)),!0))).toArray(),"grouplayerview:visible");const i=e.added[e.added.length-1];let t=null;i&&i.visible&&(t=i),this._enforceVisibility(t)}_layerViewsAfterChangesHandler(){this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((e=>e.watch("updating",(()=>this._updateUpdating()),!0))).toArray(),"grouplayerview:updating"),this._updateUpdating()}_enforceVisibility(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const e=this.visible;this.layerViews.forEach((i=>{i.visible=e}));break}case"exclusive":this._enforceExclusiveVisibility(e)}}_visibilityModeHandler(){this._enforceVisibility()}_layerViewVisibleHandler(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i)}}_visibleHandler(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility()}_updateUpdating(){this.notifyChange("updating")}};e([i({cast:t})],c.prototype,"layerViews",null),e([i()],c.prototype,"view",void 0),e([i({readOnly:!0})],c.prototype,"updatingProgress",null),c=e([r("esri.views.layers.GroupLayerView")],c);var y=c;let p=class extends(h(y)){constructor(){super(...arguments),this.container=new o}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(()=>this._updateStageChildren())),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}hitTest(e,i){return null}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,i)=>this.container.addChildAt(e.container,i)))}};p=e([r("esri.views.2d.layers.GroupLayerView2D")],p);var g=p;export{g as default};