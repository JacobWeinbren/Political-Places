import{b as e,w as r}from"./WGLContainer-13b2f2d5.js";import{I as s}from"./Utils-be23a2c6.js";class t extends e{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[r.bitmap],target:()=>this.children,drawPhase:s.MAP});return[...super.prepareRenderPasses(e),t]}}export{t};
