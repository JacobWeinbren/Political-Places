import{r as e,d as t}from"../main.js";const i=33984;var a;function r(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.Program=3]="Program",e[e.Framebuffer=4]="Framebuffer",e[e.Renderbuffer=5]="Renderbuffer",e[e.COUNT=6]="COUNT"}(a||(a={}));class s{constructor(e,t,i=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(a.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(a.Texture,this))}release(){this.dispose()}resize(e,t){const i=this._descriptor;i.width===e&&i.height===t||(i.width=e,i.height=t,this.setData(null))}setData(t){if(!this._context||!this._context.gl)return;const i=this._context.gl;this._glName||(this._glName=i.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const a=this._context.bindTexture(this,s.TEXTURE_UNIT_FOR_UPDATES),r=this._descriptor;s._validateTexture(this._context,r),i.pixelStorei(i.UNPACK_ALIGNMENT,r.unpackAlignment),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,r.flipped?1:0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.preMultiplyAlpha?1:0);const o=r.pixelFormat;let n=r.internalFormat?r.internalFormat:o;if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){let e=t.width,a=t.height;t instanceof HTMLVideoElement&&(e=t.videoWidth,a=t.videoHeight),r.width&&r.height,i.texImage2D(i.TEXTURE_2D,0,n,o,r.dataType,t),r.hasMipmap&&this.generateMipmap(),void 0===r.width&&(r.width=e),void 0===r.height&&(r.height=a)}else{null!=r.width&&null!=r.height||console.error("Width and height must be specified!"),i.DEPTH24_STENCIL8&&n===i.DEPTH_STENCIL&&(n=i.DEPTH24_STENCIL8);let a=r.width,s=r.height;if(function(t){return e(t)&&"type"in t&&"compressed"===t.type}(t)){const e=Math.round(Math.log(Math.max(a,s))/Math.LN2)+1;r.hasMipmap=r.hasMipmap&&e===t.levels.length;for(let e=0;;++e){const o=t.levels[Math.min(e,t.levels.length-1)];if(i.compressedTexImage2D(i.TEXTURE_2D,e,n,a,s,0,o),1===a&&1===s||!r.hasMipmap)break;a=Math.max(1,a>>1),s=Math.max(1,s>>1)}}else if(e(t))i.texImage2D(i.TEXTURE_2D,0,n,a,s,0,o,r.dataType,t),r.hasMipmap&&this.generateMipmap();else for(let e=0;i.texImage2D(i.TEXTURE_2D,e,n,a,s,0,o,r.dataType,null),(1!==a||1!==s)&&r.hasMipmap;++e)a=Math.max(1,a>>1),s=Math.max(1,s>>1)}s._applySamplingMode(i,this._descriptor),s._applyWrapMode(i,this._descriptor),s._applyAnisotropicFilteringParameters(this._context,this._descriptor),this._context.bindTexture(a,s.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,i,a,r,o){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const n=this._context.gl,p=this._descriptor,h=this._context.bindTexture(this,s.TEXTURE_UNIT_FOR_UPDATES);(t<0||i<0||a>p.width||r>p.height||t+a>p.width||i+r>p.height)&&console.error("An attempt to update out of bounds of the texture!"),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipped?1:0),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.preMultiplyAlpha?1:0),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?n.texSubImage2D(n.TEXTURE_2D,e,t,i,p.pixelFormat,p.dataType,o):n.texSubImage2D(n.TEXTURE_2D,e,t,i,a,r,p.pixelFormat,p.dataType,o),this._context.bindTexture(h,s.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,s._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,s.TEXTURE_UNIT_FOR_UPDATES),i=this._context.gl;i.generateMipmap(i.TEXTURE_2D),this._context.bindTexture(t,s.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,s._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(s._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(s._applyWrapMode(e,t),this._wrapModeDirty=!1)}static _validateTexture(e,i){(i.width<0||i.height<0)&&console.error("Negative dimension parameters are not allowed!");const a=t(i.width)&&t(i.height);r(e.gl)||a||("number"==typeof i.wrapMode?33071!==i.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===i.wrapMode.s&&33071===i.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let i=t.samplingMode,a=t.samplingMode;9985===i||9987===i?(i=9729,t.hasMipmap||(a=9729)):9984!==i&&9986!==i||(i=9728,t.hasMipmap||(a=9728)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,a)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var i;const a=e.capabilities.textureFilterAnisotropic;if(!a)return;const r=e.gl;r.texParameterf(r.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY,null!=(i=t.maxAnisotropy)?i:1)}}s.TEXTURE_UNIT_FOR_UPDATES=0;var o=s;export{i as a,a as e,r as n,o as r};
