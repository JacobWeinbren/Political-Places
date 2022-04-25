import{n as e}from"./arcadeUtils-d5b2dce2.js";import{hy as n,h7 as t,hO as r,cN as a,hU as i,he as s,ha as l}from"../main.js";import{g as o,d as c}from"./SpatialFilter-dab0231e.js";import{w as u,A as f,x as p,O as d,p as h,g as m,h as R}from"./geometryEngineAsync-1391e0a4.js";import"./WhereClause-71493fcb.js";function S(e){return e instanceof a}function y(s,l,R,y,w){return w(s,l,(function(s,l,w){if(w.length<2)return y(new Error("Missing Parameters"));if(null===(w=n(w))[0]&&null===w[1])return t(!1);if(r(w[0]))return w[1]instanceof a?t(new o({parentfeatureset:w[0],relation:R,relationGeom:w[1]})):null===w[1]?t(new c({parentfeatureset:w[0]})):y("Spatial Relation cannot accept this parameter type");if(S(w[0])){if(S(w[1])){let n=null;switch(R){case"esriSpatialRelEnvelopeIntersects":n=m(e(w[0]),e(w[1]));break;case"esriSpatialRelIntersects":n=m(w[0],w[1]);break;case"esriSpatialRelContains":n=h(w[0],w[1]);break;case"esriSpatialRelOverlaps":n=d(w[0],w[1]);break;case"esriSpatialRelWithin":n=p(w[0],w[1]);break;case"esriSpatialRelTouches":n=f(w[0],w[1]);break;case"esriSpatialRelCrosses":n=u(w[0],w[1])}return null!==n?n:i(new Error("Unrecognised Relationship"))}return r(w[1])?t(new o({parentfeatureset:w[1],relation:R,relationGeom:w[0]})):null===w[1]?t(!1):y("Spatial Relation cannot accept this parameter type")}return null!==w[0]?y("Spatial Relation cannot accept this parameter type"):r(w[1])?t(new c({parentfeatureset:w[1]})):w[1]instanceof a||null===w[1]?t(!1):void 0}))}function w(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return y(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return y(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return y(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return y(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return y(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return y(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return y(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(t,i){return e.standardFunctionAsync(t,i,(function(e,t,i){if(i=n(i),s(i,3,3),S(i[0])&&S(i[1]))return R(i[0],i[1],l(i[2]));if(i[0]instanceof a&&null===i[1])return!1;if(i[1]instanceof a&&null===i[0])return!1;if(r(i[0])&&null===i[1])return new c({parentfeatureset:i[0]});if(r(i[1])&&null===i[0])return new c({parentfeatureset:i[1]});if(r(i[0])&&i[1]instanceof a)return i[0].relate(i[1],l(i[2]));if(r(i[1])&&i[0]instanceof a)return i[1].relate(i[0],l(i[2]));if(null===i[0]&&null===i[1])return!1;throw new Error("Illegal Argument")}))})}export{w as registerFunctions};