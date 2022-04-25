import{gn as e,eV as n,go as t,gp as i,gq as r,bl as s}from"../main.js";class o{constructor(){this.code=null,this.description=null}}class l{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new l(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new u(e)}const f=new Set;function d(e,n,t,s=!1,o){f.clear();for(const l in t){const u=e.get(l);if(!u)continue;const c=t[l],d=g(u,c);if(d!==c&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:u,originalValue:c,sanitizedValue:d}}),f.add(u.name),u&&(s||u.editable)){const e=i(u,d);if(e)return a(r(e,u,d));n[u.name]=d}}for(const n of e.requiredFields)if(!f.has(n.name))return a(`missing required field "${n.name}"`);return null}function g(i,r){let s=r;return"string"==typeof r&&e(i)?s=parseFloat(r):null!=r&&n(i)&&"string"!=typeof r&&(s=String(r)),t(s)}let h;function m(e,n){if(!e||!s(n))return e;if("rings"in e||"paths"in e){if(!h)throw new TypeError("geometry engine not loaded");return h.simplify(n,e)}return e}async function p(e,n){!s(e)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await async function(){return h||(h=await import("./geometryEngineJSON-f51fca68.js"),h)}()}export{c,d,m as h,a as u,p as y};
