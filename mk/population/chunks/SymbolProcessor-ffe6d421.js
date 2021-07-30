import{n as e,V as t,X as s,bK as r,em as a,s as i,k as o,r as n,aS as l,A as c,t as d,ey as m,g as u,x as f,bh as h}from"../main.js";import{r as p}from"./Utils-c52d8073.js";import{r as g,k as y,u as b,i as _,E as S,c as v}from"./Matcher-5642d045.js";import{n as j}from"./schemaUtils-de46570b.js";import{p as D}from"./BaseProcessor-b7b772af.js";import{v as T}from"./TileStore-b4d9c715.js";import"./Texture-e92108c0.js";import"./definitions-bd7968b3.js";import"./tileUtils-a2865f52.js";import"./visualVariablesUtils-ceb32bcd.js";import"./visualVariablesUtils-887ee144.js";import"./MaterialKey-efe53db3.js";import"./CIMSymbolHelper-08e81b2e.js";import"./GeometryUtils-30b98fd3.js";import"./earcut-26dd4f9f.js";import"./TileClipper-335c99be.js";import"./cimAnalyzer-a778e754.js";import"./quantizationUtils-e2c43fb9.js";import"./Rect-46a6423d.js";import"./BidiEngine-a3336f07.js";import"./MD5-73ac3f43.js";import"./FeatureSetReader-f769b915.js";import"./centroid-3acadd71.js";import"./quickselect-2a5dada6.js";function w(e,t){return(!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function k(e){const t=e.message,s={message:{data:{},tileKey:t.tileKey},transferList:new Array};for(const e in t.data){const r=t.data[e];if(s.message.data[e]=null,n(r)){const t=r.stride,a=r.indices.slice(0),i=r.vertices.slice(0),o=r.records.slice(0),n={stride:t,indices:a,vertices:i,records:o,metrics:c(r.metrics,(e=>e.slice(0)))};s.transferList.push(a,i,o),s.message.data[e]=n}}return s}e.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let C=class extends D{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}destroy(){}get supportsTileUpdates(){return!0}async update(e,t){const s=t.schema.processors[0];if("symbol"!==s.type)return;const o=r(this._schema,s);a(o,"mesh")&&(i("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",o),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=s,this._factory=this._createFactory(s),this._factory.update(s,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,s,r){return o(r),this._onTileData(e,t,s,r)}onTileClear(e){return this._bufferData.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}onTileError(e,t,s){const r=s.signal,a={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",a,{signal:r})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&(this._bufferData.get(t.key.id).forEach((e=>{const t=new Set;p((s=>{const r=e.message.data[s];if(n(r)){const e=g.from(r.records).getCursor();for(;e.next();)t.add(e.id)}}));const s=e.message.tileKey;return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:s,data:{type:"update",addOrUpdate:null}})})),this._bufferData.delete(t.key.id));for(const t of e.added)this._bufferData.forEach((e=>{for(const s of e)s.message.tileKey===t.id&&this._updateTileMesh("append",t,k(s),[],!1,!1,null)}))}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(k(t))}_createFactory(e){const{geometryType:t,objectIdField:s,fields:r}=this.service,a={geometryType:t,fields:r,spatialReference:l.fromJSON(this.spatialReference)},i=new y(((e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t)),this.tileStore.tileScheme.tileInfo),{matcher:o,aggregateMatcher:n}=e.mesh;return this._store=i,this._matchers.feature=b(o,i,a),this._matchers.aggregate=c(n,(e=>b(e,i,a))),new _(t,s,i)}async _onTileData(e,t,s,r){const{type:a,addOrUpdate:i,remove:o}=t,n=t.end;if(!i){const t={type:a,addOrUpdate:null,remove:o,clear:!1,end:n};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const l=this._processFeatures(e,i,s,r);try{const s=await l;if(d(s)){const t={type:a,addOrUpdate:null,remove:o,clear:!1,end:n};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}for(const t of s)e.key.id!==t.message.tileKey&&this._addBufferData(e.key.id,t);await m(s.map((s=>{const i=e.key.id===s.message.tileKey,o=i?t.remove:[],n=i&&t.end;return this._updateTileMesh(a,e,s,o,n,t.clear,r.signal)})))}catch(t){this._handleError(e,t,r)}}async _updateTileMesh(e,t,s,r,a,i,n){const l=e,d=s.message.tileKey;d!==t.key.id&&(a=!1);const m=c(s,(e=>e.message)),u=c(s,(e=>e.transferList))||[],f={type:l,addOrUpdate:m,remove:r,clear:!1,end:a},p={transferList:h(u)||[],signal:n};return o(p),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:d,data:f},p)}async _processFeatures(e,t,s,r){if(d(t)||!t.hasFeatures)return null;const a={transform:e.transform,hasZ:!1,hasM:!1},i=this._factory,n={viewingMode:"",scale:e.scale},l=await this._matchers.feature,c=await this._matchers.aggregate;o(r);const m=this._getLabelInfos(e,t);return await i.analyze(t.getCursor(),l,c,a,n),o(r),this._writeFeatureSet(e,t,a,m,i,s)}_writeFeatureSet(e,t,s,r,a,i){const o=t.getSize(),l="simple"===this._schema.mesh.matcher.type&&this._schema.mesh.matcher.isDotDensity,c=new S(e.key.id,{features:o,records:o,metrics:0},l,i,!0),d={viewingMode:"",scale:e.scale},m=t.getCursor();for(;m.next();)try{const t=m.getDisplayId(),i=n(r)?r.get(t):null;a.writeCursor(c,m,s,d,e.level,i)}catch(e){}const u=e.tileInfoView.tileInfo.isWrappable;return c.serialize(u)}_handleError(e,t,s){if(!u(t)){const r={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(d(t))return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let r=!1;for(const a in t.classes){const i=t.classes[a].filter((t=>w(t,e.scale)));r=r||!!i.length,s.classes[a]=i}return r?s:null}const s=t.classes.filter((t=>w(t,e.scale)));return s.length?{type:"simple",classes:s}:null}_getLabels(e,t){if("subtype"===t.type){var s;const r=this.service.subtypeField,a=f(r,"Expected to find subtype Field"),i=e.readAttribute(a);return null==i?[]:null!=(s=t.classes[i])?s:[]}return t.classes}_getLabelInfos(e,t){const s=this._getLabelingSchemaForScale(e);if(d(s))return null;const r=new Map,a=t.getCursor();for(;a.next();){const e=a.getDisplayId(),t=[],i=T(e),o=i&&1!==a.readAttribute("cluster_count")?"aggregate":"feature",n=this._getLabels(a,s);for(const s of n){if(s.target!==o)continue;const r=a.getStorage(),n=i&&"feature"===o?r.getComputedStringAtIndex(a.readAttribute("referenceId"),s.fieldIndex):r.getComputedStringAtIndex(e,s.fieldIndex);if(!n)continue;const l=j(n.toString()),c=l[0],d=l[1];this._store.getMosaicItem(s.symbol,v(c)).then((e=>{t[s.index]={glyphs:e.glyphMosaicItems,rtl:d,index:s.index}}))}r.set(e,t)}return r}};C=t([s("esri.views.2d.layers.features.processors.SymbolProcessor")],C);var I=C;export{I as default};
