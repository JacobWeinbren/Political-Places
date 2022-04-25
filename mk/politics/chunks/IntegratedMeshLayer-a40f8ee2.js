import{eJ as e,jA as t,r as i,iU as r,im as o,t as s,jB as n,jC as a,jD as p,jE as l,jF as c,jG as y,iJ as d,eH as u,eI as f,jH as m,Z as h,_ as g,aB as v,bJ as w,a0 as S,cg as j,dt as b,iG as O,jI as I,b3 as x,jJ as T,ch as _,bz as R,C as U,ek as N,el as J,em as L,iw as M,en as A,iK as P,er as D,ak as K,cQ as z,bA as V,aU as F,e as B,ed as E,iO as G,dn as $}from"../main.js";import{i as k}from"./originUtils-64b38fee.js";import{A as C,K as H}from"./SceneService-b6df5193.js";import{s as q,l as Q,u as Z,m as W}from"./I3SLayerDefinitions-d4066c5b.js";import"./resourceUtils-2a459798.js";function X(t){return Y[function(t){return t instanceof Blob?t.type:function(t){const i=e(t);return ie[i]||ee}(t.url)}(t)]||te}const Y={},ee="text/plain",te=Y[ee],ie={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const e in ie)Y[ie[e]]=e;function re(e){const r=i(e)&&e.origins?e.origins:[void 0];return(o,s)=>{const n=function(e,t,r){if(i(e)&&"resource"===e.type)return oe(e,t,r);switch(i(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=m;return{read:e,write:t}}}}(e,o,s);for(const e of r){const i=t(o,e,s);for(const e in n)i[e]=n[e]}}}function oe(e,t,d){const u=y(t,d);return{type:String,read:(e,t,i)=>{const o=r(e,t,i);return u.type===String?o:"function"==typeof u.type?new u.type({url:o}):void 0},write:{writer(t,r,y,f){if(!f||!f.resources)return"string"==typeof t?void(r[y]=o(t,f)):void(r[y]=t.write({},f));const m=function(e){return s(e)?null:"string"==typeof e?e:e.url}(t),h=m?o(m,{...f,verifyItemRelativeUrls:f&&f.verifyItemRelativeUrls?{writtenUrls:f.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},n.NO):null,g=u.type!==String&&(!k(this)||f&&f.origin&&this.originIdOf(d)>a(f.origin));f&&f.portalItem&&i(h)&&!p(h)?g?ne(this,d,t,h,r,y,f,e):function(e,t,i,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e)}),t[i]=e}(h,r,y,f):f&&f.portalItem&&(s(h)||i(l(h))||c(h)||g)?se(this,d,t,h,r,y,f,e):r[y]=h}}}}function se(e,t,i,r,o,s,n,a){const p=d(),l=pe(i,r,n),y=u(f(a,"prefix"),p),m=`${y}.${X(l)}`,h=n.portalItem.resourceFromPath(m);c(r)&&n.resources.pendingOperations.push(async function(e){const t=(await import("../main.js").then((function(e){return e.ld}))).default,{data:i}=await t(e,{responseType:"blob"});return i}(r).then((e=>{h.path=`${y}.${X(e)}`,o[s]=h.itemRelativeUrl})).catch((()=>{}))),ae(e,t,h,l,n.resources.toAdd),o[s]=h.itemRelativeUrl}function ne(t,i,r,o,s,n,a,p){const l=a.portalItem.resourceFromPath(o),c=pe(r,o,a);X(c)===e(l.path)?(ae(t,i,l,c,a.resources.toUpdate),s[n]=o):se(t,i,r,o,s,n,a,p)}function ae(e,t,i,r,o){o.push({resource:i,content:r,finish:i=>{!function(e,t,i){"string"==typeof e[t]?e[t]=i.url:e[t].url=i.url}(e,t,i)}})}function pe(e,t,i){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(i))],{type:"application/json"})}var le;let ce=le=class extends j{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,i,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!b(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new O("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const o=new v;I(e,o,r.layer.spatialReference),t[i]=o.toJSON(r)}else t[i]=e.toJSON(r);delete t[i].spatialReference}clone(){return new le({geometry:x(this.geometry),type:this.type})}};h([g({type:v}),re()],ce.prototype,"geometry",void 0),h([w(["web-scene","portal-item"],"geometry")],ce.prototype,"writeGeometry",null),h([g({type:["clip","mask","replace"],nonNullable:!0}),re()],ce.prototype,"type",void 0),ce=le=h([S("esri.layers.support.SceneModification")],ce);const ye=ce;var de;let ue=de=class extends(T(_.ofType(ye))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}clone(){return new de({url:this.url,items:this.items.map((e=>e.clone()))})}_readModifications(e,t){for(const i of e)this.add(ye.fromJSON(i,t))}static fromJSON(e,t){const i=new de;return i._readModifications(e,t),i}static async fromUrl(e,t,i){const r={url:R(e),origin:"service"},o=await U(e,{responseType:"json",signal:f(i,"signal")}),s=t.toJSON(),n=[];for(const e of o.data)n.push(ye.fromJSON({...e,geometry:{...e.geometry,spatialReference:s}},r));return new de({url:e,items:n})}};h([g({type:String})],ue.prototype,"url",void 0),ue=de=h([S("esri.layers.support.SceneModifications")],ue);const fe=ue;let me=class extends(C(N(J(L(M(A(P(D)))))))){constructor(...e){super(...e),this.handles=new K,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(z((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),$))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,i){this._modificationsSource={url:V(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=f(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){F(e)}if(await this._fetchService(t),i(this._modificationsSource)){const t=await fe.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!s(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(H.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(H.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new B("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new B("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new B("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};h([g({type:String,readOnly:!0})],me.prototype,"geometryType",void 0),h([g({type:["show","hide"]})],me.prototype,"listMode",void 0),h([g({type:["IntegratedMeshLayer"]})],me.prototype,"operationalLayerType",void 0),h([g({json:{read:!1},readOnly:!0})],me.prototype,"type",void 0),h([g({type:q,readOnly:!0})],me.prototype,"nodePages",void 0),h([g({type:[Q],readOnly:!0})],me.prototype,"materialDefinitions",void 0),h([g({type:[Z],readOnly:!0})],me.prototype,"textureSetDefinitions",void 0),h([g({type:[W],readOnly:!0})],me.prototype,"geometryDefinitions",void 0),h([g({readOnly:!0})],me.prototype,"serviceUpdateTimeStamp",void 0),h([g({type:fe}),re({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],me.prototype,"modifications",void 0),h([E(["web-scene","portal-item"],"modifications")],me.prototype,"readModifications",null),h([g(G)],me.prototype,"elevationInfo",void 0),h([g({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],me.prototype,"path",void 0),me=h([S("esri.layers.IntegratedMeshLayer")],me);const he=me;export{he as default};
