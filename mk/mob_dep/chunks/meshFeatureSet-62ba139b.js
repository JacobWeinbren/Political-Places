import{Z as t,_ as e,ic as n,bJ as r,e6 as o,a0 as s,ce as i,id as a,ie as l,ig as c,bg as u,r as p,s as h,cd as f,b5 as g,hx as d,ih as m,a3 as y,cC as x,a8 as w,ii as v,i1 as b,gF as A,p as M,k as F,t as T,e as R,fk as C,fE as D,fD as L,fO as E,fQ as O,fl as I,a4 as j,ft as P,ij as S,ik as N,fC as _,a6 as z,W as U,cj as W,cP as $,cL as k,cK as H,cn as B,aB as G,A as Z,d9 as V,ci as J}from"../main.js";import{r as Y,M as q,x as X,a as K,j as Q,k as tt,O as et,h as nt,L as rt,b as ot,c as st,q as it,l as at,d as lt,e as ct,f as ut}from"./georeference-e9e3d98e.js";import{x as pt}from"./earcut-a218cde0.js";import{n as ht}from"./deduplicate-a5bbf86c.js";import{a as ft}from"./quat-517f017c.js";import{e as gt}from"./vec33-e26dd06d.js";var dt;const mt=new WeakMap;let yt=0,xt=dt=class extends i{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,n,r){if(t instanceof HTMLImageElement){const o={type:"image-element",src:a(t.src,r),crossOrigin:t.crossOrigin};e[n]=o}else if(t instanceof HTMLCanvasElement){const r=t.getContext("2d").getImageData(0,0,t.width,t.height),o={type:"canvas-element",imageData:this._encodeImageData(r)};e[n]=o}else if(t instanceof HTMLVideoElement){const o={type:"video-element",src:a(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[n]=o}else{const r={type:"image-data",imageData:this._encodeImageData(t)};e[n]=r}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this._decodeImageData(t.imageData),n=document.createElement("canvas");return n.width=e.width,n.height=e.height,n.getContext("2d").putImageData(e,0,0),n}case"image-data":return this._decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this._imageDataContainsTransparent(t);if(e){const t=e.substr(e.length-4,4).toLowerCase(),n=e.substr(0,15).toLocaleLowerCase();if(".png"===t||"data:image/png;"===n)return!0}return!1}set transparent(t){null!=t?this._override("transparent",t):this._clearOverride("transparent")}get contentHash(){const t="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(e="")=>`d:${e},t:${this.transparent},w:${t}`;return null!=this.url?e(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(mt.has(this.data)||mt.set(this.data,++yt),e(mt.get(this.data))):e()}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new dt(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const n=this.clone();return t.set(this,n),n}_cloneWrap(){return"string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(t){let e="";for(let n=0;n<t.data.length;n++)e+=String.fromCharCode(t.data[n]);return{data:btoa(e),width:t.width,height:t.height}}_decodeImageData(t){const e=atob(t.data),n=new Uint8ClampedArray(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return l(n,t.width,t.height)}_imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(255!==t.data[e])return!0;return!1}static from(t){return"string"==typeof t?new dt({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new dt({data:t}):c(dt,t)}};t([e({type:String,json:{write:n}})],xt.prototype,"url",null),t([e({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),e()],xt.prototype,"data",null),t([r("data")],xt.prototype,"writeData",null),t([o("data")],xt.prototype,"readData",null),t([e({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],xt.prototype,"transparent",null),t([e({json:{write:!0}})],xt.prototype,"wrap",void 0),t([e({readOnly:!0})],xt.prototype,"contentHash",null),xt=dt=t([s("esri.geometry.support.MeshTexture")],xt);const wt=xt;var vt;let bt=vt=class extends i{constructor(t){super(t),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=p(t)?t.get(this):null;if(n)return n;const r=new vt(this.clonePropertiesWithDeduplication(e));return p(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{color:p(this.color)?this.color.clone():null,colorTexture:p(this.colorTexture)?this.colorTexture.cloneWithDeduplication(t):null,normalTexture:p(this.normalTexture)?this.normalTexture.cloneWithDeduplication(t):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}}};t([e({type:u,json:{write:!0}})],bt.prototype,"color",void 0),t([e({type:wt,json:{write:!0}})],bt.prototype,"colorTexture",void 0),t([e({type:wt,json:{write:!0}})],bt.prototype,"normalTexture",void 0),t([e({nonNullable:!0,json:{write:!0}})],bt.prototype,"alphaMode",void 0),t([e({nonNullable:!0,json:{write:!0}})],bt.prototype,"alphaCutoff",void 0),t([e({nonNullable:!0,json:{write:!0}})],bt.prototype,"doubleSided",void 0),bt=vt=t([s("esri.geometry.support.MeshMaterial")],bt);const At=bt;var Mt;let Ft=Mt=class extends At{constructor(t){super(t),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=p(t)?t.get(this):null;if(n)return n;const r=new Mt(this.clonePropertiesWithDeduplication(e));return p(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{...super.clonePropertiesWithDeduplication(t),emissiveColor:p(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:p(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(t):null,occlusionTexture:p(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(t):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:p(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(t):null}}};t([e({type:u,json:{write:!0}})],Ft.prototype,"emissiveColor",void 0),t([e({type:wt,json:{write:!0}})],Ft.prototype,"emissiveTexture",void 0),t([e({type:wt,json:{write:!0}})],Ft.prototype,"occlusionTexture",void 0),t([e({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],Ft.prototype,"metallic",void 0),t([e({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],Ft.prototype,"roughness",void 0),t([e({type:wt,json:{write:!0}})],Ft.prototype,"metallicRoughnessTexture",void 0),Ft=Mt=t([s("esri.geometry.support.MeshMaterialMetallicRoughness")],Ft);const Tt=Ft;var Rt;const Ct=h.getLogger("esri.geometry.support.MeshVertexAttributes");let Dt=Rt=class extends i{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return Et(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},Ct)}castPosition(t){return t&&t instanceof Float32Array&&Ct.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),Et(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},Ct)}castUv(t){return Et(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},Ct)}castNormal(t){return Et(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},Ct)}castTangent(t){return Et(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},Ct)}clone(){const t={position:g(this.position),uv:g(this.uv),normal:g(this.normal),tangent:g(this.tangent),color:g(this.color)};return new Rt(t)}clonePositional(){const t={position:g(this.position),normal:g(this.normal),tangent:g(this.tangent),uv:this.uv,color:this.color};return new Rt(t)}};function Lt(t,e,n,r){const{loggerTag:o,stride:s}=e;return t.length%s!=0?(r.error(o,`Invalid array length, expected a multiple of ${s}`),new n([])):t}function Et(t,e,n,r,o){if(!t)return t;if(t instanceof e)return Lt(t,r,e,o);for(const s of n)if(t instanceof s)return Lt(new e(t),r,e,o);if(Array.isArray(t))return Lt(new e(t),r,e,o);{const r=n.map((t=>`'${t.name}'`));return o.error(`Failed to set property, expected one of ${r}, but got ${t.constructor.name}`),new e([])}}function Ot(t,e,n){e[n]=function(t){const e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=t[n];return e}(t)}var It;t([e({json:{write:Ot}})],Dt.prototype,"color",void 0),t([f("color")],Dt.prototype,"castColor",null),t([e({nonNullable:!0,json:{write:Ot}})],Dt.prototype,"position",void 0),t([f("position")],Dt.prototype,"castPosition",null),t([e({json:{write:Ot}})],Dt.prototype,"uv",void 0),t([f("uv")],Dt.prototype,"castUv",null),t([e({json:{write:Ot}})],Dt.prototype,"normal",void 0),t([f("normal")],Dt.prototype,"castNormal",null),t([e({json:{write:Ot}})],Dt.prototype,"tangent",void 0),t([f("tangent")],Dt.prototype,"castTangent",null),Dt=Rt=t([s("esri.geometry.support.MeshVertexAttributes")],Dt);const jt=h.getLogger("esri.geometry.support.MeshComponent");let Pt=It=class extends i{constructor(t){super(t),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}static from(t){return c(It,t)}castFaces(t){return Et(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},jt)}castMaterial(t){return c(t&&"object"==typeof t&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?Tt:At,t)}clone(){return new It({faces:g(this.faces),shading:this.shading,material:g(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(t,e){const n={faces:g(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,e):null,trustSourceNormals:this.trustSourceNormals};return new It(n)}};t([e({json:{write:!0}})],Pt.prototype,"faces",void 0),t([f("faces")],Pt.prototype,"castFaces",null),t([e({type:At,json:{write:!0}})],Pt.prototype,"material",void 0),t([f("material")],Pt.prototype,"castMaterial",null),t([e({type:String,json:{write:!0}})],Pt.prototype,"shading",void 0),t([e({type:Boolean})],Pt.prototype,"trustSourceNormals",void 0),Pt=It=t([s("esri.geometry.support.MeshComponent")],Pt);const St=Pt;function Nt(t){const e=_t(t.rings,t.hasZ,Wt.CCW_IS_HOLE),n=[];let r=0,o=0;for(const t of e.polygons){const s=t.count,i=t.index,a=new Float64Array(e.position.buffer,3*i*e.position.BYTES_PER_ELEMENT,3*s),l=t.holeIndices.map((t=>t-i)),c=new Uint32Array(pt(a,l,3));n.push({position:a,faces:c}),r+=a.length,o+=c.length}const s=function(t,e,n){if(1===t.length)return t[0];const r=new Float64Array(e),o=new Uint32Array(n);let s=0,i=0,a=0;for(const e of t){for(let t=0;t<e.position.length;t++)r[s++]=e.position[t];for(let t=0;t<e.faces.length;t++)o[i++]=e.faces[t]+a;a=s/3}return{position:r,faces:o}}(n,r,o),i=ht(s.position.buffer,6,{originalIndices:s.faces});return s.position=new Float64Array(i.buffer),s.faces=i.indices,s}function _t(t,e,n){const r=t.length,o=new Array(r),s=new Array(r),i=new Array(r);let a=0,l=0,c=0,u=0;for(let e=0;e<r;++e)u+=t[e].length;const p=new Float64Array(3*u);let h=0;for(let u=r-1;u>=0;u--){const f=t[u],g=n===Wt.CCW_IS_HOLE&&Ut(f);if(g&&1!==r)o[a++]=f;else{let t=f.length;for(let e=0;e<a;++e)t+=o[e].length;const n={index:h,pathLengths:new Array(a+1),count:t,holeIndices:new Array(a)};n.pathLengths[0]=f.length,f.length>0&&(i[c++]={index:h,count:f.length}),h=g?zt(f,f.length-1,-1,p,h,f.length,e):zt(f,0,1,p,h,f.length,e);for(let t=0;t<a;++t){const r=o[t];n.holeIndices[t]=h,n.pathLengths[t+1]=r.length,r.length>0&&(i[c++]={index:h,count:r.length}),h=zt(r,0,1,p,h,r.length,e)}a=0,n.count>0&&(s[l++]=n)}}for(let t=0;t<a;++t){const n=o[t];n.length>0&&(i[c++]={index:h,count:n.length}),h=zt(n,0,1,p,h,n.length,e)}return l<r&&(s.length=l),c<r&&(i.length=c),{position:p,polygons:s,outlines:i}}function zt(t,e,n,r,o,s,i){o*=3;for(let a=0;a<s;++a){const s=t[e];r[o++]=s[0],r[o++]=s[1],r[o++]=i?s[2]:0,e+=n}return o/3}function Ut(t){return!d(t,!1,!1)}var Wt;!function(t){t[t.NONE=0]="NONE",t[t.CCW_IS_HOLE=1]="CCW_IS_HOLE"}(Wt||(Wt={}));const $t=h.getLogger("esri.geometry.support.meshUtils.centerAt");function kt(t,e,n){var r;if(!t.vertexAttributes||!t.vertexAttributes.position)return;const o=null!=(r=null==n?void 0:n.origin)?r:t.origin;p(t.transform)?(null!=(null==n?void 0:n.geographic)&&n.geographic!==t.transform.geographic&&$t.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),function(t,e,n){const r=e.x-n.x,o=e.y-n.y,s=e.hasZ&&n.hasZ?e.z-n.z:0,i=t.origin;t.origin=[i[0]+r,i[1]+o,i[2]+s]}(t.transform,e,o)):Y(t.spatialReference,n)?function(t,e,n){const r=q(t.vertexAttributes,n,{geographic:!0}),{position:o,normal:s,tangent:i}=X(r,e,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=s,t.vertexAttributes.tangent=i,t.vertexAttributesChanged()}(t,e,o):function(t,e,n){const r=Bt,o=Ht;if(m(e,o,t.spatialReference)){if(!m(n,r,t.spatialReference)){const e=t.origin;r[0]=e.x,r[1]=e.y,r[2]=e.z,$t.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}(function(t,e,n){if(t)for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]+=e[o]-n[o]})(t.vertexAttributes.position,o,r),t.vertexAttributesChanged()}else $t.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`)}(t,e,o)}const Ht=y(),Bt=y();function Gt(t){const e=b(t.url);return n=>{var r;const o=v(n,e,e),s=o?o.replace(/^ *\.\//,""):null;return null!=(r=t.files.get(s))?r:n}}async function Zt(t,e){return t instanceof Blob?Jt.fromBlob(t):"string"==typeof t?new Jt(t):Array.isArray(t)?Vt(t,e):async function(t,e){const{default:n}=await x(import("../main.js").then((function(t){return t.lb})),e),r="string"==typeof t.multipart[0]?await Promise.all(t.multipart.map((async t=>(await n(t,{responseType:"array-buffer"})).data))):t.multipart;return Jt.fromBlob(new Blob(r))}(t,e)}async function Vt(t,e){const n=new Map;let r=null;const o=await A(t.map((async t=>({name:t.name,source:await Zt(t instanceof Blob?t:t.source,e)})))),s=[];for(const t of o)t&&(M(e)?t.source.dispose():s.push(t));F(e);for(const{name:t,source:e}of s)(T(r)||/\.(gltf|glb)/i.test(t))&&(r=e.url),n.set(t,e.url),e.files&&e.files.forEach(((t,e)=>n.set(e,t)));if(T(r))throw new R("mesh-load-external:missing-files","Missing files to load external mesh source");return new Jt(r,(()=>s.forEach((({source:t})=>t.dispose()))),n)}class Jt{constructor(t,e=(()=>{}),n=new Map){this.url=t,this.dispose=e,this.files=n}static fromBlob(t){const e=URL.createObjectURL(t);return new Jt(e,(()=>URL.revokeObjectURL(e)))}}const Yt=h.getLogger("esri.geometry.support.meshUtils.offset");function qt(t,e,n){t.vertexAttributes&&t.vertexAttributes.position&&(p(t.transform)?(null!=(null==n?void 0:n.geographic)&&n.geographic!==t.transform.geographic&&Yt.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),function(t,e){const n=t.origin;t.origin=C(y(),n,e)}(t.transform,e)):Y(t.spatialReference,n)?function(t,e){const n=t.spatialReference,r=t.vertexAttributes.position,o=t.vertexAttributes.normal,s=t.vertexAttributes.tangent,i=new Float64Array(r.length),a=p(o)?new Float32Array(o.length):null,l=p(s)?new Float32Array(s.length):null,c=t.extent.center,u=Kt;D(n,[c.x,c.y,c.z],Qt,L(n)),E(te,Qt),O(u,e,te),K(r,n,i),p(o)&&Q(o,r,i,n,a),p(s)&&tt(s,r,i,n,l),Xt(i,u),et(i,r,n),p(o)&&nt(a,r,i,n,o),p(s)&&rt(l,r,i,n,s),t.vertexAttributesChanged()}(t,e):function(t,e){Xt(t.vertexAttributes.position,e),t.vertexAttributesChanged()}(t,e))}function Xt(t,e){if(t)for(let n=0;n<t.length;n+=3)for(let r=0;r<3;r++)t[n+r]+=e[r]}const Kt=y(),Qt=gt(),te=ft();const ee={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function ne(t,e,n){(function(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5})(t),function(t,e){if(null==e)return;const n="number"==typeof e?[e,e,e]:[null!=e.width?e.width:1,null!=e.depth?e.depth:1,null!=e.height?e.height:1];ie[0]=n[0],ie[4]=n[1],ie[8]=n[2];for(let e=0;e<t.position.length;e+=3){for(let n=0;n<3;n++)se[n]=t.position[e+n];O(se,se,ie);for(let n=0;n<3;n++)t.position[e+n]=se[n]}if(n[0]!==n[1]||n[1]!==n[2]){ie[0]=1/n[0],ie[4]=1/n[1],ie[8]=1/n[2];for(let e=0;e<t.normal.length;e+=3){for(let n=0;n<3;n++)se[n]=t.normal[e+n];O(se,se,ie),I(se,se);for(let n=0;n<3;n++)t.normal[e+n]=se[n]}}}(t,n&&n.size);const{vertexAttributes:r,transform:o}=ot(t,e,n);return{vertexAttributes:new Dt({...r,uv:t.uv}),transform:o,components:[new St({faces:t.faces,material:n&&n.material||null})],spatialReference:e.spatialReference}}const re={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},oe={south:0,east:1,north:2,west:3,up:4,down:5},se=y(),ie=ft(),ae=h.getLogger("esri.geometry.support.meshUtils.rotate");function le(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position||0===e[3])return;const r=t.spatialReference;if(p(t.transform)){var o;null!=(null==n?void 0:n.geographic)&&n.geographic!==t.transform.geographic&&ae.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const s=null!=(o=null==n?void 0:n.origin)?o:t.transform.getOriginPoint(r);!function(t,e,n){const r=j(ue,n.x,n.y,n.z),o=P(ue,r,t.origin);t.applyLocalInverse(o,pe),t.rotation=it(t.rotation,e,st()),t.applyLocalInverse(o,o),P(o,o,pe),t.translation=C(y(),t.translation,o)}(t.transform,e,s)}else{var s;const r=null!=(s=null==n?void 0:n.origin)?s:t.origin;Y(t.spatialReference,n)?function(t,e,n){const r=t.spatialReference,o=L(r),s=de;m(n,s,o)||m(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,l=t.vertexAttributes.tangent,c=new Float64Array(i.length),u=p(a)?new Float32Array(a.length):null,h=p(l)?new Float32Array(l.length):null;D(o,s,fe,o),E(ge,fe);const f=he;O(at(he),at(e),ge),f[3]=e[3],K(i,r,c),p(a)&&Q(a,i,c,r,u),p(l)&&tt(l,i,c,r,h),ce(c,f,3,s),et(c,i,r),p(a)&&(ce(u,f,3),nt(u,i,c,r,a)),p(l)&&(ce(h,f,4),rt(h,i,c,r,l)),t.vertexAttributesChanged()}(t,e,r):function(t,e,n){const r=de;if(!m(n,r,t.spatialReference)){const e=t.origin;r[0]=e.x,r[1]=e.y,r[2]=e.z,ae.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}ce(t.vertexAttributes.position,e,3,r),ce(t.vertexAttributes.normal,e,3),ce(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}(t,e,r)}}function ce(t,e,n,r=S){if(!T(t)){N(fe,lt(e),at(e));for(let e=0;e<t.length;e+=n){for(let n=0;n<3;n++)ue[n]=t[e+n]-r[n];_(ue,ue,fe);for(let n=0;n<3;n++)t[e+n]=ue[n]+r[n]}}}const ue=y(),pe=y(),he=st(),fe=gt(),ge=ft(),de=y(),me=h.getLogger("esri.geometry.support.meshUtils.scale");function ye(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference;if(p(t.transform)){var o;null!=(null==n?void 0:n.geographic)&&n.geographic!==t.transform.geographic&&me.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const s=null!=(o=null==n?void 0:n.origin)?o:t.transform.getOriginPoint(r);!function(t,e,n){const r=j(we,n.x,n.y,n.z),o=P(we,r,t.origin);t.applyLocalInverse(o,ve);const s=z(y(),t.scale,e);t.scale=s,t.applyLocalInverse(o,o),P(o,o,ve),t.translation=C(y(),t.translation,o)}(t.transform,e,s)}else{const r=Y(t.spatialReference,n),o=n&&n.origin||t.origin;r?function(t,e,n){const r=t.spatialReference,o=L(r),s=be;m(n,s,o)||m(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,l=t.vertexAttributes.tangent,c=new Float64Array(i.length),u=p(a)?new Float32Array(a.length):null,h=p(l)?new Float32Array(l.length):null;K(i,r,c),p(a)&&Q(a,i,c,r,u),p(l)&&tt(l,i,c,r,h),xe(c,e,s),et(c,i,r),p(a)&&nt(u,i,c,r,a),p(l)&&rt(h,i,c,r,l),t.vertexAttributesChanged()}(t,e,o):function(t,e,n){const r=be;if(!m(n,r,t.spatialReference)){const e=t.origin;r[0]=e.x,r[1]=e.y,r[2]=e.z,me.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}xe(t.vertexAttributes.position,e,r),t.vertexAttributesChanged()}(t,e,o)}}function xe(t,e,n=S){if(t)for(let r=0;r<t.length;r+=3){for(let e=0;e<3;e++)we[e]=t[r+e]-n[e];z(we,we,e);for(let e=0;e<3;e++)t[r+e]=we[e]+n[e]}}const we=y(),ve=y(),be=y();var Ae;const Me=h.getLogger("esri.geometry.Mesh");let Fe=Ae=class extends(U(W.LoadableMixin($(k)))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new Dt,this.type="mesh"}initialize(){(T(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.handles.add(H((()=>{var t;return{vertexAttributes:this.vertexAttributes,components:null==(t=this.components)?void 0:t.map((t=>t.clone())),transform:p(this.transform)?this.transform.clone():null}}),(()=>this._set("external",null)),{once:!0,sync:!0}))}))}get hasExtent(){return!this.loaded&&p(this.external)&&p(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const t=this.vertexAttributes.position,e=this.spatialReference;if(0===t.length||this.components&&0===this.components.length)return{extent:new B({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e}),center:new w({x:0,y:0,z:0,spatialReference:e})};const n=p(this.transform)?this.transform.project(t,e):t;let r=1/0,o=1/0,s=1/0,i=-1/0,a=-1/0,l=-1/0,c=0,u=0,h=0;const f=n.length,g=1/(f/3);let d=0;for(;d<f;){const t=n[d++],e=n[d++],p=n[d++];r=Math.min(r,t),o=Math.min(o,e),s=Math.min(s,p),i=Math.max(i,t),a=Math.max(a,e),l=Math.max(l,p),c+=g*t,u+=g*e,h+=g*p}return{extent:new B({xmin:r,ymin:o,zmin:s,xmax:i,ymax:a,zmax:l,spatialReference:e}),center:new w({x:c,y:u,z:h,spatialReference:e})}}get anchor(){if(p(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this.boundingInfo;return new w({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return p(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return!this.loaded&&p(this.external)&&p(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(St.from(t)),this.notifyChange("components")):Me.error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const e=this.components.indexOf(t);if(-1!==e)return this.components.splice(e,1),void this.notifyChange("components")}Me.error("removeComponent()","Provided component is not part of the list of components")}else Me.error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,e,n,r){return ct(Te.x,t,Re),ct(Te.y,e,Ce),ct(Te.z,n,De),it(Re,Ce,Re),it(Re,De,Re),le(this,Re,r),this}offset(t,e,n,r){return this.loaded?(Le[0]=t,Le[1]=e,Le[2]=n,qt(this,Le,r),this):(Me.error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,e){return this.loaded?(ye(this,t,e),this):(Me.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,e){return this.loaded?(kt(this,t,e),this):(Me.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return p(this.external)&&this.addResolvingPromise(async function(t,e,n){const{loadGLTFMesh:r}=await x(import("./loadGLTFMesh-879c7b2f.js"),n),o=await Zt(e,n),s=r(new w({x:0,y:0,z:0,spatialReference:t.spatialReference}),o.url,{resolveFile:Gt(o),useTransform:!0,signal:p(n)?n.signal:null});s.then((()=>o.dispose()),(()=>o.dispose()));const{vertexAttributes:i,components:a}=await s;t.vertexAttributes=i,t.components=a}(this,this.external.source,t)),Promise.resolve(this)}clone(){const t=this.components?new Map:null,e=this.components?new Map:null,n={components:this.components?this.components.map((n=>n.cloneWithDeduplication(t,e))):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:p(this.transform)?this.transform.clone():null,external:p(this.external)?{source:this.external.source,extent:p(this.external.extent)?this.external.extent.clone():null}:null};return new Ae(n)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const{toBinaryGLTF:e}=await import("./gltfexport-8696fa32.js");return e(this,t)}static createBox(t,e){if(!(t instanceof w))return Me.error(".createBox()","expected location to be a Point instance"),null;const n=new Ae(ne(function(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=re,r=4*t.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*t.length*3);let l=0,c=0,u=0,p=0;for(let r=0;r<t.length;r++){const h=t[r],f=l/3;for(const t of e)a[p++]=f+t;const g=h.corners;for(let t=0;t<4;t++){const e=g[t];let r=0;i[u++]=.25*n[t][0]+h.uvOrigin[0],i[u++]=h.uvOrigin[1]-.25*n[t][1];for(let t=0;t<3;t++)0!==h.axis[t]?(o[l++]=.5*h.axis[t],s[c++]=h.axis[t]):(o[l++]=.5*e[r++],s[c++]=0)}}return{position:o,normal:s,uv:i,faces:a}}(),t,e));return e&&e.imageFace&&"all"!==e.imageFace?function(t,e){const n=t.components[0],r=n.faces,o=oe[e],s=6*o,i=new Uint32Array(6),a=new Uint32Array(r.length-6);let l=0,c=0;for(let t=0;t<r.length;t++)t>=s&&t<s+6?i[l++]=r[t]:a[c++]=r[t];if(p(t.vertexAttributes.uv)){const e=new Float32Array(t.vertexAttributes.uv),n=4*o*2,r=[0,1,1,1,1,0,0,0];for(let t=0;t<r.length;t++)e[n+t]=r[t];t.vertexAttributes.uv=e}return t.components=[new St({faces:i,material:n.material}),new St({faces:a})],t}(n,e.imageFace):n}static createSphere(t,e){return t instanceof w?new Ae(ne(function(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array((e-1)*n*2*3);let l=0,c=0,u=0,p=0;for(let t=0;t<=e;t++){const r=t/e*Math.PI+.5*Math.PI,h=Math.cos(r),f=Math.sin(r);se[2]=f;const g=0===t||t===e,d=g?n-1:n;for(let r=0;r<=d;r++){const f=r/d*2*Math.PI;se[0]=-Math.sin(f)*h,se[1]=Math.cos(f)*h;for(let t=0;t<3;t++)o[l]=.5*se[t],s[l]=se[t],++l;i[c++]=(r+(g?.5:0))/n,i[c++]=t/e,0!==t&&r!==n&&(t!==e&&(a[u++]=p,a[u++]=p+1,a[u++]=p-n),1!==t&&(a[u++]=p,a[u++]=p-n,a[u++]=p-n-1)),p++}}return{position:o,normal:s,uv:i,faces:a}}(e&&e.densificationFactor||0),t,e)):(Me.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof w?new Ae(ne(function(t=0){const e=Math.round(16*2**t),n=4*(e+1)+2*e,r=new Float64Array(3*n),o=new Float32Array(3*n),s=new Float32Array(2*n),i=new Uint32Array(4*e*3);let a=0,l=0,c=0,u=0,p=0;for(let t=0;t<=5;t++){const n=0===t||5===t,h=t<=1||t>=4,f=2===t||4===t,g=n?e-1:e;for(let d=0;d<=g;d++){const m=d/g*2*Math.PI,y=n?0:.5;se[0]=y*Math.sin(m),se[1]=y*-Math.cos(m),se[2]=t<=2?.5:-.5;for(let e=0;e<3;e++)r[a++]=se[e],o[l++]=h?2===e?t<=1?1:-1:0:2===e?0:se[e]/y;s[c++]=(d+(n?.5:0))/e,s[c++]=t<=1?1*t/3:t<=3?1*(t-2)/3+1/3:1*(t-4)/3+2/3,f||0===t||d===e||(5!==t&&(i[u++]=p,i[u++]=p+1,i[u++]=p-e),1!==t&&(i[u++]=p,i[u++]=p-e,i[u++]=p-e-1)),p++}}return{position:r,normal:o,uv:s,faces:i}}(e&&e.densificationFactor||0),t,e)):(Me.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){var n;if(!(t instanceof w))return Me.error(".createPlane()","expected location to be a Point instance"),null;const r=null!=(n=null==e?void 0:e.facing)?n:"up",o=function(t,e){const n="number"==typeof e?e:null!=e?e.width:1,r="number"==typeof e?e:null!=e?e.height:1;switch(t){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}(r,null==e?void 0:e.size);return new Ae(ne(function(t){const e=ee.facingAxisOrderSwap[t],n=ee.position,r=ee.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let t=0;t<4;t++){const t=i;for(let a=0;a<3;a++){const l=e[a],c=Math.abs(l)-1,u=l>=0?1:-1;o[i]=n[t+c]*u,s[i]=r[t+c]*u,i++}}return{position:o,normal:s,uv:new Float32Array(ee.uv),faces:new Uint32Array(ee.faces)}}(r),t,{...e,size:o}))}static createFromPolygon(t,e){if(!(t instanceof G))return Me.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=Nt(t);return new Ae({vertexAttributes:new Dt({position:n.position}),components:[new St({faces:n.faces,shading:"flat",material:e&&e.material||null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,e,n){if(!(t instanceof w))throw Me.error(".createfromGLTF()","expected location to be a Point instance"),new R("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await x(import("./loadGLTFMesh-879c7b2f.js"),n);return new Ae(await r(t,e,n))}static createWithExternalSource(t,e,n){var r,o,s;const i=null!=(r=null==n?void 0:n.extent)?r:null,a=null!=(o=null==n?void 0:n.transform.clone())?o:new ut;a.origin=[t.x,t.y,null!=(s=t.z)?s:0];const l=t.spatialReference;return new Ae({external:{source:e,extent:i},transform:a,spatialReference:l})}static createIncomplete(t,e){var n,r;const o=null!=(n=null==e?void 0:e.transform.clone())?n:new ut;o.origin=[t.x,t.y,null!=(r=t.z)?r:0];const s=t.spatialReference,i=new Ae({transform:o,spatialReference:s});return i.addResolvingPromise(Promise.reject(new R("mesh-incomplete","Mesh resources are not complete"))),i}};t([e({type:[St],json:{write:!0}})],Fe.prototype,"components",void 0),t([e({type:ut,json:{write:!0}})],Fe.prototype,"transform",void 0),t([e({constructOnly:!0})],Fe.prototype,"external",void 0),t([e({readOnly:!0})],Fe.prototype,"hasExtent",null),t([e({readOnly:!0})],Fe.prototype,"boundingInfo",null),t([e({readOnly:!0})],Fe.prototype,"anchor",null),t([e({readOnly:!0})],Fe.prototype,"origin",null),t([e({readOnly:!0,json:{read:!1}})],Fe.prototype,"extent",null),t([e({readOnly:!0,json:{read:!1,write:!0,default:!0}})],Fe.prototype,"hasZ",void 0),t([e({readOnly:!0,json:{read:!1,write:!0,default:!1}})],Fe.prototype,"hasM",void 0),t([e({type:Dt,nonNullable:!0,json:{write:!0}})],Fe.prototype,"vertexAttributes",void 0),Fe=Ae=t([s("esri.geometry.Mesh")],Fe);const Te={x:Z(1,0,0),y:Z(0,1,0),z:Z(0,0,1)},Re=st(),Ce=st(),De=st(),Le=y(),Ee=Fe;var Oe,Ie,je;function Pe(t,e,n){const{status:r,source:o}=Se(t);if(r===je.FAILED)return null;const s=function({attributes:t},e,{transformFieldRoles:n}){return new w({x:t[n.originX],y:t[n.originY],z:t[n.originZ],spatialReference:e})}(t,e,n),i=B.fromJSON(t.geometry);i.spatialReference=e;const a=function({attributes:t,assetMappings:e},{transformFieldRoles:n}){var r;return new ut({translation:[t[n.translationX],t[n.translationY],t[n.translationZ]],rotation:ct([t[n.rotationX],t[n.rotationY],t[n.rotationZ]],t[n.rotationDeg]),scale:[t[n.scaleX],t[n.scaleY],t[n.scaleZ]],geographic:!(null!=(r=e[Oe.flags])&&r.includes("PROJECT_VERTICES"))})}(t,n);return r===je.PENDING?Ee.createIncomplete(s,{extent:i,transform:a}):Ee.createWithExternalSource(s,o,{extent:i,transform:a})}function Se(t){if(!t.assetMappings)return{status:je.FAILED};const e=[],n=new Map;for(const r of t.assetMappings){const t=r[Oe.seqNo],o=r[Oe.assetName],s=r[Oe.assetURL],i=r[Oe.conversionStatus];if(i===Ie.FAILED)return{status:je.FAILED};if(i!==Ie.COMPLETED)return{status:je.PENDING};if(null==t)e.push({name:o,source:s});else{const r=n.get(o);let i;r?i=r.multipart:(i=[],e.push({name:o,source:{multipart:i}}),n.set(o,{multipart:i})),i[t]=s}}return{status:je.COMPLETED,source:e}}!function(t){t.featureGUID="featureGUID",t.assetName="assetName",t.hash="hash",t.type="type",t.conversionStatus="conversionStatus",t.flags="flags",t.complexity="complexity",t.size="size",t.seqNo="seqNo",t.sourceHash="sourceHash",t.assetURL="assetURL"}(Oe||(Oe={})),function(t){t.SUBMITTED="SUBMITTED",t.INPROGRESS="INPROGRESS",t.FAILED="FAILED",t.COMPLETED="COMPLETED"}(Ie||(Ie={})),function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"}(je||(je={}));var Ne=Object.freeze({__proto__:null,meshFeatureSetFromJSON:function(t,e,n){const r=n.features;n.features=[],delete n.geometryType;const o=V.fromJSON(n);o.geometryType="mesh";const s=o.spatialReference,i=T(t.outFields)||!t.outFields.length?()=>({}):function(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const n in e)t.has(n)||delete e[n];return e}}(t.outFields.includes("*")?null:new Set(t.outFields));for(const t of r){const n=Pe(t,s,e);p(n)&&o.features.push(new J({geometry:n,attributes:i(t)}))}return o}});export{Ne as a,Tt as c,St as f,wt as m,Dt as p};
