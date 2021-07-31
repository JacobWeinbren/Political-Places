import{cZ as e,c7 as i,ca as s,e4 as t,e5 as r,F as o,bC as a,V as p,X as l}from"../main.js";import{l as n,d as m}from"./LayerView-fcfbe37e.js";import{i as h}from"./GraphicContainer-67f4bee8.js";import{o as c}from"./BaseGraphicContainer-e830e5c7.js";import"./Container-e192b670.js";import"./mat4f32-2308129f.js";import"./Utils-d8f11ef6.js";import"./Texture-28a59c3a.js";import"./projectionSupport-ebd762e9.js";import"./json-812fb7d1.js";import"./Matcher-5c7b57db.js";import"./definitions-8d307e62.js";import"./TileStore-113e4e1c.js";import"./FeatureSetReader-3ccdd059.js";import"./centroid-1933d1b4.js";import"./visualVariablesUtils-7f067768.js";import"./visualVariablesUtils-0857e3d3.js";import"./quickselect-a156c329.js";import"./tileUtils-28f74d7d.js";import"./schemaUtils-fba30491.js";import"./MaterialKey-61bb0800.js";import"./CIMSymbolHelper-6d0c867d.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";import"./GeometryUtils-9ff4b746.js";import"./earcut-0cc318b8.js";import"./TileClipper-77bdc74c.js";import"./cimAnalyzer-a73be4ae.js";import"./quantizationUtils-80b04eaf.js";import"./VertexArrayObject-83ed1808.js";import"./FeatureContainer-bcd96de8.js";import"./TileContainer-95453884.js";import"./WGLContainer-bc7b9ed6.js";import"./ShaderCompiler-85752f48.js";import"./config-31d4f506.js";let y=class extends(n(m)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,i){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,i)));return Promise.all(s).then((e=>e.filter(((e,i)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[i]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(e)}attach(){this.layer.featureCollections.forEach((o=>{const a=e.fromJSON(o.featureSet),p=new(i.ofType(s))(a.features);let l;if(this._graphicsViewMap[a.geometryType])l=this._graphicsViewMap[a.geometryType],l.graphics.addMany(p);else{const e=o.layerDefinition.drawingInfo,i=o.popupInfo?t.fromJSON(o.popupInfo):null,s=r(e.renderer);l=new c({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:s,container:new h(this.view.featuresTilingScheme)}),this._graphicsViewMap[a.geometryType]=l,this._popupTemplates.set(l,i),"polygon"!==a.geometryType||this.layer.polygonSymbol?"polyline"!==a.geometryType||this.layer.lineSymbol?"point"!==a.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(l),this.container.addChild(l.container)}})),this.handles.add([o(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new a({symbol:e})})),o(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new a({symbol:e})})),o(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new a({symbol:e})}))])}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};y=p([l("esri.views.2d.layers.GeoRSSLayerView2D")],y);var d=y;export{d as default};
