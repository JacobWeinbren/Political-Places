import{Z as e,a0 as t,c8 as s,_ as i,bM as r,cF as a,ch as n,aB as o,c9 as l,cG as p,e as d,cE as h,cH as u,cI as c,W as y,aP as v,cJ as g,z as f,X as w,s as m,D as b}from"../main.js";import{s as R}from"./Container-b7f00e71.js";let S=class extends s{};S=e([t("esri.views.layers.support.ClipArea")],S);const q=S;var O;let x=O=class extends q{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new O({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};e([i({type:[Number,String],json:{write:!0}})],x.prototype,"left",void 0),e([i({type:[Number,String],json:{write:!0}})],x.prototype,"right",void 0),e([i({type:[Number,String],json:{write:!0}})],x.prototype,"top",void 0),e([i({type:[Number,String],json:{write:!0}})],x.prototype,"bottom",void 0),e([i({readOnly:!0})],x.prototype,"version",null),x=O=e([t("esri.views.layers.support.ClipRect")],x);const A=x;var I;const j={base:a,key:"type",typeMap:{extent:n,polygon:o}};let P=I=class extends q{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new I({geometry:this.geometry.clone()})}};e([i({types:j,json:{read:r,write:!0}})],P.prototype,"geometry",void 0),e([i({readOnly:!0})],P.prototype,"version",null),P=I=e([t("esri.views.layers.support.Geometry")],P);const U=P;let _=class extends q{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};e([i({type:[[[Number]]],json:{write:!0}})],_.prototype,"path",void 0),e([i({readOnly:!0})],_.prototype,"version",null),_=e([t("esri.views.layers.support.Path")],_);const C=_,N=l.ofType({key:"type",base:q,typeMap:{rect:A,path:C,geometry:U}}),L=s=>{let r=class extends s{constructor(){super(...arguments),this.attached=!1,this.clips=new N,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){var e,t,s,i;const r=null==(e=null==(t=this.view)?void 0:t.spatialReferenceLocked)||e;(null==(s=this.view)?void 0:s.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new d("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new R),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([h((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),u),h((()=>{var e,t;return null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1}),(e=>{this.container&&(this.container.opacity=e)}),u),h((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),u),h((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),u),c((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}))]),null!=(i=this.view)&&i.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null==(e=this.view)?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(e=this.updatingHandles)||!e.updating))}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:s,maxScale:i}=t;return(0===s||e<=s)&&(0===i||e>=i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,s=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),s&&(e.outsideScaleRange=s),e}};return e([i()],r.prototype,"attached",void 0),e([i({type:N,set(e){const t=p(e,this._get("clips"),N);this._set("clips",t)}})],r.prototype,"clips",void 0),e([i()],r.prototype,"container",void 0),e([i()],r.prototype,"moving",void 0),e([i({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),e([i({readOnly:!0})],r.prototype,"updateParameters",void 0),e([i()],r.prototype,"updateRequested",void 0),e([i()],r.prototype,"updating",null),e([i()],r.prototype,"view",void 0),e([i({readOnly:!0})],r.prototype,"visibleAtCurrentScale",null),r=e([t("esri.views.2d.layers.LayerView2D")],r),r};let M=class extends(y(v(g(f.EventedMixin(w))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";throw m.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${t}')`,e),e}}))}get fullOpacity(){return b(this.get("layer.opacity"),1)*b(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){var e;return!!(null!=(e=this.updatingHandles)&&e.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){var e,t,s;return this.visible&&(null==(e=this.layer)?void 0:e.loaded)&&!(null!=(t=this.parent)&&t.suspended)&&(null==(s=this.view)?void 0:s.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};e([i()],M.prototype,"fullOpacity",null),e([i()],M.prototype,"layer",void 0),e([i()],M.prototype,"parent",void 0),e([i({readOnly:!0})],M.prototype,"suspended",null),e([i({readOnly:!0})],M.prototype,"suspendInfo",null),e([i({readOnly:!0})],M.prototype,"legendEnabled",null),e([i({type:Boolean,readOnly:!0})],M.prototype,"updating",null),e([i({readOnly:!0})],M.prototype,"updatingProgress",null),e([i()],M.prototype,"visible",null),e([i()],M.prototype,"view",void 0),M=e([t("esri.views.layers.LayerView")],M);const E=M;export{L as f,E as u};
