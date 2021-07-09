import{dh as e,$ as t,a7 as r,fr as i,iL as o,iM as a,g0 as n,t as s,gi as l,n as c,d,w as u,hs as m,iD as p,gg as h,iK as f,r as v,aW as g,iN as x,v as b,m as y,bv as T,f$ as _,a as w,iO as S,Q as C,a0 as M,f6 as A,f0 as P,e$ as O,a2 as F,f5 as D,f9 as I,f7 as z,a1 as L,f4 as R,gv as E,ff as N,fi as B,fa as V,iP as H,iQ as U,iR as G,gu as $,s as k,fg as q,c as W,bs as j,V as X,fy as K,cx as Q,L as Y,bq as Z,cw as J,iS as ee,iT as te,dy as re,fA as ie,fh as oe,iU as ae}from"../main.js";import{a as ne}from"./quat-b6fca267.js";import{e as se,a as le,f as ce,r as de,c as ue}from"./vec33-f194b55c.js";import{a as me,q as pe,w as he,h as fe,B as ve}from"./aaBoundingBox-d4112f99.js";import{c as ge,x as xe,u as be,i as ye,L as Te,O as _e,E as we}from"./BufferView-b63b0231.js";import{m as Se,u as Ce,p as Me,s as Ae,q as Pe,a as Oe,v as Fe,w as De,l as Ie,n as ze,o as Le,r as Re,b as Ee,c as Ne,f as Be,e as Ve,t as He,i as Ue,h as Ge,j as $e}from"./DefaultMaterial_COLOR_GAMMA-c3f49d1e.js";import{r as ke}from"./Version-9fa2d82f.js";import{t as qe,n as We}from"./requestImageUtils-c14d18f6.js";import{a as je}from"./vec4-ac1010c8.js";import{r as Xe,n as Ke}from"./Texture-ab78374c.js";import{a as Qe,f as Ye,h as Ze,o as Je,r as et,b as tt,d as rt,n as it,g as ot,i as at,j as nt,s as st,l as lt,k as ct}from"./VertexArrayObject-2eb4b3e8.js";import{A as dt}from"./InterleavedLayout-b6c208af.js";import{t as ut}from"./vec3f32-3e4e3394.js";import{r as mt}from"./mat4f32-bd01a79c.js";class pt{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function ht(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new pt(t)}}function ft(e,t=0){let r=0;for(let i=0;i<4;i++)r+=e[t+i]*vt[i];return r}const vt=[1/256,1/65536,1/16777216,1/4294967296];ft(new Uint8ClampedArray([255,255,255,255]));class gt{constructor(e,a,n,s){this.primitiveIndices=e,this._numIndexPerPrimitive=a,this.indices=n,this.position=s,this.center=t(),ht(e.length>=1),ht(n.length%this._numIndexPerPrimitive==0),ht(n.length>=e.length*this._numIndexPerPrimitive),ht(3===s.size||4===s.size);const{data:l,size:c}=s,d=e.length;let u=c*n[this._numIndexPerPrimitive*e[0]];xt.clear(),xt.push(u),this.bbMin=r(l[u],l[u+1],l[u+2]),this.bbMax=i(this.bbMin);for(let t=0;t<d;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){u=c*n[r+e],xt.push(u);let t=l[u];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=l[u+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=l[u+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}o(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let e=0;e<xt.length;++e){u=xt.getItemAt(e);const t=l[u]-this.center[0],r=l[u+1]-this.center[1],i=l[u+2]-this.center[2],o=t*t+r*r+i*i;if(o<=m)continue;const a=Math.sqrt(o),n=.5*(a-this.radius);this.radius=this.radius+n,m=this.radius*this.radius;const s=n/a;this.center[0]+=t*s,this.center[1]+=r*s,this.center[2]+=i*s}xt.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(a(this.bbMin,this.bbMax)>1){const e=o(t(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),a=new Array(8);for(let e=0;e<8;++e)a[e]=0;const{data:n,size:s}=this.position;for(let t=0;t<r;++t){let r=0;const o=this._numIndexPerPrimitive*this.primitiveIndices[t];let l=s*this.indices[o],c=n[l],d=n[l+1],u=n[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=s*this.indices[o+e];const t=n[l],r=n[l+1],i=n[l+2];t<c&&(c=t),r<d&&(d=r),i<u&&(u=i)}c<e[0]&&(r|=1),d<e[1]&&(r|=2),u<e[2]&&(r|=4),i[t]=r,++a[r]}let l=0;for(let e=0;e<8;++e)a[e]>0&&++l;if(l<2)return;const c=new Array(8);for(let e=0;e<8;++e)c[e]=a[e]>0?new Uint32Array(a[e]):void 0;for(let e=0;e<8;++e)a[e]=0;for(let e=0;e<r;++e){const t=i[e];c[t][a[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==c[e]&&(this._children[e]=new gt(c[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){xt.prune()}}const xt=new e({deallocator:null});class bt{constructor(){this.id=n()}unload(){}}class yt extends bt{constructor(e,t=[],r=0,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,r]of e)r&&this._vertexAttributes.set(t,{...r});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=Se(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,r]of t)r&&(this._indices.set(e,Tt(r)),"position"===e&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return s(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return Ce(r,t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return Me(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;ht(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=Se(e.length/t),i=this.vertexAttributes.get("position");return new gt(r,t,e,i)}}function Tt(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}let _t,wt=null,St=null;async function Ct(){return s(St)&&(St=function(){if(s(_t)){const e=e=>l(`esri/libs/basisu/${e}`);_t=import("./basis_transcoder-69e5967d.js").then((function(e){return e.b})).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return _t}(),wt=await St),St}function Mt(e,t,r,i,o){const a=Qe(t?37496:37492),n=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*a*n)}function At(e){return e.getNumImages()>=1&&!e.isUASTC()}function Pt(e){return e.getFaces()>=1&&e.isETC1S()}function Ot(e,t,r,i,o,a,n,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[1,37496]:[0,37492]:c?i?[3,33779]:[2,33776]:[13,6408],m=t.hasMipmap?r:Math.min(1,r),p=[];for(let e=0;e<m;e++)p.push(new Uint8Array(n(e,d))),s(e,d,p[e]);const h=p.length>1,f=h?9987:9729,v={...t,samplingMode:f,hasMipmap:h,internalFormat:u,width:o,height:a};return new Xe(e,v,{type:"compressed",levels:p})}const Ft=c.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Dt(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const It=Dt("DXT1"),zt=Dt("DXT3"),Lt=Dt("DXT5");function Rt(e,t,r){const{textureData:i,internalFormat:o,width:a,height:n}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Ft.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Ft.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,a;switch(i){case It:o=8,a=33776;break;case zt:o=16,a=33778;break;case Lt:o=16,a=33779;break;default:return Ft.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let n=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(Ft.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,u=l;let m,p;131072&r[2]&&!1!==t&&(n=Math.max(1,r[7])),1===n||d(s)&&d(l)||(Ft.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let h=r[1]+4;const f=[];for(let t=0;t<n;++t)p=(s+3>>2)*(l+3>>2)*o,m=new Uint8Array(e,h,p),f.push(m),h+=p,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:a,width:c,height:u}}(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=o,t.width=a,t.height=n,new Xe(e,t,i)}const Et=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),Nt=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Bt=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];class Vt extends bt{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new u,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Vt.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;s(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){m(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){p(e.src)||m(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(s(e))return 0;if(h(e)||f(e))return t.encoding===Vt.KTX2_ENCODING?function(e,t){if(s(wt))return e.byteLength;const r=new wt.KTX2File(new Uint8Array(e)),i=Pt(r)?Mt(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===Vt.BASIS_ENCODING?function(e,t){if(s(wt))return e.byteLength;const r=new wt.BasisFile(new Uint8Array(e)),i=At(r)?Mt(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Vt.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}load(e,t){if(v(this.glTexture))return this.glTexture;if(v(this.loadingPromise))return this.loadingPromise;const r=this.data;return s(r)?(this.glTexture=new Xe(e,this.createDescriptor(e),null),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(h(r)||f(r))&&this.params.encoding===Vt.DDS_ENCODING?this.loadFromDDSData(e,r):(h(r)||f(r))&&this.params.encoding===Vt.KTX2_ENCODING?this.loadFromKTX2(e,r):(h(r)||f(r))&&this.params.encoding===Vt.BASIS_ENCODING?this.loadFromBasis(e,r):f(r)?this.loadFromPixelData(e,r):h(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||s(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(v(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this.powerOfTwoStretchInfo;o.setData(this.data),this.drawStretchedTexture(e,t,r,i,o,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=Rt(e,this.createDescriptor(e),t),this.glTexture}loadFromKTX2(e,t){return this.loadAsync((()=>async function(e,t,r){s(wt)&&(wt=await Ct());const i=new wt.KTX2File(new Uint8Array(r));if(!Pt(i))return null;i.startTranscoding();const o=Ot(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}(e,this.createDescriptor(e),t).then((e=>(this.glTexture=e,e)))))}loadFromBasis(e,t){return this.loadAsync((()=>async function(e,t,r){s(wt)&&(wt=await Ct());const i=new wt.BasisFile(new Uint8Array(r));if(!At(i))return null;i.startTranscoding();const o=Ot(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}(e,this.createDescriptor(e),t).then((e=>(this.glTexture=e,e)))))}loadFromPixelData(e,t){ht(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new Xe(e,r,t),this.glTexture}loadAsync(e){const t=g();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync((async i=>{const o=await qe(r,{signal:i});return this.loadFromImage(e,o,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const o=await x(r,r.src,!1,i);return this.loadFromImage(e,o,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((i=>new Promise(((o,a)=>{const n=()=>{r.removeEventListener("loadeddata",s),r.removeEventListener("error",l),v(c)&&c.remove()},s=()=>{r.readyState>=2&&(n(),o(this.loadFromImage(e,r,t)))},l=e=>{n(),a(e||new w("Failed to load video"))};r.addEventListener("loadeddata",s),r.addEventListener("error",l);const c=b(i,(()=>l(y())))}))))}loadFromImage(e,t,r){const i=Vt.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this.createDescriptor(e);return o.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,o)||d(i.width)&&d(i.height)?(o.width=i.width,o.height=i.height,this.glTexture=new Xe(e,o,t),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,o,r),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Ke(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,o){const{width:a,height:n}=r,s=T(a),l=T(n);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[a/s,n/l],c=new Xe(e,i),c.updateData(0,0,0,a,n,t);break;case 1:case null:case void 0:c=this.stretchToPowerOfTwo(e,t,i,o);break;default:_(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&c.generateMipmap(),c}stretchToPowerOfTwo(e,t,r,i){const o=new Xe(e,r),a=new Je(e,{colorTarget:0,depthStencilTarget:0},o),n=new Xe(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=Nt,r=Et,i=-1,o=1){let a=null;switch(t){case Bt:a=new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]);break;case Nt:default:a=new Float32Array([i,i,o,i,i,o,o,o])}return new Ye(e,r,{geometry:t},{geometry:Ze.createVertex(e,35044,a)})}(e);return this.drawStretchedTexture(e,i,a,s,n,o),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:a}:(s.dispose(!0),n.dispose(),a.detachColorTexture(),e.bindFramebuffer(null),a.dispose()),o}drawStretchedTexture(e,t,r,i,o,a){e.bindFramebuffer(r);const n=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=t.program;e.useProgram(s),s.setUniform4f("color",1,1,1,1),s.bindTexture(o,"tex"),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,et(i,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if(v(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(v(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),v(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Ht(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}Vt.DDS_ENCODING="image/vnd-ms.dds",Vt.KTX2_ENCODING="image/ktx2",Vt.BASIS_ENCODING="image/x.basis",function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(Ht||(Ht={}));function Ut(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(Ht`
        #define discardOrAdjustAlpha(color) { if (color.a < ${Ht.float(.001)}) { discard; } }
      `);break;case 1:r.code.add(Ht`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(Ht`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(Ht`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}const Gt=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class $t extends(Gt(class{})){}class kt extends $t{constructor(e){super(),this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}get technique(){return this._technique}getPipelineState(e,t){return this.technique.pipeline}ensureResources(e){return 2}ensureParameters(e){}}class qt extends kt{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquire(this._textureId),this._textureNormal=this._acquire(e.normalTextureId),this._textureEmissive=this._acquire(e.emissiveTextureId),this._textureOcclusion=this._acquire(e.occlusionTextureId),this._textureMetallicRoughness=this._acquire(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._release(this._textureId),this._textureId=e,this._texture=this._acquire(this._textureId))}bindTextures(e){v(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),v(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),v(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),v(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),v(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=v(this._texture)&&this._texture.glTexture;t&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){if(!s(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_release(e){s(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}}function Wt(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return Xt.scale=Math.min(i.divisor/(t-i.offset),1),Xt.factor=function(e){return Math.abs(e*e*e)}(e),Xt.minPixelSize=i.minPixelSize,Xt.paddingPixels=o,Xt}function jt(e,t,r,i){return function(e,t){return Math.max(S(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,Wt(t,r,i))}const Xt={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function Kt(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}const Qt=new Float64Array(1),Yt=new Float32Array(2);const Zt=me();function Jt(e,t,r,i,o,a,n){if(!function(e){return!!v(e)&&!e.visible}(t))if(e.boundingInfo){ht(0===e.primitiveType);const t=r.tolerance;tr(e.boundingInfo,i,o,t,a,n)}else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");ir(i,o,0,t.length/3,t,r,void 0,a,n)}}const er=t();function tr(e,t,r,i,o,a){if(s(e))return;const n=function(e,t,r){return M(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,er);if(pe(Zt,e.getBBMin()),he(Zt,e.getBBMax()),v(o)&&o.applyToAabb(Zt),function(e,t,r,i){return function(e,t,r,i,o){const a=(e[0]-i-t[0])*r[0],n=(e[3]+i-t[0])*r[0];let s=Math.min(a,n),l=Math.max(a,n);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],m=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,m)),!(l<0)&&(s=Math.max(s,Math.min(u,m)),!(s>l)&&s<o)}(e,t,r,i,1/0)}(Zt,t,n,i)){const{primitiveIndices:n,indices:s,position:l}=e,c=n?n.length:s.length/3;if(c>dr){const n=e.getChildren();if(void 0!==n){for(let e=0;e<8;++e)void 0!==n[e]&&tr(n[e],t,r,i,o,a);return}}ir(t,r,0,c,s,l,n,o,a)}}const rr=t();function ir(e,t,r,i,o,a,n,s,l){if(n)return function(e,t,r,i,o,a,n,s,l){const c=a.data,d=a.stride||a.size,u=e[0],m=e[1],p=e[2],h=t[0]-u,f=t[1]-m,g=t[2]-p;for(let e=r;e<i;++e){const t=n[e];let r=3*t,i=d*o[r++],a=c[i++],x=c[i++],b=c[i];i=d*o[r++];let y=c[i++],T=c[i++],_=c[i];i=d*o[r];let w=c[i++],S=c[i++],C=c[i];v(s)&&([a,x,b]=s.applyToVertex(a,x,b,e),[y,T,_]=s.applyToVertex(y,T,_,e),[w,S,C]=s.applyToVertex(w,S,C,e));const M=y-a,A=T-x,P=_-b,O=w-a,F=S-x,D=C-b,I=f*D-F*g,z=g*O-D*h,L=h*F-O*f,R=M*I+A*z+P*L;if(Math.abs(R)<=Number.EPSILON)continue;const E=u-a,N=m-x,B=p-b,V=E*I+N*z+B*L;if(R>0){if(V<0||V>R)continue}else if(V>0||V<R)continue;const H=N*P-A*B,U=B*M-P*E,G=E*A-M*N,$=h*H+f*U+g*G;if(R>0){if($<0||V+$>R)continue}else if($>0||V+$<R)continue;const k=(O*H+F*U+D*G)/R;k>=0&&l(k,nr(M,A,P,O,F,D,rr),t)}}(e,t,r,i,o,a,n,s,l);const c=a.data,d=a.stride||a.size,u=e[0],m=e[1],p=e[2],h=t[0]-u,f=t[1]-m,g=t[2]-p;for(let e=r,t=3*r;e<i;++e){let r=d*o[t++],i=c[r++],a=c[r++],n=c[r];r=d*o[t++];let x=c[r++],b=c[r++],y=c[r];r=d*o[t++];let T=c[r++],_=c[r++],w=c[r];v(s)&&([i,a,n]=s.applyToVertex(i,a,n,e),[x,b,y]=s.applyToVertex(x,b,y,e),[T,_,w]=s.applyToVertex(T,_,w,e));const S=x-i,C=b-a,M=y-n,A=T-i,P=_-a,O=w-n,F=f*O-P*g,D=g*A-O*h,I=h*P-A*f,z=S*F+C*D+M*I;if(Math.abs(z)<=Number.EPSILON)continue;const L=u-i,R=m-a,E=p-n,N=L*F+R*D+E*I;if(z>0){if(N<0||N>z)continue}else if(N>0||N<z)continue;const B=R*M-C*E,V=E*S-M*L,H=L*C-S*R,U=h*B+f*V+g*H;if(z>0){if(U<0||N+U>z)continue}else if(U>0||N+U<z)continue;const G=(A*B+P*V+O*H)/z;G>=0&&l(G,nr(S,C,M,A,P,O,rr),e)}}const or=t(),ar=t();function nr(e,t,r,i,o,a,n){return M(or,e,t,r),M(ar,i,o,a),A(n,or,ar),P(n,n),n}function sr(e,t){const r=t?sr(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=lr(i)),null==i&&t in r||(r[t]=i)}return r}function lr(e){const t=[];return e.forEach((e=>t.push(e))),t}const cr={multiply:1,ignore:2,replace:3,tint:4},dr=1e3;class ur extends bt{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Et,this._params=sr(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){(function(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(r=!0,Array.isArray(o)?e[i]=o.slice():e[i]=o)}return r})(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){v(this.materialRepository)&&this.materialRepository.materialChanged(this)}}const mr=tt(770,1,771,771),pr=rt(1,1),hr=rt(0,771);function fr(e){return 2===e?null:1===e?hr:pr}const vr={factor:-1,units:-2};function gr(e){return e?vr:null}function xr(e){return 3===e||2===e?513:515}new Ae((function(){return{origin:null,direction:null}}));const br=c.getLogger("esri.geometry.support.sphere");function yr(){return Pe()}function Tr(e,t=yr()){return je(t,e)}function _r(e){return Array.isArray(e)?e[3]:e}function wr(e){return Array.isArray(e)?e:Dr}function Sr(e,t,r){if(s(t))return!1;const i=I(Fe.get(),t.origin,wr(e)),o=D(t.direction,t.direction),a=2*D(t.direction,i),n=a*a-4*o*(D(i,i)-e[3]*e[3]);if(n<0)return!1;const l=Math.sqrt(n);let c=(-a-l)/(2*o);const d=(-a+l)/(2*o);return(c<0||d<c&&d>0)&&(c=d),!(c<0||(r&&O(r,t.origin,F(Fe.get(),t.direction,c)),0))}function Cr(e,t,r){const i=Fe.get(),o=De.get();A(i,t.origin,t.direction);const a=_r(e);A(r,i,t.origin),F(r,r,1/L(r)*a);const n=Ar(e,t.origin),s=function(e,t){const r=D(e,t)/(L(e)*L(t));return-z(r)}(t.origin,r);return E(o),N(o,o,s+n,i),B(r,r,o),r}function Mr(e,t,r){const i=I(Fe.get(),t,wr(e)),o=F(Fe.get(),i,e[3]/L(i));return O(r,o,wr(e))}function Ar(e,t){const r=I(Fe.get(),t,wr(e)),i=L(r),o=_r(e),a=o+Math.abs(o-i);return z(o/a)}const Pr=t();function Or(e,t,r,i){const o=I(Pr,t,wr(e));switch(r){case 0:{const e=U(o,Pr)[2];return M(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=U(o,Pr),t=e[1],r=e[2],a=Math.sin(t);return M(i,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case 2:return P(i,o);default:return}}function Fr(e,t){const r=I(Ir,t,wr(e));return L(r)-e[3]}const Dr=t(),Ir=t();Object.freeze({__proto__:null,create:yr,copy:Tr,fromCenterAndRadius:function(e,t){return Oe(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:_r,getCenter:wr,fromValues:function(e,t,r,i){return Oe(e,t,r,i)},elevate:function(e,t,r){return e!==r&&R(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return br.error("sphere.setExtent is not yet supported"),e===r?r:Tr(e,r)},intersectRay:Sr,intersectsRay:function(e,t){return Sr(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(Sr(e,t,r))return r;const i=Cr(e,t,Fe.get());return O(r,t.origin,F(Fe.get(),t.direction,V(t.origin,i)/L(t.direction))),r},closestPointOnSilhouette:Cr,closestPoint:function(e,t,r){return Sr(e,t,r)?r:(function(e,t,r){const i=D(e.direction,I(r,t,e.origin));O(r,e.origin,F(r,e.direction,i))}(t,wr(e),r),Mr(e,r,r))},projectPoint:Mr,distanceToSilhouette:function(e,t){const r=I(Fe.get(),t,wr(e)),i=H(r),o=e[3]*e[3];return Math.sqrt(Math.abs(i-o))},angleToSilhouette:Ar,axisAt:Or,altitudeAt:Fr,setAltitudeAt:function(e,t,r,i){const o=Fr(e,t),a=Or(e,t,2,Ir),n=F(Ir,a,r-o);return O(i,t,n)}});const zr=new class{constructor(e=0){this.offset=e,this.sphere=yr(),this.tmpVertex=t()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],a=i[1]*e+i[5]*t+i[9]*r+i[13],n=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+a*a+n*n);o+=o*s,a+=a*s,n+=n*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*a+l[8]*n+l[12],this.tmpVertex[1]=l[1]*o+l[5]*a+l[9]*n+l[13],this.tmpVertex[2]=l[2]*o+l[6]*a+l[10]*n+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function Lr(e,t,r,i){const o=r.typedBuffer,a=r.typedBufferStride,n=e.length;i*=a;for(let r=0;r<n;++r){const n=2*e[r];o[i]=t[n],o[i+1]=t[n+1],i+=a}}function Rr(e,t,r,i,o){const a=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,null==o||1===o)for(let r=0;r<s;++r){const o=3*e[r];a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],i+=n}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<o;++e)a[i]=t[s],a[i+1]=t[s+1],a[i+2]=t[s+2],i+=n}}function Er(e,t,r,i,o,a=1){if(!r)return void Rr(e,t,i,o,a);const n=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=r[0],d=r[1],u=r[2],m=r[4],p=r[5],h=r[6],f=r[8],v=r[9],g=r[10],x=r[12],b=r[13],y=r[14];if(o*=s,1===a)for(let r=0;r<l;++r){const i=3*e[r],a=t[i],l=t[i+1],T=t[i+2];n[o]=c*a+m*l+f*T+x,n[o+1]=d*a+p*l+v*T+b,n[o+2]=u*a+h*l+g*T+y,o+=s}else for(let r=0;r<l;++r){const i=3*e[r],l=t[i],T=t[i+1],_=t[i+2],w=c*l+m*T+f*_+x,S=d*l+p*T+v*_+b,C=u*l+h*T+g*_+y;for(let e=0;e<a;++e)n[o]=w,n[o+1]=S,n[o+2]=C,o+=s}}function Nr(e,t,r,i,o,a=1){if(!r)return void Rr(e,t,i,o,a);const n=r,s=i.typedBuffer,l=i.typedBufferStride,c=e.length,d=n[0],u=n[1],m=n[2],p=n[4],h=n[5],f=n[6],v=n[8],g=n[9],x=n[10],b=!G(n),y=1e-6,T=1-y;if(o*=l,1===a)for(let r=0;r<c;++r){const i=3*e[r],a=t[i],n=t[i+1],c=t[i+2];let _=d*a+p*n+v*c,w=u*a+h*n+g*c,S=m*a+f*n+x*c;if(b){const e=_*_+w*w+S*S;if(e<T&&e>y){const t=1/Math.sqrt(e);_*=t,w*=t,S*=t}}s[o+0]=_,s[o+1]=w,s[o+2]=S,o+=l}else for(let r=0;r<c;++r){const i=3*e[r],n=t[i],c=t[i+1],_=t[i+2];let w=d*n+p*c+v*_,S=u*n+h*c+g*_,C=m*n+f*c+x*_;if(b){const e=w*w+S*S+C*C;if(e<T&&e>y){const t=1/Math.sqrt(e);w*=t,S*=t,C*=t}}for(let e=0;e<a;++e)s[o+0]=w,s[o+1]=S,s[o+2]=C,o+=l}}function Br(e,t,r,i,o,a=1){if(!r)return void function(e,t,r,i,o=1){const a=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,1===o)for(let r=0;r<s;++r){const o=4*e[r];a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],a[i+3]=t[o+3],i+=n}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<o;++e)a[i]=t[s],a[i+1]=t[s+1],a[i+2]=t[s+2],a[i+3]=t[s+3],i+=n}}(e,t,i,o,a);const n=r,s=i.typedBuffer,l=i.typedBufferStride,c=e.length,d=n[0],u=n[1],m=n[2],p=n[4],h=n[5],f=n[6],v=n[8],g=n[9],x=n[10],b=!G(n),y=1e-6,T=1-y;if(o*=l,1===a)for(let r=0;r<c;++r){const i=4*e[r],a=t[i],n=t[i+1],c=t[i+2],_=t[i+3];let w=d*a+p*n+v*c,S=u*a+h*n+g*c,C=m*a+f*n+x*c;if(b){const e=w*w+S*S+C*C;if(e<T&&e>y){const t=1/Math.sqrt(e);w*=t,S*=t,C*=t}}s[o+0]=w,s[o+1]=S,s[o+2]=C,s[o+3]=_,o+=l}else for(let r=0;r<c;++r){const i=4*e[r],n=t[i],c=t[i+1],_=t[i+2],w=t[i+3];let S=d*n+p*c+v*_,C=u*n+h*c+g*_,M=m*n+f*c+x*_;if(b){const e=S*S+C*C+M*M;if(e<T&&e>y){const t=1/Math.sqrt(e);S*=t,C*=t,M*=t}}for(let e=0;e<a;++e)s[o+0]=S,s[o+1]=C,s[o+2]=M,s[o+3]=w,o+=l}}function Vr(e,t,r,i,o,a=1){const n=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,1===a){if(4===r)for(let r=0;r<l;++r){const i=4*e[r];n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=t[i+3],o+=s}else if(3===r)for(let r=0;r<l;++r){const i=3*e[r];n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=255,o+=s}}else if(4===r)for(let r=0;r<l;++r){const i=4*e[r];for(let e=0;e<a;++e)n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=t[i+3],o+=s}else if(3===r)for(let r=0;r<l;++r){const i=3*e[r];for(let e=0;e<a;++e)n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=255,o+=s}}function Hr(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=Ht`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=Ht`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.sliceHighlightDisabled?Ht`#define highlightSlice(_color_, _pos_) (_color_)`:Ht`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(o)}else{const r=Ht`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}const Ur=t();class Gr{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,We(e).then((e=>this.svgAlwaysPremultipliesAlpha=!e))}get doublePrecisionRequiresObfuscation(){if(s(this._doublePrecisionRequiresObfuscation)){const e=kr(this.context,!1),t=kr(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let $r=null;function kr(e,t){const i=new Je(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const o=Ze.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),a=new Ye(e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:o}),n=r(5633261.287538229,2626832.878767164,1434988.0495278358),s=r(5633271.46742708,2626873.6381334523,1434963.231608387),l=function(r,i){const o=new it(e,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),a=new Float32Array(6);Kt(r,a,3);const n=new Float32Array(6);return Kt(i,n,3),e.useProgram(o),o.setUniform3f("u_highA",a[0],a[2],a[4]),o.setUniform3f("u_lowA",a[1],a[3],a[5]),o.setUniform3f("u_highB",n[0],n[2],n[4]),o.setUniform3f("u_lowB",n[1],n[3],n[5]),o}(n,s),c=e.getBoundFramebufferObject(),{x:d,y:u,width:m,height:p}=e.getViewport();e.bindFramebuffer(i),e.setViewport(0,0,1,1),e.bindVAO(a),e.drawArrays(5,0,4);const h=new Uint8Array(4);i.readPixels(0,0,1,1,6408,5121,h),l.dispose(),a.dispose(!1),o.dispose(),i.dispose(),e.setViewport(d,u,m,p),e.bindFramebuffer(c);const f=(n[2]-s[2])/25,v=ft(h);return Math.abs(f-v)}function qr({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(Ht`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(Ht`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function Wr(e){return!!k("force-double-precision-obfuscation")||function(e){return(s($r)||$r.context!==e)&&($r=new Gr(e)),$r}(e).doublePrecisionRequiresObfuscation}function jr(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(qr,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[Ht`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,Ht`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?Ht`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,Ht`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,Ht`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?Ht`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:Ht``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,t){(function(e,t,r,i){for(let o=0;o<i;++o)Qt[0]=e[o],Kt(Qt,Yt,1),t[o]=Yt[0],r[o]=Yt[1]})(t,Xr,Kr,3),e.setUniform3fv("viewOriginHi",Xr),e.setUniform3fv("viewOriginLo",Kr)}}(jr||(jr={}));const Xr=t(),Kr=t();function Qr(e){e.vertex.code.add(Ht`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`),e.vertex.code.add(Ht`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(Ht`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(Ht`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(Ht`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(Ht`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),e.vertex.code.add(Ht`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Yr(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(Qr),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(Ht`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?Ht`vec3 worldNormal = normalize(worldPos + localOrigin);`:Ht`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?Ht`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:Ht`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(Ht`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function Zr(e,t,r){if(!t.verticalOffset)return;const i=function(e,t,r,i=Jr){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*o,i.perDistance,i.minWorldLength,i.maxWorldLength)}const Jr={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},ei=Oe(1,1,0,1),ti=Oe(1,0,1,1);function ri(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",ei).add("unoccludedHighlightFlag","vec4",ti),e.fragment.code.add(Ht`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function ii(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(Ht`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function oi(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(Ht`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(Ht`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(Ht`void forwardTextureCoordinates() {}`)}function ai(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Ht`#ifndef GL_EXT_shader_texture_lod
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
}`)}function ni(e,t){e.include(oi,t),e.fragment.code.add(Ht`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(Ht`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(ai),e.fragment.code.add(Ht`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}function si(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(ni,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(Ht`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(Ht`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(Ht`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(Ht`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(Ht`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(Ht`float getBakedOcclusion() { return 1.0; }`),r.code.add(Ht`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(Ht`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function li(e){e.code.add(Ht`const float MAX_RGBA_FLOAT =
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
}`)}function ci(e){e.fragment.include(li),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(Ht`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
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
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function di(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(Ht`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(Ht`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?Ht`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(Ht`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(Ht`
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

      ${t.vvInstancingEnabled?Ht`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(Ht`vec4 vvColor() { return vec4(1.0); }`)}ut(0,.6,.2);const ui=mt();class mi{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function pi(e={}){return(t,r)=>{var i,o;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const a=t._parameterNames.length-1,n=e.count||2,s=Math.ceil(j(n)),l=null!=(o=t._parameterBits)?o:[0];let c=0;for(;l[c]+s>16;)c++,c>=l.length&&l.push(0);t._parameterBits=l;const d=l[c],u=(1<<s)-1<<d;l[c]+=s,Object.defineProperty(t,r,{get(){return this[a]},set(e){if(this[a]!==e&&(this[a]=e,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}class hi extends it{constructor(t,r,i){super(t,r.generateSource("vertex"),r.generateSource("fragment"),i),this._textures=new Map,this._freeTextureUnits=new e({deallocator:null}),this._fragmentUniforms=ot()?r.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(s(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),v(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const fi={mask:255},vi={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},gi={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};function xi(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(Ht`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(Ht`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(Ht`void forwardLinearDepth() {}`)}function bi(e){e.vertex.code.add(Ht`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function yi(e,t){t.linearDepth?e.vertex.code.add(Ht`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(Ht`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Ti(e){const t=Ht`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function _i(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(Ht`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(Ti),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(Ht`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Ht`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}function wi(e){e.attributes.add("position","vec3"),e.vertex.code.add(Ht`vec3 positionModel() { return position; }`)}function Si(e){e.vertex.code.add(Ht`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${Ht.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${Ht.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${Ht.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${Ht.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ci(e,t){t.symbolColor?(e.include(Si),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(Ht`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(Ht`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function Mi(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(Ht`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(Ht`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(Ht`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Ai(e,t){e.include(wi),e.vertex.include(qr,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(Ht`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(Ht`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function Pi(e,t){0===t.normalType||1===t.normalType?(e.include(_i,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(Ht`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(Ai,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(Ht`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?Ht`normalize(vPositionWorldCameraRelative);`:Ht`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(Ht`void forwardNormal() {}`)}function Oi(e,t){e.fragment.include(li),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Ht`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===t.output&&e.fragment.code.add(Ht`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function Fi(e,t){const r=e.vertex.code,i=e.fragment.code;1!==t.output&&3!==t.output||(e.include(yi,{linearDepth:!0}),e.include(oi,t),e.include(di,t),e.include(Oi,t),e.include(Hr,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(Ht`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(Ut,t),i.add(Ht`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?Ht`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(yi,{linearDepth:!1}),e.include(_i,t),e.include(Pi,t),e.include(oi,t),e.include(di,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(Ht`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?Ht`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(Hr,t),e.include(Ut,t),i.add(Ht`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?Ht`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?Ht`
            vec3 normal = screenDerivativeNormal(vPositionView);`:Ht`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(yi,{linearDepth:!1}),e.include(oi,t),e.include(di,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(Ht`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(Hr,t),e.include(Ut,t),e.include(ri),i.add(Ht`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?Ht`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function Di(e){e.include(li),e.code.add(Ht`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function Ii(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(Ht`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(Ht`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(Ht`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),0!==t.attributeTextureCoordinates&&(e.include(ni,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(Ht`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function zi(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(Ht`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(Ht`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function Li(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(Ht`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(Ht`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===i&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(Ht`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(Ht`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function Ri(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(Ht`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Ei(e){const t=e.fragment.code;t.add(Ht`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(Ht`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(Ht`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Ni(e){e.vertex.code.add(Ht`const float PI = 3.141592653589793;`),e.fragment.code.add(Ht`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Bi(e,t){const r=e.fragment.code;e.include(Ni),3===t.pbrMode||4===t.pbrMode?(r.add(Ht`
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
    `),r.add(Ht`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(Ht`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(Ht`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(Ht`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
}`)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(Ei),r.add(Ht`struct PBRShadingInfo
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
};`),r.add(Ht`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(Ht`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(Ht`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(Ht`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(Ht`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Vi(e,t){const r=e.fragment;e.include(Ri),e.include(zi,t),0!==t.pbrMode&&e.include(Bi,t),e.include(Li,t),t.receiveShadows&&e.include(ci,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(Ni),r.code.add(Ht`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(Ht`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?Ht`normalize(vPosWorld)`:Ht`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(Ht`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?r.code.add(Ht`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(Ht`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(Ht`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(Ht`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(Ht`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(Ht`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?Ht`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:Ht`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function Hi(e,t){const r=e.fragment;r.code.add(Ht`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?r.code.add(Ht`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?r.code.add(Ht`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(Ht`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}function Ui(e,t){const r=Ht`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;at()&&(e.fragment.code.add(r),e.vertex.code.add(r))}function Gi(e){e.code.add(Ht`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function $i(e){e.include(Gi),e.code.add(Ht`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${Ht.int(1)}) {
        return allMixed;
      }
      else if (mode == ${Ht.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${Ht.int(3)}) {
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

      if (mode == ${Ht.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${Ht.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=ne(),this.worldFromModel_TH=t(),this.worldFromModel_TL=t()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=t(),this.worldFromView_TL=t(),this.viewFromCameraRelative_RS=ne(),this.projFromView=se()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(Ai||(Ai={})),(Pi||(Pi={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)};const ki=c.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class qi{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&ki.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class Wi extends qi{constructor(){super(...arguments),this.vertex=new Ki,this.fragment=new Ki,this.attributes=new Qi,this.varyings=new Yi,this.extensions=new Zi,this.constants=new Ji}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,a=o.uniforms.generateSource(),n=o.code.generateSource(),s="vertex"===e?to:eo,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${a.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${n.join("\n")}`}}class ji{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){return Array.from(this._entries.values()).map((e=>`uniform ${e.type} ${e.name}${(e=>e?`[${e}]`:"")(e.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class Xi{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class Ki extends qi{constructor(){super(...arguments),this.uniforms=new ji,this.code=new Xi,this.constants=new Ji}get builder(){return this}}class Qi{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class Yi{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class Zi{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?Zi.ALLOWLIST_VERTEX:Zi.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}Zi.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Zi.ALLOWLIST_VERTEX=[];class Ji{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=Ji.numberToFloatStr(r);break;case"int":i=Ji.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${Ji.numberToFloatStr(r[0])},                            ${Ji.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${Ji.numberToFloatStr(r[0])},                            ${Ji.numberToFloatStr(r[1])},                            ${Ji.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${Ji.numberToFloatStr(r[0])},                            ${Ji.numberToFloatStr(r[1])},                            ${Ji.numberToFloatStr(r[2])},                            ${Ji.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${Ji.numberToIntStr(r[0])},                             ${Ji.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${Ji.numberToIntStr(r[0])},                             ${Ji.numberToIntStr(r[1])},                             ${Ji.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${Ji.numberToIntStr(r[0])},                             ${Ji.numberToIntStr(r[1])},                             ${Ji.numberToIntStr(r[2])},                             ${Ji.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>Ji.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const eo="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",to="precision highp float;\nprecision highp sampler2D;";function ro(e){const t=new Wi,r=t.vertex.code,i=t.fragment.code;return t.include(Ui,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(wi),t.varyings.add("vpos","vec3"),t.include(di,e),t.include(jr,e),t.include(Yr,e),0!==e.output&&7!==e.output||(t.include(_i,e),t.include(yi,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(bi),t.include(Ii,e),t.include(Pi,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(oi,e),t.include(xi,e),t.include(Ci,e),t.include(Mi,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(Ht`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Ht.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?Ht`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(Hr,e),t.include(Ut,e),e.multipassTerrainEnabled&&(t.fragment.include(Di),t.include(ii,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include($i),i.add(Ht`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?Ht`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Ht`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?Ht`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Ht`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Hr,e),t.include(Vi,e),t.include(zi,e),t.include(Ut,e),e.receiveShadows&&t.include(ci,e),e.multipassTerrainEnabled&&(t.fragment.include(Di),t.include(ii,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(si,e),t.include(Bi,e),t.fragment.include($i),t.include(Hi,e),i.add(Ht`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?Ht`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Ht`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?Ht`
        vec3 normal = screenDerivativeNormal(localvpos);`:Ht`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?Ht`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Ht`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?Ht`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?Ht`vec3 normalGround = normalize(vpos + localOrigin);`:Ht`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Ht``}
        ${1===e.pbrMode||2===e.pbrMode?Ht`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Fi,e),t}var io=Object.freeze({__proto__:null,build:ro});class oo extends class{constructor(e,t,r=(()=>this.dispose())){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=W(this._program),this._pipeline=this._config=null}reload(e){W(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=oo.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Wr(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new hi(e.rctx,i,Et)}bindPass(e,t){var r,i;!function(e,t){e.setUniformMatrix4fv("proj",t)}(this.program,t.camera.projectionMatrix);const o=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===o)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),function(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}(this.program,t)),7===o&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",cr[e.colorMixMode])),0===o?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",cr[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}(this.program,e,this.configuration.isSchematic)):4===o&&function(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}(this.program,t),function(e,t){(function(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))})(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}(this.program,e),Zr(this.program,e,t),function(e,t,r){if(!e)return;const i=e.parameters,o=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,o)}(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?r(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;(function(e,t,r){q(ui,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",ui)})(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])}(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&jr.bindCustomOrigin(this.program,t),function(e,t,r,i){t.slicePlaneEnabled&&(v(r)?(i?(I(Ur,r.origin,i),e.setUniform3fv("slicePlaneOrigin",Ur)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",$),e.setUniform3fv("slicePlaneBasis2",$),e.setUniform3fv("slicePlaneOrigin",$)))}(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return nt({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?mr:fr(e),culling:ao(r)&&st(r.cullFace),depthTest:{func:xr(e)},depthWrite:i||o?r.writeDepth&&lt:null,colorWrite:ct,stencilWrite:r.sceneHasOcludees?fi:null,stencilTest:r.sceneHasOcludees?t?gi:vi:null,polygonOffset:i||o?null:gr(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function ao(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}oo.shader=new mi(io,(()=>import("./DefaultMaterial.glsl-bf66842f.js")));class no extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}function so(e){const t=new Wi,r=t.vertex.code,i=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(wi),t.varyings.add("vpos","vec3"),t.include(di,e),t.include(jr,e),t.include(Yr,e),0!==e.output&&7!==e.output||(t.include(_i,e),t.include(yi,{linearDepth:!1}),e.offsetBackfaces&&t.include(bi),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(oi,e),t.include(xi,e),t.include(Ci,e),t.include(Mi,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(Ht`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Ht.float(.001)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?Ht`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(Hr,e),t.include(Ut,e),e.multipassTerrainEnabled&&(t.fragment.include(Di),t.include(ii,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include($i),i.add(Ht`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?Ht`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?Ht`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Ht`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?Ht`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Ht`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Hr,e),t.include(Vi,e),t.include(zi,e),t.include(Ut,e),e.receiveShadows&&t.include(ci,e),e.multipassTerrainEnabled&&(t.fragment.include(Di),t.include(ii,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(si,e),t.include(Bi,e),t.fragment.include($i),i.add(Ht`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?Ht`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?Ht`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Ht`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?Ht`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Ht`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${Ht`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?Ht`vec3 normalGround = normalize(vpos + localOrigin);`:Ht`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Ht``}
        ${1===e.pbrMode||2===e.pbrMode?Ht`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Fi,e),t}X([pi({count:8})],no.prototype,"output",void 0),X([pi({count:4})],no.prototype,"alphaDiscardMode",void 0),X([pi({count:3})],no.prototype,"doubleSidedMode",void 0),X([pi()],no.prototype,"isSchematic",void 0),X([pi()],no.prototype,"vertexColors",void 0),X([pi()],no.prototype,"offsetBackfaces",void 0),X([pi()],no.prototype,"symbolColors",void 0),X([pi()],no.prototype,"vvSize",void 0),X([pi()],no.prototype,"vvColor",void 0),X([pi()],no.prototype,"verticalOffset",void 0),X([pi()],no.prototype,"receiveShadows",void 0),X([pi()],no.prototype,"slicePlaneEnabled",void 0),X([pi()],no.prototype,"sliceHighlightDisabled",void 0),X([pi()],no.prototype,"receiveAmbientOcclusion",void 0),X([pi()],no.prototype,"screenSizePerspective",void 0),X([pi()],no.prototype,"textureAlphaPremultiplied",void 0),X([pi()],no.prototype,"hasColorTexture",void 0),X([pi()],no.prototype,"usePBR",void 0),X([pi()],no.prototype,"hasMetalnessAndRoughnessTexture",void 0),X([pi()],no.prototype,"hasEmissionTexture",void 0),X([pi()],no.prototype,"hasOcclusionTexture",void 0),X([pi()],no.prototype,"hasNormalTexture",void 0),X([pi()],no.prototype,"instanced",void 0),X([pi()],no.prototype,"instancedColor",void 0),X([pi()],no.prototype,"instancedDoublePrecision",void 0),X([pi()],no.prototype,"vertexTangents",void 0),X([pi()],no.prototype,"normalsTypeDerivate",void 0),X([pi()],no.prototype,"writeDepth",void 0),X([pi()],no.prototype,"sceneHasOcludees",void 0),X([pi()],no.prototype,"transparent",void 0),X([pi()],no.prototype,"enableOffset",void 0),X([pi({count:3})],no.prototype,"cullFace",void 0),X([pi({count:4})],no.prototype,"transparencyPassType",void 0),X([pi()],no.prototype,"multipassTerrainEnabled",void 0),X([pi()],no.prototype,"cullAboveGround",void 0);var lo=Object.freeze({__proto__:null,build:so});class co extends oo{initializeProgram(e){const t=co.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Wr(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new hi(e.rctx,i,Et)}}co.shader=new mi(lo,(()=>import("./RealisticTree.glsl-49738a83.js")));class uo extends ur{constructor(e){super(e,po),this.supportsEdges=!0,this.techniqueConfig=new no,this.vertexBufferLayout=uo.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?uo.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,o=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(o||a||i)?!!n||s:r?n?l:s:o||a||i?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,i,o,a,n){if(null!==this.params.verticalOffset){const e=i.camera;M(yo,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=P(xo,yo);break;case 2:t=R(xo,go)}let n=0;if(null!==this.params.verticalOffset){const r=I(To,yo,e.eye),i=L(r),o=F(r,r,1/i);let a=null;this.params.screenSizePerspective&&(a=D(t,o)),n+=function(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;o&&(a=jt(a,i,t,o));const n=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return C(n*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,i,this.params.verticalOffset,a,this.params.screenSizePerspective)}F(t,t,n),K(bo,t,i.transform.inverseRotation),o=I(fo,o,bo),a=I(vo,a,bo)}Jt(e,t,i,o,a,function(e){return v(e)?(zr.offset=e,zr):null}(i.verticalOffset),n)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new mo(e)}createBufferWriter(){return new ho(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=dt().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=dt();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class mo extends qt{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(t.treeRendering?co:oo,this._material.getTechniqueConfig(this._output,e),this._technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this._material.params.shadowMappingEnabled&&this._material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e){this._technique.bindPass(this._material.params,e),this.bindTextures(this._technique.program)}beginSlot(e){return e===(this._material.params.transparent?this._material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const po={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:ne(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class ho{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,i){!function(e,t,r,i,o,a){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),s=e.indices.get(n);if(t&&s)switch(n){case"position":{ht(3===t.size);const e=o.getField(n,ye);e&&Er(s,t.data,r,e,a);break}case"normal":{ht(3===t.size);const e=o.getField(n,ye);e&&Nr(s,t.data,i,e,a);break}case"uv0":{ht(2===t.size);const e=o.getField(n,be);e&&Lr(s,t.data,e,a);break}case"color":{ht(3===t.size||4===t.size);const e=o.getField(n,xe);e&&Vr(s,t.data,t.size,e,a);break}case"symbolColor":{ht(3===t.size||4===t.size);const e=o.getField(n,xe);e&&Vr(s,t.data,t.size,e,a);break}case"tangent":{ht(4===t.size);const e=o.getField(n,ge);e&&Br(s,t.data,i,e,a);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const fo=t(),vo=t(),go=r(0,0,1),xo=t(),bo=t(),yo=t(),To=t(),_o=c.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function wo(e,t){const r=await async function(e,t){const r=v(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await Q(t.request(e,"json",r));if(!0===i.ok)return i.value;J(i.error),So(i.error.details.url)}(e,r,t);const i=await Q(Y(e,Z(t)));if(!0===i.ok)return i.value.data;J(i.error),So(i.error)}(e,t);return{resource:r,textures:await Ao(r.textureDefinitions,t)}}function So(e){throw new w("",`Request for object resource failed: ${e}`)}function Co(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(_o.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(_o.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(_o.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(_o.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else _o.warn("Indexed geometries must specify faces"),i=!1;break}default:_o.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(_o.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(_o.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Mo(e){const t=ve();return e.forEach((e=>{const r=e.boundingInfo;v(r)&&(fe(t,r.getBBMin()),fe(t,r.getBBMax()))})),t}async function Ao(e,t){const r=[];for(const i in e){const o=e[i],a=o.images[0].data;if(!a){_o.warn("Externally referenced texture data is not yet supported");continue}const n=o.encoding+";base64,"+a,s="/textureDefinitions/"+i,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},c=v(t)&&t.disableTextures?Promise.resolve(null):qe(n,t);r.push(c.then((e=>({refId:s,image:e,params:l,alphaChannelUsage:"rgba"===o.channels?o.alphaChannelUsage||"transparency":"none"}))))}const i=await Promise.all(r),o={};for(const e of i)o[e.refId]=e;return o}function Po(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function Oo(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Fo=new ke(1,2,"wosr");function Do(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Io(e,t,r,i){const o=e.model,a=ne(),n=new Array,s=new Map,l=new Map;return o.lods.forEach(((e,c)=>{if(void 0!==i&&c!==i)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:v(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:ve()};n.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=o.materials.get(e.material),c=v(e.attributes.texCoord0),u=v(e.attributes.normal);if(!s.has(i)){if(c){if(v(n.textureColor)&&!l.has(n.textureColor)){const e=o.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:!0};l.set(n.textureColor,new Vt(e.data,t))}if(v(n.textureNormal)&&!l.has(n.textureNormal)){const e=o.textures.get(n.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};l.set(n.textureNormal,new Vt(e.data,t))}if(v(n.textureOcclusion)&&!l.has(n.textureOcclusion)){const e=o.textures.get(n.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};l.set(n.textureOcclusion,new Vt(e.data,t))}if(v(n.textureEmissive)&&!l.has(n.textureEmissive)){const e=o.textures.get(n.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};l.set(n.textureEmissive,new Vt(e.data,t))}if(v(n.textureMetallicRoughness)&&!l.has(n.textureMetallicRoughness)){const e=o.textures.get(n.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};l.set(n.textureMetallicRoughness,new Vt(e.data,t))}}const a=n.color[0]**(1/Le),d=n.color[1]**(1/Le),m=n.color[2]**(1/Le),p=n.emissiveFactor[0]**(1/Le),h=n.emissiveFactor[1]**(1/Le),f=n.emissiveFactor[2]**(1/Le);s.set(i,new uo({...t,transparent:"BLEND"===n.alphaMode,textureAlphaMode:zo(n.alphaMode),textureAlphaCutoff:n.alphaCutoff,diffuse:[a,d,m],ambient:[a,d,m],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:u?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:v(n.textureColor)&&c?l.get(n.textureColor).id:void 0,colorMixMode:n.colorMixMode,normalTextureId:v(n.textureNormal)&&c?l.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:v(n.textureOcclusion)&&c?l.get(n.textureOcclusion).id:void 0,emissiveTextureId:v(n.textureEmissive)&&c?l.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:v(n.textureMetallicRoughness)&&c?l.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[p,h,f],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const m=function(e,t){switch(t){case 4:return $e(e);case 5:return Ge(e);case 6:return Ue(e)}}(e.indices||e.attributes.position.count,e.primitiveType),p=e.attributes.position.count,h=Re(ye,p);le(h,e.attributes.position,e.transform);const f=[["position",{data:h.typedBuffer,size:h.elementCount,exclusive:!0}]],g=[["position",m]];if(v(e.attributes.normal)){const t=Re(ye,p);ie(a,e.transform),ce(t,e.attributes.normal,a),f.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),g.push(["normal",m])}if(v(e.attributes.tangent)){const t=Re(ge,p);ie(a,e.transform),Ee(t,e.attributes.tangent,a),f.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),g.push(["tangent",m])}if(v(e.attributes.texCoord0)){const t=Re(be,p);Ne(t,e.attributes.texCoord0),f.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),g.push(["uv0",m])}if(v(e.attributes.color)){const t=Re(xe,p);if(4===e.attributes.color.elementCount)e.attributes.color instanceof ge?Be(t,e.attributes.color,255):e.attributes.color instanceof xe?Ve(t,e.attributes.color):e.attributes.color instanceof Te&&Be(t,e.attributes.color,1/256);else{He(t,255,255,255,255);const r=new _e(t.buffer,0,4);e.attributes.color instanceof ye?de(r,e.attributes.color,255):e.attributes.color instanceof _e?ue(r,e.attributes.color):e.attributes.color instanceof we&&de(r,e.attributes.color,1/256)}f.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),g.push(["color",m])}const x=new yt(f,g);d.stageResources.geometries.push(x),d.stageResources.materials.push(s.get(i)),c&&(v(n.textureColor)&&d.stageResources.textures.push(l.get(n.textureColor)),v(n.textureNormal)&&d.stageResources.textures.push(l.get(n.textureNormal)),v(n.textureOcclusion)&&d.stageResources.textures.push(l.get(n.textureOcclusion)),v(n.textureEmissive)&&d.stageResources.textures.push(l.get(n.textureEmissive)),v(n.textureMetallicRoughness)&&d.stageResources.textures.push(l.get(n.textureMetallicRoughness))),d.numberOfVertices+=p;const b=x.boundingInfo;v(b)&&(fe(d.boundingBox,b.getBBMin()),fe(d.boundingBox,b.getBBMax()))}))})),n}function zo(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}var Lo=Object.freeze({__proto__:null,fetch:async function(e,r){const i=Do(te(e));if("wosr"===i.fileType){const e=await(r.cache?r.cache.loadWOSR(i.url,r):wo(i.url,r)),t=function(e,t){const r=[],i=[],o=[],a=[],n=e.resource,s=ke.parse(n.version||"1.0","wosr");Fo.validate(s);const l=n.model.name,c=n.model.geometries,d=n.materialDefinitions,u=e.textures;let m=0;const p=new Map;for(let e=0;e<c.length;e++){const n=c[e];if(!Co(n))continue;const s=Oo(n),l=n.params.vertexAttributes,h=[];for(const e in l){const t=l[e],r=t.values;h.push([e,{data:r,size:t.valuesPerElement,exclusive:!0}])}const f=[];if("PerAttributeArray"!==n.params.topology){const e=n.params.faces;for(const t in e)f.push([t,new Uint32Array(e[t].values)])}const g=u&&u[s.texture];if(g&&!p.has(s.texture)){const{image:e,params:t}=g,r=new Vt(e,t);a.push(r),p.set(s.texture,r)}const x=p.get(s.texture),b=x?x.id:void 0;let y=o[s.material]?o[s.material][s.texture]:null;if(!y){const e=d[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=g&&g.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,a={ambient:ee(e.diffuse),diffuse:ee(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:g?Po(g.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};v(t)&&t.materialParamsMixin&&Object.assign(a,t.materialParamsMixin),y=new uo(a),o[s.material]||(o[s.material]={}),o[s.material][s.texture]=y}i.push(y);const T=new yt(h,f);m+=f.position?f.position.length:0,r.push(T)}return{name:l,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,boundingBox:Mo(r),numberOfVertices:m,lodThreshold:null}}(e,r);return{lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(r.cache?r.cache.loadGLTF(i.url,r,r.usePBR):Ie(new ze(r.streamDataRequester),i.url,r,r.usePBR)),n=re(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&v(n)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&function(e,r){for(let i=0;i<e.model.lods.length;++i){const a=e.model.lods[i];e.customMeta.esriTreeRendering=!0;for(const n of a.parts){const a=n.attributes.normal;if(s(a))return;const l=n.attributes.position,c=l.count,d=t(),u=t(),m=t(),p=Re(xe,c),h=Re(ye,c),f=oe(se(),n.transform);for(let t=0;t<c;t++){l.getVec(t,u),a.getVec(t,d),B(u,u,n.transform),I(m,u,r.center),ae(m,m,r.radius);const s=m[2],c=L(m),v=Math.min(.45+.55*c*c,1);ae(m,m,r.radius),B(m,m,f),P(m,m),i+1!==e.model.lods.length&&e.model.lods.length>1&&o(m,m,d,s>-1?.2:Math.min(-4*s-3.8,1)),h.setVec(t,m),p.set(t,0,255*v),p.set(t,1,255*v),p.set(t,2,255*v),p.set(t,3,255)}n.attributes.normal=h,n.attributes.color=p}}}(a,n);const l=a.meta.isEsriSymbolResource?{usePBR:r.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:r.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},c={...r.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=Io(a,l,c,i.specifiedLodIndex);let t=e[0].boundingBox;return 0!==i.specifiedLodIndex&&(t=Io(a,l,c,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const d=Io(a,l,c);return{lods:d,referenceBoundingBox:d[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}},gltfToEngineResources:Io,parseUrl:Do});export{ro as P,so as j,Lo as o};
