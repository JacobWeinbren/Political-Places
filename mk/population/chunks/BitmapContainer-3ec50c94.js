import{o as e,g as r}from"./WGLContainer-1a614a5f.js";import{I as s}from"./Utils-69681e9a.js";class t extends e{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[r.bitmap],target:()=>this.children,drawPhase:s.MAP});return[...super.prepareRenderPasses(e),t]}}export{t};