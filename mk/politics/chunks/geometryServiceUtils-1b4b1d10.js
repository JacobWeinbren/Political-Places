import{l as e,a as r,cn as t}from"../main.js";import{a as i}from"./ProjectParameters-ade1c998.js";async function a(i=null,a){if(e.geometryServiceUrl)return new((await import("./GeometryService-4e0b90be.js")).default)({url:e.geometryServiceUrl});if(!i)throw new r("internal:geometry-service-url-not-configured");let o;if(o="portal"in i?i.portal||t.getDefault():i,await o.load({signal:a}),o.helperServices&&o.helperServices.geometry&&o.helperServices.geometry.url)return new((await import("./GeometryService-4e0b90be.js")).default)({url:o.helperServices.geometry.url});throw new r("internal:geometry-service-url-not-configured")}async function o(e,t,o=null,n){const l=await a(o,n),c=new i;c.geometries=[e],c.outSpatialReference=t;const s=await l.project(c,{signal:n});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new r("internal:geometry-service-projection-failed")}export{a as create,o as projectGeometry};