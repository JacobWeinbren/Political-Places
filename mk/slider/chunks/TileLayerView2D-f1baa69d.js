import{V as e,W as t,X as i,a as s,cm as r,r as a,n as l,dA as n,dB as o,dC as h,dD as c,t as u,g as p,bn as m}from"../main.js";import{r as f}from"./BitmapTileLayerView2D-3f98f595.js";import{l as d,d as y}from"./LayerView-c4fa1a74.js";import{s as g}from"./clickToleranceUtils-5a33ba15.js";import{a as w}from"./drapedUtils-04ba4ae8.js";import"./BitmapTileContainer-51c26f8f.js";import"./Bitmap-fe382de1.js";import"./VertexArrayObject-7c8fe18f.js";import"./Texture-2e226ed8.js";import"./Container-a6a24cec.js";import"./mat4f32-85cc7f8e.js";import"./TileContainer-c7d0a77e.js";import"./Utils-35d958ae.js";import"./WGLContainer-c17d1ffc.js";import"./definitions-666095f0.js";import"./ShaderCompiler-86e7b04d.js";import"./config-a192e994.js";import"./GeometryUtils-d8d541eb.js";import"./MaterialKey-109c8370.js";import"./earcut-c458cc7d.js";const _=l=>{let n=class extends l{async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)return Promise.reject(new s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));if("tile"!==i.type)return Promise.reject(new s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type}));const l=this.get("view.scale"),n=i.allSublayers.toArray().filter((e=>{const t=0===e.minScale||l<=e.minScale,i=0===e.maxScale||l>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&i}));return r(n.map((async i=>{const s=i.createQuery(),r=a(t)?t.event:null,l=g({renderer:i.renderer,event:r});return s.geometry=this.createFetchPopupFeaturesQueryGeometry(e,l),s.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(s)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return e([t()],n.prototype,"layer",void 0),n=e([i("esri.layers.mixins.TileLayerView")],n),n},I=l.getLogger("esri.views.2d.layers.TileLayerView2D"),v=[0,0];let T=class extends(_(n(f(d(y))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}initialize(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let i;t||(i=new s("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(i=new s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.refresh()})),i&&this.addResolvingPromise(Promise.reject(i))}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new o(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new h({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new c({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return w(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"))}isUpdating(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(v,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e,t){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,s=!u(t)&&t.signal;if(!i)try{return await this._fetchImage(e,s)}catch(e){if(!p(e)&&!this.resampling)return this._createBlankImage();throw e}const r=new m(0,0,0,0);let a;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,r,{signal:s}),r.level!==e.level&&!this.resampling)return this._createBlankImage();a=await this._fetchImage(r,s)}catch(t){if(p(t))throw t;a=await this._fetchImage(e,s)}const{level:l,row:n,col:o}=r;return this.resampling&&l!==e.level?this._resampleImage(a,l,n,o,e.level,e.row,e.col):a}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(e){p(e)||I.error(e)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})}_resampleImage(e,t,i,s,r,a,l){const n=this._tileInfoView.tileInfo.size,o=this._tileInfoView.getTileResolution(t),h=this._tileInfoView.getTileResolution(r);let c=this._tileInfoView.getLODInfoAt(r);const u=c.getXForColumn(l),p=c.getYForRow(a);c=this._tileInfoView.getLODInfoAt(t);const m=c.getXForColumn(s),f=c.getYForRow(i),d=Math.round((u-m)/o),y=Math.round(-(p-f)/o),g=Math.round(n[0]*(h/o)),w=Math.round(n[1]*(h/o)),_=this._createBlankImage();return _.getContext("2d").drawImage(e,d,y,g,w,0,0,n[0],n[1]),_}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return[t.width,t.height]=e,t}};e([t()],T.prototype,"resampling",null),T=e([i("esri.views.2d.layers.TileLayerView2D")],T);var V=T;export default V;