import{t as r}from"./ShaderCompiler-4b3c7cb1.js";var t=class{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r}dispose(){this._programCacheByTemplate.forEach((r=>r.programs.forEach((r=>r.dispose())))),this._programCacheByTemplate=null}getProgram(t,a){return this._programCacheByTemplate.has(t)||this.addProgramTemplate(t,(a=>r(this._rctx,t,a))),this.getProgramTemplateInstance(t,a)}addProgramTemplate(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map})}getProgramTemplateInstance(r,t){const a=this._programCacheByTemplate.get(r);if(a){const r=t?JSON.stringify(t):"default";if(!a.programs.has(r)){const e=a.constructor(t);a.programs.set(r,e)}return a.programs.get(r)}return null}};export{t as s};
