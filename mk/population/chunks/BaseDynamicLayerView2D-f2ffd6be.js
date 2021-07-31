import{n as t,dz as e,g as i,V as a,W as r,X as s}from"../main.js";import{t as o}from"./BitmapContainer-7847e44e.js";import{l as n,d as p}from"./LayerView-4e07ba54.js";import{S as m}from"./ExportStrategy-6ce27ce8.js";import"./WGLContainer-da4b812a.js";import"./definitions-bd7968b3.js";import"./VertexArrayObject-59a1e5dc.js";import"./Texture-5b9e6c9e.js";import"./Utils-7f5e53fe.js";import"./ShaderCompiler-02e86f18.js";import"./config-8597b78f.js";import"./GeometryUtils-30b98fd3.js";import"./MaterialKey-d5c3c8f2.js";import"./Container-20647f5c.js";import"./mat4f32-2521725d.js";import"./earcut-26dd4f9f.js";import"./Bitmap-80c91050.js";const d=t.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let h=class extends(e(n(p))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{i(t)||d.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new o,this.container.addChild(this._bitmapContainer),this.strategy=new m({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};a([r()],h.prototype,"strategy",void 0),a([r()],h.prototype,"updating",void 0),h=a([s("esri.views.2d.layers.BaseDynamicLayerView2D")],h);var c=h;export{c as default};
