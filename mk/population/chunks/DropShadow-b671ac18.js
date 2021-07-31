import{u as t}from"../main.js";import{t as e}from"./VertexArrayObject-6e48acf8.js";import{r}from"./Texture-0006c2e7.js";import{r as i}from"./WGLContainer-0b487b4b.js";import"./definitions-bd7968b3.js";import"./Utils-877df1ab.js";import"./ShaderCompiler-5d1a779d.js";import"./config-8597b78f.js";import"./GeometryUtils-30b98fd3.js";import"./MaterialKey-0931ca69.js";import"./Container-93dab031.js";import"./mat4f32-2521725d.js";import"./earcut-26dd4f9f.js";const s=[1,0],o=[0,1];class a{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}draw(e,r,a){const{context:l,state:n,painter:u,pixelRatio:h}=e,{materialManager:p}=u,d=this._programDesc,c=r.width,m=r.height,f=[Math.round(c/2),Math.round(m/2)],{blurRadius:_,offsetX:B,offsetY:b,color:g}=a,F=[h*t(B/2),h*t(b/2)];this._createOrResizeResources(e,c,m,f);const x=this._horizontalBlurFBO,T=this._verticalBlurFBO;l.setStencilWriteMask(0),l.setStencilTestEnabled(!1),l.setDepthWriteEnabled(!1),l.setDepthTestEnabled(!1);const w=this._layerFBOTexture;r.copyToTexture(0,0,c,m,0,0,w),this._quad||(this._quad=new i(l,[-1,-1,1,-1,-1,1,1,1])),l.setViewport(0,0,f[0],f[1]);const O=this._quad;O.bind(),l.setBlendingEnabled(!1);const M=p.getProgram(e,d.blur,[{name:"radius",value:Math.ceil(_)}]);l.useProgram(M),l.bindFramebuffer(x),l.bindTexture(r.colorTexture,4),M.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),M.setUniform2fv("u_offset",F),M.setUniform1i("u_colorTexture",4),M.setUniform2fv("u_texSize",f),M.setUniform2fv("u_direction",s),M.setUniform1f("u_sigma",_),O.draw(),l.bindFramebuffer(T),l.bindTexture(x.colorTexture,5),M.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),M.setUniform2fv("u_offset",[0,0]),M.setUniform1i("u_colorTexture",5),M.setUniform2fv("u_direction",o),O.draw(),l.bindFramebuffer(r),l.setViewport(0,0,c,m);const v=p.getProgram(e,d.composite);l.useProgram(v),l.bindTexture(T.colorTexture,2),v.setUniform1i("u_blurTexture",2),l.bindTexture(w,3),v.setUniform1i("u_layerFBOTexture",3),v.setUniform4fv("u_shadowColor",[g[3]*(g[0]/255),g[3]*(g[1]/255),g[3]*(g[2]/255),g[3]]),O.draw(),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!0),l.setBlendFunction(1,771),O.unbind()}_createOrResizeResources(t,i,s,o){const{context:a}=t;this._horizontalBlurFBO&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(o[0],o[1]):this._horizontalBlurFBO=new e(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(o[0],o[1]):this._verticalBlurFBO=new e(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new r(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}))}}export{a as DropShadow};