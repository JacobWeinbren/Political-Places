import{ca as i,c7 as e,V as t,W as r,X as s}from"../main.js";import{l as a,d as p}from"./LayerView-fcfbe37e.js";import{i as o}from"./GraphicContainer-67f4bee8.js";import{o as h}from"./BaseGraphicContainer-e830e5c7.js";import"./Container-e192b670.js";import"./mat4f32-2308129f.js";import"./Utils-d8f11ef6.js";import"./Texture-28a59c3a.js";import"./projectionSupport-ebd762e9.js";import"./json-812fb7d1.js";import"./Matcher-5c7b57db.js";import"./definitions-8d307e62.js";import"./TileStore-113e4e1c.js";import"./FeatureSetReader-3ccdd059.js";import"./centroid-1933d1b4.js";import"./visualVariablesUtils-7f067768.js";import"./visualVariablesUtils-0857e3d3.js";import"./quickselect-a156c329.js";import"./tileUtils-28f74d7d.js";import"./schemaUtils-fba30491.js";import"./MaterialKey-61bb0800.js";import"./CIMSymbolHelper-6d0c867d.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";import"./GeometryUtils-9ff4b746.js";import"./earcut-0cc318b8.js";import"./TileClipper-77bdc74c.js";import"./cimAnalyzer-a73be4ae.js";import"./quantizationUtils-80b04eaf.js";import"./VertexArrayObject-83ed1808.js";import"./FeatureContainer-bcd96de8.js";import"./TileContainer-95453884.js";import"./WGLContainer-bc7b9ed6.js";import"./ShaderCompiler-85752f48.js";import"./config-31d4f506.js";const c={remove(){},pause(){},resume(){}};let n=class extends(a(p)){initialize(){this.graphicsView=new h({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new o(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(i,e){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(i,e)}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.searchFeatures(i).then((i=>i.filter((i=>!!i.popupTemplate))))}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(t){let r;return"number"==typeof t?r=[t]:t instanceof i?r=[t.uid]:Array.isArray(t)&&t.length>0?r="number"==typeof t[0]?t:t.map((i=>i&&i.uid)):e.isCollection(t)&&(r=t.map((i=>i&&i.uid)).toArray()),r=r.filter((i=>null!=i)),r.length?(this.graphicsView.addHighlight(r),{remove:()=>this.graphicsView.removeHighlight(r)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};t([r()],n.prototype,"graphicsView",void 0),t([r()],n.prototype,"updating",void 0),n=t([s("esri.views.2d.layers.GraphicsLayerView2D")],n);var m=n;export{m as default};
