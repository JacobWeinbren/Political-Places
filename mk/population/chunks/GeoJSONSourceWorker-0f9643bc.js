import{eP as e,e as t,gl as s,eN as i,bY as n,al as r,j as a,s as o,bm as l,r as u,br as d,bN as p,C as c,aC as h,bP as y,bR as m,gm as f}from"../main.js";import{m as g}from"./FeatureStore-b50d11be.js";import{f as _,g as b}from"./projectionSupport-c358d18a.js";import{V as I}from"./QueryEngine-bf965bc0.js";import{T as j,L as E,O as F}from"./geojson-822dfc27.js";import{n as w,l as T,a as q}from"./clientSideDefaults-1a221598.js";import{y as x,d as S,c as R,u as C,h as k}from"./sourceUtils-159a1b91.js";import"./PooledRBush-7aa506e5.js";import"./json-ebcd0345.js";import"./WhereClause-3d77583b.js";import"./QueryEngineCapabilities-a7990f7e.js";import"./quantizationUtils-a920170a.js";import"./utils-419feeb7.js";import"./ClassBreaksDefinition-cdb4d81e.js";import"./spatialQuerySupport-38fef4d4.js";const D={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class O{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(r,a={}){this.loadOptions={url:r.url,customParameters:r.customParameters};const o=[];await this._checkProjection(r.spatialReference);let l=null;r.url&&(l=await this._fetch(null==a?void 0:a.signal));const u=j(l,{geometryType:r.geometryType}),d=r.fields||u.fields||[],p=null!=r.hasZ?r.hasZ:u.hasZ,c=u.geometryType,h=r.objectIdField||u.objectIdFieldName||"__OBJECTID",y=r.spatialReference||e;let m=r.timeInfo;d===u.fields&&u.unknownFields.length>0&&o.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:u.unknownFields}});let f=d.find((e=>e.name===h));f?("esriFieldTypeString"!==f.type&&(f.type="esriFieldTypeOID"),f.editable=!1,f.nullable=!1):(f={alias:h,name:h,type:"string"===u.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},d.unshift(f));const _={};for(const e of d){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new t("geojson-layer:invalid-field-name","field name is missing",{field:e});if(!s.jsonValues.includes(e.type))throw new t("geojson-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e});if(e.name!==f.name){const t=i(e);void 0!==t&&(_[e.name]=t)}}this._fieldsIndex=new n(d);const b=this._fieldsIndex.requiredFields.indexOf(f);if(b>-1&&this._fieldsIndex.requiredFields.splice(b,1),m){if(m.startTimeField){const e=this._fieldsIndex.get(m.startTimeField);e?(m.startTimeField=e.name,e.type="esriFieldTypeDate"):m.startTimeField=null}if(m.endTimeField){const e=this._fieldsIndex.get(m.endTimeField);e?(m.endTimeField=e.name,e.type="esriFieldTypeDate"):m.endTimeField=null}if(m.trackIdField){const e=this._fieldsIndex.get(m.trackIdField);e?m.trackIdField=e.name:(m.trackIdField=null,o.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:m}}))}m.startTimeField||m.endTimeField||(o.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:m}}),m=null)}const E=c?w(c):null,F={warnings:o,featureErrors:[],layerDefinition:{...D,drawingInfo:E,templates:T(_),extent:null,geometryType:c,objectIdField:h,fields:d,hasZ:!!p,timeInfo:m}};this._queryEngine=new I({fields:d,geometryType:c,hasM:!1,hasZ:p,objectIdField:h,spatialReference:y,timeInfo:m,featureStore:new g({geometryType:c,hasM:!1,hasZ:p}),cacheSpatialQueries:!0}),this._createDefaultAttributes=q(_,h);const x=await this._createFeatures(l);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const S=this._normalizeFeatures(x,F.warnings,F.featureErrors);if(this._queryEngine.featureStore.addMany(S),F.layerDefinition.extent=this._queryEngine.fullExtent,F.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;F.layerDefinition.timeInfo.timeExtent=[e,t]}return F}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([x(t,s),_(e.adds,t),_(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var s;return this.loadOptions.customParameters=e,null==(s=this._snapshotTask)||s.abort(),this._snapshotTask=r(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),a(e)||o.getLogger("esri.layers.GeoJSONLayer").error(new t("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(t){const{geometryType:s,hasZ:i,objectIdField:n}=this._queryEngine,r=E(t,{geometryType:s,hasZ:i,objectIdField:n});if(!l(this._queryEngine.spatialReference,e))for(const t of r)u(t.geometry)&&(t.geometry=d(b(p(t.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),e,this._queryEngine.spatialReference)));return r}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:s}=this.loadOptions,i=(await c(t,{responseType:"json",query:{...s},signal:e})).data;return await F(i),i}_normalizeFeatures(e,t,s){const{objectIdField:i}=this._queryEngine,n=[];for(const r of e){const e=this._createDefaultAttributes(),a=S(this._fieldsIndex,e,r.attributes,!0,t);a?null==s||s.push(a):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[i],n.push(r))}return n}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),s&&s.length&&this._applyUpdateEdits(n,s),i&&i.length){for(const e of i)n.deleteResults.push(R(e));this._queryEngine.featureStore.removeManyById(i)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:n,hasZ:r,objectIdField:a,spatialReference:o,featureStore:l}=this._queryEngine,d=[];for(const n of t){if(n.geometry&&i!==h(n.geometry)){s.push(C("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=S(this._fieldsIndex,t,n.attributes);if(r)s.push(r);else{if(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid){const t=n.attributes[a];e.uidToObjectId[n.uid]=t}u(n.geometry)&&(n.geometry=b(k(n.geometry,o),n.geometry.spatialReference,o)),d.push(n),s.push(R(n.attributes[a]))}}l.addMany(y([],d,i,r,n,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:n,objectIdField:r,spatialReference:a,featureStore:o}=this._queryEngine;for(const l of t){const{attributes:t,geometry:d}=l,p=t&&t[r];if(null==p){e.push(C(`Identifier field ${r} missing`));continue}if(!o.has(p)){e.push(C(`Feature with object id ${p} missing`));continue}const c=m(o.getFeature(p),s,n,i);if(u(d)){if(s!==h(d)){e.push(C("Incorrect geometry type."));continue}c.geometry=b(k(d,a),d.spatialReference,a)}if(t){const s=S(this._fieldsIndex,c.attributes,t);if(s){e.push(s);continue}}o.add(f(c,s,n,i,r)),e.push(R(p))}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===s.type)return()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const e of t)e.objectId&&(i=Math.max(i,e.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(s){try{await _(e,s)}catch{throw new t("geojson-layer","Projection not supported")}}}export{O as default};
