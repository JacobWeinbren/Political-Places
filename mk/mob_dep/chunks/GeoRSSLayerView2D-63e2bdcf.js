import{c_ as e,c8 as i,cb as s,e5 as t,e6 as r,F as o,bJ as a,V as p,X as l}from"../main.js";import{l as n,d as h}from"./LayerView-a97a5cea.js";import{i as m}from"./GraphicContainer-6fce3c27.js";import{o as c}from"./BaseGraphicContainer-a2f0f7ee.js";import"./Container-4e472596.js";import"./mat4f32-3672828c.js";import"./Utils-206e82fc.js";import"./Texture-6543adec.js";import"./projectionSupport-51d0f942.js";import"./json-53ea76aa.js";import"./Matcher-5f11569b.js";import"./definitions-402d8636.js";import"./TileStore-338619f8.js";import"./FeatureSetReader-0929f1bd.js";import"./centroid-3d42d303.js";import"./visualVariablesUtils-6420438c.js";import"./visualVariablesUtils-e851ac0e.js";import"./quickselect-8fc6a906.js";import"./tileUtils-e23a48e7.js";import"./schemaUtils-dff4e982.js";import"./MaterialKey-cf850b88.js";import"./CIMSymbolHelper-ed23bca1.js";import"./Rect-756e9a32.js";import"./BidiEngine-220e093f.js";import"./MD5-31e8fb3f.js";import"./GeometryUtils-c03a3235.js";import"./earcut-9c8a3447.js";import"./TileClipper-3e23c5ed.js";import"./VertexArrayObject-38dc54b8.js";import"./FeatureContainer-641b2c6a.js";import"./TileContainer-0d832f62.js";import"./WGLContainer-8b68194c.js";import"./ShaderCompiler-04b6e67c.js";import"./config-eda66a4a.js";let y=class extends(n(h)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,i){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,i)));return Promise.all(s).then((e=>e.filter(((e,i)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[i]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(e)}attach(){this.layer.featureCollections.forEach((o=>{const a=e.fromJSON(o.featureSet),p=new(i.ofType(s))(a.features);let l;if(this._graphicsViewMap[a.geometryType])l=this._graphicsViewMap[a.geometryType],l.graphics.addMany(p);else{const e=o.layerDefinition.drawingInfo,i=o.popupInfo?t.fromJSON(o.popupInfo):null,s=r(e.renderer);l=new c({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:s,container:new m(this.view.featuresTilingScheme)}),this._graphicsViewMap[a.geometryType]=l,this._popupTemplates.set(l,i),"polygon"!==a.geometryType||this.layer.polygonSymbol?"polyline"!==a.geometryType||this.layer.lineSymbol?"point"!==a.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(l),this.container.addChild(l.container)}})),this.handles.add([o(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new a({symbol:e})})),o(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new a({symbol:e})})),o(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new a({symbol:e})}))])}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};y=p([l("esri.views.2d.layers.GeoRSSLayerView2D")],y);var f=y;export{f as default};
