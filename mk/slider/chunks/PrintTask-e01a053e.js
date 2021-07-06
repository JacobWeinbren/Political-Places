import{V as e,W as t,aR as r,bP as a,X as i,cN as n,T as s,cl as o,bC as l,cO as u,cP as c,cm as y,co as p,cn as d,L as f,v as m,m as h,cQ as g,cR as b,cS as v,cT as S,cU as w,cV as P,r as x,cW as D,aS as I,cX as L,Z as G,cY as M,cZ as V,l as O,c_ as T,u as J,a as j,cp as N}from"../main.js";import{a as R}from"./GPMessage-2846ab4a.js";let F=class extends s{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};e([t({type:r})],F.prototype,"outSpatialReference",void 0),e([t({type:a})],F.prototype,"processExtent",void 0),e([t({type:r})],F.prototype,"processSpatialReference",void 0),e([t({nonNullable:!0})],F.prototype,"returnFeatureCollection",void 0),e([t({nonNullable:!0})],F.prototype,"returnM",void 0),e([t({nonNullable:!0})],F.prototype,"returnZ",void 0),F=e([i("esri/rest/geoprocessor/GPOptions")],F),F.from=n(F);var k=F;let E=class extends o{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};e([t({type:a})],E.prototype,"extent",void 0),e([t()],E.prototype,"height",void 0),e([t()],E.prototype,"href",void 0),e([t()],E.prototype,"opacity",void 0),e([t()],E.prototype,"rotation",void 0),e([t()],E.prototype,"scale",void 0),e([t()],E.prototype,"visible",void 0),e([t()],E.prototype,"width",void 0),E=e([i("esri.layer.support.MapImage")],E);var A=E;let C=class extends o{constructor(e){super(e),this.itemId=null,this.url=null}};e([t({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],C.prototype,"itemId",void 0),e([t({type:String,json:{write:!0}})],C.prototype,"url",void 0),C=e([i("esri.rest.support.DataFile")],C);var U=C;const _=new l({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let $=class extends o{constructor(e){super(e),this.distance=0,this.units=null}};e([t({json:{write:!0}})],$.prototype,"distance",void 0),e([t({json:{read:_.read,write:_.write}})],$.prototype,"units",void 0),$=e([i("esri/rest/support/LinearUnit")],$);var q=$;const z=new l({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let B=class extends o{constructor(e){super(e),this.dataType=null,this.value=null}};e([t({json:{read:z.read,write:z.write}})],B.prototype,"dataType",void 0),e([t()],B.prototype,"value",void 0),B=e([i("esri.rest.support.ParameterValue")],B);var K=B;let W=class extends o{constructor(e){super(e),this.format=null,this.itemId=null,this.url=null}};e([t()],W.prototype,"format",void 0),e([t({json:{read:{source:"itemID"},write:{target:"itemID"}}})],W.prototype,"itemId",void 0),e([t()],W.prototype,"url",void 0),W=e([i("esri/rest/support/RasterData")],W);var Z,Q=W;async function Y(e,t,r,a,i){const n={},s={},o=[];return function(e,t,r){for(const a in e){const i=e[a];if(i&&"object"==typeof i&&i instanceof y){const{features:e}=i;r[a]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}}}(a,o,n),p(o).then((o=>{const{outSpatialReference:l,processExtent:u,processSpatialReference:c,returnFeatureCollection:y,returnM:p,returnZ:m}=r,{path:h}=d(e);for(const e in n){const t=n[e];s[e]=o.slice(t[0],t[1])}const g=l?l.wkid||l:null,b=c?c.wkid||c:null,v="execute"===t?{returnFeatureCollection:y||void 0,returnM:p||void 0,returnZ:m||void 0}:null,S=H({...u?{context:{extent:u,outSR:g,processSR:b}}:{"env:outSR":g,"env:processSR":b},...a,...v,f:"json"},null,s),w={...i,query:S};return f(`${h}/${t}`,w)}))}function X(e){const t=e.dataType,r=K.fromJSON(e);switch(t){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":return r;case"GPDate":r.value=new Date(r.value);break;case"GPDataFile":r.value=U.fromJSON(r.value);break;case"GPLinearUnit":r.value=q.fromJSON(r.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const t=e.value.url;r.value=t?U.fromJSON(r.value):y.fromJSON(r.value);break}case"GPRasterData":case"GPRasterDataLayer":{const t=e.value.mapImage;r.value=t?A.fromJSON(t):Q.fromJSON(r.value);break}case"GPField":r.value=c.fromJSON(r.value);break;case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return r;case"GPMultiValue:GPDate":{const e=r.value;r.value=e.map((e=>new Date(e)));break}case"GPMultiValue:GPDataFile":r.value=r.value.map((e=>U.fromJSON(e)));break;case"GPMultiValue:GPLinearUnit":r.value=r.value.map((e=>q.fromJSON(e)));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":r.value=r.value.map((e=>y.fromJSON(e)));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":r.value=r.value.map((e=>e?A.fromJSON(e):Q.fromJSON(r.value)));break;case"GPMultiValue:GPField":r.value=r.value.map((e=>c.fromJSON(e)))}return r}function H(e,t,r){for(const t in e){const r=e[t];Array.isArray(r)?e[t]=JSON.stringify(r.map((e=>H({item:e},!0).item))):r instanceof Date&&(e[t]=r.getTime())}return u(e,t,r)}const ee=new l({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let te=Z=class extends o{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(e){const{jobId:t,sourceUrl:r}=this,{path:a}=d(r),i={...this.requestOptions,...e,query:{f:"json"}};return this._clearTimer(),f(`${a}/jobs/${t}/cancel`,i).then((e=>{const t=Z.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}destroy(){clearInterval(this._timer)}checkJobStatus(e){const{path:t}=d(this.sourceUrl),r={...this.requestOptions,...e,query:{f:"json"}},a=`${t}/jobs/${this.jobId}`;return f(a,r).then((({data:e})=>{const t=Z.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}fetchResultData(e,t,r){t=k.from(t);const{returnFeatureCollection:a,returnM:i,returnZ:n,outSpatialReference:s}=t,{path:o}=d(this.sourceUrl),l=H({returnFeatureCollection:a||void 0,returnM:i||void 0,returnZ:n||void 0,outSR:s,returnType:"data",f:"json"},null),u={...this.requestOptions,...r,query:l},c=`${o}/jobs/${this.jobId}/results/${e}`;return f(c,u).then((e=>X(e.data)))}fetchResultImage(e,t,r){const{path:a}=d(this.sourceUrl),i=H({...t.toJSON(),f:"json"}),n={...this.requestOptions,...r,query:i},s=`${a}/jobs/${this.jobId}/results/${e}`;return f(s,n).then((e=>X(e.data)))}async fetchResultMapImageLayer(){const{path:e}=d(this.sourceUrl),t=e.indexOf("/GPServer/"),r=`${e.substring(0,t)}/MapServer/jobs/${this.jobId}`;return new((await import("./MapImageLayer-07f28852.js")).default)({url:r})}async waitForJobCompletion(e={}){const{interval:t=1e3,signal:r,statusCallback:a}=e;return new Promise(((e,i)=>{m(r,(()=>{this._clearTimer(),i(h())})),this._clearTimer();const n=setInterval((()=>{this._timer||i(h()),this.checkJobStatus(this.requestOptions).then((t=>{const{jobStatus:r}=t;switch(this.jobStatus=r,r){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":a&&a(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),i(this)}}))}),t);this._timer=n}))}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};e([t()],te.prototype,"jobId",void 0),e([t({json:{read:ee.read}})],te.prototype,"jobStatus",void 0),e([t({type:[R]})],te.prototype,"messages",void 0),e([t()],te.prototype,"requestOptions",void 0),e([t({json:{write:!0}})],te.prototype,"sourceUrl",void 0),te=Z=e([i("esri.rest.support.JobInfo")],te);var re=te;const ae=new l({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"});ae.fromJSON.bind(ae);const ie=ae.toJSON.bind(ae),ne=new l({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"});ne.fromJSON.bind(ne);const se=ne.toJSON.bind(ne),oe="simple-marker",le="simple-line";function ue(e,t){const{graphic:r,renderer:a,symbol:i}=t,n=i.type;if("text"===n||"shield-label-symbol"===n||!("visualVariables"in a)||!a.visualVariables)return;const s=a.getVisualVariablesForType("size"),o=a.getVisualVariablesForType("color"),l=a.getVisualVariablesForType("opacity"),u=a.getVisualVariablesForType("rotation"),c=s&&s[0],y=o&&o[0],p=l&&l[0],d=u&&u[0];if(c){const t=n===oe?i.style:null,a=g(c,r,{shape:t});null!=a&&(n===oe?e.size=b(a):"picture-marker"===n?(e.width=b(a),e.height=b(a)):n===le?e.width=b(a):e.outline&&(e.outline.width=b(a)))}if(y){const t=v(y,r);(t&&n===oe||n===le||"simple-fill"===n)&&(e.color=t?t.toJSON():void 0)}if(p){const t=S(p,r);null!=t&&e.color&&(e.color[3]=Math.round(255*t))}d&&(e.angle=-w(a,r))}function ce(e){return e&&"bing-maps"===e.type}function ye(e){return e&&"csv"===e.type}function pe(e){return e&&"feature"===e.type}function de(e){return e&&"geojson"===e.type}function fe(e){return e&&"graphics"===e.type}function me(e){return e&&"group"===e.type}function he(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function ge(e){return e&&"imagery"===e.type}function be(e){return e&&"kml"===e.type}function ve(e){return e&&"map-image"===e.type}function Se(e){return e&&"map-notes"===e.type}function we(e){return e&&"open-street-map"===e.type}function Pe(e){return e&&"stream"===e.type}function xe(e){return e&&"tile"===e.type}function De(e){return e&&"vector-tile"===e.type}function Ie(e){return e&&"web-tile"===e.type}function Le(e){return e&&"wms"===e.type}function Ge(e){return e&&"wmts"===e.type}let Me=class extends s{constructor(e){super(e),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};e([t()],Me.prototype,"attributionVisible",void 0),e([t()],Me.prototype,"exportOptions",void 0),e([t()],Me.prototype,"forceFeatureAttributes",void 0),e([t()],Me.prototype,"format",void 0),e([t()],Me.prototype,"label",void 0),e([t()],Me.prototype,"layout",void 0),e([t()],Me.prototype,"layoutOptions",void 0),e([t()],Me.prototype,"outScale",void 0),e([t()],Me.prototype,"scalePreserved",void 0),e([t()],Me.prototype,"showLabels",void 0),Me=e([i("esri.rest.support.PrintTemplate")],Me);var Ve=Me;const Oe={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},Te=new l({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),Je=new l({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),je=new P({returnGeometry:!0}),Ne=new Map;async function Re(e,t,r){const a=ke(e);let i=Ne.get(a);return Promise.resolve().then((()=>i?{data:i.gpMetadata}:(i={gpServerUrl:a,is11xService:!1,legendLayerNameMap:[],legendLayers:[]},f(a,{query:{f:"json"}})))).then((e=>(i.gpMetadata=e.data,i.cimVersion=i.gpMetadata.cimVersion,i.is11xService=!!i.cimVersion,Ne.set(a,i),Fe(t,i)))).then((a=>{const n=function(e){return e.gpMetadata&&e.gpMetadata.executionType?Je.fromJSON(e.gpMetadata.executionType):"sync"}(i);let s;const o=e=>"sync"===n?e.results&&e.results[0]&&e.results[0].value:s.fetchResultData("Output_File",null,r).then((e=>e.value));return"async"===n?async function(e,t,r,a){return r=k.from(r||{}),Y(e,"submitJob",r,t,a).then((t=>{const r=re.fromJSON(t.data);return r.sourceUrl=e,r}))}(e,a,null,r).then((e=>(s=e,e.waitForJobCompletion({interval:t.updateDelay}).then(o)))):async function(e,t,r,a){return Y(e,"execute",r=k.from(r||{}),t,a).then((e=>{const t=e.data.results||[],r=e.data.messages||[];return{results:t.map(X),messages:r.map((e=>R.fromJSON(e)))}}))}(e,a,null,r).then(o)}))}async function Fe(e,t){t=t||{is11xService:!1,legendLayerNameMap:[],legendLayers:[]};const r=e.template||new Ve;null==r.showLabels&&(r.showLabels=!0);const a=r.exportOptions;let i;const n=se(r.layout);if(a&&(i={dpi:a.dpi},"map_only"===n.toLowerCase()||""===n)){const e=a.width,t=a.height;i.outputSize=[e,t]}const s=r.layoutOptions;let o;if(s){let e,t;"Miles"===s.scalebarUnit||"Kilometers"===s.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==s.scalebarUnit&&"Feet"!==s.scalebarUnit||(e="Meters",t="Feet"),o={titleText:s.titleText,authorText:s.authorText,copyrightText:s.copyrightText,customTextElements:s.customTextElements,scaleBarOptions:{metricUnit:Te.toJSON(e),metricLabel:Oe[e],nonMetricUnit:Te.toJSON(t),nonMetricLabel:Oe[t]}}}let l=null;s&&s.legendLayers&&(l=s.legendLayers.map((e=>{t.legendLayerNameMap[e.layerId]=e.title;const r={id:e.layerId};return e.subLayerIds&&(r.subLayerIds=e.subLayerIds),r})));const u=await async function(e,t,r){const a=e.view;let i=a.spatialReference;const n={operationalLayers:await Ee(a,t,r)};let s=r.ssExtent||e.extent||a.extent;if(i&&i.isWrappable&&(s=s.clone()._normalize(!0),i=s.spatialReference),n.mapOptions={extent:s&&s.toJSON(),spatialReference:i&&i.toJSON(),showAttribution:t.attributionVisible},r.ssExtent=null,a.background&&(n.background=a.background.toJSON()),a.rotation&&(n.mapOptions.rotation=-a.rotation),t.scalePreserved&&(n.mapOptions.scale=t.outScale||a.scale),a.timeExtent){const e=x(a.timeExtent.start)?a.timeExtent.start.getTime():null,t=x(a.timeExtent.end)?a.timeExtent.end.getTime():null;n.mapOptions.time=[e,t]}return n}(e,r,t);if(u.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),r=/[\u0600-\u06FF]/,a=t=>{const a=t.text,i=t.font,n=i&&i.family&&i.family.toLowerCase();a&&i&&("arial"===n||"arial unicode ms"===n)&&(i.family=e.test(a)?"Arial Unicode MS":"Arial","normal"!==i.style&&r.test(a)&&(i.family="Arial Unicode MS"))},i=()=>{throw new j("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};u.operationalLayers.forEach((e=>{var r,n,s;null!=(r=e.featureCollection)&&r.layers?e.featureCollection.layers.forEach((e=>{var r,n,s,o;if(null!=(r=e.layerDefinition)&&null!=(n=r.drawingInfo)&&null!=(s=n.renderer)&&s.symbol){const r=e.layerDefinition.drawingInfo.renderer;"esriTS"===r.symbol.type?a(r.symbol):"CIMSymbolReference"!==r.symbol.type||t.is11xService||i()}null!=(o=e.featureSet)&&o.features&&e.featureSet.features.forEach((e=>{e.symbol&&("esriTS"===e.symbol.type?a(e.symbol):"CIMSymbolReference"!==e.symbol.type||t.is11xService||i())}))})):!t.is11xService&&null!=(n=e.layerDefinition)&&null!=(s=n.drawingInfo)&&s.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&i()}))}e.outSpatialReference&&(u.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(u,{exportOptions:i,layoutOptions:o||{}}),Object.assign(u.layoutOptions,{legendOptions:{operationalLayers:null!=l?l:t.legendLayers.slice()}}),t.legendLayers.length=0,Ne.set(t.gpServerUrl,t);const c={Web_Map_as_JSON:JSON.stringify(u),Format:ie(r.format),Layout_Template:n};return e.extraParameters&&Object.assign(c,e.extraParameters),c}function ke(e){let t=e;const r=t.lastIndexOf("/GPServer/");return r>0&&(t=t.slice(0,r+9)),t}async function Ee(e,t,r){const a=[],i={layerView:null,printTemplate:t,view:e};let n=0;t.scalePreserved&&(n=t.outScale||e.scale);const s=function(e,t){const r=e.allLayerViews.items;if(t===e.scale)return r.filter((e=>!e.suspended));const a=new Array;for(const e of r)he(e.parent)&&!a.includes(e.parent)||!e.visible||t&&"isVisibleAtScale"in e&&!e.isVisibleAtScale(t)||a.push(e);return a}(e,n);for(const e of s){const t=e.layer;if(!t.loaded||me(t))continue;let n;i.layerView=e,n=ce(t)?Ae(t):ye(t)?await Ce(t,i,r):pe(t)?await _e(t,i,r):de(t)?await $e(t,i,r):fe(t)?await qe(t,i,r):ge(t)?ze(t,r):be(t)?await Be(t,i,r):ve(t)?Ke(t,i,r):Se(t)?await We(i,r):we(t)?{type:"OpenStreetMap"}:Pe(t)?await Qe(t,i,r):xe(t)?Ye(t):De(t)?await Xe(t,i,r):Ie(t)?He(t):Le(t)?et(t):Ge(t)?tt(t):await Ze(t,i,r),n&&(Array.isArray(n)?a.push(...n):(n.id=t.id,n.title=r.legendLayerNameMap[t.id]||t.title,n.opacity=t.opacity,n.minScale=t.minScale||0,n.maxScale=t.maxScale||0,a.push(n)))}if(n&&a.forEach((e=>{e.minScale=0,e.maxScale=0})),e.graphics&&e.graphics.length){const i=await Ue(null,e.graphics,t,r);i&&a.push(i)}return a}function Ae(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async function Ce(e,{layerView:t,printTemplate:r},a){let i;return a.legendLayers&&a.legendLayers.push({id:e.id}),a.is11xService?(i={type:"CSV"},e.write(i,{origin:"web-map"}),delete i.popupInfo,delete i.layerType,i.showLabels=r.showLabels&&e.labelsVisible,i):Ue(e,await nt(t),r,a)}async function Ue(e,t,r,a){let i;const n={layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}},s={layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}},o={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}},l={layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}},u={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}};if(u.layerDefinition.name="textLayer",delete u.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?n.layerDefinition.name=s.layerDefinition.name=o.layerDefinition.name=l.layerDefinition.name=a.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();n.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t,l.layerDefinition.drawingInfo.renderer=t}if(r.showLabels&&e.labelsVisible&&"function"==typeof e.write){var c,y;const t=null==(c=e.write({},{origin:"web-map"}).layerDefinition)||null==(y=c.drawingInfo)?void 0:y.labelingInfo;t&&(i=!0,n.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t,l.layerDefinition.drawingInfo.labelingInfo=t)}}let p;null!=e&&e.renderer||i||(delete n.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo);const d=null==e?void 0:e.fieldsIndex,f=null==e?void 0:e.renderer;if(d){if(f&&"function"==typeof f.collectRequiredFields){const e=new Set;await f.collectRequiredFields(e,d),p=Array.from(e)}const e=d.fields.map((e=>e.toJSON()));n.layerDefinition.fields=e,s.layerDefinition.fields=e,o.layerDefinition.fields=e,l.layerDefinition.fields=e}const m=t&&t.length;let h;for(let i=0;i<m;i++){const c=t[i]||t.getItemAt(i);if(!1===c.visible||!c.geometry)continue;if(h=c.toJSON(),h.hasOwnProperty("popupTemplate")&&delete h.popupTemplate,h.geometry&&h.geometry.z&&delete h.geometry.z,h.symbol&&h.symbol.outline&&"esriCLS"===h.symbol.outline.type&&!a.is11xService)continue;!a.is11xService&&h.symbol&&h.symbol.outline&&h.symbol.outline.color&&h.symbol.outline.color[3]&&(h.symbol.outline.color[3]=255);const y=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!h.symbol&&e&&e.renderer&&y&&!a.is11xService){const t=e.renderer,r=await t.getSymbolAsync(c);if(!r)continue;h.symbol=r.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&ue(h.symbol,{renderer:t,graphic:c,symbol:r})}if(h.symbol&&(h.symbol.angle||delete h.symbol.angle,st(h.symbol)?h.symbol=await at(h.symbol,a):h.symbol.text&&delete h.attributes),(!r||!r.forceFeatureAttributes)&&p&&p.length){const e={};p.forEach((t=>{h.attributes&&h.attributes.hasOwnProperty(t)&&(e[t]=h.attributes[t])})),h.attributes=e}"polygon"===c.geometry.type?n.featureSet.features.push(h):"polyline"===c.geometry.type?s.featureSet.features.push(h):"point"===c.geometry.type?h.symbol&&h.symbol.text?u.featureSet.features.push(h):o.featureSet.features.push(h):"multipoint"===c.geometry.type?l.featureSet.features.push(h):"extent"===c.geometry.type&&(h.geometry=I.fromExtent(c.geometry).toJSON(),n.featureSet.features.push(h))}const g=[n,s,l,o,u].filter((e=>e.featureSet.features.length>0));for(const e of g){const t=e.featureSet.features.every((e=>e.symbol));!t||r&&r.forceFeatureAttributes||e.featureSet.features.forEach((e=>{delete e.attributes})),t&&delete e.layerDefinition.drawingInfo,e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.renderer&&await it(e.layerDefinition.drawingInfo.renderer,a)}return g.length?{featureCollection:{layers:g},showLabels:i}:null}async function _e(e,t,r){var a,i;let n;r.legendLayers&&r.legendLayers.push({id:e.id});const s=e.renderer;if(e.featureReduction||s&&"dot-density"===s.type&&(!r.is11xService||parseFloat(r.cimVersion)<2.6))return Ze(e,t,r);const{layerView:o,printTemplate:l,view:u}=t,c=s&&("valueExpression"in s&&s.valueExpression||"hasVisualVariables"in s&&s.hasVisualVariables()),y="feature-layer"!==(null==(a=e.source)?void 0:a.type)&&"ogc-feature"!==(null==(i=e.source)?void 0:i.type);if(!r.is11xService&&c||e.featureReduction||y||!s||"field"in s&&null!=s.field&&("string"!=typeof s.field||!e.getField(s.field))){const t=await nt(o);n=await Ue(e,t,l,r)}else{var p,d;if(n={id:(f=e.write()).id,title:f.title,opacity:f.opacity,minScale:f.minScale,maxScale:f.maxScale,url:f.url,layerDefinition:f.layerDefinition},n.showLabels=l.showLabels&&e.labelsVisible,rt(n,e),null!=(p=n.layerDefinition)&&null!=(d=p.drawingInfo)&&d.renderer&&(delete n.layerDefinition.minScale,delete n.layerDefinition.maxScale,await it(n.layerDefinition.drawingInfo.renderer,r),"visualVariables"in s&&s.visualVariables&&s.visualVariables[0])){const e=s.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=L(e,u.scale);n.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,n.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}}var f;return n}async function $e(e,{layerView:t,printTemplate:r},a){return a.legendLayers&&a.legendLayers.push({id:e.id}),Ue(e,await nt(t),r,a)}async function qe(e,{printTemplate:t},r){return Ue(e,null,t,r)}function ze(e,t){t.legendLayers&&t.legendLayers.push({id:e.id});const r={bandIds:e.bandIds,compressionQuality:e.compressionQuality,format:e.format,interpolation:e.interpolation};if((e.mosaicRule||e.definitionExpression)&&(r.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(t.is11xService)e.renderingRule&&(r.renderingRule=e.renderingRule.toJSON()),e.renderer&&(r.layerDefinition=r.layerDefinition||{},r.layerDefinition.drawingInfo=r.layerDefinition.drawingInfo||{},r.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const t=e.exportImageServiceParameters.combineRendererWithRenderingRule();t&&(r.renderingRule=t.toJSON())}return rt(r,e),r}async function Be(e,t,r){const a=t.printTemplate;if(r.is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=D(e.url),t}{const i=[],n=t.layerView;n.allVisibleMapImages.forEach(((t,r)=>{const a={id:`${e.id}_image${r}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?a.imageData=t.href.substr(22):a.url=t.href,i.push(a)}));const s=[...n.allVisiblePoints.items,...n.allVisiblePolylines.items,...n.allVisiblePolygons.items],o={id:e.id,...await Ue(null,s,a,r)};return i.push(o),i}}function Ke(e,{view:t},r){let a;const i={id:e.id,subLayerIds:[]};let n=[];const s=t.scale,o=e=>{const t=0===s,r=0===e.minScale||s<=e.minScale,a=0===e.maxScale||s>=e.maxScale;if(e.visible&&(t||r&&a))if(e.sublayers)e.sublayers.forEach(o);else{const t=e.toExportImageJSON(),r={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};n.unshift(r),i.subLayerIds.push(e.id)}};return e.sublayers&&e.sublayers.forEach(o),n.length&&(n=n.map((({id:e,name:t,layerDefinition:r})=>({id:e,name:t,layerDefinition:r}))),a={layers:n,visibleLayers:e.capabilities.exportMap.supportsDynamicLayers?void 0:i.subLayerIds},rt(a,e),r.legendLayers.push(i)),a}async function We({layerView:e,printTemplate:t},r){const a=[],i=e.layer;if(x(i.featureCollections))for(const e of i.featureCollections){const i=await Ue(e,e.source,t,r);i&&a.push(...i.featureCollection.layers)}else if(x(i.sublayers))for(const e of i.sublayers){const i=await Ue(null,e.graphics,t,r);i&&a.push(...i.featureCollection.layers)}return{featureCollection:{layers:a}}}async function Ze(e,{printTemplate:t,view:r},a){const i={type:"image"},n={format:"png",ignoreBackground:!0,layers:[e],rotation:0},s=a.ssExtent||r.extent.clone();let o=96,l=!0,u=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(o=e.dpi),e.width>0&&(l=e.width%2==r.width%2),e.height>0&&(u=e.height%2==r.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===r.scale)&&96===o&&(!l||!u)&&(n.area={x:0,y:0,width:r.width,height:r.height},l||(n.area.width-=1),u||(n.area.height-=1),!a.ssExtent)){const e=r.toMap(G(n.area.width,n.area.height));s.ymin=e.y,s.xmax=e.x,a.ssExtent=s}i.extent=s.clone()._normalize(!0).toJSON();const c=await r.takeScreenshot(n),{data:y}=M(c.dataUrl);return i.imageData=y,i}async function Qe(e,{layerView:t,printTemplate:r},a){return a.legendLayers&&a.legendLayers.push({id:e.id}),Ue(e,await nt(t),r,a)}function Ye(e){const t={customParameters:e.customParameters};return rt(t,e),t}async function Xe(e,t,r){if(r.is11xService&&e.serviceUrl&&e.styleUrl){const t=V&&V.findCredential(e.styleUrl),a=V&&V.findCredential(e.serviceUrl);if(!t&&!a||"2.1.0"!==r.cimVersion){const r={type:"VectorTileLayer"};return r.styleUrl=D(e.styleUrl),t&&(r.token=t.token),a&&a.token!==r.token&&(r.additionalTokens=[{url:e.serviceUrl,token:a.token}]),r}}return Ze(e,t,r)}function He(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}function et(e){let t;const r=[],a=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(a):e.name&&r.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(a),r.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:r,url:D(e.url),version:e.version}),t}function tt(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:D(e.url)}}function rt(e,t){if(t.url)if(e.url=D(e.url||t.url),"apiKey"in t&&t.apiKey)e.token=t.apiKey;else if(O.apiKey&&T(t.url))e.token=O.apiKey;else{var r,a;e.token=null==(r=V)||null==(a=r.findCredential(t.url))?void 0:a.token}}async function at(e,t){t.canvas||(t.canvas=document.createElement("canvas"));const r=1024;t.canvas.width=r,t.canvas.height=r;const a=t.canvas.getContext("2d");let i,n;if(e.path){var s;const t=new Path2D(e.path);t.closePath(),a.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",a.fill(t);const o=function(e,t=15){const r=e.canvas.width,a=e.canvas.height,i=e.getImageData(0,0,r,a).data;let n,s,o,l,u,c;e:for(s=a;s--;)for(n=r;n--;)if(i[4*(r*s+n)+3]>t){c=s;break e}if(!c)return null;e:for(n=r;n--;)for(s=c+1;s--;)if(i[4*(r*s+n)+3]>t){u=n;break e}e:for(n=0;n<=u;++n)for(s=c+1;s--;)if(i[4*(r*s+n)+3]>t){o=n;break e}e:for(s=0;s<=c;++s)for(n=o;n<=u;++n)if(i[4*(r*s+n)+3]>t){l=s;break e}return{x:o,y:l,width:u-o,height:c-l}}(a);if(!o)return null;a.clearRect(0,0,r,r);const l=J(e.size)/Math.max(o.width,o.height);a.scale(l,l);const u=r/l,c=u/2-o.width/2-o.x,y=u/2-o.height/2-o.y;if(a.translate(c,y),Array.isArray(e.color)&&a.fill(t),null!=(s=e.outline)&&s.width&&Array.isArray(e.outline.color)){const r=e.outline;a.lineWidth=J(r.width)/l,a.lineJoin="round",a.strokeStyle=`rgba(${r.color[0]},${r.color[1]},${r.color[2]},${r.color[3]/255})`,a.stroke(t),o.width+=a.lineWidth,o.height+=a.lineWidth}o.width*=l,o.height*=l;const p=a.getImageData(512-o.width/2,512-o.height/2,Math.ceil(o.width),Math.ceil(o.height));i=p.width,n=p.height,a.canvas.width=i,a.canvas.height=n,a.putImageData(p,0,0)}else{const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,r=(await f(t,{responseType:"image"})).data;i=J(e.width),n=J(e.height),a.canvas.width=i,a.canvas.height=n,a.drawImage(r,0,0,a.canvas.width,a.canvas.height)}return{type:"esriPMS",imageData:a.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:b(n),width:b(i),xoffset:e.xoffset,yoffset:e.yoffset}}async function it(e,t){const r=e.type;if("simple"===r&&st(e.symbol))e.symbol=await at(e.symbol,t);else if("uniqueValue"===r||"classBreaks"===r){st(e.defaultSymbol)&&(e.defaultSymbol=await at(e.defaultSymbol,t));const a=e["uniqueValue"===r?"uniqueValueInfos":"classBreakInfos"];if(a)for(const e of a)st(e.symbol)&&(e.symbol=await at(e.symbol,t))}}async function nt(e){return e.queryFeatures(je).then((e=>e.features))}function st(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}const ot=new l({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let lt=class extends N{constructor(...e){super(...e),this._gpMetadata=null,this.updateDelay=1e3}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?ot.fromJSON(this._gpMetadata.executionType):"sync"}execute(e,t){return e&&(e.updateDelay=this.updateDelay),Re(this.url,e,{...this.requestOptions,...t})}async _getGpPrintParams(e){const t=ke(this.url);return Fe(e,Ne.get(t))}};e([t()],lt.prototype,"_gpMetadata",void 0),e([t({readOnly:!0})],lt.prototype,"mode",null),e([t()],lt.prototype,"updateDelay",void 0),lt=e([i("esri.tasks.PrintTask")],lt);var ut=lt;export default ut;
