import{cw as e,t,a4 as s,fq as i,fn as r,fi as n,r as a,a8 as o,a3 as h,e as c,kV as f,ci as u,fF as l,it as d,fH as p,le as m,la as g,ej as w,lf as E}from"../main.js";import{N as A,c as T,n as _,e as y,C as b}from"./quat-d8d8c4c4.js";import{c as x}from"./meshFeatureSet-842d489b.js";import{P as R}from"./georeference-c40806eb.js";import{C as N,D as S}from"./enums-23145ba2.js";import"./earcut-4b9fe621.js";import"./deduplicate-23d16b41.js";import"./vec33-6bed90a4.js";import"./BufferView-dd9dc3c0.js";var B,O,I,M,C,L,V,z;!function(e){e[e.JSON=1313821514]="JSON",e[e.BIN=5130562]="BIN"}(B||(B={}));class F{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this.length=F.HEADER_SIZE,this.length+=F.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this.length+=this._alignTo(s.byteLength,4),t&&(this.length+=F.CHUNK_HEADER_SIZE,this.length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this._writeHeader();const i=this._writeChunk(s,12,B.JSON,32);t&&this._writeChunk(t,i,B.BIN)}_writeHeader(){this.outView.setUint32(0,F.MAGIC,!0),this.outView.setUint32(4,F.VERSION,!0),this.outView.setUint32(8,this.length,!0)}_writeChunk(e,t,s,i=0){const r=this._alignTo(e.byteLength,4);for(this.outView.setUint32(t,r,!0),this.outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this.outView.setUint8(t,i),t++;return t}_writeArrayBuffer(e,t,s,i,r){new Uint8Array(e,s,r).set(new Uint8Array(t,i,r),0)}_textToArrayBuffer(e){return(new TextEncoder).encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}F.HEADER_SIZE=12,F.CHUNK_HEADER_SIZE=8,F.MAGIC=1179937895,F.VERSION=2,function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(O||(O={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(I||(I={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(M||(M={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(C||(C={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(L||(L={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(V||(V={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(z||(z={}));class D{constructor(e,t,s,i,r){this.buffer=e,this.componentType=s,this.dataType=i,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this.bufferView={buffer:e.index,byteLength:-1,target:r};const n=this._getElementSize();n>=4&&r!==M.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=n),t.bufferViews.push(this.bufferView),this.numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){const s=t%this.numComponentsForDataType,i=this.accessorMin[s];this.accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const r=this.accessorMax[s];this.accessorMax[s]="number"!=typeof r?e:Math.max(r,e)}}get dataSize(){return this.data.length*this._sizeComponentType()}get byteSize(){return function(e,t){return t*Math.ceil(e/t)}(this.dataSize,4)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this.componentType){case N.BYTE:return new Int8Array(e,t);case N.FLOAT:return new Float32Array(e,t);case N.SHORT:return new Int16Array(e,t);case N.UNSIGNED_BYTE:return new Uint8Array(e,t);case N.UNSIGNED_INT:return new Uint32Array(e,t);case N.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this.data)}writeAsync(e){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let e=0;e<t.length;++e)this.data.push(t[e]);delete this.asyncWritePromise})),this.asyncWritePromise}startAccessor(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;const t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this.numComponentsForDataType,s=(this.data.length-this.accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let e=0;e<this.accessorMin.length;++e)"number"!=typeof this.accessorMin[e]&&(this.accessorMin[e]=0),"number"!=typeof this.accessorMax[e]&&(this.accessorMax[e]=0);const i={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:s,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case N.UNSIGNED_BYTE:case N.UNSIGNED_SHORT:i.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,i}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((e=>this.finalizedPromiseResolve=e))}finalize(){const t=this.bufferView;return new Promise((t=>{const s=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&s.push(this.asyncWritePromise),t(e(s))})).then((()=>{this.isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()}))}_getElementSize(){return this._sizeComponentType()*this.numComponentsForDataType}_sizeComponentType(){switch(this.componentType){case N.BYTE:case N.UNSIGNED_BYTE:return 1;case N.SHORT:case N.UNSIGNED_SHORT:return 2;case N.UNSIGNED_INT:case N.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this.dataType){case C.SCALAR:return 1;case C.VEC2:return 2;case C.VEC3:return 3;case C.VEC4:case C.MAT2:return 4;case C.MAT3:return 9;case C.MAT4:return 16}}}class P{constructor(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this.buffer=t}addBufferView(e,t,s){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const i=new D(this,this.gltf,e,t,s);return this.bufferViews.push(i),i}getByteOffset(e){let t=0;for(const s of this.bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this.bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const e of this.bufferViews)e.writeOutToBuffer(t,s),s+=e.byteSize;return t}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise((t=>{t(e(this.getViewFinalizePromises()))})).then((()=>{this.isFinalized=!0;const e=this.getArrayBuffer();this.buffer.byteLength=e.byteLength,this.buffer.uri=e})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}_getTotalSize(){let e=0;for(const t of this.bufferViews)e+=t.byteSize;return e}}function U(e,a){t(a.normal)&&(a.normal=new Float32Array(a.position.length));const o=e.faces,{position:h,normal:c}=a,f=o.length/3;for(let e=0;e<f;++e){const t=3*o[3*e+0],n=3*o[3*e+1],a=3*o[3*e+2],f=s(G,h[t+0],h[t+1],h[t+2]),u=s(v,h[n+0],h[n+1],h[n+2]),l=s(Y,h[a+0],h[a+1],h[a+2]),d=i(u,u,f),p=i(l,l,f),m=r(d,d,p);c[t+0]+=m[0],c[t+1]+=m[1],c[t+2]+=m[2],c[n+0]+=m[0],c[n+1]+=m[1],c[n+2]+=m[2],c[a+0]+=m[0],c[a+1]+=m[1],c[a+2]+=m[2]}for(let e=0;e<c.length;e+=3)s(H,c[e],c[e+1],c[e+2]),n(H,H),c[e+0]=H[0],c[e+1]=H[1],c[e+2]=H[2]}const G=h(),v=h(),Y=h(),H=h();async function k(e){const s=j(e);if(t(s))throw new c("imageToArrayBuffer","Unsupported image type");const i=await async function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if(f(t)){const{mediaType:e}=u(t);return"image/jpeg"===e?e:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),r=await new Promise((e=>s.toBlob(e,i)));if(!r)throw new c("imageToArrayBuffer","Failed to encode image");return{data:await r.arrayBuffer(),type:i}}function j(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,e.width,e.height),t}class Z{constructor(e,t,s){this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras.options.bufferOutputType===O.GLB||this.gltf.extras.options.imageOutputType===I.GLB;t&&(this.gltf.extras.binChunkBuffer=new P(this.gltf)),e.forEachScene((e=>{this._addScene(e)})),t&&this.gltf.extras.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this._addNode(e);t.nodes.push(s)})),this.gltf.scenes.push(t)}_addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;l(s,d)||(t.translation=p(s));const i=e.rotation;A(i,T)||(t.rotation=_(i));const r=e.scale;l(r,m)||(t.scale=p(r)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this._addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this._addNode(e);t.children.push(s)}));const n=this.gltf.nodes.length;return this.gltf.nodes.push(t),n}_addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras.options.bufferOutputType===O.GLB;let i;i=s?this.gltf.extras.binChunkBuffer:new P(this.gltf),this.params.origin||(this.params.origin=function(e){if(a(e.transform))return e.transform.getOriginPoint(e.spatialReference);const t=e.extent.xmax-e.extent.width/2,s=e.extent.ymax-e.extent.height/2,i=e.extent.zmin;return new o({x:t,y:s,z:i,spatialReference:e.extent.spatialReference})}(e));const r=R(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});(function(e,t){if(e.components)for(const s of e.components)s.faces&&"smooth"===s.shading&&U(s,t)})(e,r),this._flipYZAxis(r);const n=i.addBufferView(N.FLOAT,C.VEC3,M.ARRAY_BUFFER);let h,c,f,u;r.normal&&(h=i.addBufferView(N.FLOAT,C.VEC3,M.ARRAY_BUFFER)),e.vertexAttributes.uv&&(c=i.addBufferView(N.FLOAT,C.VEC2,M.ARRAY_BUFFER)),r.tangent&&(f=i.addBufferView(N.FLOAT,C.VEC4,M.ARRAY_BUFFER)),e.vertexAttributes.color&&(u=i.addBufferView(N.UNSIGNED_BYTE,C.VEC4,M.ARRAY_BUFFER)),n.startAccessor("POSITION"),h&&h.startAccessor("NORMAL"),c&&c.startAccessor("TEXCOORD_0"),f&&f.startAccessor("TANGENT"),u&&u.startAccessor("COLOR_0");const l=r.position.length/3,{position:d,normal:p,tangent:m}=r,{color:g,uv:w}=e.vertexAttributes;for(let e=0;e<l;++e)n.push(d[3*e+0]),n.push(d[3*e+1]),n.push(d[3*e+2]),h&&a(p)&&(h.push(p[3*e+0]),h.push(p[3*e+1]),h.push(p[3*e+2])),c&&a(w)&&(c.push(w[2*e+0]),c.push(w[2*e+1])),f&&a(m)&&(f.push(m[4*e+0]),f.push(m[4*e+1]),f.push(m[4*e+2]),f.push(m[4*e+3])),u&&a(g)&&(u.push(g[4*e+0]),u.push(g[4*e+1]),u.push(g[4*e+2]),u.push(g[4*e+3]));const E=n.endAccessor(),A=this._addAccessor(n.index,E);let T,_,y,b,x;if(h){const e=h.endAccessor();T=this._addAccessor(h.index,e)}if(c){const e=c.endAccessor();_=this._addAccessor(c.index,e)}if(f){const e=f.endAccessor();y=this._addAccessor(f.index,e)}if(u){const e=u.endAccessor();b=this._addAccessor(u.index,e)}e.components&&e.components.length>0&&e.components[0].faces?(x=i.addBufferView(N.UNSIGNED_INT,C.SCALAR,M.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(x,e.components,t,A,T,_,y,b)):this._addMeshVertexNonIndexed(e.components,t,A,T,_,y,b),n.finalize(),h&&h.finalize(),c&&c.finalize(),f&&f.finalize(),x&&x.finalize(),u&&u.finalize(),s||i.finalize();const S=this.gltf.meshes.length;return this.gltf.meshes.push(t),S}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,s){if(!t(e))for(let t=1,i=2;t<e.length;t+=s,i+=s){const s=e[t],r=e[i];e[t]=r,e[i]=-s}}_addMaterial(e){if(null===e)return;const t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=V.MASK;break;case"auto":case"blend":s.alphaMode=V.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const i=e=>e**2.1,r=e=>{const t=e.toRgba();return t[0]=i(t[0]/255),t[1]=i(t[1]/255),t[2]=i(t[2]/255),t};if(a(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=r(e.color)),a(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),a(e.normalTexture)&&(s.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof x){if(a(e.emissiveTexture)&&(s.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),a(e.emissiveColor)){const t=r(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}a(e.occlusionTexture)&&(s.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),a(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1;const n=this.gltf.materials.length;return this.gltf.materials.push(s),this.materialMap.push(e),n}_addTexture(e){return this.gltf.textures||(this.gltf.textures=[]),g(this.textureMap,e,(()=>{const t={sampler:this._addSampler(e),source:this._addImage(e)},s=this.gltf.textures.length;return this.gltf.textures.push(t),s}))}_addImage(e){const t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{s.extras=e.data;for(let t=0;t<this.gltf.images.length;++t)if(e.data===this.gltf.images[t].extras)return t;switch(this.gltf.extras.options.imageOutputType){case I.GLB:{const t=this.gltf.extras.binChunkBuffer.addBufferView(N.UNSIGNED_BYTE,C.SCALAR),i=k(e.data).then((({data:e,type:t})=>(s.mimeType=t,e)));t.writeAsync(i).then((()=>{t.finalize()})),s.bufferView=t.index;break}case I.DataURI:s.uri=function(e){const t=j(e);return a(t)?t.toDataURL():""}(e.data);break;default:this.gltf.extras.promises.push(k(e.data).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const i=this.gltf.images.length;return this.gltf.images.push(s),this.imageMap.set(e,i),i}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=S.REPEAT,s=S.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=S.CLAMP_TO_EDGE,s=S.CLAMP_TO_EDGE;break;case"mirror":t=S.MIRRORED_REPEAT,s=S.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=S.CLAMP_TO_EDGE;break;case"mirror":s=S.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=S.CLAMP_TO_EDGE;break;case"mirror":t=S.MIRRORED_REPEAT}}const i={wrapS:t,wrapT:s};for(let e=0;e<this.gltf.samplers.length;++e)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[e]))return e;const r=this.gltf.samplers.length;return this.gltf.samplers.push(i),r}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i}_addMeshVertexIndexed(e,t,s,i,r,n,a,o){for(const h of t){e.startAccessor("INDICES");for(let t=0;t<h.faces.length;++t)e.push(h.faces[t]);const t=e.endAccessor(),c={attributes:{POSITION:i},indices:this._addAccessor(e.index,t),material:this._addMaterial(h.material)};r&&"flat"!==h.shading&&(c.attributes.NORMAL=r),n&&(c.attributes.TEXCOORD_0=n),a&&"flat"!==h.shading&&(c.attributes.TANGENT=a),o&&(c.attributes.COLOR_0=o),s.primitives.push(c)}}_addMeshVertexNonIndexed(e,t,s,i,r,n,a){const o={attributes:{POSITION:s}};i&&(o.attributes.NORMAL=i),r&&(o.attributes.TEXCOORD_0=r),n&&(o.attributes.TANGENT=n),a&&(o.attributes.COLOR_0=a),e&&(o.material=this._addMaterial(e[0].material)),t.primitives.push(o)}}class J{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){w(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class W{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class K{constructor(e){this.mesh=e,this.name="",this.translation=h(),this.rotation=y(),this.scale=p(m),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){b(this.rotation,e[0],e[1],e[2])}}const X="model.glb";function $(t,s,i){const r=new Z(t,s=s||{},i);let n=r.params;n?n.origin||(n.origin=new o({x:-1,y:-1,z:-1})):n={origin:new o({x:-1,y:-1,z:-1})};const a=n.origin,h=r.gltf,c=h.extras.promises;let f=1,u=1,l=null;return e(c).then((()=>{const e={origin:a};delete h.extras;const t="number"==typeof s.jsonSpacing?s.jsonSpacing:4,i=JSON.stringify(h,((t,i)=>{if("extras"!==t){if(i instanceof ArrayBuffer){if(function(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}(i))switch(s.imageOutputType){case I.DataURI:case I.GLB:break;case I.External:default:{const t=`img${u}.png`;return u++,e[t]=i,t}}switch(s.bufferOutputType){case O.DataURI:return function(e){const t=[],s=new Uint8Array(e);for(let e=0;e<s.length;e++)t.push(String.fromCharCode(s[e]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}(i);case O.GLB:if(l)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(l=i);case O.External:default:{const t=`data${f}.bin`;return f++,e[t]=i,t}}}return i}}),t);return s.bufferOutputType===O.GLB||s.imageOutputType===I.GLB?e[X]=new F(i,l).buffer:e["model.gltf"]=i,e}))}class q{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(e){E(new Blob([this._file.data],{type:this._file.type}),e)}}function Q(e,t){const s=new J,i=new W;return s.addScene(i),i.addNode(new K(e)),function(e,t){return $(e,{bufferOutputType:O.GLB,imageOutputType:I.GLB,jsonSpacing:0},t)}(s,t).then((e=>new q(e[X],e.origin)))}export{Q as toBinaryGLTF};