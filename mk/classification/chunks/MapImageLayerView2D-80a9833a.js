import{V as e,X as t,W as r,dI as a,a as i,r as s,cg as o,dM as n,n as p,du as m,e2 as c,g as l}from"../main.js";import{t as h}from"./BitmapContainer-fe6f794b.js";import{l as d,d as u}from"./LayerView-8c6f90f3.js";import{t as g,o as f}from"./BaseGraphicContainer-f0c67aca.js";import{I as y}from"./Utils-b87795af.js";import{S as b}from"./ExportStrategy-923a3ea2.js";import{n as j}from"./ExportImageParameters-9181c63f.js";import{s as v}from"./clickToleranceUtils-2abebeb9.js";import{t as x,d as w}from"./popupUtils-1810c57e.js";import{a as C}from"./drapedUtils-8b896cc0.js";import"./WGLContainer-3d438fc4.js";import"./definitions-53d29f17.js";import"./VertexArrayObject-00fccdc0.js";import"./Texture-d641c4da.js";import"./ShaderCompiler-f974b09e.js";import"./config-4e1ab712.js";import"./GeometryUtils-c4c7ed43.js";import"./MaterialKey-ac670fbc.js";import"./Container-ab453c45.js";import"./mat4f32-b5b66fd7.js";import"./earcut-1a691bec.js";import"./quantizationUtils-44dc8b26.js";import"./json-5b2b387c.js";import"./Matcher-8f2cecd5.js";import"./TileStore-7d39cfc5.js";import"./FeatureSetReader-da04c646.js";import"./centroid-a817072d.js";import"./visualVariablesUtils-797ef442.js";import"./visualVariablesUtils-6aacce70.js";import"./quickselect-4c28d668.js";import"./tileUtils-34921a32.js";import"./schemaUtils-ba7db079.js";import"./CIMSymbolHelper-765cd6e1.js";import"./Rect-df6cbc83.js";import"./BidiEngine-2645f818.js";import"./MD5-8aa08108.js";import"./TileClipper-aa256ca5.js";import"./FeatureContainer-b872ab5c.js";import"./TileContainer-5a9cd11a.js";import"./Bitmap-cb42dd87.js";import"./sublayerUtils-ec6996bf.js";let I=class extends g{renderChildren(e){if(e.drawPhase!==y.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};I=e([t("esri.views.2d.layers.support.HighlightGraphicContainer")],I);var U=I;const P=p=>{let m=class extends p{initialize(){this.exportImageParameters=new j({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:r}=this;if(!e)return Promise.reject(new i("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const a=this.get("view.scale"),n=[],p=async e=>{const r=0===e.minScale||a<=e.minScale,i=0===e.maxScale||a>=e.maxScale;if(e.visible&&r&&i)if(e.sublayers)e.sublayers.forEach(p);else if(e.popupEnabled){const r=w(e,{...t,defaultPopupTemplateEnabled:!1});s(r)&&n.unshift({sublayer:e,popupTemplate:r})}},m=r.sublayers.toArray().reverse().map(p);await Promise.all(m);const c=n.map((async({sublayer:r,popupTemplate:a})=>{await r.load().catch((()=>{}));const i=r.createQuery(),o=s(t)?t.event:null,n=v({renderer:r.renderer,event:o}),p=this.createFetchPopupFeaturesQueryGeometry(e,n);i.geometry=p,i.outFields=await x(r,a);const m=await this._loadArcadeModules(a);return m&&m.arcadeUtils.hasGeometryOperations(a)||(i.maxAllowableOffset=p.width/n),(await r.queryFeatures(i)).features}));return(await o(c)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return n()}};return e([r()],m.prototype,"exportImageParameters",void 0),e([r({readOnly:!0})],m.prototype,"exportImageVersion",null),e([r()],m.prototype,"layer",void 0),e([r()],m.prototype,"suspended",void 0),e([r(a)],m.prototype,"timeExtent",void 0),m=e([t("esri.views.layers.MapImageLayerView")],m),m},M=p.getLogger("esri.views.2d.layers.MapImageLayerView2D");let V=class extends(P(m(d(u)))){constructor(){super(...arguments),this._highlightGraphics=new c}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{l(e)||M.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,a=r>=10.3,i=r>=10;this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer);const s=new f({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new U(this.view.featuresTilingScheme)});this.container.addChild(s.container),this.strategy=new b({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:a,imageNormalizationSupported:i,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return C(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...a})}};e([r()],V.prototype,"strategy",void 0),e([r()],V.prototype,"updating",void 0),V=e([t("esri.views.2d.layers.MapImageLayerView2D")],V);var S=V;export{S as default};
