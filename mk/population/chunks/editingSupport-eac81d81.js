import{b2 as e,a as t,c2 as a,r,c3 as s,c4 as i,c5 as d}from"../main.js";async function n(t,a,r,s={}){let i,d;const n={edits:r,result:new Promise(((e,t)=>{i=e,d=t}))};t.emit("apply-edits",n);try{var o;const{results:d,edits:n}=await l(t,a,r,s),u=t=>t.filter((e=>!e.error)).map(e),p={edits:n,addedFeatures:u(d.addFeatureResults),updatedFeatures:u(d.updateFeatureResults),deletedFeatures:u(d.deleteFeatureResults),addedAttachments:u(d.addAttachmentResults),updatedAttachments:u(d.updateAttachmentResults),deletedAttachments:u(d.deleteAttachmentResults)};return null!=(o=d.editedFeatureResults)&&o.length&&(p.editedFeatures=d.editedFeatureResults),(p.addedFeatures.length||p.updatedFeatures.length||p.deletedFeatures.length||p.addedAttachments.length||p.updatedAttachments.length||p.deletedAttachments.length)&&t.emit("edits",p),i(p),d}catch(e){throw d(e),e}}async function l(e,r,s,i){if(await e.load(),!function(e){return e&&null!=e.applyEdits}(r))return Promise.reject(new t(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new t(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:d,options:n}=await async function(e,r,s){const i=r&&(r.addFeatures||r.updateFeatures||r.deleteFeatures),d=r&&(r.addAttachments||r.updateAttachments||r.deleteAttachments);if(!r||!i&&!d)throw new t(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&s&&s.gdbVersion)throw new t(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&s&&s.rollbackOnFailureEnabled)throw new t(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&s&&s.globalIdUsed)throw new t(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&d)throw new t(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!s||!s.globalIdUsed)&&d)throw new t(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const n={...s};if(null!=n.rollbackOnFailureEnabled||e.capabilities.editing.supportsRollbackOnFailure||(n.rollbackOnFailureEnabled=!0),!1===n.rollbackOnFailureEnabled&&"original-and-current-features"===n.returnServiceEditsOption)throw new t(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&n.returnServiceEditsInSourceSR)throw new t(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(n.returnServiceEditsInSourceSR&&"original-and-current-features"!==n.returnServiceEditsOption)throw new t(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const l={...r};if(l.addFeatures=r&&a.isCollection(r.addFeatures)?r.addFeatures.toArray():l.addFeatures||[],l.updateFeatures=r&&a.isCollection(r.updateFeatures)?r.updateFeatures.toArray():l.updateFeatures||[],l.deleteFeatures=r&&a.isCollection(r.deleteFeatures)?r.deleteFeatures.toArray():l.deleteFeatures||[],l.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new t(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(l.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new t(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(l.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new t(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");l.addAttachments=l.addAttachments||[],l.updateAttachments=l.updateAttachments||[],l.deleteAttachments=l.deleteAttachments||[],l.addFeatures=l.addFeatures.map(h),l.updateFeatures=l.updateFeatures.map(h);const y=s&&s.globalIdUsed;return l.addFeatures.forEach((t=>function(e,t,a){o(e,t,a)}(t,e,y))),l.updateFeatures.forEach((t=>u(t,e,y))),l.deleteFeatures.forEach((t=>function(e,t,a){o(e,t,a)}(t,e,y))),l.addAttachments.forEach((t=>p(t,e))),l.updateAttachments.forEach((t=>p(t,e))),{edits:await c(l),options:n}}(e,s,i);return d.addFeatures.length||d.updateFeatures.length||d.deleteFeatures.length||d.addAttachments.length||d.updateAttachments.length||d.deleteAttachments.length?{edits:d,results:await r.applyEdits(d,n)}:{edits:d,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}function o(e,a,s){if(s){if("attributes"in e&&!e.attributes[a.globalIdField])throw new t(`${a.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new t(`${a.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&r(e.geometry)){if(e.geometry.hasZ&&!1===a.capabilities.data.supportsZ)throw new t(`${a.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===a.capabilities.data.supportsM)throw new t(`${a.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function u(e,a,s){if(o(e,a,s),"geometry"in e&&r(e.geometry)&&!a.capabilities.editing.supportsGeometryUpdate)throw new t(`${a.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function p(e,a){const{feature:r,attachment:i}=e;if(!r||"attributes"in r&&!r.attributes[a.globalIdField])throw new t(`${a.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new t(`${a.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!i.globalId)throw new t(`${a.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!i.data&&!i.uploadId)throw new t(`${a.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(i.data instanceof File&&i.data.name||i.name))throw new t(`${a.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!a.capabilities.editing.supportsUploadWithItemId&&i.uploadId)throw new t(`${a.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof i.data){const e=s(i.data);if(e&&!e.isBase64)throw new t(`${a.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function c(e){const t=e.addFeatures,a=e.updateFeatures,r=t.concat(a).map((e=>e.geometry)),s=await i(r),d=t.length,n=a.length;return s.slice(0,d).forEach(((t,a)=>e.addFeatures[a].geometry=t)),s.slice(d,d+n).forEach(((t,a)=>e.updateFeatures[a].geometry=t)),e}function h(e){const t=new d;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}export{n as applyEdits};
