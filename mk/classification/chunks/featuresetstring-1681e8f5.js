import{J as n,i as e,K as t,X as r,n as o,al as a,k as i,am as c,an as d,ao as u,ap as s,M as m}from"./arcadeUtils-be42949d.js";import"../main.js";import"./number-527212e5.js";import"./FeatureSetReader-5a545356.js";import"./centroid-a817072d.js";function f(n){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?o.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:a[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):o.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:a[n.field.type],min:n.domain.min,max:n.domain.max}):null}function l(a){"async"===a.mode&&(a.functions.domain=function(o,d){return a.standardFunctionAsync(o,d,(function(o,a,d){if(n(d,2,3),d[0]instanceof e)return f(d[0].fullDomain(t(d[1]),void 0===d[2]?void 0:r(d[2])));if(i(d[0]))return d[0]._ensureLoaded().then((()=>f(c(t(d[1]),d[0],null,void 0===d[2]?void 0:r(d[2])))));throw new Error("Invalid Parameter")}))},a.functions.subtypes=function(t,r){return a.standardFunctionAsync(t,r,(function(t,r,a){if(n(a,1,1),a[0]instanceof e){const n=a[0].subtypes();return n?o.convertObjectToArcadeDictionary(n):null}if(i(a[0]))return a[0]._ensureLoaded().then((()=>{const n=a[0].subtypes();return n?o.convertObjectToArcadeDictionary(n):null}));throw new Error("Invalid Parameter")}))},a.functions.domainname=function(o,u){return a.standardFunctionAsync(o,u,(function(o,a,u){if(n(u,2,4),u[0]instanceof e)return u[0].domainValueLookup(t(u[1]),u[2],void 0===u[3]?void 0:r(u[3]));if(i(u[0]))return u[0]._ensureLoaded().then((()=>{const n=c(t(u[1]),u[0],null,void 0===u[3]?void 0:r(u[3]));return d(n,u[2])}));throw new Error("Invalid Parameter")}))},a.signatures.push({name:"domainname",min:"2",max:"4"}),a.functions.domaincode=function(o,d){return a.standardFunctionAsync(o,d,(function(o,a,d){if(n(d,2,4),d[0]instanceof e)return d[0].domainCodeLookup(t(d[1]),d[2],void 0===d[3]?void 0:r(d[3]));if(i(d[0]))return d[0]._ensureLoaded().then((()=>{const n=c(t(d[1]),d[0],null,void 0===d[3]?void 0:r(d[3]));return u(n,d[2])}));throw new Error("Invalid Parameter")}))},a.signatures.push({name:"domaincode",min:"2",max:"4"})),a.functions.text=function(e,t){return a.standardFunctionAsync(e,t,(function(e,t,r){if(n(r,1,2),!i(r[0]))return s(r[0],r[1]);{const n=m(r[1],"");if(""===n)return r[0].castToText();if("schema"===n.toLowerCase())return r[0].convertToText("schema",e.abortSignal);if("featureset"===n.toLowerCase())return r[0].convertToText("featureset",e.abortSignal)}}))},a.functions.gdbversion=function(t,r){return a.standardFunctionAsync(t,r,(function(t,r,o){if(n(o,1,1),o[0]instanceof e)return o[0].gdbVersion();if(i(o[0]))return o[0].load().then((n=>n.gdbVersion));throw new Error("Invalid Parameter")}))},a.functions.schema=function(t,r){return a.standardFunctionAsync(t,r,(function(t,r,a){if(n(a,1,1),i(a[0]))return a[0].load().then((()=>o.convertObjectToArcadeDictionary(a[0].schema())));if(a[0]instanceof e){const n=a[0].schema();return n?o.convertObjectToArcadeDictionary(n):null}throw new Error("Invalid Parameter")}))}}export{l as registerFunctions};
