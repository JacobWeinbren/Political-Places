import{n as t,dz as e,g as i,V as a,W as r,X as s}from"../main.js";import{t as o}from"./BitmapContainer-bbdc9904.js";import{l as n,d}from"./LayerView-1755cd35.js";import{S as p}from"./ExportStrategy-bfba02c7.js";import"./WGLContainer-329dbfd8.js";import"./definitions-8d307e62.js";import"./VertexArrayObject-798d2d4c.js";import"./Texture-ce7d8edf.js";import"./Utils-ffbfdeca.js";import"./ShaderCompiler-f06e17ef.js";import"./config-31d4f506.js";import"./GeometryUtils-9ff4b746.js";import"./MaterialKey-0908fd8a.js";import"./Container-e933b5f1.js";import"./mat4f32-2308129f.js";import"./earcut-0cc318b8.js";import"./Bitmap-56759da2.js";const m=t.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let h=class extends(e(n(d))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{i(t)||m.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new o,this.container.addChild(this._bitmapContainer),this.strategy=new p({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};a([r()],h.prototype,"strategy",void 0),a([r()],h.prototype,"updating",void 0),h=a([s("esri.views.2d.layers.BaseDynamicLayerView2D")],h);var f=h;export{f as default};