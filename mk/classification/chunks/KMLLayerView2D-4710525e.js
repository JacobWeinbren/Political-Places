import{ag as i,e9 as e,c2 as t,L as s,bP as a,b8 as l,cl as o,r,t as n,e6 as h,cn as p,aR as m,ea as d,cI as c,cV as y,cN as w,V as b,W as g,X as u}from"../main.js";import{b as _,g as V,d as f}from"./kmlUtils-077c4aec.js";import{g as v}from"./Bitmap-d8f25134.js";import{t as S}from"./BitmapContainer-509368b0.js";import{l as j,d as I}from"./LayerView-3f47bd0e.js";import{i as C}from"./GraphicContainer-6097f6d8.js";import{i as x}from"./BaseGraphicContainer-7e7cbd73.js";import"./aaBoundingBox-5f35b4b7.js";import"./VertexArrayObject-ea7e577c.js";import"./Texture-c9cfb579.js";import"./Container-427491bb.js";import"./mat4f32-b5b66fd7.js";import"./WGLContainer-3868d285.js";import"./definitions-53d29f17.js";import"./Utils-2f198e30.js";import"./ShaderCompiler-12ea7439.js";import"./config-4e1ab712.js";import"./GeometryUtils-c4c7ed43.js";import"./MaterialKey-e8c85dcc.js";import"./earcut-1a691bec.js";import"./quantizationUtils-851fc5ae.js";import"./json-5b2b387c.js";import"./Matcher-bc9fba22.js";import"./TileStore-52eb1849.js";import"./FeatureSetReader-cf6b0afd.js";import"./centroid-a817072d.js";import"./visualVariablesUtils-c06916b9.js";import"./visualVariablesUtils-79df29a4.js";import"./quickselect-4c28d668.js";import"./tileUtils-a814f18a.js";import"./schemaUtils-89f47806.js";import"./CIMSymbolHelper-f3e90741.js";import"./Rect-df6cbc83.js";import"./BidiEngine-2645f818.js";import"./MD5-8aa08108.js";import"./TileClipper-033a956a.js";import"./FeatureContainer-de11c916.js";import"./TileContainer-fbf06d79.js";class P{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let k=class extends(j(I)){constructor(){super(...arguments),this._handles=new i,this._bitmapIndex=new Map,this._mapImageContainer=new S,this._kmlVisualData=new P,this.allVisiblePoints=new e,this.allVisiblePolylines=new e,this.allVisiblePolygons=new e,this.allVisibleMapImages=new t}hitTest(i,e){if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return Promise.resolve(null);const t=[this._pointsView.hitTest(i,e),this._polylinesView.hitTest(i,e),this._polygonsView.hitTest(i,e)];return Promise.all(t).then((i=>i.filter((i=>(i&&(i.layer=this.layer,i.sourceLayer=this.layer),!!i)))[0]||null))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._handles.add([this.allVisibleMapImages.on("change",(i=>{i.added.forEach((i=>this._addMapImage(i))),i.removed.forEach((i=>this._removeMapImage(i)))}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new x({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new x({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new x({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(i=>{for(const[i,e]of this._kmlVisualData.allSublayers)e.visibility=0;for(const e of i){const i=this._kmlVisualData.allSublayers.get(e.id);i&&(i.visibility=1)}this._refreshCollections()})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating")}))}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&s(i.href,{responseType:"image"}).then((({data:e})=>{let t=a.fromJSON(i.extent);l(t,this.view.spatialReference)&&(t=o(t,this.view.spatialReference));const s=new v(e,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/e.naturalWidth,s.rotation=i.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(i,s)}))}async _getViewDependentUrl(i,e){const{viewFormat:t,viewBoundScale:s,httpQuery:l}=i;if(r(t)){if(n(e))throw new Error("Loading this network link requires a view state.");let o;if(await h(),r(s)&&1!==s){const i=new a(e.extent);i.expand(s),o=i}else o=e.extent;o=p(o,m.WGS84);const b=p(o,m.WebMercator),g=o.xmin,u=o.xmax,_=o.ymin,V=o.ymax,f=e.size[0]*e.pixelRatio,v=e.size[1]*e.pixelRatio,S=Math.max(b.width,b.height),j={"[bboxWest]":g.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":o.center.x.toString(),"[lookatLat]":o.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":e.rotation.toString(),"[lookatTerrainLon]":o.center.x.toString(),"[lookatTerrainLat]":o.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":o.center.x.toString(),"[cameraLat]":o.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":d,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},I=i=>{for(const e in i)for(const t in j)i[e]=i[e].replace(t,j[t])},C=c(t);I(C);let x={};r(l)&&(x=c(l),I(x));const P=y(i.href);return P.query={...P.query,...C,...x},`${P.path}?${w(C)}`}return i.href}async _fetchService(){const i=new P;await this._loadVisualData(this.layer.url,i),this._kmlVisualData=i,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i)))}_isSublayerVisible(i){const e=this._kmlVisualData.allSublayers.get(i);return!!e.visibility&&(-1===e.parentFolderId||this._isSublayerVisible(e.parentFolderId))}_loadVisualData(i,e){return this._fetchParsedKML(i).then((async i=>{for(const t of i.sublayers){e.allSublayers.set(t.id,t);const i=t.points?await _(t.points):[],s=t.polylines?await _(t.polylines):[],a=t.polygons?await _(t.polygons):[],l=t.mapImages||[];if(e.allPoints.push(...i.map((i=>({item:i,sublayerId:t.id})))),e.allPolylines.push(...s.map((i=>({item:i,sublayerId:t.id})))),e.allPolygons.push(...a.map((i=>({item:i,sublayerId:t.id})))),e.allMapImages.push(...l.map((i=>({item:i,sublayerId:t.id})))),t.networkLink){const i=await this._getViewDependentUrl(t.networkLink,this.view.state);await this._loadVisualData(i,e)}}}))}_fetchParsedKML(i){return V(i,this.view.spatialReference,this.layer.refreshInterval).then((i=>f(i.data)))}_removeMapImage(i){const e=this._bitmapIndex.get(i);e&&(this._mapImageContainer.removeChild(e),this._bitmapIndex.delete(i))}};b([g()],k.prototype,"_pointsView",void 0),b([g()],k.prototype,"_polylinesView",void 0),b([g()],k.prototype,"_polygonsView",void 0),b([g()],k.prototype,"_fetchingPromise",void 0),b([g()],k.prototype,"updating",void 0),k=b([u("esri.views.2d.layers.KMLLayerView2D")],k);var M=k;export default M;
