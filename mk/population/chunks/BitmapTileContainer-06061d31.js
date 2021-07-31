import{aj as e}from"../main.js";import{g as t}from"./Bitmap-b900c3dd.js";import{r as s,o as r}from"./TileContainer-b23a3f9a.js";import{g as i}from"./WGLContainer-c0056392.js";import{I as a}from"./Utils-a13f2b84.js";class n extends s{constructor(e,s,r,i=null){super(e,s,r,r),this.bitmap=new t(i,"standard",!1),this.bitmap.coordScale=r,this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class o extends r{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(t){const s=this._tileInfoView.getTileBounds(e(),t);return new n(t,s,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[i.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:a.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===a.MAP&&super.doRender(e)}}export{o as n};
