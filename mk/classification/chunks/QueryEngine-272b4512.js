import{ed as e,a as t,t as s,aE as i,b7 as r,r as a,bj as n,ew as o,dM as u,h as l,m as c,ex as h,ey as d,ez as f,bO as m,b2 as p,bZ as y,c4 as g,b$ as x,eA as _,ao as w,aJ as I,ap as S,ar as b,aj as F}from"../main.js";import{a as Q,A,D as R,f as T}from"./aaBoundingBox-8b955074.js";import{WhereClause as v}from"./WhereClause-2726b39e.js";import{y as C,j as z,m as E,p as V}from"./quantizationUtils-b72d6ab9.js";import{t as P}from"./QueryEngineCapabilities-e0f82f0e.js";import{s as j,o as M,i as N,r as D,u as k}from"./utils-422adbd0.js";import{x as O,n as G,_ as q,N as B,t as Z,J as L,j as U,v as $,I as J,P as Y}from"./spatialQuerySupport-acab228f.js";const W=new class{constructor(t,s){this._cache=new e(t),this._invalidCache=new e(s)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(void 0!==this._invalidCache.get(s))return null;try{const i=v.create(e,t);return this._cache.put(s,i),i}catch{return this._invalidCache.put(s,null),null}}}(50,500),H="feature-store:unsupported-query",X=" as ",K=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function ee(e,s){if(!s)return!0;const i=W.get(s,e);if(!i)throw new t(H,"invalid SQL expression",{where:s});if(!i.isStandardized)throw new t(H,"where clause is not standard",{where:s});return ie(e,i.fieldNames,"where clause contains missing fields"),!0}function te(e,s,i){if(!s)return!0;const r=W.get(s,e);if(!r)throw new t(H,"invalid SQL expression",{having:s});if(!r.isAggregate)throw new t(H,"having does not contain a valid aggregate function",{having:s});const a=r.fieldNames;if(ie(e,a,"having contains missing fields"),!r.getExpressions().every((t=>{const{aggregateType:s,field:r}=t,a=e.has(r)&&e.get(r).name;return i.some((t=>{const{onStatisticField:i,statisticType:r}=t;return(e.has(i)&&e.get(i).name)===a&&r.toLowerCase().trim()===s}))})))throw new t(H,"expressions in having should also exist in outStatistics",{having:s});return!0}function se(e,t){return e?W.get(e,t):null}function ie(e,s,i,r=!0){const a=[];for(const i of s)if("*"!==i&&!e.has(i))if(r){const s=re(i);try{const i=se(s,e);if(!i)throw new t(H,"invalid SQL expression",{where:s});if(!i.isStandardized)throw new t(H,"expression is not standard",{clause:i});ie(e,i.fieldNames,"expression contains missing fields")}catch(e){const t=e&&e.details;if(t&&(t.clause||t.where))throw e;t&&t.missingFields?a.push(...t.missingFields):a.push(i)}}else a.push(i);if(a.length)throw new t(H,i,{missingFields:a})}function re(e){return e.split(X)[0]}function ae(e){return e.split(X)[1]}function ne(e,t){const s=t.get(e);return!!s&&!K.has(s.type)}class oe{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&-1===i.indexOf("*")){this.outFields=i;let e=0;for(const t of i){const i=re(t),r=this.fieldsIndex.get(i),a=r?null:se(i,s),n=r?r.name:ae(t)||"FIELD_EXP_"+e++;this._fieldDataCache.set(t,{alias:n,clause:a})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach((e=>this.getAttributes(e))),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){const i=s?s.name:t;let r=null;return this._fieldDataCache.has(i)?r=this._fieldDataCache.get(i).clause:s||(r=se(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:r})),s?this.featureAdapter.getAttribute(e,i):r.calculateValue(e,this.featureAdapter)}getNormalizedValue(e,t){const s=t.normalizationType,i=t.normalizationTotal;let r=this.getFieldValue(e,t.field,t.fieldInfo);if(s&&Number.isFinite(r)){const a=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);r=j(r,s,a,i)}return r}getExpressionValue(e,t,s){const i={attributes:this.featureAdapter.getAttributes(e)},r=s.createExecContext(i,t.viewInfo);return s.executeFunction(t.compiledFunc,r)}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:se(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:se(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:t,clause:r}=this._fieldDataCache.get(i);s[t]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,t)}return s}_processAttributesForDistinctValues(e){if(s(e)||!this.returnDistinctValues)return e;const t=this.outFields,i=[];if(t)for(const s of t){const{alias:t}=this._fieldDataCache.get(s);i.push(e[t])}else for(const t in e)i.push(e[t]);const r=`${(t||["*"]).join(",")}=${i.join(",")}`;let a=this._returnDistinctMap.get(r)||0;return this._returnDistinctMap.set(r,++a),a>1?null:e}}function ue(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function le(e,t,s){return(s?e>t:e<t)?-1:(s?e<t:e>t)?1:0}function ce(e,t,s){return s?t-e:e-t}function he(e,t,s,i){if(s&&"esriFieldTypeDate"===s.type){const s=new Date(e).getTime(),r=new Date(t).getTime();if(!isNaN(s)&&!isNaN(r))return ce(s,r,i)}if("number"==typeof e&&"number"==typeof t)return ce(e,t,i);if("string"==typeof e&&"string"==typeof t){const r=e.toUpperCase(),a=t.toUpperCase();return!s||"esriFieldTypeGUID"!==s.type&&"esriFieldTypeGlobalID"!==s.type?le(r,a,i):le(ue(r),ue(a),i)}return i?1:-1}class de{constructor(e,t,s){this.items=e,this.queryGeometry=t,this.definitionExpression=s.definitionExpression,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.fieldsIndex=s.fieldsIndex,this.timeInfo=s.timeInfo,this.featureAdapter=s.featureAdapter,this.aggregateAdapter=s.aggregateAdapter}get size(){return this.items.length}createQueryResponseForCount(e){const t=new oe(e,this.featureAdapter,this.fieldsIndex);if(!e.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:s,having:i}=e;if(!(null==s?void 0:s.length))return 1;const r=new Map,a=new Map,n=new Set,o=e.outStatistics;for(const e of o){const{statisticType:o}=e,u="exceedslimit"!==o?e.onStatisticField:void 0;if(!a.has(u)){const e=[];for(const i of s){const s=this._getAttributeValues(t,i,r);e.push(s)}a.set(u,this._calculateUniqueValues(e))}const l=a.get(u);for(const e in l){const{data:s,items:r}=l[e],a=s.join(",");i&&!t.validateItems(r,i)||n.add(a)}}return n.size}createQueryResponse(e){let t;return t=e.outStatistics?e.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse(e):this._createStatisticsQueryResponse(e):this._createFeatureQueryResponse(e),e.returnQueryGeometry&&(i(e.outSR)&&!r(this.queryGeometry.spatialReference,e.outSR)?t.queryGeometry=O({spatialReference:e.outSR,...C(this.queryGeometry,this.queryGeometry.spatialReference,e.outSR)}):t.queryGeometry=O({spatialReference:e.outSR,...this.queryGeometry})),t}createSnappingResponse(e,t){const s=this.featureAdapter,i=function(e,t){return e?t?4:3:t?3:2}(this.hasZ,this.hasM),{x:r,y:a}=e.point,n="number"==typeof e.distance?e.distance:e.distance.x,o="number"==typeof e.distance?e.distance:e.distance.y,u={candidates:[]},l="esriGeometryPolygon"===this.geometryType,c=this.getPointCreator(e.point,this.spatialReference,t);for(const t of this.items){const h=s.getGeometry(t);if(!h)continue;const{coords:d,lengths:f}=h;if(1&e.types){let e=0;for(let l=0;l<f.length;l++){const h=f[l];for(let l=0;l<h;l++,e+=i){const f=d[e],m=d[e+1];if(l!==h-1){const l=d[e+i],h=d[e+i+1],{x:p,y:y}=fe(r,a,f,m,l,h),g=(r-p)/n,x=(a-y)/o,_=g*g+x*x;_<=1&&u.candidates.push({type:"edge",objectId:s.getObjectId(t),distance:Math.sqrt(_),target:c(p,y),start:c(f,m),end:c(l,h)})}}}}if(2&e.types){const e=l?d.length-i:d.length;for(let l=0;l<e;l+=i){const e=d[l],i=d[l+1],h=(r-e)/n,f=(a-i)/o,m=h*h+f*f;m<=1&&u.candidates.push({type:"vertex",objectId:s.getObjectId(t),distance:Math.sqrt(m),target:c(e,i)})}}}return u.candidates.sort(((e,t)=>e.distance-t.distance)),u}getPointCreator(e,t,s){const i=a(s)&&!r(t,s)?e=>C(e,t,s):e=>e;return null!=e.z&&null!=e.m?(t,s)=>i({x:t,y:s,z:e.z,m:e.m}):null!=e.z?(t,s)=>i({x:t,y:s,z:e.z}):null!=e.m?(t,s)=>i({x:t,y:s,m:e.m}):(e,t)=>i({x:e,y:t})}executeAttributesQuery(e){const t=se(e.where,this.fieldsIndex);if(!t)return Promise.resolve(this);if(t.isStandardized){let s=0;const i=[];for(const e of this.items)t.testFeature(e,this.featureAdapter)&&(i[s++]=e);const r=new de(i,this.queryGeometry,this);return r.definitionExpression=e.where,Promise.resolve(r)}return Promise.reject(new TypeError("Where clause is not standardized"))}executeAggregateIdsQuery(e){if(!e.aggregateIds||!e.aggregateIds.length||s(this.aggregateAdapter))return Promise.resolve(this);const t=new Set;for(const s of e.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(s).forEach((e=>t.add(e)));const i=this.featureAdapter.getObjectId;return Promise.resolve(new de(this.items.filter((e=>t.has(i(e)))),this.queryGeometry,this))}executeObjectIdsQuery(e){if(!e.objectIds||!e.objectIds.length)return Promise.resolve(this);const t=new Set(e.objectIds),s=this.featureAdapter.getObjectId;return Promise.resolve(new de(this.items.filter((e=>t.has(s(e)))),this.queryGeometry,this))}executeTimeQuery(e){const t=G(this.timeInfo,e.timeExtent,this.featureAdapter);if(!a(t))return Promise.resolve(this);const s=this.items.filter(t);return Promise.resolve(new de(s,this.queryGeometry,this))}filterLatest(){const{trackIdField:e,startTimeField:t,endTimeField:s}=this.timeInfo,i=s||t,r=new Map,a=this.featureAdapter.getAttribute;for(const t of this.items){const s=a(t,e),n=a(t,i),o=r.get(s);(!o||n>a(o,i))&&r.set(s,t)}const n=Array.from(r.values());return Promise.resolve(new de(n,this.queryGeometry,this))}async project(e){if(!e||r(this.spatialReference,e))return this;const t=this.featureAdapter,s=(await z(this.items.map((e=>q(this.geometryType,this.hasZ,this.hasM,t.getGeometry(e)))),this.spatialReference,e)).map(((e,s)=>t.cloneWithGeometry(this.items[s],n(e,this.hasZ,this.hasM))));return new de(s,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:e,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,featureAdapter:this.featureAdapter})}async createSummaryStatisticsResponse(e,t){const{field:s,normalizationField:i,normalizationType:r,normalizationTotal:a,minValue:n,maxValue:u}=t,l=new oe(e,this.featureAdapter,this.fieldsIndex),c=this.fieldsIndex.isDateField(s),h=t.valueExpression?await this._getAttributeExpressionValues(l,t.valueExpression,t.viewInfoParams):this._getAttributeNormalizedValues(l,{field:s,normalizationField:i,normalizationType:r,normalizationTotal:a}),d=M({normalizationType:r,normalizationField:i,minValue:n,maxValue:u}),f=o(this.fieldsIndex.get(s))?N({values:h,supportsNullCount:d}):D({values:h,minValue:n,maxValue:u,useSampleStdDev:!r,supportsNullCount:d});return k(f,c)}_sortFeatures(e,t,s){if(e.length>1&&t&&t.length)for(const i of t.reverse()){const t=i.split(" "),r=t[0],a=this.fieldsIndex.get(r),n=t[1]&&"desc"===t[1].toLowerCase();e.sort(((e,t)=>he(s(e,r,a),s(t,r,a),a,n)))}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:r,objectIdField:a,spatialReference:n}=this,{outFields:o,outSR:u,quantizationParameters:l,resultRecordCount:c,resultOffset:h,returnZ:d,returnM:f}=e,m=null!=c&&t.length>(h||0)+c,p=o&&(o.indexOf("*")>-1?[...this.fieldsIndex.fields]:o.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:m,features:this._createFeatures(e,t),fields:p,geometryType:s,hasM:i&&f,hasZ:r&&d,objectIdFieldName:a,spatialReference:O(u||n),transform:l&&E(l)||null}}_createFeatures(e,t){const s=new oe(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:r}=this,{orderByFields:a,quantizationParameters:n,returnGeometry:o,returnCentroid:u,maxAllowableOffset:l,resultOffset:c,resultRecordCount:h,returnZ:d=!1,returnM:f=!1}=e,m=r&&d,p=i&&f;let y=[],g=0;const x=[...t];if(this._sortFeatures(x,a,((e,t,i)=>s.getFieldValue(e,t,i))),o||u){const e=E(n);if(o&&!u)for(const t of x)y[g++]={attributes:s.getAttributes(t),geometry:q(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),l,e,m,p)};else if(!o&&u)for(const t of x)y[g++]={attributes:s.getAttributes(t),centroid:B(this,this.featureAdapter.getCentroid(t,this),e)};else for(const t of x)y[g++]={attributes:s.getAttributes(t),centroid:B(this,this.featureAdapter.getCentroid(t,this),e),geometry:q(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),l,e,m,p)}}else for(const e of x){const t=s.getAttributes(e);t&&(y[g++]={attributes:t})}const _=c||0;if(null!=h){const e=_+h;y=y.slice(_,Math.min(y.length,e))}return y}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY;for(const t of e.outStatistics)if("exceedslimit"===t.statisticType){s=null!=t.maxPointCount?t.maxPointCount:Number.POSITIVE_INFINITY,i=null!=t.maxRecordCount?t.maxRecordCount:Number.POSITIVE_INFINITY,r=null!=t.maxVertexCount?t.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)t=this.items.length>s;else if(this.items.length>i)t=!0;else{const e=this.hasZ?this.hasM?4:3:this.hasM?3:2,s=this.featureAdapter;t=this.items.reduce(((e,t)=>{const i=s.getGeometry(t);return e+(i&&i.coords.length||0)}),0)/e>r}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}_createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,r=new Map,a=new Map,n=new Map,o=new oe(e,this.featureAdapter,this.fieldsIndex),u=e.outStatistics,{groupByFieldsForStatistics:l,having:c,orderByFields:h}=e,d=l&&l.length,f=!!d,m=f&&l[0],p=f&&!this.fieldsIndex.get(m);for(const e of u){const{outStatisticFieldName:u,statisticType:h}=e,y=e,g="exceedslimit"!==h?e.onStatisticField:void 0,x="percentile_disc"===h||"percentile_cont"===h,_=f&&1===d&&(g===m||p)&&"count"===h;if(f){if(!a.has(g)){const e=[];for(const t of l){const s=this._getAttributeValues(o,t,i);e.push(s)}a.set(g,this._calculateUniqueValues(e,o.returnDistinctValues))}const e=a.get(g);for(const t in e){const{count:s,data:r,items:a,itemPositions:h}=e[t],d=r.join(",");if(!c||o.validateItems(a,c)){const e=n.get(d)||{attributes:{}};let t=null;if(_)t=s;else{const e=this._getAttributeValues(o,g,i),s=h.map((t=>e[t]));t=x&&"statisticParameters"in y?this._getPercentileValue(y,s):this._getStatisticValue(y,s)}e.attributes[u]=t,l.forEach(((t,s)=>e.attributes[this.fieldsIndex.get(t)?t:`EXPR_${s+1}`]=r[s])),n.set(d,e)}}}else{const e=this._getAttributeValues(o,g,i);t.attributes[u]=x&&"statisticParameters"in y?this._getPercentileValue(y,e):this._getStatisticValue(y,e,r)}s.push({name:u,alias:u,type:"esriFieldTypeDouble"})}const y=f?Array.from(n.values()):[t];return this._sortFeatures(y,h,((e,t)=>e.attributes[t])),{fields:s,features:y}}_getStatisticValue(e,t,s){const{onStatisticField:i,statisticType:r}=e;let a=null;return a=null!=s&&s.has(i)?s.get(i):o(this.fieldsIndex.get(i))?N({values:t}):D({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(i,a),a["var"===r?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:r}=e,{value:a,orderBy:n}=i,o="desc"===n,u=this.fieldsIndex.get(s),l=[...t].filter((e=>null!=e)).sort(((e,t)=>he(e,t,u,o)));return this._calculatePercentile(l,a,"percentile_disc"===r)}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),r=this.items.map((s=>e.getFieldValue(s,t,i)));return s.set(t,r),r}_getAttributeNormalizedValues(e,t){return this.items.map((s=>e.getNormalizedValue(s,{field:t.field,fieldInfo:this.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal})))}async _getAttributeExpressionValues(e,t,s){const{arcadeUtils:i}=await u(),r=i.createFunction(t),a=s&&i.getViewInfo(s);return this.items.map((t=>e.getExpressionValue(t,{compiledFunc:r,viewInfo:a},i)))}_calculateUniqueValues(e,t){const s={},i=this.items,r=i.length;for(let a=0;a<r;a++){const r=i[a],n=[];for(const t of e)n.push(t[a]);const o=n.join(",");t?null==s[o]&&(s[o]={count:1,data:n,items:[r],itemPositions:[a]}):null==s[o]?s[o]={count:1,data:n,items:[r],itemPositions:[a]}:(s[o].count++,s[o].items.push(r),s[o].itemPositions.push(a))}return s}_calculatePercentile(e,t,s){if(0===e.length)return null;if(t<=0)return e[0];if(t>=1)return e[e.length-1];const i=(e.length-1)*t,r=Math.floor(i),a=r+1,n=i%1,o=e[r],u=e[a];return a>=e.length||s||"string"==typeof o||"string"==typeof u?o:o*(1-n)+u*n}}function fe(e,t,s,i,r,a){const n=r-s,o=a-i,u=n*n+o*o,l=(e-s)*n+(t-i)*o,c=Math.min(1,Math.max(0,l/u));return{x:s+n*c,y:i+o*c}}class me{constructor(){this._tasks=new Array}get length(){return this._tasks.length}push(e,t,s){return new Promise(((i,r)=>this._tasks.push(new pe(i,r,e,t,s))))}unshift(e,t,s){return new Promise(((i,r)=>this._tasks.unshift(new pe(i,r,e,t,s))))}process(){if(0===this._tasks.length)return!1;const e=this._tasks.shift();try{const t=l(e.signal);if(t&&!e.abortCallback)e.reject(c());else{const s=t?e.abortCallback(c()):e.callback();h(s)?s.then(e.resolve,e.reject):e.resolve(s)}}catch(t){e.reject(t)}return!0}cancelAll(){const e=c();for(const t of this._tasks)if(t.abortCallback){const s=t.abortCallback(e);t.resolve(s)}else t.reject(e);this._tasks.length=0}}class pe{constructor(e,t,s,i,r){this.resolve=e,this.reject=t,this.callback=s,this.signal=i,this.abortCallback=r}}let ye=null;const ge="feature-store:unsupported-query",xe=new Set,_e=new d(2e6);let we=0;class Ie{constructor(e){this.capabilities={query:P},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new f(we+++"$$",_e)),this.fieldsIndex=new m(e.fields),e.scheduler&&e.priority&&(this._frameQueue=new me,this._frameTask=e.scheduler.registerTask(e.priority,this))}destroy(){this._frameTask&&(this._frameTask.remove(),this._frameTask=null,this._frameQueue.cancelAll(),this._frameQueue=null),this.clearCache(),this._geometryQueryCache&&this._geometryQueryCache.destroy(),this._changeHandle&&(this._changeHandle.remove(),this._changeHandle=null),this.fieldsIndex.destroy()}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return e?{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:O(this.spatialReference)}:null}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=Z(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){this._geometryQueryCache&&this._geometryQueryCache.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e={},t){let s,i=p(e);try{i=await this._schedule((()=>L(i,this.definitionExpression,this.spatialReference)),t),i=await this._reschedule((()=>this._checkQuerySupport(i)),t),s=await this._reschedule((()=>this._executeGeometryQuery(i,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(i)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(i)),t),s=await this._reschedule((()=>s.executeTimeQuery(i)),t),s=await this._reschedule((()=>s.executeAttributesQuery(i)),t)}catch(e){if(e!==U)throw e;s=new de([],null,this)}return s.createQueryResponse(i)}async executeQueryForCount(e={},t){let s,i=p(e);i.returnGeometry=!1,i.returnCentroid=!1,i.outSR=null;try{i=await this._schedule((()=>L(i,this.definitionExpression,this.spatialReference)),t),i=await this._reschedule((()=>this._checkQuerySupport(i)),t),s=await this._reschedule((()=>this._executeGeometryQuery(i,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(i)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(i)),t),s=await this._reschedule((()=>s.executeTimeQuery(i)),t),s=await this._reschedule((()=>s.executeAttributesQuery(i)),t)}catch(e){if(e!==U)throw e;return 0}return s.createQueryResponseForCount(i)}async executeQueryForExtent(e={},t){let s,i=p(e);const r=i.outSR;try{i=await this._schedule((()=>L(i,this.definitionExpression,this.spatialReference)),t),i=await this._reschedule((()=>this._checkQuerySupport(i)),t),i.returnGeometry=!0,i.returnCentroid=!1,i.outSR=null,s=await this._reschedule((()=>this._executeGeometryQuery(i,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(i)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(i)),t),s=await this._reschedule((()=>s.executeTimeQuery(i)),t),s=await this._reschedule((()=>s.executeAttributesQuery(i)),t);const e=s.size;if(!e)return{count:e,extent:null};A(be,R),this.featureStore.forEachBounds(s.items,(e=>T(be,e)),Se);const a={xmin:be[0],ymin:be[1],xmax:be[3],ymax:be[4],spatialReference:O(this.spatialReference)};this.hasZ&&isFinite(be[2])&&isFinite(be[5])&&(a.zmin=be[2],a.zmax=be[5]);const n=C(a,s.spatialReference,r);if(n.spatialReference=O(r||this.spatialReference),n.xmax-n.xmin==0){const e=y(n.spatialReference);n.xmin-=e,n.xmax+=e}if(n.ymax-n.ymin==0){const e=y(n.spatialReference);n.ymin-=e,n.ymax+=e}if(this.hasZ&&null!=n.zmin&&null!=n.zmax&&n.zmax-n.zmin==0){const e=y(n.spatialReference);n.zmin-=e,n.zmax+=e}return{count:e,extent:n}}catch(e){if(e===U)return{count:0,extent:null};throw e}}async executeQueryForIds(e={},t){return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(e={},t){let s,i=p(e);i.returnGeometry=!1,i.returnCentroid=!1,i.outSR=null;try{i=await this._schedule((()=>L(i,this.definitionExpression,this.spatialReference)),t),i=await this._reschedule((()=>this._checkQuerySupport(i)),t),s=await this._reschedule((()=>this._executeGeometryQuery(i,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(i)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(i)),t),s=await this._reschedule((()=>s.executeTimeQuery(i)),t),s=await this._reschedule((()=>s.executeAttributesQuery(i)),t);const e=s.items,r=new Set;return await this._reschedule((()=>{for(const t of e)r.add(s.featureAdapter.getObjectId(t))}),t),r}catch(e){if(e===U)return new Set;throw e}}async executeQueryForSnapping(e,t){const{point:i,distance:a,types:n}=e;if(0===n)return{candidates:[]};const o=await this._reschedule((()=>this._checkQuerySupport(e.query)),t),u=!r(i.spatialReference,this.spatialReference);u&&await V(i.spatialReference,this.spatialReference);const l="number"==typeof a?a:a.x,c="number"==typeof a?a:a.y,h={xmin:i.x-l,xmax:i.x+l,ymin:i.y-c,ymax:i.y+c,spatialReference:i.spatialReference},d=u?C(h,this.spatialReference):h;if(!d)return{candidates:[]};const f=(await g(x(i),null,{signal:t}))[0],m=(await g(x(d),null,{signal:t}))[0];if(s(f)||s(m))return{candidates:[]};let p=new de(this._searchFeatures(this._getQueryBBoxes(m.toJSON())),null,this);p=await this._reschedule((()=>p.executeObjectIdsQuery(o)),t),p=await this._reschedule((()=>p.executeTimeQuery(o)),t),p=await this._reschedule((()=>p.executeAttributesQuery(o)),t);const y=f.toJSON(),_=u?C(y,this.spatialReference):y,w=u?Math.max(d.xmax-d.xmin,d.ymax-d.ymin)/2:a;return p.createSnappingResponse({...e,point:_,distance:w},i.spatialReference)}async executeQueryForLatestObservations(e={},s){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new t(ge,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});let i,r=p(e);try{r=await this._schedule((()=>L(r,this.definitionExpression,this.spatialReference)),s),r=await this._reschedule((()=>this._checkQuerySupport(r)),s),i=await this._reschedule((()=>this._executeGeometryQuery(r,s)),s),i=await this._reschedule((()=>i.executeAggregateIdsQuery(r)),s),i=await this._reschedule((()=>i.executeObjectIdsQuery(r)),s),i=await this._reschedule((()=>i.executeTimeQuery(r)),s),i=await this._reschedule((()=>i.executeAttributesQuery(r)),s),i=await this._reschedule((()=>i.filterLatest()),s)}catch(e){if(e!==U)throw e;i=new de([],null,this)}return i.createQueryResponse(r)}async executeQueryForSummaryStatistics(e={},t,s){let i;e=p(e);try{e=await this._schedule((()=>L(e,this.definitionExpression,this.spatialReference)),s),e=await this._reschedule((()=>this._checkSummaryStatisticsSupport(e,t)),s),i=await this._reschedule((()=>this._executeGeometryQuery(e,s)),s),i=await this._reschedule((()=>i.executeAggregateIdsQuery(e)),s),i=await this._reschedule((()=>i.executeObjectIdsQuery(e)),s),i=await this._reschedule((()=>i.executeTimeQuery(e)),s),i=await this._reschedule((()=>i.executeAttributesQuery(e)),s)}catch(e){if(e!==U)throw e;i=new de([],null,this)}return i.createSummaryStatisticsResponse(e,t)}async _schedule(e,t){return this._frameQueue?this._frameQueue.push(e,t):e()}async _reschedule(e,t){return this._frameQueue?this._frameQueue.unshift(e,t):e()}get running(){return this._frameQueue.length>0}runTask(e){for(this._budget=e;!e.done&&this._frameQueue&&this._frameQueue.process();)e.madeProgress();this._budget=null}_getAll(){if(!this._allItems){const e=[];this.featureStore.forEach((t=>e.push(t))),this._allItems=new de(e,null,this)}return this._allItems}async _executeGeometryQuery(e,t){const{geometry:s,outSR:a,spatialRel:n,returnGeometry:o,returnCentroid:u}=e,l=o||u,c=i(a)&&!r(this.spatialReference,a),h=this._geometryQueryCache?c&&l?JSON.stringify({geometry:s,spatialRelationship:n,outSpatialReference:a}):JSON.stringify({geometry:s,spatialRelationship:n}):null;if(h){const e=this._geometryQueryCache.get(h);if(!_(e))return e}const d=async e=>{if(c&&l){const t=await e.project(a);return h&&this._geometryQueryCache.put(h,t,t.size||1),t}return h&&this._geometryQueryCache.put(h,e,e.size||1),e};if(!s)return d(this._getAll());const f=this.featureAdapter;if("esriSpatialRelDisjoint"===n){const e=this._searchFeatures(this._getQueryBBoxes(s));if(!e.length)return d(this._getAll());let i,r;const a=new Set;for(const t of e)a.add(f.getObjectId(t));return await this._reschedule((()=>{let e=0;i=new Array(a.size),this.featureStore.forEach((t=>i[e++]=t)),r=a}),t),d(await this._reschedule((async()=>{const e=await $(n,s,this.geometryType,this.hasZ,this.hasM);return new de(await this._runSpatialFilter(i,(t=>!r.has(f.getObjectId(t))||e(f.getGeometry(t))),t),s,this)}),t))}const m=this._searchFeatures(this._getQueryBBoxes(s));if(!m.length){const e=new de([],s,this);return h&&this._geometryQueryCache.put(h,e,e.size||1),e}if(this._canExecuteSoloPass(s,e))return d(new de(m,s,this));const p=await $(n,s,this.geometryType,this.hasZ,this.hasM),y=await this._runSpatialFilter(m,(e=>p(f.getGeometry(e))),t);return d(new de(y,s,this))}async _runSpatialFilter(e,t,s){if(!t)return e;if(!this._budget)return e.filter((e=>t(e)));let i=0;const r=new Array,a=async()=>{for(;i<e.length;){const n=e[i];t(n)&&r.push(n),this._budget.done&&await this._reschedule((()=>a()),s),++i}};return this._reschedule((()=>a()),s).then((()=>r))}_canExecuteSoloPass(e,t){const{geometryType:s}=this,{spatialRel:i}=t;return J(e)&&("esriSpatialRelEnvelopeIntersects"===i||"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===i||"esriSpatialRelContains"===i||"esriSpatialRelWithin"===i))}_getQueryBBoxes(e){if(J(e)){if(w(e))return[I(e.xmin,e.ymin,e.xmax,e.ymax)];if(S(e))return e.rings.map((e=>I(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return[b(F(),e)]}_searchFeatures(e){for(const t of e)this.featureStore.forEachInBounds(t,(e=>{xe.add(e)}));const t=new Array(xe.size);let s=0;return xe.forEach((e=>t[s++]=e)),xe.clear(),t}async _checkSummaryStatisticsSupport(e,s){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new t(ge,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkSummaryStatisticsParamsSupport(s),Y(e,this.geometryType,this.spatialReference),V(this.spatialReference,e.outSR)]).then((()=>e))}async _checkSummaryStatisticsParamsSupport(e){const s=await async function(e){const t=e.field,s=e.normalizationField,i=e.valueExpression;let r=[];if(i){if(!ye){const{arcadeUtils:e}=await u();ye=e}r=ye.extractFieldNames(i)}return t&&r.push(t),s&&r.push(s),r}({field:e.field,normalizationField:e.normalizationField,valueExpression:e.valueExpression});if(!s.length)throw new t(ge,"params should have atleast a field or valueExpression",{params:e});ie(this.fieldsIndex,s,"params contains missing fields")}async _checkQuerySupport(e){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new t(ge,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Y(e,this.geometryType,this.spatialReference),V(this.spatialReference,e.outSR)]).then((()=>e))}_checkAttributesQuerySupport(e){const{outFields:s,orderByFields:i,returnDistinctValues:r,outStatistics:a}=e,n=a?a.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())):[];if(i&&i.length>0){const e=" asc",t=" desc",s=i.map((s=>{const i=s.toLowerCase();return i.indexOf(e)>-1?i.split(e)[0]:i.indexOf(t)>-1?i.split(t)[0]:s})).filter((e=>-1===n.indexOf(e)));ie(this.fieldsIndex,s,"orderByFields contains missing fields")}if(s&&s.length>0)ie(this.fieldsIndex,s,"outFields contains missing fields");else if(r)throw new t(ge,"outFields should be specified for returnDistinctValues",{query:e});ee(this.fieldsIndex,e.where)}async _checkStatisticsQuerySupport(e){const{outStatistics:s,groupByFieldsForStatistics:i,having:r}=e,a=i&&i.length,n=s&&s.length;if(r){if(!a||!n)throw new t(ge,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});te(this.fieldsIndex,r,s)}if(n){if(!function(e){return e.every((e=>"exceedslimit"!==e.statisticType))}(s))return;const r=s.map((e=>e.onStatisticField));ie(this.fieldsIndex,r,"onStatisticFields contains missing fields"),a&&ie(this.fieldsIndex,i,"groupByFieldsForStatistics contains missing fields");for(const i of s){const{onStatisticField:s,statisticType:r}=i;if("percentile_disc"!==r&&"percentile_cont"!==r||!("statisticParameters"in i)){if("count"!==r&&s&&ne(s,this.fieldsIndex))throw new t(ge,"outStatistics contains non-numeric fields",{definition:i,query:e})}else{const{statisticParameters:s}=i;if(!s)throw new t(ge,"statisticParamters should be set for percentile type",{definition:i,query:e})}}}}}const Se=Q(),be=Q();export{Ie as H};