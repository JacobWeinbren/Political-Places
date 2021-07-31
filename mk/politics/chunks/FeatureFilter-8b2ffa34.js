import{n as e,a as t,aj as i,dt as s,ar as r,r as a}from"../main.js";import{a as o,v as n,n as l}from"./spatialQuerySupport-3f4a0b0a.js";import{u as h}from"./FeatureStore2D-d056716d.js";import"./projectionSupport-e117db71.js";import"./json-812fb7d1.js";import"./CircularArray-59a01424.js";import"./TileStore-b0b0b443.js";import"./FeatureSetReader-9649d407.js";import"./centroid-1933d1b4.js";import"./definitions-8d307e62.js";import"./Utils-ad846f73.js";import"./Texture-138e8e36.js";import"./visualVariablesUtils-3c424e9e.js";import"./visualVariablesUtils-dada2dcd.js";import"./quickselect-a156c329.js";import"./aaBoundingBox-617dd5f3.js";const d=e.getLogger("esri.views.2d.layers.features.support.whereUtils"),u={getAttribute:(e,t)=>e.field(t)};async function c(e,i){const s=await import("./WhereClause-67cfcf03.js");try{const r=s.WhereClause.create(e,i);if(!r.isStandardized){const e=new t("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",r);d.error(e)}return e=>{const t=e.readArcadeFeature();return r.testFeature(t,u)}}catch(t){return d.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}const p=e.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");class m{constructor(e){this._geometryBounds=i(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach(((e,t)=>{this._idToVisibility.set(t,0)}))}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,1)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach(((e,r)=>{const a=!!(1&this._idToVisibility.get(r)),o=s.has(r);!a&&o?t.push(r):a&&!o&&i.push(r),this._idToVisibility.set(r,o?3:0)})),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:r,objectIds:a}=this;return s.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:r,objectIds:a})}async update(e,t){this._hash=JSON.stringify(e);const i=await o(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await c(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await n(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);r(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=l(this._serviceInfo.timeInfo,e.timeExtent,h);else{const i=new t("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);p.error(i)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!a(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach(((t,i)=>{1&t||(this._idToVisibility.set(i,1),e.push(i))})),e}}export{m as default};
