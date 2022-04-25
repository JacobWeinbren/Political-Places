import{s as e,cJ as t,cK as i,cL as s,bp as a,j as r,bm as l,Z as h,_ as n,a0 as o}from"../main.js";import{r as c,n as u}from"./imageUtils-aaaea190.js";import{f as p,u as f}from"./LayerView-2a9200ad.js";import{i as d}from"./RefreshableLayerView-e6cd22bf.js";import"./BitmapTileContainer-08917e7d.js";import"./Bitmap-ef87b0e0.js";import"./Container-4f30f201.js";import"./enums-154d47de.js";import"./Texture-8b92d5d4.js";import"./TileContainer-c1a76147.js";import"./Utils-be23a2c6.js";import"./enums-7acaa04d.js";import"./number-b530ed41.js";import"./VertexElementDescriptor-d5c236cd.js";import"./WGLContainer-13b2f2d5.js";import"./pixelUtils-ea0d20a1.js";import"./VertexArrayObject-a92d69a3.js";import"./ProgramTemplate-6ba228e0.js";import"./StyleDefinition-3db9be87.js";import"./config-dc0b399b.js";import"./GeometryUtils-ba0d6a93.js";import"./MaterialKey-c7d0c6a2.js";import"./alignmentUtils-3fedcae3.js";import"./earcut-9a1bd483.js";const m=[102113,102100,3857,3785,900913],y=[0,0],_=e.getLogger("esri.views.2d.layers.WMTSLayerView2D");let w=class extends(d(c(p(f)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new t(e),this._fetchQueue=new i({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new s({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh())),this.declaredClass),super.attach()}detach(){var e,t;super.detach(),this.handles.remove(this.declaredClass),null==(e=this._tileStrategy)||e.destroy(),null==(t=this._fetchQueue)||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(y,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){var e,t;return null!=(e=null==(t=this._fetchQueue)?void 0:t.updating)&&e}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:l=0}=t;if(!i)return this._fetchImage(e,s);const h=new a(0,0,0,0);let n;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,h,{signal:s}),n=await this._fetchImage(h,s)}catch(i){if(r(i))throw i;if(l<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new a(i),r=await this.fetchTile(s,{...t,resamplingLevel:l+1});return u(this._tileInfoView,r,s,e)}}throw i}return u(this._tileInfoView,n,h,e)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets.some((t=>l(t.tileInfo.spatialReference,e)))}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(e){r(e)||_.error(e)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t})).catch((t=>{r(t)||(e.bitmap.source=null)})).finally((()=>{e.requestRender(),t.fulfilled=!0}))};this._tileRequests.set(e,t)}))}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>l(e.tileInfo.spatialReference,t)));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>m.includes(e.tileInfo.spatialReference.wkid)))),i}};h([n()],w.prototype,"_fetchQueue",void 0),h([n({readOnly:!0})],w.prototype,"tileMatrixSet",null),w=h([o("esri.views.2d.layers.WMTSLayerView2D")],w);const g=w;export{g as default};
