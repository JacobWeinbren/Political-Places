import{aj as t,bh as e,V as i,W as o,X as a,T as s,dx as r,ak as n,bP as h,cH as p,d6 as d}from"../main.js";import{g as l}from"./Bitmap-980b6844.js";const c=Math.PI/180;function m(t){return t*c}function u(t,e){const i=m(e.rotation),o=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),[s,r]=e.size;return t[0]=Math.round(r*a+s*o),t[1]=Math.round(r*o+s*a),t}const g=t(),x=[0,0],f=new e(0,0,0,0),y=2048,M=2048,v=!1,S=!1,w=!1;let _=class extends s{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=w,this.imageMaxWidth=y,this.imageMaxHeight=M,this.imageRotationSupported=v,this.imageNormalizationSupported=S,this.update=r((async(t,e)=>{if(!t.stationary||this.destroyed)return null;const i=t.state,o=n(i.spatialReference),a=this.hidpi?t.pixelRatio:1,s=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];s?(x[0]=i.worldScreenWidth,x[1]=i.size[1]):this.imageRotationSupported?(x[0]=i.size[0],x[1]=i.size[1]):u(x,i);const r=Math.floor(x[0]*a)>this.imageMaxWidth||Math.floor(x[1]*a)>this.imageMaxHeight,h=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),p=!this.imageNormalizationSupported&&h,d=!r&&!p,l=this.imageRotationSupported?i.rotation:0;if(d){const t=s?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,x,t,i.resolution,l,a,e)}else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);p&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,l,a,e)}return this._imagePromise.then((async t=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=t?t:[];for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{e.remove()}));for(const e of t)this.container.addChild(e),e.fadeIn()}})).catch((t=>{throw this._imagePromise=null,t}))}),5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e),e.invalidateTexture(),e.requestRender()}}async _export(t,e,i,o,a,s){const r=await this.fetchSource(t,Math.floor(e*a),Math.floor(i*a),{rotation:o,pixelRatio:a,signal:s}),n=new l(r,"additive");return n.x=t.xmin,n.y=t.ymax,n.resolution=t.width/e,n.rotation=o,n.pixelRatio=a,n}async _singleExport(t,e,i,o,a,s,r){!function(t,e,i,o){const[a,s]=e,[r,n]=o,h=.5*i;t[0]=a-h*r,t[1]=s-h*n,t[2]=a+h*r,t[3]=s+h*n}(g,i,o,e);const n=new h(g[0],g[1],g[2],g[3],t.spatialReference);return[await this._export(n,e[0],e[1],a,s,r)]}_tiledExport(t,e,i,o,a){const s=p.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),r=new d(s),n=r.getTileCoverage(t);if(!n)return null;const l=[];return n.forEach(((s,n,p,d)=>{f.set(s,n,p,d),r.getTileBounds(g,f);const c=new h(g[0],g[1],g[2],g[3],t.spatialReference);l.push(this._export(c,e,e,i,o,a))})),Promise.all(l)}};i([o()],_.prototype,"_imagePromise",void 0),i([o()],_.prototype,"bitmaps",void 0),i([o()],_.prototype,"container",void 0),i([o()],_.prototype,"fetchSource",void 0),i([o()],_.prototype,"hidpi",void 0),i([o()],_.prototype,"imageMaxWidth",void 0),i([o()],_.prototype,"imageMaxHeight",void 0),i([o()],_.prototype,"imageRotationSupported",void 0),i([o()],_.prototype,"imageNormalizationSupported",void 0),i([o()],_.prototype,"requestUpdate",void 0),i([o()],_.prototype,"updating",null),_=i([a("esri.views.2d.layers.support.ExportStrategy")],_);var R=_;export{R as S};
