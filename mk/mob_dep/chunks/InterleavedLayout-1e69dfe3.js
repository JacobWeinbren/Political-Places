import{u as e,m as t,i,T as s,c as r,h as n,l as h,a as d,p as f,b as u,x as p,y as l,o as a,d as o,g as c,j as F,V as m,q as _,A as y,L as b,B as w}from"./BufferView-b4ba9afa.js";import{e as v}from"./types-7740863c.js";class g{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const i=e.fields.get(t);this[t]=new i.constructor(this.buffer,i.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new g(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,s){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,s*r/4);new Uint32Array(this.buffer,i*r,s*r/4).set(n)}else{const n=new Uint8Array(e.buffer,t*r,s*r);new Uint8Array(this.buffer,i*r,s*r).set(n)}}}class T{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(t,i){return this._appendField(t,e,i),this}vec2f64(e,i){return this._appendField(e,t,i),this}vec3f(e,t){return this._appendField(e,i,t),this}vec3f64(e,t){return this._appendField(e,s,t),this}vec4f(e,t){return this._appendField(e,r,t),this}vec4f64(e,t){return this._appendField(e,n,t),this}mat3f(e,t){return this._appendField(e,h,t),this}mat3f64(e,t){return this._appendField(e,d,t),this}mat4f(e,t){return this._appendField(e,f,t),this}mat4f64(e,t){return this._appendField(e,u,t),this}vec4u8(e,t){return this._appendField(e,p,t),this}f32(e,t){return this._appendField(e,l,t),this}f64(e,t){return this._appendField(e,a,t),this}u8(e,t){return this._appendField(e,o,t),this}u16(e,t){return this._appendField(e,c,t),this}i8(e,t){return this._appendField(e,F,t),this}vec2i8(e,t){return this._appendField(e,m,t),this}vec2i16(e,t){return this._appendField(e,_,t),this}vec2u8(e,t){return this._appendField(e,y,t),this}vec4u16(e,t){return this._appendField(e,b,t),this}u32(e,t){return this._appendField(e,w,t),this}_appendField(e,t,i){const s=t.ElementCount*v(t.ElementType),r=this.stride;this.fields.set(e,{size:s,constructor:t,offset:r,optional:i}),this.stride+=s,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new g(this,e)}createView(e){return new g(this,e)}clone(){const e=new T;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,i)=>e.fields.set(i,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function N(){return new T}export{N as T};
