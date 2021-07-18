import{n as e,cj as t,cN as r,L as s,a as i,b2 as l,hb as o,dr as a,bP as n,l as u,c_ as c,h_ as p,hI as h,k as y,cJ as d,gg as m,h$ as f,hH as g,d9 as S,gj as A,gk as v,d1 as x,d2 as w,d3 as U,d4 as b,d8 as _,cv as I,cq as R,aO as P,h as T,aU as O,v as C,V as L,W as j,aR as M,by as N,cT as E,X as D}from"../main.js";import{s as B}from"./ArcGISCachedService-057376cb.js";import{j as z}from"./TilemapCache-a3628e80.js";import{n as Q}from"./serviceTileInfoProperty-60f4c4cf.js";import{r as V}from"./TileIndex-8b72cc2d.js";import{o as k}from"./jsonContext-fa9072a7.js";import{a as G}from"./StyleRepository-aa3d5524.js";import"./colorUtils-ca75f806.js";import"./definitions-be7cb682.js";const $=e.getLogger("esri.layers.support.SpriteSource");class F{constructor(e,t,r,s){this.baseURL=e,this.devicePixelRatio=t,this.maxTextureSize=r,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const e=[];for(const t in this._spritesData)e.push(t);return e.sort(),e}getSpriteInfo(e){return this._spritesData[e]}async load(e){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(e){this._isRetina=this.devicePixelRatio>1.15;const l=t(this.baseURL),o=l.query?"?"+r(l.query):"",a=this._isRetina?"@2x":"",n=`${l.path}${a}.${this._spriteImageFormat}${o}`,u=`${l.path}${a}.json${o}`;return Promise.all([s(u,e),s(n,{responseType:"image",...e})]).then((([e,t])=>{const r=Object.keys(e.data);if(!r||0===r.length||1===r.length&&"_ssl"===r[0]||!t||!t.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=e.data;const s=t.data,o=Math.max(this.maxTextureSize,4096);if(s.width>o||s.height>o){const e=`Sprite resource for style ${l.path} is bigger than the maximum allowed of ${o} pixels}`;throw $.error(e),new i("SpriteSource",e)}this.width=s.width,this.height=s.height;const a=document.createElement("canvas"),n=a.getContext("2d");a.width=s.width,a.height=s.height,n.drawImage(s,0,0,s.width,s.height);const u=n.getImageData(0,0,s.width,s.height),c=new Uint8Array(u.data);let p;for(let e=0;e<c.length;e+=4)p=c[e+3]/255,c[e]=c[e]*p,c[e+1]=c[e+1]*p,c[e+2]=c[e+2]*p;this.image=c}))}}class W{constructor(e,s,i){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=e,this.sourceUrl=s,s&&(this.parsedUrl=t(this.sourceUrl));const u=this.parsedUrl.path,c=this.parsedUrl.query?"?"+r(this.parsedUrl.query):"",p=l(i),h=p.tiles;s&&h.forEach(((e,t)=>{o(e)||(h[t]=a(u,e)+c)})),this.tileServers=h,i.tileMap&&(this.tileMapURL=a(s,i.tileMap));const y=i.capabilities&&i.capabilities.split(",").map((e=>e.toLowerCase().trim())),d=!!i.exportTilesAllowed,m=!!y&&-1!==y.indexOf("tilemap"),f=d&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:d,supportsTileMap:m},exportTiles:d?{maxExportTilesCount:+f}:null},this.tileInfo=Q(p.tileInfo,p,null,{ignoreMinMaxLOD:!0}),m&&(this.type="vector-tile",this.tilemapCache=new z({layer:this}),this.tilemapCache&&(this.tileIndex=new V(this.tilemapCache))),this.fullExtent=n.fromJSON(i.fullExtent)}getRefKey(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Promise.resolve(e)}getSourceTileUrl(e,t,r){let s=this.tileServers[t%this.tileServers.length];return s=s.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),s}isCompatibleWith(e){const t=this.tileInfo,r=e.tileInfo;if(!t.spatialReference.equals(r.spatialReference))return!1;if(!t.origin.equals(r.origin))return!1;if(Math.round(t.dpi)!==Math.round(r.dpi))return!1;const s=t.lods,i=r.lods,l=Math.min(s.length,i.length);for(let e=0;e<l;e++){const t=s[e],r=i[e];if(t.level!==r.level||Math.round(t.scale)!==Math.round(r.scale))return!1}return!0}}const J=u.defaults&&u.defaults.io.corsEnabledServers;function q(e){if(!e)return;const t=p(e);J&&-1===J.indexOf(t)&&J.push(t)}function X(...e){let t;for(let r=0;r<e.length;++r)if(h(e[r])){if(t){const s=t.split("://")[0];t=s+":"+e[r].trim()}}else t=o(e[r])?e[r]:a(t,e[r]);return c(t)}async function Y(e,r,i,l,o){let a,n,u;if(y(o),"string"==typeof i){const e=d(i);q(e);const r=t(e);u=await s(r.path,{query:{f:"json"},responseType:"json",...o}),a=e,n=e}else u={data:i},a=i.jsonUrl||null,n=l;const c=u.data;return u.ssl&&(a&&(a=a.replace(/^http:/i,"https:")),n&&(n=n.replace(/^http:/i,"https:"))),K(c)?(e.styleUrl=a||null,async function(e,t,r,s){const i=r?m(r):f;e.styleBase=i,e.style=t,e.styleUrl&&q(e.styleUrl),t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const r=t.sources.esri;r.url?await Y(e,"esri",X(i,r.url),void 0,s):l.push(Y(e,"esri",r,i,s))}for(const r of Object.keys(t.sources))"esri"!==r&&"vector"===t.sources[r].type&&(t.sources[r].url?l.push(Y(e,r,X(i,t.sources[r].url),void 0,s)):t.sources[r].tiles&&l.push(Y(e,r,t.sources[r],i,s)));await Promise.all(l)}(e,c,n,o)):function(e){return!K(e)}(c)?e.sourceUrl?H(e,c,n,!1,r,o):(e.sourceUrl=a||null,H(e,c,n,!0,r,o)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function K(e){return!!e.sources}async function H(e,t,r,s,i,l){const o=r?c(r)+"/":f,a=function(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},s=512;let i=78271.51696400007,l=295828763.7957775;const o=[],a=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,n=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):22;for(let e=0;e<=n;e++)e>=a&&o.push({level:e,scale:l,resolution:i}),i/=2,l/=2;for(const r of e.tiles)q(X(t,r));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:o,spatialReference:{wkid:102100}}}}(t,o),n=new W(i,o,a);if(!s&&e.primarySourceName in e.sourceNameToSource){const t=e.sourceNameToSource[e.primarySourceName];if(!t.isCompatibleWith(n))return Promise.resolve();null!=n.fullExtent&&(null!=t.fullExtent?t.fullExtent.union(n.fullExtent):t.fullExtent=n.fullExtent.clone()),t.tileInfo.lods.length<n.tileInfo.lods.length&&(t.tileInfo=n.tileInfo)}if(s?(e.sourceBase=o,e.source=t,e.validatedSource=a,e.primarySourceName=i,e.sourceUrl&&q(e.sourceUrl)):q(o),e.sourceNameToSource[i]=n,!e.style)return null==t.defaultStyles?Promise.reject():"string"==typeof t.defaultStyles?Y(e,"",X(o,t.defaultStyles,"root.json"),void 0,l):Y(e,"",t.defaultStyles,X(o,"root.json"),l)}class Z{constructor(e,t){this.lockedSchemaPixelSize=e,this.isGCS=t}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,t){let r=0,s=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(r=t),e[1]%2&&(s=t)),[r,s]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]&&256===e.size[1])return e;const t=e.spatialReference.isGeographic,r=[],s=e.lods.length;for(let i=0;i<s;i++){const s=e.lods[i],l=t?s.resolution:2*s.resolution;r.push(new g({level:s.level,scale:s.scale,resolution:l}))}return new S({size:[256,256],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:r})}static create512x512CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]||256===e.size[1])return null;const t=[],r=e.lods.length;for(let s=0;s<r;s++){const r=e.lods[s],i=.5*r.resolution;t.push(new g({level:r.level,scale:r.scale,resolution:i}))}return new S({size:[512,512],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:t})}}const ee=1e-6;function te(e,t){if(e===t)return!0;if(!e&&null!=t)return!1;if(null!=e&&!t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=ee||Math.abs(r.y-s.y)>=ee)return!1;let i,l;e.lods[0].scale>t.lods[0].scale?(i=e,l=t):(l=e,i=t);for(let e=i.lods[0].scale;e>=l.lods[l.lods.length-1].scale-ee;e/=2)if(Math.abs(e-l.lods[0].scale)<ee)return!0;return!1}function re(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;const r=e.size[0],s=e.format,i=e.dpi,l={x:e.origin.x,y:e.origin.y},o=e.spatialReference.toJSON(),a=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=a.scale,c=a.resolution,p=n.scale,h=[];let y=u,d=c,m=0;for(;y>p;)h.push({level:m,resolution:d,scale:y}),m++,y/=2,d/=2;return new S({size:[r,r],dpi:i,format:s||"pbf",origin:l,lods:h,spatialReference:o})}let se=class extends(A(v(B(x(w(U(b(_)))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(I.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(R).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await s(t,{...e,query:{f:"json"}})).data&&this.read({url:t},k(this.portalItem))})).catch(R).then((()=>this._loadStyle(e)));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,r=e&&e.serviceUrl&&t(e.serviceUrl);return r?this._getDefaultAttribution(r.path):null}get capabilities(){const e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){const e=this._getPrimarySource();return e?e.fullExtent:null}get parsedUrl(){return this.serviceUrl?t(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&h(e)&&(e=`https:${e}`),t.styleUrl=e}get tileIndexType(){const e=this._getPrimarySource();return e?e.type:""}get tileIndexUrl(){const e=this._getPrimarySource();return e?e.tileMapURL:""}get tileInfo(){var e;const t=[];for(const e in this.sourceNameToSource)t.push(this.sourceNameToSource[e]);let r=(null==(e=this._getPrimarySource())?void 0:e.tileInfo)||new S;if(t.length>1)for(let e=0;e<t.length;e++)te(r,t[e].tileInfo)&&(r=re(r,t[e].tileInfo));return r}get tilemapCache(){const e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null}get tileServers(){const e=this._getPrimarySource();return e?e.tileServers:[]}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return Z.create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return Z.create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=P(),s=new F(this.styleRepository.sprite,e,r.maxTextureSize,this.currentStyleInfo.spriteFormat);await s.load(t),this._spriteSourceMap.set(e,s)}return Promise.resolve(this._spriteSourceMap.get(e))}async loadStyle(e,t){const r=e||this.style||this.url;if(this._loadingPromise&&"string"==typeof r&&this.url===r&&!T(this._abortController))return this._loadingPromise;const s=this._abortController;s&&s.abort();const i=O();return this._loadingPromise=new Promise(((e,s)=>{const l={signal:i.signal};this._spriteSourceMap.clear(),this._getSourceAndStyle(r,l).then(e,s),C(t,(()=>{i.abort()}))})),this._abortController=i,this._loadingPromise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return l(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return l(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return l(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}getTileUrl(e,t,r){let s=this.tileServers[t%this.tileServers.length];return s=s.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),s}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new i("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}async _getSourceAndStyle(e,r){if(!e)throw new Error("invalid style!");const s=await async function(e,r){const s={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[i,l]="string"==typeof e?[e,null]:[null,e.jsonUrl],o=i?t(i):null;await Y(s,"esri",e,l,r);const a={layerDefinition:s.validatedSource,url:i,parsedUrl:o,serviceUrl:s.sourceUrl,style:s.style,styleUrl:s.styleUrl,spriteUrl:s.style.sprite&&X(s.styleBase,s.style.sprite),spriteFormat:s.spriteFormat,glyphsUrl:s.style.glyphs&&X(s.styleBase,s.style.glyphs),sourceNameToSource:s.sourceNameToSource,primarySourceName:s.primarySourceName};return q(a.spriteUrl),q(a.glyphsUrl),a}(e,r);"webp"===s.spriteFormat&&(await function(e){const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise((r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}))}("lossy")||(s.spriteFormat="png")),this._set("currentStyleInfo",{...s}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",s.sourceNameToSource),this._set("primarySourceName",s.primarySourceName),this._set("styleRepository",new G(s.style,s)),this.read(s.layerDefinition,{origin:"service"}),this.emit("load-style",{})}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const e of r)if(e.toLowerCase().indexOf(s)>-1)return d(`//static.arcgis.com/attribution/Vector${i}/${e}`)}_getPrimarySource(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}async _loadStyle(e){return this._loadingPromise?this._loadingPromise:this.loadStyle(null,e)}};L([j({readOnly:!0})],se.prototype,"attributionDataUrl",null),L([j({type:["show","hide"]})],se.prototype,"listMode",void 0),L([j({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],json:{read:!1}})],se.prototype,"capabilities",null),L([j({readOnly:!0})],se.prototype,"currentStyleInfo",void 0),L([j({json:{read:!1},readOnly:!0,type:n})],se.prototype,"fullExtent",null),L([j()],se.prototype,"style",void 0),L([j({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],se.prototype,"isReference",void 0),L([j({type:["VectorTileLayer"]})],se.prototype,"operationalLayerType",void 0),L([j({readOnly:!0})],se.prototype,"parsedUrl",null),L([j({readOnly:!0})],se.prototype,"serviceUrl",null),L([j({type:M,readOnly:!0})],se.prototype,"spatialReference",null),L([j({readOnly:!0})],se.prototype,"styleRepository",void 0),L([j({readOnly:!0})],se.prototype,"sourceNameToSource",void 0),L([j({readOnly:!0})],se.prototype,"primarySourceName",void 0),L([j({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],se.prototype,"styleUrl",null),L([N(["portal-item","web-document"],"styleUrl")],se.prototype,"writeStyleUrl",null),L([j({json:{read:!1},readOnly:!0})],se.prototype,"tileIndexType",null),L([j({json:{read:!1},readOnly:!0})],se.prototype,"tileIndexUrl",null),L([j({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:S})],se.prototype,"tileInfo",null),L([j({json:{read:!1},readOnly:!0,type:z})],se.prototype,"tilemapCache",null),L([j({json:{read:!1},readOnly:!0})],se.prototype,"tileServers",null),L([j({json:{read:!1},readOnly:!0,value:"vector-tile"})],se.prototype,"type",void 0),L([j({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],se.prototype,"url",void 0),L([j({readOnly:!0})],se.prototype,"version",void 0),L([E("version",["version","currentVersion"])],se.prototype,"readVersion",null),L([j({readOnly:!0})],se.prototype,"compatibleTileInfo256",null),L([j({readOnly:!0})],se.prototype,"compatibleTileInfo512",null),se=L([D("esri.layers.VectorTileLayer")],se);var ie=se;export default ie;
