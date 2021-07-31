import{n as e,V as t,W as i,d1 as s,X as r,T as a,e7 as o,dZ as n,bO as l,r as p,g as h,Z as d,ca as u,L as c,dN as m,a as y,dt as g,a4 as v,dz as w,F as x,e8 as f}from"../main.js";import{l as b,d as j}from"./LayerView-e344cad3.js";import{j as _}from"./rasterProjectionHelper-d0e15a05.js";import{p as R}from"./vectorFieldUtils-c2dafdc1.js";import{r as E}from"./Container-4f0796f7.js";import{i as V}from"./GraphicContainer-d14cf80a.js";import{o as q}from"./BaseGraphicContainer-9411a9fa.js";import{m as U}from"./pixelUtils-631725cc.js";import{t as S}from"./BitmapContainer-d15356a7.js";import{e as D}from"./Bitmap-fef5d461.js";import{S as C}from"./ExportStrategy-964749ee.js";import{d as I}from"./popupUtils-9c3fe1d7.js";import"./mat4f32-2308129f.js";import"./Utils-a6360ab9.js";import"./Texture-1722ee47.js";import"./projectionSupport-d8130092.js";import"./json-812fb7d1.js";import"./Matcher-ef270d6f.js";import"./definitions-8d307e62.js";import"./TileStore-ab20450c.js";import"./FeatureSetReader-d5053eba.js";import"./centroid-1933d1b4.js";import"./visualVariablesUtils-3f7f79a0.js";import"./visualVariablesUtils-8d911ce2.js";import"./quickselect-a156c329.js";import"./tileUtils-1a73da67.js";import"./schemaUtils-a84d5118.js";import"./MaterialKey-2b9ba730.js";import"./CIMSymbolHelper-4c241148.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";import"./GeometryUtils-9ff4b746.js";import"./earcut-0cc318b8.js";import"./TileClipper-05040d1a.js";import"./cimAnalyzer-93e91afe.js";import"./quantizationUtils-935d126d.js";import"./VertexArrayObject-faa99832.js";import"./FeatureContainer-fd167465.js";import"./TileContainer-a1c182ba.js";import"./WGLContainer-d8d6409d.js";import"./ShaderCompiler-0141bd89.js";import"./config-31d4f506.js";const T=e.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let P=class extends a{constructor(){super(...arguments),this.attached=!1,this.container=new E,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._previousExtents=[],this._previousSymbolTileResolution=0,this._previousRendererSignature="",this.type="Graphics",this._graphics=new o,this._updateGraphics=n((async(e,t)=>{if(!e.stationary)return;const i=e.state,s=new l({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),[r,a]=e.state.size,o={};o.timeExtent=this.timeExtent,o.requestAsImageElement=!1,o.signal=t,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(s.spatialReference));const n="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,h=await this._projectFullExtentPromise,{extent:d,resolution:u,width:c,height:m}=R(s,r,a,n,h),y=await this.layer.fetchImage(d,c,m,o),g=this.layer.renderer;if("vector-field"===g.type){const t=y.pixelData.pixelBlock,i=g.sizeVariables[0];i.minDataValue&&i.maxDataValue||(i.minDataValue=t.statistics[0].minValue,i.maxDataValue=t.statistics[0].maxValue),this._pixelData={extent:d,pixelBlock:y.pixelData.pixelBlock};const s=JSON.stringify(this.layer.renderer),r=this._previousRendererSignature===s,a=Math.abs(this._previousSymbolTileResolution-u)/u<.01,o=d.clone().normalize(),n=this._previousExtents.some((e=>o.some((t=>e.intersects(t))))),l=r&&a&&n?this._previousExtents:[],h=await g.getGraphicsFromPixelData(y.pixelData,"vector-uv"===this.layer.rasterInfo.dataType,l);if(l.length){const e=this._graphics.items.filter((e=>p(e.geometry)&&l.some((t=>t.intersects(e.geometry)))&&!o.some((t=>t.intersects(e.geometry)))));this._graphics.removeMany(e),this._graphics.addMany(h)}else this._graphics.set("items",h);this._graphicsView.update(e),this._previousExtents=o,this._previousRendererSignature=s,this._previousSymbolTileResolution=u}}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{h(e)||T.error(e)}))}hitTest(e,t){const i=this.view.toMap(d(e,t));return Promise.resolve(new u({attributes:{},geometry:i,layer:this.layer}))}attach(){this._graphicsView=new q({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new V(this.view.featuresTilingScheme)}),this.attached=!0}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}async _getProjectedFullExtent(e){try{return await _(this.layer.fullExtent,e)}catch(t){try{const t=(await c(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?l.fromJSON(t):null}catch{return null}}}};t([i()],P.prototype,"attached",void 0),t([i()],P.prototype,"container",void 0),t([i()],P.prototype,"layer",void 0),t([i()],P.prototype,"timeExtent",void 0),t([i()],P.prototype,"view",void 0),t([i()],P.prototype,"updateRequested",void 0),t([i()],P.prototype,"updating",null),t([s({graphics:"Graphics"})],P.prototype,"type",void 0),P=t([r("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],P);var B=P;const M=e.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let k=class extends a{constructor(){super(...arguments),this.attached=!1,this.container=new E,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{h(e)||M.error(e)}))}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e,t){const i=this.view.toMap(d(e,t));return Promise.resolve(new u({attributes:{},geometry:i,layer:this.layer}))}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new S,this.strategy=new C({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const i=e.source;i.pixelBlock=t.pixelBlock,i.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),s=U(i,t);return s?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}_fetchImage(e,t,i,s){return(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,s).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:s.signal}).then((t=>{const i=new D(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return i.filter=e=>this.layer.applyFilter(e),i}))))}};t([i()],k.prototype,"attached",void 0),t([i()],k.prototype,"container",void 0),t([i()],k.prototype,"layer",void 0),t([i()],k.prototype,"strategy",void 0),t([i()],k.prototype,"timeExtent",void 0),t([i()],k.prototype,"view",void 0),t([i()],k.prototype,"updateRequested",void 0),t([i()],k.prototype,"updating",null),t([s({imagery:"Imagery"})],k.prototype,"type",void 0),k=t([r("esri.views.2d.layers.imagery.ImageryView2D")],k);var F=k;const G=e=>{let s=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)throw new y("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:s}=i,r=I(i,t);if(!s||!p(r))throw new y("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:s,popupTemplate:r});const a=await r.getRequiredFields(),o=new g;o.timeExtent=this.timeExtent,o.geometry=e,o.outFields=a,o.outSpatialReference=e.spatialReference;const n=this.view.resolution,l="2d"===this.view.type?new v(n,n,this.view.spatialReference):new v(.5*n,.5*n,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:d}=r.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},u={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:l,showNoDataRecords:d,signal:p(t)?t.signal:null};return i.queryVisibleRasters(o,u).then((e=>e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}};return t([i()],s.prototype,"layer",void 0),t([i()],s.prototype,"suspended",void 0),t([i(m)],s.prototype,"timeExtent",void 0),t([i()],s.prototype,"view",void 0),s=t([r("esri.views.layers.ImageryLayerView")],s),s};let z=class extends(G(w(b(j)))){constructor(){super(...arguments),this._exportImageVersion=-1}initialize(){this.handles.add(x(this,["layer.blendMode"],(e=>{this.subview&&(this.subview.container.blendMode=e)}),!0))}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return!(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?Promise.resolve(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([x(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate()})),this.layer.on("redraw",(()=>this.subview.redraw())),f(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||!this.suspended&&this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var i,s;"vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t||(null==(i=this.subview)||i.uninstall(this.container),null==(s=this.subview)||s.destroy(),this.subview="Imagery"===t?new F({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new B({layer:this.layer,view:this.view,timeExtent:this.timeExtent}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode),this.requestUpdate()}};t([i()],z.prototype,"pixelData",null),t([i({readOnly:!0})],z.prototype,"updating",null),t([i()],z.prototype,"subview",void 0),z=t([r("esri.views.2d.layers.ImageryLayerView2D")],z);var N=z;export{N as default};
