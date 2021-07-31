import{n as e}from"./VertexArrayObject-00fccdc0.js";function t(e){let t="";for(const n in e){const r=e[n];if("boolean"==typeof r)r&&(t+=`#define ${n}\n`);else if("number"==typeof r)t+=`#define ${n} ${r.toFixed()}\n`;else if("object"==typeof r){const e=r.options;let s=0;for(const n in e)t+=`#define ${e[n]} ${(s++).toFixed()}\n`;t+=`#define ${n} ${e[r.value]}\n`}}return t}function n(t,n,r,s){r=r||{},s=s||"";const o="function"==typeof n.shaders?n.shaders(r):n.shaders;return new e(t,s+o.vertexShader,s+o.fragmentShader,n.attributes)}var r=class{constructor(e){this.readFile=e}resolveIncludes(e){return this.resolve(e)}resolve(e,t=new Map){if(t.has(e))return t.get(e);const n=this.read(e);if(!n)throw new Error(`cannot find shader file ${e}`);const r=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let s=r.exec(n);const o=[];for(;null!=s;)o.push({path:s[1],start:s.index,length:s[0].length}),s=r.exec(n);let i=0,a="";return o.forEach((e=>{a+=n.slice(i,e.start),a+=t.has(e.path)?"":this.resolve(e.path,t),i=e.start+e.length})),a+=n.slice(i),t.set(e,a),a}read(e){return this.readFile(e)}};export{r as e,t as n,n as t};
