import{t}from"./VertexArrayObject-3f2d7fe3.js";import"../main.js";import"./Texture-e6b71a85.js";import{r as e}from"./WGLContainer-f50d2ca2.js";import"./definitions-53d29f17.js";import"./Utils-c8673e22.js";import"./ShaderCompiler-25eaa8ec.js";import"./config-4e1ab712.js";import"./GeometryUtils-c4c7ed43.js";import"./MaterialKey-369da2da.js";import"./Container-0ec44226.js";import"./mat4f32-b5b66fd7.js";import"./earcut-1a691bec.js";const i=[1,0],s=[0,1],r=[1,.8,.6,.4,.2],o=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class n{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(5),this._nMips=5,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(let t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null}}draw(t,n,a){const{width:l,height:h}=n,{context:p,painter:u}=t,{materialManager:m}=u,d=p.gl,c=this._programDesc,{strength:_,radius:f,threshold:g}=a;this._quad||(this._quad=new e(p,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(t,l,h),p.setStencilTestEnabled(!1),p.setBlendingEnabled(!0),p.setBlendFunction(1,771),p.setStencilWriteMask(0);const F=this._quad;F.bind(),p.bindFramebuffer(this._intensityFBO);const b=m.getProgram(t,c.luminosityHighPass);p.useProgram(b),p.bindTexture(n.colorTexture,0),b.setUniform1i("u_texture",0),b.setUniform3fv("u_defaultColor",[0,0,0]),b.setUniform1f("u_defaultOpacity",0),b.setUniform1f("u_luminosityThreshold",g),b.setUniform1f("u_smoothWidth",.01);const B=[Math.round(l/2),Math.round(h/2)];p.setViewport(0,0,B[0],B[1]),p.setClearColor(0,0,0,0),p.clear(d.COLOR_BUFFER_BIT),F.draw(),p.setBlendingEnabled(!1);let T=this._intensityFBO.colorTexture;for(let e=0;e<this._nMips;e++){const r=m.getProgram(t,c.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[e]}]);p.useProgram(r),p.bindTexture(T,e+1),r.setUniform1i("u_colorTexture",e+1),r.setUniform2fv("u_texSize",B),r.setUniform2fv("u_direction",i),p.setViewport(0,0,B[0],B[1]);const o=this._mipsFBOs[e];p.bindFramebuffer(o.horizontal),F.draw(),T=o.horizontal.colorTexture,p.bindFramebuffer(o.vertical),p.bindTexture(T,e+1),r.setUniform2fv("u_direction",s),F.draw(),T=o.vertical.colorTexture,B[0]=Math.round(B[0]/2),B[1]=Math.round(B[1]/2)}p.setViewport(0,0,l,h);const O=m.getProgram(t,c.composite,[{name:"nummips",value:5}]);p.bindFramebuffer(this._compositeFBO),p.useProgram(O),O.setUniform1f("u_bloomStrength",_),O.setUniform1f("u_bloomRadius",f),O.setUniform1fv("u_bloomFactors",r),O.setUniform3fv("u_bloomTintColors",o),p.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),O.setUniform1i("u_blurTexture1",1),p.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),O.setUniform1i("u_blurTexture2",2),p.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),O.setUniform1i("u_blurTexture3",3),p.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),O.setUniform1i("u_blurTexture4",4),p.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),O.setUniform1i("u_blurTexture5",5),F.draw(),p.bindFramebuffer(n),p.setBlendingEnabled(!0);const x=m.getProgram(t,c.blit);p.useProgram(x),p.bindTexture(this._compositeFBO.colorTexture,6),x.setUniform1i("u_texture",6),p.setBlendFunction(1,1),F.draw(),F.unbind(),p.setBlendFunction(1,771),p.setStencilTestEnabled(!0)}_createOrResizeResources(e,i,s){const{context:r}=e;if(this._compositeFBO&&this._size[0]===i&&this._size[1]===s)return;this._size[0]=i,this._size[1]=s;const o=[Math.round(i/2),Math.round(s/2)];this._compositeFBO?this._compositeFBO.resize(i,s):this._compositeFBO=new t(r,{colorTarget:0,depthStencilTarget:0,width:i,height:s}),this._intensityFBO?this._intensityFBO.resize(o[0],o[1]):this._intensityFBO=new t(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]});for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]?(this._mipsFBOs[e].horizontal.resize(o[0],o[1]),this._mipsFBOs[e].vertical.resize(o[0],o[1])):this._mipsFBOs[e]={horizontal:new t(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),vertical:new t(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]})},o[0]=Math.round(o[0]/2),o[1]=Math.round(o[1]/2)}}export{n as Bloom};
