import{dz as e,ho as t,r as i,gX as r,go as o,t as s,hp as n,hq as a,hr as p,hs as l,ht as c,gM as y,dx as d,dy as u,hu as h,V as f,W as m,aU as g,bE as v,X as w,cJ as S,hv as x,gJ as O,hw as b,b4 as I,hx as T,c8 as R,cp as _,L as j,d7 as N,d8 as U,d9 as L,gy as M,da as J,gN as P,de as z,ag as D,dP as A,hy as K,cw as V,a as F,cZ as $,gR as X}from"../main.js";import{i as q,R as B}from"./SceneService-8f3ed982.js";import{s as E,l as G,u as k,m as C}from"./I3SLayerDefinitions-2e78eb2f.js";import"./resourceUtils-368be33c.js";function W(t){return Z[function(t){return t instanceof Blob?t.type:function(t){const i=e(t);return Y[i]||H}(t.url)}(t)]||Q}const Z={},H="text/plain",Q=Z[H],Y={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const e in Y)Z[Y[e]]=e;function ee(e){const r=i(e)&&e.origins?e.origins:[void 0];return(o,s)=>{const n=function(e,t,r){if(i(e)&&"resource"===e.type)return te(e,t,r);switch(i(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=h;return{read:e,write:t}}}}(e,o,s);for(const e of r){const i=t(o,e,s);for(const e in n)i[e]=n[e]}}}function te(e,t,y){const d=c(t,y);return{type:String,read:(e,t,i)=>{const o=r(e,t,i);return d.type===String?o:"function"==typeof d.type?new d.type({url:o}):void 0},write:{writer(t,r,c,u){if(!u||!u.resources)return"string"==typeof t?void(r[c]=o(t,u)):void(r[c]=t.write({},u));const h=function(e){return s(e)?null:"string"==typeof e?e:e.url}(t),f=h?o(h,{...u,verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,m=d.type!==String&&(!q(this)||u&&u.origin&&this.originIdOf(y)>n(u.origin));u&&u.portalItem&&i(f)&&!a(f)?m?re(this,y,t,f,r,c,u,e):function(e,t,i,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e)}),t[i]=e}(f,r,c,u):u&&u.portalItem&&(s(f)||i(p(f))||l(f)||m)?ie(this,y,t,f,r,c,u,e):r[c]=f}}}}function ie(e,t,i,r,o,s,n,a){const p=y(),c=se(i,r,n),h=d(u(a,"prefix"),p),f=`${h}.${W(c)}`,m=n.portalItem.resourceFromPath(f);l(r)&&n.resources.pendingOperations.push(async function(e){const t=(await import("../main.js").then((function(e){return e.iX}))).default,{data:i}=await t(e,{responseType:"blob"});return i}(r).then((e=>{m.path=`${h}.${W(e)}`,o[s]=m.itemRelativeUrl})).catch((()=>{}))),oe(e,t,m,c,n.resources.toAdd),o[s]=m.itemRelativeUrl}function re(t,i,r,o,s,n,a,p){const l=a.portalItem.resourceFromPath(o),c=se(r,o,a);W(c)===e(l.path)?(oe(t,i,l,c,a.resources.toUpdate),s[n]=o):ie(t,i,r,o,s,n,a,p)}function oe(e,t,i,r,o){o.push({resource:i,content:r,finish:i=>{!function(e,t,i){"string"==typeof e[t]?e[t]=i.url:e[t].url=i.url}(e,t,i)}})}function se(e,t,i){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(i))],{type:"application/json"})}var ne;let ae=ne=class extends S{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,i,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!x(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new O("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const o=new g;b(e,o,r.layer.spatialReference),t[i]=o.toJSON(r)}else t[i]=e.toJSON(r);delete t[i].spatialReference}clone(){return new ne({geometry:I(this.geometry),type:this.type})}};f([m({type:g}),ee()],ae.prototype,"geometry",void 0),f([v(["web-scene","portal-item"],"geometry")],ae.prototype,"writeGeometry",null),f([m({type:["clip","mask","replace"],nonNullable:!0}),ee()],ae.prototype,"type",void 0),ae=ne=f([w("esri.layers.support.SceneModification")],ae);var pe,le=ae;let ce=pe=class extends(T(R.ofType(le))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}clone(){return new pe({url:this.url,items:this.items.map((e=>e.clone()))})}_readModifications(e,t){for(const i of e)this.add(le.fromJSON(i,t))}static fromJSON(e,t){const i=new pe;return i._readModifications(e,t),i}static async fromUrl(e,t,i){const r={url:_(e),origin:"service"},o=await j(e,{responseType:"json",signal:u(i,"signal")}),s=t.toJSON(),n=[];for(const e of o.data)n.push(le.fromJSON({...e,geometry:{...e.geometry,spatialReference:s}},r));return new pe({url:e,items:n})}};f([m({type:String})],ce.prototype,"url",void 0),ce=pe=f([w("esri.layers.support.SceneModifications")],ce);var ye=ce;let de=class extends(B(N(U(L(M(J(P(z)))))))){constructor(...e){super(...e),this.handles=new D,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(A(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,i){this._modificationsSource={url:K(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=u(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){V(e)}if(await this._fetchService(t),i(this._modificationsSource)){const t=await ye.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!s(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new F("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new F("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new F("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};f([m({type:String,readOnly:!0})],de.prototype,"geometryType",void 0),f([m({type:["show","hide"]})],de.prototype,"listMode",void 0),f([m({type:["IntegratedMeshLayer"]})],de.prototype,"operationalLayerType",void 0),f([m({json:{read:!1},readOnly:!0})],de.prototype,"type",void 0),f([m({type:E,readOnly:!0})],de.prototype,"nodePages",void 0),f([m({type:[G],readOnly:!0})],de.prototype,"materialDefinitions",void 0),f([m({type:[k],readOnly:!0})],de.prototype,"textureSetDefinitions",void 0),f([m({type:[C],readOnly:!0})],de.prototype,"geometryDefinitions",void 0),f([m({readOnly:!0})],de.prototype,"serviceUpdateTimeStamp",void 0),f([m({type:ye}),ee({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],de.prototype,"modifications",void 0),f([$(["web-scene","portal-item"],"modifications")],de.prototype,"readModifications",null),f([m(X)],de.prototype,"elevationInfo",void 0),f([m({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],de.prototype,"path",void 0),de=f([w("esri.layers.IntegratedMeshLayer")],de);var ue=de;export{ue as default};
