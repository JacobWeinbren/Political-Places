import{ag as i,dO as e,c5 as t,L as s,bP as a,b8 as l,c9 as o,r,t as n,dL as h,cb as p,aR as d,dP as m,dQ as c,cn as y,cD as b,V as w,W as g,X as u}from"../main.js";import{b as _,g as f,d as V}from"./kmlUtils-6cd8352f.js";import{g as v}from"./Bitmap-980b6844.js";import{t as S}from"./BitmapContainer-be1528be.js";import{l as j,d as I}from"./LayerView-1a21bf7a.js";import{i as C}from"./GraphicContainer-ab966a42.js";import{i as P}from"./BaseGraphicContainer-36c658c3.js";import"./aaBoundingBox-ba276da4.js";import"./VertexArrayObject-9b598883.js";import"./Texture-985b002d.js";import"./Container-4c789dcd.js";import"./mat4f32-c792828b.js";import"./WGLContainer-4911ff2d.js";import"./definitions-bed6fa82.js";import"./Utils-5ca71fda.js";import"./ShaderCompiler-c6da5fe6.js";import"./config-90cc2904.js";import"./GeometryUtils-fcb6a2d9.js";import"./MaterialKey-e4d8bf43.js";import"./earcut-f770eba4.js";import"./quantizationUtils-8410433c.js";import"./json-d4de2d54.js";import"./Matcher-23f3b3ca.js";import"./TileStore-f63aba89.js";import"./FeatureSetReader-1fd2de45.js";import"./centroid-a4fbaa26.js";import"./visualVariablesUtils-eee4b9c2.js";import"./visualVariablesUtils-f36e6e93.js";import"./quickselect-f9fed392.js";import"./tileUtils-67fe9ec7.js";import"./schemaUtils-0b1a48b9.js";import"./CIMSymbolHelper-7e9b7a1b.js";import"./Rect-7efb79ab.js";import"./BidiEngine-b4bf30d1.js";import"./MD5-dea8f45f.js";import"./TileClipper-b83d4778.js";import"./FeatureContainer-ff1cd4a8.js";import"./TileContainer-609069e2.js";class x{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let k=class extends(j(I)){constructor(){super(...arguments),this._handles=new i,this._bitmapIndex=new Map,this._mapImageContainer=new S,this._kmlVisualData=new x,this.allVisiblePoints=new e,this.allVisiblePolylines=new e,this.allVisiblePolygons=new e,this.allVisibleMapImages=new t}hitTest(i,e){if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return Promise.resolve(null);const t=[this._pointsView.hitTest(i,e),this._polylinesView.hitTest(i,e),this._polygonsView.hitTest(i,e)];return Promise.all(t).then((i=>i.filter((i=>(i&&(i.layer=this.layer,i.sourceLayer=this.layer),!!i)))[0]||null))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._handles.add([this.allVisibleMapImages.on("change",(i=>{i.added.forEach((i=>this._addMapImage(i))),i.removed.forEach((i=>this._removeMapImage(i)))}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new P({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new P({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new P({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(i=>{for(const[i,e]of this._kmlVisualData.allSublayers)e.visibility=0;for(const e of i){const i=this._kmlVisualData.allSublayers.get(e.id);i&&(i.visibility=1)}this._refreshCollections()})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating")}))}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&s(i.href,{responseType:"image"}).then((({data:e})=>{let t=a.fromJSON(i.extent);l(t,this.view.spatialReference)&&(t=o(t,this.view.spatialReference));const s=new v(e,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/e.naturalWidth,s.rotation=i.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(i,s)}))}async _getViewDependentUrl(i,e){const{viewFormat:t,viewBoundScale:s,httpQuery:l}=i;if(r(t)){if(n(e))throw new Error("Loading this network link requires a view state.");let o;if(await h(),r(s)&&1!==s){const i=new a(e.extent);i.expand(s),o=i}else o=e.extent;o=p(o,d.WGS84);const w=p(o,d.WebMercator),g=o.xmin,u=o.xmax,_=o.ymin,f=o.ymax,V=e.size[0]*e.pixelRatio,v=e.size[1]*e.pixelRatio,S=Math.max(w.width,w.height),j={"[bboxWest]":g.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":f.toString(),"[lookatLon]":o.center.x.toString(),"[lookatLat]":o.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":e.rotation.toString(),"[lookatTerrainLon]":o.center.x.toString(),"[lookatTerrainLat]":o.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":o.center.x.toString(),"[cameraLat]":o.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":V.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":m,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},I=i=>{for(const e in i)for(const t in j)i[e]=i[e].replace(t,j[t])},C=c(t);I(C);let P={};r(l)&&(P=c(l),I(P));const x=y(i.href);return x.query={...x.query,...C,...P},`${x.path}?${b(C)}`}return i.href}async _fetchService(){const i=new x;await this._loadVisualData(this.layer.url,i),this._kmlVisualData=i,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((i=>this._isSublayerVisible(i.sublayerId))).map((({item:i})=>i)))}_isSublayerVisible(i){const e=this._kmlVisualData.allSublayers.get(i);return!!e.visibility&&(-1===e.parentFolderId||this._isSublayerVisible(e.parentFolderId))}_loadVisualData(i,e){return this._fetchParsedKML(i).then((async i=>{for(const t of i.sublayers){e.allSublayers.set(t.id,t);const i=t.points?await _(t.points):[],s=t.polylines?await _(t.polylines):[],a=t.polygons?await _(t.polygons):[],l=t.mapImages||[];if(e.allPoints.push(...i.map((i=>({item:i,sublayerId:t.id})))),e.allPolylines.push(...s.map((i=>({item:i,sublayerId:t.id})))),e.allPolygons.push(...a.map((i=>({item:i,sublayerId:t.id})))),e.allMapImages.push(...l.map((i=>({item:i,sublayerId:t.id})))),t.networkLink){const i=await this._getViewDependentUrl(t.networkLink,this.view.state);await this._loadVisualData(i,e)}}}))}_fetchParsedKML(i){return f(i,this.view.spatialReference,this.layer.refreshInterval).then((i=>V(i.data)))}_removeMapImage(i){const e=this._bitmapIndex.get(i);e&&(this._mapImageContainer.removeChild(e),this._bitmapIndex.delete(i))}};w([g()],k.prototype,"_pointsView",void 0),w([g()],k.prototype,"_polylinesView",void 0),w([g()],k.prototype,"_polygonsView",void 0),w([g()],k.prototype,"_fetchingPromise",void 0),w([g()],k.prototype,"updating",void 0),k=w([u("esri.views.2d.layers.KMLLayerView2D")],k);var M=k;export default M;
