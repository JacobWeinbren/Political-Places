import{L as t,r as e,bk as r,iD as o,bf as n,a7 as s,fn as a}from"../main.js";import{a as i}from"./quat-8f97932b.js";import{b as u,a as c,d as l,r as f,o as m,e as p,t as d,g as x,q as b,i as g,j as v,v as w,k as h,m as y,p as C,w as j}from"./DefaultMaterial_COLOR_GAMMA-08dae83c.js";import{m as A,c as M,y as B,f as T}from"./meshFeatureSet-fe7e5947.js";import{T as F,i as I,c as S,x as E,u as R,L as q,O as L,E as O}from"./BufferView-4ea22acb.js";import{a as k,f as D,h as N,r as G,c as V,n as _}from"./vec33-4d62ec94.js";import{k as z}from"./georeference-3d91711f.js";import"./vec4-1a478426.js";import"./types-57fbb86d.js";import"./Version-f961db75.js";import"./earcut-a11d06f2.js";import"./deduplicate-828ddd29.js";async function K(r,o,n){const s=new u(function(r){return null!=r&&r.resolveFile?{busy:!1,request:async(o,n,s)=>{const a=r.resolveFile(o),i="image"===n?"image":"binary"===n?"array-buffer":"json";return(await t(a,{responseType:i,signal:e(s)?s.signal:null})).data}}:null}(n)),a=(await c(s,o,n,!0)).model,i=a.lods.shift(),l=new Map,f=new Map;a.textures.forEach(((t,e)=>l.set(e,function(t){return new A({data:t.data,wrap:W(t.parameters.wrap)})}(t)))),a.materials.forEach(((t,e)=>f.set(e,Q(t,l))));const m=P(i);for(const t of i.parts)U(m,t,f);const{position:p,normal:d,tangent:x,color:b,texCoord0:g}=m.vertexAttributes,v={position:p.typedBuffer,normal:e(d)?d.typedBuffer:null,tangent:e(x)?x.typedBuffer:null,uv:e(g)?g.typedBuffer:null,color:e(b)?b.typedBuffer:null},w=z(v,r,n);return{transform:w.transform,components:m.components,spatialReference:r.spatialReference,vertexAttributes:new B({position:w.vertexAttributes.position,normal:w.vertexAttributes.normal,tangent:w.vertexAttributes.tangent,color:v.color,uv:v.uv})}}function P(t){let e=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1};for(const{attributes:{position:o,normal:n,color:s,tangent:a,texCoord0:i}}of t.parts)e+=o.count,n&&(r.normal=!0),s&&(r.color=!0),a&&(r.tangent=!0),i&&(r.texCoord0=!0);return{writeIndex:0,vertexAttributes:{position:l(F,e),normal:r.normal?l(I,e):null,tangent:r.tangent?l(S,e):null,color:r.color?l(E,e):null,texCoord0:r.texCoord0?l(R,e):null},components:[]}}function Q(t,e){const a=new n(function(t,e){return f(Y(t[0]),Y(t[1]),Y(t[2]),e)}(t.color,t.opacity)),i=t.emissiveFactor?new n(function(t){return s(Y(t[0]),Y(t[1]),Y(t[2]))}(t.emissiveFactor)):null;return new M({color:a,colorTexture:r(o(t.textureColor,(t=>e.get(t)))),normalTexture:r(o(t.textureNormal,(t=>e.get(t)))),emissiveColor:i,emissiveTexture:r(o(t.textureEmissive,(t=>e.get(t)))),occlusionTexture:r(o(t.textureOcclusion,(t=>e.get(t)))),alphaMode:J(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:r(o(t.textureMetallicRoughness,(t=>e.get(t))))})}function U(t,r,o){const{position:n,normal:s,tangent:u,color:c,texCoord0:l}=t.vertexAttributes,f=t.writeIndex,m=r.attributes.position.count;if(k(n.slice(f,m),r.attributes.position,r.transform),e(r.attributes.normal)&&e(s)){const t=a(i(),r.transform);D(s.slice(f,m),r.attributes.normal,t)}else e(s)&&N(s,0,0,1,{dstIndex:f,count:m});if(e(r.attributes.tangent)&&e(u)){const t=a(i(),r.transform);p(u.slice(f,m),r.attributes.tangent,t)}else e(u)&&d(u,0,0,1,1,{dstIndex:f,count:m});if(e(r.attributes.texCoord0)&&e(l)?x(l.slice(f,m),r.attributes.texCoord0):e(l)&&b(l,0,0,{dstIndex:f,count:m}),e(r.attributes.color)&&e(c)){const t=r.attributes.color,e=c.slice(f,m);if(4===t.elementCount)t instanceof S?g(e,t,255):t instanceof E?v(e,t):t instanceof q&&w(e,t,8);else{d(e,255,255,255,255);const r=L.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof I?G(r,t,255):t instanceof L?V(r,t):t instanceof O&&_(r,t,8)}}else e(c)&&d(c.slice(f,m),255,255,255,255);const h=H(r.indices||m,r.primitiveType);if(f)for(let t=0;t<h.length;t++)h[t]+=f;t.components.push(new T({faces:h,material:o.get(r.material).clone(),trustSourceNormals:!0})),t.writeIndex+=m}function H(t,e){switch(e){case 4:return C(t,j);case 5:return y(t);case 6:return h(t)}}function J(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function W(t){return{horizontal:X(t.s),vertical:X(t.t)}}function X(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function Y(t){return t**(1/m)*255}export{K as loadGLTFMesh};
