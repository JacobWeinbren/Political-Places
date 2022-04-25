import{cM as i,dd as t,r as e,g as s,ck as r,ch as a,Z as o,a0 as h}from"../main.js";import{f as p,u as n}from"./LayerView-de5b4b81.js";import{i as l}from"./GraphicContainer-1ba72abb.js";import{r as m}from"./BaseGraphicContainer-57b4dfa8.js";import"./Container-82e53333.js";import"./Utils-c08a2f63.js";import"./enums-35498f65.js";import"./number-5bcfe158.js";import"./enums-23145ba2.js";import"./Texture-5f8b05e1.js";import"./VertexElementDescriptor-8df85f96.js";import"./CIMSymbolHelper-465929e0.js";import"./BidiEngine-f827276a.js";import"./alignmentUtils-24585d5f.js";import"./GeometryUtils-bb99d32f.js";import"./projectionSupport-c358d18a.js";import"./json-ebcd0345.js";import"./VertexArrayObject-f8d16690.js";import"./FeatureContainer-0f43d63b.js";import"./TileContainer-2c829a9c.js";import"./WGLContainer-c2de1b8f.js";import"./pixelUtils-07299408.js";import"./ProgramTemplate-851a81c4.js";import"./StyleDefinition-17b4b563.js";import"./config-39daa94e.js";import"./GeometryUtils-a028e364.js";import"./MaterialKey-d541ae9c.js";import"./earcut-4b9fe621.js";import"./visualVariablesUtils-1950dc71.js";import"./visualVariablesUtils-063210a3.js";import"./Matcher-7164dd55.js";import"./tileUtils-c150b226.js";import"./TileClipper-510bb3c5.js";import"./Geometry-72041aab.js";import"./cimAnalyzer-24efe167.js";import"./quantizationUtils-a920170a.js";import"./ExpandedCIM-4556b381.js";import"./schemaUtils-7453161c.js";import"./createSymbolSchema-39b74070.js";import"./MD5-6234308b.js";import"./util-f5009057.js";import"./ComputedAttributeStorage-b6d77e3e.js";import"./vec3f32-352905e9.js";const c=["routeInfo","directionLines","directionPoints","polygonBarriers","polylineBarriers","pointBarriers","stops"],d=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends(p(n)){constructor(){super(...arguments),this._graphicsViews=new Map,this._highlightIds=new Map}attach(){for(const r of c)this.handles.add(i((()=>e(this.layer[r])?"routeInfo"===r?[s(this.layer[r])]:s(this.layer[r]).toArray():null),(i=>this._createGraphicsView(r,i)),t),r)}detach(){this._destroyGraphicsViews()}highlight(i){let t;return"number"==typeof i?t=[i]:i instanceof r?t=[i.uid]:Array.isArray(i)&&i.length>0?t="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):a.isCollection(i)&&(t=i.map((i=>i&&i.uid)).toArray()),t=t.filter((i=>null!=i)),t.length?(this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):d}async hitTest(i,t){if(this.suspended||!this._graphicsViews.size)return Promise.resolve(null);const e=Array.from(this._graphicsViews.values()).reverse().map((t=>t.hitTest(i))).flat().filter((i=>!!i));for(const i of e)i.layer=this.layer,i.sourceLayer=this.layer;return e}moveStart(){}moveEnd(){}update(i){for(const t of this._graphicsViews.values())t.processUpdate(i)}viewChange(){for(const i of this._graphicsViews.values())i.viewChange()}isUpdating(){for(const i of this._graphicsViews.values())if(i.updating)return!0;return!1}_createGraphicsView(s,o){this._destroyGraphicsView(s);const h=this.view,p=new a(e(o)?o.map((i=>{const{attributes:t,geometry:e,symbol:s,popupInfo:a}=i.toPortalJSON();return r.fromJSON({attributes:t,geometry:e,symbol:s,popupTemplate:a})})):[]),n=new l(h.featuresTilingScheme),d=new m({container:n,graphics:p,requestUpdateCallback:()=>this.requestUpdate(),view:h});this._graphicsViews.set(s,d),this.container.addChildAt(n,c.indexOf(s)),this._updateHighlight(),this.handles.add([i((()=>d.updating),(()=>this.notifyChange("updating")),t)],`updating-${s}`)}_destroyGraphicsView(i){if(!this._graphicsViews.has(i))return;const t=this._graphicsViews.get(i);this.container.removeChild(t.container),t.destroy(),this.handles.remove(`updating-${i}`),this._graphicsViews.delete(i)}_destroyGraphicsViews(){this.container.removeAllChildren();for(const[i,t]of this._graphicsViews.entries())this.handles.remove(i),t.destroy();this._graphicsViews.clear()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;0===i?this._highlightIds.delete(t):this._highlightIds.set(t,i)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this._graphicsViews.values())t.setHighlight(i)}};g=o([h("esri.views.2d.layers.RouteLayerView2D")],g);const f=g;export{f as default};