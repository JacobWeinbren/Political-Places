import{s as e,a as n,_ as t,m as r}from"./arcadeUtils-e61d3305.js";import{D as i,q as a,r as s,P as l,G as o,y as f,_ as u,e as c,a as d,b as m,g as p,w as y,T as h,j as g,c as I,C as F,v as E,E as D,d as w}from"./featureSetUtils-de329b76.js";import{hg as b,hi as A,hc as N,hQ as x,hb as S,hf as $,hJ as T,h2 as L,hj as v,h3 as O,hn as R,ho as C,hp as j,hm as M,h9 as P,h8 as k,ha as G,kK as B,iv as V,es as H,hF as z,ku as W}from"../main.js";import{d as _,b as J}from"./SpatialFilter-d5563478.js";import{WhereClause as U}from"./WhereClause-5c2059b8.js";import"./MD5-b72999e2.js";import"./geometryEngineAsync-fb4aa7e5.js";function q(e,n,t){const r=e.getVariables();if(r.length>0){const i=[];for(let e=0;e<r.length;e++){const a={name:r[e]};i.push(n.evaluateIdentifier(t,a))}return k(i).then((n=>{const t={};for(let e=0;e<r.length;e++)t[r[e]]=n[e];return e.parameters=t,e}))}return P(e)}function K(e,n,t=null){for(const t in e)if(t.toLowerCase()===n.toLowerCase())return e[t];return t}function Q(e){if(null===e)return null;const n={type:K(e,"type",""),name:K(e,"name","")};if("range"===n.type)n.range=K(e,"range",[]);else{n.codedValues=[];for(const t of K(e,"codedValues",[]))n.codedValues.push({name:K(t,"name",""),code:K(t,"code",null)})}return n}function Y(e){if(null===e)return null;const n={},t=K(e,"wkt",null);null!==t&&(n.wkt=t);const r=K(e,"wkid",null);return null!==r&&(n.wkid=r),n}function Z(e){if(null===e)return null;const n={hasZ:K(e,"hasz",!1),hasM:K(e,"hasm",!1)},t=K(e,"spatialreference",null);t&&(n.spatialReference=Y(t));const r=K(e,"x",null);if(null!==r)return n.x=r,n.y=K(e,"y",null),n;const i=K(e,"rings",null);if(null!==i)return n.rings=i,n;const a=K(e,"paths",null);if(null!==a)return n.paths=a,n;const s=K(e,"points",null);if(null!==s)return n.points=s,n;for(const t of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const r=K(e,t,null);null!==r&&(n[t]=r)}return n}function X(X){"async"===X.mode&&(X.functions.getuser=function(t,r){return X.standardFunctionAsync(t,r,((r,s,l)=>{b(l,1,2);let o=A(l[1],""),f=!0===o;if(o=!0===o||!1===o?"":N(o),l[0]instanceof e){let e=null;return t.services&&t.services.portal&&(e=t.services.portal),e=i(l[0],e),a(e,o,f).then((e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return n.convertObjectToArcadeDictionary(t)}return null}))}let u=null;if(x(l[0])&&(u=l[0]),u)return f=!1,o?null:u.load().then((()=>u.getOwningSystemUrl())).then((r=>{if(!r)return o?null:u.getIdentityUser().then((e=>e?n.convertObjectToArcadeDictionary({username:e}):null));let s=null;return t.services&&t.services.portal&&(s=t.services.portal),s=i(new e(r),s),a(s,o,f).then((e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return n.convertObjectToArcadeDictionary(t)}return null}))}));throw new Error("Invalid Parameter")}))},X.signatures.push({name:"getuser",min:"1",max:"2"}),X.functions.featuresetbyid=function(e,n){return X.standardFunctionAsync(e,n,((e,n,t)=>{if(b(t,2,4),t[0]instanceof s){const e=N(t[1]);let n=A(t[2],null);const r=S(A(t[3],!0));if(null===n&&(n=["*"]),!1===$(n))throw new Error("Invalid Parameter");return t[0].featureSetById(e,r,n)}throw new Error("Invalid Parameter")}))},X.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),X.functions.getfeatureset=function(e,n){return X.standardFunctionAsync(e,n,((n,t,r)=>{if(b(r,1,2),T(r[0])){let n=A(r[1],"datasource");return null===n&&(n="datasource"),n=N(n).toLowerCase(),l(r[0].fullSchema(),n,e.lrucache,e.interceptor,e.spatialReference)}throw new Error("Invalid Parameter")}))},X.signatures.push({name:"getfeatureset",min:"1",max:"2"}),X.functions.featuresetbyportalitem=function(n,t){return X.standardFunctionAsync(n,t,((t,r,a)=>{if(b(a,2,5),null===a[0])throw new Error("Portal is required");if(a[0]instanceof e){const e=N(a[1]),t=N(a[2]);let r=A(a[3],null);const s=S(A(a[4],!0));if(null===r&&(r=["*"]),!1===$(r))throw new Error("Invalid Parameter");let l=null;return n.services&&n.services.portal&&(l=n.services.portal),l=i(a[0],l),o(e,t,n.spatialReference,r,s,l,n.lrucache,n.interceptor)}if(!1===L(a[0]))throw new Error("Portal is required");const s=N(a[0]),l=N(a[1]);let f=A(a[2],null);const u=S(A(a[3],!0));if(null===f&&(f=["*"]),!1===$(f))throw new Error("Invalid Parameter");if(n.services&&n.services.portal)return o(s,l,n.spatialReference,f,u,n.services.portal,n.lrucache,n.interceptor);throw new Error("Portal is required")}))},X.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),X.functions.featuresetbyname=function(e,n){return X.standardFunctionAsync(e,n,((e,n,t)=>{if(b(t,2,4),t[0]instanceof s){const e=N(t[1]);let n=A(t[2],null);const r=S(A(t[3],!0));if(null===n&&(n=["*"]),!1===$(n))throw new Error("Invalid Parameter");return t[0].featureSetByName(e,r,n)}throw new Error("Invalid Parameter")}))},X.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),X.functions.featureset=function(e,t){return X.standardFunction(e,t,((t,r,i)=>{b(i,1,1);let a=i[0];const s={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(L(a))a=JSON.parse(a),void 0!==a.layerDefinition?(s.layerDefinition=a.layerDefinition,s.featureSet=a.featureSet,a.layerDefinition.spatialReference&&(s.layerDefinition.spatialReference=a.layerDefinition.spatialReference)):(s.featureSet.features=a.features,s.featureSet.geometryType=a.geometryType,s.layerDefinition.geometryType=s.featureSet.geometryType,s.layerDefinition.objectIdField=a.objectIdFieldName,s.layerDefinition.typeIdField=a.typeIdFieldName,s.layerDefinition.globalIdField=a.globalIdFieldName,s.layerDefinition.fields=a.fields,a.spatialReference&&(s.layerDefinition.spatialReference=a.spatialReference));else{if(!(i[0]instanceof n))throw new Error("Invalid Parameter");{a=JSON.parse(i[0].castToText());const e=K(a,"layerdefinition");if(null!==e){s.layerDefinition.geometryType=K(e,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.globalIdField=K(e,"globalidfield",""),s.layerDefinition.objectIdField=K(e,"objectidfield",""),s.layerDefinition.typeIdField=K(e,"typeidfield","");const n=K(e,"spatialreference",null);n&&(s.layerDefinition.spatialReference=Y(n));for(const n of K(e,"fields",[])){const e={name:K(n,"name",""),alias:K(n,"alias",""),type:K(n,"type",""),nullable:K(n,"nullable",!0),editable:K(n,"editable",!0),length:K(n,"length",null),domain:Q(K(n,"domain"))};s.layerDefinition.fields.push(e)}const t=K(a,"featureset",null);if(t){const e={};for(const n of s.layerDefinition.fields)e[n.name.toLowerCase()]=n.name;for(const n of K(t,"features",[])){const t={},r=K(n,"attributes",{});for(const n in r)t[e[n.toLowerCase()]]=r[n];s.featureSet.features.push({attributes:t,geometry:Z(K(n,"geometry",null))})}}}else{s.layerDefinition.geometryType=K(a,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.objectIdField=K(a,"objectidfieldname",""),s.layerDefinition.typeIdField=K(a,"typeidfieldname","");const e=K(a,"spatialreference",null);e&&(s.layerDefinition.spatialReference=Y(e));for(const e of K(a,"fields",[])){const n={name:K(e,"name",""),alias:K(e,"alias",""),type:K(e,"type",""),nullable:K(e,"nullable",!0),editable:K(e,"editable",!0),length:K(e,"length",null),domain:Q(K(e,"domain"))};s.layerDefinition.fields.push(n)}const n={};for(const e of s.layerDefinition.fields)n[e.name.toLowerCase()]=e.name;for(const e of K(a,"features",[])){const t={},r=K(e,"attributes",{});for(const e in r)t[n[e.toLowerCase()]]=r[e];s.featureSet.features.push({attributes:t,geometry:Z(K(e,"geometry",null))})}}}}if(!1===function(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,n){for(const t of n)if(t===e)return!0;return!1}(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&!1!==$(e.layerDefinition.fields)&&!1!==$(e.featureSet.features)}(s))throw new Error("Invalid Parameter");return f.create(s,e.spatialReference)}))},X.signatures.push({name:"featureset",min:"1",max:"1"}),X.functions.filter=function(e,n){return X.standardFunctionAsync(e,n,((n,t,r)=>{if(b(r,2,2),$(r[0])||v(r[0])){const n=[];let t=r[0];t instanceof O&&(t=t.toArray());let i=null;if(r[1]instanceof R)i=X.arcadeCustomFunctionHandler(r[1]);else if(r[1]instanceof C)i=(...n)=>r[1].fn(e,{preparsed:!0,arguments:n});else{if(!(r[1]instanceof j))throw new Error("Invalid Parameter");i=(...e)=>{if(e.length!==r[1].paramCount)throw new Error("Invalid parameters");return r[1].fn(...e)}}return t.reduce(((e,r,a)=>e.then((e=>{a>0&&!0===e&&n.push(t[a-1]);const s=i(r);return M(s)?s:P(s)}))),Promise.resolve(!1)).then((e=>(!0===e&&t.length>0&&n.push(t[t.length-1]),n)))}return x(r[0])?r[0].load().then((n=>{const t=U.create(r[1],n.getFieldsIndex()),i=t.getVariables();if(i.length>0){const n=[];for(let t=0;t<i.length;t++){const r={name:i[t]};n.push(X.evaluateIdentifier(e,r))}return k(n).then((e=>{const n={};for(let t=0;t<i.length;t++)n[i[t]]=e[t];return t.parameters=n,new u({parentfeatureset:r[0],whereclause:t})}))}return P(new u({parentfeatureset:r[0],whereclause:t}))})):X.failDefferred("Filter cannot accept this parameter type")}))},X.signatures.push({name:"filter",min:"2",max:"2"}),X.functions.orderby=function(e,n){return X.standardFunctionAsync(e,n,((e,n,t)=>{if(b(t,2,2),x(t[0])){const e=new c(t[1]);return P(new d({parentfeatureset:t[0],orderbyclause:e}))}return X.failDefferred("Order cannot accept this parameter type")}))},X.signatures.push({name:"orderby",min:"2",max:"2"}),X.functions.top=function(e,n){return X.standardFunctionAsync(e,n,((e,n,t)=>(b(t,2,2),x(t[0])?P(new m({parentfeatureset:t[0],topnum:t[1]})):$(t[0])?G(t[1])>=t[0].length?t[0].slice(0):t[0].slice(0,G(t[1])):v(t[0])?G(t[1])>=t[0].length()?t[0].slice(0):t[0].slice(0,G(t[1])):X.failDefferred("Top cannot accept this parameter type"))))},X.signatures.push({name:"top",min:"2",max:"2"}),X.functions.first=function(e,n){return X.standardFunctionAsync(e,n,((e,n,r)=>(b(r,1,1),x(r[0])?r[0].first(e.abortSignal).then((e=>{if(null!==e){const n=t.createFromGraphicLikeObject(e.geometry,e.attributes,r[0]);n._underlyingGraphic=e,e=n}return e})):$(r[0])?0===r[0].length?P(null):P(r[0][0]):v(r[0])?0===r[0].length()?P(null):P(r[0].get(0)):null)))},X.signatures.push({name:"first",min:"1",max:"1"}),X.functions.attachments=function(e,t){return X.standardFunctionAsync(e,t,((t,r,i)=>{b(i,1,2);const a={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(i.length>1)if(i[1]instanceof n){if(i[1].hasField("minsize")&&(a.minsize=G(i[1].field("minsize"))),i[1].hasField("metadata")&&(a.returnMetadata=S(i[1].field("metadata"))),i[1].hasField("maxsize")&&(a.maxsize=G(i[1].field("maxsize"))),i[1].hasField("types")){const e=B(i[1].field("types"),!1);e.length>0&&(a.types=e)}}else if(null!==i[1])throw new Error("Invalid Parameter");if(T(i[0])){let n=i[0]._layer;return n instanceof V&&(n=p(n,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===n||!1===x(n)?[]:n.load().then((()=>n.queryAttachments(i[0].field(n.objectIdField),a.minsize,a.maxsize,a.types,a.returnMetadata)))}if(null===i[0])return[];throw new Error("Invalid Parameter")}))},X.signatures.push({name:"attachments",min:"1",max:"2"}),X.functions.featuresetbyrelationshipname=function(e,n){return X.standardFunctionAsync(e,n,((n,t,r)=>{b(r,2,4);const i=r[0],a=N(r[1]);let s=A(r[2],null);const l=S(A(r[3],!0));if(null===s&&(s=["*"]),!1===$(s))throw new Error("Invalid Parameter");if(null===r[0])return null;if(!T(r[0]))throw new Error("Invalid Parameter");let o=i._layer;return o instanceof V&&(o=p(o,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===o||!1===x(o)?null:o.load().then((n=>{const t=n.relationshipMetaData().filter((e=>e.name===a));if(0===t.length)return null;if(void 0!==t[0].relationshipTableId&&null!==t[0].relationshipTableId&&t[0].relationshipTableId>-1)return y(n,t[0],i.field(n.objectIdField),n.spatialReference,s,l,e.lrucache,e.interceptor);let r=n.serviceUrl();return r?(r="/"===r.charAt(r.length-1)?r+t[0].relatedTableId.toString():r+"/"+t[0].relatedTableId.toString(),h(r,n.spatialReference,s,l,e.lrucache,e.interceptor).then((e=>e.load().then((()=>e.relationshipMetaData())).then((r=>{if(r=r.filter((e=>e.id===t[0].id)),!1===i.hasField(t[0].keyField)||null===i.field(t[0].keyField))return n.getFeatureByObjectId(i.field(n.objectIdField),[t[0].keyField]).then((n=>{if(n){const i=U.create(r[0].keyField+"= @id",e.getFieldsIndex());return i.parameters={id:n.attributes[t[0].keyField]},e.filter(i)}return new _({parentfeatureset:e})}));const a=U.create(r[0].keyField+"= @id",e.getFieldsIndex());return a.parameters={id:i.field(t[0].keyField)},e.filter(a)}))))):null}))}))},X.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),X.functions.featuresetbyassociation=function(e,n){return X.standardFunctionAsync(e,n,((n,t,r)=>{b(r,2,3);const i=r[0],a=N(A(r[1],"")).toLowerCase(),s=L(r[2])?N(r[2]):null;if(null===r[0])return null;if(!T(r[0]))throw new Error("Invalid Parameter");let l=i._layer;return l instanceof V&&(l=p(l,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===l||!1===x(l)?null:l.load().then((()=>{const n=l.serviceUrl();return g(n,e.spatialReference)})).then((e=>{let n=null,t=null,r=!1;if(null!==s&&""!==s&&void 0!==s){for(const n of e.terminals)n.terminalName===s&&(t=n.terminalId);null===t&&(r=!0)}const o=e.associations.getFieldsIndex(),f=o.get("TOGLOBALID").name,u=o.get("FROMGLOBALID").name,c=o.get("TOTERMINALID").name,d=o.get("FROMTERMINALID").name,m=o.get("FROMNETWORKSOURCEID").name,p=o.get("TONETWORKSOURCEID").name,y=o.get("ASSOCIATIONTYPE").name,h=o.get("ISCONTENTVISIBLE").name,g=o.get("OBJECTID").name;for(const e of l.fields)if("global-id"===e.type){n=i.field(e.name);break}let b=null,A=new I(new H({name:"percentalong",alias:"percentalong",type:"double"}),U.create("0",e.associations.getFieldsIndex())),N=new I(new H({name:"side",alias:"side",type:"string"}),U.create("''",e.associations.getFieldsIndex()));const x="globalid",S="globalId",$={};for(const n in e.lkp)$[n]=e.lkp[n].sourceId;const T=new F(new H({name:"classname",alias:"classname",type:"string"}),null,$);let L="";switch(a){case"midspan":{L=`((${f}='${n}') OR ( ${u}='${n}')) AND (${y} IN (5))`,T.codefield=U.create(`CASE WHEN (${f}='${n}') THEN ${m} ELSE ${p} END`,e.associations.getFieldsIndex());const t=W(D.findField(e.associations.fields,u));t.name=x,t.alias=x,b=new I(t,U.create(`CASE WHEN (${u}='${n}') THEN ${f} ELSE ${u} END`,e.associations.getFieldsIndex())),A=e.unVersion>=4?new w(D.findField(e.associations.fields,o.get("PERCENTALONG").name)):new I(new H({name:"percentalong",alias:"percentalong",type:"double"}),U.create("0",e.associations.getFieldsIndex()));break}case"junctionedge":{L=`((${f}='${n}') OR ( ${u}='${n}')) AND (${y} IN (4,6))`,T.codefield=U.create(`CASE WHEN (${f}='${n}') THEN ${m} ELSE ${p} END`,e.associations.getFieldsIndex());const t=W(D.findField(e.associations.fields,u));t.name=x,t.alias=x,b=new I(t,U.create(`CASE WHEN (${u}='${n}') THEN ${f} ELSE ${u} END`,e.associations.getFieldsIndex())),N=new I(new H({name:"side",alias:"side",type:"string"}),U.create(`CASE WHEN (${y}=4) THEN 'from' ELSE 'to' END`,e.associations.getFieldsIndex()));break}case"connected":{let r=`${f}='@T'`,i=`${u}='@T'`;null!==t&&(r+=` AND ${c}=@A`,i+=` AND ${d}=@A`),L="(("+r+") OR ("+i+"))",L=z(L,"@T",n),r=z(r,"@T",n),null!==t&&(r=z(r,"@A",t.toString()),L=z(L,"@A",t.toString())),T.codefield=U.create("CASE WHEN "+r+` THEN ${m} ELSE ${p} END`,e.associations.getFieldsIndex());const a=W(D.findField(e.associations.fields,u));a.name=x,a.alias=x,b=new I(a,U.create("CASE WHEN "+r+` THEN ${u} ELSE ${f} END`,e.associations.getFieldsIndex()));break}case"container":L=`${f}='${n}' AND ${y} = 2`,null!==t&&(L+=` AND ${c} = `+t.toString()),T.codefield=m,L="( "+L+" )",b=new E(D.findField(e.associations.fields,u),x,x);case"content":L=`(${u}='${n}' AND ${y} = 2)`,null!==t&&(L+=` AND ${d} = `+t.toString()),T.codefield=p,L="( "+L+" )",b=new E(D.findField(e.associations.fields,f),x,x);break;case"structure":L=`(${f}='${n}' AND ${y} = 3)`,null!==t&&(L+=` AND ${c} = `+t.toString()),T.codefield=m,L="( "+L+" )",b=new E(D.findField(e.associations.fields,u),x,S);break;case"attached":L=`(${u}='${n}' AND ${y} = 3)`,null!==t&&(L+=` AND ${d} = `+t.toString()),T.codefield=p,L="( "+L+" )",b=new E(D.findField(e.associations.fields,f),x,S);break;default:throw new Error("Invalid Parameter")}return r&&(L="1 <> 1"),new D({parentfeatureset:e.associations,adaptedFields:[new w(D.findField(e.associations.fields,g)),new w(D.findField(e.associations.fields,h)),b,N,T,A],extraFilter:L?U.create(L,e.associations.getFieldsIndex()):null})}))}))},X.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),X.functions.groupby=function(e,t){return X.standardFunctionAsync(e,t,((t,r,i)=>(b(i,3,3),x(i[0])?i[0].load().then((t=>{const r=[],a=[];let s=!1,l=[];if(L(i[1]))l.push(i[1]);else if(i[1]instanceof n)l.push(i[1]);else if($(i[1]))l=i[1];else{if(!v(i[1]))return X.failDefferred("Illegal Value: GroupBy");l=i[1].toArray()}for(const e of l)if(L(e)){const n=U.create(N(e),t.getFieldsIndex()),i=!0===J(n)?N(e):"%%%%FIELDNAME";r.push({name:i,expression:n}),"%%%%FIELDNAME"===i&&(s=!0)}else{if(!(e instanceof n))return X.failDefferred("Illegal Value: GroupBy");{const n=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===n&&(s=!0),!n)return X.failDefferred("Illegal Value: GroupBy");r.push({name:n,expression:U.create(i||n,t.getFieldsIndex())})}}if(l=[],L(i[2]))l.push(i[2]);else if($(i[2]))l=i[2];else if(v(i[2]))l=i[2].toArray();else{if(!(i[2]instanceof n))return X.failDefferred("Illegal Value: GroupBy");l.push(i[2])}for(const e of l){if(!(e instanceof n))return X.failDefferred("Illegal Value: GroupBy");{const n=e.hasField("name")?e.field("name"):"",r=e.hasField("statistic")?e.field("statistic"):"",i=e.hasField("expression")?e.field("expression"):"";if(!n||!r||!i)return X.failDefferred("Illegal Value: GroupBy");a.push({name:n,statistic:r.toLowerCase(),expression:U.create(i,t.getFieldsIndex())})}}if(s){const e={};for(const n of t.fields)e[n.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of a)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let n=0;for(const t of r)if("%%%%FIELDNAME"===t.name){for(;1===e["field_"+n.toString()];)n++;e["field_"+n.toString()]=1,t.name="FIELD_"+n.toString()}}const o=[];for(const n of r)o.push(q(n.expression,X,e));for(const n of a)o.push(q(n.expression,X,e));return o.length>0?k(o).then((()=>P(i[0].groupby(r,a)))):P(i[0].groupby(r,a))})):X.failDefferred("Illegal Value: GroupBy"))))},X.signatures.push({name:"groupby",min:"3",max:"3"}),X.functions.distinct=function(e,t){return X.standardFunctionAsync(e,t,((t,i,a)=>x(a[0])?(b(a,2,2),a[0].load().then((t=>{const r=[];let i=[];if(L(a[1]))i.push(a[1]);else if(a[1]instanceof n)i.push(a[1]);else if($(a[1]))i=a[1];else{if(!v(a[1]))return X.failDefferred("Illegal Value: GroupBy");i=a[1].toArray()}let s=!1;for(const e of i)if(L(e)){const n=U.create(N(e),t.getFieldsIndex()),i=!0===J(n)?N(e):"%%%%FIELDNAME";r.push({name:i,expression:n}),"%%%%FIELDNAME"===i&&(s=!0)}else{if(!(e instanceof n))return X.failDefferred("Illegal Value: GroupBy");{const n=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===n&&(s=!0),!n)return X.failDefferred("Illegal Value: GroupBy");r.push({name:n,expression:U.create(i||n,t.getFieldsIndex())})}}if(s){const e={};for(const n of t.fields)e[n.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let n=0;for(const t of r)if("%%%%FIELDNAME"===t.name){for(;1===e["field_"+n.toString()];)n++;e["field_"+n.toString()]=1,t.name="FIELD_"+n.toString()}}const l=[];for(const n of r)l.push(q(n.expression,X,e));return l.length>0?k(l).then((()=>P(a[0].groupby(r,[])))):P(a[0].groupby(r,[]))}))):function(e,n,t,i){if(1===i.length){if($(i[0]))return r(e,i[0],-1);if(v(i[0]))return r(e,i[0].toArray(),-1)}return r(e,i,-1)}("distinct",0,0,a)))})}export{X as registerFunctions};
