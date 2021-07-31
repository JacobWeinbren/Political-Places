import{t as e,o as t,a as n,n as r}from"./VertexArrayObject-00fccdc0.js";import{r as i}from"./Texture-d641c4da.js";import{L as a}from"../main.js";async function o(a){const o=new Image;if(o.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",o.width=5,o.height=5,await o.decode(),!a.gl)return!0;const s=new e(a,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),p=t.createVertex(a,35044,new Uint16Array([0,0,1,0,0,1,1,1])),d=new n(a,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:p}),c=new r(a,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",new Map([["a_pos",0]]));a.useProgram(c);const g=new i(a,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},o);a.bindTexture(g,0),c.setUniform1i("u_texture",0);const m=a.getBoundFramebufferObject(),{x:u,y:w,width:l,height:v}=a.getViewport();a.bindFramebuffer(s),a.setViewport(0,0,1,1),a.bindVAO(d),a.drawArrays(5,0,4);const f=new Uint8Array(4);return s.readPixels(0,0,1,1,6408,5121,f),c.dispose(),d.dispose(!1),p.dispose(),s.dispose(),g.dispose(),a.setViewport(u,w,l,v),a.bindFramebuffer(m),o.src="",255===f[0]}async function s(e,t){const{data:n}=await a(e,{responseType:"image",...t});return n}export{o as n,s as t};
