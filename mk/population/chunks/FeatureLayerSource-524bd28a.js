import{bB as e,V as t,W as a,X as s,cb as r,r as i,s as n,t as u,cc as l,L as o,cd as d,bO as c,ce as h,cf as y,a as p,cg as m,aS as F,ca as R,c3 as g,c8 as b}from"../main.js";import{u as f}from"./clientSideDefaults-ad48ac6b.js";import"./QueryEngineCapabilities-b5b7bcb4.js";const q=new e({originalAndCurrentFeatures:"original-and-current-features",none:"none"});const _=new Set(["Feature Layer","Table"]);let I=class extends r{constructor(){super(...arguments),this.type="feature-layer"}load(e){const t=i(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:a,infoFor3D:s,gdbVersion:r,spatialReference:i,fieldsIndex:o}=this.layer,d=n("featurelayer-pbf")&&e&&u(s)?"pbf":"json";return new l({url:t.path,format:d,fieldsIndex:o,infoFor3D:s,dynamicDataSource:a,gdbVersion:r,sourceSpatialReference:i})}async addAttachment(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/addAttachment",r=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(t,r.query);try{const e=await o(s,{body:i});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}async updateAttachment(e,t,a){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:t}}),n=this._getFormDataForAttachment(a,i.query);try{const e=await o(r,{body:n});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}async applyEdits(e,t){await this.load();const a=e.addFeatures.map(this._serializeFeature,this),s=e.updateFeatures.map(this._serializeFeature,this),r=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed);d(a,s,this.layer.spatialReference);const i=[],n=[],u=[...e.deleteAttachments];for(const t of e.addAttachments)i.push(await this._serializeAttachment(t));for(const t of e.updateAttachments)n.push(await this._serializeAttachment(t));const l=i.length||n.length||u.length?{adds:i,updates:n,deletes:u}:null,c={gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,returnEditMoment:null==t?void 0:t.returnEditMoment,usePreviousEditMoment:null==t?void 0:t.usePreviousEditMoment,sessionId:null==t?void 0:t.sessionId};null!=t&&t.returnServiceEditsOption?(c.edits=JSON.stringify([{id:this.layer.layerId,adds:a,updates:s,deletes:r,attachments:l}]),c.returnServiceEditsOption=q.toJSON(null==t?void 0:t.returnServiceEditsOption),c.returnServiceEditsInSourceSR=null==t?void 0:t.returnServiceEditsInSourceSR):(c.adds=a.length?JSON.stringify(a):null,c.updates=s.length?JSON.stringify(s):null,c.deletes=r.length?null!=t&&t.globalIdUsed?JSON.stringify(r):r.join(","):null,c.attachments=l&&JSON.stringify(l));const h=this._getLayerRequestOptions({method:"post",query:c}),y=null!=t&&t.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,p=await o(y+"/applyEdits",h);return this._createEditsResult(p)}async deleteAttachments(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await o(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:s}=this.layer,{data:r}=await o(`${s}/${a}`,t),{id:i,extent:n,fullExtent:u,timeExtent:l}=r,d=n||u;return{id:i,fullExtent:d&&c.fromJSON(d),timeExtent:l&&h.fromJSON({start:l[0],end:l[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:a}=this.layer,s=a.path;await this.load();const r=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,a=[];for(const e of t){const t=s+"/"+e+"/attachments";a.push(o(t,r))}return Promise.all(a).then((e=>t.map(((t,a)=>({parentObjectId:t,attachmentInfos:e[a].data.attachmentInfos}))))).then((e=>y(e,s)))}return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}_createRequestQueryOptions(e){return{...this.layer.customParameters,token:this.layer.apiKey,...null==e?void 0:e.query}}async _fetchService(e){let t=this.layer.sourceJSON;if(!t){const{data:a}=await o(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:n("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=a}this.sourceJSON=this._patchServiceJSON(t);const a=t.type;if(!_.has(a))throw new p("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=f(e.geometryType).renderer;m("drawingInfo.renderer",t,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e){const{geometry:t,attributes:a}=e;return u(t)?{attributes:a}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:a}}async _serializeAttachment(e){const{feature:t,attachment:a}=e,{globalId:s,name:r,contentType:i,data:n,uploadId:u}=a,l={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(l.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),u)l.uploadId=u;else if(n){const e=await async function(e){if("string"==typeof e)return b(e)||{data:e};return new Promise(((t,a)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(b(s.result)),s.onerror=e=>a(e)}))}(n);l.contentType=e.mediaType,l.data=e.data,n instanceof File&&(l.name=n.name)}return r&&(l.name=r),i&&(l.contentType=i),l}_getFeatureIds(e,t){const a=e[0];return a?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in a?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){var t;const a=e.data,{layerId:s}=this.layer,r=[];let i=null;if(Array.isArray(a))for(const e of a)r.push({id:e.id,editedFeatures:e.editedFeatures}),e.id===s&&(i={addResults:e.addResults,updateResults:e.updateResults,deleteResults:e.deleteResults,attachments:e.attachments,editMoment:e.editMoment});else i=a;const n=null==(t=i)?void 0:t.attachments,u={addFeatureResults:i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:n&&n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:n&&n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:n&&n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[]};if(i.editMoment&&(u.editMoment=i.editMoment),r.length>0){u.editedFeatureResults=[];for(const e of r){const{adds:t,updates:a,deletes:s,spatialReference:r}=e.editedFeatures,i=r?new F(r):null;u.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==t?void 0:t.map((e=>this._createEditedFeature(e,i))))||[],updates:(null==a?void 0:a.map((e=>({original:this._createEditedFeature(e[0],i),current:this._createEditedFeature(e[1],i)}))))||[],deletes:(null==s?void 0:s.map((e=>this._createEditedFeature(e,i))))||[],spatialReference:i}})}}return u}_createEditedFeature(e,t){return new R({attributes:e.attributes,geometry:g({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new p("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const a=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new p("feature-layer-source:attachment-failure",a,{code:s})}}_getFormDataForAttachment(e,t){const a=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(a)for(const e in t){const s=t[e];null!=s&&(a.set?a.set(e,s):a.append(e,s))}return a}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:a,dynamicDataSource:s}=this.layer;return{...e,query:{gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};t([a()],I.prototype,"type",void 0),t([a({constructOnly:!0})],I.prototype,"layer",void 0),t([a({readOnly:!0})],I.prototype,"queryTask",null),I=t([s("esri.layers.graphics.sources.FeatureLayerSource")],I);var O=I;export{O as default};
