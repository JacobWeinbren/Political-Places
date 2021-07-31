import{gE as e,gF as r,gG as t,d7 as s,d8 as a,d6 as i,d9 as o,S as l,gT as n,hi as p,dd as c,r as h,cv as u,aS as d,co as y,L as v,cS as f,a as g,cU as m,e0 as _,io as S,cR as T,V as b,W as w,cY as O,bx as R,dh as j,dc as W,X as U}from"../main.js";import{s as C}from"./ArcGISCachedService-c11abca8.js";import{f as L,y as P,Q as A}from"./SublayersOwner-e4b6677e.js";import"./serviceTileInfoProperty-451bc7b6.js";import"./TilemapCache-3faa0c34.js";import"./Version-fea7d4aa.js";const D=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let I=class extends(e(L(r(t(s(a(C(P(i(o(l(n(p(c)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=h(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(u).then((()=>this._fetchService(r)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&d.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const a=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),i=[],o={writeSublayerStructure:!1,...s};a.forEach((e=>{const r=e.write({},o);i.push(r)})),i.some((e=>Object.keys(e).length>1))&&(r.layers=i)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>y(e).path)):null}fetchTile(e,r,t,s={}){const{signal:a,timestamp:i}=s,o=this.getTileUrl(e,r,t),l={responseType:"image",signal:a};return null!=i&&(l.query={_ts:s.timestamp}),v(o,l).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,a=f({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),i=this.tileServers;return`${i&&i.length?i[r%i.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${a?"?"+a:""}`}_fetchService(e){return new Promise(((r,t)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new g("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new g("tile-layer:undefined-url","layer's url is not defined");const s=m(this.parsedUrl.path);if(h(s)&&"ImageServer"===s.serverType)throw new g("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");v(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!_(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,r){if(!S(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return v(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new g("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=D.length;t<s;t++)if(r=D[t],r.toLowerCase().indexOf(e)>-1)return T("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};b([w({readOnly:!0})],I.prototype,"attributionDataUrl",null),b([w({type:["show","hide","hide-children"]})],I.prototype,"listMode",void 0),b([w({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],I.prototype,"isReference",void 0),b([w({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],I.prototype,"operationalLayerType",void 0),b([w({type:Boolean})],I.prototype,"resampling",void 0),b([w()],I.prototype,"sourceJSON",void 0),b([w({type:d})],I.prototype,"spatialReference",void 0),b([O("spatialReference",["spatialReference","tileInfo"])],I.prototype,"readSpatialReference",null),b([w({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],I.prototype,"path",void 0),b([w({readOnly:!0})],I.prototype,"sublayers",void 0),b([R("sublayers",{layers:{type:[A]}})],I.prototype,"writeSublayers",null),b([w({json:{read:!1,write:!1}})],I.prototype,"popupEnabled",void 0),b([w()],I.prototype,"tileServers",null),b([j("tileServers")],I.prototype,"castTileServers",null),b([w({readOnly:!0,json:{read:!1}})],I.prototype,"type",void 0),b([w(W)],I.prototype,"url",void 0),I=b([U("esri.layers.TileLayer")],I),I.prototype.fetchTile.__isDefault__=!0;var N=I;export{N as default};
