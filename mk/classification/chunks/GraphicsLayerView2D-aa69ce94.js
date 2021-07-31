import{c5 as i,c2 as e,V as t,W as r,X as s}from"../main.js";import{l as a,d as p}from"./LayerView-54723408.js";import{i as o}from"./GraphicContainer-fe15e43d.js";import{o as h}from"./BaseGraphicContainer-64ea7f88.js";import"./Container-47d20019.js";import"./mat4f32-b5b66fd7.js";import"./Utils-a81a2f1e.js";import"./Texture-b09ad51a.js";import"./quantizationUtils-507b05c8.js";import"./json-5b2b387c.js";import"./Matcher-bf908c16.js";import"./definitions-53d29f17.js";import"./TileStore-8a7941e1.js";import"./FeatureSetReader-2b955a45.js";import"./centroid-a817072d.js";import"./visualVariablesUtils-be54b787.js";import"./visualVariablesUtils-3a2824de.js";import"./quickselect-4c28d668.js";import"./tileUtils-e4f2b1f7.js";import"./schemaUtils-f52393bf.js";import"./MaterialKey-ee186c4d.js";import"./CIMSymbolHelper-34339cd9.js";import"./Rect-df6cbc83.js";import"./BidiEngine-2645f818.js";import"./MD5-8aa08108.js";import"./GeometryUtils-c4c7ed43.js";import"./earcut-1a691bec.js";import"./TileClipper-c3e0f992.js";import"./VertexArrayObject-d65493cc.js";import"./FeatureContainer-1095601b.js";import"./TileContainer-4863b2aa.js";import"./WGLContainer-386cc9ca.js";import"./ShaderCompiler-846663a4.js";import"./config-4e1ab712.js";const c={remove(){},pause(){},resume(){}};let n=class extends(a(p)){initialize(){this.graphicsView=new h({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new o(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(i,e){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(i,e)}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.searchFeatures(i).then((i=>i.filter((i=>!!i.popupTemplate))))}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(t){let r;return"number"==typeof t?r=[t]:t instanceof i?r=[t.uid]:Array.isArray(t)&&t.length>0?r="number"==typeof t[0]?t:t.map((i=>i&&i.uid)):e.isCollection(t)&&(r=t.map((i=>i&&i.uid)).toArray()),r=r.filter((i=>null!=i)),r.length?(this.graphicsView.addHighlight(r),{remove:()=>this.graphicsView.removeHighlight(r)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};t([r()],n.prototype,"graphicsView",void 0),t([r()],n.prototype,"updating",void 0),n=t([s("esri.views.2d.layers.GraphicsLayerView2D")],n);var m=n;export{m as default};