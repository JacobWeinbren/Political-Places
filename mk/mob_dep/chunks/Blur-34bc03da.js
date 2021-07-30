import{t as e}from"./VertexArrayObject-74f7d6e0.js";import"../main.js";import"./Texture-f8971cb4.js";import{r as t}from"./WGLContainer-5808f336.js";import"./definitions-402d8636.js";import"./Utils-2634df4a.js";import"./ShaderCompiler-836e811c.js";import"./config-eda66a4a.js";import"./GeometryUtils-c03a3235.js";import"./MaterialKey-6acb05c3.js";import"./Container-88c6eda1.js";import"./mat4f32-3672828c.js";import"./earcut-9c8a3447.js";const r=[1,0],s=[0,1];class i{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,r,s){const{context:i}=e,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(e),this._quad||(this._quad=new t(i,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(e,r,n):this._radialBlur(e,r),o.unbind()}_gaussianBlur(e,t,i){const{context:a,state:n,painter:o,pixelRatio:l}=e,{size:u}=n,{materialManager:d}=o,p=this._programDesc,c=this._quad,h=[Math.round(l*u[0]),Math.round(l*u[1])],b=this._blurFBO,m=d.getProgram(e,p.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);a.useProgram(m),a.setBlendingEnabled(!1),a.bindFramebuffer(b),a.bindTexture(t.colorTexture,4),m.setUniform1i("u_colorTexture",4),m.setUniform2fv("u_texSize",h),m.setUniform2fv("u_direction",r),m.setUniform1f("u_sigma",i),c.draw(),a.bindFramebuffer(t),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.bindTexture(b.colorTexture,5),m.setUniform1i("u_colorTexture",5),m.setUniform2fv("u_direction",s),c.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:r,painter:s}=e,{materialManager:i}=s,a=this._programDesc,n=this._quad,o=this._blurFBO;r.bindFramebuffer(o);const l=i.getProgram(e,a.radialBlur);r.useProgram(l),r.setBlendingEnabled(!1),r.bindTexture(t.colorTexture,4),l.setUniform1i("u_colorTexture",4),n.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const u=i.getProgram(e,a.blit);r.useProgram(u),r.bindTexture(o.colorTexture,5),u.setUniform1i("u_texture",5),r.setBlendFunction(1,771),n.draw()}_createOrResizeResources(t){const{context:r,state:s,pixelRatio:i}=t,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new e(r,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}))}}export{i as Blur};
