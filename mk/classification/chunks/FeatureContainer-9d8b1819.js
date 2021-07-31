import{o as t,K as e,A as i,B as s,C as a,D as r,r as n}from"./definitions-53d29f17.js";import{r as o,o as d}from"./TileContainer-5467fd7f.js";import{n as l,t as h,bM as u,r as c,A as p,s as f,bk as v,a as b,aY as _,bN as x,bY as g,y as m,aO as y,u as z,bZ as T,R as w,bf as S,b_ as V}from"../main.js";import{t as D}from"./VertexArrayObject-4dcc1044.js";import{r as A}from"./Texture-71a7f37e.js";import{H as R,G as E,N as F,K as U}from"./Utils-a8bd9dca.js";import{n as M,l as I}from"./visualVariablesUtils-ebba8952.js";class O extends o{constructor(e,i){super(e,i,[t,t])}}const k=l.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),C=M(I,k),B=t=>2147483647&t;class q{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:a,textureOnly:r}=t,n=R(a);this.shared=i,this.pixelType=a,this.size=e,this.textureOnly=r,r||(this.data=new n(v(s))),this._resetRange()}destroy(){p(this._texture,(t=>t.dispose()));for(const t in this._fbos)p(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose()})),this._fbos[t]=null;this._texture=null}get _textureDesc(){return{target:3553,wrapMode:33071,pixelFormat:6408,dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}setData(t,e,i){const s=B(t),a=v(this.data),r=s*this.texelSize+e;!a||r>=a.length||(a[r]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(h(this.data))return null;const i=B(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return m(this._texture,(()=>this._initTexture(t)))}getFBO(t,e=0){if(h(this._fbos[e])){const i={colorTarget:0,depthStencilTarget:0},s=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new D(t,i,s)}return this._fbos[e]}get locked(){return!(5121!==this.pixelType||!this.shared||this.textureOnly||!f("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){if(!this.locked){try{const e=this.dirtyStart,i=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const s=v(this.data).buffer,a=this.getTexture(t),r=4,n=(e-e%this.size)/this.size,o=(i-i%this.size)/this.size,d=n,l=this.size,h=o,u=n*this.size*r,c=(l+h*this.size)*r-u,p=R(this.pixelType),f=new p(s,u*p.BYTES_PER_ELEMENT,c),_=this.size,x=h-d+1;if(x>this.size)return void k.error(new b("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,d,_,x,f)}catch(t){}e()}}update(t){const{data:e,start:i,end:s}=t;if(c(e)){const s=this.data,a=i*this.texelSize;for(let i=0;i<e.length;i++){const r=1<<i%this.texelSize;t.layout&r&&(s[a+i]=e[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=R(this.pixelType);this.destroy(),this.data=new s(v(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new A(t,this._textureDesc,m(this.data,void 0));if(c(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,a=this._lastTexture.descriptor.dataType,r=this._lastTexture.descriptor.pixelFormat,n=this.getFBO(t),o=E(a),d=new(R(a))(new ArrayBuffer(i*s*o*this.texelSize)),l=t.getBoundFramebufferObject(),{x:h,y:u,width:c,height:p}=t.getViewport();t.bindFramebuffer(n),n.readPixels(0,0,i,s,r,a,d),e.updateData(0,0,0,2*i,s/2,d),t.setViewport(h,u,c,p),t.bindFramebuffer(l)}return this.destroy(),this._texture=e,this._texture}}class j{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:i,size:s}=t;if(this.shared=i,this.size=s,C("Initializing AttributeStoreView",t),h(this._data))this._data=u(e,(t=>new q(t,s,i)));else for(let t=0;t<this._data.length;t++){const a=this._data[t],r=e[t];c(r)&&(h(a)?this._data[t]=new q(r,s,i):a.resize(r,s))}this._initialized=!0}destroy(){p(this._data,(t=>u(t,(t=>t.destroy())))),p(this._defaultTexture,(t=>t.dispose()))}isUpdating(){const t=this._data;if(h(t))return!0;const e=c(this._pendingAttributeUpdate),i=e;return f("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${i}\n  -> hasPendingUpdate ${e}`),i}getBlock(t){return h(this._data)?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,e,0,0)}getData(t,e,i,s){if(!this._data)return 0;const a=v(this._data)[e];if(h(a))return 0;const r=a.getData(t,i);return c(r)?r:s}setData(t,e,i,s){const a=v(this._data)[e];v(a).setData(t,i,s)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(t){if(this._pendingAttributeUpdate)return void k.error(new b("mapview-webgl","Tried to update attribute data with a pending update"));const e=_();return C("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:e},e.promise}update(){if(this._initialized&&c(this._pendingAttributeUpdate)){const{data:t,resolver:e}=this._pendingAttributeUpdate,i=v(this._data);for(let e=0;e<t.blocks.length;e++){const s=t.blocks[e],a=i[e];p(a,(t=>p(s,(i=>{C(`Updating block ${e}`,i),t.update(i)}))))}this._pendingAttributeUpdate=null,e(),this._onUpdate()}}bindTextures(t){this.update();const e=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(e,i),t.bindTexture(e,s),t.bindTexture(e,a),void t.bindTexture(e,r);const n=v(this._data);this._locked&&!this._forceNextUpload||(x(n,(e=>e.updateTexture(t,(()=>this._onUpdate())))),this._forceNextUpload=!1),t.bindTexture(g(n[0],e,(e=>e.getTexture(t))),i),t.bindTexture(g(n[1],e,(e=>e.getTexture(t))),s),t.bindTexture(g(n[2],e,(e=>e.getTexture(t))),a),t.bindTexture(g(n[3],e,(e=>e.getTexture(t))),r)}_getDefaultTexture(t){if(h(this._defaultTexture)){const e={wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1};this._defaultTexture=new A(t,e,new Uint8Array(4))}return this._defaultTexture}}function P(t,e){const i=e.length;if(t<e[0].value||1===i)return e[0].size;for(let s=1;s<i;s++)if(t<e[s].value){const i=(t-e[s-1].value)/(e[s].value-e[s-1].value);return e[s-1].size+i*(e[s].size-e[s-1].size)}return e[i-1].size}function L(t,e,i=0){if(h(e))return t[i+0]=0,t[i+1]=0,t[i+2]=0,void(t[i+3]=0);const{r:s,g:a,b:r,a:n}=e;t[i+0]=s*n/255,t[i+1]=a*n/255,t[i+2]=r*n/255,t[i+3]=n}class N{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}getSizeVVFieldStops(t){const e=this._vvSizeFieldStops;switch(e.type){case"static":return e;case"level-dependent":return m(e.levels[t],(()=>{let i=1/0,s=0;for(const a in e.levels){const e=parseFloat(a),r=Math.abs(t-e);r<i&&(i=r,s=e)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const a=2**((t-s)/2),r=v(e.levels[s]),n=new Float32Array(r.values);return n[2]*=a,n[3]*=a,{sizes:v(r.sizes),values:n}}))}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){c(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,e,i){switch(c(i)&&i.forEach((t=>this._updateEffects(t))),this._vvInfo=e,t.type){case"dot-density":this._updateDotDensityInfo(t)}}getVariation(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:y().supportsTextureFloat}}getVariationHash(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(t){c(t)&&t.filter&&t.filter.enabled&&(this.outsideLabelsVisible=t.excludedLabelsVisible)}_updateVisualVariables(t,e){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!t)return;const s=t.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const t=s.minMaxValue;let i,a;if(F(t.minSize)&&F(t.maxSize))if(U(t.minSize)&&U(t.maxSize))i=z(t.minSize),a=z(t.maxSize);else{const s=e.scale;i=z(P(s,t.minSize.stops)),a=z(P(s,t.maxSize.stops))}this.vvSizeMinMaxValue.set([t.minDataValue,t.maxDataValue,i,a])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=z(P(e.scale,s.scaleStops.stops))),s.unitValue){const t=T(e.spatialReference)/w[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=t/e.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const a=t.color;a&&(i.vvColorEnabled=!0,this.vvColorValues.set(a.values),this.vvColors.set(a.colors));const r=t.opacity;r&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(r.values),this.vvOpacities.set(r.opacities));const n=t.rotation;n&&(i.vvRotationEnabled=!0,i.vvRotationType=n.type)}_updateDotDensityInfo(t){const e=t.attributes;this.ddDotValue=t.dotValue,this.ddDotScale=t.referenceScale,this.ddDotSize=t.dotSize,this.ddDotBlending=t.dotBlendingEnabled,this.ddSeed=t.seed;for(let t=0;t<n;t++){const i=t>=e.length?new S([0,0,0,0]):e[t].color;L(this.ddColors,i,4*t)}for(let e=0;e<8;e++)this.ddActiveDots[e]=e<t.attributes.length?1:0;L(this.ddBackgroundColor,t.backgroundColor)}}class Q extends d{constructor(t){super(t),this._rendererInfo=new N,this._materialItemsRequestQueue=new V,this.attributeView=new j((()=>this.onAttributeStoreUpdate()))}destroy(){this.removeAllChildren(),this.children.forEach((t=>t.destroy())),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,e,i){this._rendererInfo.setInfo(t,e,i),this.requestRender()}async getMaterialItems(t,e){if(!t||0===t.length)return null;const i=_();return this._materialItemsRequestQueue.push({items:t,abortOptions:e,resolver:i}),this.requestRender(),i.promise}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let e=this._materialItemsRequestQueue.pop();for(;e;)this._processMaterialItemRequest(t,e),e=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const e of this.children)e.commit(t);this._rendererInfo.update(t.state),super.renderChildren(t)}createRenderParams(t){return{...super.createRenderParams(t),rendererInfo:this._rendererInfo,attributeView:this.attributeView}}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:e,abortOptions:i,resolver:s}){const{painter:a,pixelRatio:r}=t,n=e.map((t=>a.textureManager.rasterizeItem(t.symbol,r,t.glyphIds,i)));Promise.all(n).then((t=>{if(!this.stage)return void s.reject();const i=t.map(((t,i)=>({id:e[i].id,mosaicItem:t})));s.resolve(i)}),s.reject)}}export{Q as o,O as r};
