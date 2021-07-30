import{G as e,k as n,ak as t,J as r,K as a}from"./arcadeUtils-e4489aa5.js";import{g as i,b as s}from"./SpatialFilter-562579db.js";import{eu as l,dD as o,ev as u}from"../main.js";import{w as c,A as f,x as p,O as d,p as m,g as R,h as S}from"./geometryEngineAsync-147f6e69.js";import"./number-3dcb8c82.js";import"./FeatureSetReader-611f5672.js";import"./centroid-1933d1b4.js";import"./WhereClause-e3e08a97.js";function h(e){return e instanceof o}function y(r,a,S,y,w){return w(r,a,(function(r,a,w){if(w.length<2)return y(new Error("Missing Parameters"));if(null===(w=e(w))[0]&&null===w[1])return l(!1);if(n(w[0]))return w[1]instanceof o?l(new i({parentfeatureset:w[0],relation:S,relationGeom:w[1]})):null===w[1]?l(new s({parentfeatureset:w[0]})):y("Spatial Relation cannot accept this parameter type");if(h(w[0])){if(h(w[1])){let e=null;switch(S){case"esriSpatialRelEnvelopeIntersects":e=R(t(w[0]),t(w[1]));break;case"esriSpatialRelIntersects":e=R(w[0],w[1]);break;case"esriSpatialRelContains":e=m(w[0],w[1]);break;case"esriSpatialRelOverlaps":e=d(w[0],w[1]);break;case"esriSpatialRelWithin":e=p(w[0],w[1]);break;case"esriSpatialRelTouches":e=f(w[0],w[1]);break;case"esriSpatialRelCrosses":e=c(w[0],w[1])}return null!==e?e:u(new Error("Unrecognised Relationship"))}return n(w[1])?l(new i({parentfeatureset:w[1],relation:S,relationGeom:w[0]})):null===w[1]?l(!1):y("Spatial Relation cannot accept this parameter type")}return null!==w[0]?y("Spatial Relation cannot accept this parameter type"):n(w[1])?l(new s({parentfeatureset:w[1]})):w[1]instanceof o||null===w[1]?l(!1):void 0}))}function w(t){"async"===t.mode&&(t.functions.intersects=function(e,n){return y(e,n,"esriSpatialRelIntersects",t.failDefferred,t.standardFunctionAsync)},t.functions.envelopeintersects=function(e,n){return y(e,n,"esriSpatialRelEnvelopeIntersects",t.failDefferred,t.standardFunctionAsync)},t.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),t.functions.contains=function(e,n){return y(e,n,"esriSpatialRelContains",t.failDefferred,t.standardFunctionAsync)},t.functions.overlaps=function(e,n){return y(e,n,"esriSpatialRelOverlaps",t.failDefferred,t.standardFunctionAsync)},t.functions.within=function(e,n){return y(e,n,"esriSpatialRelWithin",t.failDefferred,t.standardFunctionAsync)},t.functions.touches=function(e,n){return y(e,n,"esriSpatialRelTouches",t.failDefferred,t.standardFunctionAsync)},t.functions.crosses=function(e,n){return y(e,n,"esriSpatialRelCrosses",t.failDefferred,t.standardFunctionAsync)},t.functions.relate=function(i,l){return t.standardFunctionAsync(i,l,(function(t,i,l){if(l=e(l),r(l,3,3),h(l[0])&&h(l[1]))return S(l[0],l[1],a(l[2]));if(l[0]instanceof o&&null===l[1])return!1;if(l[1]instanceof o&&null===l[0])return!1;if(n(l[0])&&null===l[1])return new s({parentfeatureset:l[0]});if(n(l[1])&&null===l[0])return new s({parentfeatureset:l[1]});if(n(l[0])&&l[1]instanceof o)return l[0].relate(l[1],a(l[2]));if(n(l[1])&&l[0]instanceof o)return l[1].relate(l[0],a(l[2]));if(null===l[0]&&null===l[1])return!1;throw new Error("Illegal Argument")}))})}export{w as registerFunctions};
