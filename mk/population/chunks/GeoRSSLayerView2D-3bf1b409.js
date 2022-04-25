import{K as e,dc as i,ch as t,dh as s,di as r,dj as o,Z as a,a0 as p}from"../main.js";import{f as l,u as m}from"./LayerView-de5b4b81.js";import{i as n}from"./GraphicContainer-1ba72abb.js";import{r as h}from"./BaseGraphicContainer-57b4dfa8.js";import"./Container-82e53333.js";import"./Utils-c08a2f63.js";import"./enums-35498f65.js";import"./number-5bcfe158.js";import"./enums-23145ba2.js";import"./Texture-5f8b05e1.js";import"./VertexElementDescriptor-8df85f96.js";import"./CIMSymbolHelper-465929e0.js";import"./BidiEngine-f827276a.js";import"./alignmentUtils-24585d5f.js";import"./GeometryUtils-bb99d32f.js";import"./projectionSupport-c358d18a.js";import"./json-ebcd0345.js";import"./VertexArrayObject-f8d16690.js";import"./FeatureContainer-0f43d63b.js";import"./TileContainer-2c829a9c.js";import"./WGLContainer-c2de1b8f.js";import"./pixelUtils-07299408.js";import"./ProgramTemplate-851a81c4.js";import"./StyleDefinition-17b4b563.js";import"./config-39daa94e.js";import"./GeometryUtils-a028e364.js";import"./MaterialKey-d541ae9c.js";import"./earcut-4b9fe621.js";import"./visualVariablesUtils-1950dc71.js";import"./visualVariablesUtils-063210a3.js";import"./Matcher-7164dd55.js";import"./tileUtils-c150b226.js";import"./TileClipper-510bb3c5.js";import"./Geometry-72041aab.js";import"./cimAnalyzer-24efe167.js";import"./quantizationUtils-a920170a.js";import"./ExpandedCIM-4556b381.js";import"./schemaUtils-7453161c.js";import"./createSymbolSchema-39b74070.js";import"./MD5-6234308b.js";import"./util-f5009057.js";import"./ComputedAttributeStorage-b6d77e3e.js";import"./vec3f32-352905e9.js";let c=class extends(l(m)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,i){if(!this.graphicsViews.length)return null;const t=this.graphicsViews.reverse().map((i=>i.hitTest(e)));return(await Promise.all(t)).flat().filter(((e,i)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[i]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))}update(e){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(e)}attach(){this.handles.add([e(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:o,featureSet:a,layerDefinition:p}of e){const e=i.fromJSON(a),l=new t(e.features),m=p.drawingInfo,c=o?s.fromJSON(o):null,y=r(m.renderer),b=new h({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:y,container:new n(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=b,this._popupTemplates.set(b,c),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(b),this.container.addChild(b.container)}})),e(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new o({symbol:e})})),e(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new o({symbol:e})})),e(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new o({symbol:e})}))],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};c=a([p("esri.views.2d.layers.GeoRSSLayerView2D")],c);const y=c;export{y as default};