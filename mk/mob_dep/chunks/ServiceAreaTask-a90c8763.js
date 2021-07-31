import{V as e,W as r,a4 as t,cZ as s,cz as a,aU as i,cb as o,X as n,cJ as l,c5 as p,aT as u,bq as c,c$ as y,ca as f,L as d,d0 as B}from"../main.js";import{i as m,u as v,d as g,a as P,p as h,o as A}from"./networkService-2fe0a6ba.js";import"./GPMessage-7f6a1b17.js";function S(e){return e.features.map((r=>{const t=u.fromJSON(e.spatialReference),s=o.fromJSON(r);return c(s.geometry).spatialReference=t,s}))}function b(e){return e.features.map((r=>(r.geometry.spatialReference=e.spatialReference,p(r.geometry))))}let k=class extends l{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return b(e)}readPointBarriers(e,r){return b(r.barriers)}readPolylineBarriers(e){return b(e)}readPolygonBarriers(e){return b(e)}readIncidents(e,r){return S(r.saPolylines)}readServiceAreaPolygons(e,r){return S(r.saPolygons)}};e([r({type:[t]})],k.prototype,"facilities",void 0),e([s("facilities")],k.prototype,"readFacilities",null),e([r({type:[m]})],k.prototype,"messages",void 0),e([r({type:[t]})],k.prototype,"pointBarriers",void 0),e([s("pointBarriers",["barriers"])],k.prototype,"readPointBarriers",null),e([r({type:[a]})],k.prototype,"polylineBarriers",void 0),e([s("polylineBarriers")],k.prototype,"readPolylineBarriers",null),e([r({type:[i]})],k.prototype,"polygonBarriers",void 0),e([s("polygonBarriers")],k.prototype,"readPolygonBarriers",null),e([r({type:[o]})],k.prototype,"serviceAreaPolylines",void 0),e([s("serviceAreaPolylines",["saPolylines"])],k.prototype,"readIncidents",null),e([r({type:[o]})],k.prototype,"serviceAreaPolygons",void 0),e([s("serviceAreaPolygons",["saPolygons"])],k.prototype,"readServiceAreaPolygons",null),k=e([n("esri.rest.support.ServiceAreaSolveResult")],k);var R=k;const N=A({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});let j=class extends B{constructor(e){super(e),this.url=null}solve(e,r){return async function(e,r,t){const s=[],a=[],i={},o={},n=y(e);return r.facilities&&r.facilities.features&&v(r.facilities.features,a,"facilities.features",i),r.pointBarriers&&r.pointBarriers.features&&v(r.pointBarriers.features,a,"pointBarriers.features",i),r.polylineBarriers&&r.polylineBarriers.features&&v(r.polylineBarriers.features,a,"polylineBarriers.features",i),r.polygonBarriers&&r.polygonBarriers.features&&v(r.polygonBarriers.features,a,"polygonBarriers.features",i),f(a).then((e=>{for(const r in i){const t=i[r];s.push(r),o[r]=e.slice(t[0],t[1])}return g(o,s)?P(n.path).catch((()=>({dontCheck:!0}))):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||h(o,s);for(const e in o)o[e].forEach(((t,s)=>{r.get(e)[s].geometry=t}));let a={query:{...n.query,f:"json",...N.toQueryParams(r)}};return t&&(a={...t,...a}),d(`${n.path}/solveServiceArea`,a)})).then((e=>R.fromJSON(e.data)))}(this.url,e,r)}};e([r()],j.prototype,"url",void 0),j=e([n("esri.tasks.ServiceAreaTask")],j);var C=j;export{C as default};
