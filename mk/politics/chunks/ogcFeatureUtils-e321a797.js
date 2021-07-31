import{t as e}from"./_rollupPluginBabelHelpers-ef80e4ee.js";import{n as t,t as n,a as i,L as a,fP as r,bN as s,aS as o,cZ as l,g7 as c,y as d,b8 as u,bH as f,bg as m,cq as p,eC as g,r as y,g8 as w}from"../main.js";import{I as b,T as h,k as F}from"./geojson-601e1806.js";import{u as I}from"./clientSideDefaults-ca10dab4.js";const j=t.getLogger("esri.layers.graphics.sources.ogcfeature");async function T(e,t,o={},l=5){const{links:c}=e,d=W(c,"items","application/geo+json")||W(c,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(n(d))throw new i("ogc-feature-layer:missing-items-page","Missing items url");const{data:u}=await a(d.href,{signal:o.signal,query:{limit:l,...o.customParameters,token:o.apiKey},headers:{accept:"application/geo+json"}});await b(u);const f=h(u,{geometryType:t.geometryType}),m=t.fields||f.fields||[],p=null!=t.hasZ?t.hasZ:f.hasZ,g=f.geometryType,y=t.objectIdField||f.objectIdFieldName||"OBJECTID";let w=t.timeInfo;const F=m.find((e=>e.name===y));if(F)F.type="esriFieldTypeOID",F.editable=!1,F.nullable=!1;else{if(!f.objectIdFieldType)throw new i("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");m.unshift({name:y,alias:y,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(y!==f.objectIdFieldName){const e=m.find((e=>e.name===f.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}if(!g)throw new i("ogc-feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");m===f.fields&&f.unknownFields.length>0&&j.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:f.unknownFields}});for(const e of m){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new i("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(-1===r.jsonValues.indexOf(e.type))throw new i("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(w){const e=new s(m);if(w.startTimeField){const t=e.get(w.startTimeField);t?(w.startTimeField=t.name,t.type="esriFieldTypeDate"):w.startTimeField=null}if(w.endTimeField){const t=e.get(w.endTimeField);t?(w.endTimeField=t.name,t.type="esriFieldTypeDate"):w.endTimeField=null}if(w.trackIdField){const t=e.get(w.trackIdField);t?w.trackIdField=t.name:(w.trackIdField=null,j.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:w}}))}w.startTimeField||w.endTimeField||(j.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:w}}),w=null)}return{drawingInfo:I(g),geometryType:g,fields:m,hasZ:!!p,objectIdField:y,timeInfo:w}}async function k(e,t={}){const{links:r}=e,s=W(r,"data","application/json")||W(r,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(n(s))throw new i("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:l,signal:c}=t,{data:d}=await a(s.href,{signal:c,headers:{accept:"application/json"},query:{...l,token:o}});return d}async function x(e,t={}){const{links:r}=e,s=W(r,"conformance","application/json")||W(r,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(n(s))throw new i("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:l,signal:c}=t,{data:d}=await a(s.href,{signal:c,headers:{accept:"application/json"},query:{...l,token:o}});return d}async function S(e,t={}){const{apiKey:n,customParameters:i,signal:r}=t,{data:s}=await a(e,{signal:r,headers:{accept:"application/json"},query:{...i,token:n}});return s}async function N(e,t={}){const i="application/vnd.oai.openapi+json;version=3.0",r=W(e.links,"service-desc",i);if(n(r))return j.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:s,customParameters:o,signal:l}=t,{data:c}=await a(r.href,{signal:l,headers:{accept:i},query:{...o,token:s}});return c}function v(t){const n=e(/^http:\/\/www\.opengis.net\/def\/crs\/(.*)\/(.*)\/(.*)$/i,{authority:1,version:2,code:3}).exec(t),i=null==n?void 0:n.groups;if(!i)return null;const{authority:a,code:r}=i;switch(a.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return o.GCS_NAD_1927;case"crs83":return new o({wkid:4269});case"crs84":case"crs84h":return o.WGS84;default:return null}case"esri":case"epsg":{const e=Number.parseInt(r,10);return Number.isNaN(e)?null:900913===e?o.WebMercator:new o({wkid:e})}default:return null}}async function q(e,t,n){const i=await M(e,t,n);return l.fromJSON(i)}async function M(e,t,n){const i=await O(e,t,n);return c(i)}async function O(e,t,r){const{capabilities:{query:{maxRecordCount:s}},collection:l,layerDefinition:c,queryParameters:{apiKey:u,customParameters:b},spatialReference:h,supportedCrs:I}=e,{links:j}=l,T=W(j,"items","application/geo+json")||W(j,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(n(T))throw new i("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:k,num:x,start:S,timeExtent:N,where:v}=t;if(t.objectIds)throw new i("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const q=o.fromJSON(h),M=d(t.outSpatialReference,q),O=M.isWGS84?null:P(M,I),D=C(k,I),G=function(e){if(n(e))return null;const{start:t,end:i}=e;return`${y(t)?t.toISOString():".."}/${y(i)?i.toISOString():".."}`}(N),R=function(e){return n(e)||!e||"1=1"===e?null:e}(v),Z=null!=x?x:null!=S&&void 0!==S?10:s,{data:$}=await a(T.href,{...r,query:{...b,...D,crs:O,datetime:G,query:R,limit:Z,startindex:S,token:u},headers:{accept:"application/geo+json"}});let K=!1;$.links&&(K=!!$.links.find((e=>"next"===e.rel))),!K&&Number.isInteger($.numberMatched)&&Number.isInteger($.numberReturned)&&(K=$.numberReturned<$.numberMatched);const{fields:J,globalIdField:L,hasM:A,hasZ:_,objectIdField:B}=c,E=c.geometryType,H=F($,{geometryType:E,hasZ:_,objectIdField:B});if(!O&&M.isWebMercator)for(const e of H)if(e.geometry){const t=f(e.geometry,E,_,!1);t.spatialReference=o.WGS84,e.geometry=m(p(t,M))}for(const e of H)e.objectId=e.attributes[B];const Q=O||!O&&M.isWebMercator?M.toJSON():g,V=new w;return V.exceededTransferLimit=K,V.features=H,V.fields=J,V.geometryType=E,V.globalIdFieldName=L,V.hasM=A,V.hasZ=_,V.objectIdFieldName=B,V.spatialReference=Q,V}function P(e,t){return t.find((t=>{const n=v(t);return u(n,e)}))}function D(e){const{xmin:t,ymin:n,xmax:i,ymax:a}=e;return`${t},${n},${i},${a}`}function C(e,t){if(!function(e){return y(e)&&"extent"===e.type}(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:D(e)};const i=P(n,t);return i?{bbox:D(e),"bbox-crs":i}:n.isWebMercator?{bbox:D(p(e,o.WGS84))}:null}function W(e,t,n){return e.find((e=>e.rel===t&&e.type===n))||e.find((e=>e.rel===t&&!e.type))}export{M,v as N,O,x as S,T,k,q,N as v,S as x};
