import{ip as e,iq as r,ee as t,ef as s,ed as a,eg as i,W as o,ir as l,iF as n,iY as p,ek as c,r as h,aW as u,aV as d,bB as y,C as f,dC as v,e as _,e3 as g,gJ as m,k8 as S,e0 as b,Z as T,_ as w,e6 as O,bJ as j,cd as R,ej as W,a0 as U}from"../main.js";import{s as C}from"./ArcGISCachedService-00f0ae49.js";import{S as L,y as P,W as k}from"./SublayersOwner-4987cdcf.js";import"./TilemapCache-53bdcd95.js";import"./Version-ba8c1666.js";import"./floorFilterUtils-9c9879c8.js";import"./sublayerUtils-f0007059.js";const A=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let D=class extends(e(L(r(t(s(C(P(a(i(o(l(n(p(c)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=h(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(u).then((()=>this._fetchService(r)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&d.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const a=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),i=[],o={writeSublayerStructure:!1,...s};a.forEach((e=>{const r=e.write({},o);i.push(r)})),i.some((e=>Object.keys(e).length>1))&&(r.layers=i)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>y(e).path)):null}fetchTile(e,r,t,s={}){const{signal:a}=s,i=this.getTileUrl(e,r,t),o={responseType:"image",signal:a,query:{...this.refreshParameters}};return f(i,o).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,a=v({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),i=this.tileServers;return`${i&&i.length?i[r%i.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${a?"?"+a:""}`}_fetchService(e){return new Promise(((r,t)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new _("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new _("tile-layer:undefined-url","layer's url is not defined");const s=g(this.parsedUrl.path);if(h(s)&&"ImageServer"===s.serverType)throw new _("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!m(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,r){if(!S(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return f(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new _("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=A.length;t<s;t++)if(r=A[t],r.toLowerCase().indexOf(e)>-1)return b("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};T([w({readOnly:!0})],D.prototype,"attributionDataUrl",null),T([w({type:["show","hide","hide-children"]})],D.prototype,"listMode",void 0),T([w({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],D.prototype,"isReference",void 0),T([w({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],D.prototype,"operationalLayerType",void 0),T([w({type:Boolean})],D.prototype,"resampling",void 0),T([w()],D.prototype,"sourceJSON",void 0),T([w({type:d})],D.prototype,"spatialReference",void 0),T([O("spatialReference",["spatialReference","tileInfo"])],D.prototype,"readSpatialReference",null),T([w({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],D.prototype,"path",void 0),T([w({readOnly:!0})],D.prototype,"sublayers",void 0),T([j("sublayers",{layers:{type:[k]}})],D.prototype,"writeSublayers",null),T([w({json:{read:!1,write:!1}})],D.prototype,"popupEnabled",void 0),T([w()],D.prototype,"tileServers",null),T([R("tileServers")],D.prototype,"castTileServers",null),T([w({readOnly:!0,json:{read:!1}})],D.prototype,"type",void 0),T([w(W)],D.prototype,"url",void 0),D=T([U("esri.layers.TileLayer")],D),D.prototype.fetchTile.__isDefault__=!0;const B=D;export{B as default};