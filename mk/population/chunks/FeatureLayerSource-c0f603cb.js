import{cd as e,Z as t,_ as a,a0 as s,cl as r,cm as i,r as n,d as u,t as l,cn as o,C as d,co as c,cp as h,cq as y,cr as p,e as m,cs as f,aT as g,ck as F,bO as R,ci as b}from"../main.js";import{n as q}from"./clientSideDefaults-1a221598.js";import"./QueryEngineCapabilities-a7990f7e.js";const I=new e({originalAndCurrentFeatures:"original-and-current-features",none:"none"});const _=new Set(["Feature Layer","Table"]);let O=class extends r{constructor(){super(...arguments),this.type="feature-layer",this.refresh=i((async()=>{var e,t;await this.load();const a=null==(e=this.sourceJSON.editingInfo)?void 0:e.lastEditDate;if(null==a)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const s=a!==(null==(t=this.sourceJSON.editingInfo)?void 0:t.lastEditDate);return{dataChanged:s,updates:s?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}))}load(e){const t=n(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:a,infoFor3D:s,gdbVersion:r,spatialReference:i,fieldsIndex:n}=this.layer,d=u("featurelayer-pbf")&&e&&l(s)?"pbf":"json";return new o({url:t.path,format:d,fieldsIndex:n,infoFor3D:s,dynamicDataSource:a,gdbVersion:r,sourceSpatialReference:i})}async addAttachment(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/addAttachment",r=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(t,r.query);try{const e=await d(s,{body:i});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}async updateAttachment(e,t,a){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:t}}),n=this._getFormDataForAttachment(a,i.query);try{const e=await d(r,{body:n});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}async applyEdits(e,t){await this.load();const a=e.addFeatures.map(this._serializeFeature,this),s=e.updateFeatures.map(this._serializeFeature,this),r=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed);c(a,s,this.layer.spatialReference);const i=[],n=[],u=[...e.deleteAttachments];for(const t of e.addAttachments)i.push(await this._serializeAttachment(t));for(const t of e.updateAttachments)n.push(await this._serializeAttachment(t));const l=i.length||n.length||u.length?{adds:i,updates:n,deletes:u}:null,o={gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,returnEditMoment:null==t?void 0:t.returnEditMoment,usePreviousEditMoment:null==t?void 0:t.usePreviousEditMoment,sessionId:null==t?void 0:t.sessionId};null!=t&&t.returnServiceEditsOption?(o.edits=JSON.stringify([{id:this.layer.layerId,adds:a,updates:s,deletes:r,attachments:l}]),o.returnServiceEditsOption=I.toJSON(null==t?void 0:t.returnServiceEditsOption),o.returnServiceEditsInSourceSR=null==t?void 0:t.returnServiceEditsInSourceSR):(o.adds=a.length?JSON.stringify(a):null,o.updates=s.length?JSON.stringify(s):null,o.deletes=r.length?null!=t&&t.globalIdUsed?JSON.stringify(r):r.join(","):null,o.attachments=l&&JSON.stringify(l));const h=this._getLayerRequestOptions({method:"post",query:o}),y=null!=t&&t.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,p=await d(y+"/applyEdits",h);return this._createEditsResult(p)}async deleteAttachments(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await d(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:s}=this.layer,{data:r}=await d(`${s}/${a}`,t),{id:i,extent:n,fullExtent:u,timeExtent:l}=r,o=n||u;return{id:i,fullExtent:o&&h.fromJSON(o),timeExtent:l&&y.fromJSON({start:l[0],end:l[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:a}=this.layer,s=a.path;await this.load();const r=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,a=[];for(const e of t){const t=s+"/"+e+"/attachments";a.push(d(t,r))}return Promise.all(a).then((e=>t.map(((t,a)=>({parentObjectId:t,attachmentInfos:e[a].data.attachmentInfos}))))).then((e=>p(e,s)))}return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...null==e?void 0:e.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:a}=await d(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:u("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=a}this.sourceJSON=this._patchServiceJSON(e);const a=e.type;if(!_.has(a))throw new m("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=q(e.geometryType).renderer;f("drawingInfo.renderer",t,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e){const{geometry:t,attributes:a}=e;return l(t)?{attributes:a}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:a}}async _serializeAttachment(e){const{feature:t,attachment:a}=e,{globalId:s,name:r,contentType:i,data:n,uploadId:u}=a,l={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(l.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),u)l.uploadId=u;else if(n){const e=await async function(e){if("string"==typeof e)return b(e)||{data:e};return new Promise(((t,a)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(b(s.result)),s.onerror=e=>a(e)}))}(n);l.contentType=e.mediaType,l.data=e.data,n instanceof File&&(l.name=n.name)}return r&&(l.name=r),i&&(l.contentType=i),l}_getFeatureIds(e,t){const a=e[0];return a?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in a?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){var t;const a=e.data,{layerId:s}=this.layer,r=[];let i=null;if(Array.isArray(a))for(const e of a)r.push({id:e.id,editedFeatures:e.editedFeatures}),e.id===s&&(i={addResults:e.addResults,updateResults:e.updateResults,deleteResults:e.deleteResults,attachments:e.attachments,editMoment:e.editMoment});else i=a;const n=null==(t=i)?void 0:t.attachments,u={addFeatureResults:i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:n&&n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:n&&n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:n&&n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[]};if(i.editMoment&&(u.editMoment=i.editMoment),r.length>0){u.editedFeatureResults=[];for(const e of r){const{adds:t,updates:a,deletes:s,spatialReference:r}=e.editedFeatures,i=r?new g(r):null;u.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==t?void 0:t.map((e=>this._createEditedFeature(e,i))))||[],updates:(null==a?void 0:a.map((e=>({original:this._createEditedFeature(e[0],i),current:this._createEditedFeature(e[1],i)}))))||[],deletes:(null==s?void 0:s.map((e=>this._createEditedFeature(e,i))))||[],spatialReference:i}})}}return u}_createEditedFeature(e,t){return new F({attributes:e.attributes,geometry:R({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const a=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new m("feature-layer-source:attachment-failure",a,{code:s})}}_getFormDataForAttachment(e,t){const a=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(a)for(const e in t){const s=t[e];null!=s&&(a.set?a.set(e,s):a.append(e,s))}return a}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:a,dynamicDataSource:s}=this.layer;return{...e,query:{gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};t([a()],O.prototype,"type",void 0),t([a({constructOnly:!0})],O.prototype,"layer",void 0),t([a({readOnly:!0})],O.prototype,"queryTask",null),O=t([s("esri.layers.graphics.sources.FeatureLayerSource")],O);const w=O;export{w as default};
