import{cb as i,c8 as e,V as r,W as t,X as s}from"../main.js";import{l as a,d as p}from"./LayerView-f179601b.js";import{i as o}from"./GraphicContainer-6b6348f3.js";import{o as h}from"./BaseGraphicContainer-119072e5.js";import"./Container-d9200222.js";import"./mat4f32-3672828c.js";import"./Utils-de052f54.js";import"./Texture-802df4e0.js";import"./projectionSupport-11793134.js";import"./json-53ea76aa.js";import"./Matcher-3d44c336.js";import"./definitions-402d8636.js";import"./TileStore-7a65bf07.js";import"./FeatureSetReader-4a2cc3b6.js";import"./centroid-3d42d303.js";import"./visualVariablesUtils-5d74ec68.js";import"./visualVariablesUtils-6328bc62.js";import"./quickselect-8fc6a906.js";import"./tileUtils-f472558d.js";import"./schemaUtils-f3cc62c0.js";import"./MaterialKey-64e15919.js";import"./CIMSymbolHelper-bdda2d39.js";import"./Rect-756e9a32.js";import"./BidiEngine-220e093f.js";import"./MD5-31e8fb3f.js";import"./GeometryUtils-c03a3235.js";import"./earcut-9c8a3447.js";import"./TileClipper-375a41e4.js";import"./VertexArrayObject-df3ce8b4.js";import"./FeatureContainer-6e7a2356.js";import"./TileContainer-aff96fa3.js";import"./WGLContainer-4b343f4a.js";import"./ShaderCompiler-9bfd2f68.js";import"./config-eda66a4a.js";const c={remove(){},pause(){},resume(){}};let n=class extends(a(p)){initialize(){this.graphicsView=new h({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new o(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(i,e){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(i,e)}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.searchFeatures(i).then((i=>i.filter((i=>!!i.popupTemplate))))}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(r){let t;return"number"==typeof r?t=[r]:r instanceof i?t=[r.uid]:Array.isArray(r)&&r.length>0?t="number"==typeof r[0]?r:r.map((i=>i&&i.uid)):e.isCollection(r)&&(t=r.map((i=>i&&i.uid)).toArray()),t=t.filter((i=>null!=i)),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};r([t()],n.prototype,"graphicsView",void 0),r([t()],n.prototype,"updating",void 0),n=r([s("esri.views.2d.layers.GraphicsLayerView2D")],n);var m=n;export{m as default};
