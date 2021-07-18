import"./VertexArrayObject-bb431149.js";import"../main.js";import{r as e}from"./Texture-5a89d4a3.js";import{r as t}from"./WGLContainer-eb2d2b0f.js";import"eng/classification.json";import"./definitions-be7cb682.js";import"./Utils-2551d0f9.js";import"./ShaderCompiler-379f9269.js";import"./config-934c8236.js";import"./GeometryUtils-7e05e834.js";import"./MaterialKey-9e422469.js";import"./Container-9f12c35a.js";import"./mat4f32-fb08207a.js";import"./earcut-53c533a1.js";class i{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,i){const{width:r,height:s}=t;this._createOrResizeResources(e,r,s);const{context:a,painter:o}=e,{materialManager:n}=o,c=this._programDesc,p=this._quad,l=i.colorMatrix;p.bind();const m=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,r,s,0,0,m),a.setBlendingEnabled(!1),a.setStencilTestEnabled(!1);const d=n.getProgram(e,c);a.useProgram(d),a.bindTexture(m,2),d.setUniformMatrix4fv("u_coefficients",l),d.setUniform1i("u_colorTexture",2),p.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0),p.unbind()}_createOrResizeResources(i,r,s){const{context:a}=i;this._layerFBOTexture&&this._size[0]===r&&this._size[1]===s||(this._size[0]=r,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(r,s):this._layerFBOTexture=new e(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r,height:s}),this._quad||(this._quad=new t(a,[-1,-1,1,-1,-1,1,1,1])))}}export{i as Colorize};
