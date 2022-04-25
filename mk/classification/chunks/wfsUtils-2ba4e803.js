import{em as e,gG as t,C as n,gH as r,e as a,gI as s,dR as o,gJ as i,aT as u,t as l,ch as p,bn as c,eC as m,bl as y,cu as d,co as f,gK as g,r as w}from"../main.js";import{i as b}from"./geojson-e369185a.js";import{n as T,o as h}from"./xmlUtils-df1e4a3e.js";function F(e){var t;return null!=(t=S(e))?t:function(e){const t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}function S(e){var t,n,r,a;const s=x.exec(e);if(!s)return null;const o=s.groups,i=+o.year,u=+o.month-1,l=+o.day,p=+(null!=(t=o.hours)?t:"0"),c=+(null!=(n=o.minutes)?n:"0"),m=+(null!=(r=o.seconds)?r:"0");if(p>23)return null;if(c>59)return null;if(m>59)return null;const y=null!=(a=o.ms)?a:"0",d=y?+y.padEnd(3,"0").substring(0,3):0;let f;if(o.isUTC)f=Date.UTC(i,u,l,p,c,m,d);else if(o.offsetSign){const e=+o.offsetHours,t=+o.offsetMinutes;f=6e4*("+"===o.offsetSign?-1:1)*(60*e+t)+Date.UTC(i,u,l,p,c,m,d)}else f=new Date(i,u,l,p,c,m,d).getTime();return Number.isNaN(f)?null:f}const x=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,C="xlink:href",v="2.0.0",N="__esri_wfs_id__",E="wfs-layer:getWFSLayerTypeInfo-error",P="wfs-layer:feature-type-not-found",G="wfs-layer:unknown-geometry-type",R="wfs-layer:unknown-field-type",k="wfs-layer:unsupported-wfs-version";async function A(e,t){const u=function(e){const t=Y(e);(function(e){const t=e.firstElementChild.getAttribute("version");if(t&&t!==v)throw new a(k,`Unsupported WFS version ${t}. Supported version: ${v}`)})(t),H(t);const n=t.firstElementChild,s=r(function(e){return T(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},n=new Set([4326]),r=e=>{var t,r;const a=parseInt(null==(t=e.textContent.match(/(?<wkid>\d+$)/i))||null==(r=t.groups)?void 0:r.wkid,10);Number.isNaN(a)||n.add(a)};return h(e,{Name:e=>{const{name:n,prefix:r}=q(e.textContent);t.typeName=`${r}:${n}`,t.name=n,t.namespacePrefix=r,t.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=function(e){let t,n,r,a;for(const s of e.children)switch(s.localName){case"LowerCorner":[t,n]=s.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,a]=s.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:a,spatialReference:m}}(e)},DefaultSRS:r,DefaultCRS:r,OtherSRS:r,OtherCRS:r}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...n),t}}})}(n));return{operations:U(n),get featureTypes(){return Array.from(s())},readFeatureTypes:s}}((await n(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:v,...null==t?void 0:t.customParameters},signal:null==t?void 0:t.signal})).data);return function(e,t){s(e)&&(o(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=i(t.operations.DescribeFeatureType.url)),o(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=i(t.operations.GetFeature.url)))}(e,u),u}const D=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function U(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(h(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(C)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(C)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(C)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;D.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new a("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if(l(n.GetFeature.outputFormat))throw new a("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return n}function j(e,n,r){return t(e,(e=>r?e.name===n&&e.namespaceUri===r:e.typeName===n||e.name===n))}async function I(e,t,n,r={}){var s;const{featureType:o,extent:i}=await $(e,t,n,r),{fields:p,geometryType:c,swapXY:m,objectIdField:y,geometryField:d}=await async function(e,t,n={}){const[r,s]=await f([M(e.operations.DescribeFeatureType.url,t,n),L(e,t,n)]);if(r.error||s.error)throw new a(E,`An error occurred while getting info about the feature type '${t}'`,{error:r.error||s.error});const{fields:o,errors:i}=r.value,u=r.value.geometryType||s.value.geometryType,p=s.value.swapXY;if(l(u))throw new a(G,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:u,fields:o,errors:i});return{...O(o),geometryType:u,swapXY:p}}(e,o.typeName,r);return{url:e.operations.GetCapabilities.url,name:o.name,namespaceUri:o.namespaceUri,fields:p,geometryField:d,geometryType:c,objectIdField:y,spatialReference:null!=(s=r.spatialReference)?s:u.WGS84,extent:i,swapXY:m,wfsCapabilities:e,customParameters:r.customParameters}}async function $(e,t,n,r={}){const{spatialReference:s=u.WGS84}=r,o=e.readFeatureTypes(),i=t?j(o,t,n):o.next().value;if(l(i))throw t?new a(P,`The type '${t}' could not be found in the service`):new a("wfs-layer:empty-service","The service is empty");let f=new p({...i.extent,spatialReference:s});if(!c(s,m))try{await y(m,s,void 0,r),f=d(f,m)}catch{throw new a("wfs-layer:unsupported-spatial-reference","Projection not supported")}return{extent:f,spatialReference:s,featureType:i}}function O(t){var n;const r=t.find((e=>"geometry"===e.type));let a=t.find((e=>"oid"===e.type));return t=t.filter((e=>"geometry"!==e.type)),a||(a=new e({name:N,type:"oid",alias:N}),t.unshift(a)),{geometryField:null!=(n=null==r?void 0:r.name)?n:null,objectIdField:a.name,fields:t}}async function L(e,t,r={}){var a;let s,o=!1;const[i,u]=await Promise.all([X(e.operations.GetFeature.url,t,e.operations.GetFeature.outputFormat,{...r,count:1}),n(e.operations.GetFeature.url,{responseType:"text",query:z(t,void 0,{...r,count:1}),signal:null==r?void 0:r.signal})]),l="FeatureCollection"===i.type&&(null==(a=i.features[0])?void 0:a.geometry);if(l){let e;switch(s=g.fromJSON(b(l.type)),l.type){case"Point":e=l.coordinates;break;case"LineString":case"MultiPoint":e=l.coordinates[0];break;case"MultiLineString":case"Polygon":e=l.coordinates[0][0];break;case"MultiPolygon":e=l.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),a=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===a&&(o=!0)}}return{geometryType:s,swapXY:o}}async function M(e,t,r){return V(t,(await n(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:v,TYPENAME:t,...null==r?void 0:r.customParameters},signal:null==r?void 0:r.signal})).data)}function V(n,r){const{name:s}=q(n),o=Y(r);H(o);const i=t(T(o.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:q(e.getAttribute("type")).name})}),(({name:e})=>e===s));if(w(i)){const n=t(T(o.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===i.typeName));if(w(n))return function(t){var n,r;const s=[],o=[];let i;const u=T(t,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const l of u){const u=l.getAttribute("name");if(!u)continue;let p,c;if(l.hasAttribute("type")?p=q(l.getAttribute("type")).name:h(l,{simpleType:{restriction:e=>(p=q(e.getAttribute("base")).name,{maxLength:e=>{c=+e.getAttribute("value")}})}}),!p)continue;const m="true"===l.getAttribute("nillable");let y=!1;switch(p.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":o.push(new e({name:u,alias:u,type:"integer",nullable:m}));break;case"float":case"double":case"decimal":o.push(new e({name:u,alias:u,type:"double",nullable:m}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":o.push(new e({name:u,alias:u,type:"string",nullable:m,length:null!=(n=c)?n:255}));break;case"datetime":case"date":o.push(new e({name:u,alias:u,type:"date",nullable:m,length:null!=(r=c)?r:36}));break;case"pointpropertytype":i="point",y=!0;break;case"multipointpropertytype":i="multipoint",y=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":i="polyline",y=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":i="polygon",y=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":y=!0,s.push(new a(G,`geometry type '${p}' is not supported`,{type:(new XMLSerializer).serializeToString(t)}));break;default:s.push(new a(R,`Unknown field type '${p}'`,{type:(new XMLSerializer).serializeToString(t)}))}y&&o.push(new e({name:u,alias:u,type:"geometry",nullable:m}))}for(const e of o)if("integer"===e.type&&!e.nullable&&W.has(e.name.toLowerCase())){e.type="oid";break}return{geometryType:i,fields:o,errors:s}}(n)}throw new a(P,`Type '${n}' not found in document`,{document:(new XMLSerializer).serializeToString(o)})}const W=new Set(["objectid","fid"]);async function X(e,t,r,s){let{data:o}=await n(e,{responseType:"text",query:z(t,r,s),signal:null==s?void 0:s.signal});o=o.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var i;if(null!=s&&null!=(i=s.dateFields)&&i.length){const e=new Set(s.dateFields);return JSON.parse(o,((t,n)=>e.has(t)?F(n):n))}return JSON.parse(o)}catch(e){throw new a("wfs-layer:malformed-json","Error while parsing the response",{response:o,error:e})}}function z(e,t,n){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:v,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null==n?void 0:n.startIndex,COUNT:null==n?void 0:n.count,...null==n?void 0:n.customParameters}}function Y(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function q(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:null!=n?n:t}}function H(e){let t,n;if(h(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new a(`wfs-layer:${t}`,n)}export{A as D,X as K,j as W,I as X,N as v,O as z};
