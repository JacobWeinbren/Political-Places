import{a as e,fP as t,fQ as i,bN as s,av as n,am as r,bE as a,bG as l,fR as d,eC as u}from"../main.js";import{t as o,n as p}from"./objectIdUtils-fac6cad6.js";import{u as f}from"./FeatureStore-776aa37e.js";import{p as c,y}from"./projectionSupport-e117db71.js";import{H as m}from"./QueryEngine-a9f36dbd.js";import{n as h,u as g,i as b}from"./clientSideDefaults-e345a672.js";import{y as I,u as F,d as _,c as j,h as E}from"./sourceUtils-4c04c314.js";import"./aaBoundingBox-617dd5f3.js";import"./PooledRBush-3c7c6cba.js";import"./quickselect-a156c329.js";import"./centroid-1933d1b4.js";import"./json-812fb7d1.js";import"./WhereClause-67cfcf03.js";import"./QueryEngineCapabilities-4a3e15cc.js";import"./quantizationUtils-ae8ddd77.js";import"./utils-803882f2.js";import"./spatialQuerySupport-3f4a0b0a.js";const q=u,x={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:u},T={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function R(e){return r(e)?null!=e.z:!!e.hasZ}function D(e){return r(e)?null!=e.m:!!e.hasM}class O{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(n){const r=[],{features:a}=n,l=this._inferLayerProperties(a,n.fields),d=n.fields||[],u=null!=n.hasM?n.hasM:l.hasM,y=null!=n.hasZ?n.hasZ:l.hasZ,I=!n.spatialReference&&!l.spatialReference,F=I?q:n.spatialReference||l.spatialReference,_=I?x:null,j=n.geometryType||l.geometryType,E=!j;let R=n.objectIdField||l.objectIdField,D=n.timeInfo;if(!E&&(I&&r.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!j))throw new e("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!R)throw new e("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(l.objectIdField&&R!==l.objectIdField&&(r.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${R}" doesn't match the field name "${l.objectIdField}", found in the provided fields`}),R=l.objectIdField),R&&!l.objectIdField){let e=null;d.some((t=>t.name===R&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):d.unshift({alias:R,name:R,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const i of d){if(null==i.name&&(i.name=i.alias),null==i.alias&&(i.alias=i.name),!i.name)throw new e("feature-layer:invalid-field-name","field name is missing",{field:i});if(i.name===R&&(i.type="esriFieldTypeOID"),-1===t.jsonValues.indexOf(i.type))throw new e("feature-layer:invalid-field-type",`invalid type for field "${i.name}"`,{field:i})}const O={};this._requiredFields=[];for(const e of d)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=i(e);e.nullable||void 0!==t?O[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new s(d),this._createDefaultAttributes=h(O,R),D){if(D.startTimeField){const e=this._fieldsIndex.get(D.startTimeField);e?(D.startTimeField=e.name,e.type="esriFieldTypeDate"):D.startTimeField=null}if(D.endTimeField){const e=this._fieldsIndex.get(D.endTimeField);e?(D.endTimeField=e.name,e.type="esriFieldTypeDate"):D.endTimeField=null}if(D.trackIdField){const e=this._fieldsIndex.get(D.trackIdField);e?D.trackIdField=e.name:(D.trackIdField=null,r.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:D}}))}D.startTimeField||D.endTimeField||(r.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:D}}),D=null)}const S={warnings:r,featureErrors:[],layerDefinition:{...T,drawingInfo:g(j),templates:b(O),extent:_,geometryType:j,objectIdField:R,fields:d,hasZ:!!y,hasM:!!u,timeInfo:D},assignedObjectIds:{}};if(this._queryEngine=new m({fields:d,geometryType:j,hasM:u,hasZ:y,objectIdField:R,spatialReference:F,featureStore:new f({geometryType:j,hasM:u,hasZ:y}),timeInfo:D,cacheSpatialQueries:!0}),!a||!a.length)return this._nextObjectId=o,S;const w=p(R,a);return this._nextObjectId=w+1,await c(a,F),this._loadInitialFeatures(S,a)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([I(t,i),c(e.adds,t),c(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,s,r=null,a=null,l=null;for(const t of e){const e=t.geometry;if(e&&(r||(r=n(e)),a||(a=e.spatialReference),null==i&&(i=R(e)),null==s&&(s=D(e)),r&&a&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(l=e.name)}return{geometryType:r,spatialReference:a,objectIdField:l,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:r,objectIdField:l,spatialReference:d,featureStore:u}=this._queryEngine,o=[];for(const s of t){if(null!=s.uid&&(e.assignedObjectIds[s.uid]=-1),s.geometry&&i!==n(s.geometry)){e.featureErrors.push(F("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=_(this._fieldsIndex,t,s.attributes,this._requiredFields,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,null!=s.uid&&(e.assignedObjectIds[s.uid]=s.attributes[l]),s.geometry&&(s.geometry=y(s.geometry,s.geometry.spatialReference,d)),o.push(s))}if(u.addMany(a([],o,i,r,s,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push(j(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:r,hasZ:l,objectIdField:d,spatialReference:u,featureStore:o}=this._queryEngine,p=[];for(const r of t){if(r.geometry&&s!==n(r.geometry)){i.push(F("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=_(this._fieldsIndex,t,r.attributes,this._requiredFields);if(a)i.push(a);else{if(this._assignObjectId(t,r.attributes),r.attributes=t,null!=r.uid){const t=r.attributes[d];e.uidToObjectId[r.uid]=t}r.geometry&&(r.geometry=y(E(r.geometry,u),r.geometry.spatialReference,u)),p.push(r),i.push(j(r.attributes[d]))}}o.addMany(a([],p,s,l,r,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:r,objectIdField:a,spatialReference:u,featureStore:o}=this._queryEngine;for(const p of t){const{attributes:t,geometry:f}=p,c=t&&t[a];if(null==c){e.push(F(`Identifier field ${a} missing`));continue}if(!o.has(c)){e.push(F(`Feature with object id ${c} missing`));continue}const m=l(o.getFeature(c),i,r,s);if(f){if(i!==n(f)){e.push(F("Incorrect geometry type."));continue}m.geometry=y(E(f,u),f.spatialReference,u)}if(t){const i=_(this._fieldsIndex,m.attributes,t,this._requiredFields);if(i){e.push(i);continue}}o.add(d(m,i,r,s,a)),e.push(j(c))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}export{O as default};
