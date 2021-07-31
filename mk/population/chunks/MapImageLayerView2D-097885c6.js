import{V as e,X as t,W as r,dN as i,ei as a,a as s,r as o,cl as n,dR as p,n as m,dz as l,e7 as h,g as d}from"../main.js";import{t as c}from"./BitmapContainer-b5514988.js";import{l as u,d as g}from"./LayerView-477ec6c1.js";import{t as f,o as y}from"./BaseGraphicContainer-7a1327d5.js";import{I as j}from"./Utils-877df1ab.js";import{S as b}from"./ExportStrategy-270a01fa.js";import{s as v}from"./clickToleranceUtils-32aa5a86.js";import{t as w,d as x}from"./popupUtils-c6eb3291.js";import{a as C}from"./drapedUtils-fe9d45e8.js";import"./WGLContainer-0b487b4b.js";import"./definitions-bd7968b3.js";import"./VertexArrayObject-6e48acf8.js";import"./Texture-0006c2e7.js";import"./ShaderCompiler-5d1a779d.js";import"./config-8597b78f.js";import"./GeometryUtils-30b98fd3.js";import"./MaterialKey-0931ca69.js";import"./Container-93dab031.js";import"./mat4f32-2521725d.js";import"./earcut-26dd4f9f.js";import"./projectionSupport-0dc9ef36.js";import"./json-c1314431.js";import"./Matcher-624fdb9b.js";import"./TileStore-05669a6e.js";import"./FeatureSetReader-e49971fe.js";import"./centroid-3acadd71.js";import"./visualVariablesUtils-4f26f488.js";import"./visualVariablesUtils-604795d4.js";import"./quickselect-2a5dada6.js";import"./tileUtils-608695c5.js";import"./schemaUtils-2b1ebb93.js";import"./CIMSymbolHelper-18dcfaf1.js";import"./Rect-46a6423d.js";import"./BidiEngine-a3336f07.js";import"./MD5-73ac3f43.js";import"./TileClipper-39f4bc25.js";import"./cimAnalyzer-a7725334.js";import"./quantizationUtils-baf292e1.js";import"./FeatureContainer-44eded51.js";import"./TileContainer-50379a5b.js";import"./Bitmap-a3676d64.js";let I=class extends f{renderChildren(e){if(e.drawPhase!==j.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};I=e([t("esri.views.2d.layers.support.HighlightGraphicContainer")],I);var U=I;const P=m=>{let l=class extends m{initialize(){this.exportImageParameters=new a({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:r}=this;if(!e)return Promise.reject(new s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const i=this.get("view.scale"),a=[],p=async e=>{const r=0===e.minScale||i<=e.minScale,s=0===e.maxScale||i>=e.maxScale;if(e.visible&&r&&s)if(e.sublayers)e.sublayers.forEach(p);else if(e.popupEnabled){const r=x(e,{...t,defaultPopupTemplateEnabled:!1});o(r)&&a.unshift({sublayer:e,popupTemplate:r})}},m=r.sublayers.toArray().reverse().map(p);await Promise.all(m);const l=a.map((async({sublayer:r,popupTemplate:i})=>{await r.load().catch((()=>{}));const a=r.createQuery(),s=o(t)?t.event:null,n=v({renderer:r.renderer,event:s}),p=this.createFetchPopupFeaturesQueryGeometry(e,n);a.geometry=p,a.outFields=await w(r,i);const m=await this._loadArcadeModules(i);return m&&m.arcadeUtils.hasGeometryOperations(i)||(a.maxAllowableOffset=p.width/n),(await r.queryFeatures(a)).features}));return(await n(l)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return p()}};return e([r()],l.prototype,"exportImageParameters",void 0),e([r({readOnly:!0})],l.prototype,"exportImageVersion",null),e([r()],l.prototype,"layer",void 0),e([r()],l.prototype,"suspended",void 0),e([r(i)],l.prototype,"timeExtent",void 0),l=e([t("esri.views.layers.MapImageLayerView")],l),l},S=m.getLogger("esri.views.2d.layers.MapImageLayerView2D");let V=class extends(P(l(u(g)))){constructor(){super(...arguments),this._highlightGraphics=new h}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{d(e)||S.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,a=r>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer);const s=new y({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new U(this.view.featuresTilingScheme)});this.container.addChild(s.container),this.strategy=new b({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:a,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return C(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};e([r()],V.prototype,"strategy",void 0),e([r()],V.prototype,"updating",void 0),V=e([t("esri.views.2d.layers.MapImageLayerView2D")],V);var M=V;export{M as default};