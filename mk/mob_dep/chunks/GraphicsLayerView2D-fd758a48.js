import{cb as e,c8 as i,V as r,W as t,X as s}from"../main.js";import{l as a,d as p}from"./LayerView-790ef8ac.js";import{i as o}from"./GraphicContainer-a75eb29e.js";import{o as h}from"./BaseGraphicContainer-94641267.js";import"./Container-bf19f9c6.js";import"./mat4f32-3672828c.js";import"./Utils-5a567156.js";import"./Texture-50aa7b57.js";import"./projectionSupport-80b24441.js";import"./json-53ea76aa.js";import"./Matcher-de6e626f.js";import"./definitions-402d8636.js";import"./TileStore-7ae847a3.js";import"./FeatureSetReader-e2037e3f.js";import"./centroid-3d42d303.js";import"./visualVariablesUtils-9dd7109b.js";import"./visualVariablesUtils-efc7b064.js";import"./quickselect-8fc6a906.js";import"./tileUtils-ee20b241.js";import"./schemaUtils-c25b2f4a.js";import"./MaterialKey-58953b14.js";import"./CIMSymbolHelper-5c18fe05.js";import"./Rect-756e9a32.js";import"./BidiEngine-220e093f.js";import"./MD5-31e8fb3f.js";import"./GeometryUtils-c03a3235.js";import"./earcut-9c8a3447.js";import"./TileClipper-3c6b582f.js";import"./VertexArrayObject-f1b0ece2.js";import"./FeatureContainer-bcfef207.js";import"./TileContainer-cb145fcc.js";import"./WGLContainer-a108fb14.js";import"./ShaderCompiler-c85727f6.js";import"./config-eda66a4a.js";const c={remove(){},pause(){},resume(){}};let n=class extends(a(p)){initialize(){this.graphicsView=new h({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new o(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(r){let t;return"number"==typeof r?t=[r]:r instanceof e?t=[r.uid]:Array.isArray(r)&&r.length>0?t="number"==typeof r[0]?r:r.map((e=>e&&e.uid)):i.isCollection(r)&&(t=r.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};r([t()],n.prototype,"graphicsView",void 0),r([t()],n.prototype,"updating",void 0),n=r([s("esri.views.2d.layers.GraphicsLayerView2D")],n);var m=n;export{m as default};
