import{l as e,a as r,ct as t}from"../main.js";import{a}from"./ProjectParameters-0eef0de1.js";async function i(a=null,i){if(e.geometryServiceUrl)return new((await import("./GeometryService-bb93837a.js")).default)({url:e.geometryServiceUrl});if(!a)throw new r("internal:geometry-service-url-not-configured");let o;if(o="portal"in a?a.portal||t.getDefault():a,await o.load({signal:i}),o.helperServices&&o.helperServices.geometry&&o.helperServices.geometry.url)return new((await import("./GeometryService-bb93837a.js")).default)({url:o.helperServices.geometry.url});throw new r("internal:geometry-service-url-not-configured")}async function o(e,t,o=null,n){const l=await i(o,n),c=new a;c.geometries=[e],c.outSpatialReference=t;const s=await l.project(c,{signal:n});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new r("internal:geometry-service-projection-failed")}export{i as create,o as projectGeometry};
