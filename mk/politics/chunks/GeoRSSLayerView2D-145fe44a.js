import{cZ as e,c7 as i,ca as s,e4 as t,e5 as r,F as o,bC as a,V as p,X as l}from"../main.js";import{l as n,d as m}from"./LayerView-33414922.js";import{i as c}from"./GraphicContainer-d46fc4f1.js";import{o as h}from"./BaseGraphicContainer-72c8490a.js";import"./Container-f8952d6a.js";import"./mat4f32-2308129f.js";import"./Utils-55d7c2c6.js";import"./Texture-c105cc80.js";import"./projectionSupport-da62e186.js";import"./json-812fb7d1.js";import"./Matcher-39d3ee1d.js";import"./definitions-8d307e62.js";import"./TileStore-d959f5cb.js";import"./FeatureSetReader-aa503b98.js";import"./centroid-1933d1b4.js";import"./visualVariablesUtils-9e814db6.js";import"./visualVariablesUtils-9a9af480.js";import"./quickselect-a156c329.js";import"./tileUtils-d68cce32.js";import"./schemaUtils-c0dec4d3.js";import"./MaterialKey-429f10e7.js";import"./CIMSymbolHelper-da3f398d.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";import"./GeometryUtils-9ff4b746.js";import"./earcut-0cc318b8.js";import"./TileClipper-c1dac727.js";import"./cimAnalyzer-c7db123c.js";import"./quantizationUtils-1b2fe0f3.js";import"./VertexArrayObject-e3941b8a.js";import"./FeatureContainer-2792e191.js";import"./TileContainer-6dc496fb.js";import"./WGLContainer-30df383f.js";import"./ShaderCompiler-cae75718.js";import"./config-31d4f506.js";let y=class extends(n(m)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,i){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,i)));return Promise.all(s).then((e=>e.filter(((e,i)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[i]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(e)}attach(){this.layer.featureCollections.forEach((o=>{const a=e.fromJSON(o.featureSet),p=new(i.ofType(s))(a.features);let l;if(this._graphicsViewMap[a.geometryType])l=this._graphicsViewMap[a.geometryType],l.graphics.addMany(p);else{const e=o.layerDefinition.drawingInfo,i=o.popupInfo?t.fromJSON(o.popupInfo):null,s=r(e.renderer);l=new h({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:s,container:new c(this.view.featuresTilingScheme)}),this._graphicsViewMap[a.geometryType]=l,this._popupTemplates.set(l,i),"polygon"!==a.geometryType||this.layer.polygonSymbol?"polyline"!==a.geometryType||this.layer.lineSymbol?"point"!==a.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(l),this.container.addChild(l.container)}})),this.handles.add([o(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new a({symbol:e})})),o(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new a({symbol:e})})),o(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new a({symbol:e})}))])}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};y=p([l("esri.views.2d.layers.GeoRSSLayerView2D")],y);var d=y;export{d as default};