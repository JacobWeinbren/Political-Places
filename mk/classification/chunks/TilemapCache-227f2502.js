import{d7 as e,ef as t,e as i,b3 as a,C as l,s,W as n,eg as r,bF as o,cE as h,v as c,j as p,eh as m,p as u,dw as v,ei as f,Z as d,_ as y,c7 as b,a0 as w,X as g,cH as _,m as S}from"../main.js";const A={type:e,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:T}}}}};function T(t,i,a,l){if(!t)return null;const{minScale:s,maxScale:n,minLOD:r,maxLOD:o}=i;if(null!=r&&null!=o)return l&&l.ignoreMinMaxLOD?e.fromJSON(t):e.fromJSON({...t,lods:t.lods.filter((({level:e})=>null!=e&&e>=r&&e<=o))});if(0!==s&&0!==n){const i=e=>Math.round(1e4*e)/1e4,a=s?i(s):1/0,l=n?i(n):-1/0;return e.fromJSON({...t,lods:t.lods.filter((e=>{const t=i(e.scale);return t<=a&&t>=l}))})}return e.fromJSON(t)}class ${constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%8,l=i>>3,s=this._tileAvailabilityBitSet;return l<0||l>s.length?"unknown":s[l]&1<<a?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let a=!0,l=!0;const s=Math.ceil(t*i/8),n=new Uint8Array(s);let r=0;for(let t=0;t<e.length;t++){const i=t%8;e[t]?(l=!1,n[r]|=1<<i):a=!1,7===i&&++r}l?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(e,a){const s=e.service.request||l,{row:n,col:r,width:o,height:h}=e,c={query:{f:"json"}};return a=a?{...c,...a}:c,s(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),a).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:n,left:r,width:o,height:h},valid:!0,data:t(o*h,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==n||e.location.left!==r||e.location.width!==o||e.location.height!==h))throw new i("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:n,left:r,width:o,height:h}});return $.fromJSON(e)}))}static fromJSON(e){$._validateJSON(e);const t=new $;return t.location=Object.freeze(a(e.location)),t._updateFromData(e.data),Object.freeze(t)}static _validateJSON(e){if(!e||!e.location)throw new i("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new i("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new i("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new i("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new i("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function z(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}var O;const L=s.getLogger("esri.layers.support.TilemapCache");let D=O=class extends(n(g)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*r.MEGABYTES,this.request=l,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new o(this.cacheByteSize),this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?","layer.apiKey?","layer.customParameters?"],(()=>this._initializeTilemapDefinition())),h((()=>{var e,t;return null==(e=this.layer)||null==(t=e.tileInfo)?void 0:t.lods}),(e=>this._initializeAvailableLevels(e)),_)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(L.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,a,l){if(!this._availableLevels[e])return Promise.reject(new i("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const s=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,t,a,s);if(n)return Promise.resolve(n);const r=l&&l.signal;return l={...l,signal:null},new Promise(((e,t)=>{c(r,(()=>t(S())));const i=z(s);let a=this._pendingTilemapRequests[i];if(!a){a=$.fromDefinition(s,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=a,a.then(e,e)}a.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}fetchAvailability(e,t,a,l){return this._availableLevels[e]?this.fetchTilemap(e,t,a,l).catch((e=>e)).then((l=>{if(l instanceof $){const s=l.getAvailability(t,a);return"unavailable"===s?Promise.reject(new i("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:a})):s}if(p(l))throw l;return"unknown"})):Promise.reject(new i("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,a,l){a.level=e,a.row=t,a.col=i;const s=this.layer.tileInfo;s.updateTileInfo(a);const n=this.fetchAvailability(e,t,i,l).catch((e=>{if(p(e))throw e;if(s.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw e}));return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,l,n),n}async _fetchAvailabilityUpsamplePrefetch(e,t,i,a,l,s){if(!this._prefetchingEnabled)return;const n=`prefetch-${e}`;if(this.handles.has(n))return;const r=new AbortController;s.then((()=>r.abort()),(()=>r.abort()));let o=!1;const h={remove(){o||(o=!0,r.abort())}};if(this.handles.add(h,n),await m(10,r.signal).catch((()=>{})),o||(o=!0,this.handles.remove(n)),u(r))return;const c={id:e,level:t,row:i,col:a},p={...l,signal:r.signal},v=this.layer.tileInfo;for(let e=0;O._prefetches.length<O._maxPrefetch&&v.upsampleTile(c);++e){const e=this.fetchAvailability(c.level,c.row,c.col,p);O._prefetches.push(e);const t=()=>{O._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:v({...t.query,...a,token:null!=i?i:null==(e=t.query)?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const l=z(a);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};D._maxPrefetch=4,D._prefetches=new f({initialSize:O._maxPrefetch}),d([y({constructOnly:!0,type:Number})],D.prototype,"levels",void 0),d([b("levels")],D.prototype,"castLevels",null),d([y({readOnly:!0,type:Number})],D.prototype,"size",null),d([y({constructOnly:!0,type:Number})],D.prototype,"cacheByteSize",void 0),d([y({constructOnly:!0})],D.prototype,"layer",void 0),d([y({constructOnly:!0})],D.prototype,"request",void 0),D=O=d([w("esri.layers.support.TilemapCache")],D);export{T as n,A as r,D as z};
