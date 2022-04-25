import{r as e,d as t}from"../main.js";import{h as r}from"./PooledRBush-4f024b5d.js";import{_ as n}from"./georeference-ec23ac11.js";import"./quat-0f7e1f8c.js";import"./vec33-059ebd42.js";import"./BufferView-63fdb337.js";class o{async createIndex(t,n){const o=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new r;const s=this._createMeshData(t),a=e(n)?await n.invoke("createIndexThread",s,{transferList:o}):this.createIndexThread(s).result;return this._createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),r=this._createPooledRBush();return e.components?this._createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this._createIndexAllThread(r,t)}_createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let e=0;e<t.length;e+=9)r[n++]=s(t,e+0,e+3,e+6);return e.load(r),{result:e.toJSON()}}_createIndexComponentsThread(e,t,r){let n=0;for(const e of r)n+=e.length/3;const o=new Array(n);let a=0;for(const e of r)for(let r=0;r<e.length;r+=3)o[a++]=s(t,3*e[r+0],3*e[r+1],3*e[r+2]);return e.load(o),{result:e.toJSON()}}_createMeshData(e){const t=(e.transform?n({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return!e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}_createPooledRBush(){return new r(9,t("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function s(e,t,r,n){return{minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}export{o as default};
