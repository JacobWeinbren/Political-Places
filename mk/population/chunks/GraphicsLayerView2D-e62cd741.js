import{ca as i,c7 as e,V as t,W as r,X as s}from"../main.js";import{l as a,d as p}from"./LayerView-8f8ba23a.js";import{i as o}from"./GraphicContainer-30817350.js";import{o as h}from"./BaseGraphicContainer-627924c6.js";import"./Container-b6c614cc.js";import"./mat4f32-2521725d.js";import"./Utils-ef13a049.js";import"./Texture-192a103c.js";import"./projectionSupport-0bdc6fc2.js";import"./json-c1314431.js";import"./Matcher-70617d0b.js";import"./definitions-bd7968b3.js";import"./TileStore-745218b1.js";import"./FeatureSetReader-29589c1b.js";import"./centroid-3acadd71.js";import"./visualVariablesUtils-c2553223.js";import"./visualVariablesUtils-f277f5da.js";import"./quickselect-2a5dada6.js";import"./tileUtils-22d6d29e.js";import"./schemaUtils-2d1ed7fe.js";import"./MaterialKey-1ba13c24.js";import"./CIMSymbolHelper-19f5d4c7.js";import"./Rect-46a6423d.js";import"./BidiEngine-a3336f07.js";import"./MD5-73ac3f43.js";import"./GeometryUtils-30b98fd3.js";import"./earcut-26dd4f9f.js";import"./TileClipper-6d793dd2.js";import"./cimAnalyzer-6fa90712.js";import"./quantizationUtils-18173b62.js";import"./VertexArrayObject-40244969.js";import"./FeatureContainer-4ec22c00.js";import"./TileContainer-1dd9dbe0.js";import"./WGLContainer-66f5575f.js";import"./ShaderCompiler-ee9f064d.js";import"./config-8597b78f.js";const c={remove(){},pause(){},resume(){}};let n=class extends(a(p)){initialize(){this.graphicsView=new h({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new o(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(i,e){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(i,e)}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.searchFeatures(i).then((i=>i.filter((i=>!!i.popupTemplate))))}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(t){let r;return"number"==typeof t?r=[t]:t instanceof i?r=[t.uid]:Array.isArray(t)&&t.length>0?r="number"==typeof t[0]?t:t.map((i=>i&&i.uid)):e.isCollection(t)&&(r=t.map((i=>i&&i.uid)).toArray()),r=r.filter((i=>null!=i)),r.length?(this.graphicsView.addHighlight(r),{remove:()=>this.graphicsView.removeHighlight(r)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};t([r()],n.prototype,"graphicsView",void 0),t([r()],n.prototype,"updating",void 0),n=t([s("esri.views.2d.layers.GraphicsLayerView2D")],n);var d=n;export{d as default};