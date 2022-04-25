import{eF as e,e as t,go as s,eD as i,bY as n,al as a,j as r,s as o,bp as l,r as u,bu as d,bN as p,C as c,aC as h,bP as y,bR as m,gp as f}from"../main.js";import{m as g}from"./FeatureStore-b692510b.js";import{f as _,g as b}from"./projectionSupport-8e78150e.js";import{V as I}from"./QueryEngine-aaabba96.js";import{T as F,L as E,O as j}from"./geojson-c3700ba2.js";import{n as w,l as T,a as q}from"./clientSideDefaults-be1e4608.js";import{y as x,d as S,c as R,u as C,h as D}from"./sourceUtils-1a6842c5.js";import"./PooledRBush-226f5baa.js";import"./json-a3f064db.js";import"./WhereClause-5c2059b8.js";import"./QueryEngineCapabilities-ec743cd2.js";import"./spatialQuerySupport-868b13b1.js";const O={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class k{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(a,r={}){this.loadOptions={url:a.url,customParameters:a.customParameters};const o=[];await this._checkProjection(a.spatialReference);let l=null;a.url&&(l=await this._fetch(null==r?void 0:r.signal));const u=F(l,{geometryType:a.geometryType}),d=a.fields||u.fields||[],p=null!=a.hasZ?a.hasZ:u.hasZ,c=u.geometryType,h=a.objectIdField||u.objectIdFieldName||"__OBJECTID",y=a.spatialReference||e;let m=a.timeInfo;d===u.fields&&u.unknownFields.length>0&&o.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:u.unknownFields}});let f=d.find((e=>e.name===h));f?("esriFieldTypeString"!==f.type&&(f.type="esriFieldTypeOID"),f.editable=!1,f.nullable=!1):(f={alias:h,name:h,type:"string"===u.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},d.unshift(f));const _={};for(const e of d){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new t("geojson-layer:invalid-field-name","field name is missing",{field:e});if(!s.jsonValues.includes(e.type))throw new t("geojson-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e});if(e.name!==f.name){const t=i(e);void 0!==t&&(_[e.name]=t)}}this._fieldsIndex=new n(d);const b=this._fieldsIndex.requiredFields.indexOf(f);if(b>-1&&this._fieldsIndex.requiredFields.splice(b,1),m){if(m.startTimeField){const e=this._fieldsIndex.get(m.startTimeField);e?(m.startTimeField=e.name,e.type="esriFieldTypeDate"):m.startTimeField=null}if(m.endTimeField){const e=this._fieldsIndex.get(m.endTimeField);e?(m.endTimeField=e.name,e.type="esriFieldTypeDate"):m.endTimeField=null}if(m.trackIdField){const e=this._fieldsIndex.get(m.trackIdField);e?m.trackIdField=e.name:(m.trackIdField=null,o.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:m}}))}m.startTimeField||m.endTimeField||(o.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:m}}),m=null)}const E=c?w(c):null,j={warnings:o,featureErrors:[],layerDefinition:{...O,drawingInfo:E,templates:T(_),extent:null,geometryType:c,objectIdField:h,fields:d,hasZ:!!p,timeInfo:m}};this._queryEngine=new I({fields:d,geometryType:c,hasM:!1,hasZ:p,objectIdField:h,spatialReference:y,timeInfo:m,featureStore:new g({geometryType:c,hasM:!1,hasZ:p}),cacheSpatialQueries:!0}),this._createDefaultAttributes=q(_,h);const x=await this._createFeatures(l);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const S=this._normalizeFeatures(x,j.warnings,j.featureErrors);if(this._queryEngine.featureStore.addMany(S),j.layerDefinition.extent=this._queryEngine.fullExtent,j.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;j.layerDefinition.timeInfo.timeExtent=[e,t]}return j}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([x(t,s),_(e.adds,t),_(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var s;return this.loadOptions.customParameters=e,null==(s=this._snapshotTask)||s.abort(),this._snapshotTask=a(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),r(e)||o.getLogger("esri.layers.GeoJSONLayer").error(new t("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(t){const{geometryType:s,hasZ:i,objectIdField:n}=this._queryEngine,a=E(t,{geometryType:s,hasZ:i,objectIdField:n});if(!l(this._queryEngine.spatialReference,e))for(const t of a)u(t.geometry)&&(t.geometry=d(b(p(t.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),e,this._queryEngine.spatialReference)));return a}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:s}=this.loadOptions,i=(await c(t,{responseType:"json",query:{...s},signal:e})).data;return await j(i),i}_normalizeFeatures(e,t,s){const{objectIdField:i}=this._queryEngine,n=[];for(const a of e){const e=this._createDefaultAttributes(),r=S(this._fieldsIndex,e,a.attributes,!0,t);r?null==s||s.push(r):(this._assignObjectId(e,a.attributes,!0),a.attributes=e,a.objectId=e[i],n.push(a))}return n}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),s&&s.length&&this._applyUpdateEdits(n,s),i&&i.length){for(const e of i)n.deleteResults.push(R(e));this._queryEngine.featureStore.removeManyById(i)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:n,hasZ:a,objectIdField:r,spatialReference:o,featureStore:l}=this._queryEngine,d=[];for(const n of t){if(n.geometry&&i!==h(n.geometry)){s.push(C("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=S(this._fieldsIndex,t,n.attributes);if(a)s.push(a);else{if(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid){const t=n.attributes[r];e.uidToObjectId[n.uid]=t}u(n.geometry)&&(n.geometry=b(D(n.geometry,o),n.geometry.spatialReference,o)),d.push(n),s.push(R(n.attributes[r]))}}l.addMany(y([],d,i,a,n,r))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:n,objectIdField:a,spatialReference:r,featureStore:o}=this._queryEngine;for(const l of t){const{attributes:t,geometry:d}=l,p=t&&t[a];if(null==p){e.push(C(`Identifier field ${a} missing`));continue}if(!o.has(p)){e.push(C(`Feature with object id ${p} missing`));continue}const c=m(o.getFeature(p),s,n,i);if(u(d)){if(s!==h(d)){e.push(C("Incorrect geometry type."));continue}c.geometry=b(D(d,r),d.spatialReference,r)}if(t){const s=S(this._fieldsIndex,c.attributes,t);if(s){e.push(s);continue}}o.add(f(c,s,n,i,a)),e.push(R(p))}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===s.type)return()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const e of t)e.objectId&&(i=Math.max(i,e.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(s){try{await _(e,s)}catch{throw new t("geojson-layer","Projection not supported")}}}export{k as default};