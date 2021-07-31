import{n as t,dA as e,g as i,V as a,W as r,X as s}from"../main.js";import{t as o}from"./BitmapContainer-7174f83b.js";import{l as n,d as p}from"./LayerView-1c2a858f.js";import{S as m}from"./ExportStrategy-b9394875.js";import"./WGLContainer-c15331cb.js";import"./definitions-402d8636.js";import"./VertexArrayObject-852a2a15.js";import"./Texture-24cf8d49.js";import"./Utils-a3200683.js";import"./ShaderCompiler-5bdadf00.js";import"./config-eda66a4a.js";import"./GeometryUtils-c03a3235.js";import"./MaterialKey-0dbb6a70.js";import"./Container-5dd1e82e.js";import"./mat4f32-3672828c.js";import"./earcut-9c8a3447.js";import"./Bitmap-d76a8b7d.js";const d=t.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let h=class extends(e(n(p))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{i(t)||d.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new o,this.container.addChild(this._bitmapContainer),this.strategy=new m({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};a([r()],h.prototype,"strategy",void 0),a([r()],h.prototype,"updating",void 0),h=a([s("esri.views.2d.layers.BaseDynamicLayerView2D")],h);var c=h;export{c as default};