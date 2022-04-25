import{eU as e,e as t,t as i,bl as s,bm as a,r,br as n,eV as o,eW as l,eX as u,aE as c,eY as h,d3 as d,eZ as f,dJ as m,e_ as p,bY as y,e$ as g,f0 as x,b3 as _,f1 as w,dK as F,dM as I,c3 as S,cj as R,bO as b,f2 as T,f3 as A,at as v,b9 as Q,au as E,aw as z,an as V}from"../main.js";import{WhereClause as C}from"./WhereClause-3d77583b.js";import{g as G,M as D,f as P}from"./projectionSupport-c358d18a.js";import{t as N}from"./QueryEngineCapabilities-a7990f7e.js";import{s as M}from"./quantizationUtils-a920170a.js";import{T as j,s as O,m as q,c as k,V as B,g as Z,h as L,y as U,D as H,z as Y,f as $,d as J}from"./utils-419feeb7.js";import{z as W,n as X,J as K,O as ee,t as te,P as ie,U as se,v as ae,I as re,a as ne}from"./spatialQuerySupport-38fef4d4.js";const oe=new class{constructor(t,i){this._cache=new e(t),this._invalidCache=new e(i)}get(e,t){const i=`${t.uid}:${e}`,s=this._cache.get(i);if(s)return s;if(void 0!==this._invalidCache.get(i))return null;try{const s=C.create(e,t);return this._cache.put(i,s),s}catch{return this._invalidCache.put(i,null),null}}}(50,500),le="feature-store:unsupported-query",ue=" as ",ce=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function he(e,i){if(!i)return!0;const s=oe.get(i,e);if(!s)throw new t(le,"invalid SQL expression",{where:i});if(!s.isStandardized)throw new t(le,"where clause is not standard",{where:i});return me(e,s.fieldNames,"where clause contains missing fields"),!0}function de(e,i,s){if(!i)return!0;const a=oe.get(i,e);if(!a)throw new t(le,"invalid SQL expression",{having:i});if(!a.isAggregate)throw new t(le,"having does not contain a valid aggregate function",{having:i});const r=a.fieldNames;if(me(e,r,"having contains missing fields"),!a.getExpressions().every((t=>{const{aggregateType:i,field:a}=t,r=e.has(a)&&e.get(a).name;return s.some((t=>{const{onStatisticField:s,statisticType:a}=t;return(e.has(s)&&e.get(s).name)===r&&a.toLowerCase().trim()===i}))})))throw new t(le,"expressions in having should also exist in outStatistics",{having:i});return!0}function fe(e,t){return e?oe.get(e,t):null}function me(e,i,s,a=!0){const r=[];for(const s of i)if("*"!==s&&!e.has(s))if(a){const i=pe(s);try{const s=fe(i,e);if(!s)throw new t(le,"invalid SQL expression",{where:i});if(!s.isStandardized)throw new t(le,"expression is not standard",{clause:s});me(e,s.fieldNames,"expression contains missing fields")}catch(e){const t=e&&e.details;if(t&&(t.clause||t.where))throw e;t&&t.missingFields?r.push(...t.missingFields):r.push(s)}}else r.push(s);if(r.length)throw new t(le,s,{missingFields:r})}function pe(e){return e.split(ue)[0]}function ye(e){return e.split(ue)[1]}function ge(e,t){const i=t.get(e);return!!i&&!ce.has(i.type)}class xe{constructor(e,t,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=i,this.featureAdapter=t;const s=e.outFields;if(s&&-1===s.indexOf("*")){this.outFields=s;let e=0;for(const t of s){const s=pe(t),a=this.fieldsIndex.get(s),r=a?null:fe(s,i),n=a?a.name:ye(t)||"FIELD_EXP_"+e++;this._fieldDataCache.set(t,{alias:n,clause:r})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach((e=>this.getAttributes(e))),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,i){const s=i?i.name:t;let a=null;return this._fieldDataCache.has(s)?a=this._fieldDataCache.get(s).clause:i||(a=fe(t,this.fieldsIndex),this._fieldDataCache.set(s,{alias:s,clause:a})),i?this.featureAdapter.getAttribute(e,s):a.calculateValue(e,this.featureAdapter)}getNormalizedValue(e,t){const i=t.normalizationType,s=t.normalizationTotal;let a=this.getFieldValue(e,t.field,t.fieldInfo);if(i&&Number.isFinite(a)){const r=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);a=j(a,i,r,s)}return a}getExpressionValue(e,t,i){const s={attributes:this.featureAdapter.getAttributes(e)},a=i.createExecContext(s,t.viewInfo);return i.executeFunction(t.compiledFunc,a)}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:fe(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:fe(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const i={};for(const s of t){const{alias:t,clause:a}=this._fieldDataCache.get(s);i[t]=a?a.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,t)}return i}_processAttributesForDistinctValues(e){if(i(e)||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const i of t){const{alias:t}=this._fieldDataCache.get(i);s.push(e[t])}else for(const t in e)s.push(e[t]);const a=`${(t||["*"]).join(",")}=${s.join(",")}`;let r=this._returnDistinctMap.get(a)||0;return this._returnDistinctMap.set(a,++r),r>1?null:e}}class _e{constructor(e,t,i){this.items=e,this.queryGeometry=t,this.definitionExpression=i.definitionExpression,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.fieldsIndex=i.fieldsIndex,this.timeInfo=i.timeInfo,this.featureAdapter=i.featureAdapter,this.aggregateAdapter=i.aggregateAdapter}get size(){return this.items.length}createQueryResponseForCount(e){const t=new xe(e,this.featureAdapter,this.fieldsIndex);if(!e.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:i,having:s}=e;if(!(null==i?void 0:i.length))return 1;const a=new Map,r=new Map,n=new Set,o=e.outStatistics;for(const e of o){const{statisticType:o}=e,l="exceedslimit"!==o?e.onStatisticField:void 0;if(!r.has(l)){const e=[];for(const s of i){const i=this._getAttributeValues(t,s,a);e.push(i)}r.set(l,this._calculateUniqueValues(e,t.returnDistinctValues))}const u=r.get(l);for(const e in u){const{data:i,items:a}=u[e],r=i.join(",");s&&!t.validateItems(a,s)||n.add(r)}}return n.size}async createQueryResponse(e){let t;return t=e.outStatistics?e.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse(e):await this._createStatisticsQueryResponse(e):this._createFeatureQueryResponse(e),e.returnQueryGeometry&&(s(e.outSR)&&!a(this.queryGeometry.spatialReference,e.outSR)?t.queryGeometry=W({spatialReference:e.outSR,...G(this.queryGeometry,this.queryGeometry.spatialReference,e.outSR)}):t.queryGeometry=W({spatialReference:e.outSR,...this.queryGeometry})),t}createSnappingResponse(e,t){const s=this.featureAdapter,a=function(e,t){return e?t?4:3:t?3:2}(this.hasZ,this.hasM),{x:r,y:n}=e.point,o="number"==typeof e.distance?e.distance:e.distance.x,l="number"==typeof e.distance?e.distance:e.distance.y,u={candidates:[]},c="esriGeometryPolygon"===this.geometryType,h=this._getPointCreator(e.point,this.spatialReference,t);for(const t of this.items){const d=s.getGeometry(t);if(i(d))continue;const{coords:f,lengths:m}=d;if(e.types&Fe.EDGE){let e=0;for(let i=0;i<m.length;i++){const c=m[i];for(let i=0;i<c;i++,e+=a){const d=f[e],m=f[e+1];if(i!==c-1){const i=f[e+a],c=f[e+a+1],{x:p,y:y}=we(r,n,d,m,i,c),g=(r-p)/o,x=(n-y)/l,_=g*g+x*x;_<=1&&u.candidates.push({type:"edge",objectId:s.getObjectId(t),distance:Math.sqrt(_),target:h(p,y),start:h(d,m),end:h(i,c)})}}}}if(e.types&Fe.VERTEX){const e=c?f.length-a:f.length;for(let i=0;i<e;i+=a){const e=f[i],a=f[i+1],c=(r-e)/o,d=(n-a)/l,m=c*c+d*d;m<=1&&u.candidates.push({type:"vertex",objectId:s.getObjectId(t),distance:Math.sqrt(m),target:h(e,a)})}}}return u.candidates.sort(((e,t)=>e.distance-t.distance)),u}_getPointCreator(e,t,i){const s=r(i)&&!a(t,i)?e=>G(e,t,i):e=>e;return null!=e.z&&null!=e.m?(t,i)=>s({x:t,y:i,z:e.z,m:e.m}):null!=e.z?(t,i)=>s({x:t,y:i,z:e.z}):null!=e.m?(t,i)=>s({x:t,y:i,m:e.m}):(e,t)=>s({x:e,y:t})}executeAttributesQuery(e){const t=fe(e.where,this.fieldsIndex);if(!t)return Promise.resolve(this);if(t.isStandardized){let i=0;const s=[];for(const e of this.items)t.testFeature(e,this.featureAdapter)&&(s[i++]=e);const a=new _e(s,this.queryGeometry,this);return a.definitionExpression=e.where,Promise.resolve(a)}return Promise.reject(new TypeError("Where clause is not standardized"))}executeAggregateIdsQuery(e){if(!e.aggregateIds||!e.aggregateIds.length||i(this.aggregateAdapter))return Promise.resolve(this);const t=new Set;for(const i of e.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach((e=>t.add(e)));const s=this.featureAdapter.getObjectId;return Promise.resolve(new _e(this.items.filter((e=>t.has(s(e)))),this.queryGeometry,this))}executeObjectIdsQuery(e){if(!e.objectIds||!e.objectIds.length)return Promise.resolve(this);const t=new Set(e.objectIds),i=this.featureAdapter.getObjectId;return Promise.resolve(new _e(this.items.filter((e=>t.has(i(e)))),this.queryGeometry,this))}executeTimeQuery(e){const t=X(this.timeInfo,e.timeExtent,this.featureAdapter);if(!r(t))return Promise.resolve(this);const i=this.items.filter(t);return Promise.resolve(new _e(i,this.queryGeometry,this))}filterLatest(){const{trackIdField:e,startTimeField:t,endTimeField:i}=this.timeInfo,s=i||t,a=new Map,r=this.featureAdapter.getAttribute;for(const t of this.items){const i=r(t,e),n=r(t,s),o=a.get(i);(!o||n>r(o,s))&&a.set(i,t)}const n=Array.from(a.values());return Promise.resolve(new _e(n,this.queryGeometry,this))}async project(e){if(!e||a(this.spatialReference,e))return this;const t=this.featureAdapter,i=(await D(this.items.map((e=>K(this.geometryType,this.hasZ,this.hasM,t.getGeometry(e)))),this.spatialReference,e)).map(((e,i)=>t.cloneWithGeometry(this.items[i],n(e,this.hasZ,this.hasM))));return new _e(i,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:e,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,featureAdapter:this.featureAdapter})}async createSummaryStatisticsResponse(e,t){const{field:i,valueExpression:s,normalizationField:a,normalizationType:r,normalizationTotal:n,minValue:l,maxValue:u,scale:c}=t,h=this.fieldsIndex.isDateField(i),d=await this._getDataValues(e,{field:i,valueExpression:s,normalizationField:a,normalizationType:r,normalizationTotal:n,scale:c}),f=O({normalizationType:r,normalizationField:a,minValue:l,maxValue:u}),m=this.fieldsIndex.get(i),p={value:.5,fieldType:null==m?void 0:m.type},y=o(m)?q({values:d,supportsNullCount:f,percentileParams:p}):k({values:d,minValue:l,maxValue:u,useSampleStdDev:!r,supportsNullCount:f,percentileParams:p});return B(y,h)}async createUniqueValuesResponse(e,t){const{field:i,valueExpression:s,domain:a,returnAllCodedValues:r,scale:n}=t,o=await this._getDataValues(e,{field:i,valueExpression:s,scale:n}),l=Z(o);return L(l,a,r)}async createClassBreaksResponse(e,t){const{field:i,valueExpression:s,normalizationField:a,normalizationType:r,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:h,scale:d}=t,f=await this._getDataValues(e,{field:i,valueExpression:s,normalizationField:a,normalizationType:r,normalizationTotal:n,scale:d}),m=U(f,{field:i,normalizationField:a,normalizationType:r,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:h});return H(m,o)}async createHistogramResponse(e,t){const{field:i,valueExpression:s,normalizationField:a,normalizationType:r,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:h,scale:d}=t,f=await this._getDataValues(e,{field:i,valueExpression:s,normalizationField:a,normalizationType:r,normalizationTotal:n,scale:d});return Y(f,{field:i,normalizationField:a,normalizationType:r,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:h})}_sortFeatures(e,t,i){if(e.length>1&&t&&t.length)for(const s of t.reverse()){const t=s.split(" "),a=t[0],r=this.fieldsIndex.get(a),n=t[1]&&"desc"===t[1].toLowerCase(),o=$(null==r?void 0:r.type,n);e.sort(((e,t)=>{const s=i(e,a,r),n=i(t,a,r);return o(s,n)}))}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:i,hasM:s,hasZ:a,objectIdField:r,spatialReference:n}=this,{outFields:o,outSR:l,quantizationParameters:u,resultRecordCount:c,resultOffset:h,returnZ:d,returnM:f}=e,m=null!=c&&t.length>(h||0)+c,p=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:m,features:this._createFeatures(e,t),fields:p,geometryType:i,hasM:s&&f,hasZ:a&&d,objectIdFieldName:r,spatialReference:W(l||n),transform:u&&M(u)||null}}_createFeatures(e,t){const i=new xe(e,this.featureAdapter,this.fieldsIndex),{hasM:s,hasZ:a}=this,{orderByFields:r,quantizationParameters:n,returnGeometry:o,returnCentroid:l,maxAllowableOffset:u,resultOffset:c,resultRecordCount:h,returnZ:d=!1,returnM:f=!1}=e,m=a&&d,p=s&&f;let y=[],g=0;const x=[...t];if(this._sortFeatures(x,r,((e,t,s)=>i.getFieldValue(e,t,s))),o||l){const e=M(n);if(o&&!l)for(const t of x)y[g++]={attributes:i.getAttributes(t),geometry:K(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),u,e,m,p)};else if(!o&&l)for(const t of x)y[g++]={attributes:i.getAttributes(t),centroid:ee(this,this.featureAdapter.getCentroid(t,this),e)};else for(const t of x)y[g++]={attributes:i.getAttributes(t),centroid:ee(this,this.featureAdapter.getCentroid(t,this),e),geometry:K(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),u,e,m,p)}}else for(const e of x){const t=i.getAttributes(e);t&&(y[g++]={attributes:t})}const _=c||0;if(null!=h){const e=_+h;y=y.slice(_,Math.min(y.length,e))}return y}_createExceedsLimitQueryResponse(e){let t=!1,i=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const t of e.outStatistics)if("exceedslimit"===t.statisticType){i=null!=t.maxPointCount?t.maxPointCount:Number.POSITIVE_INFINITY,s=null!=t.maxRecordCount?t.maxRecordCount:Number.POSITIVE_INFINITY,a=null!=t.maxVertexCount?t.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)t=this.items.length>i;else if(this.items.length>s)t=!0;else{const e=this.hasZ?this.hasM?4:3:this.hasM?3:2,i=this.featureAdapter;t=this.items.reduce(((e,t)=>{const s=i.getGeometry(t);return e+(r(s)&&s.coords.length||0)}),0)/e>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},i=[],s=new Map,a=new Map,r=new Map,n=new Map,o=new xe(e,this.featureAdapter,this.fieldsIndex),l=e.outStatistics,{groupByFieldsForStatistics:u,having:c,orderByFields:h}=e,d=u&&u.length,f=!!d,m=f&&u[0],p=f&&!this.fieldsIndex.get(m);for(const e of l){const{outStatisticFieldName:l,statisticType:h}=e,y=e,g="exceedslimit"!==h?e.onStatisticField:void 0,x="percentile_disc"===h||"percentile_cont"===h,_="EnvelopeAggregate"===h||"CentroidAggregate"===h||"ConvexHullAggregate"===h,w=f&&1===d&&(g===m||p)&&"count"===h;if(f){if(!r.has(g)){const e=[];for(const t of u){const i=this._getAttributeValues(o,t,s);e.push(i)}r.set(g,this._calculateUniqueValues(e,o.returnDistinctValues))}const e=r.get(g);for(const t in e){const{count:i,data:a,items:r,itemPositions:h}=e[t],d=a.join(",");if(!c||o.validateItems(r,c)){const e=n.get(d)||{attributes:{}};if(_){e.aggregateGeometries||(e.aggregateGeometries={});const{aggregateGeometries:t,outStatisticFieldName:i}=await this._getAggregateGeometry(y,r);e.aggregateGeometries[i]=t}else{let t=null;if(w)t=i;else{const e=this._getAttributeValues(o,g,s),i=h.map((t=>e[t]));t=x&&"statisticParameters"in y?this._getPercentileValue(y,i):this._getStatisticValue(y,i,null,o.returnDistinctValues)}e.attributes[l]=t}u.forEach(((t,i)=>e.attributes[this.fieldsIndex.get(t)?t:`EXPR_${i+1}`]=a[i])),n.set(d,e)}}}else if(_){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:i}=await this._getAggregateGeometry(y,this.items);t.aggregateGeometries[i]=e}else{const e=this._getAttributeValues(o,g,s);t.attributes[l]=x&&"statisticParameters"in y?this._getPercentileValue(y,e):this._getStatisticValue(y,e,a,o.returnDistinctValues)}i.push({name:l,alias:l,type:"esriFieldTypeDouble"})}const y=f?Array.from(n.values()):[t];return this._sortFeatures(y,h,((e,t)=>e.attributes[t])),{fields:i,features:y}}async _getAggregateGeometry(e,t){const i=await import("./geometryEngineJSON-f51fca68.js"),{statisticType:s,outStatisticFieldName:a}=e,{featureAdapter:r,spatialReference:n,geometryType:o,hasZ:d,hasM:f}=this,m=t.map((e=>K(o,d,f,r.getGeometry(e)))),p=i.convexHull(n,m,!0)[0],y={aggregateGeometries:null,outStatisticFieldName:null};if("EnvelopeAggregate"===s){const e=p?l(p):u(i.union(n,m));y.aggregateGeometries={...e,spatialReference:n},y.outStatisticFieldName=a||"extent"}else if("CentroidAggregate"===s){const e=p?c(p):h(u(i.union(n,m)));y.aggregateGeometries={x:e[0],y:e[1],spatialReference:n},y.outStatisticFieldName=a||"centroid"}else"ConvexHullAggregate"===s&&(y.aggregateGeometries=p,y.outStatisticFieldName=a||"convexHull");return y}_getStatisticValue(e,t,i,s){const{onStatisticField:a,statisticType:r}=e;let n=null;return n=null!=i&&i.has(a)?i.get(a):o(this.fieldsIndex.get(a))?q({values:t,returnDistinct:s}):k({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(a,n),n["var"===r?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:i,statisticParameters:s,statisticType:a}=e,{value:r,orderBy:n}=s,o=this.fieldsIndex.get(i),l={value:r,orderBy:n,fieldType:null==o?void 0:o.type,isDiscrete:"percentile_disc"===a};return J(t,l)}_getAttributeValues(e,t,i){if(i.has(t))return i.get(t);const s=this.fieldsIndex.get(t),a=this.items.map((i=>e.getFieldValue(i,t,s)));return i.set(t,a),a}_getAttributeNormalizedValues(e,t){return this.items.map((i=>e.getNormalizedValue(i,{field:t.field,fieldInfo:this.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal})))}async _getAttributeExpressionValues(e,t,i){const{arcadeUtils:s}=await d(),a=s.createFunction(t),r=i&&s.getViewInfo(i);return this.items.map((t=>e.getExpressionValue(t,{compiledFunc:a,viewInfo:r},s)))}_calculateUniqueValues(e,t){const i={},s=this.items,a=s.length;for(let r=0;r<a;r++){const a=s[r],n=[];for(const t of e)n.push(t[r]);const o=n.join(",");t?null==i[o]&&(i[o]={count:1,data:n,items:[a],itemPositions:[r]}):null==i[o]?i[o]={count:1,data:n,items:[a],itemPositions:[r]}:(i[o].count++,i[o].items.push(a),i[o].itemPositions.push(r))}return i}async _getDataValues(e,t){const i=new xe(e,this.featureAdapter,this.fieldsIndex),{valueExpression:s,field:a,normalizationField:r,normalizationType:n,normalizationTotal:o,scale:l}=t,u=s?{viewingMode:"map",scale:l,spatialReference:e.outSR||this.spatialReference}:null;return s?this._getAttributeExpressionValues(i,s,u):this._getAttributeNormalizedValues(i,{field:a,normalizationField:r,normalizationType:n,normalizationTotal:o})}}function we(e,t,i,s,a,r){const n=a-i,o=r-s,l=n*n+o*o,u=(e-i)*n+(t-s)*o,c=Math.min(1,Math.max(0,u/l));return{x:i+n*c,y:s+o*c}}var Fe;!function(e){e[e.NONE=0]="NONE",e[e.EDGE=1]="EDGE",e[e.VERTEX=2]="VERTEX"}(Fe||(Fe={}));const Ie="feature-store:unsupported-query",Se=new Set,Re=new f(2e6);let be=0;class Te{constructor(e){this.capabilities={query:N},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new p(be+++"$$",Re)),this.fieldsIndex=new y(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=g(this._frameTask),this.clearCache(),x(this._geometryQueryCache),this._changeHandle=g(this._changeHandle),x(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return e?{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:W(this.spatialReference)}:null}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=te(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){this._geometryQueryCache&&this._geometryQueryCache.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e={},t){let i,s=_(e);try{s=await this._schedule((()=>ie(s,this.definitionExpression,this.spatialReference)),t),s=await this._reschedule((()=>this._checkQuerySupport(s)),t),i=await this._reschedule((()=>this._executeGeometryQuery(s,t)),t),i=await this._reschedule((()=>i.executeAggregateIdsQuery(s)),t),i=await this._reschedule((()=>i.executeObjectIdsQuery(s)),t),i=await this._reschedule((()=>i.executeTimeQuery(s)),t),i=await this._reschedule((()=>i.executeAttributesQuery(s)),t)}catch(e){if(e!==se)throw e;i=new _e([],null,this)}return i.createQueryResponse(s)}async executeQueryForCount(e={},t){let i=_(e);i.returnGeometry=!1,i.returnCentroid=!1,i.outSR=null;try{i=await this._schedule((()=>ie(i,this.definitionExpression,this.spatialReference)),t),i=await this._reschedule((()=>this._checkQuerySupport(i)),t);let e=await this._reschedule((()=>this._executeGeometryQuery(i,t)),t);return e=await this._reschedule((()=>e.executeAggregateIdsQuery(i)),t),e=await this._reschedule((()=>e.executeObjectIdsQuery(i)),t),e=await this._reschedule((()=>e.executeTimeQuery(i)),t),e=await this._reschedule((()=>e.executeAttributesQuery(i)),t),e.createQueryResponseForCount(i)}catch(e){if(e!==se)throw e;return 0}}async executeQueryForExtent(e={},t){let i,s=_(e);const a=s.outSR;try{s=await this._schedule((()=>ie(s,this.definitionExpression,this.spatialReference)),t),s=await this._reschedule((()=>this._checkQuerySupport(s)),t),s.returnGeometry=!0,s.returnCentroid=!1,s.outSR=null,i=await this._reschedule((()=>this._executeGeometryQuery(s,t)),t),i=await this._reschedule((()=>i.executeAggregateIdsQuery(s)),t),i=await this._reschedule((()=>i.executeObjectIdsQuery(s)),t),i=await this._reschedule((()=>i.executeTimeQuery(s)),t),i=await this._reschedule((()=>i.executeAttributesQuery(s)),t);const e=i.size;if(!e)return{count:e,extent:null};w(ve,F),this.featureStore.forEachBounds(i.items,(e=>I(ve,e)),Ae);const r={xmin:ve[0],ymin:ve[1],xmax:ve[3],ymax:ve[4],spatialReference:W(this.spatialReference)};this.hasZ&&isFinite(ve[2])&&isFinite(ve[5])&&(r.zmin=ve[2],r.zmax=ve[5]);const n=G(r,i.spatialReference,a);if(n.spatialReference=W(a||this.spatialReference),n.xmax-n.xmin==0){const e=S(n.spatialReference);n.xmin-=e,n.xmax+=e}if(n.ymax-n.ymin==0){const e=S(n.spatialReference);n.ymin-=e,n.ymax+=e}if(this.hasZ&&null!=n.zmin&&null!=n.zmax&&n.zmax-n.zmin==0){const e=S(n.spatialReference);n.zmin-=e,n.zmax+=e}return{count:e,extent:n}}catch(e){if(e===se)return{count:0,extent:null};throw e}}async executeQueryForIds(e={},t){return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(e={},t){let i,s=_(e);s.returnGeometry=!1,s.returnCentroid=!1,s.outSR=null;try{s=await this._schedule((()=>ie(s,this.definitionExpression,this.spatialReference)),t),s=await this._reschedule((()=>this._checkQuerySupport(s)),t),i=await this._reschedule((()=>this._executeGeometryQuery(s,t)),t),i=await this._reschedule((()=>i.executeAggregateIdsQuery(s)),t),i=await this._reschedule((()=>i.executeObjectIdsQuery(s)),t),i=await this._reschedule((()=>i.executeTimeQuery(s)),t),i=await this._reschedule((()=>i.executeAttributesQuery(s)),t);const e=i.items,a=new Set;return await this._reschedule((()=>{for(const t of e)a.add(i.featureAdapter.getObjectId(t))}),t),a}catch(e){if(e===se)return new Set;throw e}}async executeQueryForSnapping(e,t){const{point:s,distance:r,types:n}=e;if(n===Fe.NONE)return{candidates:[]};const o=await this._reschedule((()=>this._checkQuerySupport(e.query)),t),l=!a(s.spatialReference,this.spatialReference);l&&await P(s.spatialReference,this.spatialReference);const u="number"==typeof r?r:r.x,c="number"==typeof r?r:r.y,h={xmin:s.x-u,xmax:s.x+u,ymin:s.y-c,ymax:s.y+c,spatialReference:s.spatialReference},d=l?G(h,this.spatialReference):h;if(!d)return{candidates:[]};const f=(await R(b(s),null,{signal:t}))[0],m=(await R(b(d),null,{signal:t}))[0];if(i(f)||i(m))return{candidates:[]};let p=new _e(this._searchFeatures(this._getQueryBBoxes(m.toJSON())),null,this);p=await this._reschedule((()=>p.executeObjectIdsQuery(o)),t),p=await this._reschedule((()=>p.executeTimeQuery(o)),t),p=await this._reschedule((()=>p.executeAttributesQuery(o)),t);const y=f.toJSON(),g=l?G(y,this.spatialReference):y,x=l?Math.max(d.xmax-d.xmin,d.ymax-d.ymin)/2:r;return p.createSnappingResponse({...e,point:g,distance:x},s.spatialReference)}async executeQueryForLatestObservations(e={},i){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new t(Ie,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});let s,a=_(e);try{a=await this._schedule((()=>ie(a,this.definitionExpression,this.spatialReference)),i),a=await this._reschedule((()=>this._checkQuerySupport(a)),i),s=await this._reschedule((()=>this._executeGeometryQuery(a,i)),i),s=await this._reschedule((()=>s.executeAggregateIdsQuery(a)),i),s=await this._reschedule((()=>s.executeObjectIdsQuery(a)),i),s=await this._reschedule((()=>s.executeTimeQuery(a)),i),s=await this._reschedule((()=>s.executeAttributesQuery(a)),i),s=await this._reschedule((()=>s.filterLatest()),i)}catch(e){if(e!==se)throw e;s=new _e([],null,this)}return s.createQueryResponse(a)}async executeQueryForSummaryStatistics(e={},t,i){const{field:s,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:a,valueExpression:r},i)).createSummaryStatisticsResponse(e,t)}async executeQueryForUniqueValues(e={},t,i){const{field:s,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:s,valueExpression:a},i)).createUniqueValuesResponse(e,t)}async executeQueryForClassBreaks(e={},t,i){const{field:s,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:a,valueExpression:r},i)).createClassBreaksResponse(e,t)}async executeQueryForHistogram(e={},t,i){const{field:s,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:a,valueExpression:r},i)).createHistogramResponse(e,t)}async _schedule(e,t){return r(this._frameTask)?this._frameTask.schedule(e,t):e(T)}async _reschedule(e,t){return r(this._frameTask)?this._frameTask.reschedule(e,t):e(T)}_getAll(){if(!this._allItems){const e=[];this.featureStore.forEach((t=>e.push(t))),this._allItems=new _e(e,null,this)}return this._allItems}async _executeGeometryQuery(e,t){const{geometry:i,outSR:r,spatialRel:n,returnGeometry:o,returnCentroid:l}=e,u=this.featureStore.featureSpatialReference,c=i&&u&&u!==i.spatialReference?G(i,u):i,h=o||l,d=s(r)&&!a(this.spatialReference,r),f=this._geometryQueryCache?d&&h?JSON.stringify({originalFilterGeometry:i,spatialRelationship:n,outSpatialReference:r}):JSON.stringify({originalFilterGeometry:i,spatialRelationship:n}):null;if(f){const e=this._geometryQueryCache.get(f);if(!A(e))return e}const m=async e=>{if(d&&h){const t=await e.project(r);return f&&this._geometryQueryCache.put(f,t,t.size||1),t}return f&&this._geometryQueryCache.put(f,e,e.size||1),e};if(!c)return m(this._getAll());const p=this.featureAdapter;if("esriSpatialRelDisjoint"===n){const e=this._searchFeatures(this._getQueryBBoxes(i));if(!e.length)return m(this._getAll());let s,a;const r=new Set;for(const t of e)r.add(p.getObjectId(t));await this._reschedule((()=>{let e=0;s=new Array(r.size),this.featureStore.forEach((t=>s[e++]=t)),a=r}),t);const o=await this._reschedule((async()=>{const e=await ae(n,c,this.geometryType,this.hasZ,this.hasM);return new _e(await this._runSpatialFilter(s,(t=>!a.has(p.getObjectId(t))||e(p.getGeometry(t))),t),i,this)}),t);return m(o)}const y=this._searchFeatures(this._getQueryBBoxes(i));if(!y.length){const e=new _e([],i,this);return f&&this._geometryQueryCache.put(f,e,e.size||1),e}if(this._canExecuteSoloPass(c,e))return m(new _e(y,i,this));const g=await ae(n,c,this.geometryType,this.hasZ,this.hasM),x=await this._runSpatialFilter(y,(e=>g(p.getGeometry(e))),t);return m(new _e(x,i,this))}async _runSpatialFilter(e,t,s){if(!t)return e;if(i(this._frameTask))return e.filter((e=>t(e)));let a=0;const r=new Array,n=async i=>{for(;a<e.length;){const o=e[a++];t(o)&&(r.push(o),i.madeProgress()),i.done&&await this._reschedule((e=>n(e)),s)}};return this._reschedule((e=>n(e)),s).then((()=>r))}_canExecuteSoloPass(e,t){const{geometryType:i}=this,{spatialRel:s}=t;return re(e)&&("esriSpatialRelEnvelopeIntersects"===s||"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===s||"esriSpatialRelContains"===s||"esriSpatialRelWithin"===s))}_getQueryBBoxes(e){if(re(e)){if(v(e))return[Q(e.xmin,e.ymin,e.xmax,e.ymax)];if(E(e))return e.rings.map((e=>Q(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return[z(V(),e)]}_searchFeatures(e){for(const t of e)this.featureStore.forEachInBounds(t,(e=>{Se.add(e)}));const t=new Array(Se.size);let i=0;return Se.forEach((e=>t[i++]=e)),Se.clear(),t}async _checkStatisticsSupport(e,i){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new t(Ie,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkStatisticsParamsSupport(i),ne(e,this.geometryType,this.spatialReference),P(this.spatialReference,e.outSR)]).then((()=>e))}async _checkStatisticsParamsSupport(e){let i=[];if(e.valueExpression){const{arcadeUtils:t}=await d();i=t.extractFieldNames(e.valueExpression)}if(e.field&&i.push(e.field),e.normalizationField&&i.push(e.normalizationField),!i.length)throw new t(Ie,"params should have at least a field or valueExpression",{params:e});me(this.fieldsIndex,i,"params contains missing fields")}async _checkQuerySupport(e){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new t(Ie,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),ne(e,this.geometryType,this.spatialReference),P(this.spatialReference,e.outSR)]).then((()=>e))}_checkAttributesQuerySupport(e){const{outFields:i,orderByFields:s,returnDistinctValues:a,outStatistics:r}=e,n=r?r.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())).filter(Boolean):[];if(s&&s.length>0){const e=" asc",t=" desc",i=s.map((i=>{const s=i.toLowerCase();return s.indexOf(e)>-1?s.split(e)[0]:s.indexOf(t)>-1?s.split(t)[0]:i})).filter((e=>-1===n.indexOf(e)));me(this.fieldsIndex,i,"orderByFields contains missing fields")}if(i&&i.length>0)me(this.fieldsIndex,i,"outFields contains missing fields");else if(a)throw new t(Ie,"outFields should be specified for returnDistinctValues",{query:e});he(this.fieldsIndex,e.where)}async _checkStatisticsQuerySupport(e){const{outStatistics:i,groupByFieldsForStatistics:s,having:a}=e,r=s&&s.length,n=i&&i.length;if(a){if(!r||!n)throw new t(Ie,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});de(this.fieldsIndex,a,i)}if(n){if(!function(e){return e.every((e=>"exceedslimit"!==e.statisticType))}(i))return;const a=i.map((e=>e.onStatisticField)).filter(Boolean);me(this.fieldsIndex,a,"onStatisticFields contains missing fields"),r&&me(this.fieldsIndex,s,"groupByFieldsForStatistics contains missing fields");for(const s of i){const{onStatisticField:i,statisticType:a}=s;if("percentile_disc"!==a&&"percentile_cont"!==a||!("statisticParameters"in s)){if("count"!==a&&i&&ge(i,this.fieldsIndex))throw new t(Ie,"outStatistics contains non-numeric fields",{definition:s,query:e})}else{const{statisticParameters:i}=s;if(!i)throw new t(Ie,"statisticParamters should be set for percentile type",{definition:s,query:e})}}}}async _getQueryEngineResultForStats(e={},t,i){let s;e=_(e);try{e=await this._schedule((()=>ie(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>this._checkStatisticsSupport(e,t)),i),s=await this._reschedule((()=>this._executeGeometryQuery(e,i)),i),s=await this._reschedule((()=>s.executeAggregateIdsQuery(e)),i),s=await this._reschedule((()=>s.executeObjectIdsQuery(e)),i),s=await this._reschedule((()=>s.executeTimeQuery(e)),i),s=await this._reschedule((()=>s.executeAttributesQuery(e)),i)}catch(e){if(e!==se)throw e;s=new _e([],null,this)}return s}}const Ae=m(),ve=m();export{Te as V};