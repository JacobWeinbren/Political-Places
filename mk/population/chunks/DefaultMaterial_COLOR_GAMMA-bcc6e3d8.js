import{d as e,e as t,g as r,t as n}from"./vec33-4afcca69.js";import{u as s,c as o,r as i,e as a}from"./types-c0542933.js";import{iI as u,k as c,iS as f,t as l,L as d,cw as p,cv as h,a as m,n as y,fX as x,iT as w,c8 as b,fi as g,fc as T,fb as S,fa as O,cR as C,r as I,iU as U,iV as B,iW as v,iX as A,fn as M,$ as R,f5 as N,a1 as _,f2 as E,a0 as L,eX as P,a2 as F,i as j,iJ as D}from"../main.js";import{r as k}from"./Version-b024f4f7.js";import{I as V,e as G,t as z,b as X}from"./quat-5c72649f.js";import{B as q,g as H,d as $,i as J,c as W,u as Q,x as Y,L as Z,O as K,E as ee,F as te,w as re,q as ne,A as se,V as oe}from"./BufferView-bc5859bb.js";function ie(){return[0,0,0,0]}function ae(e,t,r,n){return[e,t,r,n]}function ue(e,t){return new Float64Array(e,t,4)}function ce(){return[0,0,0,0]}function fe(){return ae(1,1,1,1)}function le(){return ae(1,0,0,0)}function de(){return ae(0,1,0,0)}function pe(){return ae(0,0,1,0)}function he(){return ae(0,0,0,1)}const me=[0,0,0,0],ye=fe(),xe=le(),we=de(),be=pe(),ge=he();function Te(t,r,n){if(t.count!==r.count)return void e.error("source and destination buffers need to have the same number of elements");const s=t.count,o=n[0],i=n[1],a=n[2],u=n[3],c=n[4],f=n[5],l=n[6],d=n[7],p=n[8],h=t.typedBuffer,m=t.typedBufferStride,y=r.typedBuffer,x=r.typedBufferStride;for(let e=0;e<s;e++){const t=e*m,r=e*x,n=y[r],s=y[r+1],w=y[r+2],b=y[r+3];h[t]=o*n+u*s+l*w,h[t+1]=i*n+c*s+d*w,h[t+2]=a*n+f*s+p*w,h[t+3]=b}}function Se(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,o=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*a;s[t]=r*i[n],s[t+1]=r*i[n+1],s[t+2]=r*i[n+2],s[t+3]=r*i[n+3]}}function Oe(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,o=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*a;s[t]=i[n]>>r,s[t+1]=i[n+1]>>r,s[t+2]=i[n+2]>>r,s[t+3]=i[n+3]>>r}}function Ce(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}function Ie(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e)n[u]=o[c],n[u+1]=o[c+1],u+=s,c+=i}function Ue(e,t,r){const n=e.typedBuffer,a=e.typedBufferStride,u=t.typedBuffer,c=t.typedBufferStride,f=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*a,d=(r&&r.srcIndex?r.srcIndex:0)*c;if(s(t.elementType)){const e=o(t.elementType);if(i(t.elementType))for(let t=0;t<f;++t)n[l]=Math.max(u[d]/e,-1),n[l+1]=Math.max(u[d+1]/e,-1),l+=a,d+=c;else for(let t=0;t<f;++t)n[l]=u[d]/e,n[l+1]=u[d+1]/e,l+=a,d+=c}else Ie(e,t,r);return e}function Be(e,t,r,n){var s,o;const i=e.typedBuffer,a=e.typedBufferStride,u=null!=(s=null==n?void 0:n.count)?s:e.count;let c=(null!=(o=null==n?void 0:n.dstIndex)?o:0)*a;for(let e=0;e<u;++e)i[c]=t,i[c+1]=r,c+=a}function ve(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e)n[u]=o[c],n[u+1]=o[c+1],n[u+2]=o[c+2],n[u+3]=o[c+3],u+=s,c+=i}function Ae(e,t,r,n,s,o){var i,a;const u=e.typedBuffer,c=e.typedBufferStride,f=null!=(i=null==o?void 0:o.count)?i:e.count;let l=(null!=(a=null==o?void 0:o.dstIndex)?a:0)*c;for(let e=0;e<f;++e)u[l]=t,u[l+1]=r,u[l+2]=n,u[l+3]=s,l+=c}function Me(e,t){return new e(new ArrayBuffer(t*e.ElementCount*a(e.ElementType)))}Object.freeze({__proto__:null,create:ie,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:ae,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t},createView:ue,zeros:ce,ones:fe,unitX:le,unitY:de,unitZ:pe,unitW:he,ZEROS:me,ONES:ye,UNIT_X:xe,UNIT_Y:we,UNIT_Z:be,UNIT_W:ge}),Object.freeze({__proto__:null,transformMat4:function(t,r,n){if(t.count!==r.count)return void e.error("source and destination buffers need to have the same number of elements");const s=t.count,o=n[0],i=n[1],a=n[2],u=n[3],c=n[4],f=n[5],l=n[6],d=n[7],p=n[8],h=n[9],m=n[10],y=n[11],x=n[12],w=n[13],b=n[14],g=n[15],T=t.typedBuffer,S=t.typedBufferStride,O=r.typedBuffer,C=r.typedBufferStride;for(let e=0;e<s;e++){const t=e*S,r=e*C,n=O[r],s=O[r+1],I=O[r+2],U=O[r+3];T[t]=o*n+c*s+p*I+x*U,T[t+1]=i*n+f*s+h*I+w*U,T[t+2]=a*n+l*s+m*I+b*U,T[t+3]=u*n+d*s+y*I+g*U}},transformMat3:Te,scale:Se,shiftRight:Oe}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e){for(let e=0;e<9;++e)n[u+e]=o[c+e];u+=s,c+=i}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e){for(let e=0;e<16;++e)n[u+e]=o[c+e];u+=s,c+=i}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e)n[u]=o[c],u+=s,c+=i},makeDense:Ce}),Object.freeze({__proto__:null,copy:Ie,normalizeIntegerBuffer:Ue,fill:Be}),Object.freeze({__proto__:null,copy:ve,fill:Ae});class Re{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return u(e)?(c(t),f(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(l(this.streamDataRequester))return(await d(t,{responseType:Ne[e]})).data;const n=await p(this.streamDataRequester.request(t,e,r));if(!0===n.ok)return n.value;throw h(n.error),new m("",`Request for resource failed: ${n.error}`)}}const Ne={image:"image",binary:"array-buffer",json:"json"},_e=y.getLogger("esri.views.3d.glTF");class Ee{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const Le={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Pe={pbrMetallicRoughness:Le,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Fe={ESRI_externalColorMixMode:"tint"},je=(e={})=>{const t={...Le,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:x(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...Fe,...e.extras});return{...Pe,...e,pbrMetallicRoughness:t,extras:r}};const De={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const ke=1179937895,Ve=1313821514,Ge=5130562;class ze{constructor(e,t,r,n,s){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=s,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,s)=>(t=n||"",r=s||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,n){if(u(r)){const n=b(r);if("model/gltf-binary"!==n.mediaType)try{const s=JSON.parse(n.isBase64?atob(n.data):n.data);return new ze(e,t,r,s)}catch{}const s=f(r);if(ze.isGLBData(s))return this.fromGLBData(e,t,r,s)}if(r.endsWith(".gltf")){const s=await e.loadJSON(r,n);return new ze(e,t,r,s)}const s=await e.loadBinary(r,n);if(ze.isGLBData(s))return this.fromGLBData(e,t,r,s);const o=await e.loadJSON(r,n);return new ze(e,t,r,o)}static isGLBData(e){const t=new Ee(e);return t.remainingBytes()>=4&&t.readUint32()===ke}static async fromGLBData(e,t,r,n){const s=await ze.parseGLBData(t,n);return new ze(e,t,r,s.json,s.binaryData)}static async parseGLBData(e,t){const r=new Ee(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),s=r.readUint32(),o=r.readUint32();e.assert(n===ke,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==s,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,a,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===Ve,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),i=await We(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==Ge,"Second GLB chunk expected to be BIN."),a=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return i||e.error("No GLB JSON chunk detected."),{json:i,binaryData:a}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let s=this.bufferCache.get(e);if(!s){const o=await this.context.loadBinary(this.resolveUri(r.uri),t);s=new Uint8Array(o),this.bufferCache.set(e,s),n.assert(s.byteLength===r.byteLength,"Buffer byte lengths should match.")}return s}async getAccessor(e,t){const r=this.json.accessors[e],n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const s=this.json.bufferViews[r.bufferView],o=await this.getBuffer(s.buffer,t),i=$e[r.type],a=Je[r.componentType],u=i*a,c=s.byteStride||u;return{raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(s.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:i,componentByteSize:a,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Ce(this.wrapAccessor($,r));case 5123:return Ce(this.wrapAccessor(H,r));case 5125:return Ce(this.wrapAccessor(q,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+Qe[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(J,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+Qe[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(J,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+Qe[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new W(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(Q,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new oe(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new se(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new ne(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new re(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new te(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new Q(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void x(e.componentType)}}(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(W,n);if(5121===n.componentType)return this.wrapAccessor(Y,n);if(5123===n.componentType)return this.wrapAccessor(Z,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(J,n);if(5121===n.componentType)return this.wrapAccessor(K,n);if(5123===n.componentType)return this.wrapAccessor(ee,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+Qe[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const n=this.errorContext;let s=this.materialCache.get(e.material);if(!s){const o=null!=e.material?je(this.json.materials[e.material]):je(),i=o.pbrMetallicRoughness,a=this.hasVertexColors(e);let u,c,f,l,d;i.baseColorTexture&&(n.errorUnsupportedIf(0!==(i.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),u=await this.getTexture(i.baseColorTexture.index,t)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(o.normalTexture.index,t)),o.occlusionTexture&&r&&(0!==(o.occlusionTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):f=await this.getTexture(o.occlusionTexture.index,t)),o.emissiveTexture&&r&&(0!==(o.emissiveTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):l=await this.getTexture(o.emissiveTexture.index,t)),i.metallicRoughnessTexture&&r&&(0!==(i.metallicRoughnessTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):d=await this.getTexture(i.metallicRoughnessTexture.index,t));const p=null!=e.material?e.material:-1;s={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:i.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:u,normalTexture:c,name:o.name,id:p,occlusionTexture:f,emissiveTexture:l,emissiveFactor:o.emissiveFactor,metallicFactor:i.metallicFactor,roughnessFactor:i.roughnessFactor,metallicRoughnessTexture:d,vertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return s}async getTexture(e,t){const r=this.errorContext,n=this.json.textures[e],s=(e=>({...De,...e}))(null!=n.sampler?this.json.samplers[n.sampler]:{});r.errorUnsupportedIf(null==n.source,"Source is expected to be defined for a texture.");const o=this.json.images[n.source];let i=this.textureCache.get(e);if(!i){let n;if(o.uri)n=await this.context.loadImage(this.resolveUri(o.uri),t);else{r.errorUnsupportedIf(null==o.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==o.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[o.bufferView],s=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),n=await async function(e,t){return new Promise(((r,n)=>{const s=new Blob([e],{type:t}),o=URL.createObjectURL(s),i=new Image;i.addEventListener("load",(()=>{URL.revokeObjectURL(o),"decode"in i?i.decode().then((()=>r(i)),(()=>r(i))):r(i)})),i.addEventListener("error",(e=>{URL.revokeObjectURL(o),n(e)})),i.src=o}))}(new Uint8Array(s.buffer,s.byteOffset+(e.byteOffset||0),e.byteLength),o.mimeType)}const a=e=>33071===e||33648===e||10497===e,u=e=>(r.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);i={data:n,wrapS:a(s.wrapS)?s.wrapS:u(s.wrapS),wrapT:a(s.wrapT)?s.wrapT:u(s.wrapT),minFilter:s.minFilter,name:o.name,id:e},this.textureCache.set(e,i)}return i}getNodeTransform(e){if(void 0===e)return qe;let n=this.nodeTransformCache.get(e);if(!n){const s=this.getNodeTransform(this.getNodeParent(e)),o=this.json.nodes[e];o.matrix?n=g(t(),s,o.matrix):o.translation||o.rotation||o.scale?(n=r(s),o.translation&&T(n,n,o.translation),o.rotation&&(He[3]=V(He,o.rotation),S(n,n,He[3],He)),o.scale&&O(n,n,o.scale)):n=s,this.nodeTransformCache.set(e,n)}return n}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return C(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=k.parse(this.json.asset.version,"glTF");Xe.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const Xe=new k(2,0,"glTF"),qe=w(t(),Math.PI/2),He=G(),$e={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Je={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function We(e){return new Promise(((t,r)=>{const n=new Blob([e]),s=new FileReader;s.onload=()=>{const e=s.result;t(JSON.parse(e))},s.onerror=e=>{r(e)},s.readAsText(n)}))}const Qe={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let Ye=0;async function Ze(e,t,n={},s=!0){const o=await ze.load(e,nt,t,n),i="gltf_"+Ye++,a={lods:[],materials:new Map,textures:new Map,meta:Ke(o)},u=!(!o.json.asset.extras||"symbolResource"!==o.json.asset.extras.ESRI_type);return await et(o,(async(e,t,u,c)=>{const f=void 0!==e.mode?e.mode:4,d=4===f||5===f||6===f?f:null;if(l(d))return void nt.warnUnsupported("Unsupported primitive mode ("+ot[f]+"). Skipping primitive.");if(!o.hasPositions(e))return void nt.warn("Skipping primitive without POSITION vertex attribute.");const p=await o.getMaterial(e,n,s),h={transform:r(t),attributes:{position:await o.getPositionData(e,n),normal:null,texCoord0:null,color:null,tangent:null},indices:await o.getIndexData(e,n),primitiveType:d,material:rt(a,p,i)};o.hasNormals(e)&&(h.attributes.normal=await o.getNormalData(e,n)),o.hasTangents(e)&&(h.attributes.tangent=await o.getTangentData(e,n)),o.hasTextureCoordinates(e)&&(h.attributes.texCoord0=await o.getTextureCoordinates(e,n)),o.hasVertexColors(e)&&(h.attributes.color=await o.getVertexColors(e,n));let m=null;I(a.meta)&&I(a.meta.ESRI_lod)&&"screenSpaceRadius"===a.meta.ESRI_lod.metric&&(m=a.meta.ESRI_lod.thresholds[u]),a.lods[u]=a.lods[u]||{parts:[],name:c,lodThreshold:m},a.lods[u].parts.push(h)})),{model:a,meta:{isEsriSymbolResource:u,uri:o.uri},customMeta:{}}}function Ke(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;I(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function et(e,t){const r=e.json,n=r.scenes[r.scene||0].nodes,s=n.length>1;for(const e of n){const t=r.nodes[e],n=[o(e,0)];if(tt(t)&&!s){const e=t.extensions.MSFT_lod.ids;n.push(...e.map(((e,t)=>o(e,t+1))))}await Promise.all(n)}async function o(n,s){const i=r.nodes[n],a=e.getNodeTransform(n);if(nt.warnUnsupportedIf(null!=i.weights,"Morph targets are not supported."),null!=i.mesh){const e=r.meshes[i.mesh];for(const r of e.primitives)await t(r,a,s,e.name)}for(const e of i.children||[])await o(e,s)}}function tt(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function rt(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:st.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(n,r)}return n},s=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(s)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(s,r)}return s}const nt=new class{error(e){throw new m("gltf-loader-error",e)}errorUnsupported(e){throw new m("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){_e.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},st=[9987,9985],ot=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];class it{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=U.before((()=>this.reset())),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=B(this.tickHandle)),this.items=B(this.items)}get(){return 0===this.itemsPtr&&U((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*at);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,at));e++)this.items.push(this.allocator())}}const at=1024;class ut{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=U.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=B(this.tickHandle)),this.itemsPtr=0,this.items=B(this.items),this.buffers=B(this.buffers)}get(){0===this.itemsPtr&&U((()=>{}));const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=ct){return new ut(16,v,e)}static createVec3f64(e=ct){return new ut(24,A,e)}static createVec4f64(e=ct){return new ut(32,ue,e)}static createMat3f64(e=ct){return new ut(72,z,e)}static createMat4f64(e=ct){return new ut(128,n,e)}static createQuatf64(e=ct){return new ut(32,X,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const ct=4096;ut.createVec2f64();const ft=ut.createVec3f64();ut.createVec4f64(),ut.createMat3f64();const lt=ut.createMat4f64();function dt(e,t,r){return N(pt,t,e),N(ht,r,e),_(E(pt,pt,ht))/2}ut.createQuatf64(),new it((()=>({origin:null,vector:null}))),new it((function(e){return e?{origin:M(e.origin),vector:M(e.vector)}:{origin:R(),vector:R()}})),new it((()=>({p0:null,p1:null,p2:null})));const pt=R(),ht=R();let mt=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const yt=new Uint16Array([0]),xt=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function wt(e){if(1===e)return yt;if(e<xt.length)return new Uint16Array(xt.buffer,0,e);if(e>mt.length){const t=Math.max(2*mt.length,e);mt=new Uint32Array(t);for(let e=0;e<mt.length;e++)mt[e]=e}return new Uint32Array(mt.buffer,0,e)}function bt(e){if(1===e)return new Uint16Array(yt);if(e<xt.length)return new Uint16Array(xt.slice(0,e));if(e>mt.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(mt.slice(0,e))}function gt(e,t,r){if(!e)return!1;const{size:n,data:s}=e;L(r,0,0,0),L(It,0,0,0);let o=0,i=0;for(let e=0;e<t.length-2;e+=3){const a=t[e+0]*n,u=t[e+1]*n,c=t[e+2]*n;L(St,s[a+0],s[a+1],s[a+2]),L(Ot,s[u+0],s[u+1],s[u+2]),L(Ct,s[c+0],s[c+1],s[c+2]);const f=dt(St,Ot,Ct);f?(P(St,St,Ot),P(St,St,Ct),F(St,St,1/3*f),P(r,r,St),o+=f):(P(It,It,St),P(It,It,Ot),P(It,It,Ct),i+=3)}return!(0===i&&0===o||(0!==o?(F(r,r,1/o),0):0===i||(F(r,It,1/i),0)))}function Tt(e,t,r){if(!e||!t)return!1;const{size:n,data:s}=e;L(r,0,0,0);let o=-1,i=0;for(let e=0;e<t.length;e++){const a=t[e]*n;o!==a&&(r[0]+=s[a+0],r[1]+=s[a+1],r[2]+=s[a+2],i++),o=a}return i>1&&F(r,r,1/i),i>0}const St=R(),Ot=R(),Ct=R(),It=R();function Ut(e,t=wt){return"number"==typeof e?t(e):j(e)||D(e)?new Uint32Array(e):e}function Bt(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let s=0;s<r;s+=1)if(s%2==0){const r=e[s],o=e[s+1],i=e[s+2];n[t++]=r,n[t++]=o,n[t++]=i}else{const r=e[s+1],o=e[s],i=e[s+2];n[t++]=r,n[t++]=o,n[t++]=i}}return n}function vt(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let s=e[1],o=0;for(let i=0;i<r;++i){const r=e[i+2];n[o++]=t,n[o++]=s,n[o++]=r,s=r}return n}}const At=2.1;export{Ze as a,Re as b,ft as c,Me as d,Te as e,lt as f,Ue as g,Tt as h,Se as i,ve as j,vt as k,wt as l,Bt as m,ie as n,At as o,Ut as p,Be as q,ae as r,it as s,Ae as t,gt as u,Oe as v,bt as w};
