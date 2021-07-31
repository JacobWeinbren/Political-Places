import"./VertexArrayObject-4b3f3910.js";import"../main.js";import{r as e}from"./Texture-cf3a29a3.js";import{r as t}from"./WGLContainer-6108f277.js";import"./definitions-53d29f17.js";import"./Utils-d750d03c.js";import"./ShaderCompiler-0c54d830.js";import"./config-4e1ab712.js";import"./GeometryUtils-c4c7ed43.js";import"./MaterialKey-3ce37902.js";import"./Container-8a6a7aff.js";import"./mat4f32-b5b66fd7.js";import"./earcut-1a691bec.js";class r{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:i,height:s}=t;this._createOrResizeResources(e,i,s);const{context:a,painter:o}=e,{materialManager:n}=o,c=this._programDesc,p=this._quad,l=r.colorMatrix;p.bind();const d=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,i,s,0,0,d),a.setBlendingEnabled(!1),a.setStencilTestEnabled(!1);const m=n.getProgram(e,c);a.useProgram(m),a.bindTexture(d,2),m.setUniformMatrix4fv("u_coefficients",l),m.setUniform1i("u_colorTexture",2),p.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0),p.unbind()}_createOrResizeResources(r,i,s){const{context:a}=r;this._layerFBOTexture&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new e(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}),this._quad||(this._quad=new t(a,[-1,-1,1,-1,-1,1,1,1])))}}export{r as Colorize};
