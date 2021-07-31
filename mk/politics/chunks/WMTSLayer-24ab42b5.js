import{V as e,W as t,bO as r,de as i,X as s,cI as a,cY as l,c7 as o,ir as n,is as u,a as c,a4 as d,r as p,aS as m,gE as h,gG as y,gF as f,d7 as g,d8 as v,d9 as w,dd as x,ag as S,cv as I,cQ as M,L,b3 as T,co as P,bx as E}from"../main.js";import{a as b,x as O}from"./WebTileLayer-723daa5d.js";var F;let C=F=class extends a{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new F;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};e([t({type:r,json:{read:{source:"fullExtent"}}})],C.prototype,"fullExtent",void 0),e([t({type:String,json:{read:{source:"id"}}})],C.prototype,"id",void 0),e([t({type:i,json:{read:{source:"tileInfo"}}})],C.prototype,"tileInfo",void 0),C=F=e([s("esri.layer.support.TileMatrixSet")],C);var _,R=C;let V=_=class extends a{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new _;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};e([t({json:{read:{source:"id"}}})],V.prototype,"id",void 0),e([t({json:{read:{source:"title"}}})],V.prototype,"title",void 0),e([t({json:{read:{source:"abstract"}}})],V.prototype,"description",void 0),e([t({json:{read:{source:"legendUrl"}}})],V.prototype,"legendUrl",void 0),e([t({json:{read:{source:"isDefault"}}})],V.prototype,"isDefault",void 0),e([t({json:{read:{source:"keywords"}}})],V.prototype,"keywords",void 0),V=_=e([s("esri.layer.support.WMTSStyle")],V);var U,j=V;let A=U=class extends a{constructor(e){super(e),this.fullExtent=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?r.fromJSON(e):null}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){const e=new U;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};e([t()],A.prototype,"description",null),e([t()],A.prototype,"fullExtent",void 0),e([l("fullExtent",["fullExtent"])],A.prototype,"readFullExtent",null),e([t()],A.prototype,"imageFormat",null),e([t({json:{read:{source:"formats"}}})],A.prototype,"imageFormats",void 0),e([t()],A.prototype,"id",void 0),e([t()],A.prototype,"layer",void 0),e([t()],A.prototype,"styleId",null),e([t({type:o.ofType(j),json:{read:{source:"styles"}}})],A.prototype,"styles",void 0),e([t({value:null,json:{write:{ignoreOrigin:!0}}})],A.prototype,"title",null),e([t()],A.prototype,"tileMatrixSetId",void 0),e([t({readOnly:!0})],A.prototype,"tileMatrixSet",null),e([t({type:o.ofType(R),json:{read:{source:"tileMatrixSets"}}})],A.prototype,"tileMatrixSets",void 0),A=U=e([s("esri.layers.support.WMTSSublayer")],A);var N=A;const W=90.71428571428571,k=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function D(e){return e.nodeType===Node.ELEMENT_NODE}function K(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(D(i)&&i.nodeName===e)return i}return null}function B(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];D(s)&&s.nodeName===e&&r.push(s)}return r}function H(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];D(s)&&s.nodeName===e&&r.push(s)}return r.map((e=>e.textContent))}function G(e,t){return e.split(">").forEach((e=>{t&&(t=K(e,t))})),t&&t.textContent}function q(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.indexOf(e)>-1){const e=K(t,i),a=e&&e.textContent;if(a===r||r.split(":")&&r.split(":")[1]===a)return s=i,!0}return!1})),s}function J(e,t,r,i,s){const a=G("Abstract",t),l=H("Format",t);return{id:e,fullExtent:X(t),description:a,formats:l,styles:Y(t,i),title:G("Title",t),tileMatrixSets:z(s,t,r)}}function $(e,t){var r;const i=[],s=null==(r=e.layerMap)?void 0:r.get(t);if(!s)return;const a=B("ResourceURL",s),l=B("Dimension",s);let o,n,u,c;return l.length&&(o=G("Identifier",l[0]),n=H("Default",l[0])||H("Value",l[0])),l.length>1&&(u=G("Identifier",l[1]),c=H("Default",l[1])||H("Value",l[1])),e.dimensionMap.set(t,{dimensions:n,dimensions2:c}),a.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(o&&n.length)if(t.indexOf("{"+o+"}")>-1)t=t.replace("{"+o+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+o.length+2))}if(u&&c.length)if(t.indexOf("{"+u+"}")>-1)t=t.replace("{"+u+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+u.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+u.length+2))}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),i}function X(e){const t=K("WGS84BoundingBox",e),r=t?G("LowerCorner",t).split(" "):["-180","-90"],i=t?G("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function Y(e,t){return B("Style",e).map((e=>{const r=K("LegendURL",e),i=K("Keywords",e),s=i&&H("Keyword",i);let a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:G("Abstract",e),id:G("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:s,legendUrl:a,title:G("Title",e)}}))}function z(e,t,s){return B("TileMatrixSetLink",t).map((e=>K("TileMatrixSet",e).textContent)).map((a=>function(e,t,s,a){const l=H("TileMatrix",q("TileMatrixSetLink","TileMatrixSet",t,s)),o=a.find((e=>{const r=K("Identifier",e),i=r&&r.textContent;return!!(i===t||t.split(":")&&t.split(":")[1]===i)})),n=function(e){let t=G("SupportedCRS",e);t&&(t=t.toLowerCase());let r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);const i=function(e){return e.includes("crs84")||e.includes("crs:84")?4326:e.includes("crs83")||e.includes("crs:83")?4269:e.includes("crs27")||e.includes("crs:27")?4267:null}(t);p(i)&&(r=i);const s=new m({wkid:r}),a=G("TopLeftCorner",K("TileMatrix",e)).split(" "),l=a[0].split("E").map((e=>Number(e))),o=a[1].split("E").map((e=>Number(e))),n=l.length>1?l[0]*10**l[1]:l[0],u=o.length>1?o[0]*10**o[1]:o[0];return t.includes("epsg")&&Q(r)?new d(u,n,s):new d(n,u,s)}(o),u=n.spatialReference,c=u.wkid,h=K("TileMatrix",o),y=[parseInt(G("TileWidth",h),10),parseInt(G("TileHeight",h),10)],f=[];l.length?l.forEach(((e,r)=>{const i=q("TileMatrix","Identifier",e,o);f.push(Z(i,c,r,t))})):B("TileMatrix",o).forEach(((e,r)=>{f.push(Z(e,c,r,t))}));const g=function(e,t,i,s,a){const l=K("BoundingBox",t);let o,n,u,c,d,p;if(l&&(o=G("LowerCorner",l).split(" "),n=G("UpperCorner",l).split(" ")),o&&o.length>1&&n&&n.length>1)u=parseFloat(o[0]),d=parseFloat(o[1]),c=parseFloat(n[0]),p=parseFloat(n[1]);else{const e=K("TileMatrix",t),r=parseFloat(G("MatrixWidth",e)),l=parseFloat(G("MatrixHeight",e));u=i.x,p=i.y,c=u+r*s[0]*a.resolution,d=p-l*s[1]*a.resolution}return function(e,t){return"1.0.0"===e&&Q(t.wkid)}(e,i.spatialReference)?new r(d,u,p,c,i.spatialReference):new r(u,d,c,p,i.spatialReference)}(e,o,n,y,f[0]);return{id:t,fullExtent:g.toJSON(),tileInfo:new i({dpi:96,spatialReference:u,size:y,origin:n,lods:f}).toJSON()}}(e,a,t,s)))}function Q(e){return k.some((([t,r])=>e>=t&&e<=r))}function Z(e,t,r,i){const s=G("Identifier",e),a=G("ScaleDenominator",e).split("E").map((e=>Number(e)));let l;l=a.length>1?a[0]*10**a[1]:a[0];const o=ee(t,l,i);return l*=96/W,{level:r,levelValue:s,scale:l,resolution:o}}function ee(e,t,r){let i;return i=n.hasOwnProperty(String(e))?n.values[n[e]]:"default028mm"===r?6370997*Math.PI/180:u(e).metersPerDegree,7*t/25e3/i}const te={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},re=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let ie=class extends(h(y(f(g(v(w(x))))))){constructor(...e){super(...e),this._sublayersHandles=new S,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",((e,t)=>{t&&(t.layer=null),e&&(e.layer=this)}),!0),this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this})),this._sublayersHandles||(this._sublayersHandles=new S),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.layer=this})),e.on("after-remove",(({item:e})=>{e.layer=null}))]))}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(I).then((()=>this._fetchService(e))).catch((e=>{throw I(e),new c("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){let i;return this.activeLayer?t.layers.some((e=>e.id===this.activeLayer.id&&(i=e,!0))):(this.activeLayer=new N,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=i&&i.layerIdentifier;let l=null;const o=i&&i.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(l=o[0]):l=o);const n=s&&s.format,u=s&&s.style;return new N({id:a,imageFormat:n,styleId:u,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=M("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){const e=[];return this.activeLayer.tileMatrixSets.forEach((t=>{t.fullExtent&&e.push(t.fullExtent)})),e}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new N;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new b({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new O({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return L(i,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let a=this.resourceInfo?"":function(e,t,r,i,s,a,l,o){const{dimensionMap:n}=e,u=$(e,t),c=n.get(t).dimensions&&n.get(t).dimensions[0],d=n.get(t).dimensions2&&n.get(t).dimensions2[0];let p="";if(u&&u.length>0){let e=null;u.some((t=>t.format===i&&(e=t,!0))),e||(e=u[l%u.length]),p=e.template.replace(/\{Style\}/gi,s).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,c).replace(/\{dimensionValue2\}/gi,d)}return p}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:s}=e,a=$(e,t);let l="";if(a&&a.length>0){const e=s.get(t).dimensions&&s.get(t).dimensions[0],o=s.get(t).dimensions2&&s.get(t).dimensions2[0];l=a[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,r),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,e),l=l.replace(/\{dimensionValue2\}/gi,o)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return te[r.toLowerCase()]&&(s=te[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),this.serviceMode=r}catch(e){throw new c("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=ee(t.spatialReference.wkid,r.scale*W/96,e.id)})),t.dpi=96)}))})),e}(t.data):t.data=function(e,t){var r,i;e=e.replace(/ows:/gi,"");const s=(new DOMParser).parseFromString(e,"text/xml").documentElement,a=new Map,l=new Map,o=K("Contents",s);if(!o)throw new c("wmtslayer:wmts-capabilities-xml-is-not-valid");const n=K("OperationsMetadata",s),u=null==n?void 0:n.querySelector("[name='GetTile']"),d=null==u?void 0:u.getElementsByTagName("Get"),p=d&&Array.prototype.slice.call(d),m=null!=(r=(null==t||null==(i=t.url)?void 0:i.indexOf("https"))>-1)&&r;let h,y,f=t.serviceMode,g=t&&t.url;if(p&&p.length&&p.some((e=>{const t=K("Constraint",e);return!t||q("AllowedValues","Value",f,t)?(g=e.attributes[0].nodeValue,!0):(!t||q("AllowedValues","Value","RESTful",t)||q("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!q("AllowedValues","Value","KVP",t)||(h=e.attributes[0].nodeValue),!1)})),!g)if(y)g=y,f="RESTful";else if(h)g=h,f="KVP";else{const e=K("ServiceMetadataURL",s);g=e&&e.getAttribute("xlink:href")}const v=g.indexOf("1.0.0/");-1===v&&"RESTful"===f?g+="/":v>-1&&(g=g.substring(0,v)),"KVP"===f&&(g+=v>-1?"":"?"),m&&(g=g.replace(/^http:/i,"https:"));const w=G("ServiceIdentification>ServiceTypeVersion",s),x=G("ServiceIdentification>AccessConstraints",s),S=B("Layer",o),I=B("TileMatrixSet",o);return{copyright:x,layers:S.map((e=>{const t=G("Identifier",e);return a.set(t,e),J(t,e,I,m,w)})),tileUrl:g,serviceMode:f,layerMap:a,dimensionMap:l}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await L(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}_appendCustomLayerParameters(e){if(this.customLayerParameters||this.customParameters){const t={...T(this.customParameters),...this.customLayerParameters};for(const r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=P(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?T(e):{},t.forEach((t=>{e.hasOwnProperty(t)||re.has(t)||(e[t]=r[t])})))}return e}};e([t()],ie.prototype,"dimensionMap",void 0),e([t()],ie.prototype,"layerMap",void 0),e([t({type:N,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],ie.prototype,"activeLayer",null),e([l("service","activeLayer",["layers"])],ie.prototype,"readActiveLayerFromService",null),e([l(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],ie.prototype,"readActiveLayerFromItemOrWebDoc",null),e([E(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:i},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],ie.prototype,"writeActiveLayer",null),e([t({type:String,value:"",json:{write:!0}})],ie.prototype,"copyright",void 0),e([t({type:["show","hide"]})],ie.prototype,"listMode",void 0),e([t({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],ie.prototype,"customParameters",void 0),e([l("web-document","customParameters"),l("portal-item","customParameters")],ie.prototype,"readCustomParameters",null),e([t({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],ie.prototype,"customLayerParameters",void 0),e([t({type:r,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],ie.prototype,"fullExtent",void 0),e([t({readOnly:!0})],ie.prototype,"fullExtents",null),e([t({type:["WebTiledLayer"]})],ie.prototype,"operationalLayerType",void 0),e([t()],ie.prototype,"resourceInfo",void 0),e([t()],ie.prototype,"serviceMode",void 0),e([l(["portal-item","web-document"],"serviceMode",["templateUrl"])],ie.prototype,"readServiceMode",null),e([t({type:o.ofType(N)})],ie.prototype,"sublayers",void 0),e([l("service","sublayers",["layers"])],ie.prototype,"readSublayersFromService",null),e([t({readOnly:!0})],ie.prototype,"supportedSpatialReferences",null),e([t({json:{read:{source:"title"}}})],ie.prototype,"title",null),e([t({json:{read:!1},readOnly:!0,value:"wmts"})],ie.prototype,"type",void 0),e([t({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],ie.prototype,"url",null),e([t()],ie.prototype,"version",void 0),ie=e([s("esri.layers.WMTSLayer")],ie);var se=ie;export{se as default};
