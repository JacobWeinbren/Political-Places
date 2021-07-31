import{h as e,d as t,N as n,a as r,P as o,o as a,J as c,F as i,B as l,S as s,b as u,c as f,T as h,e as p,_ as d,j as g,t as E,u as y,f as m,m as w,p as v,A as N,g as I,O as b,K as S,Z as T,w as R,E as O,n as U,i as A,k as C,I as x,C as F,X as M,q as D,y as P,l as L,r as k,s as _,D as j,v as V,x as B,z as Y}from"./arcadeUtils-d12e3c13.js";import{registerFunctions as G}from"./geomasync-3ca1b6f6.js";import{et as z,ey as H,ev as q,aS as Z,eu as W,dD as K,a4 as X,aT as J,cy as Q,cx as $,bO as ee}from"../main.js";import"./number-13b37294.js";import"./FeatureSetReader-66f41149.js";import"./centroid-3acadd71.js";import"./geometryEngineAsync-6c08dfd1.js";function te(e){return e instanceof Error?q(e):q(new Error(e))}function ne(e){return W(e)}function re(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(ce(e,t.arguments[r]));return H(n)}function oe(e,t,n){return z(((r,o)=>{re(e,t).then((a=>{try{r(n(e,t,a))}catch(e){o(e)}}),o)}))}function ae(e,t,n){try{return re(e,t).then((r=>{try{const o=n(e,t,r);return function(e){return e&&"function"==typeof e.then}(o)?o:W(o)}catch(e){return te(e)}}))}catch(e){return te(e)}}function ce(e,t,n){try{if(t.breakpoint&&!0!==n)return t.breakpoint().then((()=>ce(e,t,!0)));switch(t.type){case"VariableDeclarator":return function(e,t){try{let n=null;return n=null===t.init?W(null):ce(e,t.init),null!==e.localScope?n.then((n=>z((r=>{if(n===p&&(n=null),"Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const o=t.id.name.toLowerCase();e.localScope[o]={value:n,valueset:!0,node:t.init},r(p)})))):n.then((n=>z((r=>{if("Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const o=t.id.name.toLowerCase();n===p&&(n=null),e.globalScope[o]={value:n,valueset:!0,node:t.init},r(p)}))))}catch(e){return te(e)}}(e,t);case"VariableDeclaration":return ve(e,t,0);case"BlockStatement":return function(e,t){try{return me(e,t,0)}catch(e){return te(e)}}(e,t);case"FunctionDeclaration":return we(e,t);case"ReturnStatement":return function(e,t){return z(((n,r)=>{null===t.argument?n(new f(p)):ce(e,t.argument).then((e=>{try{n(new f(e))}catch(e){r(e)}}),r)}))}(e,t);case"IfStatement":return function(e,t){return z(((n,r)=>{"AssignmentExpression"!==t.test.type&&"UpdateExpression"!==t.test.type?ce(e,t.test).then((o=>{try{!0===o?ce(e,t.consequent).then(n,r):!1===o?null!==t.alternate?ce(e,t.alternate).then(n,r):n(p):r(new Error(I(t.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(e){r(e)}}),r):r(new Error(I(t.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))}))}(e,t);case"ExpressionStatement":return function(e,t){try{return"AssignmentExpression"===t.expression.type?ce(e,t.expression):(t.expression.type,ce(e,t.expression).then((e=>z((t=>{t(e===p?p:new h(e))})))))}catch(e){return q(e)}}(e,t);case"UpdateExpression":return ge(e,t);case"AssignmentExpression":return ye(e,t);case"ForStatement":return function(e,t){try{return null!==t.init?ce(e,t.init).then((()=>z(((n,r)=>{le(e,t,{testResult:!0,lastAction:p},(e=>{n(e)}),(e=>{r(e)}),0)})))):z(((n,r)=>{le(e,t,{testResult:!0,lastAction:p},(e=>{n(e)}),(e=>{r(e)}),0)}))}catch(e){return q(e)}}(e,t);case"ForInStatement":return de(e,t);case"BreakStatement":return W(d);case"EmptyStatement":return W(p);case"ContinueStatement":return W(g);case"TemplateElement":return function(e,t){return W(t.value?t.value.cooked:"")}(0,t);case"TemplateLiteral":return function(e,t){return z((n=>{const r=[];b(t.expressions,((t,n,o,a)=>ce(e,n).then((e=>{r[o]=S(e)})))).then((()=>{let e="",o=0;for(const n of t.quasis)e+=n.value?n.value.cooked:"",!1===n.tail&&(e+=r[o]?r[o]:"",o++);n(e)}))}))}(e,t);case"Identifier":return Se(e,t);case"MemberExpression":return be(e,t);case"Literal":return ne(t.value);case"CallExpression":return Te(e,t);case"UnaryExpression":return function(e,t){try{return ce(e,t.argument).then((e=>z(((n,r)=>{i(e)&&"!"===t.operator?n(!e):"-"===t.operator?n(-1*M(e)):"+"===t.operator?n(1*M(e)):"~"===t.operator?n(~M(e)):r(new Error(I(t,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))}))))}catch(e){return te(e)}}(e,t);case"BinaryExpression":return function(e,t){try{return H([ce(e,t.left),ce(e,t.right)]).then((e=>z(((n,r)=>{const o=e[0],a=e[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":n(P(M(o),M(a),t.operator));case"==":n(l(o,a));break;case"!=":n(!l(o,a));break;case"<":case">":case"<=":case">=":n(D(o,a,t.operator));break;case"+":R(o)||R(a)?n(S(o)+S(a)):n(M(o)+M(a));break;case"-":n(M(o)-M(a));break;case"*":n(M(o)*M(a));break;case"/":n(M(o)/M(a));break;case"%":n(M(o)%M(a));break;default:r(new Error(I(t,"RUNTIME","OPERATORNOTRECOGNISED")))}}))))}catch(e){return te(e)}}(e,t);case"LogicalExpression":return function(e,t){return z(((n,r)=>{"AssignmentExpression"!==t.left.type&&"UpdateExpression"!==t.left.type?"AssignmentExpression"!==t.right.type&&"UpdateExpression"!==t.right.type?ce(e,t.left).then((o=>{try{if(!i(o))throw new Error(I(t,"RUNTIME","ONLYBOOLEAN"));switch(t.operator){case"||":!0===o?n(o):ce(e,t.right).then((e=>{try{if(!i(e))throw new Error(I(t,"RUNTIME","ONLYORORAND"));n(e)}catch(e){r(e)}}),r);break;case"&&":!1===o?n(o):ce(e,t.right).then((e=>{try{if(!i(e))throw new Error(I(t,"RUNTIME","ONLYORORAND"));n(e)}catch(e){r(e)}}),r);break;default:throw new Error(I(t,"RUNTIME","ONLYORORAND"))}}catch(e){r(e)}}),r):r(new Error(I(t.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):r(new Error(I(t.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))}))}(e,t);case"ConditionalExpression":return te(I(t,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return function(e,t){try{const n=[];for(let r=0;r<t.elements.length;r++)n.push(ce(e,t.elements[r]));return H(n).then((e=>z(((n,r)=>{for(let n=0;n<e.length;n++){if(F(e[n]))return void r(new Error(I(t,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[n]===p&&(e[n]=null)}n(e)}))))}catch(e){return te(e)}}(e,t);case"ObjectExpression":return function(e,t){try{const n=[];for(let r=0;r<t.properties.length;r++)n.push(ce(e,t.properties[r]));return H(n).then((e=>z((t=>{const n={};for(let t=0;t<e.length;t++){const r=e[t];if(F(r.value))throw new Error("Illegal Argument");if(!1===R(r.key))throw new Error("Illegal Argument");r.value===p?n[r.key.toString()]=null:n[r.key.toString()]=r.value}const r=new U(n);r.immutable=!1,t(r)}))))}catch(e){return te(e)}}(e,t);case"Property":return function(e,t){try{return ce(e,t.value).then((n=>z((r=>{"Identifier"===t.key.type?r({key:t.key.name,value:n}):ce(e,t.key).then((e=>{r({key:e,value:n})}))}))))}catch(e){return q(e)}}(e,t);default:return te(I(t,"RUNTIME","UNREOGNISED"))}}catch(e){return te(e)}}function ie(e,t,n){try{return ce(e,t.body).then((r=>{try{return n.lastAction=r,n.lastAction===d||n.lastAction instanceof f?(n.testResult=!1,W(n)):null!==t.update?ce(e,t.update).then((()=>W(n))):W(n)}catch(e){return q(e)}}))}catch(e){return q(e)}}function le(e,t,n,r,o,a){try{(function(e,t,n){try{return null!==t.test?ce(e,t.test).then((r=>{try{return!0===e.abortSignal.aborted?q(new Error("Cancelled")):(n.testResult=r,!1===n.testResult?W(n):!0!==n.testResult?q(new Error(I(t,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):ie(e,t,n))}catch(e){return q(e)}})):ie(e,t,n)}catch(e){return q(e)}})(e,t,n).then((()=>{try{!0===n.testResult?++a>100?(a=0,setTimeout((()=>{le(e,t,n,r,o,a)}),0)):le(e,t,n,r,o,a):n.lastAction instanceof f?r(n.lastAction):r(p)}catch(e){o(e)}}),(e=>{o(e)}))}catch(e){o(e)}}function se(e,t,n,r,o,a,c,i,l,s){try{if(r<=a)return void i(p);o.value="k"===c?n[a]:a,ce(e,t.body).then((u=>{try{u instanceof f?i(u):u===d?i(p):++s>100?(s=0,setTimeout((()=>{se(e,t,n,r,o,a+1,c,i,l,s)}),0)):se(e,t,n,r,o,a+1,c,i,l,s)}catch(e){l(e)}}),(e=>{l(e)}))}catch(e){l(e)}}function ue(e,t,n,r,o,a,c,i,l){try{if(n.length()<=o)return void c(p);r.value="k"===a?n.get(o):o,ce(e,t.body).then((s=>{s instanceof f?c(s):s===d?c(p):++l>100?(l=0,setTimeout((()=>{ue(e,t,n,r,o+1,a,c,i,l)}),0)):ue(e,t,n,r,o+1,a,c,i,l)}),(e=>{i(e)}))}catch(e){i(e)}}function fe(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(p);se(e,t,n,n.length,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(e){r.reject(e)}}function he(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(p);ue(e,t,n,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(e){r.reject(e)}}function pe(e,t,n,r,o,a,c,i){try{e.next().then((l=>{try{if(null===l)a(p);else{const s=A.createFromGraphicLikeObject(l.geometry,l.attributes,r);s._underlyingGraphic=l,o.value=s,ce(t,n.body).then((l=>{try{l===d?a(p):l instanceof f?a(l):++i>100?(i=0,setTimeout((()=>{pe(e,t,n,r,o,a,c,i)}),0)):pe(e,t,n,r,o,a,c,i)}catch(e){c(e)}}),(e=>{c(e)}))}}catch(e){c(e)}}),(e=>{c(e)}))}catch(e){c(e)}}function de(e,t){return z(((n,r)=>{ce(e,t.right).then((o=>{try{let a=null;a="VariableDeclaration"===t.left.type?ce(e,t.left):W(),a.then((()=>{try{let a="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(a=e.name)}else"Identifier"===t.left.type&&(a=t.left.name);if(!a)throw new Error(I(t,"RUNTIME","INVALIDVARIABLE"));a=a.toLowerCase();let c=null;if(null!==e.localScope&&void 0!==e.localScope[a]&&(c=e.localScope[a]),null===c&&void 0!==e.globalScope[a]&&(c=e.globalScope[a]),null===c)return void r(new Error(I(t,"RUNTIME","VARIABLENOTDECLARED")));T(o)||R(o)?fe(e,t,o,{reject:r,resolve:n},c):O(o)?he(e,t,o,{reject:r,resolve:n},c):o instanceof U||o instanceof A?function(e,t,n,r,o){try{fe(e,t,n.keys(),r,o,"k")}catch(e){r.reject(e)}}(e,t,o,{reject:r,resolve:n},c):C(o)?pe(o.iterator(e.abortSignal),e,t,o,c,(e=>{n(e)}),(e=>{r(e)}),0):fe(e,t,[],{reject:r,resolve:n},c)}catch(e){r(e)}}),r)}catch(e){r(e)}}),r)}))}function ge(e,t){try{const n=t.argument;if("MemberExpression"===n.type){const r={t:null};return ce(e,n.object).then((t=>{let o=null;return r.t=t,!0===n.computed?o=ce(e,n.property):"Identifier"===n.property.type&&(o=W(n.property.name)),o})).then((e=>z((n=>{const o=r.t;let a;if(T(o)){if(!x(e))throw new Error("Invalid Parameter");if(e<0&&(e=o.length+e),e<0||e>=o.length)throw new Error("Assignment outside of array bounds");a=M(o[e]),o[e]="++"===t.operator?a+1:a-1}else if(o instanceof U){if(!1===R(e))throw new Error("Dictionary accessor must be a string");if(!0!==o.hasField(e))throw new Error("Invalid Parameter");a=M(o.field(e)),o.setField(e,"++"===t.operator?a+1:a-1)}else{if(!(o instanceof A))throw O(o)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===R(e))throw new Error("Feature accessor must be a string");if(!0!==o.hasField(e))throw new Error("Invalid Parameter");a=M(o.field(e)),o.setField(e,"++"===t.operator?a+1:a-1)}!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1)}))))}return z(((n,r)=>{const o="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!o)throw new Error("Invalid identifier");let a;return null!==e.localScope&&void 0!==e.localScope[o]?(a=M(e.localScope[o].value),e.localScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1))):void 0!==e.globalScope[o]?(a=M(e.globalScope[o].value),e.globalScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1))):void r(new Error("Variable not recognised"))}))}catch(e){return q(e)}}function Ee(e,t,n,r){switch(t){case"=":return e===p?null:e;case"/=":return M(n)/M(e);case"*=":return M(n)*M(e);case"-=":return M(n)-M(e);case"+=":return R(n)||R(e)?S(n)+S(e):M(n)+M(e);case"%=":return M(n)%M(e);default:throw new Error(I(r,"RUNTIME","OPERATORNOTRECOGNISED"))}}function ye(e,t){return z(((n,r)=>{const o=t.left;if("MemberExpression"===o.type)ce(e,t.right).then((a=>{try{ce(e,o.object).then((c=>{try{let i=null;if(!0===o.computed)i=ce(e,o.property);else{if("Identifier"!==o.property.type)throw new Error("Expected computed or identifier for assignemnt target");i=W(o.property.name)}i.then((e=>{try{if(T(c)){if(!x(e))throw new Error("Invalid Parameter");if(e<0&&(e=c.length+e),e<0||e>c.length)throw new Error("Assignment outside of array bounds");if(e===c.length){if("="!==t.operator)throw new Error("Invalid Parameter");c[e]=Ee(a,t.operator,c[e],t)}else c[e]=Ee(a,t.operator,c[e],t)}else if(c instanceof U){if(!1===R(e))throw new Error("Dictionary accessor must be a string");if(!0===c.hasField(e))c.setField(e,Ee(a,t.operator,c.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");c.setField(e,Ee(a,t.operator,null,t))}}else{if(!(c instanceof A))throw O(c)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===R(e))throw new Error("Feature accessor must be a string");if(!0===c.hasField(e))c.setField(e,Ee(a,t.operator,c.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");c.setField(e,Ee(a,t.operator,null,t))}}n(p)}catch(e){r(e)}}),r)}catch(e){r(e)}}),r)}catch(e){r(e)}}),r);else{const a=o.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[a])return void ce(e,t.right).then((o=>{try{e.localScope[a]={value:Ee(o,t.operator,e.localScope[a].value,t),valueset:!0,node:t.right},n(p)}catch(e){r(e)}}),r);void 0!==e.globalScope[a]?ce(e,t.right).then((o=>{try{e.globalScope[a]={value:Ee(o,t.operator,e.globalScope[a].value,t),valueset:!0,node:t.right},n(p)}catch(e){r(e)}}),r):r(new Error("Cannot assign undeclared variable"))}}))}function me(e,t,n){try{return n>=t.body.length?W(p):z(((r,o)=>{ce(e,t.body[n]).then((a=>{try{a instanceof f||a===d||a===g||n===t.body.length-1?r(a):me(e,t,n+1).then(r,o)}catch(e){o(e)}}),o)}))}catch(e){return te(e)}}function we(e,t){try{const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new E(t,e)},W(p)}catch(e){return te(e)}}function ve(e,t,n){return z(((r,o)=>{n>=t.declarations.length?r(p):ce(e,t.declarations[n]).then((()=>{n===t.declarations.length-1?r(p):ve(e,t,n+1).then((()=>{r(p)}),o)}),o)}))}let Ne=0;function Ie(e,t,n,r){let o;switch(t=t.toLowerCase()){case"hasz":{const t=e.hasZ;return void 0!==t&&t}case"hasm":{const t=e.hasM;return void 0!==t&&t}case"spatialreference":{let t=e.spatialReference._arcadeCacheId;if(void 0===t){let n=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(n=!1),n&&(Ne++,e.spatialReference._arcadeCacheId=Ne,t=Ne)}const n=new U({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==t&&(n._arcadeCacheId="SPREF"+t.toString()),n}}switch(e.type){case"extent":switch(t){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const n=e[t];return void 0!==n?n:null}case"type":return"Extent"}break;case"polygon":switch(t){case"rings":return o=e.cache._arcadeCacheId,void 0===o&&(Ne++,o=Ne,e.cache._arcadeCacheId=o),new Y(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return"Polygon"}break;case"point":switch(t){case"x":case"y":case"z":case"m":return void 0!==e[t]?e[t]:null;case"type":return"Point"}break;case"polyline":switch(t){case"paths":return o=e.cache._arcadeCacheId,void 0===o&&(Ne++,o=Ne,e.cache._arcadeCacheId=o),new Y(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return"Polyline"}break;case"multipoint":switch(t){case"points":return o=e.cache._arcadeCacheId,void 0===o&&(Ne++,o=Ne,e.cache._arcadeCacheId=o),new B(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,o,1);case"type":return"Multipoint"}}throw new Error(I(r,"RUNTIME","PROPERTYNOTFOUND"))}function be(e,t){try{return ce(e,t.object).then((n=>{try{return null===n?q(new Error(I(t,"RUNTIME","NOTFOUND"))):!1===t.computed?"Identifier"===t.property.type?n instanceof U||n instanceof A?W(n.field(t.property.name)):n instanceof K?W(Ie(n,t.property.name,0,t)):q(new Error(I(t,"RUNTIME","INVALIDTYPE"))):q(new Error(I(t,"RUNTIME","INVALIDTYPE"))):ce(e,t.property).then((e=>z(((r,o)=>{if(n instanceof U||n instanceof A)R(e)?r(n.field(e)):o(new Error(I(t,"RUNTIME","INVALIDTYPE")));else if(n instanceof K)R(e)?r(Ie(n,e,0,t)):o(new Error(I(t,"RUNTIME","INVALIDTYPE")));else if(T(n))if(x(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=n.length+e),e>=n.length||e<0)throw new Error(I(t,"RUNTIME","OUTOFBOUNDS"));r(n[e])}else o(new Error(I(t,"RUNTIME","INVALIDTYPE")));else if(O(n))if(x(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=n.length()+e),e>=n.length()||e<0)throw new Error(I(t,"RUNTIME","OUTOFBOUNDS"));r(n.get(e))}else o(new Error(I(t,"RUNTIME","INVALIDTYPE")));else if(R(n))if(x(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=n.length+e),e>=n.length||e<0)throw new Error(I(t,"RUNTIME","OUTOFBOUNDS"));r(n[e])}else o(new Error(I(t,"RUNTIME","INVALIDTYPE")));else o(new Error(I(t,"RUNTIME","INVALIDTYPE")))}))))}catch(e){return te(e)}}))}catch(e){return te(e)}}function Se(e,t){return z(((n,r)=>{const o=t.name.toLowerCase();if(null===e.localScope||void 0===e.localScope[o])if(void 0===e.globalScope[o])r(new Error(I(t,"RUNTIME","VARIABLENOTFOUND")));else{const t=e.globalScope[o];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=ce(e,t.node),t.d.then((e=>{try{t.value=e,t.valueset=!0,n(e)}catch(e){r(e)}}),r))}else{const t=e.localScope[o];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=ce(e,t.node),t.d.then((e=>{try{t.value=e,t.valueset=!0,n(e)}catch(e){r(e)}}),r))}}))}function Te(e,t){try{if("Identifier"!==t.callee.type)return te(I(t,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];return n.value instanceof s?n.value.fn(e,t):n.value instanceof E?De(e,t,n.value.definition):te(I(t,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];return n.value instanceof s?n.value.fn(e,t):n.value instanceof E?De(e,t,n.value.definition):te(I(t,"RUNTIME","NOTAFUNCTION"))}return te(I(t,"RUNTIME","NOTFOUND"))}catch(e){return te(e)}}const Re={};function Oe(e){return null===e?"":T(e)||O(e)?"Array":L(e)?"Date":R(e)?"String":i(e)?"Boolean":x(e)?"Number":e instanceof k?"Attachment":e instanceof _?"Portal":e instanceof U?"Dictionary":e instanceof A?"Feature":e instanceof X?"Point":e instanceof J?"Polygon":e instanceof Q?"Polyline":e instanceof $?"Multipoint":e instanceof ee?"Extent":F(e)?"Function":C(e)?"FeatureSet":j(e)?"FeatureSetCollection":e===p?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function Ue(e,t,n,r){return z(((o,a)=>{ce(e,t.arguments[n]).then((c=>{try{if(l(c,r))return void ce(e,t.arguments[n+1]).then(o,a);{const c=t.arguments.length-n;return 1===c?void ce(e,t.arguments[n]).then(o,a):(2===c&&o(null),3===c?void ce(e,t.arguments[n+2]).then(o,a):void Ue(e,t,n+2,r).then(o,a))}}catch(e){a(e)}}),a)}))}function Ae(e,t,n,r){return z(((o,a)=>{!0===r?ce(e,t.arguments[n+1]).then(o,a):3==t.arguments.length-n?ce(e,t.arguments[n+2]).then(o,a):ce(e,t.arguments[n+2]).then((r=>{try{if(!1===i(r))return void a(new Error("WHEN needs boolean test conditions"));Ae(e,t,n+2,r).then(o,a)}catch(e){a(e)}}))}))}function Ce(e,t){try{const n=e.length,r=Math.floor(n/2);return 0===n?W([]):1===n?W([e[0]]):z(((o,a)=>{const c=[Ce(e.slice(0,r),t),Ce(e.slice(r,n),t)];H(c).then((e=>{try{xe(e[0],e[1],t,[]).then(o,a)}catch(e){a(e)}}),a)}))}catch(e){return te(e)}}function xe(e,t,n,r){return z(((o,a)=>{const c=r;e.length>0||t.length>0?e.length>0&&t.length>0?n(e[0],t[0]).then((i=>{try{isNaN(i)&&(i=1),i<=0?(c.push(e[0]),e=e.slice(1)):(c.push(t[0]),t=t.slice(1)),xe(e,t,n,r).then(o,a)}catch(e){a(e)}}),a):e.length>0?(c.push(e[0]),xe(e=e.slice(1),t,n,r).then(o,a)):t.length>0&&(c.push(t[0]),t=t.slice(1),xe(e,t,n,r).then(o,a)):o(r)}))}function Fe(e,t){const n=e.length,r=Math.floor(n/2);return t||(t=function(e,t){return e<t?-1:e===t?0:1}),0===n?[]:1===n?[e[0]]:function(e,t,n){const r=[];for(;e.length>0||t.length>0;)if(e.length>0&&t.length>0){let o=n(e[0],t[0]);isNaN(o)&&(o=1),o<=0?(r.push(e[0]),e=e.slice(1)):(r.push(t[0]),t=t.slice(1))}else e.length>0?(r.push(e[0]),e=e.slice(1)):t.length>0&&(r.push(t[0]),t=t.slice(1));return r}(Fe(e.slice(0,r),t),Fe(e.slice(r,n),t),t)}function Me(e,t,n){try{const r=e.body;if(n.length!==e.params.length)return te(new Error("Invalid Parameter calls to function."));for(let r=0;r<n.length;r++){const o=e.params[r];"Identifier"===o.type&&(t.localScope[o.name.toLowerCase()]={d:null,value:n[r],valueset:!0,node:null})}return ce(t,r).then((e=>z(((t,n)=>{e instanceof f?t(e.value):e!==d?e!==g?t(e instanceof h?e.value:e):n(new Error("Cannot Continue from a Function")):n(new Error("Cannot Break from a Function"))}))))}catch(e){return q(e)}}function De(e,t,n){return ae(e,t,(function(t,r,o){const a={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return Me(n,a,o)}))}function Pe(e){return function(){const t={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,interceptor:e.context.interceptor,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(t.depthCounter>64)throw new Error("Exceeded maximum function depth");return Me(e.definition,t,arguments)}}e(Re,oe),t(Re,oe),n(Re,oe),r(Re,oe),o(Re,oe),a(Re,oe),G({functions:Re,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:oe,standardFunctionAsync:ae}),Re.typeof=function(e,t){return oe(e,t,(function(e,t,n){c(n,1,1);const r=Oe(n[0]);if("Unrecognised Type"===r)throw new Error("Unrecognised Type");return r}))},Re.iif=function(e,t){return z(((n,r)=>{c(null===t.arguments?[]:t.arguments,3,3),ce(e,t.arguments[0]).then((o=>{try{if(!1===i(o))return void r(new Error("IF Function must have a boolean test condition"));H([ce(e,t.arguments[1]),ce(e,t.arguments[2])]).then((e=>{n(o?e[0]:e[1])}),r)}catch(e){r(e)}}),r)}))},Re.decode=function(e,t){return z(((n,r)=>{t.arguments.length<2?r(new Error("Missing Parameters")):2!==t.arguments.length?(t.arguments.length-1)%2!=0?ce(e,t.arguments[0]).then((o=>{try{Ue(e,t,1,o).then(n,r)}catch(e){r(e)}}),r):r(new Error("Must have a default value result.")):ce(e,t.arguments[1]).then(n,r)}))},Re.when=function(e,t){try{return t.arguments.length<3?te("Missing Parameters"):t.arguments.length%2==0?te("Must have a default value result."):ce(e,t.arguments[0]).then((n=>z(((r,o)=>{!1!==i(n)?Ae(e,t,0,n).then(r,o):o(new Error("WHEN needs boolean test conditions"))}))))}catch(e){return te(e)}},Re.sort=function(e,t){return ae(e,t,(function(e,t,n){c(n,1,2);let r=n[0];if(O(r)&&(r=r.toArray()),!1===T(r))return te(Error("Illegal Argument"));if(n.length>1)return!1===F(n[1])?te(Error("Illegal Argument")):Ce(r,Pe(n[1]));{let e=r;if(0===e.length)return W([]);const t={};for(let n=0;n<e.length;n++){const r=Oe(e[n]);""!==r&&(t[r]=!0)}if(!0===t.Array||!0===t.Dictionary||!0===t.Feature||!0===t.Point||!0===t.Polygon||!0===t.Polyline||!0===t.Multipoint||!0===t.Extent||!0===t.Function)return W(e.slice(0));let n=0,o="";for(const e in t)n++,o=e;return n>1||"String"===o?e=Fe(e,(function(e,t){if(null==e||e===p)return null==t||t===p?0:1;if(null==t||t===p)return-1;const n=S(e),r=S(t);return n<r?-1:n===r?0:1})):"Number"===o?e=Fe(e,(function(e,t){return e-t})):"Boolean"===o?e=Fe(e,(function(e,t){return e===t?0:t?-1:1})):"Date"===o&&(e=Fe(e,(function(e,t){return t-e}))),W(e)}}))};const Le={failDefferred:te,resolveDeffered:ne,fixSpatialReference:V,parseArguments:re,standardFunction:oe,standardFunctionAsync:ae,evaluateIdentifier:Se,arcadeCustomFunction:Pe};for(const e in Re)Re[e]={value:new s(Re[e]),valueset:!0,node:null};const ke=function(){};function _e(e,t){const n=new ke;null==e&&(e={}),null==t&&(t={});const r=new U({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});r.immutable=!1,n.textformatting={value:r,valueset:!0,node:null};for(const e in t)n[e]={value:new s(t[e]),native:!0,valueset:!0,node:null};for(const t in e)e[t]&&"esri.Graphic"===e[t].declaredClass?n[t]={value:A.createFromGraphic(e[t]),valueset:!0,node:null}:n[t]={value:e[t],valueset:!0,node:null};return n}function je(e){console.log(e)}(ke.prototype=Re).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},ke.prototype.pi={value:Math.PI,valueset:!0,node:null};const Ve=Le;function Be(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:oe,standardFunctionAsync:ae,failDefferred:te,evaluateIdentifier:Se,arcadeCustomFunctionHandler:Pe};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const e in t.functions)Re[e]={value:new s(t.functions[e]),valueset:!0,node:null},ke.prototype[e]=Re[e];for(let e=0;e<t.signatures.length;e++)u(t.signatures[e],"async")}function Ye(e,t){let n=t.spatialReference;null==n&&(n=new Z({wkid:102100}));const r=_e(t.vars,t.customfunctions);return ce({spatialReference:n,services:t.services,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:r,console:t.console?t.console:je,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:1},e.body[0].body).then((e=>z(((t,n)=>{e instanceof f&&(e=e.value),e instanceof h&&(e=e.value),e===p&&(e=null),e!==d?e!==g?e instanceof s||e instanceof E?n(new Error("Cannot return FUNCTION")):t(e):n(new Error("Cannot return CONTINUE")):n(new Error("Cannot return BREAK"))}))))}function Ge(e,t){return y(e)}function ze(e,t){return m(e,t,"full")}function He(e,t){return w(e,t)}function qe(e,t){return v(e,t)}function Ze(e){return N(e)}export{Ye as executeScript,Be as extend,Ge as extractFieldLiterals,Ze as findFunctionCalls,Ve as functionHelper,qe as referencesFunction,He as referencesMember,ze as validateScript};