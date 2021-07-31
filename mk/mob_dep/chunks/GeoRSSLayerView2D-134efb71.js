import{c_ as e,c8 as i,cb as s,e5 as t,e6 as r,F as a,bJ as o,V as p,X as l}from"../main.js";import{l as n,d as h}from"./LayerView-1c2a858f.js";import{i as m}from"./GraphicContainer-4289c7db.js";import{o as c}from"./BaseGraphicContainer-d5fd3ab8.js";import"./Container-5dd1e82e.js";import"./mat4f32-3672828c.js";import"./Utils-a3200683.js";import"./Texture-24cf8d49.js";import"./projectionSupport-6b18bab5.js";import"./json-53ea76aa.js";import"./Matcher-bf9b7254.js";import"./definitions-402d8636.js";import"./TileStore-28b3196c.js";import"./FeatureSetReader-84b0496a.js";import"./centroid-3d42d303.js";import"./visualVariablesUtils-e2ac54d3.js";import"./visualVariablesUtils-4b2b3dae.js";import"./quickselect-8fc6a906.js";import"./tileUtils-57fb017d.js";import"./schemaUtils-b2823065.js";import"./MaterialKey-0dbb6a70.js";import"./CIMSymbolHelper-ca19f950.js";import"./Rect-756e9a32.js";import"./BidiEngine-220e093f.js";import"./MD5-31e8fb3f.js";import"./GeometryUtils-c03a3235.js";import"./earcut-9c8a3447.js";import"./TileClipper-65473a68.js";import"./VertexArrayObject-852a2a15.js";import"./FeatureContainer-e8594ae3.js";import"./TileContainer-77dca32a.js";import"./WGLContainer-c15331cb.js";import"./ShaderCompiler-5bdadf00.js";import"./config-eda66a4a.js";let y=class extends(n(h)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,i){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,i)));return Promise.all(s).then((e=>e.filter(((e,i)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[i]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(e)}attach(){this.layer.featureCollections.forEach((a=>{const o=e.fromJSON(a.featureSet),p=new(i.ofType(s))(o.features);let l;if(this._graphicsViewMap[o.geometryType])l=this._graphicsViewMap[o.geometryType],l.graphics.addMany(p);else{const e=a.layerDefinition.drawingInfo,i=a.popupInfo?t.fromJSON(a.popupInfo):null,s=r(e.renderer);l=new c({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:s,container:new m(this.view.featuresTilingScheme)}),this._graphicsViewMap[o.geometryType]=l,this._popupTemplates.set(l,i),"polygon"!==o.geometryType||this.layer.polygonSymbol?"polyline"!==o.geometryType||this.layer.lineSymbol?"point"!==o.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(l),this.container.addChild(l.container)}})),this.handles.add([a(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new o({symbol:e})})),a(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new o({symbol:e})})),a(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new o({symbol:e})}))])}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};y=p([l("esri.views.2d.layers.GeoRSSLayerView2D")],y);var d=y;export{d as default};