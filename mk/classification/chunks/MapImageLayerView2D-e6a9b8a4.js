import{V as e,X as t,W as r,dI as i,a,r as s,cg as o,dM as n,n as p,du as m,e2 as l,g as h}from"../main.js";import{t as d}from"./BitmapContainer-c6887c6a.js";import{l as c,d as u}from"./LayerView-1d24b97a.js";import{t as g,o as y}from"./BaseGraphicContainer-2655c973.js";import{I as f}from"./Utils-d750d03c.js";import{S as b}from"./ExportStrategy-2bae5143.js";import{n as j}from"./ExportImageParameters-e75a839e.js";import{s as v}from"./clickToleranceUtils-2abebeb9.js";import{t as x,d as w}from"./popupUtils-9fb40ba3.js";import{a as C}from"./drapedUtils-3151812a.js";import"./WGLContainer-6108f277.js";import"./definitions-53d29f17.js";import"./VertexArrayObject-4b3f3910.js";import"./Texture-cf3a29a3.js";import"./ShaderCompiler-0c54d830.js";import"./config-4e1ab712.js";import"./GeometryUtils-c4c7ed43.js";import"./MaterialKey-3ce37902.js";import"./Container-8a6a7aff.js";import"./mat4f32-b5b66fd7.js";import"./earcut-1a691bec.js";import"./quantizationUtils-ad4bedd8.js";import"./json-5b2b387c.js";import"./Matcher-d0865552.js";import"./TileStore-f1a25bdb.js";import"./FeatureSetReader-9cbbe490.js";import"./centroid-a817072d.js";import"./visualVariablesUtils-d1a73cec.js";import"./visualVariablesUtils-28fc5ef5.js";import"./quickselect-4c28d668.js";import"./tileUtils-068a3421.js";import"./schemaUtils-2e326168.js";import"./CIMSymbolHelper-54910020.js";import"./Rect-df6cbc83.js";import"./BidiEngine-2645f818.js";import"./MD5-8aa08108.js";import"./TileClipper-651b557e.js";import"./FeatureContainer-5484a33e.js";import"./TileContainer-5081b886.js";import"./Bitmap-384836be.js";import"./sublayerUtils-ec6996bf.js";let I=class extends g{renderChildren(e){if(e.drawPhase!==f.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};I=e([t("esri.views.2d.layers.support.HighlightGraphicContainer")],I);var U=I;const P=p=>{let m=class extends p{initialize(){this.exportImageParameters=new j({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:r}=this;if(!e)return Promise.reject(new a("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const i=this.get("view.scale"),n=[],p=async e=>{const r=0===e.minScale||i<=e.minScale,a=0===e.maxScale||i>=e.maxScale;if(e.visible&&r&&a)if(e.sublayers)e.sublayers.forEach(p);else if(e.popupEnabled){const r=w(e,{...t,defaultPopupTemplateEnabled:!1});s(r)&&n.unshift({sublayer:e,popupTemplate:r})}},m=r.sublayers.toArray().reverse().map(p);await Promise.all(m);const l=n.map((async({sublayer:r,popupTemplate:i})=>{await r.load().catch((()=>{}));const a=r.createQuery(),o=s(t)?t.event:null,n=v({renderer:r.renderer,event:o}),p=this.createFetchPopupFeaturesQueryGeometry(e,n);a.geometry=p,a.outFields=await x(r,i);const m=await this._loadArcadeModules(i);return m&&m.arcadeUtils.hasGeometryOperations(i)||(a.maxAllowableOffset=p.width/n),(await r.queryFeatures(a)).features}));return(await o(l)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return n()}};return e([r()],m.prototype,"exportImageParameters",void 0),e([r({readOnly:!0})],m.prototype,"exportImageVersion",null),e([r()],m.prototype,"layer",void 0),e([r()],m.prototype,"suspended",void 0),e([r(i)],m.prototype,"timeExtent",void 0),m=e([t("esri.views.layers.MapImageLayerView")],m),m},M=p.getLogger("esri.views.2d.layers.MapImageLayerView2D");let V=class extends(P(m(c(u)))){constructor(){super(...arguments),this._highlightGraphics=new l}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{h(e)||M.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,a=r>=10;this._bitmapContainer=new d,this.container.addChild(this._bitmapContainer);const s=new y({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new U(this.view.featuresTilingScheme)});this.container.addChild(s.container),this.strategy=new b({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:a,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return C(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};e([r()],V.prototype,"strategy",void 0),e([r()],V.prototype,"updating",void 0),V=e([t("esri.views.2d.layers.MapImageLayerView2D")],V);var S=V;export{S as default};