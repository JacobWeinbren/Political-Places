import{o as e,g as r}from"./WGLContainer-4a5080f2.js";import{I as s}from"./Utils-44abebd7.js";class t extends e{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[r.bitmap],target:()=>this.children,drawPhase:s.MAP});return[...super.prepareRenderPasses(e),t]}}export{t};