import{l as e,a as r,ci as t}from"../main.js";import{a as i}from"./ProjectParameters-fb266efb.js";async function o(i=null,o){if(e.geometryServiceUrl)return new((await import("./GeometryService-439cc6d7.js")).default)({url:e.geometryServiceUrl});if(!i)throw new r("internal:geometry-service-url-not-configured");let a;if(a="portal"in i?i.portal||t.getDefault():i,await a.load({signal:o}),a.helperServices&&a.helperServices.geometry&&a.helperServices.geometry.url)return new((await import("./GeometryService-439cc6d7.js")).default)({url:a.helperServices.geometry.url});throw new r("internal:geometry-service-url-not-configured")}async function a(e,t,a=null,n){const l=await o(a,n),c=new i;c.geometries=[e],c.outSpatialReference=t;const s=await l.project(c,{signal:n});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new r("internal:geometry-service-projection-failed")}export{o as create,a as projectGeometry};
