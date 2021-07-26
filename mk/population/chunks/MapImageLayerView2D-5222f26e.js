import{V as e,X as t,W as r,dI as i,a,r as s,cg as o,dM as n,n as p,du as m,e2 as l,g as h}from"../main.js";import{t as d}from"./BitmapContainer-4dfab4c5.js";import{l as c,d as u}from"./LayerView-d567179c.js";import{t as g,i as f}from"./BaseGraphicContainer-8562b77d.js";import{I as y}from"./Utils-8f3351b9.js";import{S as b}from"./ExportStrategy-d14a0455.js";import{n as j}from"./ExportImageParameters-75e29e6c.js";import{s as v}from"./clickToleranceUtils-ff9b54b8.js";import{t as x,d as w}from"./popupUtils-9d4b3437.js";import{a as C}from"./drapedUtils-4646ef1b.js";import"./WGLContainer-624bf74e.js";import"./definitions-9b706c30.js";import"./VertexArrayObject-24b79200.js";import"./Texture-4f49b301.js";import"./ShaderCompiler-d1213600.js";import"./config-ce383fc5.js";import"./GeometryUtils-c573938c.js";import"./MaterialKey-a0ce035e.js";import"./Container-529d87ac.js";import"./mat4f32-da8dff1b.js";import"./earcut-fdc0e191.js";import"./quantizationUtils-ca7a46a0.js";import"./json-03b80e6a.js";import"./Matcher-de09045b.js";import"./TileStore-73d2195c.js";import"./FeatureSetReader-a515279f.js";import"./centroid-fb917684.js";import"./visualVariablesUtils-0b33240f.js";import"./visualVariablesUtils-8b028813.js";import"./quickselect-213714bb.js";import"./tileUtils-d767ea9e.js";import"./schemaUtils-2b6452bd.js";import"./CIMSymbolHelper-48c73628.js";import"./Rect-0833d92c.js";import"./BidiEngine-aedaa270.js";import"./MD5-d159e5d6.js";import"./TileClipper-575654f9.js";import"./FeatureContainer-fbac6a95.js";import"./TileContainer-edc01541.js";import"./Bitmap-f8335f84.js";import"./sublayerUtils-5eb4c100.js";let I=class extends g{renderChildren(e){if(e.drawPhase!==y.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};I=e([t("esri.views.2d.layers.support.HighlightGraphicContainer")],I);var U=I;const P=p=>{let m=class extends p{initialize(){this.exportImageParameters=new j({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:r}=this;if(!e)return Promise.reject(new a("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const i=this.get("view.scale"),n=[],p=async e=>{const r=0===e.minScale||i<=e.minScale,a=0===e.maxScale||i>=e.maxScale;if(e.visible&&r&&a)if(e.sublayers)e.sublayers.forEach(p);else if(e.popupEnabled){const r=w(e,{...t,defaultPopupTemplateEnabled:!1});s(r)&&n.unshift({sublayer:e,popupTemplate:r})}},m=r.sublayers.toArray().reverse().map(p);await Promise.all(m);const l=n.map((async({sublayer:r,popupTemplate:i})=>{await r.load().catch((()=>{}));const a=r.createQuery(),o=s(t)?t.event:null,n=v({renderer:r.renderer,event:o}),p=this.createFetchPopupFeaturesQueryGeometry(e,n);a.geometry=p,a.outFields=await x(r,i);const m=await this._loadArcadeModules(i);return m&&m.arcadeUtils.hasGeometryOperations(i)||(a.maxAllowableOffset=p.width/n),(await r.queryFeatures(a)).features}));return(await o(l)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return n()}};return e([r()],m.prototype,"exportImageParameters",void 0),e([r({readOnly:!0})],m.prototype,"exportImageVersion",null),e([r()],m.prototype,"layer",void 0),e([r()],m.prototype,"suspended",void 0),e([r(i)],m.prototype,"timeExtent",void 0),m=e([t("esri.views.layers.MapImageLayerView")],m),m},M=p.getLogger("esri.views.2d.layers.MapImageLayerView2D");let V=class extends(P(m(c(u)))){constructor(){super(...arguments),this._highlightGraphics=new l}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{h(e)||M.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,a=r>=10;this._bitmapContainer=new d,this.container.addChild(this._bitmapContainer);const s=new f({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new U(this.view.featuresTilingScheme)});this.container.addChild(s.container),this.strategy=new b({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:a,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return C(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};e([r()],V.prototype,"strategy",void 0),e([r()],V.prototype,"updating",void 0),V=e([t("esri.views.2d.layers.MapImageLayerView2D")],V);var S=V;export default S;
