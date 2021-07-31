import{t}from"./VertexArrayObject-40244969.js";import"../main.js";import"./Texture-192a103c.js";import{r as e}from"./WGLContainer-66f5575f.js";import"./definitions-bd7968b3.js";import"./Utils-ef13a049.js";import"./ShaderCompiler-ee9f064d.js";import"./config-8597b78f.js";import"./GeometryUtils-30b98fd3.js";import"./MaterialKey-1ba13c24.js";import"./Container-b6c614cc.js";import"./mat4f32-2521725d.js";import"./earcut-26dd4f9f.js";const r=[1,0],s=[0,1];class i{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(t,r,s){const{context:i}=t,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(t),this._quad||(this._quad=new e(i,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(t,r,n):this._radialBlur(t,r),o.unbind()}_gaussianBlur(t,e,i){const{context:a,state:n,painter:o,pixelRatio:l}=t,{size:u}=n,{materialManager:d}=o,p=this._programDesc,c=this._quad,b=[Math.round(l*u[0]),Math.round(l*u[1])],h=this._blurFBO,m=d.getProgram(t,p.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);a.useProgram(m),a.setBlendingEnabled(!1),a.bindFramebuffer(h),a.bindTexture(e.colorTexture,4),m.setUniform1i("u_colorTexture",4),m.setUniform2fv("u_texSize",b),m.setUniform2fv("u_direction",r),m.setUniform1f("u_sigma",i),c.draw(),a.bindFramebuffer(e),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.bindTexture(h.colorTexture,5),m.setUniform1i("u_colorTexture",5),m.setUniform2fv("u_direction",s),c.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0)}_radialBlur(t,e){const{context:r,painter:s}=t,{materialManager:i}=s,a=this._programDesc,n=this._quad,o=this._blurFBO;r.bindFramebuffer(o);const l=i.getProgram(t,a.radialBlur);r.useProgram(l),r.setBlendingEnabled(!1),r.bindTexture(e.colorTexture,4),l.setUniform1i("u_colorTexture",4),n.draw(),r.bindFramebuffer(e),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const u=i.getProgram(t,a.blit);r.useProgram(u),r.bindTexture(o.colorTexture,5),u.setUniform1i("u_texture",5),r.setBlendFunction(1,771),n.draw()}_createOrResizeResources(e){const{context:r,state:s,pixelRatio:i}=e,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new t(r,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}))}}export{i as Blur};
