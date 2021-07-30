import{G as e,k as n,ak as t,J as r,K as a}from"./arcadeUtils-d32dea37.js";import{g as i,b as s}from"./SpatialFilter-47bca79b.js";import{er as l,dE as o,es as u}from"../main.js";import{w as c,A as f,x as p,O as d,p as m,g as R,h as S}from"./geometryEngineAsync-a568c9a0.js";import"./number-0f51978d.js";import"./FeatureSetReader-eb56bd88.js";import"./centroid-3d42d303.js";import"./WhereClause-1d992a63.js";function h(e){return e instanceof o}function y(r,a,S,y,b){return b(r,a,(function(r,a,b){if(b.length<2)return y(new Error("Missing Parameters"));if(null===(b=e(b))[0]&&null===b[1])return l(!1);if(n(b[0]))return b[1]instanceof o?l(new i({parentfeatureset:b[0],relation:S,relationGeom:b[1]})):null===b[1]?l(new s({parentfeatureset:b[0]})):y("Spatial Relation cannot accept this parameter type");if(h(b[0])){if(h(b[1])){let e=null;switch(S){case"esriSpatialRelEnvelopeIntersects":e=R(t(b[0]),t(b[1]));break;case"esriSpatialRelIntersects":e=R(b[0],b[1]);break;case"esriSpatialRelContains":e=m(b[0],b[1]);break;case"esriSpatialRelOverlaps":e=d(b[0],b[1]);break;case"esriSpatialRelWithin":e=p(b[0],b[1]);break;case"esriSpatialRelTouches":e=f(b[0],b[1]);break;case"esriSpatialRelCrosses":e=c(b[0],b[1])}return null!==e?e:u(new Error("Unrecognised Relationship"))}return n(b[1])?l(new i({parentfeatureset:b[1],relation:S,relationGeom:b[0]})):null===b[1]?l(!1):y("Spatial Relation cannot accept this parameter type")}return null!==b[0]?y("Spatial Relation cannot accept this parameter type"):n(b[1])?l(new s({parentfeatureset:b[1]})):b[1]instanceof o||null===b[1]?l(!1):void 0}))}function b(t){"async"===t.mode&&(t.functions.intersects=function(e,n){return y(e,n,"esriSpatialRelIntersects",t.failDefferred,t.standardFunctionAsync)},t.functions.envelopeintersects=function(e,n){return y(e,n,"esriSpatialRelEnvelopeIntersects",t.failDefferred,t.standardFunctionAsync)},t.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),t.functions.contains=function(e,n){return y(e,n,"esriSpatialRelContains",t.failDefferred,t.standardFunctionAsync)},t.functions.overlaps=function(e,n){return y(e,n,"esriSpatialRelOverlaps",t.failDefferred,t.standardFunctionAsync)},t.functions.within=function(e,n){return y(e,n,"esriSpatialRelWithin",t.failDefferred,t.standardFunctionAsync)},t.functions.touches=function(e,n){return y(e,n,"esriSpatialRelTouches",t.failDefferred,t.standardFunctionAsync)},t.functions.crosses=function(e,n){return y(e,n,"esriSpatialRelCrosses",t.failDefferred,t.standardFunctionAsync)},t.functions.relate=function(i,l){return t.standardFunctionAsync(i,l,(function(t,i,l){if(l=e(l),r(l,3,3),h(l[0])&&h(l[1]))return S(l[0],l[1],a(l[2]));if(l[0]instanceof o&&null===l[1])return!1;if(l[1]instanceof o&&null===l[0])return!1;if(n(l[0])&&null===l[1])return new s({parentfeatureset:l[0]});if(n(l[1])&&null===l[0])return new s({parentfeatureset:l[1]});if(n(l[0])&&l[1]instanceof o)return l[0].relate(l[1],a(l[2]));if(n(l[1])&&l[0]instanceof o)return l[1].relate(l[0],a(l[2]));if(null===l[0]&&null===l[1])return!1;throw new Error("Illegal Argument")}))})}export{b as registerFunctions};
