import{t as r}from"./ShaderCompiler-3d232de2.js";class t{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r}dispose(){this._programCacheByTemplate.forEach((r=>r.programs.forEach((r=>r.dispose())))),this._programCacheByTemplate=null}getProgram(t,e){return this._programCacheByTemplate.has(t)||this.addProgramTemplate(t,(e=>r(this._rctx,t,e))),this.getProgramTemplateInstance(t,e)}addProgramTemplate(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map})}getProgramTemplateInstance(r,t){const e=this._programCacheByTemplate.get(r);if(e){const r=t?JSON.stringify(t):"default";if(!e.programs.has(r)){const a=e.constructor(t);e.programs.set(r,a)}return e.programs.get(r)}return null}}export{t};
