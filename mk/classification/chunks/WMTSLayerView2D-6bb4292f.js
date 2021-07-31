import{du as e,ag as t,ei as i,dv as s,dw as a,dx as r,g as l,V as h,W as n,X as u}from"../main.js";import{r as o}from"./BitmapTileLayerView2D-158d1b8d.js";import{l as c,d}from"./LayerView-da08c211.js";import"./BitmapTileContainer-1945884f.js";import"./Bitmap-47d5adfc.js";import"./VertexArrayObject-8cca6586.js";import"./Texture-88ad7edc.js";import"./Container-52e2623a.js";import"./mat4f32-b5b66fd7.js";import"./TileContainer-0e5ffd00.js";import"./Utils-df87053c.js";import"./WGLContainer-3dce52d3.js";import"./definitions-53d29f17.js";import"./ShaderCompiler-45c2aa11.js";import"./config-4e1ab712.js";import"./GeometryUtils-c4c7ed43.js";import"./MaterialKey-92ff6a39.js";import"./earcut-1a691bec.js";const f=[102113,102100,3857,3785,900913];let p=class extends(e(o(c(d)))){constructor(){super(...arguments),this._handles=new t,this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e=this.layer.activeLayer,t=this.tileMatrixSet;if(!t)return;const l=t.tileInfo.spatialReference;let h=e.fullExtent&&e.fullExtent.clone();l.isWebMercator?h=i(h):l.isWGS84||(h=t.fullExtent),this._tileInfoView=new s(t.tileInfo,h),this._fetchQueue=new a({tileInfoView:this._tileInfoView,process:e=>this.fetchTile(e)}),this._tileStrategy=new r({cachePolicy:"keep",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this._handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh()))),super.attach()}detach(){super.detach(),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){return this._fetchQueue.length>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;[i.x,i.y]=this._tileInfoView.getTileCoords([0,0],t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._tileInfoView.getTileCoords(i,t.key);const s={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(t.key).then((e=>{t.bitmap.source=e,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t)})).catch((e=>{l(e)||(t.bitmap.source=null,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t))}))};return s.promise.finally((()=>s.fulfilled=!0)),this._tileRequests.set(t,s),this.requestUpdate(),t}releaseTile(e){const t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e){return this.layer.fetchTile(e.level,e.row,e.col)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t})).catch((t=>{l(t)||(e.bitmap.source=null)})).finally((()=>{e.requestRender(),this.notifyChange("updating"),t.fulfilled=!0}))};this._tileRequests.set(e,t)})),this.notifyChange("updating")}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>e.tileInfo.spatialReference.wkid===t.wkid));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>f.indexOf(e.tileInfo.spatialReference.wkid)>-1))),i}};h([n()],p.prototype,"suspended",void 0),h([n({readOnly:!0})],p.prototype,"tileMatrixSet",null),p=h([u("esri.views.2d.layers.WMTSLayerView2D")],p);var y=p;export{y as default};
