import{o as e,g as r}from"./WGLContainer-e87911b3.js";import{I as s}from"./Utils-c52d8073.js";class t extends e{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[r.bitmap],target:()=>this.children,drawPhase:s.MAP});return[...super.prepareRenderPasses(e),t]}}export{t};
