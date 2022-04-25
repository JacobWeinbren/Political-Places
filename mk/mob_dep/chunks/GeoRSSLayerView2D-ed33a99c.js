import{K as e,d9 as i,cf as t,de as s,df as r,dg as o,Z as a,a0 as p}from"../main.js";import{f as l,u as m}from"./LayerView-bd7ec411.js";import{i as n}from"./GraphicContainer-6c3c8d36.js";import{r as c}from"./BaseGraphicContainer-0a21c1b2.js";import"./Container-8f96c744.js";import"./Utils-4efd2b2d.js";import"./enums-873d3e5a.js";import"./enums-1bc10a6c.js";import"./Texture-1175e9f5.js";import"./VertexElementDescriptor-3277c87e.js";import"./CIMSymbolHelper-79eed166.js";import"./BidiEngine-0fcd18f1.js";import"./MaterialKey-37656b1a.js";import"./GeometryUtils-6ecde86c.js";import"./projectionSupport-8e78150e.js";import"./json-a3f064db.js";import"./VertexArrayObject-47d07736.js";import"./FeatureContainer-1ceb8305.js";import"./TileContainer-dc56fab2.js";import"./WGLContainer-e5b769fe.js";import"./pixelUtils-5a36ade0.js";import"./ProgramTemplate-28d6e1e9.js";import"./StyleDefinition-3f884fc8.js";import"./config-0f36ebd6.js";import"./GeometryUtils-dd2125c2.js";import"./earcut-a218cde0.js";import"./visualVariablesUtils-9ae7ec21.js";import"./visualVariablesUtils-3ba7085d.js";import"./Matcher-30c233e8.js";import"./tileUtils-c160135b.js";import"./TileClipper-190e57cb.js";import"./Geometry-39a0d1c5.js";import"./ExpandedCIM-cdf56881.js";import"./devEnvironmentUtils-94bcfc53.js";import"./schemaUtils-cac6ecdf.js";import"./createSymbolSchema-ed6f55b3.js";import"./MD5-b72999e2.js";import"./util-713ce8b4.js";import"./ComputedAttributeStorage-87557582.js";import"./vec3f32-a3dab948.js";let h=class extends(l(m)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,i){if(!this.graphicsViews.length)return null;const t=this.graphicsViews.reverse().map((i=>i.hitTest(e)));return(await Promise.all(t)).flat().filter(((e,i)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[i]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))}update(e){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(e)}attach(){this.handles.add([e(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:o,featureSet:a,layerDefinition:p}of e){const e=i.fromJSON(a),l=new t(e.features),m=p.drawingInfo,h=o?s.fromJSON(o):null,y=r(m.renderer),d=new c({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:y,container:new n(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=d,this._popupTemplates.set(d,h),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(d),this.container.addChild(d.container)}})),e(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new o({symbol:e})})),e(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new o({symbol:e})})),e(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new o({symbol:e})}))],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};h=a([p("esri.views.2d.layers.GeoRSSLayerView2D")],h);const y=h;export{y as default};