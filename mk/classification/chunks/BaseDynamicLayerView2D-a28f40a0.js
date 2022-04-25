import{s as t,j as e,Z as i,_ as a,a0 as r}from"../main.js";import{t as s}from"./BitmapContainer-16439e2d.js";import{f as o,u as n}from"./LayerView-8e7f01dd.js";import{S as p}from"./ExportStrategy-59adb0d8.js";import{i as m}from"./RefreshableLayerView-4ae15847.js";import"./WGLContainer-8086989c.js";import"./enums-38e3b49b.js";import"./pixelUtils-b2b437b9.js";import"./Container-b7f00e71.js";import"./VertexArrayObject-e82dcaaa.js";import"./Texture-56619848.js";import"./VertexElementDescriptor-a4fd480a.js";import"./enums-c2efc4ce.js";import"./Utils-a0a3c935.js";import"./ProgramTemplate-1dff65f7.js";import"./StyleDefinition-ce844bf2.js";import"./config-aadd3eaf.js";import"./GeometryUtils-c54ea35c.js";import"./MaterialKey-44c98e9c.js";import"./earcut-7014ceb9.js";import"./Bitmap-73d3e458.js";const d=t.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let h=class extends(m(o(n))){update(t){this.strategy.update(t).catch((t=>{e(t)||d.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new s,this.container.addChild(this._bitmapContainer),this.strategy=new p({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};i([a()],h.prototype,"strategy",void 0),i([a()],h.prototype,"updating",void 0),h=i([r("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const c=h;export{c as default};
