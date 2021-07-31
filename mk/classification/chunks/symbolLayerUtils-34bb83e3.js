import{a7 as e,ed as r,a as t,L as n,r as o}from"../main.js";import{u as i,F as s,a as c}from"./aaBoundingBox-715afc3a.js";const u=i(-.5,-.5,-.5,.5,.5,.5),a=i(-.5,-.5,0,.5,.5,1),l=i(-.5,-.5,0,.5,.5,.5);function f(e){switch(e){case"sphere":case"cube":case"diamond":return u;case"cylinder":case"cone":case"inverted-cone":return a;case"tetrahedron":return l;default:return}}let y=m();function m(){return new r(50)}function h(){y=m()}function p(e,r){if("icon"===e.type)return b(e,r);if("object"===e.type)return w(e,r);throw new t("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function d(r,n){if("icon"===r.type)return function(e,r){return b(e,r).then((r=>{if(null==e.size)return r;const t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}(r,n);if("object"===r.type)return async function(r,t){return function(r,{isPrimitive:t,width:n,depth:o,height:i}){const s=t?10:1;if(null==n&&null==i&&null==o)return[s*r[0],s*r[1],s*r[2]];const c=e(n,o,i);let u;for(let e=0;e<3;e++){const t=c[e];if(null!=t){u=t/r[e];break}}for(let e=0;e<3;e++)null==c[e]&&(c[e]=r[e]*u);return c}(await w(r,t),r)}(r,n);throw new t("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function b(e,r){if(e.resource.href)return function(e){return n(e,{responseType:"image"}).then((e=>e.data))}(e.resource.href).then((e=>[e.width,e.height]));if(e.resource.primitive)return o(r)?[r,r]:[256,256];throw new t("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(e,r){return v(e,r).then((e=>s(e)))}async function v(e,r){if(!e.isPrimitive){const r=e.resource.href,t=y.get(r);if(void 0!==t)return Promise.resolve(t);const n=await import("./objectResourceUtils-8e06a03c.js").then((function(e){return e.o})),o=await n.fetch(r,{disableTextures:!0});return y.put(r,o.referenceBoundingBox),o.referenceBoundingBox}let n=null;if(e.resource&&e.resource.primitive&&(n=c(f(e.resource.primitive)),o(r)))for(let e=0;e<n.length;e++)n[e]*=r;return n?Promise.resolve(n):Promise.reject(new t("symbol:invalid-resource","The symbol does not have a valid resource"))}export{h as clearBoundingBoxCache,b as computeIconLayerResourceSize,p as computeLayerResourceSize,d as computeLayerSize,w as computeObjectLayerResourceSize};
