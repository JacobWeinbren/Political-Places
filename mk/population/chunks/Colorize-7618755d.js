import"./VertexArrayObject-85ff2ae5.js";import"../main.js";import{r as e}from"./Texture-f5efd563.js";import{r as t}from"./WGLContainer-1e258b65.js";import"./definitions-bd7968b3.js";import"./Utils-9f082675.js";import"./ShaderCompiler-b75cc1fb.js";import"./config-8597b78f.js";import"./GeometryUtils-30b98fd3.js";import"./MaterialKey-be4be22d.js";import"./Container-9c711663.js";import"./mat4f32-2521725d.js";import"./earcut-26dd4f9f.js";class r{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:i,height:s}=t;this._createOrResizeResources(e,i,s);const{context:o,painter:a}=e,{materialManager:n}=a,p=this._programDesc,c=this._quad,d=r.colorMatrix;c.bind();const l=this._layerFBOTexture;o.bindFramebuffer(t),t.copyToTexture(0,0,i,s,0,0,l),o.setBlendingEnabled(!1),o.setStencilTestEnabled(!1);const m=n.getProgram(e,p);o.useProgram(m),o.bindTexture(l,2),m.setUniformMatrix4fv("u_coefficients",d),m.setUniform1i("u_colorTexture",2),c.draw(),o.setBlendingEnabled(!0),o.setBlendFunction(1,771),o.setStencilTestEnabled(!0),c.unbind()}_createOrResizeResources(r,i,s){const{context:o}=r;this._layerFBOTexture&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new e(o,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}),this._quad||(this._quad=new t(o,[-1,-1,1,-1,-1,1,1,1])))}}export{r as Colorize};
