import{a as e,cj as t,L as i,cR as n,bO as r,s,b7 as l,b9 as o,b5 as a,ba as d,aR as u,es as c,aD as f,et as m}from"../main.js";import{a as p}from"./number-527212e5.js";import{t as y}from"./json-5b2b387c.js";import{u as g}from"./FeatureStore-eeb3a8ec.js";import{p as h}from"./quantizationUtils-bf6cb4fd.js";import{H as F}from"./QueryEngine-d5e4f065.js";import{u as b}from"./clientSideDefaults-491b965b.js";import"./aaBoundingBox-715afc3a.js";import"./PooledRBush-4c99b52a.js";import"./quickselect-4c28d668.js";import"./centroid-a817072d.js";import"./WhereClause-520d8454.js";import"./QueryEngineCapabilities-e0f82f0e.js";import"./utils-41e94bc5.js";import"./spatialQuerySupport-5390355f.js";const I=/^\s*"([\S\s]*)"\s*$/,N=/""/g,x=[","," ",";","|","\t"];function _(e,t){const i={},n=e.length;for(let r=0;r<n;r++)i[e[r]]=t[r];return i}function*T(e,t,i){let n=0;for(;n<=e.length;){const r=e.indexOf(t,n),s=e.substring(n,r>-1?r:void 0);n+=s.length+t.length,i&&!s.trim()||(yield s)}}function w(e){const t=e.includes("\r\n")?"\r\n":"\n";return T(e,t,!0)}function E(e,t){return T(e,t,!1)}function*D(e,t,i){let n="",r="",s=0,l=[];e:for(;;){const{value:o,done:a}=e.next();if(a)return;const d=E(o,i);t:for(;;){const{value:e,done:t}=d.next();if(t)break t;if(n+=r+e,r="",s+=j(e),s%2==0){if(s>0){const e=I.exec(n);if(!e){l=[],n="",s=0;continue e}l.push(e[1].replace(N,'"'))}else l.push(n);n="",s=0}else r=i}0===s?(yield _(t,l),l=[]):r="\n"}}function j(e){let t=0,i=0;for(i=e.indexOf('"',i);i>=0;)t++,i=e.indexOf('"',i+1);return t}const q=b("esriGeometryPoint"),v=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],S=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],C=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],O=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,k=["csv"],V=[0,0];class R{constructor(e,t){this.x=e,this.y=t}}const P=function(){const e=p(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return function(r){const s=t.exec(r);if(e.factor=n,!s)return NaN;let l=s[1];if(!s[1]){if(!s[2])return NaN;l=s[2],e.factor*=-1}return l=l.replace(i,"").replace(e.decimal,"."),+l*e.factor}}(),Q="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;class L{constructor(){this._fieldsIndex=null,this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null}async load(e,t={}){const[i]=await Promise.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)]),n=this._parse(i,e);if(this._queryEngine=this._createQueryEngine(i,n),n.layerDefinition.extent=this._queryEngine.fullExtent,n.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;n.layerDefinition.timeInfo.timeExtent=[e,t]}return n}async applyEdits(){throw new e("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}async _fetch(n,r){if(!n)throw new e("csv-source:invalid-source","url not defined");const s=t(n);return(await i(s.path,{query:s.query,responseType:"text",signal:r.signal})).data}_parse(t,i){const s=i.parsing||{},l={columnDelimiter:s.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:s.latitudeField,longitudeFieldName:s.longitudeField}},o=w(t);let{value:a}=o.next();if(!a)throw new e("csv","CSV is empty",{csv:t});if(a=a.trim(),!s.columnDelimiter){const t=function(e){const t=e.trim();let i=0,n="";for(const e of x){const r=t.split(e).length;r>i&&(i=r,n=e)}return""===n?null:n}(a);if(!t)throw new e("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");l.columnDelimiter=t}const d=a.split(l.columnDelimiter),u=l.layerDefinition={name:n(i.url,k)||"csv",drawingInfo:q,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:s.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:s.spatialReference||{wkid:102100}}};if(!s.latitudeField||!s.longitudeField){const t=this._inferLocationInfo(d);if(!s.longitudeField&&!t.longitudeFieldName||!s.latitudeField&&!t.latitudeFieldName)throw new e("csv","Unable to identify latitudeField and/or longitudeField from CSV");l.locationInfo={longitudeFieldName:s.longitudeField||t.longitudeFieldName,latitudeFieldName:s.latitudeField||t.latitudeFieldName}}const c=this._inferFields(o,l.columnDelimiter,d,l.locationInfo);if(s.fields&&s.fields.length){const e=new Map;for(const t of s.fields)e.set(t.name.toLowerCase(),t);for(const t of c){const i=e.get(t.name.toLowerCase());if(i){const e=t.name;Object.assign(t,i),t.name=e}}}if(u.fields=c,!u.fields.some((e=>"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};u.objectIdField=e.name,u.fields.unshift(e)}if(this._fieldsIndex=new r(u.fields),u.timeInfo){const e=u.timeInfo;if(e.startTimeField){const t=this._fieldsIndex.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=this._fieldsIndex.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=this._fieldsIndex.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(u.timeInfo=null)}return l}_inferLocationInfo(e){let t=null,i=null;const n=t=>e.find((e=>e.toLowerCase()===t));return C.some((e=>(t=n(e),!!t))),S.some((e=>(i=n(e),!!i))),{longitudeFieldName:t,latitudeFieldName:i}}_inferFields(e,t,i,n){const r=[],s=D(e,i,t),l=[];e:for(;l.length<10;){const{value:e,done:t}=s.next();if(t)break e;l.push(e)}for(const e of i)if(e===n.longitudeFieldName||e===n.latitudeFieldName)r.push({name:e,type:"esriFieldTypeDouble",alias:e});else{const t=l.map((t=>t[e])),i=this._inferFieldType(t),n={name:e,type:null,alias:e};switch(i){case"integer":n.type="esriFieldTypeInteger";break;case"double":n.type="esriFieldTypeDouble";break;case"date":n.type="esriFieldTypeDate",n.length=36;break;default:n.type="esriFieldTypeString",n.length=255}r.push(n)}return r}_inferFieldType(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else{let t=P(e);if(!isNaN(t))return/[.,]/.test(e)||!Q(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))i=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";i=!0}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){const t=new Date(e);return this._isValidDate(t,e)?"date":"string"}return"string"}return"string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}_isValidDate(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let i=!0;if(s("chrome")&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!O.test(e[n]),n++;i=!t}}return i}_createQueryEngine(e,t){const{latitudeFieldName:i,longitudeFieldName:n}=t.locationInfo,{objectIdField:r,fields:s,extent:m,timeInfo:p}=t.layerDefinition;let h=[];const b=[],I=new Set,N=new Set,x=[];for(const{name:e,type:t}of s)"esriFieldTypeDate"===t?I.add(e):v.indexOf(t)>-1&&N.add(e),e!==r&&x.push(e);let _=0;const T=w(e);T.next();const E=D(T,x,t.columnDelimiter);e:for(;;){const{value:e,done:t}=E.next();if(t)break e;const s=this._parseCoordinateValue(e[i]),l=this._parseCoordinateValue(e[n]);if(null!=l&&null!=s&&!isNaN(s)&&!isNaN(l)){e[i]=s,e[n]=l;for(const t in e)if(t!==i&&t!==n)if(I.has(t)){const i=new Date(e[t]);e[t]=this._isValidDate(i,e[t])?i.getTime():null}else if(N.has(t)){const i=P(e[t]);isNaN(i)?e[t]=null:e[t]=i}e[r]=_,_++,h.push(new R(l,s)),b.push(e)}}if(!l({wkid:4326},m.spatialReference))if(o(m.spatialReference))for(const e of h)[e.x,e.y]=a(e.x,e.y,V);else h=d(y,h,u.WGS84,m.spatialReference,null);const j=new g({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),q=new F({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:p,objectIdField:r,spatialReference:m.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:j}),S=[];for(let e=0;e<h.length;e++){const{x:t,y:i}=h[e],n=b[e];n[r]=e+1,S.push(new c(new f([],[t,i]),n,null,n[r]))}return j.addMany(S),q}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=P(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(t){try{await h(m,t)}catch{throw new e("csv-layer","Projection not supported")}}}export{S as csvLatitudeFieldNames,C as csvLongitudeFieldNames,L as default};
