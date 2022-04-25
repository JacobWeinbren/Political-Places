import{L as e,an as t,dx as i,s,Z as r,_ as a,a0 as l,di as o,ck as n,cJ as h,cn as u,aS as c,cH as d,cI as p,r as y,t as m,g as f,a8 as g,dd as b,j as w,cu as _,c1 as v,b0 as P,cK as T,cW as I,e as x,ci as R,dy as S,cN as V,da as C}from"../main.js";import{_ as U,d as z}from"./RasterVFDisplayObject-1842aadc.js";import{f as k,u as L}from"./LayerView-bd7ec411.js";import{e as D,w as F,d as E}from"./WGLContainer-e5b769fe.js";import{r as j,o as G}from"./TileContainer-dc56fab2.js";import{I as B}from"./Utils-4efd2b2d.js";import{u as W,l as q}from"./pixelUtils-5a36ade0.js";import{g as O,u as M,s as A,i as Q}from"./RawBlockCache-45cfdba4.js";import{L as N,$ as H,k as J,B as K}from"./rasterProjectionHelper-98d50696.js";import{r as X}from"./util-713ce8b4.js";import{j as Y}from"./dataUtils-176d17ed.js";import{d as Z}from"./popupUtils-dd0cff5d.js";import{i as $}from"./RefreshableLayerView-4e2e6ef8.js";import"./Container-8f96c744.js";import"./VertexArrayObject-47d07736.js";import"./Texture-1175e9f5.js";import"./enums-1bc10a6c.js";import"./VertexElementDescriptor-3277c87e.js";import"./enums-873d3e5a.js";import"./ProgramTemplate-28d6e1e9.js";import"./StyleDefinition-3f884fc8.js";import"./config-0f36ebd6.js";import"./GeometryUtils-dd2125c2.js";import"./MaterialKey-37656b1a.js";import"./earcut-a218cde0.js";class ee extends j{constructor(e,t,i,s,r,a=null){super(e,t,i,s,r),this.bitmap=new D(a,null,null),this.bitmap.coordScale=[s,r],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}_createTransforms(){return{dvs:e(),tileMat3:e()}}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}class te extends G{constructor(){super(...arguments),this.isCustomTilingScheme=!1}createTile(e){const t=this._getTileBounds(e),[i,s]=this._tileInfoView.tileInfo.size;return new ee(e,t[0],t[3],i,s)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (tile)",brushes:[F.raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:B.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===B.MAP&&super.doRender(e)}_getTileBounds(e){const s=this._tileInfoView.getTileBounds(t(),e);if(this.isCustomTilingScheme&&e.world){const{tileInfo:t}=this._tileInfoView,r=i(t.spatialReference);if(r){const{resolution:i}=t.lodAt(e.level),a=r/i%t.size[0],l=a?(t.size[0]-a)*i:0;s[0]-=l*e.world,s[2]-=l*e.world}}return s}}const ie=[0,0],se=s.getLogger("esri.views.2d.layers.ImageryTileLayerView2D");let re=class extends o{constructor(){super(...arguments),this._emptyTilePixelBlock=null,this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._srcResolutions=null,this.previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._isCustomTilingScheme=!1,this._globalUpdateRequested=!1,this.attached=!1,this.container=null,this.layer=null,this.timeExtent=null,this.redrawOrRefetch=n(((e,t)=>!this.previousLOD||this.layerView.suspended?Promise.resolve():e?this.doRefresh():this._redrawImage(t)))}get useWebGLForProcessing(){var e;return null==(e=this._get("useWebGLForProcessing"))||e}set useWebGLForProcessing(e){this._set("useWebGLForProcessing",e)}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){if(this._tileStrategy&&this.useProgressiveUpdate!==e){this._tileStrategy.destroy(),this.container.removeAllChildren();const t=this._getCacheSize(e);this._tileStrategy=new h({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.layerView.requestUpdate()}}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:i,scale:s}=e.state,r=this._tileInfoView.getClosestInfoForScale(s);if(this.layer.raster){var a;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],s=t.toJSON?t:u.fromJSON(t);O(this._blockCacheRegistryUrl,this._blockCacheRegistryId,s,i,e,this.layer.raster.ioConfig.sampling)}this._needBlockCacheUpdate=!1,(null==(a=this.previousLOD)?void 0:a.level)!==r.level&&(this.previousLOD=r,null==this._symbolizerParams||this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0))}}moveEnd(){!this.layerView.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=new AbortController,0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.layerView.requestUpdate()})));const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(e),this.layerView.requestUpdate()}get updating(){return this._fetchQueue.updating||this._globalUpdateRequested||!(!this.updatingHandles||!this.updatingHandles.updating)}attach(){c().supportsTextureFloat||(this.useWebGLForProcessing=!1),this._initializeTileInfo(),this._tileInfoView=new d(this.layerView.tileInfo,this.layerView.fullExtent);const e=this._computeFetchConcurrency();this._fetchQueue=new p({tileInfoView:this._tileInfoView,concurrency:e,process:(e,t)=>this._fetchTile1(e,t)});const t=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new h({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._updateBlockCacheRegistry()}detach(){this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,M(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryUrl=this._blockCacheRegistryId=null}acquireTile(e){const t=this.container.createTile(e);return this._enqueueTileFetch(t),this.layerView.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.layerView.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){this._fetchQueue.abort(e.key.id),this.container.removeChild(e),e.once("detach",(()=>{e.destroy(),this.layerView.requestUpdate()})),this.layerView.requestUpdate()}createEmptyTilePixelBlock(e=null){const t=null==e||e.join(",")===this._tileInfoView.tileInfo.size.join(",");if(t&&y(this._emptyTilePixelBlock))return this._emptyTilePixelBlock;e=e||this._tileInfoView.tileInfo.size;const[i,s]=e,r=new W({width:i,height:s,pixels:[new Uint8Array(i*s)],mask:new Uint8Array(i*s),pixelType:"u8"});return t&&(this._emptyTilePixelBlock=r),r}_fetchTile1(e,t){const i=!m(t)&&t.signal,s=this.canUseWebGLForProcessing(),{layerView:r}=this,a=!r.tileInfo.isWrappable&&y(N(r.view.spatialReference)),l={allowPartialFill:!0,datumTransformation:r.datumTransformation,interpolation:s?"nearest":this.layer.interpolation,registryId:this._blockCacheRegistryId,requestRawData:s,signal:f(i),srcResolution:this._srcResolutions[e.level],timeExtent:r.timeExtent,tileInfo:r.tileInfo,disableWrapAround:a};return this.fetchTile(e,l)}_getCacheSize(e){return e?40:0}_initializeTileInfo(){const e=this.layerView.view.spatialReference,t=new g({x:this.layerView.fullExtent.xmin,y:this.layerView.fullExtent.ymax,spatialReference:e}),{scales:i,srcResolutions:s,isCustomTilingScheme:r}=H(this.layer.rasterInfo,e),a=b.create({spatialReference:e,size:512,scales:i});(0===a.origin.x||a.origin.x>t.x)&&(a.origin=t),this._isCustomTilingScheme=r,this.layerView.set("tileInfo",a),this._srcResolutions=null!=s?s:[]}_computeFetchConcurrency(){const{blockBoundary:e}=this.layer.rasterInfo.storageInfo,t=e[e.length-1];return(t.maxCol-t.minCol+1)*(t.maxRow-t.minRow+1)>64?2:10}async _enqueueTileFetch(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key),{bandIds:i}=this.layer;let s=!this.useProgressiveUpdate||this.layerView.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.layerView.moving&&0===this._fetchQueue.length){s=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal)}catch(e){w(e)&&se.error(e)}this._globalUpdateRequested=!1}!this.canUseWebGLForProcessing()&&"rasterVF"!==this.type||this.layerView.hasTilingEffects||null!=this._symbolizerParams||this._updateSymbolizerParams();const r=this._tileInfoView.getTileCoords(ie,e.key),a=this._tileInfoView.getTileResolution(e.key);await this.updateTileSource(e,{source:t,symbolizerParams:this._symbolizerParams,globalSymbolizerParams:this._globalSymbolizerParams,suspended:s,bandIds:i,coords:r,resolution:a}),e.once("attach",(()=>this.layerView.requestUpdate())),this.container.addChild(e)}catch(e){w(e)||se.error(e)}this.layerView.requestUpdate()}}async _redrawImage(e){if(0===this.container.children.length)return;await this.updatingHandles.addPromise(this.layer.updateRenderer()),this.layerView.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const t=this.container.children.map((async e=>this.updateTileSymbolizerParameters(e,{local:this._symbolizerParams,global:this._globalSymbolizerParams})));await _(t),this.container.requestRender()}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this.previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},i=await this.layer.fetchPixels(this.layerView.view.extent,this.layerView.view.width,this.layerView.view.height,t);if(!i||!i.pixelBlock)return;const s=this.layer.symbolizer.generateWebGLParameters({pixelBlock:q(i.pixelBlock,this.layer.bandIds),isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds});!this.canUseWebGLForProcessing()&&s&&"stretch"===s.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(s.factor=s.factor.map((e=>255*e)),s.outMin=Math.round(255*s.outMin),s.outMax=Math.round(255*s.outMax)),this._globalSymbolizerParams=s}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds})}_updateBlockCacheRegistry(e=!1){const{url:t,rasterInfo:i,raster:s}=this.layer,{multidimensionalDefinition:r}=this.layer.normalizeRasterFetchOptions({multidimensionalDefinition:this.layer.multidimensionalDefinition,timeExtent:this.layerView.timeExtent}),a=null!=i&&i.multidimensionalInfo?s.getSliceIndex(r):null,l=Q(t,a);if(l!==this._blockCacheRegistryUrl){if(null!=this._blockCacheRegistryUrl&&M(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=A(l,this.layer.raster.rasterInfo),e){const e=this._tileInfoView.getClosestInfoForScale(this.layerView.view.scale),t=this._srcResolutions[e.level];O(l,this._blockCacheRegistryId,this.layerView.view.extent,this.layerView.view.resolution,t,this.layer.raster.ioConfig.sampling)}this._blockCacheRegistryUrl=l}}async doRefresh(){await this.updatingHandles.addPromise(this.layer.updateRenderer()),this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._updateBlockCacheRegistry(!0),this._fetchQueue.reset();const e=[];this._tileStrategy.tiles.forEach((t=>e.push(this._enqueueTileFetch(t)))),await _(e)}};r([a()],re.prototype,"_fetchQueue",void 0),r([a()],re.prototype,"_globalUpdateRequested",void 0),r([a()],re.prototype,"attached",void 0),r([a()],re.prototype,"container",void 0),r([a()],re.prototype,"layer",void 0),r([a()],re.prototype,"layerView",void 0),r([a()],re.prototype,"type",void 0),r([a()],re.prototype,"useWebGLForProcessing",null),r([a()],re.prototype,"useProgressiveUpdate",null),r([a()],re.prototype,"timeExtent",void 0),r([a()],re.prototype,"updating",null),re=r([l("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")],re);let ae=class extends re{constructor(){super(...arguments),this.container=null,this.layer=null,this.type="raster"}attach(){super.attach(),this.container=new te(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme}detach(){super.detach(),this.container.removeAllChildren(),this.container=null}canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&X(this.layer))}fetchTile(e,t){return this.layer.fetchTile(e.level,e.row,e.col,t)}async updateTileSource(e,t){const{bandIds:i}=this.layer,s=this._getLayerInterpolation(),r=this.canUseWebGLForProcessing(),{source:a,symbolizerParams:l,globalSymbolizerParams:o,suspended:n,coords:h,resolution:u}=t,{bitmap:c}=e;if([c.x,c.y]=h,c.resolution=u,a&&y(a)&&y(a.pixelBlock)){const e={extent:a.extent,pixelBlock:a.pixelBlock};if(c.rawPixelData=e,r)c.source=a.pixelBlock,c.isRendereredSource=!1;else{const t=await this.layer.applyRenderer(e,"stretch"===(null==o?void 0:o.type)?o:null);c.source=t,c.isRendereredSource=!0}c.symbolizerParameters=r?l:null,r?c.transformGrid||(c.transformGrid=a.transformGrid):c.transformGrid=null}else{const e=this.createEmptyTilePixelBlock();c.source=e,c.symbolizerParameters=r?l:null,c.transformGrid=null}c.bandIds=r?i:null,c.width=this._tileInfoView.tileInfo.size[0],c.height=this._tileInfoView.tileInfo.size[1],c.interpolation=s,c.suspended=n,c.invalidateTexture()}async updateTileSymbolizerParameters(e,t){const{local:i,global:s}=t,{bandIds:r}=this.layer,a=this._getLayerInterpolation(),l=this.canUseWebGLForProcessing(),{bitmap:o}=e,{rawPixelData:n}=o;!l&&y(n)?(o.source=await this.layer.applyRenderer(n,"stretch"===(null==s?void 0:s.type)?s:null),o.isRendereredSource=!0):(o.isRendereredSource&&y(n)&&(o.source=n.pixelBlock),o.isRendereredSource=!1),o.symbolizerParameters=l?s||i:null,o.bandIds=l?r:null,o.interpolation=a,o.suspended=!1}_getLayerInterpolation(){const e=this.layer.renderer.type;if("raster-colormap"===e||"unique-value"===e||"class-breaks"===e)return"nearest";const{interpolation:t}=this.layer,{renderer:i}=this.layer;return"raster-stretch"===i.type&&null!=i.colorRamp?"bilinear"===t||"cubic"===t?"bilinear":"nearest":t}};r([a()],ae.prototype,"container",void 0),r([a()],ae.prototype,"layer",void 0),r([a()],ae.prototype,"type",void 0),ae=r([l("esri.views.2d.layers.imagery.ImageryTileView2D")],ae);const le=ae;class oe extends j{constructor(e,t,i,s,r,a=null){super(e,t,i,s,r),this.tileData=new U(a),this.tileData.coordScale=[s,r],this.tileData.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.tileData.destroy(),this.tileData=null,this.stage=null}set stencilRef(e){this.tileData.stencilRef=e}get stencilRef(){return this.tileData.stencilRef}_createTransforms(){return{dvs:e(),tileMat3:e()}}setTransform(e,t){super.setTransform(e,t);const i=t/(e.resolution*e.pixelRatio),s=this.transforms.tileMat3,[r,a]=this.tileData.offset,l=[this.x+r*t,this.y-a*t],[o,n]=e.toScreenNoRotation([0,0],l),{symbolTileSize:h}=this.tileData.symbolizerParameters,u=Math.round((this.width-this.tileData.offset[0])/h)*h,c=Math.round((this.height-this.tileData.offset[1])/h)*h,d=u/this.rangeX*i,p=c/this.rangeY*i;v(s,d,0,0,0,p,0,o,n,1),P(this.transforms.dvs,e.displayViewMat3,s),this.tileData.transforms.dvs=this.transforms.dvs}onAttach(){this.tileData.stage=this.stage}onDetach(){this.tileData.stage=null}}class ne extends G{constructor(){super(...arguments),this.isCustomTilingScheme=!1,this.symbolTypes=["triangle"]}createTile(e){const i=this._tileInfoView.getTileBounds(t(),e),[s,r]=this._tileInfoView.tileInfo.size;return new oe(e,i[0],i[3],s,r)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf tile)",brushes:[E],target:()=>this.children.map((e=>e.tileData)),drawPhase:B.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===B.MAP&&this.symbolTypes.forEach((t=>{e.renderPass=t,super.doRender(e)}))}}let he=class extends re{constructor(){super(...arguments),this._handle=null,this.container=null,this.layer=null,this.type="rasterVF"}canUseWebGLForProcessing(){return!1}async fetchTile(e,t){t={...t,interpolation:"nearest",requestProjectedLocalDirections:!0};const i=await this.layer.fetchTile(e.level,e.row,e.col,t);return"vector-magdir"===this.layer.rasterInfo.dataType&&null!=i&&i.pixelBlock&&(i.pixelBlock=await this.layer.convertVectorFieldData(i.pixelBlock,t)),i}updateTileSource(e,t){const i=t.symbolizerParams,{tileData:s}=e;s.key=e.key,s.width=this._tileInfoView.tileInfo.size[0],s.height=this._tileInfoView.tileInfo.size[1];const{symbolTileSize:r}=i,{source:a}=t;if(s.offset=this._getTileSymbolOffset(s.key,r),y(a)&&y(a.pixelBlock)){const e={extent:a.extent,pixelBlock:a.pixelBlock};s.rawPixelData=e,s.symbolizerParameters=i,s.source=this._sampleVectorFieldData(a.pixelBlock,i,s.offset)}else{const e=[Math.round((this._tileInfoView.tileInfo[0]-s.offset[0])/r),Math.round((this._tileInfoView.tileInfo[1]-s.offset[1])/r)],t=this.createEmptyTilePixelBlock(e);s.source=t,s.symbolizerParameters=i}return s.invalidateVAO(),Promise.resolve(null)}updateTileSymbolizerParameters(e,t){var i;const s=t.local,{symbolTileSize:r}=s,{tileData:a}=e;a.offset=this._getTileSymbolOffset(a.key,r);const l=a.symbolizerParameters.symbolTileSize;return a.symbolizerParameters=s,y(null==(i=a.rawPixelData)?void 0:i.pixelBlock)&&l!==r&&(a.source=this._sampleVectorFieldData(a.rawPixelData.pixelBlock,a.symbolizerParameters,a.offset)),Promise.resolve(null)}attach(){super.attach(),this.container=new ne(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,this._updateSymbolType(this.layer.renderer),this._handle=T((()=>this.layer.renderer),(e=>this._updateSymbolType(e)))}detach(){super.detach(),this.container.removeAllChildren(),this._handle.remove(),this._handle=null}_getTileSymbolOffset(e,t){const i=e.col*this._tileInfoView.tileInfo.size[0]%t,s=e.row*this._tileInfoView.tileInfo.size[1]%t;return[i>t/2?t-i:-i,s>t/2?t-s:-s]}_sampleVectorFieldData(e,t,i){const{symbolTileSize:s}=t;return Y(e,"vector-uv",s,i)}_updateSymbolType(e){"vector-field"===e.type&&(this.container.symbolTypes="wind-barb"===e.style?["scalar","triangle"]:"simple-scalar"===e.style?["scalar"]:["triangle"])}};r([a()],he.prototype,"container",void 0),r([a()],he.prototype,"layer",void 0),r([a()],he.prototype,"type",void 0),he=r([l("esri.views.2d.layers.imagery.VectorFieldTileView2D")],he);const ue=he,ce=e=>{let t=class extends e{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return this.projectFullExtent(this.view.spatialReference)}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}get datumTransformation(){return J(f(this.layer.fullExtent),this.view.spatialReference,!0)}supportsSpatialReference(e){return!!this.projectFullExtent(e)}projectFullExtent(e){const t=f(this.layer.fullExtent),i=J(t,e,!1);return K(t,e,i)}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)return Promise.reject(new x("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:s}=i,r=Z(i,t);if(!s||!y(r))throw new x("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:s,popupTemplate:r});const a=[],{value:l,magdirValue:o}=await i.identify(e,{timeExtent:this.timeExtent});let n="";if(l&&l.length){var h,u;n="imagery-tile"===i.type&&i.hasStandardTime()&&null!=l[0]?l.map((e=>i.getStandardTimeValue(e))).join(", "):l.join(", ");const e={ObjectId:0},t="Raster.ServicePixelValue";e[t]=this._formatAttributeValue(n,t);const s=null==(h=i.rasterInfo)||null==(u=h.attributeTable)?void 0:u.features;if(s&&s.length>0){const t=s.filter((e=>{const t=e.attributes.value||e.attributes.Value||e.attributes.VALUE;return String(t)===n}));if(t.length>0){const i=t[0];if(i)for(const t in i.attributes)if(i.attributes.hasOwnProperty(t)){const s=this._rasterFieldPrefix+t;e[s]=this._formatAttributeValue(i.attributes[t],s)}}}const r=i.rasterInfo.dataType;"vector-magdir"!==r&&"vector-uv"!==r||(e["Raster.Magnitude"]=null==o?void 0:o[0],e["Raster.Direction"]=null==o?void 0:o[1]);const c=new R(this.fullExtent.clone(),null,e);c.layer=i,c.sourceLayer=c.layer,a.push(c)}return a}_formatAttributeValue(e,t){if("string"==typeof e){const i=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,s=this._getFieldInfo(i,t),r=s&&s.format;if(r){let t,i;return e.trim().indexOf(",")>-1?(t=",",i=t+" ",this._formatDelimitedString(e,t,i,r)):e.trim().indexOf(" ")>-1?(t=i=" ",this._formatDelimitedString(e,t,i,r)):this._formatNumberFromString(e,r)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const i=t.toLowerCase();let s;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==i&&e.fieldName.toLowerCase()!==i.replace(/ /g,"_")||(s=e,0)))),s}_formatDelimitedString(e,t,i,s){return e&&t&&i&&s?e.trim().split(t).map((e=>this._formatNumberFromString(e,s))).join(i):e}_formatNumberFromString(e,t){if(!e||!t)return e;const i=Number(e);return isNaN(i)?e:t.format(i)}};return r([a()],t.prototype,"layer",void 0),r([a(I)],t.prototype,"timeExtent",void 0),r([a()],t.prototype,"view",void 0),r([a()],t.prototype,"fullExtent",null),r([a()],t.prototype,"tileInfo",void 0),r([a({readOnly:!0})],t.prototype,"hasTilingEffects",null),t=r([l("esri.views.layers.ImageryTileLayerView")],t),t},de=s.getLogger("esri.views.2d.layers.ImageryTileLayerView2D");let pe=class extends(ce($(k(L)))){constructor(){super(...arguments),this._useWebGLForProcessing=!0,this._useProgressiveUpdate=!0,this.subview=null}get useWebGLForProcessing(){return this._useWebGLForProcessing}set useWebGLForProcessing(e){this._useWebGLForProcessing=e,this.subview&&"useWebGLForProcessing"in this.subview&&(this.subview.useWebGLForProcessing=e)}get useProgressiveUpdate(){return this._useWebGLForProcessing}set useProgressiveUpdate(e){this._useProgressiveUpdate=e,this.subview&&"useProgressiveUpdate"in this.subview&&(this.subview.useProgressiveUpdate=e)}update(e){this.subview.update(e),this.notifyChange("updating")}isUpdating(){return!this.subview||this.subview.updating}attach(){this.layer.increaseRasterJobHandlerUsage(),this._updateSubview(),this.handles.add([S(this.layer,["bandIds","renderer","interpolation","multidimensionalDefinition"],((e,t,i)=>{const s="multidimensionalDefinition"===i,r="interpolation"===i&&("majority"===e||"majority"===t)&&X(this.layer),a="renderer"===i&&t.type!==e.type;a&&this._updateSubview();const l=s||r||a;this.subview.redrawOrRefetch(l).catch((e=>{w(e)||de.error(e)})),this.notifyChange("updating")})),T((()=>{var e;return null!=(e=this.layer.blendMode)?e:"normal"}),(e=>{this.subview.container.blendMode=e}),V),T((()=>{var e;return null!=(e=this.layer.effect)?e:null}),(e=>{this.subview.container.effect=e}),V),T((()=>this.timeExtent),(()=>{this.subview.timeExtent=this.timeExtent,this.subview.redrawOrRefetch(!0).catch((e=>{w(e)||de.error(e)}))}),C)],"attach")}detach(){var e;this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this._detachSubview(this.subview),null==(e=this.subview)||e.destroy(),this.subview=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.subview.moveEnd()}async hitTest(e,t){return[new R({attributes:{},geometry:e.clone()})]}doRefresh(){return this.subview.doRefresh()}_updateSubview(){const e="vector-field"===this.layer.renderer.type?"rasterVF":"flow"===this.layer.renderer.type?"flow":"raster";if(this.subview){var t;if(this.subview.type===e)return void this._attachSubview(this.subview);this._detachSubview(this.subview),null==(t=this.subview)||t.destroy(),this.subview=null}const{layer:i}=this;let s;s="rasterVF"===e?new ue({layer:i,layerView:this}):"flow"===e?new z({layer:i,layerView:this}):new le({layer:i,layerView:this}),"useWebGLForProcessing"in s&&(s.useWebGLForProcessing=this._useWebGLForProcessing),"useProgressiveUpdate"in s&&(s.useProgressiveUpdate=this._useProgressiveUpdate),"previousLOD"in s&&(s.previousLOD=this.subview&&"previousLOD"in this.subview&&this.subview.previousLOD),this._attachSubview(s),this.subview=s,this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){null!=e&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};r([a()],pe.prototype,"subview",void 0),r([a()],pe.prototype,"useWebGLForProcessing",null),r([a()],pe.prototype,"useProgressiveUpdate",null),pe=r([l("esri.views.2d.layers.ImageryTileLayerView2D")],pe);const ye=pe;export{ye as default};
