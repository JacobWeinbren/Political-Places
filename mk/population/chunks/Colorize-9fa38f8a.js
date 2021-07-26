import"./VertexArrayObject-24b79200.js";import"../main.js";import{r as e}from"./Texture-4f49b301.js";import{r as t}from"./WGLContainer-624bf74e.js";import"./definitions-9b706c30.js";import"./Utils-8f3351b9.js";import"./ShaderCompiler-d1213600.js";import"./config-ce383fc5.js";import"./GeometryUtils-c573938c.js";import"./MaterialKey-a0ce035e.js";import"./Container-529d87ac.js";import"./mat4f32-da8dff1b.js";import"./earcut-fdc0e191.js";class r{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:i,height:s}=t;this._createOrResizeResources(e,i,s);const{context:o,painter:a}=e,{materialManager:n}=a,c=this._programDesc,p=this._quad,l=r.colorMatrix;p.bind();const d=this._layerFBOTexture;o.bindFramebuffer(t),t.copyToTexture(0,0,i,s,0,0,d),o.setBlendingEnabled(!1),o.setStencilTestEnabled(!1);const m=n.getProgram(e,c);o.useProgram(m),o.bindTexture(d,2),m.setUniformMatrix4fv("u_coefficients",l),m.setUniform1i("u_colorTexture",2),p.draw(),o.setBlendingEnabled(!0),o.setBlendFunction(1,771),o.setStencilTestEnabled(!0),p.unbind()}_createOrResizeResources(r,i,s){const{context:o}=r;this._layerFBOTexture&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new e(o,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}),this._quad||(this._quad=new t(o,[-1,-1,1,-1,-1,1,1,1])))}}export{r as Colorize};
