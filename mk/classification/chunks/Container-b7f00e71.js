import{Z as t,_ as e,a0 as s,X as i,d as r,s as n,b3 as h,bf as l,bg as a,bh as c,z as o,t as f,bi as d,L as u}from"../main.js";let _=class extends i{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=r("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(p(t))}catch(e){this._transitionTo([]),n.getLogger(this.declaredClass).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return null!==this._to}canTransitionTo(t){try{return this.scale>0&&g(this._current,p(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}end(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&g(this._current,t,this.scale)?(this._final=t,this._to=h(t),function(t,e,s){var i,r;const n=t.length>e.length?t:e,h=t.length>e.length?e:t,l=h[h.length-1],a=null!=(i=null==l?void 0:l.scale)?i:s,o=null!=(r=null==l?void 0:l.effects)?r:[];for(let t=h.length;t<n.length;t++)h.push({scale:a,effects:[...o]});for(let t=0;t<n.length;t++)h[t].scale=-1===h[t].scale?s:h[t].scale,n[t].scale=-1===n[t].scale?s:n[t].scale,c(h[t].effects,n[t].effects)}(this._current,this._to,this.scale),this._from=h(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?h(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let t=0;t<this._current.length;t++){const s=this._current[t],i=this._from[t],r=this._to[t];s.scale=m(i.scale,r.scale,e);for(let t=0;t<s.effects.length;t++){const n=s.effects[t],h=i.effects[t],l=r.effects[t];n.interpolate(h,l,e)}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?h(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),0===this._current.length)return;const e=this._current,s=this._current.length-1;let i,r,n=1;if(1===e.length||t>=e[0].scale)r=i=e[0].effects;else if(t<=e[s].scale)r=i=e[s].effects;else for(let h=0;h<s;h++){const s=e[h],l=e[h+1];if(s.scale>=t&&l.scale<=t){n=(t-s.scale)/(l.scale-s.scale),i=s.effects,r=l.effects;break}}for(let t=0;t<this.effects.length;t++)this.effects[t].interpolate(i[t],r[t],n)}};function p(t){const e=l(t)||[];return function(t){const e=t[0];return!!e&&"type"in e}(e)?[{scale:-1,effects:e}]:e}function g(t,e,s){var i,r,n,h;return null==(i=t[0])||!i.effects||null==(r=e[0])||!r.effects||!((-1===(null==(n=t[0])?void 0:n.scale)||-1===(null==(h=e[0])?void 0:h.scale))&&(t.length>1||e.length>1)&&s<=0)&&a(t[0].effects,e[0].effects)}function m(t,e,s){return t+(e-t)*s}t([e()],_.prototype,"_to",void 0),t([e()],_.prototype,"duration",void 0),t([e({value:""})],_.prototype,"effect",null),t([e({readOnly:!0})],_.prototype,"effects",void 0),t([e({readOnly:!0})],_.prototype,"hasEffects",null),t([e({value:0})],_.prototype,"scale",null),t([e({readOnly:!0})],_.prototype,"transitioning",null),_=t([s("esri.layers.effects.EffectView")],_);const v=1/r("mapview-transitions-duration");class R extends o{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return f(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=d(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=d(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;null==(t=this.parent)||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,s=this.computedOpacity;if(s===e)this.computedVisible=this.visible;else{const i=t*v;this.computedOpacity=s>e?Math.max(e,s-i):Math.min(e,s+i),this.computedVisible=this.computedOpacity>0;const r=e===this.computedOpacity;this.inFadeTransition=!r,r||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}class y extends R{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){var t,e;return null!=(t=null==(e=this._effectView)?void 0:e.effects)?t:null}get effect(){var t,e;return null!=(t=null==(e=this._effectView)?void 0:e.effect)?t:""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new _),this._effectView.effect=t,this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t)return t;if(this.contains(t))return t;this._needsSort=!0;const s=t.parent;return s&&s!==this&&s.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}_createTransforms(){return{dvs:u()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.beforeRender(t);for(const e of this.children)e.processRender(t);for(const e of this.children)e.afterRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}export{R as a,_ as h,y as s};
