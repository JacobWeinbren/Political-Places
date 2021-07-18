import{dy as n,bP as t,ct as r,a4 as e,aS as i,ea as u,cs as o,b$ as l}from"../main.js";import{G as a,J as s,n as c,K as f,Z as g,E as d,v as w,H as h,l as m,L as A,M as p,Q as E,R as y,U as I,V as F,X as b,W as R,Y as N,$ as x}from"./arcadeUtils-f663d019.js";import{S,g as j,A as O,w as M,x as P,p as L,O as Z,d as z,h as J,j as k,k as v,R as C,E as T,l as U,y as $,W as q,K as G,F as H,M as K,m as Q,P as V,U as W,G as Y,V as B,b as D,I as X,q as _,J as nn,v as tn}from"./geometryEngineAsync-3d539526.js";import"eng/classification.json";import"./number-46c19cf1.js";import"./FeatureSetReader-a25b9a02.js";import"./centroid-3e5c0257.js";function rn(n){return 0===u.indexOf("4.")?i.fromExtent(n):new i({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function en(t){if(s(t,2,2),t[0]instanceof n&&t[1]instanceof n);else if(t[0]instanceof n&&null===t[1]);else if(t[1]instanceof n&&null===t[0]);else if(null!==t[0]||null!==t[1])throw new Error("Illegal Argument")}function un(u){"async"===u.mode&&(u.functions.disjoint=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,r){return en(r=a(r)),null===r[0]||null===r[1]||S(r[0],r[1])}))},u.functions.intersects=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,r){return en(r=a(r)),null!==r[0]&&null!==r[1]&&j(r[0],r[1])}))},u.functions.touches=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,r){return en(r=a(r)),null!==r[0]&&null!==r[1]&&O(r[0],r[1])}))},u.functions.crosses=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,r){return en(r=a(r)),null!==r[0]&&null!==r[1]&&M(r[0],r[1])}))},u.functions.within=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,r){return en(r=a(r)),null!==r[0]&&null!==r[1]&&P(r[0],r[1])}))},u.functions.contains=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,r){return en(r=a(r)),null!==r[0]&&null!==r[1]&&L(r[0],r[1])}))},u.functions.overlaps=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,r){return en(r=a(r)),null!==r[0]&&null!==r[1]&&Z(r[0],r[1])}))},u.functions.equals=function(t,r){return u.standardFunctionAsync(t,r,(function(t,r,e){return s(e,2,2),e[0]===e[1]||(e[0]instanceof n&&e[1]instanceof n?z(e[0],e[1]):!(!c(e[0])||!c(e[1]))&&e[0].getTime()===e[1].getTime())}))},u.functions.relate=function(t,r){return u.standardFunctionAsync(t,r,(function(t,r,e){if(e=a(e),s(e,3,3),e[0]instanceof n&&e[1]instanceof n)return J(e[0],e[1],f(e[2]));if(e[0]instanceof n&&null===e[1])return!1;if(e[1]instanceof n&&null===e[0])return!1;if(null===e[0]&&null===e[1])return!1;throw new Error("Illegal Argument")}))},u.functions.intersection=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,r){return en(r=a(r)),null===r[0]||null===r[1]?null:k(r[0],r[1])}))},u.functions.union=function(t,r){return u.standardFunctionAsync(t,r,(function(r,e,i){const u=[];if(0===(i=a(i)).length)throw new Error("Function called with wrong number of Parameters");if(1===i.length)if(g(i[0])){const t=a(i[0]);for(let r=0;r<t.length;r++)if(null!==t[r]){if(!(t[r]instanceof n))throw new Error("Illegal Argument");u.push(t[r])}}else{if(!d(i[0])){if(i[0]instanceof n)return w(h(i[0]),t.spatialReference);if(null===i[0])return null;throw new Error("Illegal Argument")}{const t=a(i[0].toArray());for(let r=0;r<t.length;r++)if(null!==t[r]){if(!(t[r]instanceof n))throw new Error("Illegal Argument");u.push(t[r])}}}else for(let t=0;t<i.length;t++)if(null!==i[t]){if(!(i[t]instanceof n))throw new Error("Illegal Argument");u.push(i[t])}return 0===u.length?null:v(u)}))},u.functions.difference=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,r){return en(r=a(r)),null!==r[0]&&null===r[1]?h(r[0]):null===r[0]?null:C(r[0],r[1])}))},u.functions.symmetricdifference=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,r){return en(r=a(r)),null===r[0]&&null===r[1]?null:null===r[0]?h(r[1]):null===r[1]?h(r[0]):T(r[0],r[1])}))},u.functions.clip=function(r,e){return u.standardFunctionAsync(r,e,(function(r,e,i){if(i=a(i),s(i,2,2),!(i[1]instanceof t)&&null!==i[1])throw new Error("Illegal Argument");if(null===i[0])return null;if(!(i[0]instanceof n))throw new Error("Illegal Argument");return null===i[1]?null:U(i[0],i[1])}))},u.functions.cut=function(t,e){return u.standardFunctionAsync(t,e,(function(t,e,i){if(i=a(i),s(i,2,2),!(i[1]instanceof r)&&null!==i[1])throw new Error("Illegal Argument");if(null===i[0])return[];if(!(i[0]instanceof n))throw new Error("Illegal Argument");return null===i[1]?[h(i[0])]:$(i[0],i[1])}))},u.functions.area=function(t,r){return u.standardFunctionAsync(t,r,(function(r,e,i){if(s(i,1,2),null===(i=a(i))[0])return 0;if(m(i[0]))return i[0].sumArea(A(p(i[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(g(i[0])||d(i[0])){const n=E(i[0],t.spatialReference);return null===n?0:q(n,A(p(i[1],-1)))}if(!(i[0]instanceof n))throw new Error("Illegal Argument");return q(i[0],A(p(i[1],-1)))}))},u.functions.areageodetic=function(t,r){return u.standardFunctionAsync(t,r,(function(r,e,i){if(s(i,1,2),null===(i=a(i))[0])return 0;if(m(i[0]))return i[0].sumArea(A(p(i[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(g(i[0])||d(i[0])){const n=E(i[0],t.spatialReference);return null===n?0:G(n,A(p(i[1],-1)))}if(!(i[0]instanceof n))throw new Error("Illegal Argument");return G(i[0],A(p(i[1],-1)))}))},u.functions.length=function(t,r){return u.standardFunctionAsync(t,r,(function(r,e,i){if(s(i,1,2),null===(i=a(i))[0])return 0;if(m(i[0]))return i[0].sumLength(y(p(i[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(g(i[0])||d(i[0])){const n=I(i[0],t.spatialReference);return null===n?0:H(n,y(p(i[1],-1)))}if(!(i[0]instanceof n))throw new Error("Illegal Argument");return H(i[0],y(p(i[1],-1)))}))},u.functions.lengthgeodetic=function(t,r){return u.standardFunctionAsync(t,r,(function(r,e,i){if(s(i,1,2),null===(i=a(i))[0])return 0;if(m(i[0]))return i[0].sumLength(y(p(i[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(g(i[0])||d(i[0])){const n=I(i[0],t.spatialReference);return null===n?0:K(n,y(p(i[1],-1)))}if(!(i[0]instanceof n))throw new Error("Illegal Argument");return K(i[0],y(p(i[1],-1)))}))},u.functions.distance=function(t,r){return u.standardFunctionAsync(t,r,(function(r,e,i){i=a(i),s(i,2,3);let u=i[0];(g(i[0])||d(i[0]))&&(u=F(i[0],t.spatialReference));let o=i[1];if((g(i[1])||d(i[1]))&&(o=F(i[1],t.spatialReference)),!(u instanceof n))throw new Error("Illegal Argument");if(!(o instanceof n))throw new Error("Illegal Argument");return Q(u,o,y(p(i[2],-1)))}))},u.functions.distancegeodetic=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,i){i=a(i),s(i,2,3);const u=i[0],o=i[1];if(!(u instanceof e))throw new Error("Illegal Argument");if(!(o instanceof e))throw new Error("Illegal Argument");const l=new r({paths:[],spatialReference:u.spatialReference});return l.addPath([u,o]),K(l,y(p(i[2],-1)))}))},u.functions.densify=function(e,o){return u.standardFunctionAsync(e,o,(function(e,u,o){if(o=a(o),s(o,2,3),null===o[0])return null;if(!(o[0]instanceof n))throw new Error("Illegal Argument");const l=b(o[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return o[0]instanceof i||o[0]instanceof r?V(o[0],l,y(p(o[2],-1))):o[0]instanceof t?V(rn(o[0]),l,y(p(o[2],-1))):o[0]}))},u.functions.densifygeodetic=function(e,o){return u.standardFunctionAsync(e,o,(function(e,u,o){if(o=a(o),s(o,2,3),null===o[0])return null;if(!(o[0]instanceof n))throw new Error("Illegal Argument");const l=b(o[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return o[0]instanceof i||o[0]instanceof r?W(o[0],l,y(p(o[2],-1))):o[0]instanceof t?W(rn(o[0]),l,y(p(o[2],-1))):o[0]}))},u.functions.generalize=function(t,r){return u.standardFunctionAsync(t,r,(function(t,r,e){if(e=a(e),s(e,2,4),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");const i=b(e[1]);if(isNaN(i))throw new Error("Illegal Argument");return Y(e[0],i,R(p(e[2],!0)),y(p(e[3],-1)))}))},u.functions.buffer=function(t,r){return u.standardFunctionAsync(t,r,(function(t,r,e){if(e=a(e),s(e,2,3),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");const i=b(e[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?h(e[0]):B(e[0],i,y(p(e[2],-1)))}))},u.functions.buffergeodetic=function(t,r){return u.standardFunctionAsync(t,r,(function(t,r,e){if(e=a(e),s(e,2,3),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");const i=b(e[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?h(e[0]):D(e[0],i,y(p(e[2],-1)))}))},u.functions.offset=function(n,t){return u.standardFunctionAsync(n,t,(function(n,t,e){if(e=a(e),s(e,2,6),null===e[0])return null;if(!(e[0]instanceof i||e[0]instanceof r))throw new Error("Illegal Argument");const u=b(e[1]);if(isNaN(u))throw new Error("Illegal Argument");const o=b(p(e[4],10));if(isNaN(o))throw new Error("Illegal Argument");const l=b(p(e[5],0));if(isNaN(l))throw new Error("Illegal Argument");return X(e[0],u,y(p(e[2],-1)),f(p(e[3],"round")).toLowerCase(),o,l)}))},u.functions.rotate=function(r,o){return u.standardFunctionAsync(r,o,(function(r,u,o){o=a(o),s(o,2,3);let l=o[0];if(null===l)return null;if(!(l instanceof n))throw new Error("Illegal Argument");l instanceof t&&(l=i.fromExtent(l));const c=b(o[1]);if(isNaN(c))throw new Error("Illegal Argument");const f=p(o[2],null);if(null===f)return _(l,c);if(f instanceof e)return _(l,c,f);throw new Error("Illegal Argument")}))},u.functions.centroid=function(l,c){return u.standardFunctionAsync(l,c,(function(u,c,f){if(f=a(f),s(f,1,1),null===f[0])return null;let m=f[0];if((g(f[0])||d(f[0]))&&(m=F(f[0],l.spatialReference)),null===m)return null;if(!(m instanceof n))throw new Error("Illegal Argument");return m instanceof e?w(h(f[0]),l.spatialReference):m instanceof i?m.centroid:m instanceof r?N(m):m instanceof o?x(m):m instanceof t?m.center:null}))},u.functions.multiparttosinglepart=function(c,f){return u.standardFunctionAsync(c,f,(function(u,f,g){g=a(g),s(g,1,1);const d=[];if(null===g[0])return null;if(!(g[0]instanceof n))throw new Error("Illegal Argument");return g[0]instanceof e||g[0]instanceof t?[w(h(g[0]),c.spatialReference)]:nn(g[0]).then((n=>{if(n instanceof i){const t=[],r=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const r=l({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(r)}else r.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<r.length;n++)for(let e=0;e<t.length;e++)if(t[e].contains(r[n].pt)){t[e].addRing(r[n].ring);break}return t}if(n instanceof r){const t=[];for(let r=0;r<n.paths.length;r++){const e=l({paths:[n.paths[r]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(e)}return t}if(g[0]instanceof o){const n=w(h(g[0]),c.spatialReference);for(let t=0;t<n.points.length;t++)d.push(n.getPoint(t));return d}return null}))}))},u.functions.issimple=function(t,r){return u.standardFunctionAsync(t,r,(function(t,r,e){if(e=a(e),s(e,1,1),null===e[0])return!0;if(!(e[0]instanceof n))throw new Error("Illegal Argument");return tn(e[0])}))},u.functions.simplify=function(t,r){return u.standardFunctionAsync(t,r,(function(t,r,e){if(e=a(e),s(e,1,1),null===e[0])return null;if(!(e[0]instanceof n))throw new Error("Illegal Argument");return nn(e[0])}))})}export{un as registerFunctions};
