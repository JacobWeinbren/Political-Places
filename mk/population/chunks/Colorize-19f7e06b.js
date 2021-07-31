import"./VertexArrayObject-cdbcc5ca.js";import"../main.js";import{r as e}from"./Texture-0918c04c.js";import{r as t}from"./WGLContainer-2d3dc8e2.js";import"./definitions-bd7968b3.js";import"./Utils-eaec25c8.js";import"./ShaderCompiler-e5f2108d.js";import"./config-8597b78f.js";import"./GeometryUtils-30b98fd3.js";import"./MaterialKey-3411abd6.js";import"./Container-236d691a.js";import"./mat4f32-2521725d.js";import"./earcut-26dd4f9f.js";class r{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:i,height:s}=t;this._createOrResizeResources(e,i,s);const{context:a,painter:o}=e,{materialManager:n}=o,c=this._programDesc,d=this._quad,p=r.colorMatrix;d.bind();const l=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,i,s,0,0,l),a.setBlendingEnabled(!1),a.setStencilTestEnabled(!1);const m=n.getProgram(e,c);a.useProgram(m),a.bindTexture(l,2),m.setUniformMatrix4fv("u_coefficients",p),m.setUniform1i("u_colorTexture",2),d.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0),d.unbind()}_createOrResizeResources(r,i,s){const{context:a}=r;this._layerFBOTexture&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new e(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}),this._quad||(this._quad=new t(a,[-1,-1,1,-1,-1,1,1,1])))}}export{r as Colorize};