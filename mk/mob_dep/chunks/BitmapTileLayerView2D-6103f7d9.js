import{V as i,X as e}from"../main.js";import{n as t}from"./BitmapTileContainer-10d29c40.js";const a=a=>{let s=class extends a{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new t(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}};return s=i([e("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};export{a as r};
