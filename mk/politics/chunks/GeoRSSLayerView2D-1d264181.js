import{cZ as e,c7 as i,ca as s,e4 as t,e5 as r,F as o,bC as a,V as p,X as l}from"../main.js";import{l as n,d as m}from"./LayerView-e3df7f04.js";import{i as h}from"./GraphicContainer-5d866608.js";import{o as c}from"./BaseGraphicContainer-48af6657.js";import"./Container-b5ad26a9.js";import"./mat4f32-2308129f.js";import"./Utils-44abebd7.js";import"./Texture-edd22bb8.js";import"./projectionSupport-8f85884c.js";import"./json-812fb7d1.js";import"./Matcher-987ba0d0.js";import"./definitions-8d307e62.js";import"./TileStore-36b2771a.js";import"./FeatureSetReader-611f5672.js";import"./centroid-1933d1b4.js";import"./visualVariablesUtils-8677d6eb.js";import"./visualVariablesUtils-46f52d5a.js";import"./quickselect-a156c329.js";import"./tileUtils-fe7524a4.js";import"./schemaUtils-baabd3f1.js";import"./MaterialKey-b8df0959.js";import"./CIMSymbolHelper-c052e1dc.js";import"./Rect-531bace0.js";import"./BidiEngine-b7dfb718.js";import"./MD5-c8535b52.js";import"./GeometryUtils-9ff4b746.js";import"./earcut-0cc318b8.js";import"./TileClipper-803db15d.js";import"./cimAnalyzer-3a062c50.js";import"./quantizationUtils-f0ba2d61.js";import"./VertexArrayObject-d5b33cc1.js";import"./FeatureContainer-a765c174.js";import"./TileContainer-e431485a.js";import"./WGLContainer-4a5080f2.js";import"./ShaderCompiler-2138d2d0.js";import"./config-31d4f506.js";let y=class extends(n(m)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,i){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,i)));return Promise.all(s).then((e=>e.filter(((e,i)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[i]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(e)}attach(){this.layer.featureCollections.forEach((o=>{const a=e.fromJSON(o.featureSet),p=new(i.ofType(s))(a.features);let l;if(this._graphicsViewMap[a.geometryType])l=this._graphicsViewMap[a.geometryType],l.graphics.addMany(p);else{const e=o.layerDefinition.drawingInfo,i=o.popupInfo?t.fromJSON(o.popupInfo):null,s=r(e.renderer);l=new c({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:s,container:new h(this.view.featuresTilingScheme)}),this._graphicsViewMap[a.geometryType]=l,this._popupTemplates.set(l,i),"polygon"!==a.geometryType||this.layer.polygonSymbol?"polyline"!==a.geometryType||this.layer.lineSymbol?"point"!==a.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(l),this.container.addChild(l.container)}})),this.handles.add([o(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new a({symbol:e})})),o(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new a({symbol:e})})),o(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new a({symbol:e})}))])}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};y=p([l("esri.views.2d.layers.GeoRSSLayerView2D")],y);var d=y;export{d as default};