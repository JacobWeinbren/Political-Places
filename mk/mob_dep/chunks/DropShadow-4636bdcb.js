import{u as t}from"../main.js";import{t as e}from"./VertexArrayObject-38dc54b8.js";import{r}from"./Texture-6543adec.js";import{r as i}from"./WGLContainer-8b68194c.js";import"./definitions-402d8636.js";import"./Utils-206e82fc.js";import"./ShaderCompiler-04b6e67c.js";import"./config-eda66a4a.js";import"./GeometryUtils-c03a3235.js";import"./MaterialKey-cf850b88.js";import"./Container-4e472596.js";import"./mat4f32-3672828c.js";import"./earcut-9c8a3447.js";const s=[1,0],o=[0,1];class a{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}draw(e,r,a){const{context:l,state:n,painter:u,pixelRatio:h}=e,{materialManager:p}=u,d=this._programDesc,c=r.width,m=r.height,_=[Math.round(c/2),Math.round(m/2)],{blurRadius:f,offsetX:B,offsetY:g,color:F}=a,b=[h*t(B/2),h*t(g/2)];this._createOrResizeResources(e,c,m,_);const x=this._horizontalBlurFBO,T=this._verticalBlurFBO;l.setStencilWriteMask(0),l.setStencilTestEnabled(!1),l.setDepthWriteEnabled(!1),l.setDepthTestEnabled(!1);const w=this._layerFBOTexture;r.copyToTexture(0,0,c,m,0,0,w),this._quad||(this._quad=new i(l,[-1,-1,1,-1,-1,1,1,1])),l.setViewport(0,0,_[0],_[1]);const O=this._quad;O.bind(),l.setBlendingEnabled(!1);const M=p.getProgram(e,d.blur,[{name:"radius",value:Math.ceil(f)}]);l.useProgram(M),l.bindFramebuffer(x),l.bindTexture(r.colorTexture,4),M.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),M.setUniform2fv("u_offset",b),M.setUniform1i("u_colorTexture",4),M.setUniform2fv("u_texSize",_),M.setUniform2fv("u_direction",s),M.setUniform1f("u_sigma",f),O.draw(),l.bindFramebuffer(T),l.bindTexture(x.colorTexture,5),M.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),M.setUniform2fv("u_offset",[0,0]),M.setUniform1i("u_colorTexture",5),M.setUniform2fv("u_direction",o),O.draw(),l.bindFramebuffer(r),l.setViewport(0,0,c,m);const v=p.getProgram(e,d.composite);l.useProgram(v),l.bindTexture(T.colorTexture,2),v.setUniform1i("u_blurTexture",2),l.bindTexture(w,3),v.setUniform1i("u_layerFBOTexture",3),v.setUniform4fv("u_shadowColor",[F[3]*(F[0]/255),F[3]*(F[1]/255),F[3]*(F[2]/255),F[3]]),O.draw(),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!0),l.setBlendFunction(1,771),O.unbind()}_createOrResizeResources(t,i,s,o){const{context:a}=t;this._horizontalBlurFBO&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(o[0],o[1]):this._horizontalBlurFBO=new e(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(o[0],o[1]):this._verticalBlurFBO=new e(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new r(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}))}}export{a as DropShadow};
