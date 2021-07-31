import{V as e,W as r,cY as i,bO as t,gY as s,gN as a,aS as l,X as o,L as n,co as y,k as p,n as u,S as d,d9 as c,aO as h,cb as b,a as f,bN as g,hK as m,hL as v,hM as S,dk as w,c7 as I,cS as x,hN as L,gK as O,dt as D,b3 as E,dm as P,gb as _,hO as T,bx as F,e4 as j,hP as M,gM as N,hQ as V,gy as A,dh as C,hR as k,hv as J,gU as q,hS as $,hT as U}from"../main.js";import{r as B}from"./Version-de002614.js";const Q=u=>{let d=class extends u{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=null}readCapabilities(e,r){const i=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!i)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const t=this.type,s=-1!==i.indexOf("query"),a=-1!==i.indexOf("map"),l=!!r.exportTilesAllowed,o=-1!==i.indexOf("tilemap"),n="tile"!==t&&!!r.supportsDynamicLayers,y="tile"!==t&&(!r.tileInfo||n),p="tile"!==t&&(!r.tileInfo||n),u="tile"!==t,d=!!r.cimVersion&&B.parse(r.cimVersion).since(1,4);return{operations:{supportsQuery:s,supportsExportMap:a,supportsExportTiles:l,supportsTileMap:o},exportMap:a?{supportsArcadeExpressionForLabeling:d,supportsSublayersChanges:u,supportsDynamicLayers:n,supportsSublayerVisibility:y,supportsSublayerDefinitionExpression:p}:null,exportTiles:l?{maxExportTilesCount:+r.maxExportTilesCount}:null}}readVersion(e,r){let i=r.currentVersion;return i||(i=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),i}async fetchSublayerInfo(e,r){return await this.fetchAllLayersAndTables(r),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=n(y(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const r of e.data.layers)this._allLayersAndTablesMap.set(r.id,r);return{result:e.data}}),(e=>({error:e}))));const r=await this._allLayersAndTablesPromise;if(p(e),"result"in r)return r.result;throw r.error}};return e([r({readOnly:!0})],d.prototype,"capabilities",void 0),e([i("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],d.prototype,"readCapabilities",null),e([r({json:{read:{source:"copyrightText"}}})],d.prototype,"copyright",void 0),e([r({type:t})],d.prototype,"fullExtent",void 0),e([r(s)],d.prototype,"id",void 0),e([r({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],d.prototype,"legendEnabled",void 0),e([r(a)],d.prototype,"popupEnabled",void 0),e([r({type:l})],d.prototype,"spatialReference",void 0),e([r()],d.prototype,"version",void 0),e([i("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],d.prototype,"readVersion",null),d=e([o("esri.layers.mixins.ArcGISMapService")],d),d};var G;function R(e){return e&&"esriSMS"===e.type}function K(e,r,i){var t;const s=this.originIdOf(r)>=J(i.origin);return{ignoreOrigin:!0,allowNull:s,enabled:!!i&&"map-image"===(null==(t=i.layer)?void 0:t.type)&&(i.writeSublayerStructure||s)}}function W(e,r,i){var t;return{enabled:!!i&&"tile"===(null==(t=i.layer)?void 0:t.type)&&this._isOverridden(r)}}function X(e,r,i){return{ignoreOrigin:!0,enabled:i&&i.writeSublayerStructure||!1}}function Y(e,r,i){return{ignoreOrigin:!0,enabled:!!i&&(i.writeSublayerStructure||this.originIdOf(r)>=J(i.origin))}}const Z=u.getLogger("esri.layers.support.Sublayer");let z=0;const H=new Set;H.add("layer"),H.add("parent"),H.add("loaded"),H.add("loadStatus"),H.add("loadError"),H.add("loadWarnings");let ee=G=class extends(d(c(h(b)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var r;if(!this.layer&&!this.url)throw new f("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let i=null;if(!this.layer||this.originIdOf("url")>2||"data-layer"===(null==(r=this.source)?void 0:r.type))i=(await n(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{var t;let r=this.id;"map-layer"===(null==(t=this.source)?void 0:t.type)&&(r=this.source.mapLayerId),i=await this.layer.fetchSublayerInfo(r,e)}i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}))})()),this}readCapabilities(e,r){const i=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[];return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:-1!==i.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new g(this.fields||[])}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const e of r.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){const e=this._get("id");return null==e?z++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,i,t){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},t)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const e of r.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){const i=r.layerDefinition;return 1-.01*(null!=i.transparency?i.transparency:i.drawingInfo.transparency)}writeOpacity(e,r,i,t){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=m(this.parent.id):r.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const r of e.getSymbols())if(v(r)){Z.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new S({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return w(I.ofType(G),e)}writeSublayers(e,r,i){this.get("sublayers.length")&&(r[i]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTypeIdField(e,r){let i=(r=r.layerDefinition||r).typeIdField;if(i&&r.fields){i=i.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===i));e&&(i=e.name)}return null}get url(){var e,r;const i=null!=(e=null==(r=this.layer)?void 0:r.parsedUrl)?e:this._lastParsedUrl,t=this.source;if(!i)return null;if(this._lastParsedUrl=i,"map-layer"===(null==t?void 0:t.type))return`${i.path}/${t.mapLayerId}`;const s={layer:JSON.stringify({source:this.source})};return`${i.path}/dynamicLayer?${x(s)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,i,t){r[i]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=L(this),r=new G;return L(r).store=e.clone(H),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return O(this,e)}createQuery(){return new D({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,r;if(this.hasOwnProperty("sublayers"))return null;const i=null==(e=this.layer)?void 0:e.parsedUrl,t=new((await import("../main.js").then((function(e){return e.j0}))).default)({url:i.path});return i&&this.source&&("map-layer"===this.source.type?t.layerId=this.source.mapLayerId:t.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(t.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(t.definitionExpression=this.definitionExpression),this.originIdOf("labelingInfo")>2&&(t.labelingInfo=E(this.labelingInfo)),this.originIdOf("labelsVisible")>0&&(t.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>0&&(t.legendEnabled=this.legendEnabled),this.originIdOf("visible")>0&&(t.visible=this.visible),this.originIdOf("minScale")>0&&(t.minScale=this.minScale),this.originIdOf("maxScale")>0&&(t.maxScale=this.maxScale),this.originIdOf("opacity")>0&&(t.opacity=this.opacity),this.originIdOf("popupTemplate")>0&&(t.popupTemplate=E(this.popupTemplate)),this.originIdOf("renderer")>2&&(t.renderer=E(this.renderer)),"data-layer"===(null==(r=this.source)?void 0:r.type)&&(t.dynamicDataSource=this.source.clone()),this.originIdOf("title")>0&&(t.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(t.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(t.customParameters=this.layer.customParameters),t}getFeatureType(e){const{typeIdField:r,types:i}=this;if(!r||!e)return null;const t=e.attributes?e.attributes[r]:void 0;if(null==t)return null;let s=null;return i.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===t.toString()&&(s=e),!!s)})),s}getFieldDomain(e,r){const i=r&&r.feature,t=this.getFeatureType(i);if(t){const r=t.domains&&t.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),r){var i,t,s,a;if(await this.load(),!this.get("capabilities.operations.supportsQuery"))throw new f("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:l},{default:o}]=await Promise.all([import("../main.js").then((function(e){return e.iZ})),import("../main.js").then((function(e){return e.i_}))]),n=await l(this.url,D.from(e),null!=(i=null==(t=this.layer)?void 0:t.spatialReference)?i:null,{...r,query:{...null==(s=this.layer)?void 0:s.customParameters,token:null==(a=this.layer)?void 0:a.apiKey}}),y=o.fromJSON(n.data);if(null!=y&&y.features)for(const e of y.features)e.sourceLayer=this;return y}toExportImageJSON(){var e;const r={id:this.id,source:(null==(e=this.source)?void 0:e.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};this.definitionExpression&&(r.definitionExpression=this.definitionExpression);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{});if(Object.keys(i).some((e=>i[e]>2))){const e=r.drawingInfo={};i.renderer>2&&(e.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>2&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>2&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service",layer:this.layer}))):null,e.showLabels=!0),i.opacity>2&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,r){if(e){const i="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of i)R(e.symbol)&&r(e.symbol);"symbol"in e&&R(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&R(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const i=this.layer,t=this._get(e);let s,a;switch(e){case"definitionExpression":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",a="supportsModification"}const l=L(this).getDefaultOrigin();if("service"!==l){if(s&&!1===this.get(`layer.capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(a&&!1===this.get(`capabilities.exportMap.${a}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${a}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==l&&t!==r&&i&&i.emit&&i.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null})),e.on("before-changes",(e=>{const r=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==r||r||(Z.error(new f("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,r){Z.error(new f("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};ee.test={isMapImageLayerOverridePolicy:e=>e===X||e===K,isTileImageLayerOverridePolicy:e=>e===W},e([r({readOnly:!0})],ee.prototype,"capabilities",void 0),e([i("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],ee.prototype,"readCapabilities",null),e([r({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{overridePolicy:K}}})],ee.prototype,"definitionExpression",null),e([r({type:[P],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],ee.prototype,"fields",void 0),e([r({readOnly:!0})],ee.prototype,"fieldsIndex",null),e([r({type:t,json:{read:{source:"layerDefinition.extent"}}})],ee.prototype,"fullExtent",void 0),e([r({type:String})],ee.prototype,"globalIdField",void 0),e([i("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],ee.prototype,"readGlobalIdFieldFromService",null),e([r({type:_,json:{write:{ignoreOrigin:!0}}})],ee.prototype,"id",null),e([r({value:null,type:[T],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:X}}})],ee.prototype,"labelingInfo",null),e([F("labelingInfo")],ee.prototype,"writeLabelingInfo",null),e([r({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:X}}})],ee.prototype,"labelsVisible",null),e([r({value:null})],ee.prototype,"layer",null),e([r({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:Y}}})],ee.prototype,"legendEnabled",void 0),e([r({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],ee.prototype,"listMode",null),e([r({type:Number,value:0,json:{write:{overridePolicy:X}}})],ee.prototype,"minScale",null),e([i("minScale",["minScale","layerDefinition.minScale"])],ee.prototype,"readMinScale",null),e([r({type:Number,value:0,json:{write:{overridePolicy:X}}})],ee.prototype,"maxScale",null),e([i("maxScale",["maxScale","layerDefinition.maxScale"])],ee.prototype,"readMaxScale",null),e([r({type:String})],ee.prototype,"objectIdField",void 0),e([i("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],ee.prototype,"readObjectIdFieldFromService",null),e([r({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:X}}})],ee.prototype,"opacity",null),e([i("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],ee.prototype,"readOpacity",null),e([F("opacity")],ee.prototype,"writeOpacity",null),e([r({json:{type:_,write:{target:"parentLayerId",allowNull:!0,overridePolicy:X}}})],ee.prototype,"parent",void 0),e([F("parent")],ee.prototype,"writeParent",null),e([r({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:Y,writer(e,r,i){r[i]=!e}}}})],ee.prototype,"popupEnabled",void 0),e([r({type:j,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:Y}}})],ee.prototype,"popupTemplate",void 0),e([r({readOnly:!0})],ee.prototype,"defaultPopupTemplate",null),e([r({types:M,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:X},origins:{"web-scene":{types:N,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:X}}}}})],ee.prototype,"renderer",null),e([r({types:{key:"type",base:null,typeMap:{"data-layer":V,"map-layer":S}},cast(e){if(e){if("mapLayerId"in e)return A(S,e);if("dataSource"in e)return A(V,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:X}}})],ee.prototype,"source",null),e([r()],ee.prototype,"sourceJSON",void 0),e([r({value:null,json:{type:[_],write:{target:"subLayerIds",allowNull:!0,overridePolicy:X}}})],ee.prototype,"sublayers",null),e([C("sublayers")],ee.prototype,"castSublayers",null),e([F("sublayers")],ee.prototype,"writeSublayers",null),e([r({type:String,json:{read:{source:"name"},write:{target:"name",allowNull:!0,overridePolicy:Y}}})],ee.prototype,"title",void 0),e([r({type:String})],ee.prototype,"typeIdField",void 0),e([i("typeIdField",["layerDefinition.typeIdField"])],ee.prototype,"readTypeIdField",null),e([r({type:[k],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],ee.prototype,"types",void 0),e([r({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:W}}})],ee.prototype,"url",null),e([r({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:X}}})],ee.prototype,"visible",null),e([F("visible")],ee.prototype,"writeVisible",null),ee=G=e([o("esri.layers.support.Sublayer")],ee);var re=ee;const ie=u.getLogger("esri.layers.TileLayer");const te=I.ofType(re);function se(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&se(e.sublayers,r)}))}const ae=i=>{let t=class extends i{constructor(...e){super(...e),this.allSublayers=new q({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={2:{},3:{},4:{},5:{}},this.handles.add(this.watch("sublayers",((e,r)=>this._handleSublayersChange(e,r)),!0))}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:i}=this,t=J(r.origin);if(t<2)return;if(i[t]={context:r,visibleLayers:e.visibleLayers||i[t].visibleLayers,layers:e.layers||i[t].layers},t>2)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:s,origin:a}=this.createSublayersForOrigin("web-document"),l=L(this);l.setDefaultOrigin(a),this._set("sublayers",new te(s)),l.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const r=J("web-document"===e?"web-map":e);let i=2,t=this.sublayersSourceJSON[2].layers,s=this.sublayersSourceJSON[2].context,a=null;const l=[3,4,5].filter((e=>e<=r));for(const e of l){const r=this.sublayersSourceJSON[e];$(r.layers)&&(i=e,t=r.layers,s=r.context,r.visibleLayers&&(a={visibleLayers:r.visibleLayers,context:r.context}))}const o=[3,4,5].filter((e=>e>i&&e<=r));let n=null;for(const e of o){const{layers:r,visibleLayers:i,context:t}=this.sublayersSourceJSON[e];r&&(n={layers:r,context:t}),i&&(a={visibleLayers:i,context:t})}const y=function(e,r){const i=[],t={};return e?(e.forEach((e=>{const s=new re;if(s.read(e,r),t[s.id]=s,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(s)}else i.unshift(s)})),i):i}(t,s),p=new Map,u=new Set;if(n)for(const e of n.layers)p.set(e.id,e);if(a)for(const e of a.visibleLayers)u.add(e);return se(y,(e=>{n&&e.read(p.get(e.id),n.context),a&&e.read({defaultVisibility:u.has(e.id)},a.context)})),{origin:U(i),sublayers:new te({items:y})}}read(e,r){super.read(e,r),this.readSublayers(e,r)}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{ie.error(new f("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return e([r({readOnly:!0})],t.prototype,"allSublayers",void 0),e([r({readOnly:!0,type:I.ofType(re)})],t.prototype,"serviceSublayers",void 0),e([r({value:null,type:te,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),e([r({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=e([o("esri.layers.mixins.SublayersOwner")],t),t};export{re as Q,ae as f,Q as y};
