import{cZ as e,c7 as i,ca as s,e4 as t,e5 as r,F as a,bC as o,V as p,X as l}from"../main.js";import{l as n,d as m}from"./LayerView-ab45fbbf.js";import{i as h}from"./GraphicContainer-5a89836d.js";import{o as c}from"./BaseGraphicContainer-9b4a3a7d.js";import"./Container-715b9fa4.js";import"./mat4f32-2521725d.js";import"./Utils-dc0b79bb.js";import"./Texture-06b8e9f5.js";import"./projectionSupport-0033b08d.js";import"./json-c1314431.js";import"./Matcher-7944285e.js";import"./definitions-bd7968b3.js";import"./TileStore-caa07df9.js";import"./FeatureSetReader-91ed00ee.js";import"./centroid-3acadd71.js";import"./visualVariablesUtils-bcf09db3.js";import"./visualVariablesUtils-b5b07139.js";import"./quickselect-2a5dada6.js";import"./tileUtils-9d590fae.js";import"./schemaUtils-d469dfa4.js";import"./MaterialKey-9004562e.js";import"./CIMSymbolHelper-ed4bf8ef.js";import"./Rect-46a6423d.js";import"./BidiEngine-a3336f07.js";import"./MD5-73ac3f43.js";import"./GeometryUtils-30b98fd3.js";import"./earcut-26dd4f9f.js";import"./TileClipper-4aade9b0.js";import"./cimAnalyzer-2be32b4d.js";import"./quantizationUtils-5f779b3a.js";import"./VertexArrayObject-a64a247c.js";import"./FeatureContainer-62ab2d55.js";import"./TileContainer-b8d1d412.js";import"./WGLContainer-1cc3becb.js";import"./ShaderCompiler-d82bc909.js";import"./config-8597b78f.js";let y=class extends(n(m)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,i){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,i)));return Promise.all(s).then((e=>e.filter(((e,i)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[i]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(e)}attach(){this.layer.featureCollections.forEach((a=>{const o=e.fromJSON(a.featureSet),p=new(i.ofType(s))(o.features);let l;if(this._graphicsViewMap[o.geometryType])l=this._graphicsViewMap[o.geometryType],l.graphics.addMany(p);else{const e=a.layerDefinition.drawingInfo,i=a.popupInfo?t.fromJSON(a.popupInfo):null,s=r(e.renderer);l=new c({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:s,container:new h(this.view.featuresTilingScheme)}),this._graphicsViewMap[o.geometryType]=l,this._popupTemplates.set(l,i),"polygon"!==o.geometryType||this.layer.polygonSymbol?"polyline"!==o.geometryType||this.layer.lineSymbol?"point"!==o.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(l),this.container.addChild(l.container)}})),this.handles.add([a(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new o({symbol:e})})),a(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new o({symbol:e})})),a(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new o({symbol:e})}))])}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};y=p([l("esri.views.2d.layers.GeoRSSLayerView2D")],y);var d=y;export{d as default};
