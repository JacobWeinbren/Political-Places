import{bT as e,bh as s,c0 as t,c1 as r,s as i}from"../main.js";import{a as o}from"./Container-cab1dedc.js";import{I as n}from"./Utils-0f3fb6bb.js";import{o as a,a as l,m as c}from"./WGLContainer-161f7a04.js";class h extends o{constructor(t,r,i,o=i){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:e(),tileMat3:e()},this.triangleCount=0,this.key=new s(t),this.bounds=r,this.size=i,this.coordRange=o}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(e){this._coords=[e[0],e[3]],this._bounds=e}setTransform(e,s){const i=s/(e.resolution*e.pixelRatio),o=this.transforms.tileMat3,[n,a]=e.toScreenNoRotation([0,0],this.coords),l=this.size[0]/this.coordRange[0]*i,c=this.size[1]/this.coordRange[1]*i;t(o,l,0,0,0,c,0,n,a,1),r(this.transforms.dvs,e.displayViewMat3,o)}}const d=(e,s)=>e.key.level-s.key.level!=0?e.key.level-s.key.level:e.key.row-s.key.row!=0?e.key.row-s.key.row:e.key.col-s.key.col;class u extends a{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(d),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:s}=e;return{...super.createRenderParams(e),requiredLevel:this._tileInfoView.getClosestInfoForScale(s.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(s.scale)}}prepareRenderPasses(e){const s=super.prepareRenderPasses(e);return s.push(e.registerRenderPass({name:"stencil",brushes:[l],drawPhase:n.DEBUG|n.MAP|n.HIGHLIGHT,target:()=>this.getStencilTarget()})),i("esri-tiles-debug")&&s.push(e.registerRenderPass({name:"tileInfo",brushes:[c],drawPhase:n.DEBUG,target:()=>this.children})),s}getStencilTarget(){return this.children}updateTransforms(e){for(const s of this.children){const t=this._tileInfoView.getTileResolution(s.key);s.setTransform(e,t)}}setStencilReference(){let e=1;for(const s of this.children)s.stencilRef=e++}}export{u as o,h as r};
