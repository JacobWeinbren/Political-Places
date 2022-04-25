import{t,r,C as s,dy as e,aU as a,ic as o,cq as i,by as n}from"../main.js";const p={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};class u{constructor(t,r,s,e){this.parsedUrl=t,this.portalItem=r,this.apiKey=s,this.signal=e,this.rootDocument=null;const a=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);a&&(this.urlParts={root:a[1],layerId:parseInt(a[2],10)})}async fetch(){var r;if(!this.urlParts)return null;const s=null!=(r=this.portalItem)?r:await this._portalItemFromServiceItemId();if(t(s))return this._loadFromUrl();const e=await this._findAndLoadRelatedPortalItem(s);return t(e)?null:this._loadFeatureLayerFromPortalItem(e)}async fetchPortalItem(){var r;if(!this.urlParts)return null;const s=null!=(r=this.portalItem)?r:await this._portalItemFromServiceItemId();return t(s)?null:this._findAndLoadRelatedPortalItem(s)}async _fetchRootDocument(){if(r(this.rootDocument))return this.rootDocument;if(t(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},a=`${this.urlParts.root}/SceneServer`;try{const t=await s(a,e);this.rootDocument=t.data}catch{this.rootDocument={}}return this.rootDocument}async _fetchServiceOwningPortalUrl(){var t;const r=null==(t=e)?void 0:t.findServerInfo(this.parsedUrl.path);if(null!=r&&r.owningSystemUrl)return r.owningSystemUrl;const o=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await s(o,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(t){a(t)}return null}async _findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(t){return a(t),null}}async _loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this._findMatchingAssociatedSublayerUrl(t.url);return new o({url:r,portalItem:t}).load({signal:this.signal})}async _loadFromUrl(){const t=await this._findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new o({url:t}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(t){const r=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),e={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},a=this.urlParts.layerId,o=this._fetchRootDocument(),i=s(r,e),[n,p]=await Promise.all([i,o]),u=p&&p.layers,l=n.data&&n.data.layers;if(!Array.isArray(l))throw new Error("expected layers array");if(Array.isArray(u)){for(let t=0;t<Math.min(u.length,l.length);t++)if(u[t].id===a)return`${r}/${l[t].id}`}else if(a<l.length)return`${r}/${l[a].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const t=(await this._fetchRootDocument()).serviceItemId;if(!t)return null;const s=new i({id:t,apiKey:this.apiKey}),e=await this._fetchServiceOwningPortalUrl();r(e)&&(s.portal=new n({url:e}));try{return s.load({signal:this.signal})}catch(t){return a(t),null}}}export{u as l,p as t};
