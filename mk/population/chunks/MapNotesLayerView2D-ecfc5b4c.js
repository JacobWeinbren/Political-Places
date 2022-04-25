import{r as i,ck as e,ch as t,K as s,cZ as r,t as a,Z as o,a0 as h}from"../main.js";import{f as p,u as n}from"./LayerView-de5b4b81.js";import{i as l}from"./GraphicContainer-1ba72abb.js";import{r as c}from"./BaseGraphicContainer-57b4dfa8.js";import"./Container-82e53333.js";import"./Utils-c08a2f63.js";import"./enums-35498f65.js";import"./number-5bcfe158.js";import"./enums-23145ba2.js";import"./Texture-5f8b05e1.js";import"./VertexElementDescriptor-8df85f96.js";import"./CIMSymbolHelper-465929e0.js";import"./BidiEngine-f827276a.js";import"./alignmentUtils-24585d5f.js";import"./GeometryUtils-bb99d32f.js";import"./projectionSupport-c358d18a.js";import"./json-ebcd0345.js";import"./VertexArrayObject-f8d16690.js";import"./FeatureContainer-0f43d63b.js";import"./TileContainer-2c829a9c.js";import"./WGLContainer-c2de1b8f.js";import"./pixelUtils-07299408.js";import"./ProgramTemplate-851a81c4.js";import"./StyleDefinition-17b4b563.js";import"./config-39daa94e.js";import"./GeometryUtils-a028e364.js";import"./MaterialKey-d541ae9c.js";import"./earcut-4b9fe621.js";import"./visualVariablesUtils-1950dc71.js";import"./visualVariablesUtils-063210a3.js";import"./Matcher-7164dd55.js";import"./tileUtils-c150b226.js";import"./TileClipper-510bb3c5.js";import"./Geometry-72041aab.js";import"./cimAnalyzer-24efe167.js";import"./quantizationUtils-a920170a.js";import"./ExpandedCIM-4556b381.js";import"./schemaUtils-7453161c.js";import"./createSymbolSchema-39b74070.js";import"./MD5-6234308b.js";import"./util-f5009057.js";import"./ComputedAttributeStorage-b6d77e3e.js";import"./vec3f32-352905e9.js";const d="sublayers",g="layerView",m=Object.freeze({remove(){},pause(){},resume(){}});let u=class extends(p(n)){constructor(){super(...arguments),this._highlightIds=new Map}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),(e=>e.hitTest(i).filter((i=>!!i.popupTemplate)))).flat()}*graphicsViews(){i(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():i(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,t){const s=Array.from(this.graphicsViews(),(async t=>{const s=await t.hitTest(e);if(i(this._graphicsViewsFeatureCollectionMap)){const i=this._graphicsViewsFeatureCollectionMap.get(t);for(const e of s)!e.popupTemplate&&i.popupTemplate&&(e.popupTemplate=i.popupTemplate)}return s}));return(await Promise.all(s)).flat()}highlight(i){let s;return"number"==typeof i?s=[i]:i instanceof e?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):t.isCollection(i)&&(s=i.map((i=>i&&i.uid)).toArray()),s=s.filter((i=>null!=i)),s.length?(this._addHighlight(s),{remove:()=>{this._removeHighlight(s)}}):m}update(i){for(const e of this.graphicsViews())e.processUpdate(i)}attach(){const e=this.view,t=()=>this.requestUpdate(),a=this.layer.featureCollections;if(i(a)&&a.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const i of a){const r=new l(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new c({view:e,graphics:i.source,renderer:i.renderer,requestUpdateCallback:t,container:r});this._graphicsViewsFeatureCollectionMap.set(a,i),this.container.addChild(a.container),this.handles.add([s(i,"visible",(i=>a.container.visible=i)),s(a,"updating",(()=>this.notifyChange("updating")))],g)}this._updateHighlight()}else i(this.layer.sublayers)&&this.handles.add(r(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),d)}detach(){this._destroyGraphicsViews(),this.handles.remove(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(g);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),a(this.layer.sublayers))return;const i=[],e=this.view,t=()=>this.requestUpdate();for(const r of this.layer.sublayers){const a=new l(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const o=new c({view:e,graphics:r.graphics,requestUpdateCallback:t,container:a});this.handles.add([r.on("graphic-update",o.graphicUpdateHandler),s(r,"visible",(i=>o.container.visible=i)),s(o,"updating",(()=>this.notifyChange("updating")))],g),this.container.addChild(o.container),i.push(o)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const e of this.graphicsViews())e.setHighlight(i)}};u=o([h("esri.views.2d.layers.MapNotesLayerView2D")],u);const f=u;export{f as default};