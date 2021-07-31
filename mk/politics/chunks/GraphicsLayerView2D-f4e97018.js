import{ca as i,c7 as e,V as t,W as r,X as s}from"../main.js";import{l as a,d as p}from"./LayerView-33414922.js";import{i as o}from"./GraphicContainer-d46fc4f1.js";import{o as c}from"./BaseGraphicContainer-72c8490a.js";import"./Container-f8952d6a.js";import"./mat4f32-2308129f.js";import"./Utils-55d7c2c6.js";import"./Texture-c105cc80.js";import"./projectionSupport-da62e186.js";import"./json-812fb7d1.js";import"./Matcher-39d3ee1d.js";import"./definitions-8d307e62.js";import"./TileStore-d959f5cb.js";import"./FeatureSetReader-aa503b98.js";import"./centroid-1933d1b4.js";import"./visualVariablesUtils-9e814db6.js";import"./visualVariablesUtils-9a9af480.js";import"./quickselect-a156c329.js";import"./tileUtils-d68cce32.js";import"./schemaUtils-c0dec4d3.js";import"./MaterialKey-429f10e7.js";import"./CIMSymbolHelper-da3f398d.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";import"./GeometryUtils-9ff4b746.js";import"./earcut-0cc318b8.js";import"./TileClipper-c1dac727.js";import"./cimAnalyzer-c7db123c.js";import"./quantizationUtils-1b2fe0f3.js";import"./VertexArrayObject-e3941b8a.js";import"./FeatureContainer-2792e191.js";import"./TileContainer-6dc496fb.js";import"./WGLContainer-30df383f.js";import"./ShaderCompiler-cae75718.js";import"./config-31d4f506.js";const h={remove(){},pause(){},resume(){}};let n=class extends(a(p)){initialize(){this.graphicsView=new c({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new o(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(i,e){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(i,e)}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.searchFeatures(i).then((i=>i.filter((i=>!!i.popupTemplate))))}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(t){let r;return"number"==typeof t?r=[t]:t instanceof i?r=[t.uid]:Array.isArray(t)&&t.length>0?r="number"==typeof t[0]?t:t.map((i=>i&&i.uid)):e.isCollection(t)&&(r=t.map((i=>i&&i.uid)).toArray()),r=r.filter((i=>null!=i)),r.length?(this.graphicsView.addHighlight(r),{remove:()=>this.graphicsView.removeHighlight(r)}):h}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};t([r()],n.prototype,"graphicsView",void 0),t([r()],n.prototype,"updating",void 0),n=t([s("esri.views.2d.layers.GraphicsLayerView2D")],n);var m=n;export{m as default};