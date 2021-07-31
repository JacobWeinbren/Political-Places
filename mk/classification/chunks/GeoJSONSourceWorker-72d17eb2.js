import{L as e,et as t,a as i,fG as s,fH as n,bO as r,b7 as a,bj as o,bI as l,av as d,bF as u,bH as p,fI as y}from"../main.js";import{u as c}from"./FeatureStore-b89df1ed.js";import{y as f,p as m}from"./quantizationUtils-58caac06.js";import{H as h}from"./QueryEngine-fce951da.js";import{I as g,T as b,k as I}from"./geojson-933218ad.js";import{u as F,i as j,n as _}from"./clientSideDefaults-cd15a431.js";import{y as E,d as T,c as q,u as x,h as w}from"./sourceUtils-e5c344c4.js";import"./aaBoundingBox-5d496971.js";import"./PooledRBush-2d6ea8e2.js";import"./quickselect-4c28d668.js";import"./centroid-a817072d.js";import"./json-5b2b387c.js";import"./WhereClause-3d000db0.js";import"./QueryEngineCapabilities-e0f82f0e.js";import"./utils-5062d45a.js";import"./spatialQuerySupport-56d006ef.js";const R={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class D{constructor(){this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(d){const u=[];await this._checkProjection(d.spatialReference);let p=null;d.url&&(p=(await e(d.url,{responseType:"json"})).data,await g(p));const y=b(p,{geometryType:d.geometryType}),m=d.fields||y.fields||[],E=null!=d.hasZ?d.hasZ:y.hasZ,T=y.geometryType,q=d.objectIdField||("number"===y.objectIdFieldType?y.objectIdFieldName:"OBJECTID")||"OBJECTID",x=d.spatialReference||t;let w=d.timeInfo;if(!T)throw new i("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if("string"===y.objectIdFieldType&&u.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),m===y.fields&&y.unknownFields.length>0&&u.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:y.unknownFields}}),q){let e=null;m.some((t=>t.name===q&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):m.unshift({alias:q,name:q,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of m){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new i("geojson-layer:invalid-field-name","field name is missing",{field:e});if(e.name===q&&(e.type="esriFieldTypeOID"),-1===s.jsonValues.indexOf(e.type))throw new i("geojson-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const D={};this._requiredFields=[];for(const e of m)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=n(e);e.nullable||void 0!==t?D[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new r(m),w){if(w.startTimeField){const e=this._fieldsIndex.get(w.startTimeField);e?(w.startTimeField=e.name,e.type="esriFieldTypeDate"):w.startTimeField=null}if(w.endTimeField){const e=this._fieldsIndex.get(w.endTimeField);e?(w.endTimeField=e.name,e.type="esriFieldTypeDate"):w.endTimeField=null}if(w.trackIdField){const e=this._fieldsIndex.get(w.trackIdField);e?w.trackIdField=e.name:(w.trackIdField=null,u.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:w}}))}w.startTimeField||w.endTimeField||(u.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:w}}),w=null)}const O={warnings:u,featureErrors:[],layerDefinition:{...R,drawingInfo:F(T),templates:j(D),extent:null,geometryType:T,objectIdField:q,fields:m,hasZ:!!E,timeInfo:w}};this._queryEngine=new h({fields:m,geometryType:T,hasM:!1,hasZ:E,objectIdField:q,spatialReference:x,timeInfo:w,featureStore:new c({geometryType:T,hasM:!1,hasZ:E}),cacheSpatialQueries:!0}),this._createDefaultAttributes=_(D,q),this._nextObjectId=y.maxObjectId+1;const Q=I(p,{geometryType:T,hasZ:E,objectIdField:"number"===y.objectIdFieldType?q:null});if(!a(x,t))for(const e of Q)e.geometry&&(e.geometry=o(f(l(e.geometry,T,E,!1),t,x)));return this._loadInitialFeatures(O,Q),O}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([E(t,i),m(e.adds,t),m(e.updates,t)]),this._applyEdits(e)}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_loadInitialFeatures(e,t){const{featureStore:i,objectIdField:s}=this._queryEngine,n=[];for(const i of t){const t=this._createDefaultAttributes(),r=T(this._fieldsIndex,t,i.attributes,this._requiredFields,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(t,i.attributes,!0),i.attributes=t,i.objectId=t[s],n.push(i))}if(i.addMany(n),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push(q(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:r,objectIdField:a,spatialReference:o,featureStore:l}=this._queryEngine,p=[];for(const n of t){if(n.geometry&&s!==d(n.geometry)){i.push(x("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=T(this._fieldsIndex,t,n.attributes,this._requiredFields);if(r)i.push(r);else{if(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid){const t=n.attributes[a];e.uidToObjectId[n.uid]=t}n.geometry&&(n.geometry=f(w(n.geometry,o),n.geometry.spatialReference,o)),p.push(n),i.push(q(n.attributes[a]))}}l.addMany(u([],p,s,r,n,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:r,spatialReference:a,featureStore:o}=this._queryEngine;for(const l of t){const{attributes:t,geometry:u}=l,c=t&&t[r];if(null==c){e.push(x(`Identifier field ${r} missing`));continue}if(!o.has(c)){e.push(x(`Feature with object id ${c} missing`));continue}const m=p(o.getFeature(c),i,n,s);if(u){if(i!==d(u)){e.push(x("Incorrect geometry type."));continue}m.geometry=f(w(u,a),u.spatialReference,a)}if(t){const i=T(this._fieldsIndex,m.attributes,t,this._requiredFields);if(i){e.push(i);continue}}o.add(y(m,i,n,s,r)),e.push(q(c))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}async _checkProjection(e){try{await m(t,e)}catch{throw new i("geojson-layer","Projection not supported")}}}export{D as default};
