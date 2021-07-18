import{u as t}from"../main.js";import{o as e}from"./VertexArrayObject-bb431149.js";import{r as i}from"./Texture-5a89d4a3.js";import{r}from"./WGLContainer-eb2d2b0f.js";import"eng/classification.json";import"./definitions-be7cb682.js";import"./Utils-2551d0f9.js";import"./ShaderCompiler-379f9269.js";import"./config-934c8236.js";import"./GeometryUtils-7e05e834.js";import"./MaterialKey-9e422469.js";import"./Container-9f12c35a.js";import"./mat4f32-fb08207a.js";import"./earcut-53c533a1.js";const s=[1,0],o=[0,1];class a{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}draw(e,i,a){const{context:n,state:l,painter:u,pixelRatio:p}=e,{materialManager:h}=u,d=this._programDesc,c=i.width,m=i.height,f=[Math.round(c/2),Math.round(m/2)],{blurRadius:_,offsetX:B,offsetY:g,color:b}=a,F=[p*t(B/2),p*t(g/2)];this._createOrResizeResources(e,c,m,f);const x=this._horizontalBlurFBO,T=this._verticalBlurFBO;n.setStencilWriteMask(0),n.setStencilTestEnabled(!1),n.setDepthWriteEnabled(!1),n.setDepthTestEnabled(!1);const w=this._layerFBOTexture;i.copyToTexture(0,0,c,m,0,0,w),this._quad||(this._quad=new r(n,[-1,-1,1,-1,-1,1,1,1])),n.setViewport(0,0,f[0],f[1]);const O=this._quad;O.bind(),n.setBlendingEnabled(!1);const M=h.getProgram(e,d.blur,[{name:"radius",value:Math.ceil(_)}]);n.useProgram(M),n.bindFramebuffer(x),n.bindTexture(i.colorTexture,4),M.setUniformMatrix3fv("u_displayViewMat3",l.displayMat3),M.setUniform2fv("u_offset",F),M.setUniform1i("u_colorTexture",4),M.setUniform2fv("u_texSize",f),M.setUniform2fv("u_direction",s),M.setUniform1f("u_sigma",_),O.draw(),n.bindFramebuffer(T),n.bindTexture(x.colorTexture,5),M.setUniformMatrix3fv("u_displayViewMat3",l.displayMat3),M.setUniform2fv("u_offset",[0,0]),M.setUniform1i("u_colorTexture",5),M.setUniform2fv("u_direction",o),O.draw(),n.bindFramebuffer(i),n.setViewport(0,0,c,m);const v=h.getProgram(e,d.composite);n.useProgram(v),n.bindTexture(T.colorTexture,2),v.setUniform1i("u_blurTexture",2),n.bindTexture(w,3),v.setUniform1i("u_layerFBOTexture",3),v.setUniform4fv("u_shadowColor",[b[3]*(b[0]/255),b[3]*(b[1]/255),b[3]*(b[2]/255),b[3]]),O.draw(),n.setBlendingEnabled(!0),n.setStencilTestEnabled(!0),n.setBlendFunction(1,771),O.unbind()}_createOrResizeResources(t,r,s,o){const{context:a}=t;this._horizontalBlurFBO&&this._size[0]===r&&this._size[1]===s||(this._size[0]=r,this._size[1]=s,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(o[0],o[1]):this._horizontalBlurFBO=new e(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(o[0],o[1]):this._verticalBlurFBO=new e(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(r,s):this._layerFBOTexture=new i(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r,height:s}))}}export{a as DropShadow};
