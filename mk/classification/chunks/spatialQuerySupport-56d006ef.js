import{bC as e,eB as t,c4 as r,b$ as i,t as n,eC as s,eD as l,b9 as o,et as a,aD as u,az as c,aA as f,eE as p,eF as m,aB as y,eG as R,eH as S,eI as g,eJ as h,ap as d,bX as w,ao as b,cm as I,eK as G,a as N,aE as v,av as P}from"../main.js";import{p as M,y as A}from"./quantizationUtils-58caac06.js";function F(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:n}=e;let s=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach((e=>{const t=r.getAttribute(e,i),o=r.getAttribute(e,n);null==t||isNaN(t)||(s=Math.min(s,t)),null==o||isNaN(o)||(l=Math.max(l,o))}));else{const e=i||n;t.forEach((t=>{const i=r.getAttribute(t,e);null==i||isNaN(i)||(s=Math.min(s,i),l=Math.max(l,i))}))}return{start:s,end:l}}function E(e,t,r){if(!t||!e)return null;const{startTimeField:i,endTimeField:n}=e;if(!i&&!n)return null;const{start:s,end:l}=t;return null===s&&null===l?null:void 0===s&&void 0===l?()=>!1:i&&n?function(e,t,r,i,n){return null!=i&&null!=n?s=>{const l=e.getAttribute(s,t),o=e.getAttribute(s,r);return(null==l||l<=n)&&(null==o||o>=i)}:null!=i?t=>{const n=e.getAttribute(t,r);return null==n||n>=i}:null!=n?r=>{const i=e.getAttribute(r,t);return null==i||i<=n}:void 0}(r,i,n,s,l):function(e,t,r,i){return null!=r&&null!=i&&r===i?i=>e.getAttribute(i,t)===r:null!=r&&null!=i?n=>{const s=e.getAttribute(n,t);return s>=r&&s<=i}:null!=r?i=>e.getAttribute(i,t)>=r:null!=i?r=>e.getAttribute(r,t)<=i:void 0}(r,i||n,s,l)}const U=new e({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),C=Object.freeze({}),O=new u,T=new u,j=new u,_={esriGeometryPoint:m,esriGeometryPolyline:y,esriGeometryPolygon:R,esriGeometryMultipoint:S};function q(e,t,r,i=e.hasZ,n=e.hasM){const s=e.hasZ&&i,l=e.hasM&&n;if(r){const o=f(j,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return m(o,s,l)}return m(t,s,l)}function J(e,t,r,i,n,s,l=t,o=r){const a=t&&l,u=r&&o,m=i?"coords"in i?i:i.geometry:null;if(!m)return null;if(n){let i=c(T,m,t,r,e,n,l,o);return s&&(i=f(j,i,a,u,e,s)),_[e](i,a,u)}if(s){const i=f(j,m,t,r,e,s,l,o);return _[e](i,a,u)}return p(O,m,t,r,l,o),_[e](O,a,u)}async function x(e,t,r){const{outFields:i,orderByFields:n,groupByFieldsForStatistics:s,outStatistics:l}=e;if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(n)for(let e=0;e<n.length;e++)n[e]=n[e].trim();if(s)for(let e=0;e<s.length;e++)s[e]=s[e].trim();if(l)for(let e=0;e<l.length;e++)l[e].onStatisticField&&(l[e].onStatisticField=l[e].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),B(e,t,r)}async function B(e,u,c){if(!e)return null;let{where:f}=e;if(e.where=f=f&&f.trim(),(!f||/^1 *= *1$/.test(f)||u&&u===f)&&(e.where=null),!e.geometry)return e;let p=await async function(e){const{geometry:t,distance:r,units:i}=e;if(null==r||"vertexAttributes"in t)return t;const n=t.spatialReference,u=i?U.fromJSON(i):s(n),c=n&&(l(n)||o(n))?t:await M(n,a).then((()=>A(t,a)));return(await async function(){return(await import("./geometryEngineJSON-48114bbe.js")).geodesicBuffer}())(c.spatialReference,c,r,u)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:r}=e.geometry;p=t(p),p.spatialReference=r}e.geometry=p,await M(p.spatialReference,c);const m=(await r(i(p)))[0];if(n(m))throw C;const y=m.toJSON(),R=await A(y,y.spatialReference,c);if(!R)throw C;return R.spatialReference=c,e.geometry=R,e}function D(e){return e&&z in e?JSON.parse(JSON.stringify(e,V)):e}const z="_geVersion",V=(e,t)=>e!==z?t:void 0;function Z(e,t){return e?t?4:3:t?3:2}function K(e,t,r,i,n,s){const l=Z(n,s),{coords:o,lengths:a}=i;if(!a)return!1;for(let i=0,n=0;i<a.length;i++,n+=l)if(!W(e,t,r,o[n],o[n+1]))return!1;return!0}function W(e,t,r,i,n){if(!e)return!1;const s=Z(t,r),{coords:l,lengths:o}=e;let a=!1,u=0;for(const e of o)a=Y(a,l,s,u,e,i,n),u+=e*s;return a}function Y(e,t,r,i,n,s,l){let o=e,a=i;for(let e=i,u=i+n*r;e<u;e+=r){a=e+r,a===u&&(a=i);const n=t[e],c=t[e+1],f=t[a],p=t[a+1];(c<l&&p>=l||p<l&&c>=l)&&n+(l-c)/(p-c)*(f-n)<s&&(o=!o)}return o}const $="feature-store:unsupported-query",k={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},H={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},X={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},L={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function Q(e,t,r,i,n){if(d(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=w(new u,t,!1,!1);return Promise.resolve((t=>function(e,t,r,i){return W(e,t,r,i.coords[0],i.coords[1])}(e,!1,!1,t)))}if(d(t)&&"esriGeometryMultipoint"===r){const r=w(new u,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>K(r,!1,!1,e,i,n)))}if(b(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>I(t,J(r,i,n,e))));if(b(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return Promise.resolve((e=>G(t,J(r,i,n,e))));if(b(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?g:h(e)}(r);return Promise.resolve((s=>e(t,J(r,i,n,s))))}return import("./geometryEngineJSON-48114bbe.js").then((s=>{const l=s[k[e]].bind(null,t.spatialReference,t);return e=>l(J(r,i,n,e))}))}async function ee(e,t,r){const{spatialRel:i,geometry:n}=e;if(n){if(!function(e){return!0===H[e]}(i))throw new N($,"Unsupported query spatial relationship",{query:e});if(v(n.spatialReference)&&v(r)){if(!function(e){return!0===X[P(e)]}(n))throw new N($,"Unsupported query geometry type",{query:e});if(!function(e){return!0===L[e]}(t))throw new N($,"Unsupported layer geometry type",{query:e});if(e.outSR)return M(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function te(e){if(b(e))return!0;if(d(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}export{te as I,x as J,q as N,ee as P,J as _,B as a,C as j,E as n,F as t,Q as v,D as x};
