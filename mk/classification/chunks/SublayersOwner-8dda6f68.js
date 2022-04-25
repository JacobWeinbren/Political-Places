import{Z as e,_ as r,e0 as i,ch as t,it as s,ih as a,aT as l,a0 as o,C as n,bz as y,k as p,s as u,W as d,ea as c,aP as f,cd as h,e as b,dE as g,bW as m,jq as S,hO as v,jr as I,ej as w,c9 as E,dw as L,js as x,id as O,cV as D,b3 as T,r as _,em as P,jt as F,gB as j,iN as M,bH as A,d8 as V,iQ as C,ig as N,ju as R,i2 as k,c7 as U,iT as B,jg as J,ip as q,jv as $}from"../main.js";import{r as W}from"./Version-3318749e.js";import{l as Q}from"./floorFilterUtils-7545278c.js";import{o as G}from"./sublayerUtils-9d463f03.js";const K=u=>{let d=class extends u{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0}readCapabilities(e,r){var i,t;const s=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!s)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const a=this.type,l=s.includes("query"),o=s.includes("map"),n=!!r.exportTilesAllowed,y=s.includes("tilemap"),p="tile"!==a&&!!r.supportsDynamicLayers,u="tile"!==a&&(!r.tileInfo||p),d="tile"!==a&&(!r.tileInfo||p),c="tile"!==a,f=r.cimVersion&&W.parse(r.cimVersion),h=null!=(i=null==f?void 0:f.since(1,4))&&i,b=null!=(t=null==f?void 0:f.since(2,0))&&t;return{operations:{supportsQuery:l,supportsExportMap:o,supportsExportTiles:n,supportsTileMap:y},exportMap:o?{supportsArcadeExpressionForLabeling:h,supportsSublayersChanges:c,supportsDynamicLayers:p,supportsSublayerVisibility:u,supportsSublayerDefinitionExpression:d,supportsCIMSymbols:b}:null,exportTiles:n?{maxExportTilesCount:+r.maxExportTilesCount}:null}}readVersion(e,r){let i=r.currentVersion;return i||(i=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),i}async fetchSublayerInfo(e,r){return await this.fetchAllLayersAndTables(r),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=n(y(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const r of e.data.layers)this._allLayersAndTablesMap.set(r.id,r);return{result:e.data}}),(e=>({error:e}))));const r=await this._allLayersAndTablesPromise;if(p(e),"result"in r)return r.result;throw r.error}};return e([r({readOnly:!0})],d.prototype,"capabilities",void 0),e([i("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],d.prototype,"readCapabilities",null),e([r({json:{read:{source:"copyrightText"}}})],d.prototype,"copyright",void 0),e([r({type:t})],d.prototype,"fullExtent",void 0),e([r(s)],d.prototype,"id",void 0),e([r({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],d.prototype,"legendEnabled",void 0),e([r(a)],d.prototype,"popupEnabled",void 0),e([r({type:l})],d.prototype,"spatialReference",void 0),e([r({readOnly:!0})],d.prototype,"version",void 0),e([i("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],d.prototype,"readVersion",null),d=e([o("esri.layers.mixins.ArcGISMapService")],d),d};var z;function H(e){return e&&"esriSMS"===e.type}function X(e,r,i){var t;const s=this.originIdOf(r)>=J(i.origin);return{ignoreOrigin:!0,allowNull:s,enabled:!!i&&"map-image"===(null==(t=i.layer)?void 0:t.type)&&(i.writeSublayerStructure||s)}}function Z(e,r,i){var t;return{enabled:!!i&&"tile"===(null==(t=i.layer)?void 0:t.type)&&this._isOverridden(r)}}function Y(e,r,i){return{ignoreOrigin:!0,enabled:i&&i.writeSublayerStructure||!1}}function ee(e,r,i){return{ignoreOrigin:!0,enabled:!!i&&(i.writeSublayerStructure||this.originIdOf(r)>=J(i.origin))}}const re=u.getLogger("esri.layers.support.Sublayer");let ie=0;const te=new Set;te.add("layer"),te.add("parent"),te.add("loaded"),te.add("loadStatus"),te.add("loadError"),te.add("loadWarnings");let se=z=class extends(d(c(f(h)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var r;if(!this.layer&&!this.url)throw new b("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let i=null;if(!this.layer||this.originIdOf("url")>g.SERVICE||"data-layer"===(null==(r=this.source)?void 0:r.type))i=(await n(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{var t;let r=this.id;"map-layer"===(null==(t=this.source)?void 0:t.type)&&(r=this.source.mapLayerId),i=await this.layer.fetchSublayerInfo(r,e)}i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}))})()),this}readCapabilities(e,r){const i=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[];return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:-1!==i.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new m(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const e of r.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){const e=this._get("id");return null==e?ie++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,i,t){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},t)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const e of r.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){const i=r.layerDefinition;return 1-.01*(null!=i.transparency?i.transparency:i.drawingInfo.transparency)}writeOpacity(e,r,i,t){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=S(this.parent.id):r.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const r of e.getSymbols())if(v(r)){re.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new I({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return w(E.ofType(z),e)}writeSublayers(e,r,i){this.get("sublayers.length")&&(r[i]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTypeIdField(e,r){let i=(r=r.layerDefinition||r).typeIdField;if(i&&r.fields){i=i.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===i));e&&(i=e.name)}return null}get url(){var e,r;const i=null!=(e=null==(r=this.layer)?void 0:r.parsedUrl)?e:this._lastParsedUrl,t=this.source;if(!i)return null;if(this._lastParsedUrl=i,"map-layer"===(null==t?void 0:t.type))return`${i.path}/${t.mapLayerId}`;const s={layer:JSON.stringify({source:this.source})};return`${i.path}/dynamicLayer?${L(s)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,i,t){r[i]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=x(this),r=new z;return x(r).store=e.clone(te),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return O(this,e)}createQuery(){return new D({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,r;if(this.hasOwnProperty("sublayers"))return null;const i=null==(e=this.layer)?void 0:e.parsedUrl,t=new((await import("../main.js").then((function(e){return e.kR}))).default)({url:i.path});return i&&this.source&&("map-layer"===this.source.type?t.layerId=this.source.mapLayerId:t.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(t.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(t.definitionExpression=this.definitionExpression),this.floorInfo&&(t.floorInfo=T(this.floorInfo)),this.originIdOf("labelingInfo")>g.SERVICE&&(t.labelingInfo=T(this.labelingInfo)),this.originIdOf("labelsVisible")>g.DEFAULTS&&(t.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>g.DEFAULTS&&(t.legendEnabled=this.legendEnabled),this.originIdOf("visible")>g.DEFAULTS&&(t.visible=this.visible),this.originIdOf("minScale")>g.DEFAULTS&&(t.minScale=this.minScale),this.originIdOf("maxScale")>g.DEFAULTS&&(t.maxScale=this.maxScale),this.originIdOf("opacity")>g.DEFAULTS&&(t.opacity=this.opacity),this.originIdOf("popupTemplate")>g.DEFAULTS&&(t.popupTemplate=T(this.popupTemplate)),this.originIdOf("renderer")>g.SERVICE&&(t.renderer=T(this.renderer)),"data-layer"===(null==(r=this.source)?void 0:r.type)&&(t.dynamicDataSource=this.source.clone()),this.originIdOf("title")>g.DEFAULTS&&(t.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>g.DEFAULTS&&(t.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>g.DEFAULTS&&(t.customParameters=this.layer.customParameters),t}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:i}=this;if(!r||!e)return null;const t=e.attributes?e.attributes[r]:void 0;if(null==t)return null;let s=null;return i.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===t.toString()&&(s=e),!!s)})),s}getFieldDomain(e,r){const i=r&&r.feature,t=this.getFeatureType(i);if(t){const r=t.domains&&t.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),r){var i,t,s,a;if(await this.load(),!this.get("capabilities.operations.supportsQuery"))throw new b("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:l},{default:o}]=await Promise.all([import("../main.js").then((function(e){return e.kO})),import("../main.js").then((function(e){return e.kP}))]),n=await l(this.url,D.from(e),null!=(i=null==(t=this.layer)?void 0:t.spatialReference)?i:null,{...r,query:{...null==(s=this.layer)?void 0:s.customParameters,token:null==(a=this.layer)?void 0:a.apiKey}}),y=o.fromJSON(n.data);if(null!=y&&y.features)for(const e of y.features)e.sourceLayer=this;return y}toExportImageJSON(e){var r;const i={id:this.id,source:(null==(r=this.source)?void 0:r.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};if(this.definitionExpression){const r=_(e)?Q(e,this):this.definitionExpression;i.definitionExpression=r}else _(e)&&(i.definitionExpression=e);const t=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{}),s=Object.keys(t).some((e=>t[e]>g.SERVICE));if(s){const e=i.drawingInfo={};t.renderer>g.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),t.labelsVisible>g.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&t.labelingInfo>g.SERVICE&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service",layer:this.layer}))):null,e.showLabels=!0),t.opacity>g.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return i}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,r){if(e){const i="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of i)H(e.symbol)&&r(e.symbol);"symbol"in e&&H(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&H(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const i=this.layer,t=this._get(e);let s,a;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",a="supportsModification"}const l=x(this).getDefaultOrigin();if("service"!==l){if(s&&!1===this.get(`layer.capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(a&&!1===this.get(`capabilities.exportMap.${a}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${a}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==l&&t!==r&&i&&i.emit&&i.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null})),e.on("before-changes",(e=>{const r=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==r||r||(re.error(new b("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,r){re.error(new b("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};se.test={isMapImageLayerOverridePolicy:e=>e===Y||e===X,isTileImageLayerOverridePolicy:e=>e===Z},e([r({readOnly:!0})],se.prototype,"capabilities",void 0),e([i("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],se.prototype,"readCapabilities",null),e([r({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:X}}})],se.prototype,"definitionExpression",null),e([r({type:[P],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],se.prototype,"fields",void 0),e([r({readOnly:!0})],se.prototype,"fieldsIndex",null),e([r({type:F,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:X},origins:{"web-scene":{read:!1,write:!1}}}})],se.prototype,"floorInfo",null),e([r({type:t,json:{read:{source:"layerDefinition.extent"}}})],se.prototype,"fullExtent",void 0),e([r({type:String})],se.prototype,"globalIdField",void 0),e([i("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],se.prototype,"readGlobalIdFieldFromService",null),e([r({type:j,json:{write:{ignoreOrigin:!0}}})],se.prototype,"id",null),e([r({value:null,type:[M],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:Y}}})],se.prototype,"labelingInfo",null),e([A("labelingInfo")],se.prototype,"writeLabelingInfo",null),e([r({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:Y}}})],se.prototype,"labelsVisible",null),e([r({value:null})],se.prototype,"layer",null),e([r({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:ee}}})],se.prototype,"legendEnabled",void 0),e([r({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],se.prototype,"listMode",null),e([r({type:Number,value:0,json:{write:{overridePolicy:Y}}})],se.prototype,"minScale",null),e([i("minScale",["minScale","layerDefinition.minScale"])],se.prototype,"readMinScale",null),e([r({type:Number,value:0,json:{write:{overridePolicy:Y}}})],se.prototype,"maxScale",null),e([i("maxScale",["maxScale","layerDefinition.maxScale"])],se.prototype,"readMaxScale",null),e([r({readOnly:!0})],se.prototype,"effectiveScaleRange",null),e([r({type:String})],se.prototype,"objectIdField",void 0),e([i("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],se.prototype,"readObjectIdFieldFromService",null),e([r({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:Y}}})],se.prototype,"opacity",null),e([i("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],se.prototype,"readOpacity",null),e([A("opacity")],se.prototype,"writeOpacity",null),e([r({json:{type:j,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:Y}}})],se.prototype,"parent",void 0),e([A("parent")],se.prototype,"writeParent",null),e([r({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:ee,writer(e,r,i){r[i]=!e}}}})],se.prototype,"popupEnabled",void 0),e([r({type:V,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:ee}}})],se.prototype,"popupTemplate",void 0),e([r({readOnly:!0})],se.prototype,"defaultPopupTemplate",null),e([r({types:C,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:Y},origins:{"web-scene":{types:N,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:Y}}}}})],se.prototype,"renderer",null),e([r({types:{key:"type",base:null,typeMap:{"data-layer":R,"map-layer":I}},cast(e){if(e){if("mapLayerId"in e)return k(I,e);if("dataSource"in e)return k(R,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:Y}}})],se.prototype,"source",null),e([r()],se.prototype,"sourceJSON",void 0),e([r({value:null,json:{type:[j],write:{target:"subLayerIds",allowNull:!0,overridePolicy:Y}}})],se.prototype,"sublayers",null),e([U("sublayers")],se.prototype,"castSublayers",null),e([A("sublayers")],se.prototype,"writeSublayers",null),e([r({type:String,json:{name:"name",write:{overridePolicy:ee}}})],se.prototype,"title",void 0),e([r({type:String})],se.prototype,"typeIdField",void 0),e([i("typeIdField",["layerDefinition.typeIdField"])],se.prototype,"readTypeIdField",null),e([r({type:[B],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],se.prototype,"types",void 0),e([r({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:Z}}})],se.prototype,"url",null),e([r({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:Y}}})],se.prototype,"visible",null),e([A("visible")],se.prototype,"writeVisible",null),se=z=e([o("esri.layers.support.Sublayer")],se);const ae=se,le=u.getLogger("esri.layers.TileLayer");const oe=E.ofType(ae);function ne(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&ne(e.sublayers,r)}))}const ye=i=>{let t=class extends i{constructor(...e){super(...e),this.allSublayers=new q({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[g.SERVICE]:{},[g.PORTAL_ITEM]:{},[g.WEB_SCENE]:{},[g.WEB_MAP]:{}},this.handles.add(this.watch("sublayers",((e,r)=>this._handleSublayersChange(e,r)),!0))}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:i}=this,t=J(r.origin);if(t<g.SERVICE)return;if(i[t]={context:r,visibleLayers:e.visibleLayers||i[t].visibleLayers,layers:e.layers||i[t].layers},t>g.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:s,origin:a}=this.createSublayersForOrigin("web-document"),l=x(this);l.setDefaultOrigin(a),this._set("sublayers",new oe(s)),l.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const r=J("web-document"===e?"web-map":e);let i=g.SERVICE,t=this.sublayersSourceJSON[g.SERVICE].layers,s=this.sublayersSourceJSON[g.SERVICE].context,a=null;const l=[g.PORTAL_ITEM,g.WEB_SCENE,g.WEB_MAP].filter((e=>e<=r));for(const e of l){const r=this.sublayersSourceJSON[e];G(r.layers)&&(i=e,t=r.layers,s=r.context,r.visibleLayers&&(a={visibleLayers:r.visibleLayers,context:r.context}))}const o=[g.PORTAL_ITEM,g.WEB_SCENE,g.WEB_MAP].filter((e=>e>i&&e<=r));let n=null;for(const e of o){const{layers:r,visibleLayers:i,context:t}=this.sublayersSourceJSON[e];r&&(n={layers:r,context:t}),i&&(a={visibleLayers:i,context:t})}const y=function(e,r){const i=[],t={};return e?(e.forEach((e=>{const s=new ae;if(s.read(e,r),t[s.id]=s,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(s)}else i.unshift(s)})),i):i}(t,s),p=new Map,u=new Set;if(n)for(const e of n.layers)p.set(e.id,e);if(a)for(const e of a.visibleLayers)u.add(e);return ne(y,(e=>{n&&e.read(p.get(e.id),n.context),a&&e.read({defaultVisibility:u.has(e.id)},a.context)})),{origin:$(i),sublayers:new oe({items:y})}}read(e,r){super.read(e,r),this.readSublayers(e,r)}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{le.error(new b("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return e([r({readOnly:!0})],t.prototype,"allSublayers",void 0),e([r({readOnly:!0,type:E.ofType(ae)})],t.prototype,"serviceSublayers",void 0),e([r({value:null,type:oe,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),e([r({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=e([o("esri.layers.mixins.SublayersOwner")],t),t};export{ye as S,ae as W,K as y};
