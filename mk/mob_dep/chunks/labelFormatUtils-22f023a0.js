import{n as e,iu as t,iv as a,iw as r,ix as n,fW as s,iy as i,a as l,iz as u}from"../main.js";const o=e.getLogger("esri.layers.support.labelFormatUtils"),c={type:"simple",evaluate:()=>null},p={getAttribute:(e,t)=>e.field(t)};async function f(e,r,n){if(!e||!e.symbol)return c;const s=e.where,i=t(e),f=s?await import("./WhereClause-1079bebe.js"):null;let y;if("arcade"===i.type){const e=await a(i.expression,n,r);y={type:"arcade",evaluate(t){try{const a=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):e.repurposeAdapter(t)});if(null!=a)return a.toString()}catch(e){o.error(new l("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:t,expression:i}))}return null},needsHydrationToEvaluate:()=>null==u(i.expression)}}else y={type:"simple",evaluate:e=>i.expression.replace(/{[^}]*}/g,(t=>{const a=t.slice(1,-1),n=r.get(a);if(!n)return t;let s=null;return"attributes"in e?e&&e.attributes&&(s=e.attributes[n.name]):s=e.field(n.name),null==s?"":d(s,n)}))};if(s){let e;try{e=f.WhereClause.create(s,r)}catch(e){return c}const t=y.evaluate;y.evaluate=a=>{const r="attributes"in a?void 0:p;return e.testFeature(a,r)?t(a):null}}return y}function d(e,t){if(null==e)return"";const a=t.domain;if(a)if("codedValue"===a.type||"coded-value"===a.type){const t=e;for(const e of a.codedValues)if(e.code===t)return e.name}else if("range"===a.type){const t=+e,r="range"in a?a.range[0]:a.minValue,n="range"in a?a.range[1]:a.maxValue;if(r<=t&&t<=n)return a.name}let l=e;return"date"===t.type||"esriFieldTypeDate"===t.type?l=r(l,n("short-date")):s(t)&&(l=i(+l)),l||""}export{f as createLabelFunction,d as formatField};
