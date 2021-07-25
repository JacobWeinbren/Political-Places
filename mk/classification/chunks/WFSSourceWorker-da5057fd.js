import{k as e,b7 as t,et as s,bj as r,bI as a,bO as i,bk as n,a as o,ah as u,g as p,n as h}from"../main.js";import{u as l}from"./FeatureStore-2dd35647.js";import{y,p as c}from"./quantizationUtils-5453dd7e.js";import{H as m}from"./QueryEngine-b55b79ce.js";import{I as g,k as d}from"./geojson-cc88fcd2.js";import{d as _}from"./sourceUtils-f45b8268.js";import{K as f}from"./wfsUtils-a2bedb90.js";import"./aaBoundingBox-b3e62b2e.js";import"./PooledRBush-5b1c2732.js";import"./quickselect-a0f444ef.js";import"./centroid-7c8c4d46.js";import"./json-47353e48.js";import"./WhereClause-5506a9ff.js";import"./QueryEngineCapabilities-c25b97ec.js";import"./utils-dd682cb8.js";import"./spatialQuerySupport-77f0c08b.js";import"./_rollupPluginBabelHelpers-8be727e6.js";export default class{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async i=>{const{objectIdField:n}=this._queryEngine,o=await f(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:i});await g(o),e(i);const u=d(o,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:n});if(!t(this._queryEngine.spatialReference,s))for(const e of u)e.geometry&&(e.geometry=r(y(a(e.geometry,this._queryEngine.geometryType,!1,!1),s,this._queryEngine.spatialReference)));let p=1;for(const e of u){const t={};_(this._fieldsIndex,t,e.attributes,null,!0),e.attributes=t,null==e.attributes[n]&&(e.objectId=e.attributes[n]=p++)}return u}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}async load(t,s){const{getFeatureUrl:r,getFeatureOutputFormat:a,spatialReference:o,fields:u,geometryType:p,featureType:h,objectIdField:y,customParameters:c}=t;this._featureType=h,this._customParameters=c,this._getFeatureUrl=r,this._getFeatureOutputFormat=a,this._fieldsIndex=new i(u),await this._checkProjection(o),e(s),this._queryEngine=new m({fields:u,geometryType:p,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:o,timeInfo:null,featureStore:new l({geometryType:p,hasM:!1,hasZ:!1})});const g=await this._snapshotFeatures(n(s.signal));return this._queryEngine.featureStore.addMany(g),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new o("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}setCustomParameters(e){this._customParameters=e}async refresh(){var e;return null==(e=this._snapshotTask)||e.abort(),this._snapshotTask=u(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),p(e)||h.getLogger("esri.layers.WFSLayer").error(new o("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await c(s,e)}catch{throw new o("unsupported-projection","Projection not supported",{spatialReference:e})}}}
