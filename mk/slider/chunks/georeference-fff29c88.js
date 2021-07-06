import{f4 as r,f1 as t,fd as n,V as e,W as o,X as a,cJ as i,$ as s,a7 as l,fe as f,ff as c,fg as u,fh as p,fi as y,fj as g,fk as h,fl as m,fm as A,fn as T,fo as d,a4 as E,r as v,fp as F,fq as w,fr as M,n as x,fs as R,ft as P,fu as N,fv as b,fw as _,fx as j,fy as z,fz as B,f0 as L,t as C,fA as S,fB as V,aH as Y,fC as q,fD as I}from"../main.js";import{A as G,P as O,I as W,e as k,a as D}from"./quat-fd61ddf7.js";import{e as H,a as J,b as U,c as X,f as $,o as K}from"./vec33-c1d1c536.js";import{T as Q,i as Z}from"./BufferView-cef53c18.js";function rr(r=ar){return[r[0],r[1],r[2],r[3]]}function tr(t,n,e=rr()){return r(e,t),e[3]=n,e}function nr(r,t,e=rr()){return G(ir,r,or(r)),G(sr,t,or(t)),O(ir,sr,ir),function(r,t){return r[3]=t,r}(e,n(W(e,ir)))}function er(r){return r}function or(r){return t(r[3])}const ar=[0,0,1,0],ir=k(),sr=k();var lr;rr();let fr=lr=class extends i{constructor(r){super(r),this.origin=s(),this.translation=s(),this.rotation=rr(),this.scale=l(1,1,1),this.geographic=!0}get localMatrix(){const r=H();return f(r,r,this.scale),c(r,r,or(this.rotation),this.rotation),u(r,r,this.translation),r}get localMatrixInverse(){return p(H(),this.localMatrix)}applyLocal(r,t){return y(t,r,this.localMatrix)}applyLocalInverse(r,t){return y(t,r,this.localMatrixInverse)}project(r,t){const n=new Float64Array(r.length),e=Q.fromTypedArray(n),o=Q.fromTypedArray(r);if(this.geographic){const r=g(h(t)),a=H();return m(t,this.origin,a,r),A(a,a,this.localMatrix),J(e,o,a),T(n,r,0,n,t,0,n.length/3),n}const{localMatrix:a,origin:i}=this;d(a,U)?X(e,o):J(e,o,a);for(let r=0;r<n.length;r+=3)n[r+0]+=i[0],n[r+1]+=i[1],n[r+2]+=i[2];return n}getOriginPoint(r){const[t,n,e]=this.origin;return new E({x:t,y:n,z:e,spatialReference:r})}equals(r){return v(r)&&this.geographic===r.geographic&&F(this.origin,r.origin)&&w(this.localMatrix,r.localMatrix)}clone(){const r={origin:M(this.origin),translation:M(this.translation),rotation:rr(this.rotation),scale:M(this.scale),geographic:this.geographic};return new lr(r)}};e([o({type:[Number],nonNullable:!0,json:{write:!0}})],fr.prototype,"origin",void 0),e([o({type:[Number],nonNullable:!0,json:{write:!0}})],fr.prototype,"translation",void 0),e([o({type:[Number],nonNullable:!0,json:{write:!0}})],fr.prototype,"rotation",void 0),e([o({type:[Number],nonNullable:!0,json:{write:!0}})],fr.prototype,"scale",void 0),e([o({type:Boolean,nonNullable:!0,json:{write:!0}})],fr.prototype,"geographic",void 0),e([o()],fr.prototype,"localMatrix",null),e([o()],fr.prototype,"localMatrixInverse",null),fr=lr=e([a("esri.geometry.support.MeshTransform")],fr);var cr=fr;function ur(r,t){var n;return r.isGeographic||r.isWebMercator&&(null==(n=null==t?void 0:t.geographic)||n)}const pr=x.getLogger("esri.geometry.support.meshUtils.normalProjection");function yr(r,t,n,e,o){return wr(e)?(Fr(0,Z.fromTypedArray(r),Q.fromTypedArray(t),Q.fromTypedArray(n),e,Z.fromTypedArray(o)),o):(pr.error("Cannot convert spatial reference to PCPF"),o)}function gr(r,t,n,e,o){return wr(e)?(Fr(1,Z.fromTypedArray(r),Q.fromTypedArray(t),Q.fromTypedArray(n),e,Z.fromTypedArray(o)),o):(pr.error("Cannot convert to spatial reference from PCPF"),o)}function hr(r,t,n){return T(r,t,0,n,R(t),0,r.length/3),n}function mr(r,t,n){return T(r,R(n),0,t,n,0,r.length/3),t}function Ar(r,t,n){if(C(r))return t;const e=Q.fromTypedArray(r),o=Q.fromTypedArray(t);return J(o,e,n),t}function Tr(r,t,n){if(C(r))return t;S(Nr,n);const e=Z.fromTypedArray(r),o=Z.fromTypedArray(t);return $(o,e,Nr),V(Nr)||K(o,o),t}function dr(r,t,n){if(C(r))return t;S(Nr,n);const e=Z.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),o=Z.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if($(o,e,Nr),V(Nr)||K(o,o),r!==t)for(let n=3;n<r.length;n+=4)t[n]=r[n];return t}function Er(r,t,n,e,o){if(!wr(e))return pr.error("Cannot convert spatial reference to PCPF"),o;Fr(0,Z.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),Q.fromTypedArray(t),Q.fromTypedArray(n),e,Z.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let t=3;t<r.length;t+=4)o[t]=r[t];return o}function vr(r,t,n,e,o){if(!wr(e))return pr.error("Cannot convert to spatial reference from PCPF"),o;Fr(1,Z.fromTypedArray(r,16),Q.fromTypedArray(t),Q.fromTypedArray(n),e,Z.fromTypedArray(o,16));for(let t=3;t<r.length;t+=4)o[t]=r[t];return o}function Fr(r,t,n,e,o,a){if(!t)return;const i=n.count,s=R(o);if(Mr(o))for(let n=0;n<i;n++)e.getVec(n,xr),t.getVec(n,Rr),m(s,xr,Pr,s),_(Nr,Pr),1===r&&j(Nr,Nr),z(Rr,Rr,Nr),a.setVec(n,Rr);else for(let o=0;o<i;o++){e.getVec(o,xr),t.getVec(o,Rr),m(s,xr,Pr,s),_(Nr,Pr);const i=B(n.get(o,1));let l=Math.cos(i);0===r&&(l=1/l),Nr[0]*=l,Nr[1]*=l,Nr[2]*=l,Nr[3]*=l,Nr[4]*=l,Nr[5]*=l,1===r&&j(Nr,Nr),z(Rr,Rr,Nr),L(Rr,Rr),a.setVec(o,Rr)}return a}function wr(r){return Mr(r)||function(r){return r.isWebMercator}(r)}function Mr(r){return r.isWGS84||P(r)||N(r)||b(r)}const xr=s(),Rr=s(),Pr=H(),Nr=D();function br(r,t,n){return ur(t.spatialReference,n)?function(r,t,n){const e=t.spatialReference,o=Yr(t,n,Or),a=new Float64Array(r.position.length),i=function(r,t,n,e){J(Q.fromTypedArray(e),Q.fromTypedArray(r),t);const o=new Float64Array(r.length);return mr(e,o,n)}(r.position,o,e,a),s=S(kr,o);return{position:i,normal:Lr(i,a,r.normal,s,e),tangent:Cr(i,a,r.tangent,s,e)}}(r,t,n):function(r,t,n){const e=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,s=t.z||0,{horizontal:l,vertical:f}=Gr(n?n.unit:null,t.spatialReference);for(let r=0;r<o.length;r+=3)e[r+0]=o[r+0]*l+a,e[r+1]=o[r+1]*l+i,e[r+2]=o[r+2]*f+s;return{position:e,normal:r.normal,tangent:r.tangent}}(r,t,n)}function _r(r,t,n){const{position:e,normal:o,tangent:a}=r;if(C(t))return{position:e,normal:o,tangent:a};const i=t.localMatrix;return br({position:Ar(e,new Float64Array(e.length),i),normal:v(o)?Tr(o,new Float32Array(o.length),i):null,tangent:v(a)?dr(a,new Float32Array(a.length),i):null},t.getOriginPoint(n),{geographic:t.geographic})}function jr(r,t,n){if(null!=n&&n.useTransform){var e;const{position:o,normal:a,tangent:i}=r;return{vertexAttributes:{position:o,normal:a,tangent:i},transform:new cr({origin:[t.x,t.y,null!=(e=t.z)?e:0],geographic:ur(t.spatialReference,n)})}}return{vertexAttributes:br(r,t,n),transform:null}}function zr(r,t,n){return ur(t.spatialReference,n)?Vr(r,t,n):Sr(r,t,n)}function Br(r,t,n,e){if(C(t))return zr(r,n,e);const o=_r(r,t,n.spatialReference);return n.equals(t.getOriginPoint(n.spatialReference))?Sr(o,n,e):ur(n.spatialReference,e)?Vr(o,n,e):Sr(o,n,e)}function Lr(r,t,n,e,o){if(C(n))return null;const a=new Float32Array(n.length);return $(Z.fromTypedArray(a),Z.fromTypedArray(n),e),gr(a,r,t,o,a),a}function Cr(r,t,n,e,o){if(C(n))return null;const a=new Float32Array(n.length);$(Z.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),Z.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),e);for(let r=3;r<a.length;r+=4)a[r]=n[r];return vr(a,r,t,o,a),a}function Sr(r,t,n){const e=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,s=t.z||0,{horizontal:l,vertical:f}=Gr(n?n.unit:null,t.spatialReference);for(let r=0;r<o.length;r+=3)e[r+0]=(o[r+0]-a)/l,e[r+1]=(o[r+1]-i)/l,e[r+2]=(o[r+2]-s)/f;return{position:e,normal:r.normal,tangent:r.tangent}}function Vr(r,t,n){const e=t.spatialReference;Yr(t,n,Or);const o=p(Wr,Or),a=new Float64Array(r.position.length),i=function(r,t,n,e){const o=hr(r,t,e),a=Q.fromTypedArray(o),i=new Float64Array(o.length),s=Q.fromTypedArray(i);return J(s,a,n),i}(r.position,e,o,a),s=S(kr,o);return{position:i,normal:qr(r.normal,r.position,a,e,s),tangent:Ir(r.tangent,r.position,a,e,s)}}function Yr(r,t,n){m(r.spatialReference,[r.x,r.y,r.z||0],n,R(r.spatialReference));const{horizontal:e,vertical:o}=Gr(t?t.unit:null,r.spatialReference);return f(n,n,[e,e,o]),n}function qr(r,t,n,e,o){if(C(r))return null;const a=yr(r,t,n,e,new Float32Array(r.length)),i=Z.fromTypedArray(a);return $(i,i,o),a}function Ir(r,t,n,e,o){if(C(r))return null;const a=Er(r,t,n,e,new Float32Array(r.length)),i=Z.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return $(i,i,o),a}function Gr(r,t){if(C(r))return Dr;const n=t.isGeographic?1:Y(t),e=t.isGeographic?1:q(t),o=I(1,r,"meters");return{horizontal:o*n,vertical:o*e}}const Or=H(),Wr=H(),kr=D(),Dr={horizontal:1,vertical:1};export{Er as B,yr as F,zr as M,cr as O,Br as P,vr as R,_r as _,mr as a,gr as b,rr as c,er as d,or as e,tr as f,jr as k,nr as q,ur as r,hr as v,br as x};