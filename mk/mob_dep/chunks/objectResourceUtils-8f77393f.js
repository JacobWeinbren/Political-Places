import{a as e}from"./devEnvironmentUtils-94bcfc53.js";import{eo as t,a3 as r,A as i,fK as o,kY as a,kZ as n,gx as s,t as l,c5 as c,s as d,f as u,z as m,jE as h,kO as p,gS as f,kX as v,r as g,k as x,k_ as b,v as _,m as T,fv as C,gw as S,e as A,f2 as y,eh as M,hm as w,k$ as O,dG as P,T as E,a4 as R,l0 as I,l1 as D,fq as N,fl as L,fk as F,a6 as z,fp as B,ft as G,fr as V,a5 as U,fZ as H,fo as k,ik as $,fC as W,fu as q,l2 as j,l3 as X,l4 as K,fA as Y,ij as Z,d as Q,l5 as J,l6 as ee,c as te,Z as re,fQ as ie,l7 as oe,cD as ae,C as ne,g as se,aW as le,l8 as ce,l9 as de,eB as ue,fS as me,fB as he,la as pe}from"../main.js";import{a as fe}from"./quat-517f017c.js";import{e as ve,a as ge,f as xe,r as be,c as _e}from"./vec33-e26dd06d.js";import{c as Te,x as Ce,u as Se,i as Ae,L as ye,O as Me,E as we}from"./BufferView-b4ba9afa.js";import{l as Oe,u as Pe,m as Ee,s as Re,p as Ie,q as De,c as Ne,n as Le,o as Fe,r as ze,a as Be,b as Ge,f as Ve,e as Ue,t as He,i as ke,h as $e,j as We}from"./DefaultMaterial_COLOR_GAMMA-80189ae7.js";import{r as qe}from"./Version-ba8c1666.js";import{c as je,l as Xe,t as Ke,C as Ye,i as Ze,r as Qe,a as Je,n as et,O as tt,N as rt,W as it,b as ot,E as at,h as nt,d as st,e as lt,f as ct,g as dt,_ as ut}from"./requestImageUtils-f8492d9f.js";import{n as mt,r as ht}from"./vec4f64-cad87e7c.js";import{O as pt}from"./VertexAttribute-5b9f01c9.js";import{t as ft,P as vt,L as gt,C as xt,F as bt,D as _t,M as Tt,G as Ct,Y as St,V as At,E as yt,I as Mt,O as wt}from"./enums-1bc10a6c.js";import{u as Ot,n as Pt,a as Et,c as Rt}from"./Texture-1175e9f5.js";import{_ as It,f as Dt,c as Nt,D as Lt,n as Ft}from"./VertexArrayObject-47d07736.js";import{t as zt}from"./VertexElementDescriptor-3277c87e.js";import{T as Bt}from"./InterleavedLayout-1e69dfe3.js";import{A as Gt,E as Vt}from"./RenderSlot-1b4b959b.js";import{t as Ut}from"./vec3f32-a3dab948.js";class Ht{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function kt(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new Ht(t)}class $t{constructor(e,t,n,s){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=n,this.position=s,this.center=r(),kt(e.length>=1),kt(n.length%this._numIndexPerPrimitive==0),kt(n.length>=e.length*this._numIndexPerPrimitive),kt(3===s.size||4===s.size);const{data:l,size:c}=s,d=e.length;let u=c*n[this._numIndexPerPrimitive*e[0]];Wt.clear(),Wt.push(u),this.bbMin=i(l[u],l[u+1],l[u+2]),this.bbMax=o(this.bbMin);for(let t=0;t<d;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){u=c*n[r+e],Wt.push(u);let t=l[u];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=l[u+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=l[u+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}a(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let e=0;e<Wt.length;++e){u=Wt.getItemAt(e);const t=l[u]-this.center[0],r=l[u+1]-this.center[1],i=l[u+2]-this.center[2],o=t*t+r*r+i*i;if(o<=m)continue;const a=Math.sqrt(o),n=.5*(a-this.radius);this.radius=this.radius+n,m=this.radius*this.radius;const s=n/a;this.center[0]+=t*s,this.center[1]+=r*s,this.center[2]+=i*s}Wt.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(n(this.bbMin,this.bbMax)>1){const e=a(r(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,i=new Uint8Array(t),o=new Array(8);for(let e=0;e<8;++e)o[e]=0;const{data:n,size:s}=this.position;for(let r=0;r<t;++r){let t=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[r];let l=s*this.indices[a],c=n[l],d=n[l+1],u=n[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=s*this.indices[a+e];const t=n[l],r=n[l+1],i=n[l+2];t<c&&(c=t),r<d&&(d=r),i<u&&(u=i)}c<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),i[r]=t,++o[t]}let l=0;for(let e=0;e<8;++e)o[e]>0&&++l;if(l<2)return;const c=new Array(8);for(let e=0;e<8;++e)c[e]=o[e]>0?new Uint32Array(o[e]):void 0;for(let e=0;e<8;++e)o[e]=0;for(let e=0;e<t;++e){const t=i[e];c[t][o[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==c[e]&&(this._children[e]=new $t(c[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){Wt.prune()}}const Wt=new t({deallocator:null});class qt{constructor(){this.id=s()}unload(){}}var jt;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT"}(jt||(jt={}));class Xt extends qt{constructor(e,t=[],r=je.Triangle,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=jt.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,r]of e)r&&this._vertexAttributes.set(t,{...r});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=Oe(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,r]of t)r&&(this._indices.set(e,Kt(r)),e===pt.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}cloneShallow(){const e=new Xt([],void 0,this._primitiveType,void 0),{_vertexAttributes:t,_indices:r}=e;return this._vertexAttributes.forEach(((e,r)=>{t.set(r,e)})),this._indices.forEach(((e,t)=>{r.set(t,e)})),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return l(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===je.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(pt.POSITION),r=this.vertexAttributes.get(pt.POSITION);return Pe(r,t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(pt.POSITION),r=this.vertexAttributes.get(pt.POSITION);return Ee(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(pt.POSITION);if(0===e.length)return null;const t=this.primitiveType===je.Triangle?3:1;kt(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=Oe(e.length/t),i=this.vertexAttributes.get(pt.POSITION);return new $t(r,t,e,i)}}function Kt(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}let Yt;var Zt;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(Zt||(Zt={}));let Qt=null,Jt=null;async function er(){return l(Jt)&&(Jt=function(){if(l(Yt)){const e=e=>c(`esri/libs/basisu/${e}`);Yt=import("./basis_transcoder-08df8284.js").then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return Yt}(),Qt=await Jt),Jt}function tr(e,t,r,i,o){const a=It(t?ft.COMPRESSED_RGBA8_ETC2_EAC:ft.COMPRESSED_RGB8_ETC2),n=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*a*n)}function rr(e){return e.getNumImages()>=1&&!e.isUASTC()}function ir(e){return e.getFaces()>=1&&e.isETC1S()}function or(e,t,r,i,o,a,n,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[Zt.ETC2_RGBA,ft.COMPRESSED_RGBA8_ETC2_EAC]:[Zt.ETC1_RGB,ft.COMPRESSED_RGB8_ETC2]:c?i?[Zt.BC3_RGBA,ft.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Zt.BC1_RGB,ft.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Zt.RGBA32,vt.RGBA],m=t.hasMipmap?r:Math.min(1,r),h=[];for(let e=0;e<m;e++)h.push(new Uint8Array(n(e,d))),s(e,d,h[e]);const p=h.length>1,f=p?gt.LINEAR_MIPMAP_LINEAR:gt.LINEAR,v={...t,samplingMode:f,hasMipmap:p,internalFormat:u,width:o,height:a};return new Ot(e,v,{type:"compressed",levels:h})}const ar=d.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function nr(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const sr=nr("DXT1"),lr=nr("DXT3"),cr=nr("DXT5");function dr(e,t,r){const{textureData:i,internalFormat:o,width:a,height:n}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return ar.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return ar.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,a;switch(i){case sr:o=8,a=ft.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case lr:o=16,a=ft.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case cr:o=16,a=ft.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return ar.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let n=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(ar.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let m,h;131072&r[2]&&!1!==t&&(n=Math.max(1,r[7])),1===n||u(s)&&u(l)||(ar.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let p=r[1]+4;const f=[];for(let t=0;t<n;++t)h=(s+3>>2)*(l+3>>2)*o,m=new Uint8Array(e,p,h),f.push(m),p+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:a,width:c,height:d}}(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?gt.LINEAR_MIPMAP_LINEAR:gt.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=o,t.width=a,t.height=n,new Ot(e,t,i)}const ur=new Map([[pt.POSITION,0],[pt.NORMAL,1],[pt.UV0,2],[pt.COLOR,3],[pt.SIZE,4],[pt.TANGENT,4],[pt.AUXPOS1,5],[pt.SYMBOLCOLOR,5],[pt.AUXPOS2,6],[pt.FEATUREATTRIBUTE,6],[pt.INSTANCEFEATUREATTRIBUTE,6],[pt.INSTANCECOLOR,7],[pt.MODEL,8],[pt.MODELNORMAL,12],[pt.MODELORIGINHI,11],[pt.MODELORIGINLO,15]]);new zt(pt.POSITION,3,xt.FLOAT,0,12),new zt(pt.POSITION,3,xt.FLOAT,0,20),new zt(pt.UV0,2,xt.FLOAT,12,20),new zt(pt.POSITION,3,xt.FLOAT,0,32),new zt(pt.NORMAL,3,xt.FLOAT,12,32),new zt(pt.UV0,2,xt.FLOAT,24,32),new zt(pt.POSITION,3,xt.FLOAT,0,16),new zt(pt.COLOR,4,xt.UNSIGNED_BYTE,12,16);const mr=[new zt(pt.POSITION,2,xt.FLOAT,0,8)],hr=[new zt(pt.POSITION,2,xt.FLOAT,0,16),new zt(pt.UV0,2,xt.FLOAT,8,16)];class pr extends qt{constructor(e,t){super(),this.data=e,this.type=jt.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new m,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:_t.REPEAT,t:_t.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||Xe.STRETCH,this.estimatedTexMemRequired=pr._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;l(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){h(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}_startPreloadImageElement(e){p(e.src)||h(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if(l(e))return 0;if(f(e)||v(e))return t.encoding===pr.KTX2_ENCODING?function(e,t){if(l(Qt))return e.byteLength;const r=new Qt.KTX2File(new Uint8Array(e)),i=ir(r)?tr(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===pr.BASIS_ENCODING?function(e,t){if(l(Qt))return e.byteLength;const r=new Qt.BasisFile(new Uint8Array(e)),i=rr(r)?tr(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?pr._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var t;return{target:Tt.TEXTURE_2D,pixelFormat:vt.RGBA,dataType:Ct.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?gt.LINEAR_MIPMAP_LINEAR:gt.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,t){if(g(this._glTexture))return this._glTexture;if(g(this._loadingPromise))return this._loadingPromise;const r=this.data;return l(r)?(this._glTexture=new Ot(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):(f(r)||v(r))&&this.params.encoding===pr.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,r)):(f(r)||v(r))&&this.params.encoding===pr.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,r)):(f(r)||v(r))&&this.params.encoding===pr.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,r)):v(r)?this._loadFromPixelData(e,r):f(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||l(this._glTexture))return r;if(this.data.readyState<fr.HAVE_CURRENT_DATA||r===this.data.currentTime)return r;if(g(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this.data),this._drawStretchedTexture(e,t,r,i,o,this._glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(e,t){return this._glTexture=dr(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){l(Qt)&&(Qt=await er());const i=new Qt.KTX2File(new Uint8Array(r));if(!ir(i))return null;i.startTranscoding();const o=or(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){l(Qt)&&(Qt=await er());const i=new Qt.BasisFile(new Uint8Array(r));if(!rr(i))return null;i.startTranscoding();const o=or(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){kt(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?vt.LUMINANCE:3===this.params.components?vt.RGB:vt.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new Ot(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async i=>{const o=await Ke(r,{signal:i});return x(i),this._loadFromImage(e,o,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async i=>{const o=await b(r,r.src,!1,i);return x(i),this._loadFromImage(e,o,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=fr.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((i=>new Promise(((o,a)=>{const n=()=>{r.removeEventListener("loadeddata",s),r.removeEventListener("error",l),y(c)},s=()=>{r.readyState>=fr.HAVE_CURRENT_DATA&&(n(),o(this._loadFromImage(e,r,t)))},l=e=>{n(),a(e||new A("Failed to load video"))};r.addEventListener("loadeddata",s),r.addEventListener("error",l);const c=_(i,(()=>l(T())))}))))}_loadFromImage(e,t,r){const i=pr._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this.params.components?vt.RGB:vt.RGBA,!this._requiresPowerOfTwo(e,o)||u(i.width)&&u(i.height)?(o.width=i.width,o.height=i.height,this._glTexture=new Ot(e,o,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,o,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(e,t){const r=_t.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Pt(e.gl)&&(t.hasMipmap||!i)}_makePowerOfTwoTexture(e,t,r,i,o){const{width:a,height:n}=r,s=C(a),l=C(n);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case Xe.PAD:i.textureCoordinateScaleFactor=[a/s,n/l],c=new Ot(e,i),c.updateData(0,0,0,a,n,t);break;case Xe.STRETCH:case null:case void 0:c=this._stretchToPowerOfTwo(e,t,i,o());break;default:S(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&c.generateMipmap(),c}_stretchToPowerOfTwo(e,t,r,i){const o=new Ot(e,r),a=new Lt(e,{colorTarget:St.TEXTURE,depthStencilTarget:At.NONE},o),n=new Ot(e,{target:Tt.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:Ct.UNSIGNED_BYTE,wrapMode:_t.CLAMP_TO_EDGE,samplingMode:gt.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=mr,r=ur,i=-1,o=1){let a=null;return a=t===hr?new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):new Float32Array([i,i,o,i,i,o,o,o]),new Dt(e,r,{geometry:t},{geometry:Nt.createVertex(e,bt.STATIC_DRAW,a)})}(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,a,s,n,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:a}:(s.dispose(!0),n.dispose(),a.detachColorTexture(),a.dispose()),e.bindFramebuffer(l),o}_drawStretchedTexture(e,t,r,i,o,a){e.bindFramebuffer(r);const n=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=e.useTechnique(t);s.setUniform4f("uColor",1,1,1,1),s.bindTexture(o,"tex"),e.bindVAO(i),e.drawArrays(yt.TRIANGLE_STRIP,0,Ft(i,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if(g(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(g(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),g(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var fr,vr,gr;function xr(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}function br(e,t){const r=e.fragment;switch(r.code.add(xr`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case gr.None:r.code.add(xr`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case gr.View:r.code.add(xr`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case gr.WindingOrder:r.code.add(xr`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:S(t.doubleSidedMode);case gr.COUNT:}}pr.DDS_ENCODING="image/vnd-ms.dds",pr.KTX2_ENCODING="image/ktx2",pr.BASIS_ENCODING="image/x.basis",function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(fr||(fr={})),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.Highlight=4]="Highlight",e[e.Draped=5]="Draped",e[e.Occlusion=6]="Occlusion",e[e.Alpha=7]="Alpha",e[e.COUNT=8]="COUNT"}(vr||(vr={})),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(xr||(xr={})),function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(gr||(gr={}));function _r(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case Ye.Blend:r.code.add(xr`
        #define discardOrAdjustAlpha(color) { if (color.a < ${xr.float(.001)}) { discard; } }
      `);break;case Ye.Opaque:r.code.add(xr`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case Ye.Mask:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(xr`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case Ye.MaskBlend:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(xr`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Tr(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return Sr.scale=Math.min(i.divisor/(t-i.offset),1),Sr.factor=function(e){return Math.abs(e*e*e)}(e),Sr.minPixelSize=i.minPixelSize,Sr.paddingPixels=o,Sr}function Cr(e,t,r,i){return function(e,t){return Math.max(O(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,Tr(t,r,i))}const Sr={scale:0,factor:0,minPixelSize:0,paddingPixels:0};const Ar=P();function yr(e,t,r,i,o,a,n){if(!function(e){return!!g(e)&&!e.visible}(t))if(e.boundingInfo){kt(e.primitiveType===je.Triangle);const t=r.tolerance;wr(e.boundingInfo,i,o,t,a,n)}else{const t=e.indices.get(pt.POSITION),r=e.vertexAttributes.get(pt.POSITION);Pr(i,o,0,t.length/3,t,r,void 0,a,n)}}const Mr=r();function wr(e,t,r,i,o,a){if(l(e))return;const n=function(e,t,r){return R(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,Mr);if(I(Ar,e.getBBMin()),D(Ar,e.getBBMax()),g(o)&&o.applyToAabb(Ar),function(e,t,r,i){return function(e,t,r,i,o){const a=(e[0]-i-t[0])*r[0],n=(e[3]+i-t[0])*r[0];let s=Math.min(a,n),l=Math.max(a,n);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],m=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,m)),!(l<0)&&(s=Math.max(s,Math.min(u,m)),!(s>l)&&s<o)}(e,t,r,i,1/0)}(Ar,t,n,i)){const{primitiveIndices:n,indices:s,position:l}=e,c=n?n.length:s.length/3;if(c>Fr){const n=e.getChildren();if(void 0!==n){for(let e=0;e<8;++e)void 0!==n[e]&&wr(n[e],t,r,i,o,a);return}}Pr(t,r,0,c,s,l,n,o,a)}}const Or=r();function Pr(e,t,r,i,o,a,n,s,l){if(n)return function(e,t,r,i,o,a,n,s,l){const c=a.data,d=a.stride||a.size,u=e[0],m=e[1],h=e[2],p=t[0]-u,f=t[1]-m,v=t[2]-h;for(let e=r;e<i;++e){const t=n[e];let r=3*t,i=d*o[r++],a=c[i++],x=c[i++],b=c[i];i=d*o[r++];let _=c[i++],T=c[i++],C=c[i];i=d*o[r];let S=c[i++],A=c[i++],y=c[i];g(s)&&([a,x,b]=s.applyToVertex(a,x,b,e),[_,T,C]=s.applyToVertex(_,T,C,e),[S,A,y]=s.applyToVertex(S,A,y,e));const M=_-a,w=T-x,O=C-b,P=S-a,E=A-x,R=y-b,I=f*R-E*v,D=v*P-R*p,N=p*E-P*f,L=M*I+w*D+O*N;if(Math.abs(L)<=Number.EPSILON)continue;const F=u-a,z=m-x,B=h-b,G=F*I+z*D+B*N;if(L>0){if(G<0||G>L)continue}else if(G>0||G<L)continue;const V=z*O-w*B,U=B*M-O*F,H=F*w-M*z,k=p*V+f*U+v*H;if(L>0){if(k<0||G+k>L)continue}else if(k>0||G+k<L)continue;const $=(P*V+E*U+R*H)/L;$>=0&&l($,Ir(M,w,O,P,E,R,Or),t,!1)}}(e,t,r,i,o,a,n,s,l);const c=a.data,d=a.stride||a.size,u=e[0],m=e[1],h=e[2],p=t[0]-u,f=t[1]-m,v=t[2]-h;for(let e=r,t=3*r;e<i;++e){let r=d*o[t++],i=c[r++],a=c[r++],n=c[r];r=d*o[t++];let x=c[r++],b=c[r++],_=c[r];r=d*o[t++];let T=c[r++],C=c[r++],S=c[r];g(s)&&([i,a,n]=s.applyToVertex(i,a,n,e),[x,b,_]=s.applyToVertex(x,b,_,e),[T,C,S]=s.applyToVertex(T,C,S,e));const A=x-i,y=b-a,M=_-n,w=T-i,O=C-a,P=S-n,E=f*P-O*v,R=v*w-P*p,I=p*O-w*f,D=A*E+y*R+M*I;if(Math.abs(D)<=Number.EPSILON)continue;const N=u-i,L=m-a,F=h-n,z=N*E+L*R+F*I;if(D>0){if(z<0||z>D)continue}else if(z>0||z<D)continue;const B=L*M-y*F,G=F*A-M*N,V=N*y-A*L,U=p*B+f*G+v*V;if(D>0){if(U<0||z+U>D)continue}else if(U>0||z+U<D)continue;const H=(w*B+O*G+P*V)/D;H>=0&&l(H,Ir(A,y,M,w,O,P,Or),e,!1)}}const Er=r(),Rr=r();function Ir(e,t,r,i,o,a,n){return R(Er,e,t,r),R(Rr,i,o,a),N(n,Er,Rr),L(n,n),n}function Dr(e,t){const r=t?Dr(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=Nr(i)),null==i&&t in r||(r[t]=i)}return r}function Nr(e){const t=[];return e.forEach((e=>t.push(e))),t}const Lr={multiply:1,ignore:2,replace:3,tint:4},Fr=1e3;class zr extends qt{constructor(e,t){super(),this.type=jt.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=ur,this._parameters=Dr(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){(function(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(r=!0,Array.isArray(o)?e[i]=o.slice():e[i]=o)}return r})(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){g(this.repository)&&this.repository.materialChanged(this)}}var Br;!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(Br||(Br={}));const Gr={renderOccluded:Br.Occlude};var Vr;!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(Vr||(Vr={})),new Re((function(){return{origin:null,direction:null}}));const Ur=d.getLogger("esri.geometry.support.sphere");function Hr(){return mt()}function kr(e,t=Hr()){return H(t,e)}function $r(e){return Array.isArray(e)?e[3]:e}function Wr(e){return Array.isArray(e)?e:ei}function qr(e,t,r){if(l(t))return!1;const{origin:i,direction:o}=t,a=jr;a[0]=i[0]-e[0],a[1]=i[1]-e[1],a[2]=i[2]-e[2];const n=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],s=2*(o[0]*a[0]+o[1]*a[1]+o[2]*a[2]),c=s*s-4*n*(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]-e[3]*e[3]);if(c<0)return!1;const d=Math.sqrt(c);let u=(-s-d)/(2*n);const m=(-s+d)/(2*n);return(u<0||m<u&&m>0)&&(u=m),!(u<0||(r&&(r[0]=i[0]+o[0]*u,r[1]=i[1]+o[1]*u,r[2]=i[2]+o[2]*u),0))}const jr=r();function Xr(e,t,r){const i=Ie.get(),o=De.get();N(i,t.origin,t.direction);const a=$r(e);N(r,i,t.origin),z(r,r,1/U(r)*a);const n=Yr(e,t.origin),s=function(e,t){const r=B(e,t)/(U(e)*U(t));return-V(r)}(t.origin,r);return $(o,s+n,i),W(r,r,o),r}function Kr(e,t,r){const i=G(Ie.get(),t,Wr(e)),o=z(Ie.get(),i,e[3]/U(i));return F(r,o,Wr(e))}function Yr(e,t){const r=G(Ie.get(),t,Wr(e)),i=U(r),o=$r(e),a=o+Math.abs(o-i);return V(o/a)}const Zr=r();function Qr(e,t,r,i){const o=G(Zr,t,Wr(e));switch(r){case Vr.X:{const e=X(o,Zr)[2];return R(i,-Math.sin(e),Math.cos(e),0)}case Vr.Y:{const e=X(o,Zr),t=e[1],r=e[2],a=Math.sin(t);return R(i,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case Vr.Z:return L(i,o);default:return}}function Jr(e,t){const r=G(ti,t,Wr(e));return U(r)-e[3]}const ei=r(),ti=r();Object.freeze({__proto__:null,create:Hr,copy:kr,fromCenterAndRadius:function(e,t){return ht(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:$r,getCenter:Wr,fromValues:function(e,t,r,i){return ht(e,t,r,i)},elevate:function(e,t,r){return e!==r&&k(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return Ur.error("sphere.setExtent is not yet supported"),e===r?r:kr(e,r)},intersectRay:qr,intersectsRay:function(e,t){return qr(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(qr(e,t,r))return r;const i=Xr(e,t,Ie.get());return F(r,t.origin,z(Ie.get(),t.direction,q(t.origin,i)/U(t.direction))),r},closestPointOnSilhouette:Xr,closestPoint:function(e,t,r){return qr(e,t,r)?r:(function(e,t,r){const i=B(e.direction,G(r,t,e.origin));F(r,e.origin,z(r,e.direction,i))}(t,Wr(e),r),Kr(e,r,r))},projectPoint:Kr,distanceToSilhouette:function(e,t){const r=G(Ie.get(),t,Wr(e)),i=j(r),o=e[3]*e[3];return Math.sqrt(Math.abs(i-o))},angleToSilhouette:Yr,axisAt:Qr,altitudeAt:Jr,setAltitudeAt:function(e,t,r,i){const o=Jr(e,t),a=Qr(e,t,Vr.Z,ti),n=z(ti,a,r-o);return F(i,t,n)}});const ri=new class{constructor(e=0){this.offset=e,this.sphere=Hr(),this.tmpVertex=r()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],a=i[1]*e+i[5]*t+i[9]*r+i[13],n=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+a*a+n*n);o+=o*s,a+=a*s,n+=n*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*a+l[8]*n+l[12],this.tmpVertex[1]=l[1]*o+l[5]*a+l[9]*n+l[13],this.tmpVertex[2]=l[2]*o+l[6]*a+l[10]*n+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function ii(e,t,r,i){const o=r.typedBuffer,a=r.typedBufferStride,n=e.length;i*=a;for(let r=0;r<n;++r){const n=2*e[r];o[i]=t[n],o[i+1]=t[n+1],i+=a}}function oi(e,t,r,i,o){const a=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,null==o||1===o)for(let r=0;r<s;++r){const o=3*e[r];a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],i+=n}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<o;++e)a[i]=t[s],a[i+1]=t[s+1],a[i+2]=t[s+2],i+=n}}function ai(e,t,r,i,o,a=1){if(!r)return void oi(e,t,i,o,a);const n=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=r[0],d=r[1],u=r[2],m=r[4],h=r[5],p=r[6],f=r[8],v=r[9],g=r[10],x=r[12],b=r[13],_=r[14];if(o*=s,1===a)for(let r=0;r<l;++r){const i=3*e[r],a=t[i],l=t[i+1],T=t[i+2];n[o]=c*a+m*l+f*T+x,n[o+1]=d*a+h*l+v*T+b,n[o+2]=u*a+p*l+g*T+_,o+=s}else for(let r=0;r<l;++r){const i=3*e[r],l=t[i],T=t[i+1],C=t[i+2],S=c*l+m*T+f*C+x,A=d*l+h*T+v*C+b,y=u*l+p*T+g*C+_;for(let e=0;e<a;++e)n[o]=S,n[o+1]=A,n[o+2]=y,o+=s}}function ni(e,t,r,i,o,a=1){if(!r)return void oi(e,t,i,o,a);const n=r,s=i.typedBuffer,l=i.typedBufferStride,c=e.length,d=n[0],u=n[1],m=n[2],h=n[4],p=n[5],f=n[6],v=n[8],g=n[9],x=n[10],b=!K(n),_=1e-6,T=1-_;if(o*=l,1===a)for(let r=0;r<c;++r){const i=3*e[r],a=t[i],n=t[i+1],c=t[i+2];let C=d*a+h*n+v*c,S=u*a+p*n+g*c,A=m*a+f*n+x*c;if(b){const e=C*C+S*S+A*A;if(e<T&&e>_){const t=1/Math.sqrt(e);C*=t,S*=t,A*=t}}s[o+0]=C,s[o+1]=S,s[o+2]=A,o+=l}else for(let r=0;r<c;++r){const i=3*e[r],n=t[i],c=t[i+1],C=t[i+2];let S=d*n+h*c+v*C,A=u*n+p*c+g*C,y=m*n+f*c+x*C;if(b){const e=S*S+A*A+y*y;if(e<T&&e>_){const t=1/Math.sqrt(e);S*=t,A*=t,y*=t}}for(let e=0;e<a;++e)s[o+0]=S,s[o+1]=A,s[o+2]=y,o+=l}}function si(e,t,r,i,o,a=1){if(!r)return void function(e,t,r,i,o=1){const a=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,1===o)for(let r=0;r<s;++r){const o=4*e[r];a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],a[i+3]=t[o+3],i+=n}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<o;++e)a[i]=t[s],a[i+1]=t[s+1],a[i+2]=t[s+2],a[i+3]=t[s+3],i+=n}}(e,t,i,o,a);const n=r,s=i.typedBuffer,l=i.typedBufferStride,c=e.length,d=n[0],u=n[1],m=n[2],h=n[4],p=n[5],f=n[6],v=n[8],g=n[9],x=n[10],b=!K(n),_=1e-6,T=1-_;if(o*=l,1===a)for(let r=0;r<c;++r){const i=4*e[r],a=t[i],n=t[i+1],c=t[i+2],C=t[i+3];let S=d*a+h*n+v*c,A=u*a+p*n+g*c,y=m*a+f*n+x*c;if(b){const e=S*S+A*A+y*y;if(e<T&&e>_){const t=1/Math.sqrt(e);S*=t,A*=t,y*=t}}s[o+0]=S,s[o+1]=A,s[o+2]=y,s[o+3]=C,o+=l}else for(let r=0;r<c;++r){const i=4*e[r],n=t[i],c=t[i+1],C=t[i+2],S=t[i+3];let A=d*n+h*c+v*C,y=u*n+p*c+g*C,M=m*n+f*c+x*C;if(b){const e=A*A+y*y+M*M;if(e<T&&e>_){const t=1/Math.sqrt(e);A*=t,y*=t,M*=t}}for(let e=0;e<a;++e)s[o+0]=A,s[o+1]=y,s[o+2]=M,s[o+3]=S,o+=l}}function li(e,t,r,i,o,a=1){const n=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,1===a){if(4===r)for(let r=0;r<l;++r){const i=4*e[r];n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=t[i+3],o+=s}else if(3===r)for(let r=0;r<l;++r){const i=3*e[r];n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=255,o+=s}}else if(4===r)for(let r=0;r<l;++r){const i=4*e[r];for(let e=0;e<a;++e)n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=t[i+3],o+=s}else if(3===r)for(let r=0;r<l;++r){const i=3*e[r];for(let e=0;e<a;++e)n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=255,o+=s}}function ci(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=xr`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=xr`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.sliceHighlightDisabled?xr`#define highlightSlice(_color_, _pos_) (_color_)`:xr`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(o)}else{const r=xr`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}const di=r(),ui=r(),mi=r(),hi=ve();function pi({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(xr`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(xr`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function fi(e){return!!Q("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}function vi(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(pt.MODELORIGINHI,"vec3"),e.attributes.add(pt.MODELORIGINLO,"vec3"),e.attributes.add(pt.MODEL,"mat3"),e.attributes.add(pt.MODELNORMAL,"mat3")),t.instancedDoublePrecision&&(e.vertex.include(pi,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[xr`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,xr`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?xr`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,xr`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,xr`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?xr`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:xr``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),t.output===vr.Normal&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}const gi=r(),xi=r();function bi(e){const t=xr`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function _i(e,t){t.normalType===Ti.Attribute&&(e.attributes.add(pt.NORMAL,"vec3"),e.vertex.code.add(xr`vec3 normalModel() {
return normal;
}`)),t.normalType===Ti.CompressedAttribute&&(e.include(bi),e.attributes.add(pt.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(xr`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===Ti.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(xr`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var Ti,Ci;function Si(e,t){t.attributeTextureCoordinates===Ci.Default&&(e.attributes.add(pt.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(xr`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),t.attributeTextureCoordinates===Ci.Atlas&&(e.attributes.add(pt.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(pt.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(xr`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),t.attributeTextureCoordinates===Ci.None&&e.vertex.code.add(xr`void forwardTextureCoordinates() {}`)}function Ai(e){e.vertex.code.add(xr`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(xr`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(xr`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(xr`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(xr`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(xr`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(xr`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function yi(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(Ai),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(xr`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${t.viewingMode===J.Global?xr`vec3 worldNormal = normalize(worldPos + localOrigin);`:xr`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?xr`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:xr`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(xr`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function Mi(e,t,r){if(!t.verticalOffset)return;const i=function(e,t,r,i=wi){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*o,i.perDistance,i.minWorldLength,i.maxWorldLength)}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(Ti||(Ti={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT"}(Ci||(Ci={}));const wi={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},Oi=ht(1,1,0,1),Pi=ht(1,0,1,1);function Ei(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",Oi).add("unoccludedHighlightFlag","vec4",Pi),e.fragment.code.add(xr`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function Ri(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(xr`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function Ii(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(xr`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function Di(e,t){e.include(Si,t),e.fragment.code.add(xr`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.attributeTextureCoordinates===Ci.Default&&e.fragment.code.add(xr`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),t.attributeTextureCoordinates===Ci.Atlas&&(e.include(Ii),e.fragment.code.add(xr`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}var Ni;function Li(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;t.pbrMode===Ni.Normal&&i&&e.include(Di,t),t.pbrMode!==Ni.Schematic?(t.pbrMode===Ni.Disabled&&r.code.add(xr`float getBakedOcclusion() { return 1.0; }`),t.pbrMode===Ni.Normal&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(xr`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(xr`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(xr`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(xr`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(xr`float getBakedOcclusion() { return 1.0; }`),r.code.add(xr`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(xr`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Fi(e){e.code.add(xr`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function zi(e){e.fragment.include(Fi),e.fragment.uniforms.add("shadowMapTex","sampler2D"),e.fragment.uniforms.add("numCascades","int"),e.fragment.uniforms.add("cascadeDistances","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(xr`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function Bi(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add(pt.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(xr`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(xr`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?xr`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(xr`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(xr`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?xr`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(xr`vec4 vvColor() { return vec4(1.0); }`)}Ut(0,.6,.2),function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(Ni||(Ni={}));const Gi=ee();class Vi{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function Ui(e={}){return(t,r)=>{var i,o;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const a=t._parameterNames.length-1,n=e.count||2,s=Math.ceil(Math.log2(n)),l=null!=(o=t._parameterBits)?o:[0];let c=0;for(;l[c]+s>16;)c++,c>=l.length&&l.push(0);t._parameterBits=l;const d=l[c],u=(1<<s)-1<<d;l[c]+=s,Object.defineProperty(t,r,{get(){return this[a]},set(e){if(this[a]!==e&&(this[a]=e,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}class Hi{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new t({deallocator:null}),this._glProgram=e.programCache.acquire(r.generateSource("vertex"),r.generateSource("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=Et()?r.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2f(e,t,r){this._glProgram.setUniform2f(e,t,r)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3f(e,t,r,i){this._glProgram.setUniform3f(e,t,r,i)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4f(e,t,r,i,o){this._glProgram.setUniform4f(e,t,r,i,o)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(l(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),g(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}Mt.LESS,Mt.ALWAYS;const ki={mask:255},$i={function:{func:Mt.ALWAYS,ref:Je.OutlineVisualElementMask,mask:Je.OutlineVisualElementMask},operation:{fail:wt.KEEP,zFail:wt.KEEP,zPass:wt.ZERO}},Wi={function:{func:Mt.ALWAYS,ref:Je.OutlineVisualElementMask,mask:Je.OutlineVisualElementMask},operation:{fail:wt.KEEP,zFail:wt.KEEP,zPass:wt.REPLACE}};function qi(e,t){t.output===vr.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(xr`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===vr.Depth||t.output===vr.Shadow?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("nearFar","vec2"),e.vertex.code.add(xr`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(xr`void forwardLinearDepth() {}`)}function ji(e){e.vertex.code.add(xr`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Xi(e,t){const r={hasModelTransformation:!1,...t};if(r.hasModelTransformation)return r.linearDepth?void e.vertex.code.add(xr`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void e.vertex.code.add(xr`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);r.linearDepth?e.vertex.code.add(xr`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(xr`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Ki(e){e.attributes.add(pt.POSITION,"vec3"),e.vertex.code.add(xr`vec3 positionModel() { return position; }`)}var Yi;function Zi(e){e.vertex.code.add(xr`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${xr.int(Yi.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${xr.int(Yi.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${xr.int(Yi.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${xr.int(Yi.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Qi(e,t){t.symbolColor?(e.include(Zi),e.attributes.add(pt.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(xr`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(xr`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function Ji(e,t){t.attributeColor?(e.attributes.add(pt.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(xr`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(xr`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(xr`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function eo(e,t){e.include(Ki),e.vertex.include(pi,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("transformWorldFromModelRS","mat3"),e.vertex.uniforms.add("transformWorldFromModelTH","vec3"),e.vertex.uniforms.add("transformWorldFromModelTL","vec3"),e.vertex.uniforms.add("transformWorldFromViewTH","vec3"),e.vertex.uniforms.add("transformWorldFromViewTL","vec3"),e.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),e.vertex.uniforms.add("transformProjFromView","mat4"),e.vertex.code.add(xr`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("transformWorldFromViewTL","vec3"),e.fragment.code.add(xr`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function to(e,t){t.normalType===Ti.Attribute||t.normalType===Ti.CompressedAttribute?(e.include(_i,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),e.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),e.vertex.code.add(xr`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===Ti.Ground?(e.include(eo,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(xr`
    void forwardNormal() {
      vNormalWorld = ${t.viewingMode===J.Global?xr`normalize(vPositionWorldCameraRelative);`:xr`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(xr`void forwardNormal() {}`)}function ro(e,t){e.fragment.include(Fi),t.output===vr.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(xr`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):t.output===vr.Depth&&e.fragment.code.add(xr`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function io(e,t){const r=e.vertex.code,i=e.fragment.code,o=t.hasModelTransformation;t.output!==vr.Depth&&t.output!==vr.Shadow||(e.include(Xi,{linearDepth:!0,hasModelTransformation:o}),e.include(Si,t),e.include(Bi,t),e.include(ro,t),e.include(ci,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(xr`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${o?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(_r,t),i.add(xr`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?xr`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===vr.Normal&&(e.include(Xi,{linearDepth:!1,hasModelTransformation:o}),e.include(_i,t),e.include(to,t),e.include(Si,t),e.include(Bi,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(xr`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===Ti.Attribute?xr`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(ci,t),e.include(_r,t),i.add(xr`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?xr`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===Ti.ScreenDerivative?xr`
            vec3 normal = screenDerivativeNormal(vPositionView);`:xr`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===vr.Highlight&&(e.include(Xi,{linearDepth:!1,hasModelTransformation:o}),e.include(Si,t),e.include(Bi,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(xr`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(ci,t),e.include(_r,t),e.include(Ei),i.add(xr`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?xr`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function oo(e){e.include(Fi),e.code.add(xr`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function ao(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add(pt.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===gr.WindingOrder?r.code.add(xr`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(xr`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(xr`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.attributeTextureCoordinates!==Ci.None&&(e.include(Di,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(xr`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function no(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(xr`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(xr`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function so(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(xr`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(xr`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(xr`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==Ni.Normal&&t.pbrMode!==Ni.Schematic||r.code.add(xr`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function lo(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.uniforms.add("lightingSpecularStrength","float"),t.uniforms.add("lightingEnvironmentStrength","float"),t.code.add(xr`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function co(e){const t=e.fragment.code;t.add(xr`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(xr`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(xr`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function uo(e){e.vertex.code.add(xr`const float PI = 3.141592653589793;`),e.fragment.code.add(xr`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function mo(e,t){const r=e.fragment.code;e.include(uo),t.pbrMode===Ni.Water||t.pbrMode===Ni.WaterOnIntegratedMesh?(r.add(xr`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(xr`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(xr`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(xr`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(xr`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==Ni.Normal&&t.pbrMode!==Ni.Schematic||(e.include(co),r.add(xr`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(xr`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(xr`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(xr`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(xr`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(xr`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function ho(e,t){const r=e.fragment;e.include(lo),e.include(no,t),t.pbrMode!==Ni.Disabled&&e.include(mo,t),e.include(so,t),t.receiveShadows&&e.include(zi,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),r.uniforms.add("hasFillLights","bool"),e.include(uo),r.code.add(xr`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===Ni.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(xr`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.viewingMode===J.Global?xr`normalize(vPosWorld)`:xr`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(xr`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===Ni.Disabled||t.pbrMode===Ni.WaterOnIntegratedMesh?r.code.add(xr`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):t.pbrMode!==Ni.Normal&&t.pbrMode!==Ni.Schematic||(r.code.add(xr`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(xr`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(xr`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(xr`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(xr`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===Ni.Schematic?xr`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:xr`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function po(e,t){const r=xr`
  /*
  *  ${t.name}
  *  ${t.output===vr.Color?"RenderOutput: Color":t.output===vr.Depth?"RenderOutput: Depth":t.output===vr.Shadow?"RenderOutput: Shadow":t.output===vr.Normal?"RenderOutput: Normal":t.output===vr.Highlight?"RenderOutput: Highlight":""}
  */
  `;Rt()&&(e.fragment.code.add(r),e.vertex.code.add(r))}function fo(e){e.code.add(xr`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function vo(e){e.include(fo),e.code.add(xr`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${xr.int(Yi.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${xr.int(Yi.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${xr.int(Yi.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${xr.int(Yi.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${xr.int(Yi.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}Mt.EQUAL,Je.OutlineVisualElementMask,Je.OutlineVisualElementMask,wt.KEEP,wt.KEEP,wt.KEEP,Mt.NOTEQUAL,Je.OutlineVisualElementMask,Je.OutlineVisualElementMask,wt.KEEP,wt.KEEP,wt.KEEP,function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(Yi||(Yi={}));const go=d.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class xo{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&go.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class bo extends xo{constructor(){super(...arguments),this.vertex=new Co,this.fragment=new Co,this.attributes=new So,this.varyings=new Ao,this.extensions=new yo,this.constants=new Mo}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,a=o.uniforms.generateSource(),n=o.code.generateSource(),s="vertex"===e?Oo:wo,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${a.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${n.join("\n")}`}}class _o{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){return Array.from(this._entries.values()).map((e=>`uniform ${e.type} ${e.name}${(e=>e?`[${e}]`:"")(e.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class To{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class Co extends xo{constructor(){super(...arguments),this.uniforms=new _o,this.code=new To,this.constants=new Mo}get builder(){return this}}class So{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class Ao{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class yo{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?yo.ALLOWLIST_VERTEX:yo.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}yo.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],yo.ALLOWLIST_VERTEX=[];class Mo{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=Mo._numberToFloatStr(r);break;case"int":i=Mo._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${Mo._numberToFloatStr(r[0])},                            ${Mo._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${Mo._numberToFloatStr(r[0])},                            ${Mo._numberToFloatStr(r[1])},                            ${Mo._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${Mo._numberToFloatStr(r[0])},                            ${Mo._numberToFloatStr(r[1])},                            ${Mo._numberToFloatStr(r[2])},                            ${Mo._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${Mo._numberToIntStr(r[0])},                             ${Mo._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${Mo._numberToIntStr(r[0])},                             ${Mo._numberToIntStr(r[1])},                             ${Mo._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${Mo._numberToIntStr(r[0])},                             ${Mo._numberToIntStr(r[1])},                             ${Mo._numberToIntStr(r[2])},                             ${Mo._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>Mo._numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const wo="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Oo="precision highp float;\nprecision highp sampler2D;";function Po(e){const t=new bo,r=t.vertex.code,i=t.fragment.code;t.include(po,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const o=e.hasModelTransformation;return o&&t.vertex.uniforms.add("model","mat4"),t.include(Ki),t.varyings.add("vpos","vec3"),t.include(Bi,e),t.include(vi,e),t.include(yi,e),e.output!==vr.Color&&e.output!==vr.Alpha||(t.include(_i,e),t.include(Xi,{linearDepth:!1,hasModelTransformation:o}),e.normalType===Ti.Attribute&&e.offsetBackfaces&&t.include(ji),t.include(ao,e),t.include(to,e),e.instancedColor&&t.attributes.add(pt.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(Si,e),t.include(qi,e),t.include(Qi,e),t.include(Ji,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(xr`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${xr.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===Ti.Attribute?xr`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
          ${e.normalType===Ti.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===vr.Alpha&&(t.include(ci,e),t.include(_r,e),e.multipassTerrainEnabled&&(t.fragment.include(oo),t.include(Ri,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(vo),i.add(xr`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?xr`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:xr`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?xr`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:xr`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===vr.Color&&(t.include(ci,e),t.include(ho,e),t.include(no,e),t.include(_r,e),e.receiveShadows&&t.include(zi,e),e.multipassTerrainEnabled&&(t.fragment.include(oo),t.include(Ri,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(Li,e),t.include(mo,e),t.fragment.include(vo),t.include(br,e),i.add(xr`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?xr`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:xr`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===Ti.ScreenDerivative?xr`
        vec3 normal = screenDerivativeNormal(localvpos);`:xr`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===Ni.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===J.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?xr`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:xr`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?xr`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${e.pbrMode===Ni.Normal||e.pbrMode===Ni.Schematic?e.viewingMode===J.Global?xr`vec3 normalGround = normalize(vpos + localOrigin);`:xr`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:xr``}
        ${e.pbrMode===Ni.Normal||e.pbrMode===Ni.Schematic?xr`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(io,e),t}const Eo=Object.freeze({__proto__:null,build:Po}),Ro=d.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class Io extends class{constructor(e,t,r){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=te(this._program),this._pipeline=this._config=null}reload(e){te(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e){}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return yt.TRIANGLES}getPipelineState(e,t){return this._pipeline}}{initializeProgram(e){const t=Io.shader.get(),r=this.configuration,i=t.build({oitEnabled:r.transparencyPassType===tt.Color,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?Ni.Schematic:Ni.Normal:Ni.Disabled,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,hasModelTransformation:r.hasModelTransformation,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?Ti.ScreenDerivative:Ti.Attribute,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?Ci.Default:Ci.None,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:fi(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Hi(e.rctx,i,ur)}bindPass(e,t){var r,i;!function(e,t){e.setUniformMatrix4fv("proj",t)}(this.program,t.camera.projectionMatrix);const o=this.configuration.output;this.configuration.hasModelTransformation&&(g(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):Ro.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===vr.Depth||t.multipassTerrainEnabled||o===vr.Shadow)&&this.program.setUniform2fv("nearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),function(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}(this.program,t)),o===vr.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Lr[e.colorMixMode])),o===vr.Color?(t.lighting.setUniforms(this.program,!1,t.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Lr[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}(this.program,e,this.configuration.isSchematic)):o===vr.Highlight&&function(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}(this.program,t),function(e,t){(function(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))})(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}(this.program,e),Mi(this.program,e,t),function(e,t,r){if(!e)return;const i=e.parameters,o=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,o)}(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==Ye.Mask&&e.textureAlphaMode!==Ye.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?i(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;(function(e,t,r){Y(Gi,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",Gi)})(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===vr.Color||this.configuration.output===vr.Alpha||this.configuration.output===vr.Depth&&this.configuration.screenSizePerspective||this.configuration.output===vr.Normal&&this.configuration.screenSizePerspective||this.configuration.output===vr.Highlight&&this.configuration.screenSizePerspective)&&function(e,t,r){e.setUniform3f("cameraPosition",r[3]-t[0],r[7]-t[1],r[11]-t[2])}(this.program,t,e.camera.viewInverseTransposeMatrix),this.configuration.output===vr.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&function(e,t){Qe(t,gi,xi,3),e.setUniform3fv("viewOriginHi",gi),e.setUniform3fv("viewOriginLo",xi)}(this.program,t),function(e,t,r,i){if(t.slicePlaneEnabled)if(g(r)){if(k(di,r.origin),k(ui,r.basis1),k(mi,r.basis2),g(i)&&g(i.origin)&&G(di,r.origin,i.origin),g(i)&&g(i.view)){const e=g(i.origin)?Y(hi,i.view,i.origin):i.view;F(ui,ui,di),F(mi,mi,di),W(di,di,e),W(ui,ui,e),W(mi,mi,e),G(ui,ui,di),G(mi,mi,di)}e.setUniform3fv("slicePlaneOrigin",di),e.setUniform3fv("slicePlaneBasis1",ui),e.setUniform3fv("slicePlaneBasis2",mi)}else e.setUniform3fv("slicePlaneBasis1",Z),e.setUniform3fv("slicePlaneBasis2",Z),e.setUniform3fv("slicePlaneOrigin",Z)}(this.program,this.configuration,e.slicePlane,{origin:t}),this.configuration.output===vr.Color&&function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}(this.program,e,t)}_convertDepthTestFunction(e){return e===rt.Lequal?Mt.LEQUAL:Mt.LESS}_setPipeline(e,t){const r=this.configuration,i=e===tt.NONE,o=e===tt.FrontFace;return it({blending:r.output!==vr.Color&&r.output!==vr.Alpha||!r.transparent?null:i?ot:at(e),culling:Do(r)&&nt(r.cullFace),depthTest:{func:st(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:i||o?r.writeDepth&&lt:null,colorWrite:ct,stencilWrite:r.sceneHasOcludees?ki:null,stencilTest:r.sceneHasOcludees?t?Wi:$i:null,polygonOffset:i||o?null:dt(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Do(e){return e.cullFace?e.cullFace!==et.None:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}Io.shader=new Vi(Eo,(()=>import("./DefaultMaterial.glsl-1d4c20c0.js")));class No extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=vr.Color,this.alphaDiscardMode=Ye.Opaque,this.doubleSidedMode=gr.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=et.None,this.transparencyPassType=tt.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=rt.Less}}function Lo(e){const t=new bo,r=t.vertex.code,i=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),t.include(Ki),t.varyings.add("vpos","vec3"),t.include(Bi,e),t.include(vi,e),t.include(yi,e),e.output!==vr.Color&&e.output!==vr.Alpha||(t.include(_i,e),t.include(Xi,{linearDepth:!1}),e.offsetBackfaces&&t.include(ji),e.instancedColor&&t.attributes.add(pt.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(Si,e),t.include(qi,e),t.include(Qi,e),t.include(Ji,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(xr`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${xr.float(.001)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassTerrainEnabled?xr`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===vr.Alpha&&(t.include(ci,e),t.include(_r,e),e.multipassTerrainEnabled&&(t.fragment.include(oo),t.include(Ri,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(vo),i.add(xr`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?xr`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?xr`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:xr`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?xr`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:xr`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===vr.Color&&(t.include(ci,e),t.include(ho,e),t.include(no,e),t.include(_r,e),e.receiveShadows&&t.include(zi,e),e.multipassTerrainEnabled&&(t.fragment.include(oo),t.include(Ri,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(Li,e),t.include(mo,e),t.fragment.include(vo),i.add(xr`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?xr`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?xr`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:xr`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===Ni.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===J.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?xr`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:xr`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${xr`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===Ni.Normal||e.pbrMode===Ni.Schematic?e.viewingMode===J.Global?xr`vec3 normalGround = normalize(vpos + localOrigin);`:xr`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:xr``}
        ${e.pbrMode===Ni.Normal||e.pbrMode===Ni.Schematic?xr`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(io,e),t}re([Ui({count:vr.COUNT})],No.prototype,"output",void 0),re([Ui({count:Ye.COUNT})],No.prototype,"alphaDiscardMode",void 0),re([Ui({count:gr.COUNT})],No.prototype,"doubleSidedMode",void 0),re([Ui()],No.prototype,"isSchematic",void 0),re([Ui()],No.prototype,"vertexColors",void 0),re([Ui()],No.prototype,"offsetBackfaces",void 0),re([Ui()],No.prototype,"symbolColors",void 0),re([Ui()],No.prototype,"vvSize",void 0),re([Ui()],No.prototype,"vvColor",void 0),re([Ui()],No.prototype,"verticalOffset",void 0),re([Ui()],No.prototype,"receiveShadows",void 0),re([Ui()],No.prototype,"slicePlaneEnabled",void 0),re([Ui()],No.prototype,"sliceHighlightDisabled",void 0),re([Ui()],No.prototype,"receiveAmbientOcclusion",void 0),re([Ui()],No.prototype,"screenSizePerspective",void 0),re([Ui()],No.prototype,"textureAlphaPremultiplied",void 0),re([Ui()],No.prototype,"hasColorTexture",void 0),re([Ui()],No.prototype,"usePBR",void 0),re([Ui()],No.prototype,"hasMetalnessAndRoughnessTexture",void 0),re([Ui()],No.prototype,"hasEmissionTexture",void 0),re([Ui()],No.prototype,"hasOcclusionTexture",void 0),re([Ui()],No.prototype,"hasNormalTexture",void 0),re([Ui()],No.prototype,"instanced",void 0),re([Ui()],No.prototype,"instancedColor",void 0),re([Ui()],No.prototype,"instancedDoublePrecision",void 0),re([Ui()],No.prototype,"vertexTangents",void 0),re([Ui()],No.prototype,"normalsTypeDerivate",void 0),re([Ui()],No.prototype,"writeDepth",void 0),re([Ui()],No.prototype,"sceneHasOcludees",void 0),re([Ui()],No.prototype,"transparent",void 0),re([Ui()],No.prototype,"enableOffset",void 0),re([Ui({count:et.COUNT})],No.prototype,"cullFace",void 0),re([Ui({count:tt.COUNT})],No.prototype,"transparencyPassType",void 0),re([Ui()],No.prototype,"multipassTerrainEnabled",void 0),re([Ui()],No.prototype,"cullAboveGround",void 0),re([Ui()],No.prototype,"hasModelTransformation",void 0),re([Ui({count:rt.COUNT})],No.prototype,"customDepthTest",void 0);const Fo=Object.freeze({__proto__:null,build:Lo});class zo extends Io{initializeProgram(e){const t=zo.shader.get(),r=this.configuration,i=t.build({oitEnabled:r.transparencyPassType===tt.Color,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?Ni.Normal:Ni.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:Ti.Attribute,doubleSidedMode:gr.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?Ci.Default:Ci.None,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:fi(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Hi(e.rctx,i,ur)}}zo.shader=new Vi(Fo,(()=>import("./RealisticTree.glsl-68a31a70.js")));class Bo extends zr{constructor(e){super(e,Vo),this.supportsEdges=!0,this.techniqueConfig=new No,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Bt().vec3f(pt.POSITION).vec3f(pt.NORMAL);return e.vertexTangents&&r.vec4f(pt.TANGENT),t&&r.vec2f(pt.UV0),e.vertexColors&&r.vec4u8(pt.COLOR),e.symbolColors&&r.vec4u8(pt.SYMBOLCOLOR),r}(this.parameters),this.instanceBufferLayout=e.instanced?function(e){let t=Bt();return t=e.instancedDoublePrecision?t.vec3f(pt.MODELORIGINHI).vec3f(pt.MODELORIGINLO).mat3f(pt.MODEL).mat3f(pt.MODELNORMAL):t.mat4f(pt.MODEL).mat4f(pt.MODELNORMAL),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f(pt.INSTANCECOLOR)),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f(pt.INSTANCEFEATUREATTRIBUTE)),t}(this.parameters):null}isVisibleInPass(e){return e!==Gt.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==Gt.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==Gt.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,o=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(o||a||i)?!!n||s:r?n?l:s:o||a||i?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,g(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?et.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig.hasModelTransformation=g(this.parameters.modelTransformation),e!==vr.Color&&e!==vr.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=gr.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?gr.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?gr.WindingOrder:gr.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<ut),this.techniqueConfig}intersect(e,t,r,i,o,a,n){if(null!==this.parameters.verticalOffset){const e=i.camera;R(jo,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case J.Global:t=L(Wo,jo);break;case J.Local:t=k(Wo,$o)}let n=0;if(null!==this.parameters.verticalOffset){const r=G(Xo,jo,e.eye),i=U(r),o=z(r,r,1/i);let a=null;this.parameters.screenSizePerspective&&(a=B(t,o)),n+=function(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;o&&(a=Cr(a,i,t,o));const n=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return E(n*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,i,this.parameters.verticalOffset,a,this.parameters.screenSizePerspective)}z(t,t,n),ie(qo,t,i.transform.inverseRotation),o=G(Ho,o,qo),a=G(ko,a,qo)}yr(e,t,i,o,a,function(e){return g(e)?(ri.offset=e,ri):null}(i.verticalOffset),n)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?Vt.TRANSPARENT_MATERIAL:Vt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Vt.OPAQUE_MATERIAL)||e===Vt.DRAPED_MATERIAL}createGLMaterial(e){return e.output===vr.Color||e.output===vr.Alpha||e.output===vr.Depth||e.output===vr.Normal||e.output===vr.Shadow||e.output===vr.Highlight?new Go(e):null}createBufferWriter(){return new Uo(this.vertexBufferLayout,this.instanceBufferLayout)}}class Go extends class extends class{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,r=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(r,t),this._technique),this._technique}ensureResources(e){return Ze.LOADED}}{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=M(this._texture),this._textureNormal=M(this._textureNormal),this._textureEmissive=M(this._textureEmissive),this._textureOcclusion=M(this._textureOcclusion),this._textureMetallicRoughness=M(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?Ze.LOADED:Ze.LOADING}updateTexture(e){(l(this._texture)||e!==this._texture.id)&&(this._texture=M(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}bindTextures(e){g(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),g(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),g(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),g(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),g(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=g(this._texture)?this._texture.glTexture:null;g(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e,t){if(l(e))return void t(null);const r=this._textureRepository.acquire(e);if(w(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return M(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?zo:Io,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==vr.Color&&this._output!==vr.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const Vo={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:et.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:fe(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:rt.Less,textureAlphaMode:Ye.Blend,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...Gr};class Uo{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(pt.POSITION).length}write(e,t,r,i){!function(e,t,r,i,o,a){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),s=e.indices.get(n);if(t&&s)switch(n){case pt.POSITION:{kt(3===t.size);const e=o.getField(n,Ae);e&&ai(s,t.data,r,e,a);break}case pt.NORMAL:{kt(3===t.size);const e=o.getField(n,Ae);e&&ni(s,t.data,i,e,a);break}case pt.UV0:{kt(2===t.size);const e=o.getField(n,Se);e&&ii(s,t.data,e,a);break}case pt.COLOR:{kt(3===t.size||4===t.size);const e=o.getField(n,Ce);e&&li(s,t.data,t.size,e,a);break}case pt.SYMBOLCOLOR:{kt(3===t.size||4===t.size);const e=o.getField(n,Ce);e&&li(s,t.data,t.size,e,a);break}case pt.TANGENT:{kt(4===t.size);const e=o.getField(n,Te);e&&si(s,t.data,i,e,a);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const Ho=r(),ko=r(),$o=i(0,0,1),Wo=r(),qo=r(),jo=r(),Xo=r(),Ko=d.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Yo(e,t){const r=await async function(e,t){const r=g(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await ae(t.request(e,"json",r));if(!0===i.ok)return i.value;le(i.error),Zo(i.error.details.url)}(e,r,t);const i=await ae(ne(e,se(t)));if(!0===i.ok)return i.value.data;le(i.error),Zo(i.error)}(e,t);return{resource:r,textures:await ea(r.textureDefinitions,t)}}function Zo(e){throw new A("",`Request for object resource failed: ${e}`)}function Qo(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Ko.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ko.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ko.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Ko.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Ko.warn("Indexed geometries must specify faces"),i=!1;break}default:Ko.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Ko.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(Ko.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Jo(e){const t=de();return e.forEach((e=>{const r=e.boundingInfo;g(r)&&(oe(t,r.getBBMin()),oe(t,r.getBBMax()))})),t}async function ea(e,t){const r=[];for(const i in e){const o=e[i],a=o.images[0].data;if(!a){Ko.warn("Externally referenced texture data is not yet supported");continue}const n=o.encoding+";base64,"+a,s="/textureDefinitions/"+i,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:_t.REPEAT,t:_t.REPEAT},preMultiplyAlpha:ta(l)!==Ye.Opaque},d=g(t)&&t.disableTextures?Promise.resolve(null):Ke(n,t);r.push(d.then((e=>({refId:s,image:e,params:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),o={};for(const e of i)o[e.refId]=e;return o}function ta(e){switch(e){case"mask":return Ye.Mask;case"maskAndTransparency":return Ye.MaskBlend;case"none":return Ye.Opaque;default:return Ye.Blend}}function ra(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const ia=new qe(1,2,"wosr");function oa(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function aa(e,t,r,i){const o=e.model,a=fe(),n=new Array,s=new Map,l=new Map;return o.lods.forEach(((e,c)=>{if(void 0!==i&&c!==i)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:g(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:de()};n.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=o.materials.get(e.material),c=g(e.attributes.texCoord0),u=g(e.attributes.normal),m=function(e){switch(e){case"BLEND":return Ye.Blend;case"MASK":return Ye.Mask;case"OPAQUE":case null:case void 0:return Ye.Opaque}}(n.alphaMode);if(!s.has(i)){if(c){if(g(n.textureColor)&&!l.has(n.textureColor)){const e=o.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:m!==Ye.Opaque};l.set(n.textureColor,new pr(e.data,t))}if(g(n.textureNormal)&&!l.has(n.textureNormal)){const e=o.textures.get(n.textureNormal);l.set(n.textureNormal,new pr(e.data,e.parameters))}if(g(n.textureOcclusion)&&!l.has(n.textureOcclusion)){const e=o.textures.get(n.textureOcclusion);l.set(n.textureOcclusion,new pr(e.data,e.parameters))}if(g(n.textureEmissive)&&!l.has(n.textureEmissive)){const e=o.textures.get(n.textureEmissive);l.set(n.textureEmissive,new pr(e.data,e.parameters))}if(g(n.textureMetallicRoughness)&&!l.has(n.textureMetallicRoughness)){const e=o.textures.get(n.textureMetallicRoughness);l.set(n.textureMetallicRoughness,new pr(e.data,e.parameters))}}const a=n.color[0]**(1/Fe),d=n.color[1]**(1/Fe),h=n.color[2]**(1/Fe),p=n.emissiveFactor[0]**(1/Fe),f=n.emissiveFactor[1]**(1/Fe),v=n.emissiveFactor[2]**(1/Fe),x=g(n.textureColor)&&c?l.get(n.textureColor):null;s.set(i,new Bo({...t,transparent:m===Ye.Blend,customDepthTest:rt.Lequal,textureAlphaMode:m,textureAlphaCutoff:n.alphaCutoff,diffuse:[a,d,h],ambient:[a,d,h],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?et.None:et.Back,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:u?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:g(x)?x.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:g(n.textureNormal)&&c?l.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:g(x)&&!!x.params.preMultiplyAlpha,occlusionTextureId:g(n.textureOcclusion)&&c?l.get(n.textureOcclusion).id:void 0,emissiveTextureId:g(n.textureEmissive)&&c?l.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:g(n.textureMetallicRoughness)&&c?l.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[p,f,v],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const h=function(e,t){switch(t){case yt.TRIANGLES:return We(e);case yt.TRIANGLE_STRIP:return $e(e);case yt.TRIANGLE_FAN:return ke(e)}}(e.indices||e.attributes.position.count,e.primitiveType),p=e.attributes.position.count,f=ze(Ae,p);ge(f,e.attributes.position,e.transform);const v=[[pt.POSITION,{data:f.typedBuffer,size:f.elementCount,exclusive:!0}]],x=[[pt.POSITION,h]];if(g(e.attributes.normal)){const t=ze(Ae,p);me(a,e.transform),xe(t,e.attributes.normal,a),v.push([pt.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push([pt.NORMAL,h])}if(g(e.attributes.tangent)){const t=ze(Te,p);me(a,e.transform),Be(t,e.attributes.tangent,a),v.push([pt.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push([pt.TANGENT,h])}if(g(e.attributes.texCoord0)){const t=ze(Se,p);Ge(t,e.attributes.texCoord0),v.push([pt.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push([pt.UV0,h])}if(g(e.attributes.color)){const t=ze(Ce,p);if(4===e.attributes.color.elementCount)e.attributes.color instanceof Te?Ve(t,e.attributes.color,255):e.attributes.color instanceof Ce?Ue(t,e.attributes.color):e.attributes.color instanceof ye&&Ve(t,e.attributes.color,1/256);else{He(t,255,255,255,255);const r=new Me(t.buffer,0,4);e.attributes.color instanceof Ae?be(r,e.attributes.color,255):e.attributes.color instanceof Me?_e(r,e.attributes.color):e.attributes.color instanceof we&&be(r,e.attributes.color,1/256)}v.push([pt.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push([pt.COLOR,h])}const b=new Xt(v,x);d.stageResources.geometries.push(b),d.stageResources.materials.push(s.get(i)),c&&(g(n.textureColor)&&d.stageResources.textures.push(l.get(n.textureColor)),g(n.textureNormal)&&d.stageResources.textures.push(l.get(n.textureNormal)),g(n.textureOcclusion)&&d.stageResources.textures.push(l.get(n.textureOcclusion)),g(n.textureEmissive)&&d.stageResources.textures.push(l.get(n.textureEmissive)),g(n.textureMetallicRoughness)&&d.stageResources.textures.push(l.get(n.textureMetallicRoughness))),d.numberOfVertices+=p;const _=b.boundingInfo;g(_)&&(oe(d.boundingBox,_.getBBMin()),oe(d.boundingBox,_.getBBMax()))}))})),n}var na=Object.freeze({__proto__:null,fetch:async function(t,i){const o=oa(e(t));if("wosr"===o.fileType){const e=await(i.cache?i.cache.loadWOSR(o.url,i):Yo(o.url,i)),t=function(e,t){const r=[],i=[],o=[],a=[],n=e.resource,s=qe.parse(n.version||"1.0","wosr");ia.validate(s);const l=n.model.name,c=n.model.geometries,d=n.materialDefinitions,u=e.textures;let m=0;const h=new Map;for(let e=0;e<c.length;e++){const n=c[e];if(!Qo(n))continue;const s=ra(n),l=n.params.vertexAttributes,p=[];for(const e in l){const t=l[e],r=t.values;p.push([e,{data:r,size:t.valuesPerElement,exclusive:!0}])}const f=[];if("PerAttributeArray"!==n.params.topology){const e=n.params.faces;for(const t in e)f.push([t,new Uint32Array(e[t].values)])}const v=u&&u[s.texture];if(v&&!h.has(s.texture)){const{image:e,params:t}=v,r=new pr(e,t);a.push(r),h.set(s.texture,r)}const x=h.get(s.texture),b=x?x.id:void 0;let _=o[s.material]?o[s.material][s.texture]:null;if(!_){const e=d[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=v&&v.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,a=v?ta(v.alphaChannelUsage):void 0,n={ambient:ce(e.diffuse),diffuse:ce(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:et.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!v&&!!v.params.preMultiplyAlpha};g(t)&&t.materialParamsMixin&&Object.assign(n,t.materialParamsMixin),_=new Bo(n),o[s.material]||(o[s.material]={}),o[s.material][s.texture]=_}i.push(_);const T=new Xt(p,f);m+=f.position?f.position.length:0,r.push(T)}return{name:l,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,boundingBox:Jo(r),numberOfVertices:m,lodThreshold:null}}(e,i);return{lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const n=await(i.cache?i.cache.loadGLTF(o.url,i,i.usePBR):Ne(new Le(i.streamDataRequester),o.url,i,i.usePBR)),s=ue(n.model.meta,"ESRI_proxyEllipsoid");n.meta.isEsriSymbolResource&&g(s)&&-1!==n.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let i=0;i<e.model.lods.length;++i){const o=e.model.lods[i];e.customMeta.esriTreeRendering=!0;for(const n of o.parts){const o=n.attributes.normal;if(l(o))return;const s=n.attributes.position,c=s.count,d=r(),u=r(),m=r(),h=ze(Ce,c),p=ze(Ae,c),f=he(ve(),n.transform);for(let r=0;r<c;r++){s.getVec(r,u),o.getVec(r,d),W(u,u,n.transform),G(m,u,t.center),pe(m,m,t.radius);const l=m[2],c=U(m),v=Math.min(.45+.55*c*c,1);pe(m,m,t.radius),W(m,m,f),L(m,m),i+1!==e.model.lods.length&&e.model.lods.length>1&&a(m,m,d,l>-1?.2:Math.min(-4*l-3.8,1)),p.setVec(r,m),h.set(r,0,255*v),h.set(r,1,255*v),h.set(r,2,255*v),h.set(r,3,255)}n.attributes.normal=p,n.attributes.color=h}}}(n,s);const c=n.meta.isEsriSymbolResource?{usePBR:i.usePBR,isSchematic:!1,treeRendering:n.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:i.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},d={...i.materialParamsMixin,treeRendering:n.customMeta.esriTreeRendering};if(null!=o.specifiedLodIndex){const e=aa(n,c,d,o.specifiedLodIndex);let t=e[0].boundingBox;return 0!==o.specifiedLodIndex&&(t=aa(n,c,d,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}}const u=aa(n,c,d);return{lods:u,referenceBoundingBox:u[0].boundingBox,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}},gltfToEngineResources:aa,parseUrl:oa});export{Po as $,Lo as _,na as o};
