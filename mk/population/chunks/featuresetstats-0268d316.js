import{J as n,k as t,Z as r,w as e,E as u,aj as a,M as i}from"./arcadeUtils-c01b31f7.js";import{eu as c,ey as o,ev as s}from"../main.js";import{WhereClause as f}from"./WhereClause-46970ec4.js";import"./number-44fbc67a.js";import"./FeatureSetReader-91ed00ee.js";import"./centroid-3acadd71.js";function d(n,e,o,s,d,m){if(1===s.length){if(r(s[0]))return c(a(n,s[0],i(s[1],-1)));if(u(s[0]))return c(a(n,s[0].toArray(),i(s[1],-1)))}else if(2===s.length){if(r(s[0]))return c(a(n,s[0],i(s[1],-1)));if(u(s[0]))return c(a(n,s[0].toArray(),i(s[1],-1)));if(t(s[0]))return s[0].load().then((t=>l(f.create(s[1],t.getFieldsIndex()),m,d).then((t=>s[0].calculateStatistic(n,t,i(s[2],1e3),e.abortSignal)))))}else if(3===s.length&&t(s[0]))return s[0].load().then((t=>l(f.create(s[1],t.getFieldsIndex()),m,d).then((t=>s[0].calculateStatistic(n,t,i(s[2],1e3),e.abortSignal)))));return c(a(n,s,-1))}function l(n,t,r){try{const e=n.getVariables();if(e.length>0){const u=[];for(let n=0;n<e.length;n++){const a={name:e[n]};u.push(t.evaluateIdentifier(r,a))}return o(u).then((t=>{const r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return n.parameters=r,n}))}return c(n)}catch(n){return s(n)}}function m(a){"async"===a.mode&&(a.functions.stdev=function(n,t){return a.standardFunctionAsync(n,t,(function(t,r,e){return d("stdev",t,0,e,n,a)}))},a.functions.variance=function(n,t){return a.standardFunctionAsync(n,t,(function(t,r,e){return d("variance",t,0,e,n,a)}))},a.functions.average=function(n,t){return a.standardFunctionAsync(n,t,(function(t,r,e){return d("mean",t,0,e,n,a)}))},a.functions.mean=function(n,t){return a.standardFunctionAsync(n,t,(function(t,r,e){return d("mean",t,0,e,n,a)}))},a.functions.sum=function(n,t){return a.standardFunctionAsync(n,t,(function(t,r,e){return d("sum",t,0,e,n,a)}))},a.functions.min=function(n,t){return a.standardFunctionAsync(n,t,(function(t,r,e){return d("min",t,0,e,n,a)}))},a.functions.max=function(n,t){return a.standardFunctionAsync(n,t,(function(t,r,e){return d("max",t,0,e,n,a)}))},a.functions.count=function(i,c){return a.standardFunctionAsync(i,c,(function(a,i,c){if(n(c,1,1),t(c[0]))return c[0].count(a.abortSignal);if(r(c[0])||e(c[0]))return c[0].length;if(u(c[0]))return c[0].length();throw new Error("Invalid Parameters for Count")}))})}export{m as registerFunctions};
