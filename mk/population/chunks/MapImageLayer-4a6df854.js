import{gE as e,hh as t,gF as r,gG as s,d6 as i,d7 as a,d8 as o,d9 as l,gT as n,hi as p,S as h,dd as y,r as d,cv as c,hz as u,hM as m,ei as g,a as v,L as b,g as f,bO as x,ce as S,gV as w,V as O,W as j,cY as I,bx as M,gb as E,dc as N,X as F}from"../main.js";import{r as J}from"./scaleUtils-a0a8b5e1.js";import{f as L,y as R,Q as P}from"./SublayersOwner-91ace126.js";import"./Version-8e8d59bd.js";let q=class extends(e(t(r(s(L(R(i(a(o(l(n(p(h(y)))))))))))))){constructor(...e){super(...e),this.alwaysRefetch=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=d(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(c).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=u(s.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;a=m(i,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");a=m(i,e.sublayers,u(e.origin))}}const o=[],l={writeSublayerStructure:a,...s};let n=a;i.forEach((e=>{const t=e.write({},l);o.push(t),n=n||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),n&&(t.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,s){const i=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new g({layer:this,scale:J({extent:e,width:t})*i}),o=a.toJSON();a.destroy();const l=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},n=e&&e.spatialReference,p=n.wkid||JSON.stringify(n.toJSON());o.dpi*=i;const h={};if(null!=s&&s.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();h.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(h.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:t+","+r,...o,...l,...h}}async fetchImage(e,t,r,s){var i,a;const o={responseType:"image",signal:null!=(i=null==s?void 0:s.signal)?i:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,r,s),f:"image",_ts:this.alwaysRefetch?Date.now():null!=(a=null==s?void 0:s.timestamp)?a:null,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";return null==o.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?b(l,o).then((e=>e.data)).catch((e=>{if(f(e))throw e;throw new v("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})})):Promise.reject(new v("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:o.query}))}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json"}},{data:r}=await b(this.url,t),{extent:s,fullExtent:i,timeExtent:a}=r,o=s||i;return{fullExtent:o&&x.fromJSON(o),timeExtent:a&&S.fromJSON({start:a[0],end:a[1]})}}loadAll(){return w(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await b(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};O([j()],q.prototype,"alwaysRefetch",void 0),O([j()],q.prototype,"dpi",void 0),O([j()],q.prototype,"gdbVersion",void 0),O([j()],q.prototype,"imageFormat",void 0),O([I("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),O([j({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),O([j({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),O([j()],q.prototype,"imageTransparency",void 0),O([j({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),O([j({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),O([j({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),O([j({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),O([j()],q.prototype,"sourceJSON",void 0),O([j({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),O([M("sublayers",{layers:{type:[P]},visibleLayers:{type:[E]}})],q.prototype,"writeSublayers",null),O([j({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),O([j({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),O([j(N)],q.prototype,"url",void 0),q=O([F("esri.layers.MapImageLayer")],q);var T=q;export{T as default};
