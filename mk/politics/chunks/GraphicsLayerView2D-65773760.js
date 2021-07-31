import{ca as i,c7 as e,V as t,W as r,X as s}from"../main.js";import{l as a,d as p}from"./LayerView-33a2657c.js";import{i as o}from"./GraphicContainer-0148fe84.js";import{o as h}from"./BaseGraphicContainer-aaf6af3d.js";import"./Container-8707ff0b.js";import"./mat4f32-2308129f.js";import"./Utils-100690b3.js";import"./Texture-869d32a8.js";import"./projectionSupport-d95a0ac4.js";import"./json-812fb7d1.js";import"./Matcher-25ae6271.js";import"./definitions-8d307e62.js";import"./TileStore-4e01c530.js";import"./FeatureSetReader-e801f95c.js";import"./centroid-1933d1b4.js";import"./visualVariablesUtils-e10cea89.js";import"./visualVariablesUtils-46614436.js";import"./quickselect-a156c329.js";import"./tileUtils-67946294.js";import"./schemaUtils-c5a1d81c.js";import"./MaterialKey-8e40704a.js";import"./CIMSymbolHelper-f1fc9067.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";import"./GeometryUtils-9ff4b746.js";import"./earcut-0cc318b8.js";import"./TileClipper-3782c557.js";import"./cimAnalyzer-35ecf9df.js";import"./quantizationUtils-bcaf4c38.js";import"./VertexArrayObject-45b080fe.js";import"./FeatureContainer-adbb6801.js";import"./TileContainer-e1d2c7b0.js";import"./WGLContainer-a8df79e7.js";import"./ShaderCompiler-b26096ad.js";import"./config-31d4f506.js";const c={remove(){},pause(){},resume(){}};let n=class extends(a(p)){initialize(){this.graphicsView=new h({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new o(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(i,e){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(i,e)}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.searchFeatures(i).then((i=>i.filter((i=>!!i.popupTemplate))))}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(t){let r;return"number"==typeof t?r=[t]:t instanceof i?r=[t.uid]:Array.isArray(t)&&t.length>0?r="number"==typeof t[0]?t:t.map((i=>i&&i.uid)):e.isCollection(t)&&(r=t.map((i=>i&&i.uid)).toArray()),r=r.filter((i=>null!=i)),r.length?(this.graphicsView.addHighlight(r),{remove:()=>this.graphicsView.removeHighlight(r)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};t([r()],n.prototype,"graphicsView",void 0),t([r()],n.prototype,"updating",void 0),n=t([s("esri.views.2d.layers.GraphicsLayerView2D")],n);var m=n;export{m as default};
