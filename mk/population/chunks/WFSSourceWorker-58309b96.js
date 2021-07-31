import{k as e,b8 as t,eC as s,bg as r,bH as a,bN as i,bh as n,a as o,ah as u,g as p,n as h}from"../main.js";import{u as l}from"./FeatureStore-3739c541.js";import{y as c,p as y}from"./projectionSupport-c55e65ac.js";import{H as m}from"./QueryEngine-69e27ce0.js";import{I as g,k as d}from"./geojson-6f89f9da.js";import{d as _}from"./sourceUtils-13b031ba.js";import{K as f}from"./wfsUtils-0a9f3127.js";import"./aaBoundingBox-c7007b34.js";import"./PooledRBush-11ee2ffa.js";import"./quickselect-2a5dada6.js";import"./centroid-3acadd71.js";import"./json-c1314431.js";import"./WhereClause-08ccda0b.js";import"./QueryEngineCapabilities-b5b7bcb4.js";import"./quantizationUtils-f6795336.js";import"./utils-c4ed66ad.js";import"./spatialQuerySupport-ba62635a.js";import"./_rollupPluginBabelHelpers-5d875f77.js";class j{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async i=>{const{objectIdField:n}=this._queryEngine,o=await f(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:i});await g(o),e(i);const u=d(o,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:n});if(!t(this._queryEngine.spatialReference,s))for(const e of u)e.geometry&&(e.geometry=r(c(a(e.geometry,this._queryEngine.geometryType,!1,!1),s,this._queryEngine.spatialReference)));let p=1;for(const e of u){const t={};_(this._fieldsIndex,t,e.attributes,null,!0),e.attributes=t,null==e.attributes[n]&&(e.objectId=e.attributes[n]=p++)}return u}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}async load(t,s){const{getFeatureUrl:r,getFeatureOutputFormat:a,spatialReference:o,fields:u,geometryType:p,featureType:h,objectIdField:c,customParameters:y}=t;this._featureType=h,this._customParameters=y,this._getFeatureUrl=r,this._getFeatureOutputFormat=a,this._fieldsIndex=new i(u),await this._checkProjection(o),e(s),this._queryEngine=new m({fields:u,geometryType:p,hasM:!1,hasZ:!1,objectIdField:c,spatialReference:o,timeInfo:null,featureStore:new l({geometryType:p,hasM:!1,hasZ:!1})});const g=await this._snapshotFeatures(n(s.signal));return this._queryEngine.featureStore.addMany(g),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new o("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}setCustomParameters(e){this._customParameters=e}async refresh(){var e;return null==(e=this._snapshotTask)||e.abort(),this._snapshotTask=u(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),p(e)||h.getLogger("esri.layers.WFSLayer").error(new o("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await y(s,e)}catch{throw new o("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{j as default};
