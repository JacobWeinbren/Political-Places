import{iv as e,j6 as t,iw as r,ek as s,el as i,em as a,en as o,ix as n,iK as l,j4 as p,W as u,er as y,r as d,aU as c,jG as h,jP as m,jQ as g,dN as b,e as v,C as f,j as x,cp as S,cq as w,iM as j,jq as O,Z as I,_ as E,ed as M,bJ as P,gO as T,eq as L,a0 as N}from"../main.js";import{r as q}from"./scaleUtils-4f94dabd.js";import{S as J,y as R,W as U}from"./SublayersOwner-c92babd8.js";import"./Version-4bd6fb32.js";let F=class extends(e(t(r(J(R(s(i(a(o(n(l(p(u(y)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=d(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(c).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=h(s.origin);if(e===m.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=g(i,e,m.SERVICE)}else if(e>m.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=g(i,e.sublayers,h(e.origin))}}const o=[],n={writeSublayerStructure:a,...s};let l=a;i.forEach((e=>{const t=e.write({},n);o.push(t),l=l||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),l&&(t.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,s){const i=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new b({layer:this,floors:null==s?void 0:s.floors,scale:q({extent:e,width:t})*i}),o=a.toJSON();a.destroy();const n=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},l=e&&e.spatialReference,p=l.wkid||JSON.stringify(l.toJSON());o.dpi*=i;const u={};if(null!=s&&s.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();u.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:t+","+r,...o,...n,...u}}async fetchImage(e,t,r,s){var i;const a={responseType:"image",signal:null!=(i=null==s?void 0:s.signal)?i:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,r,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},o=this.parsedUrl.path+"/export";return null==a.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?f(o,a).then((e=>e.data)).catch((e=>{if(x(e))throw e;throw new v("mapimagelayer:image-fetch-error",`Unable to load image: ${o}`,{error:e})})):Promise.reject(new v("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:a.query}))}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await f(this.url,t),{extent:s,fullExtent:i,timeExtent:a}=r,o=s||i;return{fullExtent:o&&S.fromJSON(o),timeExtent:a&&w.fromJSON({start:a[0],end:a[1]})}}loadAll(){return j(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return O(this,e)}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};I([E({type:Boolean})],F.prototype,"datesInUnknownTimezone",void 0),I([E()],F.prototype,"dpi",void 0),I([E()],F.prototype,"gdbVersion",void 0),I([E()],F.prototype,"imageFormat",void 0),I([M("imageFormat",["supportedImageFormatTypes"])],F.prototype,"readImageFormat",null),I([E({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],F.prototype,"imageMaxHeight",void 0),I([E({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],F.prototype,"imageMaxWidth",void 0),I([E()],F.prototype,"imageTransparency",void 0),I([E({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],F.prototype,"isReference",void 0),I([E({json:{read:!1,write:!1}})],F.prototype,"labelsVisible",void 0),I([E({type:["ArcGISMapServiceLayer"]})],F.prototype,"operationalLayerType",void 0),I([E({json:{read:!1,write:!1}})],F.prototype,"popupEnabled",void 0),I([E()],F.prototype,"sourceJSON",void 0),I([E({json:{write:{ignoreOrigin:!0}}})],F.prototype,"sublayers",void 0),I([P("sublayers",{layers:{type:[U]},visibleLayers:{type:[T]}})],F.prototype,"writeSublayers",null),I([E({type:["show","hide","hide-children"]})],F.prototype,"listMode",void 0),I([E({json:{read:!1},readOnly:!0,value:"map-image"})],F.prototype,"type",void 0),I([E(L)],F.prototype,"url",void 0),F=I([N("esri.layers.MapImageLayer")],F);const k=F;export{k as default};
