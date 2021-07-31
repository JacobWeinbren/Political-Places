import{bi as e,t,u as s}from"../main.js";import{w as n,A as o}from"./Utils-7f5e53fe.js";import{c as i}from"./definitions-bd7968b3.js";import{o as l}from"./visualVariablesUtils-6ece6aa2.js";function r(e,t=0,s=!1){const n=e[t+3];return e[t+0]*=n,e[t+1]*=n,e[t+2]*=n,s||(e[t+3]*=255),e}function a(e){if(!e)return 0;const{r:t,g:s,b:o,a:i}=e;return n(t*i,s*i,o*i,255*i)}function u(e){if(!e)return 0;const[t,s,o,i]=e;return n(t*(i/255),s*(i/255),o*(i/255),i)}const c=(e,t)=>e&&((...e)=>t.warn("DEBUG:",...e))||(()=>null),f=!1;function p(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function v(t){return t.map((t=>function(t){return{value:t.value,size:e(t.size)}}(t)))}function m(t){if("string"==typeof t||"number"==typeof t)return e(t);const s=t;return{type:"size",expression:s.expression,stops:v(s.stops)}}const d=e=>{const t=[],n=[],o=v(e),l=o.length;for(let e=0;e<6;e++){const r=o[Math.min(e,l-1)];t.push(r.value),n.push(null==r.size?i:s(r.size))}return{values:new Float32Array(t),sizes:new Float32Array(n)}};function y(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t)return{vvFields:t,vvRanges:s};for(const n of e)if(n.field&&(t[n.type]=n.field),"size"===n.type){s.size||(s.size={});const e=n;switch(l(e)){case o.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:m(e.minSize),maxSize:m(e.maxSize)};break;case o.SIZE_SCALE_STOPS:s.size.scaleStops={stops:v(e.stops)};break;case o.SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=d(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t}}else s.size.fieldStops={type:"static",...d(e.stops)};break;case o.SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===n.type)s.color=g(n);else if("opacity"===n.type)s.opacity=h(n);else if("rotation"===n.type){const e=n;s.rotation={type:e.rotationType}}return{vvFields:t,vvRanges:s}}function h(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const n=s[Math.min(e,s.length-1)];t.values[e]=n.value,t.opacities[e]=n.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s}}return t}function z(e,t,s){e[4*t+0]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a}function g(e){if(t(e))return null;if(e.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;s.field=e.field;const t=e.stops;for(let e=0;e<8;++e){const n=t[Math.min(e,t.length-1)];s.values[e]=n.value,z(s.colors,e,n.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const t=e.stops&&e.stops.length>=0&&e.stops[0].color;for(let e=0;e<8;e++)s.values[e]=1/0,z(s.colors,e,t)}}for(let e=0;e<32;e+=4)r(s.colors,e,!0);return s}export{u as f,a as i,f as l,y as m,c as n,p as r};
