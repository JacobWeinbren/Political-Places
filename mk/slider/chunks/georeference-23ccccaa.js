import{eH as r,eE as t,eQ as n,V as e,W as o,X as a,cl as i,$ as s,a7 as l,eR as c,eS as f,eT as u,eU as p,eV as y,eW as g,eX as h,eY as m,eZ as A,e_ as T,e$ as d,a4 as E,r as v,f0 as F,f1 as w,f2 as M,n as R,f3 as x,f4 as P,f5 as b,f6 as N,f7 as _,f8 as j,f9 as z,fa as B,eD as L,t as S,fb as V,fc as C,aF as Y,fd as I,fe as W}from"../main.js";import{A as q,P as G,I as O,e as U,a as X}from"./quat-b3264934.js";import{e as $,a as D,b as H,c as Q,f as Z,o as k}from"./vec33-7e89d667.js";import{T as J,i as K}from"./BufferView-359b1675.js";function rr(r=ar){return[r[0],r[1],r[2],r[3]]}function tr(t,n,e=rr()){return r(e,t),e[3]=n,e}function nr(r,t,e=rr()){return q(ir,r,or(r)),q(sr,t,or(t)),G(ir,sr,ir),function(r,t){return r[3]=t,r}(e,n(O(e,ir)))}function er(r){return r}function or(r){return t(r[3])}const ar=[0,0,1,0],ir=U(),sr=U();var lr;rr();let cr=lr=class extends i{constructor(r){super(r),this.origin=s(),this.translation=s(),this.rotation=rr(),this.scale=l(1,1,1),this.geographic=!0}get localMatrix(){const r=$();return c(r,r,this.scale),f(r,r,or(this.rotation),this.rotation),u(r,r,this.translation),r}get localMatrixInverse(){return p($(),this.localMatrix)}applyLocal(r,t){return y(t,r,this.localMatrix)}applyLocalInverse(r,t){return y(t,r,this.localMatrixInverse)}project(r,t){const n=new Float64Array(r.length),e=J.fromTypedArray(n),o=J.fromTypedArray(r);if(this.geographic){const r=g(h(t)),a=$();return m(t,this.origin,a,r),A(a,a,this.localMatrix),D(e,o,a),T(n,r,0,n,t,0,n.length/3),n}const{localMatrix:a,origin:i}=this;d(a,H)?Q(e,o):D(e,o,a);for(let r=0;r<n.length;r+=3)n[r+0]+=i[0],n[r+1]+=i[1],n[r+2]+=i[2];return n}getOriginPoint(r){const[t,n,e]=this.origin;return new E({x:t,y:n,z:e,spatialReference:r})}equals(r){return v(r)&&this.geographic===r.geographic&&F(this.origin,r.origin)&&w(this.localMatrix,r.localMatrix)}clone(){const r={origin:M(this.origin),translation:M(this.translation),rotation:rr(this.rotation),scale:M(this.scale),geographic:this.geographic};return new lr(r)}};e([o({type:[Number],nonNullable:!0,json:{write:!0}})],cr.prototype,"origin",void 0),e([o({type:[Number],nonNullable:!0,json:{write:!0}})],cr.prototype,"translation",void 0),e([o({type:[Number],nonNullable:!0,json:{write:!0}})],cr.prototype,"rotation",void 0),e([o({type:[Number],nonNullable:!0,json:{write:!0}})],cr.prototype,"scale",void 0),e([o({type:Boolean,nonNullable:!0,json:{write:!0}})],cr.prototype,"geographic",void 0),e([o()],cr.prototype,"localMatrix",null),e([o()],cr.prototype,"localMatrixInverse",null),cr=lr=e([a("esri.geometry.support.MeshTransform")],cr);var fr=cr;function ur(r,t){var n;return r.isGeographic||r.isWebMercator&&(null==(n=null==t?void 0:t.geographic)||n)}const pr=R.getLogger("esri.geometry.support.meshUtils.normalProjection");function yr(r,t,n,e,o){return wr(e)?(Fr(0,K.fromTypedArray(r),J.fromTypedArray(t),J.fromTypedArray(n),e,K.fromTypedArray(o)),o):(pr.error("Cannot convert spatial reference to PCPF"),o)}function gr(r,t,n,e,o){return wr(e)?(Fr(1,K.fromTypedArray(r),J.fromTypedArray(t),J.fromTypedArray(n),e,K.fromTypedArray(o)),o):(pr.error("Cannot convert to spatial reference from PCPF"),o)}function hr(r,t,n){return T(r,t,0,n,x(t),0,r.length/3),n}function mr(r,t,n){return T(r,x(n),0,t,n,0,r.length/3),t}function Ar(r,t,n){if(S(r))return t;const e=J.fromTypedArray(r),o=J.fromTypedArray(t);return D(o,e,n),t}function Tr(r,t,n){if(S(r))return t;V(br,n);const e=K.fromTypedArray(r),o=K.fromTypedArray(t);return Z(o,e,br),C(br)||k(o,o),t}function dr(r,t,n){if(S(r))return t;V(br,n);const e=K.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),o=K.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if(Z(o,e,br),C(br)||k(o,o),r!==t)for(let n=3;n<r.length;n+=4)t[n]=r[n];return t}function Er(r,t,n,e,o){if(!wr(e))return pr.error("Cannot convert spatial reference to PCPF"),o;Fr(0,K.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),J.fromTypedArray(t),J.fromTypedArray(n),e,K.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let t=3;t<r.length;t+=4)o[t]=r[t];return o}function vr(r,t,n,e,o){if(!wr(e))return pr.error("Cannot convert to spatial reference from PCPF"),o;Fr(1,K.fromTypedArray(r,16),J.fromTypedArray(t),J.fromTypedArray(n),e,K.fromTypedArray(o,16));for(let t=3;t<r.length;t+=4)o[t]=r[t];return o}function Fr(r,t,n,e,o,a){if(!t)return;const i=n.count,s=x(o);if(Mr(o))for(let n=0;n<i;n++)e.getVec(n,Rr),t.getVec(n,xr),m(s,Rr,Pr,s),_(br,Pr),1===r&&j(br,br),z(xr,xr,br),a.setVec(n,xr);else for(let o=0;o<i;o++){e.getVec(o,Rr),t.getVec(o,xr),m(s,Rr,Pr,s),_(br,Pr);const i=B(n.get(o,1));let l=Math.cos(i);0===r&&(l=1/l),br[0]*=l,br[1]*=l,br[2]*=l,br[3]*=l,br[4]*=l,br[5]*=l,1===r&&j(br,br),z(xr,xr,br),L(xr,xr),a.setVec(o,xr)}return a}function wr(r){return Mr(r)||function(r){return r.isWebMercator}(r)}function Mr(r){return r.isWGS84||P(r)||b(r)||N(r)}const Rr=s(),xr=s(),Pr=$(),br=X();function Nr(r,t,n){return ur(t.spatialReference,n)?function(r,t,n){const e=t.spatialReference,o=Yr(t,n,Gr),a=new Float64Array(r.position.length),i=function(r,t,n,e){D(J.fromTypedArray(e),J.fromTypedArray(r),t);const o=new Float64Array(r.length);return mr(e,o,n)}(r.position,o,e,a),s=V(Ur,o);return{position:i,normal:Lr(i,a,r.normal,s,e),tangent:Sr(i,a,r.tangent,s,e)}}(r,t,n):function(r,t,n){const e=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,s=t.z||0,{horizontal:l,vertical:c}=qr(n?n.unit:null,t.spatialReference);for(let r=0;r<o.length;r+=3)e[r+0]=o[r+0]*l+a,e[r+1]=o[r+1]*l+i,e[r+2]=o[r+2]*c+s;return{position:e,normal:r.normal,tangent:r.tangent}}(r,t,n)}function _r(r,t,n){const{position:e,normal:o,tangent:a}=r;if(S(t))return{position:e,normal:o,tangent:a};const i=t.localMatrix;return Nr({position:Ar(e,new Float64Array(e.length),i),normal:v(o)?Tr(o,new Float32Array(o.length),i):null,tangent:v(a)?dr(a,new Float32Array(a.length),i):null},t.getOriginPoint(n),{geographic:t.geographic})}function jr(r,t,n){if(null!=n&&n.useTransform){var e;const{position:o,normal:a,tangent:i}=r;return{vertexAttributes:{position:o,normal:a,tangent:i},transform:new fr({origin:[t.x,t.y,null!=(e=t.z)?e:0],geographic:ur(t.spatialReference,n)})}}return{vertexAttributes:Nr(r,t,n),transform:null}}function zr(r,t,n){return ur(t.spatialReference,n)?Cr(r,t,n):Vr(r,t,n)}function Br(r,t,n,e){if(S(t))return zr(r,n,e);const o=_r(r,t,n.spatialReference);return n.equals(t.getOriginPoint(n.spatialReference))?Vr(o,n,e):ur(n.spatialReference,e)?Cr(o,n,e):Vr(o,n,e)}function Lr(r,t,n,e,o){if(S(n))return null;const a=new Float32Array(n.length);return Z(K.fromTypedArray(a),K.fromTypedArray(n),e),gr(a,r,t,o,a),a}function Sr(r,t,n,e,o){if(S(n))return null;const a=new Float32Array(n.length);Z(K.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),K.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),e);for(let r=3;r<a.length;r+=4)a[r]=n[r];return vr(a,r,t,o,a),a}function Vr(r,t,n){const e=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,s=t.z||0,{horizontal:l,vertical:c}=qr(n?n.unit:null,t.spatialReference);for(let r=0;r<o.length;r+=3)e[r+0]=(o[r+0]-a)/l,e[r+1]=(o[r+1]-i)/l,e[r+2]=(o[r+2]-s)/c;return{position:e,normal:r.normal,tangent:r.tangent}}function Cr(r,t,n){const e=t.spatialReference;Yr(t,n,Gr);const o=p(Or,Gr),a=new Float64Array(r.position.length),i=function(r,t,n,e){const o=hr(r,t,e),a=J.fromTypedArray(o),i=new Float64Array(o.length),s=J.fromTypedArray(i);return D(s,a,n),i}(r.position,e,o,a),s=V(Ur,o);return{position:i,normal:Ir(r.normal,r.position,a,e,s),tangent:Wr(r.tangent,r.position,a,e,s)}}function Yr(r,t,n){m(r.spatialReference,[r.x,r.y,r.z||0],n,x(r.spatialReference));const{horizontal:e,vertical:o}=qr(t?t.unit:null,r.spatialReference);return c(n,n,[e,e,o]),n}function Ir(r,t,n,e,o){if(S(r))return null;const a=yr(r,t,n,e,new Float32Array(r.length)),i=K.fromTypedArray(a);return Z(i,i,o),a}function Wr(r,t,n,e,o){if(S(r))return null;const a=Er(r,t,n,e,new Float32Array(r.length)),i=K.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return Z(i,i,o),a}function qr(r,t){if(S(r))return Xr;const n=t.isGeographic?1:Y(t),e=t.isGeographic?1:I(t),o=W(1,r,"meters");return{horizontal:o*n,vertical:o*e}}const Gr=$(),Or=$(),Ur=X(),Xr={horizontal:1,vertical:1};export{Er as B,yr as F,zr as M,fr as O,Br as P,vr as R,_r as _,mr as a,gr as b,rr as c,er as d,or as e,tr as f,jr as k,nr as q,ur as r,hr as v,Nr as x};
