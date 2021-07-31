import{J as e,M as n,K as t,s as r,n as i,k as a,W as s,Z as l,w as o,X as f,E as u,i as c,ah as d,ai as m,a2 as p,aj as y}from"./arcadeUtils-f1b42bd0.js";import{b as g,D as h,r as I,q as F,y as E,_ as D,e as w,a as b,c as N,A,j as x,T as S,k as $,d as T,C as L,v,E as O,w as R}from"./featureSetUtils-8758cf01.js";import{b as j,E as C}from"./SpatialFilter-a523993d.js";import{ey as M,eu as P,gJ as k,dm as G}from"../main.js";import{WhereClause as B}from"./WhereClause-69eadc9e.js";import"./number-1163cc83.js";import"./FeatureSetReader-e801f95c.js";import"./centroid-1933d1b4.js";import"./MD5-c8535b52.js";import"./geometryEngineAsync-e34517c5.js";function V(e,n,t){const r=e.getVariables();if(r.length>0){const i=[];for(let e=0;e<r.length;e++){const a={name:r[e]};i.push(n.evaluateIdentifier(t,a))}return M(i).then((n=>{const t={};for(let e=0;e<r.length;e++)t[r[e]]=n[e];return e.parameters=t,e}))}return P(e)}function H(e,n,t=null){for(const t in e)if(t.toLowerCase()===n.toLowerCase())return e[t];return t}function z(e){if(null===e)return null;const n={type:H(e,"type",""),name:H(e,"name","")};if("range"===n.type)n.range=H(e,"range",[]);else{n.codedValues=[];for(const t of H(e,"codedValues",[]))n.codedValues.push({name:H(t,"name",""),code:H(t,"code",null)})}return n}function W(e){if(null===e)return null;const n={},t=H(e,"wkt",null);null!==t&&(n.wkt=t);const r=H(e,"wkid",null);return null!==r&&(n.wkid=r),n}function _(e){if(null===e)return null;const n={hasZ:H(e,"hasz",!1),hasM:H(e,"hasm",!1)},t=H(e,"spatialreference",null);t&&(n.spatialReference=W(t));const r=H(e,"x",null);if(null!==r)return n.x=r,n.y=H(e,"y",null),n;const i=H(e,"rings",null);if(null!==i)return n.rings=i,n;const a=H(e,"paths",null);if(null!==a)return n.paths=a,n;const s=H(e,"points",null);if(null!==s)return n.points=s,n;for(const t of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const r=H(e,t,null);null!==r&&(n[t]=r)}return n}function J(J){"async"===J.mode&&(J.functions.getuser=function(s,l){return J.standardFunctionAsync(s,l,((l,o,f)=>{e(f,1,2);let u=n(f[1],""),c=!0===u;if(u=!0===u||!1===u?"":t(u),f[0]instanceof r){let e=null;return s.services&&s.services.portal&&(e=s.services.portal),e=g(f[0],e),h(e,u,c).then((e=>{if(e){const n=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return i.convertObjectToArcadeDictionary(n)}return null}))}let d=null;if(a(f[0])&&(d=f[0]),d)return c=!1,u?null:d.load().then((()=>d.getOwningSystemUrl())).then((e=>{if(!e)return u?null:d.getIdentityUser().then((e=>e?i.convertObjectToArcadeDictionary({username:e}):null));let n=null;return s.services&&s.services.portal&&(n=s.services.portal),n=g(new r(e),n),h(n,u,c).then((e=>{if(e){const n=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return i.convertObjectToArcadeDictionary(n)}return null}))}));throw new Error("Invalid Parameter")}))},J.signatures.push({name:"getuser",min:"1",max:"2"}),J.functions.featuresetbyid=function(r,i){return J.standardFunctionAsync(r,i,((r,i,a)=>{if(e(a,2,4),a[0]instanceof I){const e=t(a[1]);let r=n(a[2],null);const i=s(n(a[3],!0));if(null===r&&(r=["*"]),!1===l(r))throw new Error("Invalid Parameter");return a[0].featureSetById(e,i,r)}throw new Error("Invalid Parameter")}))},J.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),J.functions.featuresetbyportalitem=function(i,a){return J.standardFunctionAsync(i,a,((a,f,u)=>{if(e(u,2,5),null===u[0])throw new Error("Portal is required");if(u[0]instanceof r){const e=t(u[1]),r=t(u[2]);let a=n(u[3],null);const o=s(n(u[4],!0));if(null===a&&(a=["*"]),!1===l(a))throw new Error("Invalid Parameter");let f=null;return i.services&&i.services.portal&&(f=i.services.portal),f=g(u[0],f),F(e,r,i.spatialReference,a,o,f,i.lrucache,i.interceptor)}if(!1===o(u[0]))throw new Error("Portal is required");const c=t(u[0]),d=t(u[1]);let m=n(u[2],null);const p=s(n(u[3],!0));if(null===m&&(m=["*"]),!1===l(m))throw new Error("Invalid Parameter");if(i.services&&i.services.portal)return F(c,d,i.spatialReference,m,p,i.services.portal,i.lrucache,i.interceptor);throw new Error("Portal is required")}))},J.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),J.functions.featuresetbyname=function(r,i){return J.standardFunctionAsync(r,i,((r,i,a)=>{if(e(a,2,4),a[0]instanceof I){const e=t(a[1]);let r=n(a[2],null);const i=s(n(a[3],!0));if(null===r&&(r=["*"]),!1===l(r))throw new Error("Invalid Parameter");return a[0].featureSetByName(e,i,r)}throw new Error("Invalid Parameter")}))},J.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),J.functions.featureset=function(n,t){return J.standardFunction(n,t,((t,r,a)=>{e(a,1,1);let s=a[0];const f={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(o(s))s=JSON.parse(s),void 0!==s.layerDefinition?(f.layerDefinition=s.layerDefinition,f.featureSet=s.featureSet,s.layerDefinition.spatialReference&&(f.layerDefinition.spatialReference=s.layerDefinition.spatialReference)):(f.featureSet.features=s.features,f.featureSet.geometryType=s.geometryType,f.layerDefinition.geometryType=f.featureSet.geometryType,f.layerDefinition.objectIdField=s.objectIdFieldName,f.layerDefinition.typeIdField=s.typeIdFieldName,f.layerDefinition.globalIdField=s.globalIdFieldName,f.layerDefinition.fields=s.fields,s.spatialReference&&(f.layerDefinition.spatialReference=s.spatialReference));else{if(!(a[0]instanceof i))throw new Error("Invalid Parameter");{s=JSON.parse(a[0].castToText());const e=H(s,"layerdefinition");if(null!==e){f.layerDefinition.geometryType=H(e,"geometrytype",""),f.featureSet.geometryType=f.layerDefinition.geometryType,f.layerDefinition.globalIdField=H(e,"globalidfield",""),f.layerDefinition.objectIdField=H(e,"objectidfield",""),f.layerDefinition.typeIdField=H(e,"typeidfield","");const n=H(e,"spatialreference",null);n&&(f.layerDefinition.spatialReference=W(n));for(const n of H(e,"fields",[])){const e={name:H(n,"name",""),alias:H(n,"alias",""),type:H(n,"type",""),nullable:H(n,"nullable",!0),editable:H(n,"editable",!0),length:H(n,"length",null),domain:z(H(n,"domain"))};f.layerDefinition.fields.push(e)}const t=H(s,"featureset",null);if(t){const e={};for(const n of f.layerDefinition.fields)e[n.name.toLowerCase()]=n.name;for(const n of H(t,"features",[])){const t={},r=H(n,"attributes",{});for(const n in r)t[e[n.toLowerCase()]]=r[n];f.featureSet.features.push({attributes:t,geometry:_(H(n,"geometry",null))})}}}else{f.layerDefinition.geometryType=H(s,"geometrytype",""),f.featureSet.geometryType=f.layerDefinition.geometryType,f.layerDefinition.objectIdField=H(s,"objectidfieldname",""),f.layerDefinition.typeIdField=H(s,"typeidfieldname","");const e=H(s,"spatialreference",null);e&&(f.layerDefinition.spatialReference=W(e));for(const e of H(s,"fields",[])){const n={name:H(e,"name",""),alias:H(e,"alias",""),type:H(e,"type",""),nullable:H(e,"nullable",!0),editable:H(e,"editable",!0),length:H(e,"length",null),domain:z(H(e,"domain"))};f.layerDefinition.fields.push(n)}const n={};for(const e of f.layerDefinition.fields)n[e.name.toLowerCase()]=e.name;for(const e of H(s,"features",[])){const t={},r=H(e,"attributes",{});for(const e in r)t[n[e.toLowerCase()]]=r[e];f.featureSet.features.push({attributes:t,geometry:_(H(e,"geometry",null))})}}}}if(!1===function(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,n){for(const t of n)if(t===e)return!0;return!1}(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&!1!==l(e.layerDefinition.fields)&&!1!==l(e.featureSet.features)}(f))throw new Error("Invalid Parameter");return E.create(f,n.spatialReference)}))},J.signatures.push({name:"featureset",min:"1",max:"1"}),J.functions.filter=function(n,t){return J.standardFunctionAsync(n,t,((t,r,i)=>(e(i,2,2),a(i[0])?i[0].load().then((e=>{const t=B.create(i[1],e.getFieldsIndex()),r=t.getVariables();if(r.length>0){const e=[];for(let t=0;t<r.length;t++){const i={name:r[t]};e.push(J.evaluateIdentifier(n,i))}return M(e).then((e=>{const n={};for(let t=0;t<r.length;t++)n[r[t]]=e[t];return t.parameters=n,new D({parentfeatureset:i[0],whereclause:t})}))}return P(new D({parentfeatureset:i[0],whereclause:t}))})):J.failDefferred("Filter cannot accept this parameter type"))))},J.signatures.push({name:"filter",min:"2",max:"2"}),J.functions.orderby=function(n,t){return J.standardFunctionAsync(n,t,((n,t,r)=>{if(e(r,2,2),a(r[0])){const e=new w(r[1]);return P(new b({parentfeatureset:r[0],orderbyclause:e}))}return J.failDefferred("Order cannot accept this parameter type")}))},J.signatures.push({name:"orderby",min:"2",max:"2"}),J.functions.top=function(n,t){return J.standardFunctionAsync(n,t,((n,t,r)=>(e(r,2,2),a(r[0])?P(new N({parentfeatureset:r[0],topnum:r[1]})):l(r[0])?f(r[1])>=r[0].length?r[0].slice(0):r[0].slice(0,f(r[1])):u(r[0])?f(r[1])>=r[0].length()?r[0].slice(0):r[0].slice(0,f(r[1])):J.failDefferred("Top cannot accept this parameter type"))))},J.signatures.push({name:"top",min:"2",max:"2"}),J.functions.first=function(n,t){return J.standardFunctionAsync(n,t,((n,t,r)=>(e(r,1,1),a(r[0])?r[0].first(n.abortSignal).then((e=>{if(null!==e){const n=c.createFromGraphicLikeObject(e.geometry,e.attributes,r[0]);n._underlyingGraphic=e,e=n}return e})):l(r[0])?0===r[0].length?P(null):P(r[0][0]):u(r[0])?0===r[0].length()?P(null):P(r[0].get(0)):null)))},J.signatures.push({name:"first",min:"1",max:"1"}),J.functions.attachments=function(n,t){return J.standardFunctionAsync(n,t,((t,r,s)=>{e(s,1,2);const l={minsize:-1,maxsize:-1,types:null};if(s.length>1)if(s[1]instanceof i){if(s[1].hasField("minsize")&&(l.minsize=f(s[1].field("minsize"))),s[1].hasField("maxsize")&&(l.maxsize=f(s[1].field("maxsize"))),s[1].hasField("types")){const e=d(s[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==s[1])throw new Error("Invalid Parameter");if(s[0]instanceof c){let e=s[0]._layer;return e instanceof k&&(e=A(e,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===e||!1===a(e)?[]:e.load().then((()=>e.queryAttachments(s[0].field(e.objectIdField),l.minsize,l.maxsize,l.types)))}if(null===s[0])return[];throw new Error("Invalid Parameter")}))},J.signatures.push({name:"attachments",min:"1",max:"2"}),J.functions.featuresetbyrelationshipname=function(r,i){return J.standardFunctionAsync(r,i,((i,o,f)=>{e(f,2,4);const u=f[0],d=t(f[1]);let m=n(f[2],null);const p=s(n(f[3],!0));if(null===m&&(m=["*"]),!1===l(m))throw new Error("Invalid Parameter");if(null===f[0])return null;if(!(f[0]instanceof c))throw new Error("Invalid Parameter");let y=u._layer;return y instanceof k&&(y=A(y,r.spatialReference,["*"],!0,r.lrucache,r.interceptor)),null===y||!1===a(y)?null:y.load().then((e=>{const n=e.relationshipMetaData().filter((e=>e.name===d));if(0===n.length)return null;if(void 0!==n[0].relationshipTableId&&null!==n[0].relationshipTableId&&n[0].relationshipTableId>-1)return x(e,n[0],u.field(e.objectIdField),e.spatialReference,m,p,r.lrucache,r.interceptor);let t=e.serviceUrl();return t?(t="/"===t.charAt(t.length-1)?t+n[0].relatedTableId.toString():t+"/"+n[0].relatedTableId.toString(),S(t,e.spatialReference,m,p,r.lrucache,r.interceptor).then((t=>t.load().then((()=>t.relationshipMetaData())).then((r=>{if(r=r.filter((e=>e.id===n[0].id)),!1===u.hasField(n[0].keyField)||null===u.field(n[0].keyField))return e.getFeatureByObjectId(u.field(e.objectIdField),[n[0].keyField]).then((e=>{if(e){const i=B.create(r[0].keyField+"= @id",t.getFieldsIndex());return i.parameters={id:e.attributes[n[0].keyField]},t.filter(i)}return new j({parentfeatureset:t})}));const i=B.create(r[0].keyField+"= @id",t.getFieldsIndex());return i.parameters={id:u.field(n[0].keyField)},t.filter(i)}))))):null}))}))},J.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),J.functions.featuresetbyassociation=function(r,i){return J.standardFunctionAsync(r,i,((i,s,l)=>{e(l,2,3);const f=l[0],u=t(n(l[1],"")).toLowerCase(),d=o(l[2])?t(l[2]):null;if(null===l[0])return null;if(!(l[0]instanceof c))throw new Error("Invalid Parameter");let y=f._layer;return y instanceof k&&(y=A(y,r.spatialReference,["*"],!0,r.lrucache,r.interceptor)),null===y||!1===a(y)?null:y.load().then((()=>{const e=y.serviceUrl();return $(e,r.spatialReference)})).then((e=>{let n=null,t=null,r=!1;if(null!==d&&""!==d&&void 0!==d){for(const n of e.terminals)n.terminalName===d&&(t=n.terminalId);null===t&&(r=!0)}const i=e.associations.getFieldsIndex(),a=i.get("TOGLOBALID").name,s=i.get("FROMGLOBALID").name,l=i.get("TOTERMINALID").name,o=i.get("FROMTERMINALID").name,c=i.get("FROMNETWORKSOURCEID").name,g=i.get("TONETWORKSOURCEID").name,h=i.get("ASSOCIATIONTYPE").name,I=i.get("ISCONTENTVISIBLE").name,F=i.get("OBJECTID").name;for(const e of y.fields)if("global-id"===e.type){n=f.field(e.name);break}let E=null,D=new T(new G({name:"percentalong",alias:"percentalong",type:"double"}),B.create("0",e.associations.getFieldsIndex())),w=new T(new G({name:"side",alias:"side",type:"string"}),B.create("''",e.associations.getFieldsIndex()));const b="globalid",N="globalId",A={};for(const n in e.lkp)A[n]=e.lkp[n].sourceId;const x=new L(new G({name:"classname",alias:"classname",type:"string"}),null,A);let S="";switch(u){case"midspan":{S=`((${a}='${n}') OR ( ${s}='${n}')) AND (${h} IN (5))`,x.codefield=B.create(`CASE WHEN (${a}='${n}') THEN ${c} ELSE ${g} END`,e.associations.getFieldsIndex());const t=p(O.findField(e.associations.fields,s));t.name=b,t.alias=b,E=new T(t,B.create(`CASE WHEN (${s}='${n}') THEN ${a} ELSE ${s} END`,e.associations.getFieldsIndex())),D=e.unVersion>=4?new R(O.findField(e.associations.fields,i.get("PERCENTALONG").name)):new T(new G({name:"percentalong",alias:"percentalong",type:"double"}),B.create("0",e.associations.getFieldsIndex()));break}case"junctionedge":{S=`((${a}='${n}') OR ( ${s}='${n}')) AND (${h} IN (4,6))`,x.codefield=B.create(`CASE WHEN (${a}='${n}') THEN ${c} ELSE ${g} END`,e.associations.getFieldsIndex());const t=p(O.findField(e.associations.fields,s));t.name=b,t.alias=b,E=new T(t,B.create(`CASE WHEN (${s}='${n}') THEN ${a} ELSE ${s} END`,e.associations.getFieldsIndex())),w=new T(new G({name:"side",alias:"side",type:"string"}),B.create(`CASE WHEN (${h}=4) THEN 'from' ELSE 'to' END`,e.associations.getFieldsIndex()));break}case"connected":{let r=`${a}='@T'`,i=`${s}='@T'`;null!==t&&(r+=` AND ${l}=@A`,i+=` AND ${o}=@A`),S="(("+r+") OR ("+i+"))",S=m(S,"@T",n),r=m(r,"@T",n),null!==t&&(r=m(r,"@A",t.toString()),S=m(S,"@A",t.toString())),x.codefield=B.create("CASE WHEN "+r+` THEN ${c} ELSE ${g} END`,e.associations.getFieldsIndex());const f=p(O.findField(e.associations.fields,s));f.name=b,f.alias=b,E=new T(f,B.create("CASE WHEN "+r+` THEN ${s} ELSE ${a} END`,e.associations.getFieldsIndex()));break}case"container":S=`${a}='${n}' AND ${h} = 2`,null!==t&&(S+=` AND ${l} = `+t.toString()),x.codefield=c,S="( "+S+" )",E=new v(O.findField(e.associations.fields,s),b,b);case"content":S=`(${s}='${n}' AND ${h} = 2)`,null!==t&&(S+=` AND ${o} = `+t.toString()),x.codefield=g,S="( "+S+" )",E=new v(O.findField(e.associations.fields,a),b,b);break;case"structure":S=`(${a}='${n}' AND ${h} = 3)`,null!==t&&(S+=` AND ${l} = `+t.toString()),x.codefield=c,S="( "+S+" )",E=new v(O.findField(e.associations.fields,s),b,N);break;case"attached":S=`(${s}='${n}' AND ${h} = 3)`,null!==t&&(S+=` AND ${o} = `+t.toString()),x.codefield=g,S="( "+S+" )",E=new v(O.findField(e.associations.fields,a),b,N);break;default:throw new Error("Invalid Parameter")}return r&&(S="1 <> 1"),new O({parentfeatureset:e.associations,adaptedFields:[new R(O.findField(e.associations.fields,F)),new R(O.findField(e.associations.fields,I)),E,w,x,D],extraFilter:S?B.create(S,e.associations.getFieldsIndex()):null})}))}))},J.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),J.functions.groupby=function(n,r){return J.standardFunctionAsync(n,r,((r,s,f)=>(e(f,3,3),a(f[0])?f[0].load().then((e=>{const r=[],a=[];let s=!1,c=[];if(o(f[1]))c.push(f[1]);else if(f[1]instanceof i)c.push(f[1]);else if(l(f[1]))c=f[1];else{if(!u(f[1]))return J.failDefferred("Illegal Value: GroupBy");c=f[1].toArray()}for(const n of c)if(o(n)){const i=B.create(t(n),e.getFieldsIndex()),a=!0===C(i)?t(n):"%%%%FIELDNAME";r.push({name:a,expression:i}),"%%%%FIELDNAME"===a&&(s=!0)}else{if(!(n instanceof i))return J.failDefferred("Illegal Value: GroupBy");{const t=n.hasField("name")?n.field("name"):"%%%%FIELDNAME",i=n.hasField("expression")?n.field("expression"):"";if("%%%%FIELDNAME"===t&&(s=!0),!t)return J.failDefferred("Illegal Value: GroupBy");r.push({name:t,expression:B.create(i||t,e.getFieldsIndex())})}}if(c=[],o(f[2]))c.push(f[2]);else if(l(f[2]))c=f[2];else if(u(f[2]))c=f[2].toArray();else{if(!(f[2]instanceof i))return J.failDefferred("Illegal Value: GroupBy");c.push(f[2])}for(const n of c){if(!(n instanceof i))return J.failDefferred("Illegal Value: GroupBy");{const t=n.hasField("name")?n.field("name"):"",r=n.hasField("statistic")?n.field("statistic"):"",i=n.hasField("expression")?n.field("expression"):"";if(!t||!r||!i)return J.failDefferred("Illegal Value: GroupBy");a.push({name:t,statistic:r.toLowerCase(),expression:B.create(i,e.getFieldsIndex())})}}if(s){const n={};for(const t of e.fields)n[t.name.toLowerCase()]=1;for(const e of r)"%%%%FIELDNAME"!==e.name&&(n[e.name.toLowerCase()]=1);for(const e of a)"%%%%FIELDNAME"!==e.name&&(n[e.name.toLowerCase()]=1);let t=0;for(const e of r)if("%%%%FIELDNAME"===e.name){for(;1===n["field_"+t.toString()];)t++;n["field_"+t.toString()]=1,e.name="FIELD_"+t.toString()}}const d=[];for(const e of r)d.push(V(e.expression,J,n));for(const e of a)d.push(V(e.expression,J,n));return d.length>0?M(d).then((()=>P(f[0].groupby(r,a)))):P(f[0].groupby(r,a))})):J.failDefferred("Illegal Value: GroupBy"))))},J.signatures.push({name:"groupby",min:"3",max:"3"}),J.functions.distinct=function(n,r){return J.standardFunctionAsync(n,r,((r,s,f)=>a(f[0])?(e(f,2,2),f[0].load().then((e=>{const r=[];let a=[];if(o(f[1]))a.push(f[1]);else if(f[1]instanceof i)a.push(f[1]);else if(l(f[1]))a=f[1];else{if(!u(f[1]))return J.failDefferred("Illegal Value: GroupBy");a=f[1].toArray()}let s=!1;for(const n of a)if(o(n)){const i=B.create(t(n),e.getFieldsIndex()),a=!0===C(i)?t(n):"%%%%FIELDNAME";r.push({name:a,expression:i}),"%%%%FIELDNAME"===a&&(s=!0)}else{if(!(n instanceof i))return J.failDefferred("Illegal Value: GroupBy");{const t=n.hasField("name")?n.field("name"):"%%%%FIELDNAME",i=n.hasField("expression")?n.field("expression"):"";if("%%%%FIELDNAME"===t&&(s=!0),!t)return J.failDefferred("Illegal Value: GroupBy");r.push({name:t,expression:B.create(i||t,e.getFieldsIndex())})}}if(s){const n={};for(const t of e.fields)n[t.name.toLowerCase()]=1;for(const e of r)"%%%%FIELDNAME"!==e.name&&(n[e.name.toLowerCase()]=1);let t=0;for(const e of r)if("%%%%FIELDNAME"===e.name){for(;1===n["field_"+t.toString()];)t++;n["field_"+t.toString()]=1,e.name="FIELD_"+t.toString()}}const c=[];for(const e of r)c.push(V(e.expression,J,n));return c.length>0?M(c).then((()=>P(f[0].groupby(r,[])))):P(f[0].groupby(r,[]))}))):function(e,n,t,r){if(1===r.length){if(l(r[0]))return y(e,r[0],-1);if(u(r[0]))return y(e,r[0].toArray(),-1)}return y(e,r,-1)}("distinct",0,0,f)))})}export{J as registerFunctions};
