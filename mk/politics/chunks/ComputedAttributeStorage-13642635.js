import{d as t,r as e,bN as s,bO as r,t as i,D as n,aK as a,bP as o,bQ as h,bR as u,bS as d,bT as l,bU as c,s as _,bV as f,bg as g,j as p,e as m,bW as y,bX as b,bY as x,B as I,g as S,T}from"../main.js";import{e as A}from"./projectionSupport-8797065d.js";import{a0 as z,a1 as C,a2 as F,a3 as w,K as D,L as E}from"./enums-7acaa04d.js";import{c as k,u as N,f as M,e as U,b as v,n as j,l as R,r as B,s as G,d as O}from"./visualVariablesUtils-fe844d46.js";import{e as L}from"./Utils-be23a2c6.js";import{G as P}from"./enums-154d47de.js";class H{constructor(t,e){this._mask=0,this._buf=t,this._mask=e}static fromBuffer(t,e){return new H(t,e)}static create(t,e=4294967295){const s=new Uint32Array(Math.ceil(t/32));return new H(s,e)}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return!!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,r=e;for(;s%32&&s!==r;){if(this.has(s))return!0;s++}for(;r%32&&s!==r;){if(this.has(s))return!0;r--}if(s===r)return!1;for(let t=s/32;t!==r/32;t++)if(this._buf[t])return!0;return!1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r}setRange(t,e){let s=t,r=e;for(;s%32&&s!==r;)this.set(s++);for(;r%32&&s!==r;)this.set(r--);if(s!==r)for(let t=s/32;t!==r/32;t++)this._buf[t]=4294967295}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new H(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],r=32*e;if(s)for(;s;)1&s&&t(r),s>>>=1,r++}}countSet(){let t=0;return this.forEachSet((e=>{t++})),t}}var Y,Z,J;let Q=0;const X=null!=(Y=t("featurelayer-simplify-thresholds"))?Y:[.5,.5,.5,.5],V=X[0],q=X[1],$=X[2],K=X[3],W=null!=(Z=t("featurelayer-simplify-payload-size-factors"))?Z:[1,2,4],tt=W[0],et=W[1],st=W[2],rt=null!=(J=t("featurelayer-simplify-mobile-factor"))?J:2,it=t("esri-mobile");class nt{constructor(t,e){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=t,this._layerSchema=e}static createInstance(){return Q++,Q=Q>65535?0:Q,Q}get isEmpty(){return e(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(t){this._level=t}getAreaSimplificationThreshold(t,e){let s=1;const r=it?rt:1;e>4e6?s=st*r:e>1e6?s=et*r:e>5e5?s=tt*r:e>1e5&&(s=r);let i=0;t>4e3?i=K*s:t>2e3?i=$*s:t>100?i=q:t>15&&(i=V);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),i*n}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this.setComputedNumericAtIndex(e,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,e){return this.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)}transform(t,e,s,r){const i=this.copy();return i._tx+=t,i._ty+=e,i._sx*=s,i._sy*=r,i}readAttribute(t,e=!1){const s=this._readAttribute(t,e);if(void 0!==s)return s;for(const s of this._joined){s.setIndex(this.getIndex());const r=s._readAttribute(t,e);if(void 0!==r)return r}}readAttributes(){const t=this._readAttributes();for(const e of this._joined){e.setIndex(this.getIndex());const s=e._readAttributes();for(const e of Object.keys(s))t[e]=s[e]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}geometry(){const t=this.readHydratedGeometry(),e=s(t,this.geometryType,this.hasZ,this.hasM),i=r(e);return i&&(i.spatialReference=this._arcadeSpatialReference),i}field(t){if(this.hasField(t))return this.readAttribute(t,!0);for(const e of this._joined)if(e.setIndex(this.getIndex()),e.hasField(t))return e._readAttribute(t,!0);throw new Error(`Field ${t} does not exist`)}setField(t,e){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(){return JSON.stringify(this.readLegacyFeature())}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(t=null){return{attributes:this._readAttributes(),geometry:!0===(null==t?void 0:t.keepGeometryType)?this.geometry():this.geometry().toJSON()}}castAsJsonAsync(t=null,e=null){return Promise.resolve(this.castAsJson(e))}removeIds(t){if(i(this._objectIdToIndex)){const t=new Map,e=this.getCursor();for(;e.next();)t.set(e.getObjectId(),e.getIndex());this._objectIdToIndex=t}const e=this._objectIdToIndex;for(const s of t)e.has(s)&&this.removeAtIndex(e.get(s))}removeAtIndex(t){i(this._deleted)&&(this._deleted=H.create(this.getSize())),this._deleted.set(t)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return i(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=n(this.getQuantizationTransform(),null);return A(new a,t,this.hasM,this.hasZ,e)}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex}}class at extends nt{constructor(t,e,s){super(t,s),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=null==s?void 0:s.geometryType,this._features=e}static fromFeatures(t,e){const{objectIdField:s,geometryType:r}=e,i=o([],t,r,!1,!1,s);for(let e=0;e<i.length;e++)i[e].displayId=t[e].displayId;return at.fromOptimizedFeatures(i,e)}static fromFeatureSet(t,e){const s=h(t,e.objectIdField);return at.fromOptimizedFeatureSet(s,e)}static fromOptimizedFeatureSet(t,e){const{features:s}=t,r=at.fromOptimizedFeatures(s,e);r._exceededTransferLimit=t.exceededTransferLimit,r._transform=t.transform;for(const e of t.fields)"esriFieldTypeDate"===e.type&&r._dateFields.add(e.name);return r}static fromOptimizedFeatures(t,e,s){const r=nt.createInstance(),i=new at(r,t,e);return i._transform=s,i}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter((t=>!e.has(t.objectId)))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new at(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return u(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return s(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return i(t)?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return d(this._current)?l(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return function({coords:t,lengths:e}){let s=0;for(const r of e){for(let e=1;e<r;e++)t[2*(s+e)]+=t[2*(s+e)-2],t[2*(s+e)+1]+=t[2*(s+e)-1];s+=r}}(e),e}readHydratedGeometry(){const t=this._current.geometry;if(i(t))return null;const s=t.clone();return e(this._transform)&&c(s,s,this.hasZ,this.hasM,this._transform),s}getXHydrated(){if(!d(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return i(e)?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!d(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return i(e)?t:e.translate[1]-t*e.scale[1]}getX(){return d(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return d(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!d(this._current))return null;const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){if(!d(this._current))return null;if(i(this._current.centroid)){const t=this._computeCentroid();if(i(t))return null;t.coords[0]=(t.coords[0]-this._tx)/this._sx,t.coords[1]=(t.coords[1]-this._ty)/this._sy,this._current.centroid=t}const t=this._current.centroid.clone();return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sx+this._ty,t}hasField(t){return t in this._current.attributes||this.getFieldNames().map((t=>t.toLowerCase())).includes(t.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(t,e){const s=this._current.attributes[t];if(void 0!==s)return null!=s&&e&&this._dateFields.has(t)?new Date(s):s;const r=this.readAttributes(),i=t.toLocaleLowerCase().trim();for(const t in r)if(t.toLocaleLowerCase().trim()===i){const s=this._current.attributes[t];return null!=s&&e&&this._dateFields.has(t)?new Date(s):s}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}const ot=_.getLogger("esri.views.layers.2d.features.support.AttributeStore"),ht=j(R,ot),ut={sharedArrayBuffer:t("esri-shared-array-buffer"),atomics:t("esri-atomics")};function dt(t,e){return s=>e(t(s))}class lt{constructor(t,e,s,r){this.size=0,this.texelSize=4;const{pixelType:i,layout:n,textureOnly:a}=r;this.textureOnly=a||!1,this.pixelType=i,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(i,s,t,e))}get buffer(){return I(this.data,(t=>t.buffer))}unsetComponentAllTexels(t,e){const s=S(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=S(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const r=S(this.data);for(const i of s)r[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}setComponentTexel(t,e,s){S(this.data)[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){S(this.data)[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=M(t);return S(this.data)[s*this.texelSize+e]}setData(t,e,s){const r=M(t),i=1<<e;0!=(this.layout&i)?(this.data[r*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)):ot.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===P.UNSIGNED_BYTE&&this._shared&&ut.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===P.UNSIGNED_BYTE&&this._shared&&ut.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=S(this.data);e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const r=!(this._shared||"local"===this._ctype),i=this.pixelType,n=this.layout,a=S(this.data);return{start:t,end:e,data:r&&a.slice(t*s,(e+1)*s)||null,pixelType:i,layout:n}}_initData(t,e,s,r){const i=s&&"local"!==r?SharedArrayBuffer:ArrayBuffer,n=L(t),a=new n(new i(e*e*4*n.BYTES_PER_ELEMENT));for(let t=0;t<a.length;t+=4)a[t+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class ct{constructor(t,e){this._client=t,this.config=e,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(z),this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const s=e.supportsTextureFloat?P.FLOAT:P.UNSIGNED_BYTE;ht(`Creating AttributeStore ${ut.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:P.UNSIGNED_BYTE,layout:1},{pixelType:P.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:P.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:s,layout:15},{pixelType:s,layout:15}],this._blocks=this._blockDescriptors.map((()=>null))}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}update(s,r){this.config=r;const n=r.schema.processors[0].storage,a=f(this._schema,n);if((s.targets.feature||s.targets.aggregate)&&(s.storage.data=!0),a&&(t("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",a),s.storage.data=!0,this._schema=n,this._attributeComputeMap.clear(),!i(n))){switch(n.target){case"feature":this._targetType=N;break;case"aggregate":this._targetType=k}if("subtype"===n.type)for(const t in n.mapping){const s=n.mapping[t];if(e(s))for(const t of s.mapping)this._bindAttribute(t)}else for(const t of n.mapping)this._bindAttribute(t)}}onTileData(t,e){if(i(e.addOrUpdate))return;const s=e.addOrUpdate.getCursor();for(;s.next();){const t=s.getDisplayId();this.setAttributeData(t,s)}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=new AbortController}async setHighlight(t,e){const s=this._getBlock(0),r=e.map((t=>M(t)));s.lock(),s.unsetComponentAllTexels(0,1),s.setComponent(0,1,r),s.unlock(),this._idsToHighlight.clear();for(const e of t)this._idsToHighlight.add(e);await this.sendUpdates()}async updateFilters(e,s){const{config:r,service:i,spatialReference:n}=s,{filters:a}=r,o=a.map(((t,e)=>this._updateFilter(t,e,i,n)));(await Promise.all(o)).some((t=>t))&&(e.storage.filters=!0,t("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,r){const i=M(t);this._ensureSizeForTexel(i),this._getBlock(e).setData(t,s,r)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?C:0}unsetAttributeData(t){const e=M(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=M(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==U(t))return;const r=this._attributeComputeMap,i=this.config.supportsTextureFloat?1:2;r.size&&r.forEach(((t,r)=>{const n=r*i%4,a=Math.floor(r*i/4),o=this._getBlock(a+F),h=t(e);if(this.config.supportsTextureFloat)o.setData(s,n,h);else if(h===w)o.setData(s,n,255),o.setData(s,n+1,255);else{const t=T(Math.round(h),-32767,32766)+32768,e=255&t,r=(65280&t)>>8;o.setData(s,n,e),o.setData(s,n+1,r)}}))}sendUpdates(){if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=g(),this._nextUpdate.promise;const t={blocks:this._blocks.map((t=>e(t)?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()))}},s=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),s})).catch((t=>p(t)?(this._createResourcesPromise=null,this._createResources()):(ot.error(new m("mapview-attribute-store","Encountered an error during client update",t)),Promise.resolve()))),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){let e;if(null!=t.fieldIndex)t.normalizationField&&ot.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),e=e=>e.getComputedNumericAtIndex(t.fieldIndex);else{if(!t.field)return;e=t.normalizationField?e=>{const s=e.readAttribute(t.normalizationField);return s?e.readAttribute(t.field)/s:null}:e=>e.readAttribute(t.field)}t.valueRepresentation&&(e=dt(e,(e=>B(e,t.valueRepresentation))));this._attributeComputeMap.set(t.binding,dt(e,(t=>null===t||isNaN(t)||t===1/0?w:t)))}_createResources(){if(e(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(D),this._getBlock(E),ht("Initializing AttributeStore");const t={shared:ut.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:y(this._blocks,(t=>({textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType})))},s=this._client.initialize(t,this._signal).catch((t=>{p(t)?this._createResourcesPromise=null:ot.error(new m("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=s,s.then((()=>i(this._createResourcesPromise)?this._createResources():void 0)),s}_getBlock(t){const s=this._blocks[t];if(e(s))return s;ht(`Initializing AttributeBlock at index ${t}`);const r=ut.sharedArrayBuffer,i=this._client.type,n=new lt(r,i,this._size,this._blockDescriptors[t]);return this._blocks[t]=n,this._createResourcesPromise=null,n}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return ht("Expanding block size to",t,this._blocks),b(this._blocks,(e=>e.expand(t))),this._createResourcesPromise=null,this._size=t,0}return ot.error(new m("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,s,r,n){const a=this._filters[s],o=e(a)&&a.hash;if(!a&&!t)return!1;if(o===JSON.stringify(t))return!1;if(i(t)){if(!a)return!1;const t=1<<s+1,e=this._getBlock(0);return this._filters[s]=null,e.setComponentAllTexels(0,t),this.sendUpdates(),!0}const h=await this._getFilter(s,r);return await h.update(t,n),!0}async _getFilter(t,s){const r=this._filters[t];if(e(r))return r;const{default:i}=await import("./FeatureFilter-a70f0e8b.js"),n=new i({geometryType:s.geometryType,hasM:!1,hasZ:!1,timeInfo:s.timeInfo,fieldsIndex:new x(s.fields)});return this._filters[t]=n,n}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=v(t.getDisplayId());for(let r=0;r<this._filters.length;r++){const n=!!(s&1<<r),a=this._filters[r];e|=(!n||i(a)||a.check(t)?1:0)<<r}let r=0;if(this._idsToHighlight.size){const e=t.getObjectId();r=this.getHighlightFlag(e)}return e<<1|r}}class _t{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return G(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}function ft(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s)}class gt{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new _t,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(H.create(this._allocatedSize,O)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),ft(this._numerics[t],e,0)}_ensureInstanceId(t){ft(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),ft(this._strings[t],e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),G(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&O)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&O,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&O,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&O,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&O,0,s)}getComputedNumericAtIndex(t,e){const s=t&O;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const r=t&O;this._ensureNumeric(e,r),this._numerics[e][r]=s}getInstanceId(t){const e=t&O;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&O;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&O;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const r=t&O;this._ensureString(e,r),this._strings[e][r]=s}getXMin(t){return this._bounds[4*(t&O)]}getYMin(t){return this._bounds[4*(t&O)+1]}getXMax(t){return this._bounds[4*(t&O)+2]}getYMax(t){return this._bounds[4*(t&O)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let r=1/0,i=1/0,n=-1/0,a=-1/0;s.forEachVertex(((t,e)=>{r=Math.min(r,t),i=Math.min(i,e),n=Math.max(n,t),a=Math.max(a,e)}));const o=t&O;return ft(this._bounds,4*o+4,0),this._bounds[4*o]=r,this._bounds[4*o+1]=i,this._bounds[4*o+2]=n,this._bounds[4*o+3]=a,!0}}export{ct as M,at as d,nt as j,gt as r,H as t};
