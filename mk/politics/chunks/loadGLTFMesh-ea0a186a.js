import{C as t,r as e,g as r,B as o,l7 as n,bf as s,A as a,fP as i,t as c}from"../main.js";import{a as u}from"./quat-0f7e1f8c.js";import{r as l}from"./vec4f64-a097b1b4.js";import{m as f,c as m,p,f as d}from"./meshFeatureSet-4f896a9b.js";import{T as g,i as x,c as b,x as h,u as v,L as w,O as y,E as A}from"./BufferView-63fdb337.js";import{a as C,f as E,g as T,r as j,c as M,h as R}from"./vec33-059ebd42.js";import{n as B,a as F,r as S,o as $,b as I,t as L,d as N,m as O,e as _,g as G,p as P,i as q,j as D,k as V,q as k}from"./DefaultMaterial_COLOR_GAMMA-1bf078a9.js";import{b as z}from"./georeference-ec23ac11.js";import{E as K,D as Q}from"./enums-154d47de.js";import"./earcut-9a1bd483.js";import"./deduplicate-2406f2c4.js";import"./types-f6455ab6.js";import"./Version-d0a4c479.js";async function U(r,o,n){const s=new B(function(r){return null!=r&&r.resolveFile?{busy:!1,request:async(o,n,s)=>{const a=r.resolveFile(o),i="image"===n?"image":"binary"===n?"array-buffer":"json";return(await t(a,{responseType:i,signal:e(s)?s.signal:null})).data}}:null}(n)),a=(await F(s,o,n,!0)).model,i=a.lods.shift(),c=new Map,u=new Map;a.textures.forEach(((t,e)=>c.set(e,X(t)))),a.materials.forEach(((t,e)=>u.set(e,Y(t,c))));const l=W(i);for(const t of l.parts)Z(l,t,u);const{position:f,normal:m,tangent:d,color:g,texCoord0:x}=l.vertexAttributes,b={position:f.typedBuffer,normal:e(m)?m.typedBuffer:null,tangent:e(d)?d.typedBuffer:null,uv:e(x)?x.typedBuffer:null,color:e(g)?g.typedBuffer:null},h=z(b,r,n);return{transform:h.transform,components:l.components,spatialReference:r.spatialReference,vertexAttributes:new p({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:b.color,uv:b.uv})}}function H(t,e){if(c(t))return"-";const r=t.typedBuffer;return`${n(e,r.buffer,(()=>e.size))}/${r.byteOffset}/${r.byteLength}`}function J(t){return e(t)?t.toString():"-"}function W(t){let e=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,s=new Map,a=[];for(const i of t.parts){const{attributes:{position:t,normal:c,color:u,tangent:l,texCoord0:f}}=i,m=`\n      ${H(t,o)}/\n      ${H(c,o)}/\n      ${H(u,o)}/\n      ${H(l,o)}/\n      ${H(f,o)}/\n      ${J(i.transform)}\n    `;let p=!1;const d=n(s,m,(()=>(p=!0,{start:e,length:t.count})));p&&(e+=t.count),c&&(r.normal=!0),u&&(r.color=!0),l&&(r.tangent=!0),f&&(r.texCoord0=!0),a.push({gltf:i,writeVertices:p,region:d})}return{vertexAttributes:{position:S(g,e),normal:r.normal?S(x,e):null,tangent:r.tangent?S(b,e):null,color:r.color?S(h,e):null,texCoord0:r.texCoord0?S(v,e):null},parts:a,components:[]}}function X(t){return new f({data:t.data,wrap:rt(t.parameters.wrap)})}function Y(t,e){const n=new s(function(t,e){return l(nt(t[0]),nt(t[1]),nt(t[2]),e)}(t.color,t.opacity)),i=t.emissiveFactor?new s(function(t){return a(nt(t[0]),nt(t[1]),nt(t[2]))}(t.emissiveFactor)):null;return new m({color:n,colorTexture:r(o(t.textureColor,(t=>e.get(t)))),normalTexture:r(o(t.textureNormal,(t=>e.get(t)))),emissiveColor:i,emissiveTexture:r(o(t.textureEmissive,(t=>e.get(t)))),occlusionTexture:r(o(t.textureOcclusion,(t=>e.get(t)))),alphaMode:et(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:r(o(t.textureMetallicRoughness,(t=>e.get(t))))})}function Z(t,e,r){e.writeVertices&&tt(t,e);const o=e.gltf,n=function(t,e){switch(e){case K.TRIANGLES:return V(t,k);case K.TRIANGLE_STRIP:return D(t);case K.TRIANGLE_FAN:return q(t)}}(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let t=0;t<n.length;t++)n[t]+=s;t.components.push(new d({faces:n,material:r.get(o.material),trustSourceNormals:!0}))}function tt(t,r){const{position:o,normal:n,tangent:s,color:a,texCoord0:c}=t.vertexAttributes,l=r.region.start,{attributes:f,transform:m}=r.gltf,p=f.position.count;if(C(o.slice(l,p),f.position,m),e(f.normal)&&e(n)){const t=i(u(),m);E(n.slice(l,p),f.normal,t)}else e(n)&&T(n,0,0,1,{dstIndex:l,count:p});if(e(f.tangent)&&e(s)){const t=i(u(),m);I(s.slice(l,p),f.tangent,t)}else e(s)&&L(s,0,0,1,1,{dstIndex:l,count:p});if(e(f.texCoord0)&&e(c)?N(c.slice(l,p),f.texCoord0):e(c)&&O(c,0,0,{dstIndex:l,count:p}),e(f.color)&&e(a)){const t=f.color,e=a.slice(l,p);if(4===t.elementCount)t instanceof b?_(e,t,255):t instanceof h?G(e,t):t instanceof w&&P(e,t,8);else{L(e,255,255,255,255);const r=y.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof x?j(r,t,255):t instanceof y?M(r,t):t instanceof A&&R(r,t,8)}}else e(a)&&L(a.slice(l,p),255,255,255,255)}function et(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function rt(t){return{horizontal:ot(t.s),vertical:ot(t.t)}}function ot(t){switch(t){case Q.CLAMP_TO_EDGE:return"clamp";case Q.MIRRORED_REPEAT:return"mirror";case Q.REPEAT:return"repeat"}}function nt(t){return t**(1/$)*255}export{U as loadGLTFMesh};
