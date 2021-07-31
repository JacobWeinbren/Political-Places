import{V as e,W as t,cY as r,dh as n,X as s,gH as i,ag as a,bO as l,dk as o,c7 as u,t as p,a as d,aS as c,co as m,bB as y,S as h,gE as f,hh as g,gG as b,gF as x,d7 as w,d8 as v,d9 as E,dd as S,gU as N,r as I,cv as O,L as R,eg as U,e4 as F,ca as L,is as A,b8 as P,cL as _,l as M,b3 as q,bx as j,h6 as T,gb as C,it as V,dc as W}from"../main.js";import{r as B}from"./scaleUtils-b70fd4fd.js";import{l as D}from"./ExportWMSImageParameters-d0803fb2.js";var k;let H=0,$=k=class extends i{constructor(e){super(e),this._sublayersHandles=new a,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?l.fromJSON(e):null}get id(){const e=this._get("id");return null==e?H++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))])),this._set("sublayers",e)}castSublayers(e){return o(u.ofType(k),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new k;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((e=>e.clone()))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};e([t()],$.prototype,"description",null),e([t({readOnly:!0})],$.prototype,"dimensions",void 0),e([t({value:null})],$.prototype,"fullExtent",null),e([r("fullExtent",["extent"])],$.prototype,"readExtent",null),e([t()],$.prototype,"fullExtents",void 0),e([t()],$.prototype,"featureInfoFormat",void 0),e([t()],$.prototype,"featureInfoUrl",void 0),e([t({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],$.prototype,"id",null),e([t({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],$.prototype,"legendUrl",void 0),e([r(["web-document"],"legendUrl")],$.prototype,"readLegendUrl",null),e([t({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],$.prototype,"legendEnabled",void 0),e([t({value:null})],$.prototype,"layer",null),e([t()],$.prototype,"maxScale",void 0),e([t()],$.prototype,"minScale",void 0),e([t({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],$.prototype,"name",null),e([t()],$.prototype,"parent",void 0),e([t({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],$.prototype,"popupEnabled",void 0),e([t({type:Boolean,json:{write:{ignoreOrigin:!0}}})],$.prototype,"queryable",void 0),e([t()],$.prototype,"sublayers",null),e([n("sublayers")],$.prototype,"castSublayers",null),e([t({type:[Number],json:{read:{source:"spatialReferences"}}})],$.prototype,"spatialReferences",void 0),e([t({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],$.prototype,"title",null),e([t({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],$.prototype,"visible",null),$=k=e([s("esri.layers.support.WMSSublayer")],$);var G=$;const X=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],J={84:4326,83:4269,27:4267};function Y(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new d("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const n=Z("Capability",r),s=Z("Service",r),i=Z("Request",n);if(!n||!s||!i)return null;const a=Z("Layer",n);if(!a)return null;const o="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",u=te("Title",s,"")||te("Name",s,""),p=te("AccessConstraints",s,""),c=te("Abstract",s,""),m=parseInt(te("MaxWidth",s,"5000"),10),y=parseInt(te("MaxHeight",s,"5000"),10),h=se(i,"GetMap"),f=ne(i,"GetMap"),g=ae(a,o,t);let b,x,w,v,E=0;if(Array.prototype.slice.call(n.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===E?b=e:1===E?(g.name&&(g.name="",g.sublayers.push(ae(b,o,t))),g.sublayers.push(ae(e,o,t))):g.sublayers.push(ae(e,o,t)),E++)})),!g)return null;const S=g.fullExtents;if(x=g.sublayers,x||(x=[]),0===x.length&&x.push(g),w=g.extent,!w){const e=new l(x[0].extent);g.extent=e.toJSON(),w=g.extent}if(v=g.spatialReferences,!v.length&&x.length>0){const e=t=>{let r=[];return t.sublayers.forEach((t=>{!r.length&&t.spatialReferences.length&&(r=t.spatialReferences||e(t))})),r};x.forEach((t=>{v.length||(v=t.spatialReferences||e(t))}))}const N=ne(i,"GetFeatureInfo");let I;if(N){const e=se(i,"GetFeatureInfo");e.indexOf("text/html")>-1?I="text/html":e.indexOf("text/plain")>-1&&(I="text/plain")}if(!I){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(g)}const O=z(x),R=g.minScale||0,U=g.maxScale||0,F=g.dimensions,L=O.reduce(((e,t)=>e.concat(t.dimensions)),[]),A=F.concat(L).filter(oe);let P=null;if(A.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;A.forEach((r=>{const{extent:n}=r;!function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(n)?n.forEach((r=>{e=Math.min(e,r.min.getTime()),t=Math.max(t,r.max.getTime())})):n.forEach((r=>{e=Math.min(e,r.getTime()),t=Math.max(t,r.getTime())}))})),P={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:p,description:c,dimensions:F,extent:w,fullExtents:S,featureInfoFormat:I,featureInfoUrl:N,mapUrl:f,maxWidth:m,maxHeight:y,maxScale:U,minScale:R,layers:O,spatialReferences:v,supportedImageFormatTypes:h,timeInfo:P,title:u,version:o}}function Q(e){return X.some((([t,r])=>e>=t&&e<=r))}function z(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(z(e.sublayers)),delete e.sublayers)})),t}function K(e,t,r){var n;return null!=(n=t.getAttribute(e))?n:r}function Z(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(le(n)&&n.nodeName===e)return n}return null}function ee(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];le(s)&&s.nodeName===e&&r.push(s)}return r}function te(e,t,r){const n=Z(e,t);return n?n.textContent:r}function re(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),i=parseFloat(e.getAttribute("maxx")),a=parseFloat(e.getAttribute("maxy"));let o,u,p,d;r?(o=isNaN(s)?-Number.MAX_VALUE:s,u=isNaN(n)?-Number.MAX_VALUE:n,p=isNaN(a)?Number.MAX_VALUE:a,d=isNaN(i)?Number.MAX_VALUE:i):(o=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(s)?-Number.MAX_VALUE:s,p=isNaN(i)?Number.MAX_VALUE:i,d=isNaN(a)?Number.MAX_VALUE:a);const m=new c({wkid:t});return new l({xmin:o,ymin:u,xmax:p,ymax:d,spatialReference:m})}function ne(e,t){const r=Z(t,e);if(r){const e=Z("DCPType",r);if(e){const t=Z("HTTP",e);if(t){const e=Z("Get",t);if(e){let t=function(e,t,r,n){const s=Z(e,r);return s?K(t,s,n):n}("OnlineResource","xlink:href",e,null);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],n=m(e);for(const e in n.query)n.query.hasOwnProperty(e)&&-1===t.indexOf(e.toLowerCase())&&r.push(e+"="+n.query[e]);return n.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function se(e,t){const r=ee("Operation",e);if(0===r.length)return ee("Format",Z(t,e)).map((e=>e.textContent));const n=[];return r.forEach((e=>{e.getAttribute("name")===t&&ee("Format",e).forEach((e=>{n.push(e.textContent)}))})),n}function ie(e,t,r){const n=Z(t,e);if(!n)return r;const{textContent:s}=n;if(null==s||""===s)return r;const i=Number(s);return isNaN(i)?r:i}function ae(e,t,r){var n;if(!e)return null;const s={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},i=Z("LatLonBoundingBox",e),a=Z("EX_GeographicBoundingBox",e);let o=null;i&&(o=re(i,4326)),a&&(o=new l(0,0,0,0,new c({wkid:4326})),o.xmin=parseFloat(te("westBoundLongitude",a,"0")),o.ymin=parseFloat(te("southBoundLatitude",a,"0")),o.xmax=parseFloat(te("eastBoundLongitude",a,"0")),o.ymax=parseFloat(te("northBoundLatitude",a,"0"))),i||a||(o=new l(-180,-90,180,90,new c({wkid:4326}))),s.minScale=ie(e,"MaxScaleDenominator",0),s.maxScale=ie(e,"MinScaleDenominator",0);const u=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)s.name=e.textContent||"";else if("Title"===e.nodeName)s.title=e.textContent||"";else if("Abstract"===e.nodeName)s.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(u);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.substring(5),10);0===n||isNaN(n)||o||(o="1.3.0"===t?re(e,n,Q(n)):re(e,n))}const n=r&&r.indexOf(":");if(n&&n>-1){let i=parseInt(r.substring(n+1,r.length),10);0===i||isNaN(i)||(i=J[i]?J[i]:i);const a="1.3.0"===t?re(e,i,Q(i)):re(e,i);s.fullExtents.push(a)}}else if(e.nodeName===u)e.textContent.split(" ").forEach((e=>{0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(J[e]&&(e=J[e]),-1===s.spatialReferences.indexOf(e)&&s.spatialReferences.push(e))}));else if("Style"!==e.nodeName||s.legendURL){if("Layer"===e.nodeName){const n=ae(e,t,r);n&&(n.parentLayerId=s.id,s.sublayers||(s.sublayers=[]),s.sublayers.push(n))}}else{const t=Z("LegendURL",e);if(t){const e=Z("OnlineResource",t);e&&(s.legendURL=e.getAttribute("xlink:href"))}}})),s.extent=null==(n=o)?void 0:n.toJSON(),s.dimensions=ee("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,s=e.getAttribute("unitSymbol"),i=e.getAttribute("default"),a="0"!==K("default",e,"0"),l="0"!==K("nearestValue",e,"0"),o="0"!==K("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(r)?{name:"time",units:"ISO8601",extent:de(n),default:de(i),multipleValues:a,nearestValue:l,current:o}:/^elevation$/i.test(t)?{name:"elevation",units:r,extent:ue(n),unitSymbol:s,default:ue(i),multipleValues:a,nearestValue:l}:{name:t,units:r,extent:pe(n),unitSymbol:s,default:pe(i),multipleValues:a,nearestValue:l}})),s}function le(e){return e.nodeType===Node.ELEMENT_NODE}function oe(e){return"time"===e.name}function ue(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):r.map((e=>parseFloat(e)))}function pe(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):r}function de(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?ce(t[2]):void 0}})).filter((e=>e)):r.map((e=>new Date(e)))}function ce(e){const t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:me(t[1]),months:me(t[2]),days:me(t[3]),hours:me(t[4]),minutes:me(t[5]),seconds:me(t[6])}:null}function me(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function ye(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const he=new Set([102100,3857,102113,900913]),fe=new Set([3395,54004]);function ge(e,t){let r=e.wkid;return p(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),he.has(r)?t.find((e=>he.has(e)))||t.find((e=>fe.has(e)))||102100:r)}const be=new y({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let xe=class extends(h(f(g(b(x(w(v(E(S))))))))){constructor(...e){super(...e),this.allSublayers=new N({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.watch("sublayers",((e,t)=>{if(t){for(const e of t)e.layer=null;this.handles.remove("wms-sublayer")}if(e){for(const t of e)t.parent=this,t.layer=this;this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"wms-sublayer")}}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=I(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(O).then((()=>this._fetchService(t)))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new l({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new c(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return we(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return we(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,i=e.flatten((({sublayers:e})=>e&&e.toArray())).toArray();i.forEach((e=>{"number"==typeof e.parent.id&&(s.has(e.parent.id)?s.get(e.parent.id).push(e.id):s.set(e.parent.id,[e.id]))})),i.forEach((e=>{const r={sublayer:e,...n},i=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(s.has(e.id)&&(i.sublayerIds=s.get(e.id)),!e.sublayers&&e.name){const n=e.write({},r);delete n.id,t.layers.push(n)}})),t.visibleLayers=i.filter((e=>e.visible&&!e.sublayers)).map((e=>e.name))}createExportImageParameters(e,t,r,n){const s=n&&n.pixelRatio||1,i=B({extent:e,width:t})*s,a=new D({layer:this,scale:i}),{xmin:l,ymin:o,xmax:u,ymax:p,spatialReference:d}=e,c=ge(d,this.spatialReferences),m="1.3.0"===this.version&&Q(c)?`${o},${l},${p},${u}`:`${l},${o},${u},${p}`,y=a.toJSON();return{bbox:m,["1.3.0"===this.version?"crs":"srs"]:isNaN(c)?void 0:"EPSG:"+c,...y}}async fetchImage(e,t,r,n){var s,i;const a=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const o=null==n||null==(s=n.timeExtent)?void 0:s.start,u=null==n||null==(i=n.timeExtent)?void 0:i.end,p=I(o)&&I(u)?o.getTime()===u.getTime()?ye(o):`${ye(o)}/${ye(u)}`:void 0,d={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:p}),signal:null==n?void 0:n.signal};return null!=n&&n.timestamp&&(d.query={_ts:n.timestamp,...d.query}),R(a,d).then((e=>e.data))}fetchFeatureInfo(e,t,r,n,s){const i=B({extent:e,width:t}),a=function(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}(new D({layer:this,scale:i}).visibleSublayers);if(!this.featureInfoUrl||!a)return null;const l="1.3.0"===this.version?{I:n,J:s}:{x:n,y:s},o={query_layers:a,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...l},u={...this.createExportImageParameters(e,t,r),...o},p=this._mixCustomParameters(u),d=U(this.featureInfoUrl,p),c=document.createElement("iframe");c.src=d,c.frameBorder="0",c.marginHeight="0",c.marginWidth="0",c.style.width="100%",c.setAttribute("sandbox","");const m=new F({title:this.title,content:c});return new L({sourceLayer:this,popupTemplate:m})}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}supportsSpatialReference(e){return A(this.url)||this.spatialReferences.some((t=>{const r=900913===t?c.WebMercator:new c({wkid:t});return P(r,e)}))}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await R(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=Y(t.data)}if(this.parsedUrl){const e=new _(this.parsedUrl.path);"https"!==e.scheme||e.port&&"443"!==e.port||-1!==M.request.httpsDomains.indexOf(e.host)||M.request.httpsDomains.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function we(e,t,r){const n=new Map;e.every((e=>null==e.id))&&(e=q(e)).forEach(((e,t)=>e.id=t));for(const s of e){const e=new G;e.read(s,t),-1===(null==r?void 0:r.indexOf(e.name))&&(e.visible=!1),n.set(e.id,e)}const s=[];for(const t of e){const e=n.get(t.id);if(null!=t.parentLayerId&&t.parentLayerId>=0){const r=n.get(t.parentLayerId);r.sublayers||(r.sublayers=new u),r.sublayers.unshift(e)}else s.unshift(e)}return s}e([t({readOnly:!0})],xe.prototype,"allSublayers",void 0),e([t({json:{type:Object,write:!0}})],xe.prototype,"customParameters",void 0),e([t({json:{type:Object,write:!0}})],xe.prototype,"customLayerParameters",void 0),e([t({type:String,json:{write:!0}})],xe.prototype,"copyright",void 0),e([t()],xe.prototype,"description",void 0),e([t({readOnly:!0})],xe.prototype,"dimensions",void 0),e([t({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],xe.prototype,"fullExtent",void 0),e([r(["web-document","portal-item"],"fullExtent",["extent"])],xe.prototype,"readFullExtentFromItemOrMap",null),e([j(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],xe.prototype,"writeFullExtent",null),e([t()],xe.prototype,"fullExtents",void 0),e([t({type:String,json:{write:{ignoreOrigin:!0}}})],xe.prototype,"featureInfoFormat",void 0),e([t({type:String,json:{write:{ignoreOrigin:!0}}})],xe.prototype,"featureInfoUrl",void 0),e([t({type:String,json:{origins:{"web-document":{default:"image/png",type:be.jsonValues,read:{reader:be.read,source:"format"},write:{writer:be.write,target:"format"}}}}})],xe.prototype,"imageFormat",void 0),e([r("imageFormat",["supportedImageFormatTypes"])],xe.prototype,"readImageFormat",null),e([t({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],xe.prototype,"imageMaxHeight",void 0),e([t({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],xe.prototype,"imageMaxWidth",void 0),e([t()],xe.prototype,"imageTransparency",void 0),e([t(T)],xe.prototype,"legendEnabled",void 0),e([t({type:["show","hide","hide-children"]})],xe.prototype,"listMode",void 0),e([t({type:String,json:{write:{ignoreOrigin:!0}}})],xe.prototype,"mapUrl",void 0),e([t({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],xe.prototype,"isReference",void 0),e([t({type:["WMS"]})],xe.prototype,"operationalLayerType",void 0),e([t({type:c,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],xe.prototype,"spatialReference",void 0),e([r(["web-document","portal-item"],"spatialReference",["spatialReferences"])],xe.prototype,"readSpatialReferenceFromItemOrDocument",null),e([t({type:[C],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],xe.prototype,"spatialReferences",void 0),e([j(["web-document","portal-item"],"spatialReferences")],xe.prototype,"writeSpatialReferences",null),e([t({type:u.ofType(G),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if(V(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],xe.prototype,"sublayers",void 0),e([r(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],xe.prototype,"readSublayersFromItemOrMap",null),e([r("service","sublayers",["layers"])],xe.prototype,"readSublayers",null),e([j("sublayers",{layers:{type:[G]},visibleLayers:{type:[String]}})],xe.prototype,"writeSublayers",null),e([t({json:{read:!1},readOnly:!0,value:"wms"})],xe.prototype,"type",void 0),e([t(W)],xe.prototype,"url",void 0),e([t({type:String,json:{write:{ignoreOrigin:!0}}})],xe.prototype,"version",void 0),xe=e([s("esri.layers.WMSLayer")],xe);var ve=xe;export{ve as default};
