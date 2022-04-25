import{k as e,bp as t,eF as s,r,bu as a,bN as i,bY as n,g as o,e as u,al as p,j as h,s as y}from"../main.js";import{m as l}from"./FeatureStore-b692510b.js";import{g as c,f as m}from"./projectionSupport-8e78150e.js";import{V as g}from"./QueryEngine-aaabba96.js";import{O as _,L as d}from"./geojson-c3700ba2.js";import{d as f}from"./sourceUtils-1a6842c5.js";import{K as w}from"./wfsUtils-e7022e21.js";import"./PooledRBush-226f5baa.js";import"./json-a3f064db.js";import"./WhereClause-5c2059b8.js";import"./QueryEngineCapabilities-ec743cd2.js";import"./spatialQuerySupport-868b13b1.js";import"./xmlUtils-e01d8fb8.js";class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async n=>{const{objectIdField:o}=this._queryEngine,u=await w(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:n});await _(u),e(n);const p=d(u,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:o});if(!t(this._queryEngine.spatialReference,s))for(const e of p)r(e.geometry)&&(e.geometry=a(c(i(e.geometry,this._queryEngine.geometryType,!1,!1),s,this._queryEngine.spatialReference)));let h=1;for(const e of p){const t={};f(this._fieldsIndex,t,e.attributes,!0),e.attributes=t,null==e.attributes[o]&&(e.objectId=e.attributes[o]=h++)}return p}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}async load(t,s){const{getFeatureUrl:r,getFeatureOutputFormat:a,spatialReference:i,fields:u,geometryType:p,featureType:h,objectIdField:y,customParameters:c}=t;this._featureType=h,this._customParameters=c,this._getFeatureUrl=r,this._getFeatureOutputFormat=a,this._fieldsIndex=new n(u),await this._checkProjection(i),e(s),this._queryEngine=new g({fields:u,geometryType:p,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:i,timeInfo:null,featureStore:new l({geometryType:p,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(o(s.signal));return this._queryEngine.featureStore.addMany(m),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,null==(t=this._snapshotTask)||t.abort(),this._snapshotTask=p(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),h(e)||y.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await m(s,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{E as default};
