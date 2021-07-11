import{r as e,s as t}from"../main.js";import{h as r}from"./PooledRBush-749cb1db.js";import{_ as n}from"./georeference-37cac1d1.js";import"./quickselect-071d9888.js";import"./quat-425c5c16.js";import"./vec4-667aa384.js";import"./vec33-705d99ea.js";import"./BufferView-038e8792.js";class o{async createIndex(t,n){const o=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new r;const s=this.createMeshData(t),a=e(n)?await n.invoke("createIndexThread",s,{transferList:o}):this.createIndexThread(s).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),r=this.createPooledRBush();return e.components?this.createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this.createIndexAllThread(r,t)}createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let e=0;e<t.length;e+=9)r[n++]=s(t,e+0,e+3,e+6);return e.load(r),{result:e.toJSON()}}createIndexComponentsThread(e,t,r){let n=0;for(const e of r)n+=e.length/3;const o=new Array(n);let a=0;for(const e of r)for(let r=0;r<e.length;r+=3)o[a++]=s(t,3*e[r+0],3*e[r+1],3*e[r+2]);return e.load(o),{result:e.toJSON()}}createMeshData(e){const t=(e.transform?n({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return!e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}createPooledRBush(){return new r(9,t("csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function s(e,t,r,n){return{minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}export default o;export{o as ElevationSamplerWorker};
