import{a as n}from"./arcadeUtils-e61d3305.js";import{hg as e,hJ as r,hM as t,ha as a,hc as o,hN as i,hQ as c,kL as d,hL as u,hO as s,kM as m,hP as f,kN as l,h4 as h,hi as v,hK as y}from"../main.js";function p(e){return e&&e.domain?"coded-value"===e.domain.type||"codedValue"===e.domain.type?n.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:i[e.field.type],codedValues:e.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):n.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:i[e.field.type],min:e.domain.min,max:e.domain.max}):null}function w(i){"async"===i.mode&&(i.functions.domain=function(n,u){return i.standardFunctionAsync(n,u,(function(n,i,u){if(e(u,2,3),r(u[0]))return p(t(u[0],o(u[1]),void 0===u[2]?void 0:a(u[2])));if(c(u[0]))return u[0]._ensureLoaded().then((()=>p(d(o(u[1]),u[0],null,void 0===u[2]?void 0:a(u[2])))));throw new Error("Invalid Parameter")}))},i.functions.subtypes=function(t,a){return i.standardFunctionAsync(t,a,(function(t,a,o){if(e(o,1,1),r(o[0])){const e=u(o[0]);return e?n.convertObjectToArcadeDictionary(e):null}if(c(o[0]))return o[0]._ensureLoaded().then((()=>{const e=o[0].subtypes();return e?n.convertObjectToArcadeDictionary(e):null}));throw new Error("Invalid Parameter")}))},i.functions.domainname=function(n,t){return i.standardFunctionAsync(n,t,(function(n,t,i){if(e(i,2,4),r(i[0]))return s(i[0],o(i[1]),i[2],void 0===i[3]?void 0:a(i[3]));if(c(i[0]))return i[0]._ensureLoaded().then((()=>{const n=d(o(i[1]),i[0],null,void 0===i[3]?void 0:a(i[3]));return m(n,i[2])}));throw new Error("Invalid Parameter")}))},i.signatures.push({name:"domainname",min:"2",max:"4"}),i.functions.domaincode=function(n,t){return i.standardFunctionAsync(n,t,(function(n,t,i){if(e(i,2,4),r(i[0]))return f(i[0],o(i[1]),i[2],void 0===i[3]?void 0:a(i[3]));if(c(i[0]))return i[0]._ensureLoaded().then((()=>{const n=d(o(i[1]),i[0],null,void 0===i[3]?void 0:a(i[3]));return l(n,i[2])}));throw new Error("Invalid Parameter")}))},i.signatures.push({name:"domaincode",min:"2",max:"4"})),i.functions.text=function(n,r){return i.standardFunctionAsync(n,r,(function(n,r,t){if(e(t,1,2),!c(t[0]))return h(t[0],t[1]);{const e=v(t[1],"");if(""===e)return t[0].castToText();if("schema"===e.toLowerCase())return t[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return t[0].convertToText("featureset",n.abortSignal)}}))},i.functions.gdbversion=function(n,t){return i.standardFunctionAsync(n,t,(function(n,t,a){if(e(a,1,1),r(a[0]))return a[0].gdbVersion();if(c(a[0]))return a[0].load().then((n=>n.gdbVersion));throw new Error("Invalid Parameter")}))},i.functions.schema=function(t,a){return i.standardFunctionAsync(t,a,(function(t,a,o){if(e(o,1,1),c(o[0]))return o[0].load().then((()=>n.convertObjectToArcadeDictionary(o[0].schema())));if(r(o[0])){const e=y(o[0]);return e?n.convertObjectToArcadeDictionary(e):null}throw new Error("Invalid Parameter")}))}}export{w as registerFunctions};
