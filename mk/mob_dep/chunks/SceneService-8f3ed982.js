import{r as e,L as t,a as r,gM as o,cm as a,k as i,cx as s,n,V as l,W as p,gS as c,aT as d,cZ as u,bV as h,dc as y,dd as m,bE as f,X as g,d_ as v,gT as w,cV as S,gU as I,gV as x,gW as b,cp as _,cl as O,co as N}from"../main.js";import{getSiblingOfSameTypeI as R}from"./resourceUtils-368be33c.js";async function j(o,a,i,s,n,l){let p=null;if(e(i)){const r=`${o}/nodepages/`,a=r+Math.floor(i.rootIndex/i.nodesPerPage);try{return{type:"page",rootPage:(await t(a,{query:{f:"json",token:s},responseType:"json",signal:l})).data,rootIndex:i.rootIndex,pageSize:i.nodesPerPage,lodMetric:i.lodSelectionMetricType,urlPrefix:r}}catch(t){e(n)&&n.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,t),p=t}}if(!a)return null;const c=`${o}/nodes/`,d=c+(a&&a.split("/").pop());try{return{type:"node",rootNode:(await t(d,{query:{f:"json",token:s},responseType:"json",signal:l})).data,urlPrefix:c}}catch(e){throw new r("sceneservice:root-node-missing","Root node missing.",{pageError:p,nodeError:e,url:d})}}function T(e){return e&&"getAtOrigin"in e&&"originOf"in e}function P(e){e&&e.writtenProperties&&e.writtenProperties.forEach((e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&T(t)&&t.updateOrigin(e.propName,e.newOrigin)}))}async function E(e,t,s){if(!t||!t.resources)return;const n=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const l=new Set(t.resources.toKeep.map((e=>e.resource.path))),p=new Set,c=[];l.forEach((t=>{n.delete(t),e.paths.push(t)}));for(const r of t.resources.toUpdate)if(n.delete(r.resource.path),l.has(r.resource.path)||p.has(r.resource.path)){const{resource:t,content:a,finish:i,error:n}=r,l=R(t,o());e.paths.push(l.path),c.push(A({resource:l,content:a,finish:i,error:n},s))}else e.paths.push(r.resource.path),c.push(U(r,s)),p.add(r.resource.path);for(const r of t.resources.toAdd)c.push(A(r,s)),e.paths.push(r.resource.path);if(n.forEach((e=>{const r=t.portalItem.resourceFromPath(e);c.push(r.portalItem.removeResource(r).catch((()=>{})))})),0===c.length)return;const d=await a(c);i(s);const u=d.filter((e=>"error"in e)).map((e=>e.error));if(u.length>0)throw new r("save:resources","Failed to save one or more resources",{errors:u})}async function A(e,t){const r=await s(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function U(e,t){const r=await s(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}const K=n.getLogger("esri.layers.mixins.SceneService"),L=o=>{let a=class extends o{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=v((async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return d.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new d(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e)return h.fromJSON(e,r);const o=t.store,a=this._readSpatialReference(t);return null==a||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<M))?null:new h({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",a={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(".");return i.length>=2&&(a.major=parseInt(i[0],10),a.minor=parseInt(i[1],10)),a}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(t,r){const o=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return w(this.url,r.name);let a=r.name;if(!a&&this.url){const t=S(this.url);e(t)&&(a=t.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&o&&(a=o+" - "+a),I(a)}set url(e){const t=x({layer:this,url:e,nonStandardUrlAllowed:!1,logger:K});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){b(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=_(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=j(this.parsedUrl.path,this.rootNode,e,this.apiKey,K,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,o;const a=e.rootIndex%e.pageSize,i=null==(t=e.rootPage)||null==(o=t.nodes)?void 0:o[a];if(null==i||null==i.obb||null==i.obb.center||null==i.obb.halfSize)throw new r("sceneservice:invalid-node-page","Invalid node page.");if(i.obb.center[0]<M||null==this.fullExtent||this.fullExtent.hasZ)return;const s=i.obb.halfSize,n=i.obb.center[2],l=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=n-l,this.fullExtent.zmax=n+l}else if("node"===(null==e?void 0:e.type)){var a;const t=null==(a=e.rootNode)?void 0:a.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<M)return;const r=t[2],o=t[3];this.fullExtent.zmin=r-o,this.fullExtent.zmax=r+o}}async _fetchService(e){if(null==this.url)throw new r("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await t(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await t(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const o=r.data;this.read(o,{origin:"service",url:this.parsedUrl}),this.validateLayer(o)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const t of o)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const o={...F,...t};let a=O.from(e);a||(K.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new r("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),a.id&&(a=a.clone(),a.id=null);const i=a.portal||N.getDefault();await this._ensureLoadBeforeSave(),a.type=q,a.portal=i;const s={origin:"portal-item",url:null,messages:[],portal:i,portalItem:a,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write(null,s)]};return await Promise.all(s.resources.pendingOperations),await this._validateAgainstJSONSchema(n,s,o),a.url=this.url,a.title||(a.title=this.title),this._updateTypeKeywords(a,o,1),await i._signIn(),await i.user.addItem({item:a,folder:o&&o.folder,data:n}),await E(this.resourceReferences,s,null),this.portalItem=a,P(s),s.portalItem=a,a}async _save(e){const t={...F,...e};this.portalItem||(K.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new r("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==q&&(K.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+q),await Promise.reject(new r("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${q}"`))),await this._ensureLoadBeforeSave();const o={origin:"portal-item",url:this.portalItem.itemUrl&&_(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||N.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},a={layers:[this.write(null,o)]};return await Promise.all(o.resources.pendingOperations),await this._validateAgainstJSONSchema(a,o,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:a}),await E(this.resourceReferences,o,null),P(o),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let a=t.messages.filter((e=>"error"===e.type)).map((e=>new r(e.name,e.message,e.details)));if(o&&o.validationOptions.ignoreUnsupported&&(a=a.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),o.validationOptions.enabled||k){const t=(await import("./schemaValidator-8f8e179e.js")).validate(e,o.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(K.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===o.validationOptions.failPolicy){const e=t.map((e=>new r("sceneservice:schema-validation",e))).concat(a);throw new r("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(a.length>0)throw new r("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}};return l([p(c)],a.prototype,"id",void 0),l([p({type:d})],a.prototype,"spatialReference",void 0),l([u("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readSpatialReference",null),l([p({type:h})],a.prototype,"fullExtent",void 0),l([u("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readFullExtent",null),l([p({readOnly:!0,type:y})],a.prototype,"heightModelInfo",void 0),l([p({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],a.prototype,"minScale",void 0),l([p({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],a.prototype,"maxScale",void 0),l([p({readOnly:!0})],a.prototype,"version",void 0),l([u("version",["store.version"])],a.prototype,"readVersion",null),l([p({type:String,json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),l([p({type:String,json:{read:!1}})],a.prototype,"sublayerTitleMode",void 0),l([p({type:String})],a.prototype,"title",void 0),l([u("portal-item","title")],a.prototype,"readTitlePortalItem",null),l([u("service","title",["name"])],a.prototype,"readTitleService",null),l([p({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],a.prototype,"layerId",void 0),l([p(m)],a.prototype,"url",null),l([f("url")],a.prototype,"writeUrl",null),l([p()],a.prototype,"parsedUrl",null),l([p({readOnly:!0})],a.prototype,"store",void 0),l([p({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),a=l([g("esri.layers.mixins.SceneService")],a),a},M=-1e38,k=!1,q="Scene Service",F={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};export{L as R,T as i,j as n};
