import{n as t,dA as e,g as i,V as a,W as r,X as s}from"../main.js";import{t as o}from"./BitmapContainer-cd50715b.js";import{l as n,d as p}from"./LayerView-fa511eef.js";import{S as m}from"./ExportStrategy-e566a123.js";import"./WGLContainer-34f5f93b.js";import"./definitions-402d8636.js";import"./VertexArrayObject-b08a551d.js";import"./Texture-8ea52612.js";import"./Utils-3fb9b8b0.js";import"./ShaderCompiler-39a7143e.js";import"./config-eda66a4a.js";import"./GeometryUtils-c03a3235.js";import"./MaterialKey-b6454967.js";import"./Container-4523e063.js";import"./mat4f32-3672828c.js";import"./earcut-9c8a3447.js";import"./Bitmap-6cd7e077.js";const d=t.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let h=class extends(e(n(p))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{i(t)||d.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new o,this.container.addChild(this._bitmapContainer),this.strategy=new m({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};a([r()],h.prototype,"strategy",void 0),a([r()],h.prototype,"updating",void 0),h=a([s("esri.views.2d.layers.BaseDynamicLayerView2D")],h);var c=h;export{c as default};
