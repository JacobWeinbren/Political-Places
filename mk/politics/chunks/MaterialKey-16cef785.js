import{a as t}from"../main.js";import{E as e,A as i,b as s}from"./Utils-ad846f73.js";function a(t){switch(t){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}function r(t,i,s,a,r){switch(t){case e.FILL:return u.from(i,a);case e.LINE:return d.from(i,s);case e.MARKER:return c.from(i);case e.TEXT:return V.from(i);case e.LABEL:return p.from(i,r);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function n(t){switch(v.load(t).geometryType){case e.MARKER:return new c(t);case e.FILL:return new u(t);case e.LINE:return new d(t);case e.TEXT:return new V(t);case e.LABEL:return new p(t)}}class v{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(t){this.setBits(t,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(t){this.setBit(20,t)}get sdf(){return!!this.bit(11)}set sdf(t){this.setBit(11,t)}get pattern(){return!!this.bit(12)}set pattern(t){this.setBit(12,t)}get textureBinding(){return this.bits(0,8)}set textureBinding(t){this.setBits(t,0,8)}get geometryTypeString(){switch(this.geometryType){case e.FILL:return"fill";case e.MARKER:return"marker";case e.LINE:return"line";case e.TEXT:return"text";case e.LABEL:return"label";default:throw new t(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i}bit(t){return(this._data&1<<t)>>t}setBits(t,e,i){for(let s=e,a=0;s<i;s++,a++)this.setBit(s,0!=(t&1<<a))}bits(t,e){let i=0;for(let s=t,a=0;s<e;s++,a++)i|=this.bit(s)<<a;return i}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}v.shared=new v(0);const o=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(t){this.setBit(16,t)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(t){this.setBit(17,t)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(t){this.setBit(18,t)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(t){this.setBit(19,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const a=function(t,e=!1){const a=i.SIZE_FIELD_STOPS|i.SIZE_MINMAX_VALUE|i.SIZE_SCALE_STOPS|i.SIZE_UNIT_VALUE,r=(t&(s.FIELD_TARGETS_OUTLINE|s.MINMAX_TARGETS_OUTLINE|s.SCALE_TARGETS_OUTLINE|s.UNIT_TARGETS_OUTLINE))>>>4;return e?a&r:a&~r}(t,e)&t;this.vvSizeMinMaxValue=!!(a&i.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(a&i.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(a&i.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(a&i.SIZE_SCALE_STOPS)}},h=t=>class extends t{get vvRotation(){return 0!==this.bit(15)}set vvRotation(t){this.setBit(15,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e&&!!(t&i.ROTATION)}},l=t=>class extends t{get vvColor(){return 0!==this.bit(13)}set vvColor(t){this.setBit(13,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e&&!!(t&i.COLOR)}},S=t=>class extends t{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(t){this.setBit(14,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e&&!!(t&i.OPACITY)}};class u extends(l(S(v))){static load(t){const e=this.shared;return e.data=t,e}static from(t,i){const s=this.load(0);return s.geometryType=e.FILL,i?s.dotDensity=!0:s.setVV(t,!1),s.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,vvColor:this.vvColor,vvOpacity:this.vvOpacity}}get dotDensity(){return!!this.bit(15)}set dotDensity(t){this.setBit(15,t)}}u.shared=new u(0);class c extends(l(S(h(o(v))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const i=this.load(0);return i.geometryType=e.MARKER,i.setVV(t,!1),i.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}c.shared=new c(0);class d extends(l(S(o(v)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,i){const s=this.load(0);return s.geometryType=e.LINE,s.setVV(t,i),s.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}d.shared=new d(0);class V extends(l(S(h(o(v))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const i=this.load(t);return i.geometryType=e.TEXT,i.setVV(t,!1),i.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}V.shared=new V(0);class p extends(o(v)){static load(t){const e=this.shared;return e.data=t,e}static from(t,i){const s=this.load(0);return s.geometryType=e.LABEL,s.setVV(t,!1),s.mapAligned=a(i),s.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}p.shared=new p(0);export{r as A,u as C,V as F,p as N,v as _,d as b,a as e,n as f,c as w};
