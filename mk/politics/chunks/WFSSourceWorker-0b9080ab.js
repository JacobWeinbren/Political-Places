import{k as e,bm as t,eP as s,r,br as a,bN as i,bY as n,g as o,e as u,al as p,j as h,s as y}from"../main.js";import{m as l}from"./FeatureStore-3a7a2cdd.js";import{g as c,f as m}from"./projectionSupport-8797065d.js";import{V as g}from"./QueryEngine-2b43e285.js";import{O as _,L as d}from"./geojson-ba991bf5.js";import{d as f}from"./sourceUtils-867b95d2.js";import{K as w}from"./wfsUtils-f30d89cf.js";import"./PooledRBush-4f024b5d.js";import"./json-c16bd509.js";import"./WhereClause-71493fcb.js";import"./QueryEngineCapabilities-745114a9.js";import"./quantizationUtils-6ec6d37f.js";import"./utils-bf62e5a4.js";import"./ClassBreaksDefinition-af56f321.js";import"./spatialQuerySupport-184cd801.js";import"./xmlUtils-52659284.js";class j{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async n=>{const{objectIdField:o}=this._queryEngine,u=await w(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:n});await _(u),e(n);const p=d(u,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:o});if(!t(this._queryEngine.spatialReference,s))for(const e of p)r(e.geometry)&&(e.geometry=a(c(i(e.geometry,this._queryEngine.geometryType,!1,!1),s,this._queryEngine.spatialReference)));let h=1;for(const e of p){const t={};f(this._fieldsIndex,t,e.attributes,!0),e.attributes=t,null==e.attributes[o]&&(e.objectId=e.attributes[o]=h++)}return p}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}async load(t,s){const{getFeatureUrl:r,getFeatureOutputFormat:a,spatialReference:i,fields:u,geometryType:p,featureType:h,objectIdField:y,customParameters:c}=t;this._featureType=h,this._customParameters=c,this._getFeatureUrl=r,this._getFeatureOutputFormat=a,this._fieldsIndex=new n(u),await this._checkProjection(i),e(s),this._queryEngine=new g({fields:u,geometryType:p,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:i,timeInfo:null,featureStore:new l({geometryType:p,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(o(s.signal));return this._queryEngine.featureStore.addMany(m),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,null==(t=this._snapshotTask)||t.abort(),this._snapshotTask=p(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),h(e)||y.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await m(s,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{j as default};
