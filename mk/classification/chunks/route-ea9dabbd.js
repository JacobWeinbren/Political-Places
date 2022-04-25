import{Z as e,_ as t,d3 as r,cc as s,a0 as o,c8 as i,e0 as a,dv as n,cb as l,C as u,r as p}from"../main.js";import{a as c,i as y,u as f,f as d,d as m,o as g}from"./NAMessage-ce8c1499.js";import{c as v}from"./DirectionsFeatureSet-eca49146.js";let h=class extends i{constructor(e){super(e),this.directionLines=null,this.directionPoints=null,this.directions=null,this.route=null,this.routeName=null,this.stops=null}};e([t({type:r,json:{write:!0}})],h.prototype,"directionLines",void 0),e([t({type:r,json:{write:!0}})],h.prototype,"directionPoints",void 0),e([t({type:v,json:{write:!0}})],h.prototype,"directions",void 0),e([t({type:s,json:{write:!0}})],h.prototype,"route",void 0),e([t({type:String,json:{write:!0}})],h.prototype,"routeName",void 0),e([t({type:[s],json:{write:!0}})],h.prototype,"stops",void 0),h=e([o("esri.rest.support.RouteResult")],h);const B=h;function R(e){return e&&r.fromJSON(e).features.map((e=>e))}let b=class extends i{constructor(e){super(e),this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return R(t.barriers)}readPolylineBarriers(e){return R(e)}readPolygonBarriers(e){return R(e)}};e([t({type:[c]})],b.prototype,"messages",void 0),e([t({type:[s]})],b.prototype,"pointBarriers",void 0),e([a("pointBarriers",["barriers"])],b.prototype,"readPointBarriers",null),e([t({type:[s]})],b.prototype,"polylineBarriers",void 0),e([a("polylineBarriers")],b.prototype,"readPolylineBarriers",null),e([t({type:[s]})],b.prototype,"polygonBarriers",void 0),e([a("polygonBarriers")],b.prototype,"readPolygonBarriers",null),e([t({type:[B]})],b.prototype,"routeResults",void 0),b=e([o("esri.rest.support.RouteSolveResult")],b);const A=b,N=g({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});function P(e){return"esri.rest.support.FeatureSet"===(null==e?void 0:e.declaredClass)}async function j(e,t,r){const s=[],o=[],i={},a={},p=n(e),{path:c}=p;P(t.stops)&&y(t.stops.features,o,"stops.features",i),P(t.pointBarriers)&&y(t.pointBarriers.features,o,"pointBarriers.features",i),P(t.polylineBarriers)&&y(t.polylineBarriers.features,o,"polylineBarriers.features",i),P(t.polygonBarriers)&&y(t.polygonBarriers.features,o,"polygonBarriers.features",i);const g=await l(o);for(const e in i){const t=i[e];s.push(e),a[e]=g.slice(t[0],t[1])}if(f(a,s)){let e=null;try{e=await d(c,t.apiKey,r)}catch{}e&&!e.hasZ&&m(a,s)}for(const e in a)a[e].forEach(((r,s)=>{t.get(e)[s].geometry=r}));const v={...r,query:{...p.query,...N.toQueryParams(t),f:"json"}},h=c.endsWith("/solve")?c:`${c}/solve`,{data:B}=await u(h,v);return w(B)}function w(e){var t,r,s,o,i;const a=new Map,{directionLines:n,directionPoints:l,directions:u,routes:c,stops:y,barriers:f,polygonBarriers:d,polylineBarriers:m,messages:g}=e,v=null!=(t=null!=(r=null!=(s=null!=(o=null==c?void 0:c.spatialReference)?o:null==y?void 0:y.spatialReference)?s:null==f?void 0:f.spatialReference)?r:null==d?void 0:d.spatialReference)?t:null==m?void 0:m.spatialReference;null==c||c.features.forEach((e=>{const t=e.attributes.Name,r=e.attributes.ObjectID;a.has(t)?(a.get(t).route=e,a.get(t).routeId=r):a.set(t,{route:e,routeId:r,routeName:t}),p(e.geometry)&&(e.geometry.spatialReference=v)})),null==u||u.forEach((e=>{const t=e.routeName;a.has(t)?a.get(t).directions=e:a.set(t,{routeName:t,directions:e})})),null==y||y.features.forEach((e=>{var t;const r=null!=(t=e.attributes.RouteName)?t:null;a.has(r)?a.get(r).stops?a.get(r).stops.push(e):a.get(r).stops=[e]:a.set(r,{stops:[e],routeName:r}),p(e.geometry)&&(e.geometry.spatialReference=v)}));const h=null==(i=null==y?void 0:y.features.every((e=>null==e.attributes.RouteName)))||i;if((null==y?void 0:y.features.length)>0&&h){const e=Array.from(a.keys())[0];a.get(e).stops=a.get(null).stops,a.delete(null)}null==n||n.features.forEach((e=>{var t;const r=e.attributes.RouteID,s=null==(t=Array.from(a.values()).find((e=>e.routeId===r)))?void 0:t.routeName;if(s)if(a.has(s))if(a.get(s).directionLines)a.get(s).directionLines.features.push(e);else{const{fieldAliases:t,geometryType:r,spatialReference:o}=n;a.get(s).directionLines={features:[e],fieldAliases:t,geometryType:r,spatialReference:o}}else{const{fieldAliases:t,geometryType:r,spatialReference:o}=n;a.set(s,{routeName:s,directionLines:{features:[e],fieldAliases:t,geometryType:r,spatialReference:o}})}})),null==l||l.features.forEach((e=>{var t;const r=e.attributes.RouteID,s=null==(t=Array.from(a.values()).find((e=>e.routeId===r)))?void 0:t.routeName;if(s)if(a.has(s))if(a.get(s).directionPoints)a.get(s).directionPoints.features.push(e);else{const{fieldAliases:t,geometryType:r,spatialReference:o}=l;a.get(s).directionPoints={features:[e],fieldAliases:t,geometryType:r,spatialReference:o}}else{const{fieldAliases:t,geometryType:r,spatialReference:o}=l;a.set(s,{routeName:s,directionPoints:{features:[e],fieldAliases:t,geometryType:r,spatialReference:o}})}}));const B=Array.from(a.values());return A.fromJSON({routeResults:B,barriers:f,polygonBarriers:d,polylineBarriers:m,messages:g})}export{j as p};
