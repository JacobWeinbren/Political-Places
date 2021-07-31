import{V as e,W as t,X as i,fC as s}from"../main.js";let r=class extends s{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};e([t()],r.prototype,"layer",void 0),e([t()],r.prototype,"layerView",void 0),e([t()],r.prototype,"tileInfoView",void 0),e([t()],r.prototype,"updating",null),r=e([i("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],r);var a=r;export{a as o};