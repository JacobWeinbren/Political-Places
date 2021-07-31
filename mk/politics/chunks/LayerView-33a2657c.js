import{V as e,X as t,cI as s,W as i,c3 as r,dD as n,bO as a,aT as o,c7 as l,dE as p,F as d,S as h,aO as u,dF as y,w as c,T as v,n as g}from"../main.js";import{r as w}from"./Container-8707ff0b.js";let m=class extends s{};m=e([t("esri.views.layers.support.ClipArea")],m);var b,f=m;let R=b=class extends f{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new b({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};e([i({type:[Number,String],json:{write:!0}})],R.prototype,"left",void 0),e([i({type:[Number,String],json:{write:!0}})],R.prototype,"right",void 0),e([i({type:[Number,String],json:{write:!0}})],R.prototype,"top",void 0),e([i({type:[Number,String],json:{write:!0}})],R.prototype,"bottom",void 0),e([i({readOnly:!0})],R.prototype,"version",null),R=b=e([t("esri.views.layers.support.ClipRect")],R);var q,O=R;const S={base:n,key:"type",typeMap:{extent:a,polygon:o}};let U=q=class extends f{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new q({geometry:this.geometry.clone()})}};e([i({types:S,json:{read:r,write:!0}})],U.prototype,"geometry",void 0),e([i({readOnly:!0})],U.prototype,"version",null),U=q=e([t("esri.views.layers.support.Geometry")],U);var x=U;let j=class extends f{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};e([i({type:[[[Number]]],json:{write:!0}})],j.prototype,"path",void 0),e([i({readOnly:!0})],j.prototype,"version",null),j=e([t("esri.views.layers.support.Path")],j);var I=j;const _=l.ofType({key:"type",base:f,typeMap:{rect:O,path:I,geometry:x}}),N=s=>{let r=class extends s{constructor(){super(...arguments),this.clips=new _,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new w),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([d(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),d(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),d(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),d(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const s=this.layer,i=s.minScale,r=s.maxScale;if(null!=i&&null!=r){let s=!i,n=!r;!s&&e<=i&&(s=!0),!n&&e>=r&&(n=!0),t=s&&n}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return e([i({type:_,set(e){const t=p(e,this._get("clips"),_);this._set("clips",t)}})],r.prototype,"clips",void 0),e([i()],r.prototype,"moving",void 0),e([i()],r.prototype,"attached",void 0),e([i()],r.prototype,"container",void 0),e([i()],r.prototype,"suspended",void 0),e([i({readOnly:!0})],r.prototype,"updateParameters",void 0),e([i()],r.prototype,"updateRequested",void 0),e([i()],r.prototype,"updating",null),e([i()],r.prototype,"view",void 0),r=e([t("esri.views.2d.layers.LayerView2D")],r),r};let V=class extends(h(u(y(c.EventedMixin(v))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";throw g.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};e([i()],V.prototype,"fullOpacity",null),e([i()],V.prototype,"layer",void 0),e([i()],V.prototype,"parent",void 0),e([i({readOnly:!0})],V.prototype,"suspended",null),e([i({readOnly:!0})],V.prototype,"suspendInfo",null),e([i({readOnly:!0})],V.prototype,"legendEnabled",null),e([i({type:Boolean,readOnly:!0})],V.prototype,"updating",null),e([i({readOnly:!0})],V.prototype,"updatingProgress",null),e([i()],V.prototype,"visible",null),V=e([t("esri.views.layers.LayerView")],V);var E=V;export{E as d,N as l};
