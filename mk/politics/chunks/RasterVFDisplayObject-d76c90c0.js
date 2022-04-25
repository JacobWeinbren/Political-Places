import{s as e,r as t,t as s,dp as i,dq as a,b1 as r,a$ as n,b2 as o,L as l,Z as d,_ as h,a0 as c,X as u,j as p,a8 as m,cp as _,x as y,k as g,dl as f,cM as x,ck as v,aZ as S,b0 as w,bZ as D,a_ as b}from"../main.js";import{y as R,F as V,D as A}from"./dataUtils-1e734760.js";import{b as O,i as z}from"./WGLContainer-13b2f2d5.js";import{I as T,d as C}from"./Utils-be23a2c6.js";import{a as F}from"./Container-4f30f201.js";import{c as L,f as P}from"./VertexArrayObject-a92d69a3.js";import{C as I,F as k}from"./enums-154d47de.js";import{t as M}from"./VertexElementDescriptor-d5c236cd.js";class j extends O{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(e){super.doRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"flow",brushes:[z],target:()=>this.children,drawPhase:T.MAP});return[...super.prepareRenderPasses(e),t]}}const W=e.getLogger("esri.views.2d.engine.flow.FlowDisplayData");class E{constructor(e,t,s,i){this.state={name:"created"},this.flowStyle=e,this.extent=t,this.size=s,this.pixelRatio=i}async load(){const e=new AbortController;this.state={name:"loading",abortController:e};const t=await this.flowStyle.loadResources({extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},e.signal);this.state={name:"loaded",resources:t}}prepareForRendering(e){if("loaded"!==this.state.name)return void W.error("Only loaded resources can be attached.");const t=this.state.resources;t.prepareForRendering(e),this.state={name:"attached",resources:t}}destroy(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(e){return!!this.flowStyle.areResourcesCompatible(e.flowStyle)&&!(!this.extent.equals(e.extent)||this.size[0]!==e.size[0]||this.size[1]!==e.size[1]||this.pixelRatio!==e.pixelRatio||(this.flowStyle=e.flowStyle,0))}}class q extends F{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(e){this._displayData=e,this.requestRender()}clear(){t(this._displayData)&&(this._displayData.destroy(),this._displayData=null,this.requestRender())}setTransform(e){const{displayData:t}=this;if(s(t))return;const l=t.extent.xmin,d=t.extent.ymax,h=[0,0];e.toScreen(h,[l,d]);const c=(t.extent.xmax-t.extent.xmin)/t.size[0]/e.resolution,u=i(e.rotation),{dvs:p}=this.transforms;a(p,[-1,1,0]),r(p,p,[2/(e.size[0]*e.pixelRatio),-2/(e.size[1]*e.pixelRatio),1]),n(p,p,[h[0],h[1],0]),o(p,p,u),r(p,p,[c*e.pixelRatio,c*e.pixelRatio,1])}_createTransforms(){return{dvs:l()}}}const B=e.getLogger("esri.views.2d.engine.flow.FlowStrategy");let U=class extends u{constructor(e){super(e),this._flowDisplayObject=new q,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(e){const{flowStyle:a}=this.flowContainer;if(s(a))return void this._clear();const{extent:r,rotation:n,resolution:o,pixelRatio:l}=e.state,d=function(e,t){const s=new m({x:(e.xmax+e.xmin)/2,y:(e.ymax+e.ymin)/2,spatialReference:e.spatialReference}),a=e.xmax-e.xmin,r=e.ymax-e.ymin,n=Math.abs(Math.cos(i(t))),o=Math.abs(Math.sin(i(t))),l=n*a+o*r,d=o*a+n*r,h=new _({xmin:s.x-l/2,ymin:s.y-d/2,xmax:s.x+l/2,ymax:s.y+d/2,spatialReference:e.spatialReference});return h.centerAt(s),h}(r,n);d.expand(1.15);const h=[Math.round((d.xmax-d.xmin)/o),Math.round((d.ymax-d.ymin)/o)],c=new E(a,d,h,l);if(t(this._loading)){if(this._loading.update(c))return;this._loading.destroy(),this._loading=null}!s(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(c)||(c.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null}),(e=>{p(e)||(B.error("A resource failed to load.",e),this._loading=null)})),this._loading=c)}_clear(){this._flowDisplayObject.clear(),t(this._loading)&&(this._loading.destroy(),this._loading=null)}};d([h()],U.prototype,"_loading",void 0),d([h()],U.prototype,"flowContainer",void 0),d([h()],U.prototype,"updating",null),U=d([c("esri.views.2d.engine.flow.FlowStrategy")],U);const N=U;const Z=new Map;Z.set("a_positionAndSide",0),Z.set("a_timeInfo",1),Z.set("a_extrude",2),Z.set("a_speed",3);const J={geometry:[new M("a_positionAndSide",3,I.FLOAT,0,36),new M("a_timeInfo",3,I.FLOAT,12,36),new M("a_extrude",2,I.FLOAT,24,36),new M("a_speed",1,I.FLOAT,32,36)]};class G{constructor(e,t,s){this.values=s,this._vertexData=e,this._indexData=t}prepareForRendering(e){const t=L.createVertex(e,k.STATIC_DRAW,this._vertexData),s=L.createIndex(e,k.STATIC_DRAW,this._indexData),i=new P(e,Z,J,{geometry:t},s);this.vertexBuffer=t,this.indexBuffer=s,this.vertexArray=i,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose()}get locations(){return Z}}function X(e){const t=function(e){if(!e.hasVisualVariables("size"))return{kind:"constant",value:[y(e.trailWidth)]};const t=e.getVisualVariablesForType("size")[0],s=[],i=[];let a;if(t.stops){for(const e of t.stops)s.push(e.value),i.push(e.size);a=t.stops.length}else s.push(t.minDataValue,t.maxDataValue),i.push(t.minSize,t.maxSize),a=2;return{kind:"ramp",stops:s,values:i,count:a}}(e),s=function(e){return"constant"===e.kind?e.value[0]:e.values[e.values.length-1]}(t),i=2*s,a=Math.round(y(e.maxPathLength)/i)+1,r=s,n=H(e),o=function(e){if(!e.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const t=e.getVisualVariablesForType("opacity")[0],s=[],i=[];for(const e of t.stops)s.push(e.value),i.push(e.opacity);return{kind:"ramp",stops:s,values:i,count:t.stops.length}}(e),{flowSpeed:l,trailLength:d,density:h}=e;return{lineRenderWidth:t,segmentLength:i,verticesPerLine:a,lineCollisionWidth:r,lineSpacing:10,lineColor:n,lineOpacity:o,lineSpeed:l,fadeDuration:d,density:h,smoothing:y(e.smoothing),velocityScale:"flow-from"===e.flowRepresentation?1:-1,minWeightThreshold:.001,minSpeedThreshold:.001,maxTurnAngle:1,mergeLines:!0,interpolate:!0,profile:!1}}function $(e){const t=e.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function H(e){if(!e.hasVisualVariables("color"))return{kind:"constant",value:$(e.color)};const t=e.getVisualVariablesForType("color")[0],s=[],i=[];for(const e of t.stops)s.push(e.value),Array.prototype.push.apply(i,$(e.color));return{kind:"ramp",stops:s,values:i,count:t.stops.length}}class K{constructor(e,t,s,i){this._loadImagery=e,this._createStreamlinesMesh=t,this._timeExtent=i,this._rendererSettings=X(s)}get animated(){return this._rendererSettings.lineSpeed>0}get renderSettings(){return this._rendererSettings}areResourcesCompatible(e){let s=!0;return s=s&&e._loadImagery===this._loadImagery,s=s&&e._createStreamlinesMesh===this._createStreamlinesMesh,s=s&&e._rendererSettings.verticesPerLine===this._rendererSettings.verticesPerLine,s=s&&e._rendererSettings.segmentLength===this._rendererSettings.segmentLength,s=s&&e._rendererSettings.lineSpacing===this._rendererSettings.lineSpacing,s=s&&e._rendererSettings.density===this._rendererSettings.density,s=s&&e._rendererSettings.smoothing===this._rendererSettings.smoothing,s=s&&e._rendererSettings.velocityScale===this._rendererSettings.velocityScale,s=s&&e._rendererSettings.minWeightThreshold===this._rendererSettings.minWeightThreshold,s=s&&e._rendererSettings.minSpeedThreshold===this._rendererSettings.minSpeedThreshold,s=s&&e._rendererSettings.mergeLines===this._rendererSettings.mergeLines,s=s&&e._rendererSettings.velocityScale===this._rendererSettings.velocityScale,s=s&&e._rendererSettings.interpolate===this._rendererSettings.interpolate,s=s&&e._rendererSettings.lineColor.kind===this._rendererSettings.lineColor.kind,s=s&&e._rendererSettings.lineOpacity.kind===this._rendererSettings.lineOpacity.kind,s=s&&e._rendererSettings.lineRenderWidth.kind===this._rendererSettings.lineRenderWidth.kind,s&&this._rendererSettings.mergeLines&&(s=e._rendererSettings.lineCollisionWidth===this._rendererSettings.lineCollisionWidth),s&&e._timeExtent!==this._timeExtent&&(s=!(!t(e._timeExtent)||!t(this._timeExtent))&&e._timeExtent.equals(this._timeExtent)),s}async loadResources(e,t){const{extent:s,size:i}=e;g(t);const a=await this._loadImagery(s,i[0],i[1],this._timeExtent,t),{vertexData:r,indexData:n}=await this._createStreamlinesMesh(this._rendererSettings,a,t);return new G(r,n,{lineColor:this._rendererSettings.lineColor,lineOpacity:this._rendererSettings.lineOpacity,lineRenderWidth:this._rendererSettings.lineRenderWidth})}}let Q=class extends f{constructor(){super(...arguments),this._loadImagery=(e,t,s,i,a)=>R(this.layer,e,t,s,i,a),this._createStreamlinesMesh=(e,t,s)=>this.layer.createStreamlinesMesh({flowData:t,rendererSettings:e},{signal:s}),this.attached=!1,this.container=null,this.layer=null,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this._strategy||this._strategy.updating}attach(){const{layer:e}=this,t=()=>{this._loadImagery=(t,s,i,a,r)=>R(e,t,s,i,a,r),this._updateVisualization()};"multidimensionalDefinition"in e?this.handles.add(x((()=>e.multidimensionalDefinition),t)):this.handles.add([x((()=>e.mosaicRule),t),x((()=>e.renderingRule),t),x((()=>e.definitionExpression),t)]),this.container=new j,this._strategy=new N({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container.removeAllChildren(),this.container=null,this.handles.removeAll()}update(e){e.stationary?this._strategy.update(e):this.layerView.requestUpdate()}hitTest(e){return new v({attributes:{},geometry:e.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){if("flow"!==this.layer.renderer.type)return;const e=new K(this._loadImagery,this._createStreamlinesMesh,this.layer.renderer,this.timeExtent);this.container.flowStyle=e,this.layerView.requestUpdate()}};d([h()],Q.prototype,"_strategy",void 0),d([h()],Q.prototype,"attached",void 0),d([h()],Q.prototype,"container",void 0),d([h()],Q.prototype,"layer",void 0),d([h()],Q.prototype,"layerView",void 0),d([h()],Q.prototype,"type",void 0),d([h()],Q.prototype,"updating",null),d([h()],Q.prototype,"timeExtent",void 0),Q=d([c("esri.views.2d.engine.flow.FlowView2D")],Q);const Y=Q;class ee extends F{constructor(e=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.width=null,this.source=e}destroy(){var e,s;t(this.vaoData)&&(null==(e=this.vaoData.magdir)||e.vao.dispose(),null==(s=this.vaoData.scalar)||s.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(e){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(e)&&(this._symbolizerParameters=e,this.invalidateVAO())}get source(){return this._source}set source(e){this._source=e,this.invalidateVAO()}invalidateVAO(){var e,s;!this._vaoInvalidated&&t(this.vaoData)&&(null==(e=this.vaoData.magdir)||e.vao.dispose(),null==(s=this.vaoData.scalar)||s.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(e){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,t(this.source)&&!t(this.vaoData)){const{style:t}=this.symbolizerParameters;switch(t){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const t=V(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(e.context,t);this.vaoData={magdir:s}}break;case"simple_scalar":{const t=A(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(e.context,t);this.vaoData={scalar:s}}break;case"wind_speed":{const t=V(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(e.context,t),i=A(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(e.context,i);this.vaoData={magdir:s,scalar:a}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:l()}}setTransform(e){const t=S(this.transforms.dvs),[s,i]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/e.resolution,r=a*this.width,l=a*this.height,d=Math.PI*this.rotation/180;n(t,t,w(s,i)),n(t,t,w(r/2,l/2)),o(t,t,-d),n(t,t,w(-r/2,-l/2)),D(t,t,w(r,l)),b(this.transforms.dvs,e.displayViewMat3,t)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(e,t){const{vertexData:s,indexData:i}=t,a=L.createVertex(e,k.STATIC_DRAW,new Float32Array(s)),r=L.createIndex(e,k.STATIC_DRAW,new Uint32Array(i)),n=C("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:I.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:I.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:I.FLOAT,normalized:!1}]});return{vao:new P(e,n.attributes,n.bufferLayouts,{geometry:a},r),elementCount:i.length}}}export{ee as _,Y as d};
