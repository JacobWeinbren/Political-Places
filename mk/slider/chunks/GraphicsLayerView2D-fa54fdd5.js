import{cb as e,c8 as i,V as r,W as t,X as s}from"../main.js";import{l as a,d as p}from"./LayerView-76ededc1.js";import{i as o}from"./GraphicContainer-c2049e5b.js";import{i as h}from"./BaseGraphicContainer-7706213e.js";import"./Container-32e21fcc.js";import"./mat4f32-4d6347a3.js";import"./Utils-72b22d6f.js";import"./Texture-383d5e97.js";import"./projectionSupport-66c6a160.js";import"./json-b23062ef.js";import"./Matcher-2d60e46b.js";import"./definitions-541a827f.js";import"./TileStore-c5d66d6f.js";import"./FeatureSetReader-64557787.js";import"./centroid-20dfb5f1.js";import"./visualVariablesUtils-ec758c20.js";import"./visualVariablesUtils-aa5dd017.js";import"./quickselect-6bf00e39.js";import"./tileUtils-6751c765.js";import"./schemaUtils-d5905b20.js";import"./MaterialKey-a3cf65ce.js";import"./CIMSymbolHelper-e611e1e2.js";import"./Rect-8eaeb735.js";import"./BidiEngine-3c9378fc.js";import"./MD5-4268822b.js";import"./GeometryUtils-58894e90.js";import"./earcut-46e6738f.js";import"./TileClipper-f7b73812.js";import"./VertexArrayObject-12be36ab.js";import"./FeatureContainer-19fa3388.js";import"./TileContainer-203582e4.js";import"./WGLContainer-05d4b702.js";import"./ShaderCompiler-1241bd96.js";import"./config-2213493a.js";const c={remove(){},pause(){},resume(){}};let n=class extends(a(p)){initialize(){this.graphicsView=new h({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new o(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(r){let t;return"number"==typeof r?t=[r]:r instanceof e?t=[r.uid]:Array.isArray(r)&&r.length>0?t="number"==typeof r[0]?r:r.map((e=>e&&e.uid)):i.isCollection(r)&&(t=r.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};r([t()],n.prototype,"graphicsView",void 0),r([t()],n.prototype,"updating",void 0),n=r([s("esri.views.2d.layers.GraphicsLayerView2D")],n);var m=n;export default m;
