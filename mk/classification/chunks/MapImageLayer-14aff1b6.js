import{gj as e,gU as t,gk as r,gl as s,d1 as i,d2 as a,d3 as o,d4 as l,gy as n,gV as p,S as y,d8 as c,r as u,cq as d,ha as h,a as m,L as g,g as b,bP as f,c9 as v,gA as x,V as S,W as w,cT as O,by as j,g2 as I,d7 as E,X as M}from"../main.js";import{r as N}from"./scaleUtils-8171bef3.js";import{f as P,y as J,Q as L}from"./SublayersOwner-620c3ff5.js";import{n as R}from"./ExportImageParameters-9181c63f.js";import{e as U}from"./sublayerUtils-ec6996bf.js";import"./Version-1bc087cc.js";let q=class extends(e(t(r(s(P(J(i(a(o(l(n(p(y(c)))))))))))))){constructor(...e){super(...e),this.alwaysRefetch=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=u(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(d).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=h(s.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;a=U(i,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");a=U(i,e.sublayers,h(e.origin))}}const o=[],l={writeSublayerStructure:a,...s};let n=a;i.forEach((e=>{const t=e.write({},l);o.push(t),n=n||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),n&&(t.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,s){const i=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new R({layer:this,scale:N({extent:e,width:t})*i}),o=a.toJSON();a.destroy();const l=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},n=e&&e.spatialReference,p=n.wkid||JSON.stringify(n.toJSON());o.dpi*=i;const y={};if(null!=s&&s.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();y.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:t+","+r,...o,...l,...y}}async fetchImage(e,t,r,s){var i,a;const o={responseType:"image",signal:null!=(i=null==s?void 0:s.signal)?i:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,r,s),f:"image",_ts:this.alwaysRefetch?Date.now():null!=(a=null==s?void 0:s.timestamp)?a:null,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";return null==o.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?g(l,o).then((e=>e.data)).catch((e=>{if(b(e))throw e;throw new m("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})})):Promise.reject(new m("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:o.query}))}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json"}},{data:r}=await g(this.url,t),{extent:s,fullExtent:i,timeExtent:a}=r,o=s||i;return{fullExtent:o&&f.fromJSON(o),timeExtent:a&&v.fromJSON({start:a[0],end:a[1]})}}loadAll(){return x(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};S([w()],q.prototype,"alwaysRefetch",void 0),S([w()],q.prototype,"dpi",void 0),S([w()],q.prototype,"gdbVersion",void 0),S([w()],q.prototype,"imageFormat",void 0),S([O("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),S([w({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),S([w({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),S([w()],q.prototype,"imageTransparency",void 0),S([w({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),S([w({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),S([w({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),S([w({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),S([w()],q.prototype,"sourceJSON",void 0),S([w({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),S([j("sublayers",{layers:{type:[L]},visibleLayers:{type:[I]}})],q.prototype,"writeSublayers",null),S([w({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),S([w({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),S([w(E)],q.prototype,"url",void 0),q=S([M("esri.layers.MapImageLayer")],q);var F=q;export{F as default};
