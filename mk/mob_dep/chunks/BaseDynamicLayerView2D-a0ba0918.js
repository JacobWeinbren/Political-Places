import{n as t,dA as e,g as a,V as i,W as r,X as s}from"../main.js";import{t as o}from"./BitmapContainer-e1fa0897.js";import{l as n,d as p}from"./LayerView-5fbe1784.js";import{S as m}from"./ExportStrategy-a4113927.js";import"./WGLContainer-dd69f9f8.js";import"./definitions-402d8636.js";import"./VertexArrayObject-4aa2b6de.js";import"./Texture-e5aca807.js";import"./Utils-59310280.js";import"./ShaderCompiler-f4ba758a.js";import"./config-eda66a4a.js";import"./GeometryUtils-c03a3235.js";import"./MaterialKey-a3261082.js";import"./Container-92f66d1f.js";import"./mat4f32-3672828c.js";import"./earcut-9c8a3447.js";import"./Bitmap-cdd762ea.js";const d=t.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let h=class extends(e(n(p))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{a(t)||d.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new o,this.container.addChild(this._bitmapContainer),this.strategy=new m({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,a){return this.layer.fetchImage(t,e,a,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};i([r()],h.prototype,"strategy",void 0),i([r()],h.prototype,"updating",void 0),h=i([s("esri.views.2d.layers.BaseDynamicLayerView2D")],h);var c=h;export{c as default};
