import{ak as i,dm as e,ch as t,cM as s,C as a,cp as l,bn as o,cB as r,r as n,t as h,ds as p,cC as m,aT as d,dC as c,dD as y,dE as b,dF as u,Z as w,_ as g,a0 as _}from"../main.js";import{b as V,g as f,d as v}from"./kmlUtils-882add0f.js";import{v as j}from"./Bitmap-ddeaf877.js";import{t as S}from"./BitmapContainer-9862a2a0.js";import{f as C,u as I}from"./LayerView-de5b4b81.js";import{i as x}from"./GraphicContainer-1ba72abb.js";import{r as k}from"./BaseGraphicContainer-57b4dfa8.js";import"./Container-82e53333.js";import"./enums-23145ba2.js";import"./Texture-5f8b05e1.js";import"./WGLContainer-c2de1b8f.js";import"./pixelUtils-07299408.js";import"./VertexArrayObject-f8d16690.js";import"./VertexElementDescriptor-8df85f96.js";import"./enums-35498f65.js";import"./Utils-c08a2f63.js";import"./number-5bcfe158.js";import"./ProgramTemplate-851a81c4.js";import"./StyleDefinition-17b4b563.js";import"./config-39daa94e.js";import"./GeometryUtils-a028e364.js";import"./MaterialKey-d541ae9c.js";import"./alignmentUtils-24585d5f.js";import"./earcut-4b9fe621.js";import"./CIMSymbolHelper-465929e0.js";import"./BidiEngine-f827276a.js";import"./GeometryUtils-bb99d32f.js";import"./projectionSupport-c358d18a.js";import"./json-ebcd0345.js";import"./FeatureContainer-0f43d63b.js";import"./TileContainer-2c829a9c.js";import"./visualVariablesUtils-1950dc71.js";import"./visualVariablesUtils-063210a3.js";import"./Matcher-7164dd55.js";import"./tileUtils-c150b226.js";import"./TileClipper-510bb3c5.js";import"./Geometry-72041aab.js";import"./cimAnalyzer-24efe167.js";import"./quantizationUtils-a920170a.js";import"./ExpandedCIM-4556b381.js";import"./schemaUtils-7453161c.js";import"./createSymbolSchema-39b74070.js";import"./MD5-6234308b.js";import"./util-f5009057.js";import"./ComputedAttributeStorage-b6d77e3e.js";import"./vec3f32-352905e9.js";class M{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let P=class extends(C(I)){constructor(){super(...arguments),this._handles=new i,this._bitmapIndex=new Map,this._mapImageContainer=new S,this._kmlVisualData=new M,this.allVisiblePoints=new e,this.allVisiblePolylines=new e,this.allVisiblePolygons=new e,this.allVisibleMapImages=new t}async hitTest(i,e){var t,s,a;return(await Promise.all([null==(t=this._pointsView)?void 0:t.hitTest(i),null==(s=this._polylinesView)?void 0:s.hitTest(i),null==(a=this._polygonsView)?void 0:a.hitTest(i)])).flat().filter((i=>!!i&&(i.layer=this.layer,i.sourceLayer=this.layer,!0)))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new k({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new x(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new k({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new x(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new k({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new x(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.handles.add([this.allVisibleMapImages.on("change",(i=>{i.added.forEach((i=>this._addMapImage(i))),i.removed.forEach((i=>this._removeMapImage(i)))})),s((()=>this.layer.visibleSublayers),(i=>{for(const[i,e]of this._kmlVisualData.allSublayers)e.visibility=0;for(const e of i){const i=this._kmlVisualData.allSublayers.get(e.id);i&&(i.visibility=1)}this._refreshCollections()}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal))}detach(){this._fetchController.abort(),this._fetchController=null,this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&a(i.href,{responseType:"image"}).then((({data:e})=>{let t=l.fromJSON(i.extent);o(t,this.view.spatialReference)&&(t=r(t,this.view.spatialReference));const s=new j(e,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/e.naturalWidth,s.rotation=i.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(i,s)}))}async _getViewDependentUrl(i,e){const{viewFormat:t,viewBoundScale:s,httpQuery:a}=i;if(n(t)){if(h(e))throw new Error("Loading this network link requires a view state.");let o;if(await p(),n(s)&&1!==s){const i=new l(e.extent);i.expand(s),o=i}else o=e.extent;o=m(o,d.WGS84);const r=m(o,d.WebMercator),w=o.xmin,g=o.xmax,_=o.ymin,V=o.ymax,f=e.size[0]*e.pixelRatio,v=e.size[1]*e.pixelRatio,j=Math.max(r.width,r.height),S={"[bboxWest]":w.toString(),"[bboxEast]":g.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":o.center.x.toString(),"[lookatLat]":o.center.y.toString(),"[lookatRange]":j.toString(),"[lookatTilt]":"0","[lookatHeading]":e.rotation.toString(),"[lookatTerrainLon]":o.center.x.toString(),"[lookatTerrainLat]":o.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":o.center.x.toString(),"[cameraLat]":o.center.y.toString(),"[cameraAlt]":j.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":c,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},C=i=>{for(const e in i)for(const t in S)i[e]=i[e].replace(t,S[t])},I=y(t);C(I);let x={};n(a)&&(x=y(a),C(x));const k=b(i.href);return k.query={...k.query,...I,...x},`${k.path}?${u(I)}`}return i.href}async _fetchService(i){const e=new M;await this._loadVisualData(this.layer.url,e,i),this._kmlVisualData=e,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i)))}_isSublayerVisible(i){const e=this._kmlVisualData.allSublayers.get(i);return!!e.visibility&&(-1===e.parentFolderId||this._isSublayerVisible(e.parentFolderId))}_loadVisualData(i,e,t){return this._fetchParsedKML(i,t).then((async i=>{for(const s of i.sublayers){e.allSublayers.set(s.id,s);const i=s.points?await V(s.points):[],a=s.polylines?await V(s.polylines):[],l=s.polygons?await V(s.polygons):[],o=s.mapImages||[];if(e.allPoints.push(...i.map((i=>({item:i,sublayerId:s.id})))),e.allPolylines.push(...a.map((i=>({item:i,sublayerId:s.id})))),e.allPolygons.push(...l.map((i=>({item:i,sublayerId:s.id})))),e.allMapImages.push(...o.map((i=>({item:i,sublayerId:s.id})))),s.networkLink){const i=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(i,e,t)}}}))}_fetchParsedKML(i,e){return f(i,this.view.spatialReference,this.layer.refreshInterval,e).then((i=>v(i.data)))}_removeMapImage(i){const e=this._bitmapIndex.get(i);e&&(this._mapImageContainer.removeChild(e),this._bitmapIndex.delete(i))}};w([g()],P.prototype,"_pointsView",void 0),w([g()],P.prototype,"_polylinesView",void 0),w([g()],P.prototype,"_polygonsView",void 0),w([g()],P.prototype,"updating",void 0),P=w([_("esri.views.2d.layers.KMLLayerView2D")],P);const U=P;export{U as default};