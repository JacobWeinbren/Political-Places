import{Z as e,a0 as t}from"../main.js";import{n as i}from"./BitmapTileContainer-169e2968.js";const n=n=>{let o=class extends n{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new i(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var e;this.container.removeChild(this._bitmapView),null==(e=this._bitmapView)||e.removeAllChildren()}};return o=e([t("esri.views.2d.layers.BitmapTileLayerView2D")],o),o};function o(e,t,i,n){if(i.level===n.level)return t;const o=e.tileInfo.size,l=e.getTileResolution(i.level),a=e.getTileResolution(n.level);let s=e.getLODInfoAt(n.level);const h=s.getXForColumn(n.col),m=s.getYForRow(n.row);s=e.getLODInfoAt(i.level);const c=s.getXForColumn(i.col),u=s.getYForRow(i.row),d=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/o[0],w=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/o[1],g=Math.round(d*((h-c)/l)),f=Math.round(w*(-(m-u)/l)),v=Math.round(d*o[0]*(a/l)),p=Math.round(w*o[1]*(a/l)),C=r(o);return C.getContext("2d").drawImage(t,g,f,v,p,0,0,o[0],o[1]),C}function r(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}export{o as n,r as o,n as r};