import{e,al as t,j as i,s as n,bz as s,C as r,eA as a,bn as o,ap as l,bj as u,bp as d,aT as c,eB as f,aK as m,eC as p,d$ as y,bW as h,eD as g}from"../main.js";import{t as F}from"./json-1e178c02.js";import{m as _}from"./FeatureStore-13c21b6f.js";import{f as b}from"./projectionSupport-e4630b78.js";import{V as I}from"./QueryEngine-344bce6d.js";import{a as N,n as w}from"./clientSideDefaults-d42cc712.js";import"./PooledRBush-d64a5cbf.js";import"./WhereClause-3a857400.js";import"./QueryEngineCapabilities-0f0175e3.js";import"./quantizationUtils-2dc92c9e.js";import"./utils-46353578.js";import"./ClassBreaksDefinition-3d02a2c2.js";import"./spatialQuerySupport-0ffda66b.js";const x=/^\s*"([\S\s]*)"\s*$/,T=/""/g,E=[","," ",";","|","\t"];function*j(e,t,i){let n=0;for(;n<=e.length;){const s=e.indexOf(t,n),r=e.substring(n,s>-1?s:void 0);n+=r.length+t.length,i&&!r.trim()||(yield r)}}function S(e){const t=e.includes("\r\n")?"\r\n":"\n";return j(e,t,!0)}function C(e,t){return j(e,t,!1)}function q(e){const t=e.trim();let i=0,n="";for(const e of E){const s=t.split(e).length;s>i&&(i=s,n=e)}return""===n?null:n}function*D(e,t,i,n=(()=>Object.create(null))){let s="",r="",a=0,o=n(),l=0;e:for(const u of e){const e=C(u,i);for(const u of e)if(s+=r+u,r="",a+=v(u),a%2==0){if(a>0){const e=x.exec(s);if(!e){o=n(),l=0,s="",a=0;continue e}o[t[l]]=e[1].replace(T,'"'),l++}else o[t[l]]=s,l++;s="",a=0}else r=i;0===a?(yield o,o=n(),l=0):r="\n"}}function v(e){let t=0,i=0;for(i=e.indexOf('"',i);i>=0;)t++,i=e.indexOf('"',i+1);return t}const O=w("esriGeometryPoint"),k=["csv"],P=[0,0];class V{constructor(e,t){this.x=e,this.y=t}}class Q{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}async load(e,t={}){var i;this.loadOptions=e;const[n]=await Promise.all([this._fetch(t.signal),this._checkProjection(null==e||null==(i=e.parsingOptions)?void 0:i.spatialReference)]),s=R(n,e);this.locationInfo=s.locationInfo,this.delimiter=s.delimiter,this._queryEngine=this._createQueryEngine(s);const r=await this._createFeatures(n);if(this._queryEngine.featureStore.addMany(r),s.layerDefinition.extent=this._queryEngine.fullExtent,s.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;s.layerDefinition.timeInfo.timeExtent=[e,t]}return s}async applyEdits(){throw new e("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(s){var r;return this.loadOptions.customParameters=s,null==(r=this._snapshotTask)||r.abort(),this._snapshotTask=t(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(t=>{this._queryEngine.featureStore.clear(),i(t)||n.getLogger("esri.layers.CSVLayer").error(new e("csv-layer:refresh","An error occurred during refresh",{error:t}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:i,customParameters:n}=this.loadOptions;if(!i)throw new e("csv-layer:invalid-source","url not defined");const a=s(i);return(await r(a.path,{query:{...a.query,...n},responseType:"text",signal:t})).data}_createQueryEngine(e){const{objectIdField:t,fields:i,extent:n,timeInfo:s}=e.layerDefinition,r=new _({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new I({fields:i,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:t,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:r})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:i}=this.locationInfo,{objectIdField:n,fieldsIndex:s,spatialReference:r}=this._queryEngine;let p=[];const y=[],h=s.fields.filter((e=>e.name!==n)).map((e=>e.name));let g=0;const _=S(e);_.next();const b={};for(const e of s.fields)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=a(e);void 0!==t&&(b[e.name]=t)}const I=D(_,h,this.delimiter,N(b,n));for(const e of I){const r=this._parseCoordinateValue(e[t]),a=this._parseCoordinateValue(e[i]);if(null!=a&&null!=r&&!isNaN(r)&&!isNaN(a)){e[t]=r,e[i]=a;for(const n in e)if(n!==t&&n!==i)if(s.isDateField(n)){const t=new Date(e[n]);e[n]=Y(t,e[n])?t.getTime():null}else if(s.isNumericField(n)){const t=z(e[n]);isNaN(t)?e[n]=null:e[n]=t}e[n]=g,g++,p.push(new V(a,r)),y.push(e)}}if(!o({wkid:4326},r))if(l(r))for(const e of p)[e.x,e.y]=u(e.x,e.y,P);else p=d(F,p,c.WGS84,r,null);const w=[];for(let e=0;e<p.length;e++){const{x:t,y:i}=p[e],s=y[e];s[n]=e+1,w.push(new f(new m([],[t,i]),s,null,s[n]))}return w}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=z(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(t){try{await b(p,t)}catch{throw new e("csv-layer:projection-not-supported","Projection not supported")}}}function R(t,i){const n=i.parsingOptions||{},s={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},r=S(t);let a=r.next().value;if(!a)throw new e("csv-layer:empty-csv","CSV is empty",{csv:t});if(a=a.trim(),!n.delimiter){const t=q(a);if(!t)throw new e("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");s.delimiter=t}const o=a.split(s.delimiter).filter((e=>!!e)),l=s.layerDefinition={name:y(i.url,k)||"csv",drawingInfo:O,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const t=M(o);if(!n.longitudeField&&!t.longitudeFieldName||!n.latitudeField&&!t.latitudeFieldName)throw new e("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");s.locationInfo={longitudeFieldName:n.longitudeField||t.longitudeFieldName,latitudeFieldName:n.latitudeField||t.latitudeFieldName}}const u=$(r,s.delimiter,o,s.locationInfo);if(n.fields&&n.fields.length){const e=new Map;for(const t of n.fields)e.set(t.name.toLowerCase(),t);for(const t of u){const i=e.get(t.name.toLowerCase());if(i){const e=t.name;Object.assign(t,i),t.name=e}}}if(l.fields=u,!l.fields.some((e=>"esriFieldTypeOID"===e.type&&(l.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};l.objectIdField=e.name,l.fields.unshift(e)}if(l.timeInfo){const e=new h(l.fields),t=l.timeInfo;if(t.startTimeField){const i=e.get(t.startTimeField);i?(t.startTimeField=i.name,i.type="esriFieldTypeDate"):t.startTimeField=null}if(t.endTimeField){const i=e.get(t.endTimeField);i?(t.endTimeField=i.name,i.type="esriFieldTypeDate"):t.endTimeField=null}if(t.trackIdField){const i=e.get(t.trackIdField);t.trackIdField=i?i.name:null}t.startTimeField||t.endTimeField||(l.timeInfo=null)}return s}const G=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],L=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"];function M(e){const t=e.map((e=>e.toLowerCase()));return{longitudeFieldName:e[t.indexOf(L.find((e=>t.includes(e))))],latitudeFieldName:e[t.indexOf(G.find((e=>t.includes(e))))]}}function $(e,t,i,n){const s=[],r=D(e,i,t),a=[];for(const e of r){if(10===a.length)break;a.push(e)}for(const e of i)if(e===n.longitudeFieldName||e===n.latitudeFieldName)s.push({name:e,type:"esriFieldTypeDouble",alias:e});else{const t=A(a.map((t=>t[e]))),i={name:e,type:null,alias:e};switch(t){case"integer":i.type="esriFieldTypeInteger";break;case"double":i.type="esriFieldTypeDouble";break;case"date":i.type="esriFieldTypeDate",i.length=36;break;default:i.type="esriFieldTypeString",i.length=255}s.push(i)}return s}function A(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else{let t=z(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))i=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";i=!0}}}return i?/^[-]?\d*[.,]?\d*$/.test(e)?"string":Y(new Date(e),e)?"date":"string":"string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}const B=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,W=Number.isNaN(new Date("technology 10").getTime());function Y(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let i=!0;if(!W&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!B.test(e[n]),n++;i=!t}}return i}const z=function(){const e=g(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return function(s){const r=t.exec(s);if(e.factor=n,!r)return NaN;let a=r[1];if(!r[1]){if(!r[2])return NaN;a=r[2],e.factor*=-1}return a=a.replace(i,"").replace(e.decimal,"."),+a*e.factor}}();export{Q as default,A as inferFieldType,$ as inferFields,M as inferLocationInfo};
