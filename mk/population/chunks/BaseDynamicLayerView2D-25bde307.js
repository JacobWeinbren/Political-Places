import{n as t,dz as e,g as i,V as a,W as r,X as s}from"../main.js";import{t as o}from"./BitmapContainer-8d0d4d9b.js";import{l as n,d as p}from"./LayerView-8f8ba23a.js";import{S as m}from"./ExportStrategy-fa5fefe7.js";import"./WGLContainer-66f5575f.js";import"./definitions-bd7968b3.js";import"./VertexArrayObject-40244969.js";import"./Texture-192a103c.js";import"./Utils-ef13a049.js";import"./ShaderCompiler-ee9f064d.js";import"./config-8597b78f.js";import"./GeometryUtils-30b98fd3.js";import"./MaterialKey-1ba13c24.js";import"./Container-b6c614cc.js";import"./mat4f32-2521725d.js";import"./earcut-26dd4f9f.js";import"./Bitmap-f6bace84.js";const d=t.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let h=class extends(e(n(p))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{i(t)||d.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new o,this.container.addChild(this._bitmapContainer),this.strategy=new m({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};a([r()],h.prototype,"strategy",void 0),a([r()],h.prototype,"updating",void 0),h=a([s("esri.views.2d.layers.BaseDynamicLayerView2D")],h);var f=h;export{f as default};
