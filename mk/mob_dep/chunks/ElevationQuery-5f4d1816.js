import{s as e,a8 as t,cx as i,an as s,c3 as n,cy as a,t as o,cz as l,D as r,r as c,e as u,bn as h,cA as p,cB as m,cC as f,aW as d,cu as y,cD as x,cE as v,cF as T,cG as g}from"../main.js";const w=e.getLogger("esri.layers.support.ElevationSampler");class R{queryElevation(e){return function(e,t){const i=q(e,t.spatialReference);if(!i)return null;switch(e.type){case"point":!function(e,t,i){e.z=r(i.elevationAt(t),0)}(e,i,t);break;case"polyline":!function(e,t,i){A.spatialReference=t.spatialReference;const s=e.hasM&&!e.hasZ;for(let n=0;n<e.paths.length;n++){const a=e.paths[n],o=t.paths[n];for(let e=0;e<a.length;e++){const t=a[e],n=o[e];A.x=n[0],A.y=n[1],s&&(t[3]=t[2]),t[2]=r(i.elevationAt(A),0)}}e.hasZ=!0}(e,i,t);break;case"multipoint":!function(e,t,i){A.spatialReference=t.spatialReference;const s=e.hasM&&!e.hasZ;for(let n=0;n<e.points.length;n++){const a=e.points[n],o=t.points[n];A.x=o[0],A.y=o[1],s&&(a[3]=a[2]),a[2]=r(i.elevationAt(A),0)}e.hasZ=!0}(e,i,t)}return e}(e.clone(),this)}on(){return D}projectIfRequired(e,t){return q(e,t)}}class _ extends R{constructor(e,t,s){super(),this.tile=e,this.noDataValue=s,this.extent=i(e.tile.extent,t.spatialReference);const a=n(t.spatialReference),o=t.lodAt(e.tile.level).resolution*a;this.demResolution={min:o,max:o}}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return a(this.extent,t)}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(o(t))return null;if(!this.contains(e)){const t=this.extent,i=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;return w.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${i})`),this.noDataValue}return this.tile.sample(t.x,t.y)}}class E extends R{constructor(e,t,n){let a;super(),"number"==typeof t?(this.noDataValue=t,a=null):(a=t,this.noDataValue=n),this.samplers=a?e.map((e=>new _(e,a,this.noDataValue))):e;const o=this.samplers[0];if(o){this.extent=o.extent.clone();const{min:e,max:t}=o.demResolution;this.demResolution={min:e,max:t};for(let e=1;e<this.samplers.length;e++){const t=this.samplers[e];this.extent.union(t.extent),this.demResolution.min=Math.min(this.demResolution.min,t.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,t.demResolution.max)}}else this.extent=i(s(),a.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const e of this.samplers)if(e.contains(t))return e.elevationAt(t);return w.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),this.noDataValue}}function q(e,t){if(o(e))return null;const i=e.spatialReference;if(i.equals(t))return e;const s=l(e,t);return s||w.error(`Cannot project geometry spatial reference (wkid:${i.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),s}const A=new t,D={remove(){}};class I{constructor(e,t=null){if(this.tile=e,c(t)){const i=e.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}}sample(e,t){if(o(this.samplerData))return;const{safeWidth:i,width:s,pixelData:n,noDataValue:a,dx:l,dy:r,y1:c,x0:u}=this.samplerData,h=C(r*(c-t),0,i),p=C(l*(e-u),0,i),m=Math.floor(h),f=Math.floor(p),d=m*s+f,y=d+s,x=n[d],v=n[y],T=n[d+1],g=n[y+1];if(x!==a&&v!==a&&T!==a&&g!==a){const e=p-f,t=x+(T-x)*e;return t+(v+(g-v)*e-t)*(h-m)}}}function C(e,t,i){return e<t?t:e>i?i:e}class F{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new u("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const s=M.fromGeometry(t);let n=!1;i&&i.returnSampleInfo||(n=!0);const a={...k,...i,returnSampleInfo:!0},o=await this.query(e[e.length-1],s,a),l=await this._queryAllContinue(e,o,a);return l.geometry=l.geometry.export(),n&&delete l.sampleInfo,l}async query(e,t,i){if(!e)throw new u("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof M)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new u("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const s={...k,...i},n=new S(e,t.spatialReference,s),a=s.signal;return await e.load({signal:a}),await this._createGeometryDescriptor(n,t,a),await this._selectTiles(n,a),await this._populateElevationTiles(n,a),this._sampleGeometryWithElevation(n),this._createQueryResult(n,a)}async createSampler(e,t,i){if(!e)throw new u("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new u("elevation-query:invalid-extent","Invalid or undefined extent");const s={...k,...i};return this._createSampler(e,t,s)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new u("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new u("elevation-query:invalid-extent","Invalid or undefined extent");const s={...k,...i,returnSampleInfo:!0},n=await this._createSampler(e[e.length-1],t,s);return this._createSamplerAllContinue(e,t,n,s)}async _createSampler(e,t,i,s){const n=i.signal;await e.load({signal:n});const a=t.spatialReference,o=e.tileInfo.spatialReference;a.equals(o)||(await h([{source:a,dest:o}],{signal:n}),t=p(t,o));const l=new b(e,t,i,s);return await this._selectTiles(l,n),await this._populateElevationTiles(l,n),new E(l.elevationTiles,l.layer.tileInfo,l.options.noDataValue)}async _createSamplerAllContinue(e,t,i,s){if(e.pop(),!e.length)return i;const n=i.samplers.map((e=>m(e.extent))),a=await this._createSampler(e[e.length-1],t,s,n);if(0===a.samplers.length)return i;const o=i.samplers.concat(a.samplers),l=new E(o,s.noDataValue);return this._createSamplerAllContinue(e,t,l,s)}async _queryAllContinue(e,t,i){const s=e.pop(),n=t.geometry.coordinates,a=[],o=[];for(let i=0;i<n.length;i++){const l=t.sampleInfo[i];l.demResolution>=0?l.source||(l.source=s):e.length&&(a.push(n[i]),o.push(i))}if(!e.length||0===a.length)return t;const l=t.geometry.clone(a),r=await this.query(e[e.length-1],l,i);return o.forEach(((e,i)=>{n[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i}async _createGeometryDescriptor(e,t,i){let s;const n=e.layer.tileInfo.spatialReference;if(t instanceof M?s=await t.project(n,i):(await h([{source:t.spatialReference,dest:n}],{signal:i}),s=p(t,n)),!s)throw new u("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${n.wkid}'`);e.geometry=M.fromGeometry(s)}async _selectTiles(e,t){const i=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof i)this._selectTilesClosestResolution(e);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new u("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if(o(e.layer.fullExtent))return;const t=new I(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const s=e.x,n=e.y;(s<i.xmin||s>i.xmax||n<i.ymin||n>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/n(e.spatialReference);let s=e.lods[0],a=0;for(let t=1;t<e.lods.length;t++){const n=e.lods[t];Math.abs(n.resolution-i)<Math.abs(s.resolution-i)&&(s=n,a=t)}return a}async _selectTilesFinestContiguous(e,t){const i=V(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,t,i){const s=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const n=s.tilemapCache,a=e.getTilesToFetch();try{if(n)await f(Promise.all(a.map((e=>n.fetchAvailability(e.level,e.row,e.col,{signal:i})))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new u("elevation-query:has-unavailable-tiles")}catch(s){d(s),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),s={},n=e.options.cache,a=e.options.noDataValue,o=i.map((async i=>{const o=`${e.layer.uid}:${i.id}:${a}`,l=c(n)?n.get(o):null,r=c(l)?l:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:a,signal:t});c(n)&&n.put(o,r),s[i.id]=new I(i,r)}));await f(y(o),t),e.populateElevationTiles(s)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const n=e.getTilesToFetch(),a={},o=n.map((async e=>{const n={id:null,level:0,row:0,col:0,extent:s()},o=await x(i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:t}));!1===o.ok?d(o.error):a[e.id]=n}));await f(Promise.all(o),t),e.remapTiles(a)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const s={},n=e=>{e.id in s?s[e.id]++:(s[e.id]=1,i++)},a=e=>{const t=s[e.id];1===t?(delete s[e.id],i--):s[e.id]=t-1};e.forEachTileToFetch(n,a);let o=!0;for(;o&&(o=!1,e.forEachTileToFetch((s=>{i<=e.options.maximumAutoTileRequests||(a(s),t.upsampleTile(s)&&(o=!0),n(s))}),a),o););}_selectTilesAutoFinest(e){const t=V(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let s=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?s=!0:t()})),s&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let s=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);c(e)?s=e:t.elevationTile=null}t.z=s}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=n(t.spatialReference);return e.geometry.coordinates.map((s=>{let n=-1;return s.elevationTile&&s.elevationTile!==e.outsideExtentTile&&(n=t.lodAt(s.elevationTile.tile.level).resolution*i),{demResolution:n}}))}}class M{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new M;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>this._cloneCoordinate(e))),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await h([{source:this.spatialReference,dest:e}],{signal:t});const i=new v({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),s=p(i,e);if(!s)return null;const n=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),n=s.points[t];return i.x=n[0],i.y=n[1],i})),a=this.clone(n);return a.spatialReference=e,a}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const i=new M;if(i.geometry=e,i.spatialReference=e.spatialReference,e instanceof M)i.coordinates=e.coordinates.map((e=>i._cloneCoordinate(e))),i._exporter=(t,i)=>{const s=e.clone(t);return s.spatialReference=i,s};else switch(e.type){case"point":{const s=e,{hasZ:n,hasM:a}=s;i.coordinates=n&&a?[{x:s.x,y:s.y,z:s.z,m:s.m}]:n?[{x:s.x,y:s.y,z:s.z}]:a?[{x:s.x,y:s.y,m:s.m}]:[{x:s.x,y:s.y}],i._exporter=(i,s)=>e.hasM?new t(i[0].x,i[0].y,i[0].z,i[0].m,s):new t(i[0].x,i[0].y,i[0].z,s);break}case"multipoint":{const t=e,{hasZ:s,hasM:n}=t;i.coordinates=s&&n?t.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):s?t.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):n?t.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):t.points.map((e=>({x:e[0],y:e[1]}))),i._exporter=(t,i)=>e.hasM?new v({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new v(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const t=e,s=[],n=[],{hasZ:a,hasM:o}=e;let l=0;for(const e of t.paths)if(n.push([l,l+e.length]),l+=e.length,a&&o)for(const t of e)s.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(a)for(const t of e)s.push({x:t[0],y:t[1],z:t[2]});else if(o)for(const t of e)s.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)s.push({x:t[0],y:t[1]});i.coordinates=s,i._exporter=(t,i)=>{const s=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),a=n.map((e=>s.slice(e[0],e[1])));return new T({paths:a,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return i}}class z{constructor(e,t){this.layer=e,this.options=t}}class S extends z{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y)}))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const s=i.tile;i.elevationTile||!i.tile||e[s.id]||(e[s.id]=s,t.push(s))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))}}class b extends z{constructor(e,t,i,s){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=s}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),s=Math.min(i,e);s<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(s)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;if(o(i))return-1;for(let s=t.lods.length-1;s>=0;s--){const n=t.lods[s],a=n.resolution*t.size[0],o=n.resolution*t.size[1];if(Math.ceil(i.width/a)*Math.ceil(i.height/o)<=e)return s}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let s=!1;e(i,(()=>s=!0)),s?t&&t(i):this.candidateTiles.push(i)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},s=[];for(const n of e)i[n.id]?t&&t(n):(i[n.id]=n,s.push(n));const n=s.sort(((e,t)=>e.level-t.level));return n.filter(((e,i)=>{for(let s=0;s<i;s++)if(g(n[s].extent,e.extent))return t&&t(e),!1;return!0}))}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.extent;if(o(t))return;const i=this.layer.tileInfo,s=i.lods[e],n=i.tileAt(s.level,t.xmin,t.ymin),a=s.resolution*i.size[0],l=s.resolution*i.size[1],r=Math.ceil((t.xmax-n.extent[0])/a),c=Math.ceil((t.ymax-n.extent[1])/l);for(let e=0;e<c;e++)for(let t=0;t<r;t++){const s={id:null,level:n.level,row:n.row-e,col:n.col+t};i.updateTileInfo(s),this._tileIsMasked(s)||this.candidateTiles.push(s)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>g(t,e.extent)))}}function V(e,t){let i=e.lods.length-1;if(t>0){const s=e.lods.findIndex((e=>e.resolution<t));0===s?i=0:s>0&&(i=s-1)}return i}const k={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export{F as ElevationQuery,M as GeometryDescriptor,F as default,V as getFinestLodIndex};
