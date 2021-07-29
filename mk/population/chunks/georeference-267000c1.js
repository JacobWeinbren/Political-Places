import{eY as r,eZ as t,e_ as n,V as e,W as o,X as a,cP as i,$ as s,a7 as l,e$ as f,eW as c,f0 as u,f1 as p,eX as y,f2 as g,f3 as h,eO as m,f4 as A,f5 as T,f6 as d,a4 as E,r as v,f7 as F,f8 as w,f9 as M,n as P,eP as R,fa as x,fb as b,fc as N,eQ as _,fd as j,eR as z,fe as B,eS as L,t as S,ff as C,fg as V,aH as Y,fh as I,fi as O}from"../main.js";import{A as W,P as q,I as G,a as X,e as $}from"./quat-bec86f2b.js";import{e as H,a as Q,b as U,c as Z,f as k,o as D}from"./vec33-2c32fff8.js";import{T as J,i as K}from"./BufferView-acf8ad27.js";function rr(r=ar){return[r[0],r[1],r[2],r[3]]}function tr(t,n,e=rr()){return r(e,t),e[3]=n,e}function nr(r,t,e=rr()){return W(ir,r,or(r)),W(sr,t,or(t)),q(ir,sr,ir),function(r,t){return r[3]=t,r}(e,n(G(e,ir)))}function er(r){return r}function or(r){return t(r[3])}const ar=[0,0,1,0],ir=X(),sr=X();var lr;rr();let fr=lr=class extends i{constructor(r){super(r),this.origin=s(),this.translation=s(),this.rotation=rr(),this.scale=l(1,1,1),this.geographic=!0}get localMatrix(){const r=H();return f(r,r,this.scale),c(r,r,or(this.rotation),this.rotation),u(r,r,this.translation),r}get localMatrixInverse(){return p(H(),this.localMatrix)}applyLocal(r,t){return y(t,r,this.localMatrix)}applyLocalInverse(r,t){return y(t,r,this.localMatrixInverse)}project(r,t){const n=new Float64Array(r.length),e=J.fromTypedArray(n),o=J.fromTypedArray(r);if(this.geographic){const r=g(h(t)),a=H();return m(t,this.origin,a,r),A(a,a,this.localMatrix),Q(e,o,a),T(n,r,0,n,t,0,n.length/3),n}const{localMatrix:a,origin:i}=this;d(a,U)?Z(e,o):Q(e,o,a);for(let r=0;r<n.length;r+=3)n[r+0]+=i[0],n[r+1]+=i[1],n[r+2]+=i[2];return n}getOriginPoint(r){const[t,n,e]=this.origin;return new E({x:t,y:n,z:e,spatialReference:r})}equals(r){return v(r)&&this.geographic===r.geographic&&F(this.origin,r.origin)&&w(this.localMatrix,r.localMatrix)}clone(){const r={origin:M(this.origin),translation:M(this.translation),rotation:rr(this.rotation),scale:M(this.scale),geographic:this.geographic};return new lr(r)}};e([o({type:[Number],nonNullable:!0,json:{write:!0}})],fr.prototype,"origin",void 0),e([o({type:[Number],nonNullable:!0,json:{write:!0}})],fr.prototype,"translation",void 0),e([o({type:[Number],nonNullable:!0,json:{write:!0}})],fr.prototype,"rotation",void 0),e([o({type:[Number],nonNullable:!0,json:{write:!0}})],fr.prototype,"scale",void 0),e([o({type:Boolean,nonNullable:!0,json:{write:!0}})],fr.prototype,"geographic",void 0),e([o()],fr.prototype,"localMatrix",null),e([o()],fr.prototype,"localMatrixInverse",null),fr=lr=e([a("esri.geometry.support.MeshTransform")],fr);var cr=fr;function ur(r,t){var n;return r.isGeographic||r.isWebMercator&&(null==(n=null==t?void 0:t.geographic)||n)}const pr=P.getLogger("esri.geometry.support.meshUtils.normalProjection");function yr(r,t,n,e,o){return wr(e)?(Fr(0,K.fromTypedArray(r),J.fromTypedArray(t),J.fromTypedArray(n),e,K.fromTypedArray(o)),o):(pr.error("Cannot convert spatial reference to PCPF"),o)}function gr(r,t,n,e,o){return wr(e)?(Fr(1,K.fromTypedArray(r),J.fromTypedArray(t),J.fromTypedArray(n),e,K.fromTypedArray(o)),o):(pr.error("Cannot convert to spatial reference from PCPF"),o)}function hr(r,t,n){return T(r,t,0,n,R(t),0,r.length/3),n}function mr(r,t,n){return T(r,R(n),0,t,n,0,r.length/3),t}function Ar(r,t,n){if(S(r))return t;const e=J.fromTypedArray(r),o=J.fromTypedArray(t);return Q(o,e,n),t}function Tr(r,t,n){if(S(r))return t;C(br,n);const e=K.fromTypedArray(r),o=K.fromTypedArray(t);return k(o,e,br),V(br)||D(o,o),t}function dr(r,t,n){if(S(r))return t;C(br,n);const e=K.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),o=K.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if(k(o,e,br),V(br)||D(o,o),r!==t)for(let n=3;n<r.length;n+=4)t[n]=r[n];return t}function Er(r,t,n,e,o){if(!wr(e))return pr.error("Cannot convert spatial reference to PCPF"),o;Fr(0,K.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),J.fromTypedArray(t),J.fromTypedArray(n),e,K.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let t=3;t<r.length;t+=4)o[t]=r[t];return o}function vr(r,t,n,e,o){if(!wr(e))return pr.error("Cannot convert to spatial reference from PCPF"),o;Fr(1,K.fromTypedArray(r,16),J.fromTypedArray(t),J.fromTypedArray(n),e,K.fromTypedArray(o,16));for(let t=3;t<r.length;t+=4)o[t]=r[t];return o}function Fr(r,t,n,e,o,a){if(!t)return;const i=n.count,s=R(o);if(Mr(o))for(let n=0;n<i;n++)e.getVec(n,Pr),t.getVec(n,Rr),m(s,Pr,xr,s),_(br,xr),1===r&&j(br,br),z(Rr,Rr,br),a.setVec(n,Rr);else for(let o=0;o<i;o++){e.getVec(o,Pr),t.getVec(o,Rr),m(s,Pr,xr,s),_(br,xr);const i=B(n.get(o,1));let l=Math.cos(i);0===r&&(l=1/l),br[0]*=l,br[1]*=l,br[2]*=l,br[3]*=l,br[4]*=l,br[5]*=l,1===r&&j(br,br),z(Rr,Rr,br),L(Rr,Rr),a.setVec(o,Rr)}return a}function wr(r){return Mr(r)||function(r){return r.isWebMercator}(r)}function Mr(r){return r.isWGS84||x(r)||b(r)||N(r)}const Pr=s(),Rr=s(),xr=H(),br=$();function Nr(r,t,n){return ur(t.spatialReference,n)?function(r,t,n){const e=t.spatialReference,o=Yr(t,n,qr),a=new Float64Array(r.position.length),i=function(r,t,n,e){Q(J.fromTypedArray(e),J.fromTypedArray(r),t);const o=new Float64Array(r.length);return mr(e,o,n)}(r.position,o,e,a),s=C(Xr,o);return{position:i,normal:Lr(i,a,r.normal,s,e),tangent:Sr(i,a,r.tangent,s,e)}}(r,t,n):function(r,t,n){const e=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,s=t.z||0,{horizontal:l,vertical:f}=Wr(n?n.unit:null,t.spatialReference);for(let r=0;r<o.length;r+=3)e[r+0]=o[r+0]*l+a,e[r+1]=o[r+1]*l+i,e[r+2]=o[r+2]*f+s;return{position:e,normal:r.normal,tangent:r.tangent}}(r,t,n)}function _r(r,t,n){const{position:e,normal:o,tangent:a}=r;if(S(t))return{position:e,normal:o,tangent:a};const i=t.localMatrix;return Nr({position:Ar(e,new Float64Array(e.length),i),normal:v(o)?Tr(o,new Float32Array(o.length),i):null,tangent:v(a)?dr(a,new Float32Array(a.length),i):null},t.getOriginPoint(n),{geographic:t.geographic})}function jr(r,t,n){if(null!=n&&n.useTransform){var e;const{position:o,normal:a,tangent:i}=r;return{vertexAttributes:{position:o,normal:a,tangent:i},transform:new cr({origin:[t.x,t.y,null!=(e=t.z)?e:0],geographic:ur(t.spatialReference,n)})}}return{vertexAttributes:Nr(r,t,n),transform:null}}function zr(r,t,n){return ur(t.spatialReference,n)?Vr(r,t,n):Cr(r,t,n)}function Br(r,t,n,e){if(S(t))return zr(r,n,e);const o=_r(r,t,n.spatialReference);return n.equals(t.getOriginPoint(n.spatialReference))?Cr(o,n,e):ur(n.spatialReference,e)?Vr(o,n,e):Cr(o,n,e)}function Lr(r,t,n,e,o){if(S(n))return null;const a=new Float32Array(n.length);return k(K.fromTypedArray(a),K.fromTypedArray(n),e),gr(a,r,t,o,a),a}function Sr(r,t,n,e,o){if(S(n))return null;const a=new Float32Array(n.length);k(K.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),K.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),e);for(let r=3;r<a.length;r+=4)a[r]=n[r];return vr(a,r,t,o,a),a}function Cr(r,t,n){const e=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,s=t.z||0,{horizontal:l,vertical:f}=Wr(n?n.unit:null,t.spatialReference);for(let r=0;r<o.length;r+=3)e[r+0]=(o[r+0]-a)/l,e[r+1]=(o[r+1]-i)/l,e[r+2]=(o[r+2]-s)/f;return{position:e,normal:r.normal,tangent:r.tangent}}function Vr(r,t,n){const e=t.spatialReference;Yr(t,n,qr);const o=p(Gr,qr),a=new Float64Array(r.position.length),i=function(r,t,n,e){const o=hr(r,t,e),a=J.fromTypedArray(o),i=new Float64Array(o.length),s=J.fromTypedArray(i);return Q(s,a,n),i}(r.position,e,o,a),s=C(Xr,o);return{position:i,normal:Ir(r.normal,r.position,a,e,s),tangent:Or(r.tangent,r.position,a,e,s)}}function Yr(r,t,n){m(r.spatialReference,[r.x,r.y,r.z||0],n,R(r.spatialReference));const{horizontal:e,vertical:o}=Wr(t?t.unit:null,r.spatialReference);return f(n,n,[e,e,o]),n}function Ir(r,t,n,e,o){if(S(r))return null;const a=yr(r,t,n,e,new Float32Array(r.length)),i=K.fromTypedArray(a);return k(i,i,o),a}function Or(r,t,n,e,o){if(S(r))return null;const a=Er(r,t,n,e,new Float32Array(r.length)),i=K.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return k(i,i,o),a}function Wr(r,t){if(S(r))return $r;const n=t.isGeographic?1:Y(t),e=t.isGeographic?1:I(t),o=O(1,r,"meters");return{horizontal:o*n,vertical:o*e}}const qr=H(),Gr=H(),Xr=$(),$r={horizontal:1,vertical:1};export{Er as B,yr as F,zr as M,cr as O,Br as P,vr as R,gr as _,mr as a,rr as b,er as c,or as d,tr as e,_r as f,jr as k,nr as q,ur as r,hr as v,Nr as x};
