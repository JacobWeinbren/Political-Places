import{ag as e,V as i,X as t}from"../main.js";import{l as s,d as r}from"./LayerView-fcfbe37e.js";import{i as o}from"./GraphicContainer-67f4bee8.js";import{o as a}from"./BaseGraphicContainer-e830e5c7.js";import"./Container-e192b670.js";import"./mat4f32-2308129f.js";import"./Utils-d8f11ef6.js";import"./Texture-28a59c3a.js";import"./projectionSupport-ebd762e9.js";import"./json-812fb7d1.js";import"./Matcher-5c7b57db.js";import"./definitions-8d307e62.js";import"./TileStore-113e4e1c.js";import"./FeatureSetReader-3ccdd059.js";import"./centroid-1933d1b4.js";import"./visualVariablesUtils-7f067768.js";import"./visualVariablesUtils-0857e3d3.js";import"./quickselect-a156c329.js";import"./tileUtils-28f74d7d.js";import"./schemaUtils-fba30491.js";import"./MaterialKey-61bb0800.js";import"./CIMSymbolHelper-6d0c867d.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";import"./GeometryUtils-9ff4b746.js";import"./earcut-0cc318b8.js";import"./TileClipper-77bdc74c.js";import"./cimAnalyzer-a73be4ae.js";import"./quantizationUtils-80b04eaf.js";import"./VertexArrayObject-83ed1808.js";import"./FeatureContainer-bcd96de8.js";import"./TileContainer-95453884.js";import"./WGLContainer-bc7b9ed6.js";import"./ShaderCompiler-85752f48.js";import"./config-31d4f506.js";let p=class extends(s(r)){constructor(){super(...arguments),this._handles=new e,this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,i){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const t=this.graphicsViews.map((t=>t.hitTest(e,i)));return Promise.all(t).then((e=>e.filter(((e,i)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[i]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(e)}attach(){this.layer.featureCollections.forEach((e=>{const i=new a({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate(),container:new o(this.view.featuresTilingScheme)});i.renderer=e.renderer,this._popupTemplates.set(i,e.popupTemplate),this.graphicsViews.push(i),this.container.addChild(i.container)}))}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};p=i([t("esri.views.2d.layers.RouteLayerView2D")],p);var c=p;export{c as default};