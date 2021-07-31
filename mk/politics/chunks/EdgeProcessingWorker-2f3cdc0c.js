import{n as t}from"./deduplicate-22e2b762.js";import{y as e,u as n,i as o,c as s,l as r,p as i,o as a,m as c,T as f,h as l,a as u,b as g,d,A as p,O as m,x as h,g as w,w as v,E as y,L as A,B as I,F as b,I as L,U as N,j as V,V as S,M as E,S as x,k as U,q as W,v as B,z as D,C as F,D as k,G as M,H as j}from"./BufferView-7a4c0bd1.js";import{eX as P,eY as z,$ as T,bU as $,eZ as C,e_ as H,e$ as O,a0 as R,f0 as _,f1 as q,f2 as G,f3 as X,f4 as Y,f5 as Z,f6 as J}from"../main.js";import{A as K}from"./InterleavedLayout-0bd1035c.js";import"./vec4-54c367f1.js";import"./types-54cd32c2.js";function Q(t,e,n){const o=e/3,s=new Uint32Array(n+1),r=new Uint32Array(n+1),i=(t,e)=>{t<e?s[t+1]++:r[e+1]++};for(let e=0;e<o;e++){const n=t[3*e],o=t[3*e+1],s=t[3*e+2];i(n,o),i(o,s),i(s,n)}let a=0,c=0;for(let t=0;t<n;t++){const e=s[t+1],n=r[t+1];s[t+1]=a,r[t+1]=c,a+=e,c+=n}const f=new Uint32Array(6*o),l=s[n],u=(t,e,n)=>{if(t<e){const o=s[t+1]++;f[2*o]=e,f[2*o+1]=n}else{const o=r[e+1]++;f[2*l+2*o]=t,f[2*l+2*o+1]=n}};for(let e=0;e<o;e++){const n=t[3*e],o=t[3*e+1],s=t[3*e+2];u(n,o,e),u(o,s,e),u(s,n,e)}const g=(t,e)=>{const n=2*t,o=e-t;for(let t=1;t<o;t++){const e=f[n+2*t],o=f[n+2*t+1];let s=t-1;for(;s>=0&&f[n+2*s]>e;s--)f[n+2*s+2]=f[n+2*s],f[n+2*s+3]=f[n+2*s+1];f[n+2*s+2]=e,f[n+2*s+3]=o}};for(let t=0;t<n;t++)g(s[t],s[t+1]),g(l+r[t],l+r[t+1]);const d=new Int32Array(3*o),p=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,m=(t,e)=>{const n=p(t,e);d[3*e+n]=-1},h=(t,e,n,o)=>{const s=p(t,e);d[3*e+s]=o;const r=p(n,o);d[3*o+r]=e};for(let t=0;t<n;t++){let e=s[t];const n=s[t+1];let o=r[t];const i=r[t+1];for(;e<n&&o<i;){const n=f[2*e],s=f[2*l+2*o];n===s?(h(t,f[2*e+1],s,f[2*l+2*o+1]),e++,o++):n<s?(m(t,f[2*e+1]),e++):(m(s,f[2*l+2*o+1]),o++)}for(;e<n;)m(t,f[2*e+1]),e++;for(;o<i;)m(f[2*l+2*o],f[2*l+2*o+1]),o++}return d}function tt(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:et(t.layout)}}function et(t){const e=new Array;return t.fields.forEach(((t,n)=>{const o={...t,constructor:ot(t.constructor)};e.push([n,o])})),{stride:t.stride,fields:e,fieldNames:t.fieldNames}}const nt=[e,n,o,s,r,i,a,c,f,l,u,g,d,p,m,h,w,v,y,A,I,b,L,N,V,S,E,x,U,W,B,D,F,k,M,j];function ot(t){return`${t.ElementType}_${t.ElementCount}`}const st=new Map;function rt(t,e=0){const n=t.stride;return t.fieldNames.filter((e=>{const n=t.fields.get(e).optional;return!(n&&n.glPadding)})).map((o=>{const s=t.fields.get(o),r=s.constructor.ElementCount,i=it(s.constructor.ElementType),a=s.offset,c=!(!s.optional||!s.optional.glNormalized);return{name:o,stride:n,count:r,type:i,offset:a,normalized:c,divisor:e}}))}function it(t){const e=at[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}nt.forEach((t=>st.set(ot(t),t)));const at={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126},ct=K().vec3f("position").u16("componentIndex").u16("u16padding");rt(K().vec2u8("sideness"));const ft=K().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0}),lt=ft.clone().vec3f("normal"),ut=ft.clone().vec3f("normalA").vec3f("normalB");class gt{updateSettings(t){this.settings=t,this.edgeHashFunction=t.reducedPrecision?wt:ht}write(t,e,n){const o=this.edgeHashFunction(n);bt.seed=o;const s=bt.getIntRange(0,255),r=bt.getIntRange(0,this.settings.variants-1),i=bt.getFloat(),a=255*(.5*function(t,e){const n=t<0?-1:1;return Math.abs(t)**e*n}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7),1.2)+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,s),t.variantStroke.set(e,r),t.variantExtension.set(e,a)}trim(t,e){return t.slice(0,e)}}const dt=new Float32Array(6),pt=new Uint32Array(dt.buffer),mt=new Uint32Array(1);function ht(t){const e=dt;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],mt[0]=5381;for(let t=0;t<pt.length;t++)mt[0]=31*mt[0]+pt[t];return mt[0]}function wt(t){const e=dt;e[0]=vt(t.position0[0]),e[1]=vt(t.position0[1]),e[2]=vt(t.position0[2]),e[3]=vt(t.position1[0]),e[4]=vt(t.position1[1]),e[5]=vt(t.position1[2]),mt[0]=5381;for(let t=0;t<pt.length;t++)mt[0]=31*mt[0]+pt[t];return mt[0]}function vt(t){return Math.round(1e4*t)/1e4}class yt{constructor(){this.commonWriter=new gt}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return lt.createBuffer(t)}write(t,e,n){this.commonWriter.write(t,e,n),P(It,n.faceNormal0,n.faceNormal1),z(It,It),t.normal.setVec(e,It)}trim(t,e){return this.commonWriter.trim(t,e)}}yt.Layout=lt,yt.glLayout=rt(lt,1);class At{constructor(){this.commonWriter=new gt}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return ut.createBuffer(t)}write(t,e,n){this.commonWriter.write(t,e,n),t.normalA.setVec(e,n.faceNormal0),t.normalB.setVec(e,n.faceNormal1)}trim(t,e){return this.commonWriter.trim(t,e)}}At.Layout=ut,At.glLayout=rt(ut,1);const It=T(),bt=new $,Lt=-1;function Nt(t,e,n,o=Bt){const s=t.vertices.position,r=t.vertices.componentIndex,i=C(o.anglePlanar),a=C(o.angleSignificantEdge),c=Math.cos(a),f=Math.cos(i),l=Ut.edge,u=l.position0,g=l.position1,d=l.faceNormal0,p=l.faceNormal1,m=xt(t),h=function(t){const e=t.faces.length/3,n=t.faces,o=t.neighbors;let s=0;for(let t=0;t<e;t++){const e=o[3*t+0],r=o[3*t+1],i=o[3*t+2],a=n[3*t+0],c=n[3*t+1],f=n[3*t+2];s+=e===Lt||a<c?1:0,s+=r===Lt||c<f?1:0,s+=i===Lt||f<a?1:0}const r=new Int32Array(4*s);let i=0;for(let t=0;t<e;t++){const e=o[3*t+0],s=o[3*t+1],a=o[3*t+2],c=n[3*t+0],f=n[3*t+1],l=n[3*t+2];(e===Lt||c<f)&&(r[i++]=c,r[i++]=f,r[i++]=t,r[i++]=e),(s===Lt||f<l)&&(r[i++]=f,r[i++]=l,r[i++]=t,r[i++]=s),(a===Lt||l<c)&&(r[i++]=l,r[i++]=c,r[i++]=t,r[i++]=a)}return r}(t),w=h.length/4,v=e.allocate(w);let y=0;const A=w,I=n.allocate(A);let b=0,L=0,N=0;const V=H(0,w),S=new Float32Array(w);O(S,((t,e,n)=>{s.getVec(h[4*e+0],u),s.getVec(h[4*e+1],g),n[e]=J(u,g)})),V.sort(((t,e)=>S[e]-S[t]));const E=new Array,x=new Array;for(let t=0;t<w;t++){const o=V[t],a=S[o],w=h[4*o+0],A=h[4*o+1],U=h[4*o+2],W=h[4*o+3],B=W===Lt;if(s.getVec(w,u),s.getVec(A,g),B)R(d,m[3*U+0],m[3*U+1],m[3*U+2]),_(p,d),l.componentIndex=r.get(w),l.cosAngle=q(d,p);else{if(R(d,m[3*U+0],m[3*U+1],m[3*U+2]),R(p,m[3*W+0],m[3*W+1],m[3*W+2]),l.componentIndex=r.get(w),l.cosAngle=q(d,p),St(l,f))continue;l.cosAngle<-.9999&&_(p,d)}L+=a,N++,B||Vt(l,c)?(e.write(v,y++,l),E.push(a)):Et(l,i)&&(n.write(I,b++,l),x.push(a))}const U=new Float32Array(E.reverse()),W=new Float32Array(x.reverse());return{regular:{instancesData:e.trim(v,y),lodInfo:{lengths:U}},silhouette:{instancesData:n.trim(I,b),lodInfo:{lengths:W}},averageEdgeLength:L/N}}function Vt(t,e){return t.cosAngle<e}function St(t,e){return t.cosAngle>e}function Et(t,e){const n=X(t.cosAngle),o=Ut.fwd,s=Ut.ortho;return Y(o,t.position1,t.position0),n*(q(G(s,t.faceNormal0,t.faceNormal1),o)>0?-1:1)>e}function xt(t){const e=t.faces.length/3,n=t.vertices.position,o=t.faces,s=Wt.v0,r=Wt.v1,i=Wt.v2,a=new Float32Array(3*e);for(let t=0;t<e;t++){const e=o[3*t+0],c=o[3*t+1],f=o[3*t+2];n.getVec(e,s),n.getVec(c,r),n.getVec(f,i),Z(r,r,s),Z(i,i,s),G(s,r,i),z(s,s),a[3*t+0]=s[0],a[3*t+1]=s[1],a[3*t+2]=s[2]}return a}const Ut={edge:{position0:T(),position1:T(),faceNormal0:T(),faceNormal1:T(),componentIndex:0,cosAngle:0},ortho:T(),fwd:T()},Wt={v0:T(),v1:T(),v2:T()},Bt={anglePlanar:4,angleSignificantEdge:35};async function Dt(t){const e=kt(t),n=Ft(e),o=[e.data.buffer];return{result:Mt(n,o),transferList:o}}function Ft(t){const e=jt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return Pt.updateSettings(t.writerSettings),zt.updateSettings(t.writerSettings),Nt(e,Pt,zt)}function kt(t){return{data:ct.createView(t.dataBuffer),indices:"Uint32Array"===t.indicesType?new Uint32Array(t.indicesBuffer):"Uint16Array"===t.indicesType?new Uint16Array(t.indicesBuffer):void 0,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function Mt(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:tt(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:tt(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}function jt(e,n,o,s){if(n)return{faces:o,facesLength:s,neighbors:Q(o,s,e.count),vertices:e};const r=t(e.buffer,e.stride/4,{originalIndices:o,originalIndicesLength:s}),i=Q(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:i,vertices:ct.createView(r.buffer)}}const Pt=new yt,zt=new At;export{Ft as work,Dt as wrappedWork};
