import{t as e}from"./_rollupPluginBabelHelpers-3f57fb0e.js";import{cP as t,L as n,a as r,fX as a,e6 as o,fY as s,aR as i,t as u,bP as l,b7 as c,ed as p,bb as f,cb as m,c3 as y,fZ as d,r as g}from"../main.js";import{r as w}from"./geojson-fb8f624a.js";function b(e,t){for(const n of e)if(null!=n&&t(n))return n}function h(e){var t;return null!=(t=function(e){var t,n,r,a;const o=T.exec(e);if(!o)return null;const s=o.groups,i=+s.year,u=+s.month-1,l=+s.day,c=+(null!=(t=s.hours)?t:"0"),p=+(null!=(n=s.minutes)?n:"0"),f=+(null!=(r=s.seconds)?r:"0");if(c>23)return null;if(p>59)return null;if(f>59)return null;const m=null!=(a=s.ms)?a:"0",y=m?+m.padEnd(3,"0").substring(0,3):0;let d;if(s.isUTC)d=Date.UTC(i,u,l,c,p,f,y);else if(s.offsetSign){const e=+s.offsetHours,t=+s.offsetMinutes;d=6e4*("+"===s.offsetSign?-1:1)*(60*e+t)+Date.UTC(i,u,l,c,p,f,y)}else d=new Date(i,u,l,c,p,f,y).getTime();return Number.isNaN(d)?null:d}(e))?t:function(e){const t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}const T=e(/^(?:(\x2D?[0-9]{4,})\x2D([0-9]{2})\x2D([0-9]{2}))(?:T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:\.([0-9]+))?)?(?:(Z)|(?:(\+|\x2D)([0-9]{2}):([0-9]{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11});function F(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&F(n,t)}else F(n,e)}}function*x(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*x(n,e)}}const S="xlink:href",v="2.0.0",C="__esri_wfs_id__",N="wfs-layer:getWFSLayerTypeInfo-error",P="wfs-layer:empty-service",E="wfs-layer:feature-type-not-found",R="wfs-layer:unknown-geometry-type",k="wfs-layer:unknown-field-type",A="wfs-layer:unsupported-spatial-reference",G="wfs-layer:unsupported-wfs-version";async function D(e,t){const i=function(e){const t=_(e);(function(e){const t=e.firstElementChild.getAttribute("version");if(t&&t!==v)throw new r(G,`Unsupported WFS version ${t}. Supported version: ${v}`)})(t),H(t);const n=t.firstElementChild,a=new Map;return{operations:j(n),get featureTypes(){return Array.from($(n,a))},readFeatureTypes:()=>$(n,a)}}((await n(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:v,...null==t?void 0:t.customParameters},signal:null==t?void 0:t.signal})).data);return function(e,t){a(e)&&(o(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=s(t.operations.DescribeFeatureType.url)),o(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=s(t.operations.GetFeature.url)))}(e,i),i}const U=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function j(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(F(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(S)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(S)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(S)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;U.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new r("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if(u(n.GetFeature.outputFormat))throw new r("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return n}function $(t,n){return x(t,{FeatureTypeList:{FeatureType:t=>{if(n.has(t))return n.get(t);const r={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},a=new Set([4326]),o=t=>{var n,r;const o=parseInt(null==(n=t.textContent.match(e(/([0-9]+$)/i,{wkid:1})))||null==(r=n.groups)?void 0:r.wkid,10);Number.isNaN(o)||a.add(o)};return F(t,{Name:e=>{const{name:t,prefix:n}=q(e.textContent);r.typeName=`${n}:${t}`,r.name=t,r.namespacePrefix=n,r.namespaceUri=e.lookupNamespaceURI(n)},Abstract:e=>{r.description=e.textContent},Title:e=>{r.title=e.textContent},WGS84BoundingBox:e=>{r.extent=function(e){let t,n,r,a;for(const o of e.children)switch(o.localName){case"LowerCorner":[t,n]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,a]=o.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:a,spatialReference:p}}(e)},DefaultSRS:o,DefaultCRS:o,OtherSRS:o,OtherCRS:o}),r.title||(r.title=r.name),r.supportedSpatialReferences.push(...a),n.set(t,r),r}}})}function I(e,t,n){return b(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function L(e,t,n,a={}){var o;const{featureType:s,extent:d}=await async function(e,t,n,a={}){const{spatialReference:o=i.WGS84}=a,s=e.readFeatureTypes(),y=t?I(s,t,n):s.next().value;if(u(y))throw t?new r(E,`The type '${t}' could not be found in the service`):new r(P,"The service is empty");let d=new l({...y.extent,spatialReference:o});if(!c(o,p))try{await f(p,o,void 0,a),d=m(d,p)}catch{throw new r(A,"Projection not supported")}return{extent:d,spatialReference:o,featureType:y}}(e,t,n,a),{fields:g,geometryType:w,swapXY:b,objectIdField:h,geometryField:T}=await async function(e,t,n={}){const[a,o]=await y([V(e.operations.DescribeFeatureType.url,t,n),O(e,t,n)]);if(a.error||o.error)throw new r(N,`An error occurred while getting info about the feature type '${t}'`,{error:a.error||o.error});const{fields:s,errors:i}=a.value,l=a.value.geometryType||o.value.geometryType,c=o.value.swapXY;if(u(l))throw new r(R,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:l,fields:s,errors:i});return{...M(s),geometryType:l,swapXY:c}}(e,s.typeName,a);return{url:e.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:g,geometryField:T,geometryType:w,objectIdField:h,spatialReference:null!=(o=a.spatialReference)?o:i.WGS84,extent:d,swapXY:b,wfsCapabilities:e,customParameters:a.customParameters}}function M(e){var n;const r=e.find((e=>"geometry"===e.type));let a=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),a||(a=new t({name:C,type:"oid",alias:C}),e.unshift(a)),{geometryField:null!=(n=null==r?void 0:r.name)?n:null,objectIdField:a.name,fields:e}}async function O(e,t,r={}){var a;let o,s=!1;const[i,u]=await Promise.all([Y(e.operations.GetFeature.url,t,e.operations.GetFeature.outputFormat,{...r,count:1}),n(e.operations.GetFeature.url,{responseType:"text",query:z(t,void 0,{...r,count:1}),signal:null==r?void 0:r.signal})]),l="FeatureCollection"===i.type&&(null==(a=i.features[0])?void 0:a.geometry);if(l){let e;switch(o=d.fromJSON(w(l.type)),l.type){case"Point":e=l.coordinates;break;case"LineString":case"MultiPoint":e=l.coordinates[0];break;case"MultiLineString":case"Polygon":e=l.coordinates[0][0];break;case"MultiPolygon":e=l.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),a=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===a&&(s=!0)}}return{geometryType:o,swapXY:s}}async function V(e,t,r){return W(t,(await n(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:v,TYPENAME:t,...null==r?void 0:r.customParameters},signal:null==r?void 0:r.signal})).data)}function W(e,n){const{name:a}=q(e),o=_(n);H(o);const s=b(x(o.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:q(e.getAttribute("type")).name})}),(({name:e})=>e===a));if(g(s)){const e=b(x(o.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===s.typeName));if(g(e))return function(e){var n,a;const o=[],s=[];let i;const u=x(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const l of u){const u=l.getAttribute("name");if(!u)continue;let c,p;if(l.hasAttribute("type")?c=q(l.getAttribute("type")).name:F(l,{simpleType:{restriction:e=>(c=q(e.getAttribute("base")).name,{maxLength:e=>{p=+e.getAttribute("value")}})}}),!c)continue;const f="true"===l.getAttribute("nillable");let m=!1;switch(c.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":s.push(new t({name:u,alias:u,type:"integer",nullable:f}));break;case"float":case"double":case"decimal":s.push(new t({name:u,alias:u,type:"double",nullable:f}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":s.push(new t({name:u,alias:u,type:"string",nullable:f,length:null!=(n=p)?n:255}));break;case"datetime":case"date":s.push(new t({name:u,alias:u,type:"date",nullable:f,length:null!=(a=p)?a:36}));break;case"pointpropertytype":i="point",m=!0;break;case"multipointpropertytype":i="multipoint",m=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":i="polyline",m=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":i="polygon",m=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":m=!0,o.push(new r(R,`geometry type '${c}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:o.push(new r(k,`Unknown field type '${c}'`,{type:(new XMLSerializer).serializeToString(e)}))}m&&s.push(new t({name:u,alias:u,type:"geometry",nullable:f}))}for(const e of s)if("integer"===e.type&&!e.nullable&&X.has(e.name.toLowerCase())){e.type="oid";break}return{geometryType:i,fields:s,errors:o}}(e)}throw new r(E,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(o)})}const X=new Set(["objectid","fid"]);async function Y(e,t,a,o){let{data:s}=await n(e,{responseType:"text",query:z(t,a,o),signal:null==o?void 0:o.signal});s=s.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var i;if(null!=o&&null!=(i=o.dateFields)&&i.length){const e=new Set(o.dateFields);return JSON.parse(s,((t,n)=>e.has(t)?h(n):n))}return JSON.parse(s)}catch(e){throw new r("wfs-layer:malformed-json","Error while parsing the response",{response:s,error:e})}}function z(e,t,n){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:v,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null==n?void 0:n.startIndex,COUNT:null==n?void 0:n.count,...null==n?void 0:n.customParameters}}function _(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function q(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:null!=n?n:t}}function H(e){let t,n;if(F(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new r(`wfs-layer:${t}`,n)}export{D,Y as K,I as W,L as X,M as _,C as v};
