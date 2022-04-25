import{Z as e,_ as t,a0 as i,cl as r,dc as s,r as o,aT as n,t as a,k0 as p,e as l,iK as u,j4 as d,j5 as c,iv as y,j3 as h,j6 as f,iw as m,el as g,em as v,ix as S,en as j,er as w,j7 as x,iB as b,d1 as F,j8 as I,iO as O,j9 as D,ez as R,cp as T,gY as C,jb as E,jc as P,ja as _,i_ as q,iE as G,dh as B,je as Q,iD as L,jf as z,jh as A,eq as J,iF as M}from"../main.js";import{N,v as Z,x as U,k,T as W,S as K,I as V,F as H,j as $}from"./ogcFeatureUtils-a5c771df.js";import"./geojson-822dfc27.js";import"./clientSideDefaults-1a221598.js";import"./QueryEngineCapabilities-a7990f7e.js";let Y=class extends r{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:i,supportedCrs:r},layer:{apiKey:s,capabilities:o,customParameters:n}}=this;return{capabilities:o,collection:e,layerDefinition:t,queryParameters:{apiKey:s,customParameters:n},spatialReference:i,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then((e=>s.fromJSON(e)))}queryFeaturesJSON(e,t={}){const i=this.getFeatureDefinition();return this.load(t).then((()=>N(i,e,t)))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator&&!this.featureDefinition.supportedCrs[e.wkid])}_conformsToType(e,t){var i;const r=new RegExp(`^${t}$`,"i");return null!=(i=e.conformsTo.some((e=>r.test(e))))&&i}_getCapabilities(e,t){var i,r,s,n,a,p,l;const u=o(t)?null==(i=t.components)?void 0:i.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(r=null!=(s=null==u||null==(n=u.limit)||null==(a=n.schema)?void 0:a.maximum)?s:null==u||null==(p=u.limitFeatures)||null==(l=p.schema)?void 0:l.maximum)?r:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const i=null==(t=e.extent)?void 0:t.spatial;if(!i)return null;const r=i.bbox[0],s=4===r.length,o=r[0],a=r[1],p=s?void 0:r[2];return{xmin:o,ymin:a,xmax:s?r[2]:r[3],ymax:s?r[3]:r[4],zmin:p,zmax:s?void 0:r[5],spatialReference:n.WGS84.toJSON()}}_getStorageSpatialReference(e){var t;const i=null!=(t=e.storageCrs)?t:H,r=Z(i);return a(r)?n.WGS84:new n({wkid:r})}_getSupportedSpatialReferences(e,t){var i;const r="#/crs",s=null!=(i=e.crs)?i:[H],o=s.includes(r)?s.filter((e=>e!==r)).concat(t.crs):s,n=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return o.filter((e=>!n.test(e)))}async _loadOGCServices(e,t){const i=o(t)?t.signal:null,{apiKey:r,collectionId:s,customParameters:n,fields:a,geometryType:u,hasZ:d,objectIdField:c,timeInfo:y,url:h}=e,f={fields:null==a?void 0:a.map((e=>e.toJSON())),geometryType:p.toJSON(u),hasZ:d,objectIdField:c,timeInfo:null==y?void 0:y.toJSON()},m={apiKey:r,customParameters:n,signal:i},g=await U(h,m),[v,S]=await Promise.all([k(g,m),W(g,m)]);if(!this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new l("ogc-feature-layer:no-geojson-support","Server does not support geojson");const j=S.collections.find((e=>e.id===s));if(!j)throw new l("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const w=this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await K(g,m):null,x=await V(j,f,m),b=this._getCapabilities(x.hasZ,w),F=this._getExtent(j),I=this._getStorageSpatialReference(j).toJSON(),O=this._getSupportedSpatialReferences(j,S),D=new RegExp(`^${$}`,"i"),R={};for(const e of O){const t=Z(e);o(t)&&(R[t]||(R[t]=e.replace(D,"")))}x.extent=F,this.featureDefinition={capabilities:b,collection:j,layerDefinition:x,queryParameters:{},spatialReference:I,supportedCrs:R}}};e([t()],Y.prototype,"featureDefinition",void 0),e([t({constructOnly:!0})],Y.prototype,"layer",void 0),e([t()],Y.prototype,"type",void 0),Y=e([i("esri.layers.graphics.sources.OGCFeatureSource")],Y);const X=Y,ee=M();let te=class extends(u(d(c(y(h(f(m(g(v(S(j(w)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new X({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){x(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return b(this,e)}createQuery(){return new F}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var i;let r,s=!1;const o=null==t||null==(i=t.feature)?void 0:i.attributes,n=this.typeIdField&&(null==o?void 0:o[this.typeIdField]);return null!=n&&this.types&&(s=this.types.some((t=>{var i,s;return t.id==n&&(r=null==(i=t.domains)?void 0:i[e],"inherited"===(null==(s=r)?void 0:s.type)&&(r=this._getLayerDomain(e)),!0)}))),s||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(F.from(e)||this.createQuery(),t))).then((e=>{var t;return null==e||null==(t=e.features)||t.forEach((e=>{e.layer=e.sourceLayer=this})),e}))}serviceSupportsSpatialReference(e){var t,i;return null!=(t=null==(i=this.source)?void 0:i.serviceSupportsSpatialReference(e))&&t}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),x(this.renderer,this.fieldsIndex),I(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};e([t({readOnly:!0,json:{origins:{service:{read:!0}}}})],te.prototype,"capabilities",void 0),e([t({type:String,json:{write:!0}})],te.prototype,"collectionId",void 0),e([t({type:String})],te.prototype,"copyright",void 0),e([t({readOnly:!0})],te.prototype,"defaultPopupTemplate",null),e([t({type:String})],te.prototype,"definitionExpression",void 0),e([t({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],te.prototype,"description",void 0),e([t({type:String})],te.prototype,"displayField",void 0),e([t(O)],te.prototype,"elevationInfo",void 0),e([t(D)],te.prototype,"featureReduction",void 0),e([t({type:[R],json:{origins:{service:{name:"layerDefinition.fields"}}}})],te.prototype,"fields",void 0),e([t(ee.fieldsIndex)],te.prototype,"fieldsIndex",void 0),e([t({readOnly:!0,type:T,json:{origins:{service:{name:"layerDefinition.extent"}}}})],te.prototype,"fullExtent",void 0),e([t({type:C.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:C.read}}}}})],te.prototype,"geometryType",void 0),e([t({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],te.prototype,"hasZ",void 0),e([t({type:Boolean,readOnly:!0})],te.prototype,"isTable",null),e([t({type:[E],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:P},write:!0}}}})],te.prototype,"labelingInfo",void 0),e([t(_)],te.prototype,"labelsVisible",void 0),e([t(q)],te.prototype,"legendEnabled",void 0),e([t({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],te.prototype,"objectIdField",void 0),e([t({type:["OGCFeatureLayer"]})],te.prototype,"operationalLayerType",void 0),e([t(G)],te.prototype,"popupEnabled",void 0),e([t({type:B,json:{name:"popupInfo",write:!0}})],te.prototype,"popupTemplate",void 0),e([t({types:Q,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:L,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],te.prototype,"renderer",null),e([t(z)],te.prototype,"screenSizePerspectiveEnabled",void 0),e([t({readOnly:!0})],te.prototype,"source",void 0),e([t({readOnly:!0,type:n,json:{origins:{service:{read:!0}}}})],te.prototype,"spatialReference",void 0),e([t({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],te.prototype,"title",void 0),e([t({readOnly:!0,json:{read:!1}})],te.prototype,"type",void 0),e([t({type:String,readOnly:!0})],te.prototype,"typeIdField",void 0),e([t({type:[A]})],te.prototype,"types",void 0),e([t(J)],te.prototype,"url",void 0),te=e([i("esri.layers.OGCFeatureLayer")],te);const ie=te;export{ie as default};
