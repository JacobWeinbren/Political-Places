import{cV as e,c4 as r,L as t,V as s,X as a,cW as i}from"../main.js";import{u as o,d as n,a as u,p as c,f as p,o as l}from"./networkService-a93140d5.js";import"eng/classification.json";import"./GPMessage-3ce33413.js";const m=l({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});let f=class extends i{constructor(e){super(e)}solve(s,a){return async function(s,a,i){const l=[],f=[],y={},B={},d=e(s);return a.stops&&a.stops.features&&o(a.stops.features,f,"stops.features",y),a.pointBarriers&&a.pointBarriers.features&&o(a.pointBarriers.features,f,"pointBarriers.features",y),a.polylineBarriers&&a.polylineBarriers.features&&o(a.polylineBarriers.features,f,"polylineBarriers.features",y),a.polygonBarriers&&a.polygonBarriers.features&&o(a.polygonBarriers.features,f,"polygonBarriers.features",y),r(f).then((e=>{for(const r in y){const t=y[r];l.push(r),B[r]=e.slice(t[0],t[1])}return n(B,l)?u(d.path):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||c(B,l);for(const e in B)B[e].forEach(((r,t)=>{a.get(e)[t].geometry=r}));const r={...i,query:{...d.query,...m.toQueryParams(a),f:"json"}},{path:s}=d,o="/solve",n=s.endsWith(o)?s:s+o;return t(n,r)})).then((e=>p(e)))}(this.url,s,a)}};f=s([a("esri.tasks.RouteTask")],f);var y=f;export default y;
