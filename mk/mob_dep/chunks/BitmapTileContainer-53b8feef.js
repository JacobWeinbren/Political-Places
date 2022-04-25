import{L as e,an as t}from"../main.js";import{v as s}from"./Bitmap-95c55ca6.js";import{r,o as i}from"./TileContainer-dc56fab2.js";import{w as a}from"./WGLContainer-e5b769fe.js";import{I as n}from"./Utils-4efd2b2d.js";class o extends r{constructor(e,t,r,i,a,n=null){super(e,t,r,i,a),this.bitmap=new s(n,"standard",!1),this.bitmap.coordScale=[i,a],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:e(),tileMat3:e()}}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class d extends i{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const s=this._tileInfoView.getTileBounds(t(),e),[r,i]=this._tileInfoView.tileInfo.size;return new o(e,s[0],s[3],r,i)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[a.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:n.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===n.MAP&&super.doRender(e)}}export{d as n};