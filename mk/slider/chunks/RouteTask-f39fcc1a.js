import{c$ as e,ca as r,L as t,V as s,X as a,d0 as i}from"../main.js";import{u as o,d as n,a as u,p as c,f as p,o as l}from"./networkService-fd8f3e0c.js";import"./GPMessage-933d7ac7.js";const m=l({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});let f=class extends i{constructor(e){super(e)}solve(s,a){return async function(s,a,i){const l=[],f=[],d={},y={},B=e(s);return a.stops&&a.stops.features&&o(a.stops.features,f,"stops.features",d),a.pointBarriers&&a.pointBarriers.features&&o(a.pointBarriers.features,f,"pointBarriers.features",d),a.polylineBarriers&&a.polylineBarriers.features&&o(a.polylineBarriers.features,f,"polylineBarriers.features",d),a.polygonBarriers&&a.polygonBarriers.features&&o(a.polygonBarriers.features,f,"polygonBarriers.features",d),r(f).then((e=>{for(const r in d){const t=d[r];l.push(r),y[r]=e.slice(t[0],t[1])}return n(y,l)?u(B.path):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||c(y,l);for(const e in y)y[e].forEach(((r,t)=>{a.get(e)[t].geometry=r}));const r={...i,query:{...B.query,...m.toQueryParams(a),f:"json"}},{path:s}=B,o="/solve",n=s.endsWith(o)?s:s+o;return t(n,r)})).then((e=>p(e)))}(this.url,s,a)}};f=s([a("esri.tasks.RouteTask")],f);var d=f;export default d;
