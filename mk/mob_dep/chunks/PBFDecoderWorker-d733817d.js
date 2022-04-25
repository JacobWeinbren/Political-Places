import{dG as t,an as e,gv as r,t as s,aV as i,es as n,bU as o,bN as a,gw as h,gx as l,gy as u}from"../main.js";class d{constructor(t,e,r){this.uid=t,this.geometry=e,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null}}class c{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function p(t,e){return e}function f(t,e,r,s){switch(r){case 0:return P(t,e+s,0);case 1:return"lowerLeft"===t.originPosition?P(t,e+s,1):function({translate:t,scale:e},r,s){return t[s]-r*e[s]}(t,e+s,1)}}function y(t,e,r,s){return 2===r?P(t,e,2):f(t,e,r,s)}function m(t,e,r,s){return 2===r?P(t,e,3):f(t,e,r,s)}function g(t,e,r,s){return 3===r?P(t,e,3):y(t,e,r,s)}function P({translate:t,scale:e},r,s){return t[s]+r*e[s]}t(),e();class C{constructor(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=p,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=function(){}}createFeatureResult(){return new c}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this._attributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const e=r(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(!s(e))for(const r of t.features)e(r.geometry)}createSpatialReference(){return new i}addField(t,e){t.fields.push(n.fromJSON(e));const r=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const t in e.attributes){const s=e.attributes[t];"string"==typeof s&&s.length>r&&(e.attributes[t]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,i=o(r.clone(),r,!1,!1,this.transform),n=a(i,s,!1,!1);let h=null;switch(s){case"esriGeometryPoint":h="point";break;case"esriGeometryPolygon":h="polygon";break;case"esriGeometryPolyline":h="polyline";break;case"esriGeometryMultipoint":h="multipoint"}n.type=h,t.queryGeometryType=s,t.queryGeometry=n}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this._deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this._addCoordinatePolygon(t,e,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this._addCoordinatePolyline(t,e,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this._addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:h(t.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new d(l(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this.lengths.reduce(((t,e)=>t+e),0);this.coordinateBuffer=new Float64Array(t*this.vertexDimension),this.coordinateBufferPtr=0}addLength(t,e,r){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this.applyTransform(this.transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,r)}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this._transformPathLikeValue(e,r),i=t[t.length-1];0===r&&i.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?g:e?y:r?m:f}}class b{_parseFeatureQuery(t){const e=u(t.buffer,new C(t.options)),r={...e,spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map((t=>t.toJSON())):void 0};return Promise.resolve(r)}}function _(){return new b}export{_ as default};
