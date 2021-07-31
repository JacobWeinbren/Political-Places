import{n as e,d4 as t,cG as r,d5 as i,r as s,k as a,bh as o,d6 as n,d7 as l,d8 as h,d9 as d,da as c,a as p,cv as u,aV as y,L as m,cS as v,V as g,W as _,db as f,dc as w,cY as b,X as S,dd as T}from"../main.js";import{s as L}from"./ArcGISCachedService-a59f0d3a.js";import"./serviceTileInfoProperty-2ba8e04e.js";import"./TilemapCache-cbb3105b.js";const j=e.getLogger("esri.core.workers.WorkerHandle");class k extends class{constructor(e,r,i,s={}){this._mainMethod=r,this._listeners=[],this._promise=t(e,{...s,schedule:i}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>j.error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const a={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(a),this._connectListener(a),r((()=>{a.removed=!0,i(this._listeners,a),this._thread&&s(a.threadHandle)&&a.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const i=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:i,signal:r})}return this._promise?this._promise.then((()=>(a(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,r){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}getTransferList(e){return[e.buffer]}release(){--this.ref<=0&&(x.forEach(((e,t)=>{e===this&&x.delete(t)})),this.destroy())}}const x=new Map;function I(e=null){let t=x.get(o(e));return t||(s(e)?(t=new k((t=>e.schedule(t))),x.set(e,t)):(t=new k,x.set(null,t))),++t.ref,t}const E=e.getLogger("esri.layers.ElevationLayer");let V=class extends(L(n(l(h(d(T)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=I()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=c(this._lercDecoder)}set minScale(e){this.constructed&&E.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(e){this.constructed&&E.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(e,t){let r=t.currentVersion;return r||(r=9.3),r}load(e){const t=s(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new p("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(u).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,r,i){const a=s((i=i||{signal:null}).signal)?i.signal:i.signal=y().signal,o={responseType:"array-buffer",signal:a},n={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,r,i))).then((()=>m(this.getTileUrl(e,t,r),o))).then((e=>this._lercDecoder.decode(e.data,n,a))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,t,r){const i=!this.tilemapCache&&this.supportsBlankTile,s=v({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${e}/${t}/${r}${s?"?"+s:""}`}async queryElevation(e,t){const{ElevationQuery:r}=await import("./ElevationQuery-c3b19328.js");return a(t),(new r).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:r}=await import("./ElevationQuery-c3b19328.js");return a(t),(new r).createSampler(this,e,t)}_fetchTileAvailability(e,t,r,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,i):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},r=await m(this.parsedUrl.path,t);r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};g([_({json:{read:{source:"copyrightText"}}})],V.prototype,"copyright",void 0),g([_({readOnly:!0,type:f})],V.prototype,"heightModelInfo",void 0),g([_({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],V.prototype,"path",void 0),g([_({type:["show","hide"]})],V.prototype,"listMode",void 0),g([_({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],V.prototype,"minScale",null),g([_({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],V.prototype,"maxScale",null),g([_({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],V.prototype,"opacity",void 0),g([_({type:["ArcGISTiledElevationServiceLayer"]})],V.prototype,"operationalLayerType",void 0),g([_()],V.prototype,"sourceJSON",void 0),g([_({json:{read:!1},value:"elevation",readOnly:!0})],V.prototype,"type",void 0),g([_(w)],V.prototype,"url",void 0),g([_()],V.prototype,"version",void 0),g([b("version",["currentVersion"])],V.prototype,"readVersion",null),V=g([S("esri.layers.ElevationLayer")],V),V.prototype.fetchTile.__isDefault__=!0;var D=V;export{D as default};
