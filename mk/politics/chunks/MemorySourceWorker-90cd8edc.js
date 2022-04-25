import{e,gl as t,eN as i,bY as s,t as n,aC as r,ar as a,r as l,bP as o,bR as d,gm as u,eP as p}from"../main.js";import{t as f,n as y}from"./objectIdUtils-c0a1421f.js";import{m as c}from"./FeatureStore-3a7a2cdd.js";import{f as m,g as h}from"./projectionSupport-8797065d.js";import{V as g}from"./QueryEngine-2b43e285.js";import{a as b,n as I,l as F}from"./clientSideDefaults-bdeb0c7a.js";import{y as j,u as _,d as E,c as x,h as T}from"./sourceUtils-867b95d2.js";import"./PooledRBush-4f024b5d.js";import"./json-c16bd509.js";import"./WhereClause-71493fcb.js";import"./QueryEngineCapabilities-745114a9.js";import"./quantizationUtils-6ec6d37f.js";import"./utils-bf62e5a4.js";import"./ClassBreaksDefinition-af56f321.js";import"./spatialQuerySupport-184cd801.js";const R=p,q={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:p},D={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function O(e){return a(e)?null!=e.z:!!e.hasZ}function S(e){return a(e)?null!=e.m:!!e.hasM}class w{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(n){const r=[],{features:a}=n,l=this._inferLayerProperties(a,n.fields),o=n.fields||[],d=null!=n.hasM?n.hasM:l.hasM,u=null!=n.hasZ?n.hasZ:l.hasZ,p=!n.spatialReference&&!l.spatialReference,h=p?R:n.spatialReference||l.spatialReference,j=p?q:null,_=n.geometryType||l.geometryType,E=!_;let x=n.objectIdField||l.objectIdField,T=n.timeInfo;if(!E&&(p&&r.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!_))throw new e("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!x)throw new e("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(l.objectIdField&&x!==l.objectIdField&&(r.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${x}" doesn't match the field name "${l.objectIdField}", found in the provided fields`}),x=l.objectIdField),x&&!l.objectIdField){let e=null;o.some((t=>t.name===x&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):o.unshift({alias:x,name:x,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const i of o){if(null==i.name&&(i.name=i.alias),null==i.alias&&(i.alias=i.name),!i.name)throw new e("feature-layer:invalid-field-name","field name is missing",{field:i});if(i.name===x&&(i.type="esriFieldTypeOID"),-1===t.jsonValues.indexOf(i.type))throw new e("feature-layer:invalid-field-type",`invalid type for field "${i.name}"`,{field:i})}const O={};for(const e of o)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=i(e);void 0!==t&&(O[e.name]=t)}if(this._fieldsIndex=new s(o),this._createDefaultAttributes=b(O,x),T){if(T.startTimeField){const e=this._fieldsIndex.get(T.startTimeField);e?(T.startTimeField=e.name,e.type="esriFieldTypeDate"):T.startTimeField=null}if(T.endTimeField){const e=this._fieldsIndex.get(T.endTimeField);e?(T.endTimeField=e.name,e.type="esriFieldTypeDate"):T.endTimeField=null}if(T.trackIdField){const e=this._fieldsIndex.get(T.trackIdField);e?T.trackIdField=e.name:(T.trackIdField=null,r.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))}T.startTimeField||T.endTimeField||(r.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:T}}),T=null)}const S={warnings:r,featureErrors:[],layerDefinition:{...D,drawingInfo:I(_),templates:F(O),extent:j,geometryType:_,objectIdField:x,fields:o,hasZ:!!u,hasM:!!d,timeInfo:T},assignedObjectIds:{}};if(this._queryEngine=new g({fields:o,geometryType:_,hasM:d,hasZ:u,objectIdField:x,spatialReference:h,featureStore:new c({geometryType:_,hasM:d,hasZ:u}),timeInfo:T,cacheSpatialQueries:!0}),!a||!a.length)return this._nextObjectId=f,S;const w=y(x,a);return this._nextObjectId=w+1,await m(a,h),this._loadInitialFeatures(S,a)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([j(t,i),m(e.adds,t),m(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,s,a=null,l=null,o=null;for(const t of e){const e=t.geometry;if(!n(e)&&(a||(a=r(e)),l||(l=e.spatialReference),null==i&&(i=O(e)),null==s&&(s=S(e)),a&&l&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(o=e.name)}return{geometryType:a,spatialReference:l,objectIdField:o,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:a,spatialReference:d,featureStore:u}=this._queryEngine,p=[];for(const s of t){if(null!=s.uid&&(e.assignedObjectIds[s.uid]=-1),s.geometry&&i!==r(s.geometry)){e.featureErrors.push(_("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=E(this._fieldsIndex,t,s.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,null!=s.uid&&(e.assignedObjectIds[s.uid]=s.attributes[a]),l(s.geometry)&&(s.geometry=h(s.geometry,s.geometry.spatialReference,d)),p.push(s))}if(u.addMany(o([],p,i,n,s,a)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push(x(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:a,objectIdField:d,spatialReference:u,featureStore:p}=this._queryEngine,f=[];for(const n of t){if(n.geometry&&s!==r(n.geometry)){i.push(_("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=E(this._fieldsIndex,t,n.attributes);if(a)i.push(a);else{if(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid){const t=n.attributes[d];e.uidToObjectId[n.uid]=t}l(n.geometry)&&(n.geometry=h(T(n.geometry,u),n.geometry.spatialReference,u)),f.push(n),i.push(x(n.attributes[d]))}}p.addMany(o([],f,s,a,n,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:a,spatialReference:o,featureStore:p}=this._queryEngine;for(const f of t){const{attributes:t,geometry:y}=f,c=t&&t[a];if(null==c){e.push(_(`Identifier field ${a} missing`));continue}if(!p.has(c)){e.push(_(`Feature with object id ${c} missing`));continue}const m=d(p.getFeature(c),i,n,s);if(l(y)){if(i!==r(y)){e.push(_("Incorrect geometry type."));continue}m.geometry=h(T(y,o),y.spatialReference,o)}if(t){const i=E(this._fieldsIndex,m.attributes,t);if(i){e.push(i);continue}}p.add(u(m,i,n,s,a)),e.push(x(c))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}export{w as default};