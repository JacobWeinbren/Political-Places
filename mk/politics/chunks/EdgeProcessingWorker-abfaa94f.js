import{n as e}from"./deduplicate-ced55e46.js";import{y as t,u as n,i as o,c as s,l as r,p as i,o as a,m as c,T as f,h as l,a as u,b as g,d,A as p,O as m,x as h,g as w,w as v,E as y,L as A,B as I,F as b,I as L,U as N,j as V,V as S,M as E,S as x,k as U,q as W,v as B,z as D,C as F,D as k,G as M,H as j}from"./BufferView-a450f70c.js";import{eX as P,eY as z,$ as T,bU as $,eZ as C,e_ as H,e$ as O,a0 as R,f0 as _,f1 as q,f2 as G,f3 as X,f4 as Y,f5 as Z,f6 as J}from"../main.js";import{A as K}from"./InterleavedLayout-e51b1688.js";import"./vec4-d7d3974b.js";import"./types-dab619ab.js";function Q(e,t,n){const o=t/3,s=new Uint32Array(n+1),r=new Uint32Array(n+1),i=(e,t)=>{e<t?s[e+1]++:r[t+1]++};for(let t=0;t<o;t++){const n=e[3*t],o=e[3*t+1],s=e[3*t+2];i(n,o),i(o,s),i(s,n)}let a=0,c=0;for(let e=0;e<n;e++){const t=s[e+1],n=r[e+1];s[e+1]=a,r[e+1]=c,a+=t,c+=n}const f=new Uint32Array(6*o),l=s[n],u=(e,t,n)=>{if(e<t){const o=s[e+1]++;f[2*o]=t,f[2*o+1]=n}else{const o=r[t+1]++;f[2*l+2*o]=e,f[2*l+2*o+1]=n}};for(let t=0;t<o;t++){const n=e[3*t],o=e[3*t+1],s=e[3*t+2];u(n,o,t),u(o,s,t),u(s,n,t)}const g=(e,t)=>{const n=2*e,o=t-e;for(let e=1;e<o;e++){const t=f[n+2*e],o=f[n+2*e+1];let s=e-1;for(;s>=0&&f[n+2*s]>t;s--)f[n+2*s+2]=f[n+2*s],f[n+2*s+3]=f[n+2*s+1];f[n+2*s+2]=t,f[n+2*s+3]=o}};for(let e=0;e<n;e++)g(s[e],s[e+1]),g(l+r[e],l+r[e+1]);const d=new Int32Array(3*o),p=(t,n)=>t===e[3*n]?0:t===e[3*n+1]?1:t===e[3*n+2]?2:-1,m=(e,t)=>{const n=p(e,t);d[3*t+n]=-1},h=(e,t,n,o)=>{const s=p(e,t);d[3*t+s]=o;const r=p(n,o);d[3*o+r]=t};for(let e=0;e<n;e++){let t=s[e];const n=s[e+1];let o=r[e];const i=r[e+1];for(;t<n&&o<i;){const n=f[2*t],s=f[2*l+2*o];n===s?(h(e,f[2*t+1],s,f[2*l+2*o+1]),t++,o++):n<s?(m(e,f[2*t+1]),t++):(m(s,f[2*l+2*o+1]),o++)}for(;t<n;)m(e,f[2*t+1]),t++;for(;o<i;)m(f[2*l+2*o],f[2*l+2*o+1]),o++}return d}function ee(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:te(e.layout)}}function te(e){const t=new Array;return e.fields.forEach(((e,n)=>{const o={...e,constructor:oe(e.constructor)};t.push([n,o])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}const ne=[t,n,o,s,r,i,a,c,f,l,u,g,d,p,m,h,w,v,y,A,I,b,L,N,V,S,E,x,U,W,B,D,F,k,M,j];function oe(e){return`${e.ElementType}_${e.ElementCount}`}const se=new Map;function re(e,t=0){const n=e.stride;return e.fieldNames.filter((t=>{const n=e.fields.get(t).optional;return!(n&&n.glPadding)})).map((o=>{const s=e.fields.get(o),r=s.constructor.ElementCount,i=ie(s.constructor.ElementType),a=s.offset,c=!(!s.optional||!s.optional.glNormalized);return{name:o,stride:n,count:r,type:i,offset:a,normalized:c,divisor:t}}))}function ie(e){const t=ae[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}ne.forEach((e=>se.set(oe(e),e)));const ae={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126},ce=K().vec3f("position").u16("componentIndex").u16("u16padding");re(K().vec2u8("sideness"));const fe=K().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0}),le=fe.clone().vec3f("normal"),ue=fe.clone().vec3f("normalA").vec3f("normalB");class ge{updateSettings(e){this.settings=e,this.edgeHashFunction=e.reducedPrecision?we:he}write(e,t,n){const o=this.edgeHashFunction(n);be.seed=o;const s=be.getIntRange(0,255),r=be.getIntRange(0,this.settings.variants-1),i=be.getFloat(),a=255*(.5*function(e,t){const n=e<0?-1:1;return Math.abs(e)**t*n}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7),1.2)+.5);e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex),e.variantOffset.set(t,s),e.variantStroke.set(t,r),e.variantExtension.set(t,a)}trim(e,t){return e.slice(0,t)}}const de=new Float32Array(6),pe=new Uint32Array(de.buffer),me=new Uint32Array(1);function he(e){const t=de;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],me[0]=5381;for(let e=0;e<pe.length;e++)me[0]=31*me[0]+pe[e];return me[0]}function we(e){const t=de;t[0]=ve(e.position0[0]),t[1]=ve(e.position0[1]),t[2]=ve(e.position0[2]),t[3]=ve(e.position1[0]),t[4]=ve(e.position1[1]),t[5]=ve(e.position1[2]),me[0]=5381;for(let e=0;e<pe.length;e++)me[0]=31*me[0]+pe[e];return me[0]}function ve(e){return Math.round(1e4*e)/1e4}class ye{constructor(){this.commonWriter=new ge}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return le.createBuffer(e)}write(e,t,n){this.commonWriter.write(e,t,n),P(Ie,n.faceNormal0,n.faceNormal1),z(Ie,Ie),e.normal.setVec(t,Ie)}trim(e,t){return this.commonWriter.trim(e,t)}}ye.Layout=le,ye.glLayout=re(le,1);class Ae{constructor(){this.commonWriter=new ge}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return ue.createBuffer(e)}write(e,t,n){this.commonWriter.write(e,t,n),e.normalA.setVec(t,n.faceNormal0),e.normalB.setVec(t,n.faceNormal1)}trim(e,t){return this.commonWriter.trim(e,t)}}Ae.Layout=ue,Ae.glLayout=re(ue,1);const Ie=T(),be=new $,Le=-1;function Ne(e,t,n,o=Be){const s=e.vertices.position,r=e.vertices.componentIndex,i=C(o.anglePlanar),a=C(o.angleSignificantEdge),c=Math.cos(a),f=Math.cos(i),l=Ue.edge,u=l.position0,g=l.position1,d=l.faceNormal0,p=l.faceNormal1,m=xe(e),h=function(e){const t=e.faces.length/3,n=e.faces,o=e.neighbors;let s=0;for(let e=0;e<t;e++){const t=o[3*e+0],r=o[3*e+1],i=o[3*e+2],a=n[3*e+0],c=n[3*e+1],f=n[3*e+2];s+=t===Le||a<c?1:0,s+=r===Le||c<f?1:0,s+=i===Le||f<a?1:0}const r=new Int32Array(4*s);let i=0;for(let e=0;e<t;e++){const t=o[3*e+0],s=o[3*e+1],a=o[3*e+2],c=n[3*e+0],f=n[3*e+1],l=n[3*e+2];(t===Le||c<f)&&(r[i++]=c,r[i++]=f,r[i++]=e,r[i++]=t),(s===Le||f<l)&&(r[i++]=f,r[i++]=l,r[i++]=e,r[i++]=s),(a===Le||l<c)&&(r[i++]=l,r[i++]=c,r[i++]=e,r[i++]=a)}return r}(e),w=h.length/4,v=t.allocate(w);let y=0;const A=w,I=n.allocate(A);let b=0,L=0,N=0;const V=H(0,w),S=new Float32Array(w);O(S,((e,t,n)=>{s.getVec(h[4*t+0],u),s.getVec(h[4*t+1],g),n[t]=J(u,g)})),V.sort(((e,t)=>S[t]-S[e]));const E=new Array,x=new Array;for(let e=0;e<w;e++){const o=V[e],a=S[o],w=h[4*o+0],A=h[4*o+1],U=h[4*o+2],W=h[4*o+3],B=W===Le;if(s.getVec(w,u),s.getVec(A,g),B)R(d,m[3*U+0],m[3*U+1],m[3*U+2]),_(p,d),l.componentIndex=r.get(w),l.cosAngle=q(d,p);else{if(R(d,m[3*U+0],m[3*U+1],m[3*U+2]),R(p,m[3*W+0],m[3*W+1],m[3*W+2]),l.componentIndex=r.get(w),l.cosAngle=q(d,p),Se(l,f))continue;l.cosAngle<-.9999&&_(p,d)}L+=a,N++,B||Ve(l,c)?(t.write(v,y++,l),E.push(a)):Ee(l,i)&&(n.write(I,b++,l),x.push(a))}const U=new Float32Array(E.reverse()),W=new Float32Array(x.reverse());return{regular:{instancesData:t.trim(v,y),lodInfo:{lengths:U}},silhouette:{instancesData:n.trim(I,b),lodInfo:{lengths:W}},averageEdgeLength:L/N}}function Ve(e,t){return e.cosAngle<t}function Se(e,t){return e.cosAngle>t}function Ee(e,t){const n=X(e.cosAngle),o=Ue.fwd,s=Ue.ortho;return Y(o,e.position1,e.position0),n*(q(G(s,e.faceNormal0,e.faceNormal1),o)>0?-1:1)>t}function xe(e){const t=e.faces.length/3,n=e.vertices.position,o=e.faces,s=We.v0,r=We.v1,i=We.v2,a=new Float32Array(3*t);for(let e=0;e<t;e++){const t=o[3*e+0],c=o[3*e+1],f=o[3*e+2];n.getVec(t,s),n.getVec(c,r),n.getVec(f,i),Z(r,r,s),Z(i,i,s),G(s,r,i),z(s,s),a[3*e+0]=s[0],a[3*e+1]=s[1],a[3*e+2]=s[2]}return a}const Ue={edge:{position0:T(),position1:T(),faceNormal0:T(),faceNormal1:T(),componentIndex:0,cosAngle:0},ortho:T(),fwd:T()},We={v0:T(),v1:T(),v2:T()},Be={anglePlanar:4,angleSignificantEdge:35};async function De(e){const t=ke(e),n=Fe(t),o=[t.data.buffer];return{result:Me(n,o),transferList:o}}function Fe(e){const t=je(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return Pe.updateSettings(e.writerSettings),ze.updateSettings(e.writerSettings),Ne(t,Pe,ze)}function ke(e){return{data:ce.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function Me(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:ee(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:ee(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function je(t,n,o,s){if(n)return{faces:o,facesLength:s,neighbors:Q(o,s,t.count),vertices:t};const r=e(t.buffer,t.stride/4,{originalIndices:o,originalIndicesLength:s}),i=Q(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:i,vertices:ce.createView(r.buffer)}}const Pe=new ye,ze=new Ae;export{Fe as work,De as wrappedWork};
