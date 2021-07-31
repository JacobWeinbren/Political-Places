import{V as e,X as t,W as r,dN as i,ei as a,a as s,r as o,cl as n,dR as p,n as m,dz as d,e7 as l,g as h}from"../main.js";import{t as c}from"./BitmapContainer-8d0d4d9b.js";import{l as u,d as g}from"./LayerView-8f8ba23a.js";import{t as f,o as y}from"./BaseGraphicContainer-627924c6.js";import{I as j}from"./Utils-ef13a049.js";import{S as b}from"./ExportStrategy-fa5fefe7.js";import{s as v}from"./clickToleranceUtils-32aa5a86.js";import{t as w,d as x}from"./popupUtils-99f54e57.js";import{a as C}from"./drapedUtils-2df950f9.js";import"./WGLContainer-66f5575f.js";import"./definitions-bd7968b3.js";import"./VertexArrayObject-40244969.js";import"./Texture-192a103c.js";import"./ShaderCompiler-ee9f064d.js";import"./config-8597b78f.js";import"./GeometryUtils-30b98fd3.js";import"./MaterialKey-1ba13c24.js";import"./Container-b6c614cc.js";import"./mat4f32-2521725d.js";import"./earcut-26dd4f9f.js";import"./projectionSupport-0bdc6fc2.js";import"./json-c1314431.js";import"./Matcher-70617d0b.js";import"./TileStore-745218b1.js";import"./FeatureSetReader-29589c1b.js";import"./centroid-3acadd71.js";import"./visualVariablesUtils-c2553223.js";import"./visualVariablesUtils-f277f5da.js";import"./quickselect-2a5dada6.js";import"./tileUtils-22d6d29e.js";import"./schemaUtils-2d1ed7fe.js";import"./CIMSymbolHelper-19f5d4c7.js";import"./Rect-46a6423d.js";import"./BidiEngine-a3336f07.js";import"./MD5-73ac3f43.js";import"./TileClipper-6d793dd2.js";import"./cimAnalyzer-6fa90712.js";import"./quantizationUtils-18173b62.js";import"./FeatureContainer-4ec22c00.js";import"./TileContainer-1dd9dbe0.js";import"./Bitmap-f6bace84.js";let I=class extends f{renderChildren(e){if(e.drawPhase!==j.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};I=e([t("esri.views.2d.layers.support.HighlightGraphicContainer")],I);var U=I;const P=m=>{let d=class extends m{initialize(){this.exportImageParameters=new a({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:r}=this;if(!e)return Promise.reject(new s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const i=this.get("view.scale"),a=[],p=async e=>{const r=0===e.minScale||i<=e.minScale,s=0===e.maxScale||i>=e.maxScale;if(e.visible&&r&&s)if(e.sublayers)e.sublayers.forEach(p);else if(e.popupEnabled){const r=x(e,{...t,defaultPopupTemplateEnabled:!1});o(r)&&a.unshift({sublayer:e,popupTemplate:r})}},m=r.sublayers.toArray().reverse().map(p);await Promise.all(m);const d=a.map((async({sublayer:r,popupTemplate:i})=>{await r.load().catch((()=>{}));const a=r.createQuery(),s=o(t)?t.event:null,n=v({renderer:r.renderer,event:s}),p=this.createFetchPopupFeaturesQueryGeometry(e,n);a.geometry=p,a.outFields=await w(r,i);const m=await this._loadArcadeModules(i);return m&&m.arcadeUtils.hasGeometryOperations(i)||(a.maxAllowableOffset=p.width/n),(await r.queryFeatures(a)).features}));return(await n(d)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return p()}};return e([r()],d.prototype,"exportImageParameters",void 0),e([r({readOnly:!0})],d.prototype,"exportImageVersion",null),e([r()],d.prototype,"layer",void 0),e([r()],d.prototype,"suspended",void 0),e([r(i)],d.prototype,"timeExtent",void 0),d=e([t("esri.views.layers.MapImageLayerView")],d),d},S=m.getLogger("esri.views.2d.layers.MapImageLayerView2D");let V=class extends(P(d(u(g)))){constructor(){super(...arguments),this._highlightGraphics=new l}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{h(e)||S.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,a=r>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer);const s=new y({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new U(this.view.featuresTilingScheme)});this.container.addChild(s.container),this.strategy=new b({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:a,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return C(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};e([r()],V.prototype,"strategy",void 0),e([r()],V.prototype,"updating",void 0),V=e([t("esri.views.2d.layers.MapImageLayerView2D")],V);var M=V;export{M as default};