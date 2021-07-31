import{bB as e,eK as t,c9 as r,c3 as i,t as n,eL as s,eM as o,ba as l,eC as a,aD as u,az as c,aA as f,eN as p,eO as m,aB as y,eP as R,eQ as S,eR as g,eS as d,ap as h,bW as w,ao as b,cr as N,eT as I,a as v,aE as G,av as P}from"../main.js";import{p as M,y as A}from"./projectionSupport-e117db71.js";function F(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:n}=e;let s=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach((e=>{const t=r.getAttribute(e,i),l=r.getAttribute(e,n);null==t||isNaN(t)||(s=Math.min(s,t)),null==l||isNaN(l)||(o=Math.max(o,l))}));else{const e=i||n;t.forEach((t=>{const i=r.getAttribute(t,e);null==i||isNaN(i)||(s=Math.min(s,i),o=Math.max(o,i))}))}return{start:s,end:o}}function E(e,t,r){if(!t||!e)return null;const{startTimeField:i,endTimeField:n}=e;if(!i&&!n)return null;const{start:s,end:o}=t;return null===s&&null===o?null:void 0===s&&void 0===o?()=>!1:i&&n?function(e,t,r,i,n){return null!=i&&null!=n?s=>{const o=e.getAttribute(s,t),l=e.getAttribute(s,r);return(null==o||o<=n)&&(null==l||l>=i)}:null!=i?t=>{const n=e.getAttribute(t,r);return null==n||n>=i}:null!=n?r=>{const i=e.getAttribute(r,t);return null==i||i<=n}:void 0}(r,i,n,s,o):function(e,t,r,i){return null!=r&&null!=i&&r===i?i=>e.getAttribute(i,t)===r:null!=r&&null!=i?n=>{const s=e.getAttribute(n,t);return s>=r&&s<=i}:null!=r?i=>e.getAttribute(i,t)>=r:null!=i?r=>e.getAttribute(r,t)<=i:void 0}(r,i||n,s,o)}const O=new e({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),T=Object.freeze({}),j=new u,U=new u,C=new u,_={esriGeometryPoint:m,esriGeometryPolyline:y,esriGeometryPolygon:R,esriGeometryMultipoint:S};function q(e,t,r,i=e.hasZ,n=e.hasM){const s=e.hasZ&&i,o=e.hasM&&n;if(r){const l=f(C,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return m(l,s,o)}return m(t,s,o)}function x(e,t,r,i,n,s,o=t,l=r){const a=t&&o,u=r&&l,m=i?"coords"in i?i:i.geometry:null;if(!m)return null;if(n){let i=c(U,m,t,r,e,n,o,l);return s&&(i=f(C,i,a,u,e,s)),_[e](i,a,u)}if(s){const i=f(C,m,t,r,e,s,o,l);return _[e](i,a,u)}return p(j,m,t,r,o,l),_[e](j,a,u)}async function J(e,t,r){const{outFields:i,orderByFields:n,groupByFieldsForStatistics:s,outStatistics:o}=e;if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(n)for(let e=0;e<n.length;e++)n[e]=n[e].trim();if(s)for(let e=0;e<s.length;e++)s[e]=s[e].trim();if(o)for(let e=0;e<o.length;e++)o[e].onStatisticField&&(o[e].onStatisticField=o[e].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),B(e,t,r)}async function B(e,u,c){if(!e)return null;let{where:f}=e;if(e.where=f=f&&f.trim(),(!f||/^1 *= *1$/.test(f)||u&&u===f)&&(e.where=null),!e.geometry)return e;let p=await async function(e){const{geometry:t,distance:r,units:i}=e;if(null==r||"vertexAttributes"in t)return t;const n=t.spatialReference,u=i?O.fromJSON(i):s(n),c=n&&(o(n)||l(n))?t:await M(n,a).then((()=>A(t,a)));return(await async function(){return(await import("./geometryEngineJSON-ca91bee0.js")).geodesicBuffer}())(c.spatialReference,c,r,u)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:r}=e.geometry;p=t(p),p.spatialReference=r}e.geometry=p,await M(p.spatialReference,c);const m=(await r(i(p)))[0];if(n(m))throw T;const y=m.toJSON(),R=await A(y,y.spatialReference,c);if(!R)throw T;return R.spatialReference=c,e.geometry=R,e}function D(e){return e&&V in e?JSON.parse(JSON.stringify(e,W)):e}const V="_geVersion",W=(e,t)=>e!==V?t:void 0;function Z(e,t){return e?t?4:3:t?3:2}function z(e,t,r,i,n,s){const o=Z(n,s),{coords:l,lengths:a}=i;if(!a)return!1;for(let i=0,n=0;i<a.length;i++,n+=o)if(!K(e,t,r,l[n],l[n+1]))return!1;return!0}function K(e,t,r,i,n){if(!e)return!1;const s=Z(t,r),{coords:o,lengths:l}=e;let a=!1,u=0;for(const e of l)a=Y(a,o,s,u,e,i,n),u+=e*s;return a}function Y(e,t,r,i,n,s,o){let l=e,a=i;for(let e=i,u=i+n*r;e<u;e+=r){a=e+r,a===u&&(a=i);const n=t[e],c=t[e+1],f=t[a],p=t[a+1];(c<o&&p>=o||p<o&&c>=o)&&n+(o-c)/(p-c)*(f-n)<s&&(l=!l)}return l}const k="feature-store:unsupported-query",L={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},Q={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},$={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},H={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function X(e,t,r,i,n){if(h(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=w(new u,t,!1,!1);return Promise.resolve((t=>function(e,t,r,i){return K(e,t,r,i.coords[0],i.coords[1])}(e,!1,!1,t)))}if(h(t)&&"esriGeometryMultipoint"===r){const r=w(new u,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>z(r,!1,!1,e,i,n)))}if(b(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>N(t,x(r,i,n,e))));if(b(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return Promise.resolve((e=>I(t,x(r,i,n,e))));if(b(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?g:d(e)}(r);return Promise.resolve((s=>e(t,x(r,i,n,s))))}return import("./geometryEngineJSON-ca91bee0.js").then((s=>{const o=s[L[e]].bind(null,t.spatialReference,t);return e=>o(x(r,i,n,e))}))}async function ee(e,t,r){const{spatialRel:i,geometry:n}=e;if(n){if(!function(e){return!0===Q[e]}(i))throw new v(k,"Unsupported query spatial relationship",{query:e});if(G(n.spatialReference)&&G(r)){if(!function(e){return!0===$[P(e)]}(n))throw new v(k,"Unsupported query geometry type",{query:e});if(!function(e){return!0===H[e]}(t))throw new v(k,"Unsupported layer geometry type",{query:e});if(e.outSR)return M(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function te(e){if(b(e))return!0;if(h(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}export{te as I,J,q as N,ee as P,x as _,B as a,T as j,E as n,F as t,X as v,D as x};
