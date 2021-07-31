import{bS as e,be as s,c5 as t,c6 as r,s as i}from"../main.js";import{a as o}from"./Container-8707ff0b.js";import{I as n}from"./Utils-100690b3.js";import{o as a,a as l,m as h}from"./WGLContainer-a8df79e7.js";class c extends o{constructor(t,r,i,o=i){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:e(),tileMat3:e()},this.triangleCount=0,this.key=new s(t),this.bounds=r,this.size=i,this.coordRange=o}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(e){this._coords=[e[0],e[3]],this._bounds=e}setTransform(e,s){const i=s/(e.resolution*e.pixelRatio),o=this.transforms.tileMat3,[n,a]=e.toScreenNoRotation([0,0],this.coords),l=this.size[0]/this.coordRange[0]*i,h=this.size[1]/this.coordRange[1]*i;t(o,l,0,0,0,h,0,n,a,1),r(this.transforms.dvs,e.displayViewMat3,o)}}const d=(e,s)=>e.key.level-s.key.level!=0?e.key.level-s.key.level:e.key.row-s.key.row!=0?e.key.row-s.key.row:e.key.col-s.key.col;class u extends a{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(d),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:s}=e;return{...super.createRenderParams(e),requiredLevel:this._tileInfoView.getClosestInfoForScale(s.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(s.scale)}}prepareRenderPasses(e){const s=super.prepareRenderPasses(e);return s.push(e.registerRenderPass({name:"stencil",brushes:[l],drawPhase:n.DEBUG|n.MAP|n.HIGHLIGHT,target:()=>this.getStencilTarget()})),i("esri-tiles-debug")&&s.push(e.registerRenderPass({name:"tileInfo",brushes:[h],drawPhase:n.DEBUG,target:()=>this.children})),s}getStencilTarget(){return this.children}updateTransforms(e){for(const s of this.children){const t=this._tileInfoView.getTileResolution(s.key);s.setTransform(e,t)}}setStencilReference(){let e=1;for(const s of this.children)s.stencilRef=e++}}export{u as o,c as r};
