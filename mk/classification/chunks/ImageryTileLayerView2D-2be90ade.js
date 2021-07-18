import{bT as e,dB as t,dC as s,bo as i,dD as r,dE as a,c1 as l,t as o,aj as n,e8 as h,V as u,W as d,X as c,a as m,r as p,c5 as _,n as f,du as y,dU as b,dx as g,Z as x,bP as T,aO as w,dv as I,dw as v,e3 as P,g as R,aU as C,cg as S,bk as U,a4 as z,d9 as k}from"../main.js";import{n as V,u as G}from"./pixelUtils-93113e16.js";import{g as j,u as B,s as L,i as D}from"./RawBlockCache-262aed58.js";import{M as F,j as q,L as E}from"./rasterProjectionHelper-ce160055.js";import{i as O,n as M,b as A,g as Q}from"./WGLContainer-ab75e2d7.js";import{a as N}from"./Container-41d95fff.js";import{r as W,o as J}from"./TileContainer-1250b2f3.js";import{I as H}from"./Utils-6a23c6d8.js";import{l as K,d as X}from"./LayerView-a3f3075e.js";import{d as Z}from"./popupUtils-35fec944.js";import{a as Y}from"./drapedUtils-9cbe9084.js";import"./definitions-be7cb682.js";import"./VertexArrayObject-8fe66024.js";import"./Texture-ba6e920d.js";import"./ShaderCompiler-666c7648.js";import"./config-934c8236.js";import"./GeometryUtils-7e05e834.js";import"./MaterialKey-b6edde5e.js";import"./earcut-53c533a1.js";import"./mat4f32-fb08207a.js";const $={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,type:"stretch"};class ee extends N{constructor(t=null,s=null,i=null){super(),this._textureInvalidated=!0,this._memoryUsed=null,this._supportsBilinear=!0,this.stencilRef=0,this.coordScale=[1,1],this._symbolizerParameters=null,this.height=null,this.isRendereredSource=!1,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this.rawPixelData=null,this._suspended=!1,this._bandIds=null,this._interpolation=null,this._transformGrid=null,this.width=null,this.x=0,this.y=0,this.transforms={dvs:e()},this.source=t,this.transformGrid=s,this.interpolation=i}destroy(){const e=this.getTextures();null==e||e.textures.forEach((e=>e.dispose())),this._rasterTexture=null,this._transformGridTexture=null,this._colormapTexture=null}get symbolizerParameters(){return this._symbolizerParameters||$}set symbolizerParameters(e){this._symbolizerParameters=e}get source(){return this._source}set source(e){this._source=e,this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._memoryUsed=null)}get suspended(){return this._suspended}set suspended(e){this._suspended&&!e&&this.stage&&(this.ready(),this.requestRender()),this._suspended=e}get bandIds(){return this._bandIds}set bandIds(e){this._bandIds=e,this.invalidateTexture()}get interpolation(){return this._interpolation}set interpolation(e){this._interpolation=e,this._rasterTexture&&this._rasterTexture.setSamplingMode(!this._supportsBilinear||"bilinear"!==e&&"cubic"!==e?9728:9729)}get transformGrid(){return this._transformGrid}set transformGrid(e){this._transformGrid=e,this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null,this._memoryUsed=null)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRender())}setTransform(e){const o=t(this.transforms.dvs),[n,h]=e.toScreenNoRotation([0,0],this.x,this.y),u=this.resolution/this.pixelRatio/e.resolution,d=u*this.width,c=u*this.height,m=Math.PI*this.rotation/180;s(o,o,i(n,h)),s(o,o,i(d/2,c/2)),r(o,o,-m),s(o,o,i(-d/2,-c/2)),a(o,o,i(d,c)),l(this.transforms.dvs,e.displayViewMat3,o)}getTextures(){if(!this._rasterTexture)return null;const e=[],t=[];return this._transformGridTexture&&(t.push(this._transformGridTexture),e.push("u_transformGrid")),this._rasterTexture&&(t.push(this._rasterTexture),e.push("u_image")),this._colormapTexture&&(t.push(this._colormapTexture),e.push("u_colormap")),{names:e,textures:t}}getMemoryUsage(){if(o(this._memoryUsed)){const e=this.getTextures();if(null==e)return 0;this._memoryUsed=e.textures.map((e=>e.descriptor.width*e.descriptor.height*4)).reduce(((e,t)=>e+t))}return this._memoryUsed}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}updateTexture({context:e}){var t,s,i;if(!this.stage)return null==(t=this._rasterTexture)||t.dispose(),null==(s=this._transformGridTexture)||s.dispose(),null==(i=this._colormapTexture)||i.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._transformGridTexture=null,void(this._colormapTexture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1;const r=this.source,a=r&&r.pixels&&r.pixels.length>0;this._createOrDestroyRasterTexture(e),this._rasterTexture&&(a?(this._updateColormapTexture(e),this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=O(e,this.transformGrid))):this._rasterTexture.setData(null)),this.suspended||(this.ready(),this.requestRender())}_createOrDestroyRasterTexture(e){var t,s;const i=this.source?V(this.source,this.bandIds):null;if(!(i&&i.pixels&&i.pixels.length>0))return void(this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null));const r=null==this._rasterTextureBandIds&&null==this.bandIds||this._rasterTextureBandIds&&this.bandIds&&this._rasterTextureBandIds.join("")===this.bandIds.join("");if(this._rasterTexture){if(r)return;this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null}const a=this.interpolation||"nearest",l=this.isRendereredSource||!(null!=(t=e.capabilities.textureFloat)&&t.textureFloat);this._rasterTexture=M(e,i,a,l),this._supportsBilinear=null==(s=e.capabilities.textureFloat)?void 0:s.textureFloatLinear,this._rasterTextureBandIds=this.bandIds?[...this.bandIds]:null}_updateColormapTexture(e){const t=this._colormap,s=this.symbolizerParameters.colormap;return s?t?s.length!==t.length||s.some(((e,s)=>e!==t[s]))?(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=A(e,s),void(this._colormap=s)):void 0:(this._colormapTexture=A(e,s),void(this._colormap=s)):(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),void(this._colormap=null))}}class te extends W{constructor(e,t,s,i=null){super(e,t,s),this.bitmap=new ee(i,null,null),this.bitmap.coordScale=s,this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}getMemoryUsage(){return this.bitmap.getMemoryUsage()}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}class se extends J{constructor(){super(...arguments),this.isCustomTilingScheme=!1}createTile(e){const t=this._getTileBounds(e);return new te(e,t,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[Q.raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:H.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===H.MAP&&super.doRender(e)}_getTileBounds(e){const t=this._tileInfoView.getTileBounds(n(),e);if(this.isCustomTilingScheme&&e.world){const{tileInfo:s}=this._tileInfoView,i=h(s.spatialReference);if(i){const{resolution:r}=s.lodAt(e.level),a=i/r%s.size[0],l=a?(s.size[0]-a)*r:0;t[0]-=l*e.world,t[2]-=l*e.world}}return t}}const ie=e=>{let t=class extends e{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,t){const{layer:s}=this;if(!e)return Promise.reject(new m("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:s}));const{popupEnabled:i}=s,r=Z(s,t);if(!i||!p(r))throw new m("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:r});const a=[],{value:l}=await s.identify(e);let o="";if(l&&l.length){var n,h;o="imagery-tile"===s.type&&s.hasStandardTime()&&null!=l[0]?l.map((e=>s.getStandardTimeValue(e))).join(", "):l.join(", ");const e={ObjectId:0},t="Raster.ServicePixelValue";e[t]=this._formatAttributeValue(o,t);const i=null==(n=s.rasterInfo)||null==(h=n.attributeTable)?void 0:h.features;if(i&&i.length>0){const t=i.filter((e=>{const t=e.attributes.value||e.attributes.Value||e.attributes.VALUE;return String(t)===o}));if(t.length>0){const s=t[0];if(s)for(const t in s.attributes)if(s.attributes.hasOwnProperty(t)){const i=this._rasterFieldPrefix+t;e[i]=this._formatAttributeValue(s.attributes[t],i)}}}const r=new _(this.fullExtent.clone(),null,e);r.layer=s,r.sourceLayer=r.layer,a.push(r)}return a}updateFullExtent(){const e=this.layer.tileInfo;let t;e&&e.spatialReference||(t=new m("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));const s=F(this.layer.fullExtent,this.view.spatialReference,!1),i=q(this.layer.fullExtent,this.view.spatialReference,s);return null==i&&(t=new m("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",i),this.datumTransformation||(this.datumTransformation=F(this.layer.fullExtent,this.view.spatialReference,!0)),t?Promise.reject(t):Promise.resolve()}_formatAttributeValue(e,t){if("string"==typeof e){const s=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(s,t),r=i&&i.format;if(r){let t,s;return e.trim().indexOf(",")>-1?(t=",",s=t+" ",this._formatDelimitedString(e,t,s,r)):e.trim().indexOf(" ")>-1?(t=s=" ",this._formatDelimitedString(e,t,s,r)):this._formatNumberFromString(e,r)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const s=t.toLowerCase();let i;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==s&&e.fieldName.toLowerCase()!==s.replace(/ /g,"_")||(i=e,0)))),i}_formatDelimitedString(e,t,s,i){return e&&t&&s&&i?e.trim().split(t).map((e=>this._formatNumberFromString(e,i))).join(s):e}_formatNumberFromString(e,t){if(!e||!t)return e;const s=Number(e);return isNaN(s)?e:t.format(s)}};return u([d()],t.prototype,"layer",void 0),u([d()],t.prototype,"view",void 0),u([d()],t.prototype,"fullExtent",void 0),u([d()],t.prototype,"tileInfo",void 0),u([d({readOnly:!0})],t.prototype,"hasTilingEffects",null),t=u([c("esri.views.layers.ImageryTileLayerView")],t),t},re=f.getLogger("esri.views.2d.layers.ImageryTileLayerView2D"),ae=[0,0];let le=class extends(ie(y(K(X)))){constructor(){super(...arguments),this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._bitmapView=null,this._emptyTilePixelBlock=null,this._srcResolutions=null,this._previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._globalUpdateRequested=!1,this._isCustomTilingScheme=!1,this.useWebGLForProcessing=!0,this._redrawOrRefreshDebounced=b(((e,t)=>e?(this._set("refreshTimestamp",Date.now()),this.doRefresh()):this._redrawImage(t)))}initialize(){const e=this.updateFullExtent();this.addResolvingPromise(e)}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){if(this._tileStrategy&&this.useProgressiveUpdate!==e){this._tileStrategy.destroy(),this._bitmapView.removeAllChildren();const t=this._getCacheSize(e);this._tileStrategy=new g({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.requestUpdate()}}hitTest(e,t){if(this.suspended)return Promise.resolve(null);const s=this.view.toMap(x(e,t));return Promise.resolve(new _({attributes:{},geometry:s}))}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:s,scale:i}=e.state,r=this._tileInfoView.getClosestInfoForScale(i);if(this.layer.raster){var a;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],i=t.toJSON?t:T.fromJSON(t);j(this._blockCacheRegistryUrl,this._blockCacheRegistryId,i,s,e,this.layer.raster.ioConfig.sampling)}this._needBlockCacheUpdate=!1,(null==(a=this._previousLOD)?void 0:a.level)!==r.level&&(this._previousLOD=r,null!=this._symbolizerParams&&this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0))}this.notifyChange("updating")}attach(){this.layer.increaseRasterJobHandlerUsage(),w().supportsTextureFloat||(this.useWebGLForProcessing=!1),this.layer.raster&&(this.layer.raster.ioConfig.allowPartialFill=!0),this._initializeTileInfo(),this._tileInfoView=new I(this.tileInfo,this.fullExtent);const e=this._computeFetchConcurrency();this._fetchQueue=new v({tileInfoView:this._tileInfoView,concurrency:e,process:(e,t)=>this.fetchTile(e,t)});const t=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new g({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._bitmapView=new se(this._tileInfoView),this._bitmapView.isCustomTilingScheme=this._isCustomTilingScheme,this.container.addChild(this._bitmapView),this.handles.add([P(this.layer,["bandIds","renderer","interpolation","multidimensionalDefinition"],((e,t,s)=>{const i="multidimensionalDefinition"===s,r="interpolation"===s&&("majority"===e||"majority"===t)&&this._canUseMajorityInterpolationOnDataSource(),a=i||r;this._redrawOrRefreshDebounced(a).catch((e=>{R(e)||re.error(e)}))}))],"attach"),this._updateBlockCacheRegistry()}detach(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,B(this._blockCacheRegistryUrl,this._blockCacheRegistryId)}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){!this.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=C(),0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.requestUpdate()})));const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(e),this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return Y(e,t,this.view)}async doRefresh(){if(this.suspended)return;this.layer.updateRenderer(),this._updateSymbolizerParams(),this._updateBlockCacheRegistry(!0),this._fetchQueue.reset();const e=[];this._tileStrategy.tiles.forEach((t=>e.push(this._enqueueTileFetch(t)))),await S(e),this.notifyChange("updating")}isUpdating(){return this._fetchQueue.length>0||this._globalUpdateRequested}acquireTile(e){const t=this._bitmapView.createTile(e),s=t.bitmap;return[s.x,s.y]=this._tileInfoView.getTileCoords(ae,t.key),s.resolution=this._tileInfoView.getTileResolution(t.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>{e.destroy(),this.requestUpdate()})),this.requestUpdate()}fetchTile(e,t){const s=!o(t)&&t.signal,i=this._canUseWebGLForProcessing(),r={tileInfo:this.tileInfo,signal:U(s),registryId:this._blockCacheRegistryId,requestRawData:i,srcResolution:this._srcResolutions[e.level],datumTransformation:this.datumTransformation,interpolation:i?"nearest":this.layer.interpolation};return this.layer.fetchTile(e.level,e.row,e.col,r)}_canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&this._canUseMajorityInterpolationOnDataSource())}_getCacheSize(e){return e?40:0}_initializeTileInfo(){const e=this.view.spatialReference,t=new z({x:this.fullExtent.xmin,y:this.fullExtent.ymax,spatialReference:e}),{scales:s,srcResolutions:i,isCustomTilingScheme:r}=E(this.layer.rasterInfo,e),a=k.create({spatialReference:e,size:512,scales:s});(0===a.origin.x||a.origin.x>t.x)&&(a.origin=t),this._isCustomTilingScheme=r,this._set("tileInfo",a),this._srcResolutions=null!=i?i:[]}_computeFetchConcurrency(){const{blockBoundary:e}=this.layer.rasterInfo.storageInfo,t=e[e.length-1];return(t.maxCol-t.minCol+1)*(t.maxRow-t.minRow+1)>64?2:10}async _enqueueTileFetch(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key),{bandIds:s}=this.layer;let i=!this.useProgressiveUpdate||this.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.moving&&0===this._fetchQueue.length){i=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal)}catch(e){R(e)&&re.error(e)}this._globalUpdateRequested=!1}const r=this._canUseWebGLForProcessing();if(r&&!this.hasTilingEffects&&null==this._symbolizerParams&&this._updateSymbolizerParams(),t&&t.pixelBlock){const s={extent:t.extent,pixelBlock:t.pixelBlock};if(e.bitmap.rawPixelData=s,r)e.bitmap.source=t.pixelBlock,e.bitmap.isRendereredSource=!1;else{const t=await this.layer.applyRenderer(s,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null);e.bitmap.source=t,e.bitmap.isRendereredSource=!0}e.bitmap.symbolizerParameters=r?this._globalSymbolizerParams||this._symbolizerParams:null,r?e.bitmap.transformGrid||(e.bitmap.transformGrid=t.transformGrid):e.bitmap.transformGrid=null}else{const t=this._createEmptyTilePixelBlock();e.bitmap.source=t,e.bitmap.symbolizerParameters=r?this._symbolizerParams:null,e.bitmap.transformGrid=null}e.bitmap.bandIds=s,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=i,e.bitmap.invalidateTexture(),e.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(e)}catch(e){R(e)||re.error(e)}this.requestUpdate()}}async _redrawImage(e){this.layer.updateRenderer(),this.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const{bandIds:t}=this.layer,s=this._bitmapView.children.map((async e=>{const s=this._canUseWebGLForProcessing();!s&&e.bitmap.rawPixelData?(e.bitmap.source=await this.layer.applyRenderer(e.bitmap.rawPixelData,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null),e.bitmap.isRendereredSource=!0):(e.bitmap.isRendereredSource&&e.bitmap.rawPixelData&&(e.bitmap.source=e.bitmap.rawPixelData.pixelBlock),e.bitmap.isRendereredSource=!1),e.bitmap.symbolizerParameters=s?this._globalSymbolizerParams||this._symbolizerParams:null,e.bitmap.bandIds=t,e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=!1}));await S(s),this.container.requestRender()}_createEmptyTilePixelBlock(){if(!this._emptyTilePixelBlock){const e=this._tileInfoView.tileInfo.size[0],t=this._tileInfoView.tileInfo.size[1];this._emptyTilePixelBlock=new G({width:e,height:t,pixels:[new Uint8Array(e*t)],mask:new Uint8Array(e*t),pixelType:"u8"})}return this._emptyTilePixelBlock}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this._previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},s=await this.layer.fetchPixels(this.view.extent,this.view.width,this.view.height,t);if(!s||!s.pixelBlock)return;const i=this.layer.symbolizer.generateWebGLParameters({pixelBlock:V(s.pixelBlock,this.layer.bandIds),isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds});!this._canUseWebGLForProcessing()&&i&&"stretch"===i.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(i.factor=i.factor.map((e=>255*e)),i.outMin=Math.round(255*i.outMin),i.outMax=Math.round(255*i.outMax)),this._globalSymbolizerParams=i}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds})}_updateBlockCacheRegistry(e=!1){const{url:t,rasterInfo:s,multidimensionalDefinition:i,raster:r}=this.layer,a=null!=s&&s.multidimensionalInfo?r.getSliceIndex(i):null,l=D(t,a);if(l!==this._blockCacheRegistryUrl){if(null!=this._blockCacheRegistryUrl&&B(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=L(l,this.layer.raster.rasterInfo),e){const e=this._tileInfoView.getClosestInfoForScale(this.view.scale),t=this._srcResolutions[e.level];j(l,this._blockCacheRegistryId,this.view.extent,this.view.resolution,t,this.layer.raster.ioConfig.sampling)}this._blockCacheRegistryUrl=l}}_canUseMajorityInterpolationOnDataSource(){const{bandCount:e,attributeTable:t,colormap:s,pixelType:i}=this.layer.rasterInfo;return 1===e&&(null!=t||null!=s||"u8"===i||"s8"===i)}_getLayerInterpolation(){const e=this.layer.renderer.type;if("raster-colormap"===e||"unique-value"===e||"class-breaks"===e)return"nearest";const{renderer:t}=this.layer;return"raster-stretch"===t.type&&null!=t.colorRamp?"nearest":this.layer.interpolation}};u([d()],le.prototype,"useProgressiveUpdate",null),le=u([c("esri.views.2d.layers.ImageryTileLayerView2D")],le);var oe=le;export default oe;
