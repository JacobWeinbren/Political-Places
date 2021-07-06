import"./VertexArrayObject-9b598883.js";import"../main.js";import{r as e}from"./Texture-985b002d.js";import{r as t}from"./WGLContainer-4911ff2d.js";import"./definitions-bed6fa82.js";import"./Utils-5ca71fda.js";import"./ShaderCompiler-c6da5fe6.js";import"./config-90cc2904.js";import"./GeometryUtils-fcb6a2d9.js";import"./MaterialKey-e4d8bf43.js";import"./Container-4c789dcd.js";import"./mat4f32-c792828b.js";import"./earcut-f770eba4.js";class r{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:i,height:s}=t;this._createOrResizeResources(e,i,s);const{context:a,painter:o}=e,{materialManager:n}=o,c=this._programDesc,d=this._quad,p=r.colorMatrix;d.bind();const l=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,i,s,0,0,l),a.setBlendingEnabled(!1),a.setStencilTestEnabled(!1);const m=n.getProgram(e,c);a.useProgram(m),a.bindTexture(l,2),m.setUniformMatrix4fv("u_coefficients",p),m.setUniform1i("u_colorTexture",2),d.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0),d.unbind()}_createOrResizeResources(r,i,s){const{context:a}=r;this._layerFBOTexture&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new e(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}),this._quad||(this._quad=new t(a,[-1,-1,1,-1,-1,1,1,1])))}}export{r as Colorize};
