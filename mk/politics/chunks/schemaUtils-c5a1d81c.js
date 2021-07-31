import{bl as e,p as t,bj as i,bq as s,bk as n,br as r,o as a,J as o,H as l,I as u,G as c,bs as h,aN as f,aj as d,bh as p,bt as m,bu as y,bv as g,u as b,bw as x,am as v,ar as w,aG as S,ak as M,n as z,bi as T,V as _,W as E,bx as F,X as V,by as C,bz as I,b3 as L,s as R,t as P,bA as B,a as N,bB as O,r as k,bC as A,y as W,bD as D}from"../main.js";import{m as H,A as $,E as G,X as j}from"./Utils-100690b3.js";import{f as J,A as q}from"./MaterialKey-8e40704a.js";import{o as K}from"./visualVariablesUtils-46614436.js";import{h as U,t as X}from"./CIMSymbolHelper-f1fc9067.js";import{k as Y}from"./definitions-8d307e62.js";import{t as Z}from"./Rect-531bace0.js";import{C as Q}from"./BidiEngine-b7dfb718.js";import{x as ee}from"./MD5-c8535b52.js";const te=new Q;function ie(e){if(!te.hasBidiChar(e))return[e,!1];let t;return t="rtl"===te.checkContextual(e)?"IDNNN":"ICNNN",[te.bidiTransform(e,t,"VLYSN"),!0]}var se,ne;function re(e){switch(e){case"left":return se.Left;case"right":return se.Right;case"center":case"justify":return se.Center}}function ae(e){switch(e){case"top":return ne.Top;case"middle":return ne.Center;case"baseline":return ne.Baseline;case"bottom":return ne.Bottom}}function oe(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[se.Right,ne.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[se.Center,ne.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[se.Left,ne.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[se.Right,ne.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":return[se.Center,ne.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[se.Left,ne.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[se.Right,ne.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[se.Center,ne.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[se.Left,ne.Top];case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[se.Center,ne.Baseline];default:return console.debug(`Found invalid placement type ${e}`),[se.Center,ne.Center]}}function le(e){switch(e){case se.Right:return-1;case se.Center:return 0;case se.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function ue(e){switch(e){case ne.Top:return 1;case ne.Center:return 0;case ne.Bottom:case ne.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function ce(e){switch(e){case"left":return se.Left;case"right":return se.Right;case"center":case"justify":return se.Center}}!function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(se||(se={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(ne||(ne={}));class he{constructor(i,s,n,r){this.center=e(i,s),this.centerT=t(),this.halfWidth=n/2,this.halfHeight=r/2,this.width=n,this.height=r}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(e){this.center[0]=e}set y(e){this.center[1]=e}clone(){return new he(this.x,this.y,this.width,this.height)}serialize(e){return e.writeF32(this.center[0]),e.writeF32(this.center[1]),e.push(this.width),e.push(this.height),e}findCollisionDelta(e,t=4){const s=Math.abs(e.centerT[0]-this.centerT[0]),n=Math.abs(e.centerT[1]-this.centerT[1]),r=(e.halfWidth+this.halfWidth+t)/s,a=(e.halfHeight+this.halfHeight+t)/n,o=Math.min(r,a);return i(o)}extend(e){const t=Math.min(this.xmin,e.xmin),i=Math.min(this.ymin,e.ymin),s=Math.max(this.xmax,e.xmax)-t,n=Math.max(this.ymax,e.ymax)-i,r=t+s/2,a=i+n/2;this.width=s,this.height=n,this.halfWidth=s/2,this.halfHeight=n/2,this.x=r,this.y=a}static deserialize(e){const t=e.readF32(),i=e.readF32(),s=e.readInt32(),n=e.readInt32();return new he(t,i,s,n)}}const fe=Math.PI/180;class de{constructor(e,t,i,s){this._rotationT=n(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255,this._bounds=null;const r=i.rect,a=new Float32Array(8);e*=s,t*=s;const o=i.code?r.width*s:i.metrics.width,l=i.code?r.height*s:i.metrics.height;a[0]=e,a[1]=t,a[2]=e+o,a[3]=t,a[4]=e,a[5]=t+l,a[6]=e+o,a[7]=t+l,this._data=a,this._setTextureCoords(r),this._scale=s,this._mosaic=i,this.x=e,this.y=t,this.maxOffset=Math.max(e+o,t+l)}get width(){return this._mosaic.metrics.width*this._scale}get mosaic(){return this._mosaic}set angle(e){this._angle=e,c(this._rotationT),u(this._rotationT,this._rotationT,-e),this._setOffsets(this._data)}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){if(!this._bounds){const{height:e,width:t}=this._mosaic.metrics,i=t*this._scale,s=Math.abs(e)*this._scale,a=new Float32Array(8);a[0]=this.x,a[1]=this.y,a[2]=this.x+i,a[3]=this.y,a[4]=this.x,a[5]=this.y+s,a[6]=this.x+i,a[7]=this.y+s;const o=r(n(),this._rotationT,this._T);h(a,a,o);let l=1/0,u=1/0,c=0,f=0;for(let e=0;e<4;e++){const t=a[2*e],i=a[2*e+1];l=Math.min(l,t),u=Math.min(u,i),c=Math.max(c,t),f=Math.max(f,i)}const d=c-l,p=f-u,m=l+d/2,y=u+p/2;this._bounds=new he(m,y,d,p)}return this._bounds}setTransform(e){this._T=e,this._offsets=null}_setOffsets(e){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});const t=this._offsets,i=new Float32Array(8),s=r(n(),this._rotationT,this._T);h(i,e,s),t.upperLeft=H(8*i[0],8*i[1]),t.upperRight=H(8*i[2],8*i[3]),t.lowerLeft=H(8*i[4],8*i[5]),t.lowerRight=H(8*i[6],8*i[7])}_setTextureCoords({x:e,y:t,width:i,height:s}){this._texcoords={upperLeft:H(e,t),upperRight:H(e+i,t),lowerLeft:H(e,t+s),lowerRight:H(e+i,t+s)}}}const pe=(e,t)=>({code:0,page:0,sdf:!0,rect:new Z(0,0,11,8),textureBinding:t,metrics:{advance:0,height:4,width:e,left:0,top:0}});class me{constructor(e,t,i){this._rotation=0,this._decorate(e,t,i),this.glyphs=e,this.bounds=this._createBounds(e),this.isMultiline=t.length>1,this._hasRotation=0!==i.angle,this._T=this._createGlyphTransform(this.bounds,i);for(const t of e)t.setTransform(this._T)}setRotation(e){if(0===e&&0===this._rotation)return;this._rotation=e;const t=this._T,i=s(n(),e);r(t,i,t);for(const e of this.glyphs)e.setTransform(this._T)}_decorate(e,t,i){if(!i.decoration||"none"===i.decoration||!e.length)return;const s=i.scale,n="underline"===i.decoration?30:20,r=e[0].textureBinding;for(const i of t){const t=i.startX*s,a=i.startY*s,o=(i.width+i.glyphWidthEnd)*s;e.push(new de(t,a+n*s,pe(o,r),1))}}get boundsT(){const e=this.bounds,i=a(t(),e.x,e.y);if(o(i,i,this._T),this._hasRotation){const t=Math.max(e.width,e.height);return new he(i[0],i[1],t,t)}return new he(i[0],i[1],e.width,e.height)}_createBounds(e){let t=1/0,i=1/0,s=0,n=0;for(const r of e)t=Math.min(t,r.xTopLeft),i=Math.min(i,r.yTopLeft),s=Math.max(s,r.xTopLeft+r.width),n=Math.max(n,r.yBottomRight);const r=s-t,a=n-i;return new he(t+r/2,i+a/2,r,a)}_createGlyphTransform(e,i){const s=fe*i.angle,r=n(),o=t();return l(r,r,a(o,i.xOffset,-i.yOffset)),i.isCIM?u(r,r,s):(l(r,r,a(o,e.x,e.y)),u(r,r,s),l(r,r,a(o,-e.x,-e.y))),r}}class ye{constructor(e,t,i,s,n,r){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(t,i)),this.end=Math.max(0,Math.max(t,i)),this.end<e.length&&(this.glyphWidthEnd=e[this.end].metrics.width),this.width=s,this.yMin=n,this.yMax=r}}const ge=e=>10===e,be=e=>32===e;function xe(e,t,i){const s=i.scale,n=new Array,r=function(e,t,i){const s=new Array,n=1/i.scale,r=i.maxLineWidth*n,a=t?e.length-1:0,o=t?-1:e.length,l=t?-1:1;let u=a,c=0,h=0,f=u,d=f,p=0,m=1/0,y=0;for(;u!==o;){const{code:t,metrics:i}=e[u],n=Math.abs(i.top);if(ge(t)||be(t)||(m=Math.min(m,n),y=Math.max(y,n+i.height)),ge(t))u!==a&&(s.push(new ye(e,f,u-l,c,m,y)),m=1/0,y=0),c=0,f=u+l,d=u+l,h=0;else if(be(t))d=u+l,h=0,p=i.advance,c+=i.advance;else if(c>r){if(d!==f){const t=d-2*l;c-=p,s.push(new ye(e,f,t,c-h,m,y)),m=1/0,y=0,f=d,c=h}else s.push(new ye(e,f,u-l,c,m,y)),m=1/0,y=0,f=u,d=u,c=0;c+=i.advance,h+=i.advance}else c+=i.advance,h+=i.advance;u+=l}const g=new ye(e,f,u-l,c,m,y);return g.start>=0&&g.end<e.length&&s.push(g),s}(e,t,i),a=function(e,t){let i=0;for(let t=0;t<e.length;t++){const{width:s}=e[t];i=Math.max(s,i)}const s="underline"===t.decoration?4:0,n=e[0].yMin;return{x:0,y:n,height:e[e.length-1].yMax+t.lineHeight*(e.length-1)+s-n,width:i}}(r,i),{vAlign:o,hAlign:l}=i,u=o===ne.Baseline?1:0,c=u?0:o-1,h=(1-u)*-a.y+c*(a.height/2)+-26*(u?1:0);for(let t=0;t<r.length;t++){const{start:a,end:o,width:u}=r[t];let c=-1*(l+1)*(u/2)-3;const f=t*i.lineHeight+h-3;r[t].startX=c,r[t].startY=f;for(let t=a;t<=o;t++){const i=e[t];if(ge(i.code))continue;const r=new de(c+i.metrics.left,f-i.metrics.top,i,s);c+=i.metrics.advance,n.push(r)}}return new me(n,r,i)}const ve=Math.PI/180,we=n(),Se=t(),Me=512,ze=50;function Te(e,t){if(!t.isWrappable)return null;const[i,s]=f(t);return e[2]>s?[d([e[0],e[1],s,e[3]]),d([i,e[1],i+e[2]-s,e[3]])]:e[0]<i?[d([i,e[1],e[2],e[3]]),d([s-(i-e[0]),e[1],s,e[3]])]:null}function _e(e,t,i,s,n,r,a){if(!s||!i.symbol)return e[0]=e[1]=e[2]=e[3]=0,t[0]=t[1]=t[2]=t[3]=0,e;const o=s;if(!v(o)){w(e,o);let s=t[0];0===s&&(s=De(i),t[0]=s);const r=n*s/2;return e[0]-=r,e[1]-=r,e[2]+=r,e[3]+=r,e}{const s=o.x,l=o.y;"esriTS"===i.symbol.type&&0===t[2]&&0===t[3]&&He(t,i.symbol,i.mosaicItem),function(e,t,i,s,n,r,a,o){let l;switch(s.type){case"esriSMS":case"esriPMS":l=ke(t,i,s,r,a,0);break;case"esriTS":l=We(t,i,s,n,r,0);break;case"cim":case"CIMSymbolReference":case"expanded-cim":l=Ae(t,i,s,r,a,0)}let u,c,h=0;for(let e=0;e<l.rings[0].length-1;e++)c=l.rings[0][e],u=(t-c[0])*(t-c[0])+(i-c[1])*(i-c[1]),h=Math.max(h,u);h=Math.sqrt(h);let f=S(t-h,o),d=S(t+h,o);if(f>d){const e=M(o);if(e){const[t,i]=e.valid;f=t,d=i}}e[0]=f,e[1]=i-h,e[2]=d,e[3]=i+h}(e,s,l,i.symbol,t,n,r,a)}return e}function Ee(e){return"text"===e||"esriTS"===e}function Fe(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function Ve(e){switch(p(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}const Ce=t(),Ie=t(),Le=t(),Re=t(),Pe=t(),Be=t(),Ne=t();function Oe(e,t,i,s){a(Le,t,i);const n=e.paths;let r,o,l,u,c,h,f,d,p,b=1/0;for(let e=0;e<n.length;e++){const x=n[e];if(!(x.length<2))for(let e=1;e<x.length;e++)r=x[e-1][0],l=x[e-1][1],o=x[e][0],u=x[e][1],c=Math.min(r,o)-s,h=Math.min(l,u)-s,f=Math.max(r,o)+s,d=Math.max(l,u)+s,t<c||t>f||i<h||i>d||(a(Ce,r,l),a(Ie,o,u),m(Re,Ie,Ce),m(Pe,Ce,Le),y(Be,Re,g(Re,Pe)/g(Re,Re)),m(Ne,Pe,Be),p=g(Ne,Ne),b>p&&(b=p))}return Math.sqrt(b)<=s}function ke(e,t,i,s,n,r){let h,f;const d=b(i.xoffset),p=b(i.yoffset),m=ve*i.angle,y=ve*r;switch(i.type){case"esriSMS":h=f=b(i.size);break;case"esriPMS":h=b(i.width),f=b(i.height)}n<.04&&(s=.04*s/n);const g=c(we);l(g,g,a(Se,e,t)),u(g,g,y-m),x(g,g,a(Se,s,-s)),l(g,g,a(Se,d,-p));const v=[0,0];o(v,a(Se,-.5*h,-.5*f),g);const w=[0,0];o(w,a(Se,-.5*h,.5*f),g);const S=[0,0];o(S,a(Se,.5*h,-.5*f),g);const M=[0,0];return o(M,a(Se,.5*h,.5*f),g),{rings:[[v,S,M,w,v]]}}function Ae(e,t,i,s,n,r){const h=U.getEnvelope(i.data);if(!h)return null;n<.04&&(s=.04*s/n);const f=b(h.width),d=b(h.height),p=b(h.x),m=b(h.y),y=0*ve,g=ve*r,v=c(we);l(v,v,a(Se,e,t)),u(v,v,g-y),x(v,v,a(Se,s,s));const w=[0,0];o(w,a(Se,p,m+d),v);const S=[0,0];o(S,a(Se,p,m),v);const M=[0,0];o(M,a(Se,p+f,m+d),v);const z=[0,0];return o(z,a(Se,p+f,m),v),{rings:[[w,M,z,S,w]]}}function We(e,t,i,s,n,r){const h=b(i.xoffset),f=b(i.yoffset),d=ve*i.angle,p=ve*r,m=c(we);l(m,m,a(Se,e,t)),u(m,m,p),x(m,m,a(Se,n,-n));const y=s[0]+s[2]/2,g=s[1]+s[3]/2;l(m,m,a(Se,h,-f)),l(m,m,a(Se,y,g)),u(m,m,d),l(m,m,a(Se,-y,-g));const v=[0,0];o(v,a(Se,s[0],s[1]),m);const w=[0,0];o(w,a(Se,s[0],s[1]+s[3]),m);const S=[0,0];o(S,a(Se,s[0]+s[2],s[1]),m);const M=[0,0];return o(M,a(Se,s[0]+s[2],s[1]+s[3]),m),{rings:[[v,S,M,w,v]]}}function De(e){switch(e.symbol.type){case"esriSFS":case"esriPFS":{const t=e.symbol.outline;return t?t.width:0}case"esriSLS":return b(e.symbol.width);case"esriSMS":return b(e.symbol.size);case"esriPMS":return b(Math.max(e.symbol.width,e.symbol.height));case"esriTS":{const t=[0,0,0,0];He(t,e.symbol,e.mosaicItem);const i=Math.max(Math.abs(t[0]),Math.abs(t[1]));return Math.max(t[2],t[3])+i}case"expanded-cim":{const t=U.getEnvelope(e.symbol.data);return t.width!==-1/0&&t.height!==-1/0||(t.width=10,t.height=10,t.x=0,t.y=0),b(Math.sqrt(t.width*t.width+t.height*t.height))}case"composite-symbol":{if(!e.symbol.layers.length)return 0;const t=e.symbol.layers.length-1;return De({symbol:e.symbol.layers[t],mosaicItem:null})}case"label":default:return 0}}function He(e,t,i){if(!i||0===i.glyphMosaicItems.length)return e;const s=ie(t.text)[1],n=xe(i.glyphMosaicItems,s,{scale:b(t.font.size)/24,angle:t.angle,xOffset:t.xoffset,yOffset:t.yoffset,hAlign:re(t.horizontalAlignment||"center"),vAlign:ae(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:30*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds;return e[0]=b(n.x-n.halfWidth),e[1]=b(n.y-n.halfHeight),e[2]=b(n.width),e[3]=b(n.height),e}const $e={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1};function Ge(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;const t=e.getVisualVariablesForType("size");if(!t[0])return 0;const i=t[0];if("stops"===i.transformationType)return i.stops.map((e=>e.size)).reduce(Ze,0);if("clamped-linear"===i.transformationType){let e=-1/0,t=-1/0;return e="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map((e=>e.size)).reduce(Ze,0),t="number"==typeof i.minSize?i.minSize:i.minSize.stops.map((e=>e.size)).reduce(Ze,0),Math.max(e,t)}return"real-world-size"===i.transformationType?30:void 0}async function je(e,t,i){if(!e||i&&"cluster"===i.type)return 0;if("heatmap"===e.type)return Math.round(3*e.blurRadius);if("dot-density"===e.type)return 0;if("dictionary"===e.type)return"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?100:200;const s=e.getSymbols(),n=Ge(e),r=[];for(const e of s)r.push(Xe(e,n));const a=await Promise.all(r);return b(a.reduce(Ze,0))}const Je=[0,0,0,0];function qe(e,t){return null==e?t:e}const Ke={sdf:!0,code:99,metrics:Y.metrics,rect:new X(0,0,24,24),page:0,textureBinding:2};async function Ue(e,t){if("simple-marker"===e.type){const i=Math.max(qe(e.size,12),t);return Ye(e)+.707*i}if("picture-marker"===e.type){const i=Math.max(qe(e.height,12),t),s=qe(e.width,12)*(i/qe(e.height,12))/2,n=i/2;return Ye(e)+Math.sqrt(s*s+n*n)}if("text"===e.type){const t=function(e){const t=e.text&&e.text.length;if(!t)return{glyphMosaicItems:[Ke]};const i=[];for(let s=0;s<t;s++)i.push({...Ke,code:e.text.charCodeAt(s)});return{glyphMosaicItems:i}}(e);He(Je,e.toJSON(),t);const i=Math.abs(Je[0]),s=Math.abs(Je[1]),n=Je[2],r=Je[3];return Math.max(i,s)+Math.max(n,r)}if("simple-line"===e.type){const i=e,s=Math.max(qe(i.width,.75),t)/2;return i.marker?Math.max(6*i.width,2*t):s}if("simple-fill"===e.type||"picture-fill"===e.type)return Math.max(function(e,t){return null==e.outline?t:qe(e.outline.width,t)}(e,0),t)/2;if("cim"===e.type){const t=U.getEnvelope(e.data);return t?Math.sqrt(t.width*t.width+t.height*t.height):0}return"web-style"===e.type?Ue(await e.fetchCIMSymbol(),t):0}async function Xe(e,t){return function(e){return e.type in $e}(e)?Math.min(await Ue(e,t),75):0}function Ye(e){const t=qe(e.xoffset,0),i=qe(e.yoffset,0);return Math.sqrt(t*t+i*i)}function Ze(e,t){return Math.max(e,t)}const Qe=z.getLogger("esri.renderers.visualVariables.support.utils"),et=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),i=t.visualVariables.map((e=>it(e)?st(e):e));return t.visualVariables=i,t};function tt(e){return e.map((e=>it(e)?st(e.clone()):e))}function it(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function st(e){return e.stops=function(e,t){return t.length<=8?t:(Qe.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[i,...s]=t,n=s.pop(),r=s[0].value,a=s[s.length-1].value,o=(a-r)/6,l=[];for(let i=r;i<a;i+=o){let n=0;for(;i>=s[n].value;)n++;const r=s[n],a=t[n-1],o=i-a.value,u=r.value===a.value?1:o/(r.value-a.value);if("color"===e){const e=s[n],r=t[n-1],a=e.color.clone();a.r=nt(r.color.r,a.r,u),a.g=nt(r.color.g,a.g,u),a.b=nt(r.color.b,a.b,u),a.a=nt(r.color.a,a.a,u),l.push({value:i,color:a,label:e.label})}else if("size"===e){const e=s[n],r=t[n-1],a=T(e.size),o=nt(T(r.size),a,u);l.push({value:i,size:o,label:e.label})}else{const e=s[n],r=nt(t[n-1].opacity,e.opacity,u);l.push({value:i,opacity:r,label:e.label})}}return[i,...l,n]}(e,t):function(e){const[t,...i]=e,s=i.pop();for(;i.length>6;){let e=0,t=0;for(let s=1;s<i.length;s++){const n=i[s-1],r=i[s],a=Math.abs(r.value-n.value);a>t&&(t=a,e=s)}i.splice(e,1)}return[t,...i,s]}(t))}(e.type,e.stops),e}function nt(e,t,i){return(1-i)*e+i*t}var rt;let at=rt=class extends C{writeLevels(e,t,i){for(const i in e){const e=this.levels[i];return void(t.stops=e)}}clone(){return new rt({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:I(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:I(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:L(this.levels)})}};_([E()],at.prototype,"levels",void 0),_([F("levels")],at.prototype,"writeLevels",null),at=rt=_([V("esri.views.2d.engine.LevelDependentSizeVariable")],at);const ot=z.getLogger("esri.views.2d.layers.support.clusterUtils");R.add("esri-cluster-arcade-enabled",!0);const lt=R("esri-cluster-arcade-enabled"),ut=(e,t,i,s)=>{const n=t.clone();if(!dt(n))return n;if(i.fields)for(const t of i.fields)pt(e,t);if("visualVariables"in n){const t=(n.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),r=ct(t);t.forEach((t=>{"rotation"===t.type?t.field?t.field=yt(e,t.field,"avg_angle"):t.valueExpression&&(t.field=mt(e,t.valueExpression,"avg_angle"),t.valueExpression=null):t.normalizationField?(t.field=yt(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field?t.field=yt(e,t.field,"avg"):(t.field=mt(e,t.valueExpression,"avg"),t.valueExpression=null)})),P(r)&&!ht(t)&&(t.push(ft(i,s)),n.dynamicClusterSize=!0),n.visualVariables=t}switch(n.type){case"simple":break;case"unique-value":n.field?n.field=yt(e,n.field,"mode"):n.valueExpression&&(n.field=mt(e,n.valueExpression,"mode"),n.valueExpression=null);break;case"class-breaks":n.normalizationField?(n.field=yt(e,n.field,"norm",n.normalizationField),n.normalizationField=null):n.field?n.field=yt(e,n.field,"avg"):(n.field=mt(e,n.valueExpression,"avg"),n.valueExpression=null)}return n},ct=e=>{for(const t of e)if("size"===t.type)return t;return null},ht=e=>{for(const t of e)if("cluster_count"===t.field)return!0;return!1},ft=(e,t)=>{const i=[new B({value:0,size:0}),new B({value:1})];if(P(t))return new C({field:"cluster_count",stops:[...i,new B({value:2,size:0})]});const s=Object.keys(t).reduce(((s,n)=>({...s,[n]:[...i,new B({value:Math.max(2,t[n].minValue),size:e.clusterMinSize}),new B({value:Math.max(3,t[n].maxValue),size:e.clusterMaxSize})]})),{});return new at({field:"cluster_count",levels:s})},dt=e=>{const t=t=>ot.error(new N("Unsupported-renderer",t,{renderer:e}));if("unique-value"===e.type){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const i=e.normalizationType;if("field"!==i)return t(`FeatureReductionCluster does not support a normalizationType of ${i}`),!1}}else if("simple"!==e.type)return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1;if(!lt){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function pt(e,t){const{name:i,outStatistic:s}=t,{onStatisticField:n,onStatisticValueExpression:r,statisticType:a}=s;if(r){const t=ee(r.toLowerCase());e.push({name:i,outStatistic:{onStatisticField:t,onStatisticValueExpression:r,statisticType:a}})}else n?e.push({name:i,outStatistic:{onStatisticField:n,statisticType:a}}):ot.error(new N("mapview-unsupported-field","Unable to handle field",{field:t}))}function mt(e,t,i){const s=ee(t),n="mode"===i?`cluster_type_${s}`:`cluster_avg_${s}`;return e.some((e=>e.name===n))||e.push({name:n,outStatistic:{onStatisticField:s,onStatisticValueExpression:t,statisticType:i}}),n}function yt(e,t,i,s){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const n=function(e,t,i){switch(e){case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"norm":{const e=i,s="field",n=t.toLowerCase()+",norm:"+s+","+e.toLowerCase();return"cluster_avg_"+ee(n)}}}(i,t,s);return e.some((e=>e.name===n))||("norm"===i?e.push({name:n,outStatistic:{onStatisticField:t,onStatisticNormalizationField:s,statisticType:i}}):e.push({name:n,outStatistic:{onStatisticField:t,statisticType:i}})),n}const gt=new O({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function bt(e){return gt.toJSON(e)}const xt=z.getLogger("esri.views.2d.layers.features.schemaUtils"),vt="ValidationError",wt={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function St(e){return J(e)}function Mt(e){switch(e.type){case"line-marker":var t;return{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style};default:return D(e.toJSON()).toJSON()}}function zt(e,t,i){if(!e)return null;let s=0,n=!1,r=0;switch(k(t)&&(r=Ge(t),"visualVariables"in t&&(s=function(e){if(!e)return $.NONE;let t=0;for(const i of e)if("size"===i.type){const e=K(i);t|=e,"outline"===i.target&&(t|=e<<4)}else"color"===i.type?t|=$.COLOR:"opacity"===i.type?t|=$.OPACITY:"rotation"===i.type&&(t|=$.ROTATION);return t}(t.visualVariables||[]),n="dot-density"===t.type)),e.type){case"simple-fill":case"picture-fill":return function(e,t,i,s){const n=q(G.FILL,t,!1,i),r=s?St(n):n,a=e.clone(),o=a.outline;a.outline=null;const l=[],u={materialKey:r,hash:a.hash(),...Mt(a)};if(l.push(u),o){const e=q(G.LINE,t,!0,!1),i={materialKey:s?St(e):e,hash:o.hash(),...Mt(o)};l.push(i)}return{type:"composite-symbol",layers:l,hash:l.reduce(((e,t)=>t.hash+e),"")}}(e,s,n,i);case"simple-marker":case"picture-marker":return function(e,t,i,s){const n=q(G.MARKER,t,!1,!1),r=s?St(n):n,a=Mt(e);return{materialKey:r,hash:e.hash(),...a,angle:e.angle,maxVVSize:i}}(e,s,r,i);case"simple-line":return function(e,t,i){const s=q(G.LINE,t,!1,!1),n=i?St(s):s,r=e.clone(),a=r.marker;r.marker=null;const o=[];if(o.push({materialKey:n,hash:r.hash(),...Mt(r)}),a){var l;const e=q(G.MARKER,t,!1,!1),s=i?St(e):e;a.color=null!=(l=a.color)?l:r.color,o.push({materialKey:s,hash:a.hash(),lineWidth:r.width,...Mt(a)})}return{type:"composite-symbol",layers:o,hash:o.reduce(((e,t)=>t.hash+e),"")}}(e,s,i);case"text":return function(e,t,i,s){const n=q(G.TEXT,t,!1,!1),r=s?St(n):n,a=Mt(e);return{materialKey:r,hash:e.hash(),...a,angle:e.angle,maxVVSize:i}}(e,s,r,i);case"label":return function(e,t,i){const s=e.toJSON(),n=q(G.LABEL,t,!1,!1,s.labelPlacement);return{materialKey:i?St(n):n,hash:e.hash(),...s,labelPlacement:s.labelPlacement}}(e,s,i);case"cim":return{type:"cim",rendererKey:s,data:e.data,maxVVSize:r};case"web-style":return{...Mt(e),type:"web-style",hash:e.hash(),rendererKey:s,maxVVSize:r};default:throw new Error(`symbol not supported ${e.type}`)}}function Tt(e,t){const i=L(e);return i.some((e=>function(e,t){const i=e.labelPlacement,s=wt[t];if(!e.symbol)return xt.warn("No ILabelClass symbol specified."),!0;if(!s)return xt.error(new N("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0;if(!s.some((e=>e===i))){const n=s[0];i&&xt.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${n}`),e.labelPlacement=n}return!1}(e,t)))?[]:i}function _t(e){return R("esri-2d-update-debug")&&console.debug("Created new schema",Et(e,!0)),Et(e)}function Et(e,t=!1){try{var i,s;const n=function(e,t=!1){const i=new Array;let s=0;return i.push(Pt(e,s++,t)),i}(e,t),r={};return n.map((t=>function(e,t,i){switch(i.target){case"feature":return void Ct(e,Vt(t),i);case"aggregate":{if(!("featureReduction"in t))return;const s=t.featureReduction;if("selection"===s.type)throw new N(vt,"Mapview does not support `selection` reduction type",s);return Ct(e,Vt(t),i),void function(e,t,i){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:b(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(b(t.clusterMaxSize)/64),fields:i.aggregateFields}}),Ft(e.aggregate,i.attributes.fields)}(e,s,i)}}}(r,e,t))),{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(s=e.timeExtent)?void 0:s.toJSON()},attributes:{fields:{},indexCount:0},processors:n,targets:r}}catch(e){if(e.fieldName===vt)return xt.error(e),null;throw e}}function Ft(e,t){for(const i in t){const s=t[i];if(s.target!==e.name)continue;const n=e.attributes[i];n?(n.context.mesh=n.context.mesh||s.context.mesh,n.context.storage=n.context.storage||s.context.storage):e.attributes[i]=s}return e}function Vt(e){var t,i,s,n,r;return[null!=(t=null==(i=e.filter)?void 0:i.toJSON())?t:null,null!=(s=null==(n=e.effect)||null==(r=n.filter)?void 0:r.toJSON())?s:null]}function Ct(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),Ft(e.feature,i.attributes.fields),e}function It(e,t){return t.field?Lt(e,{...t,type:"field",field:t.field}):t.valueExpression?Lt(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function Lt(e,t){switch(t.type){case"expression":{const i=t.valueExpression;if(!e.fields[i]){const s=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:s}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label);if(!e.fields[i]){const s=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:s}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field;return"aggregate"===t.target&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function Rt(e,t,i,s,n,r=!1){const a=Lt(t,{type:"label-expression",target:s,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:o}=a;return{...zt(i,e,r),fieldIndex:o,target:s,index:n}}function Pt(e,t,i=!1){const s={indexCount:0,fields:{}},n="featureReduction"in e&&e.featureReduction,r=n?"aggregate":"feature";if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{}},n={type:"subtype",mapping:{},target:"feature"},a={type:"subtype",classes:{}},o={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:n,mesh:{matcher:t,aggregateMatcher:null,labels:a}},l=new Set;let u=0;for(const{renderer:o,subtypeCode:c,labelingInfo:h,labelsVisible:f}of e.sublayers){const e=Nt(s,r,o,i),d=Bt(s,r,o),p=f&&h;if("visualVariables"in o&&o.visualVariables&&o.visualVariables.length)throw new N(vt,"Visual variables are currently not supported for subtype layers");if("dictionary"===e.type)throw new N(vt,"Dictionary renderer is not supported in subtype layers");if("subtype"===e.type)throw new N(vt,"Nested subtype renderers is not supported");if(k(d)&&"subtype"===d.type)throw new N(vt,"Nested subtype storage is not supported");if(k(d)&&"dot-density"===d.type)throw new N(vt,"Dot density attributes are not supported in subtype layers");if(l.has(c))throw new N(vt,"Subtype codes for sublayers must be unique");l.add(c),t.renderers[c]=e,n.mapping[c]=d,p&&(a.classes[c]=p.map((e=>Rt(o,s,e,"feature",u++,i))))}return o}switch(e.renderer.type){case"heatmap":{const{blurRadius:t,fieldOffset:i,field:n}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:r,storage:null,mesh:{blurRadius:t,fieldOffset:i,field:It(s,{target:r,field:n,resultType:"numeric"}).field}}}default:{const t=[],a="aggregate"===r?ut(t,e.renderer,n,null):e.renderer;!function(e,t){const i={mesh:!0,storage:!0};for(const s of t){const{name:t,outStatistic:n}=s,{statisticType:r,onStatisticField:a}=n;let o=null,l=null,u=null;const c="numeric",h="feature";"onStatisticValueExpression"in n?l=Lt(e,{type:"expression",target:h,valueExpression:n.onStatisticValueExpression,resultType:c}).fieldIndex:"onStatisticNormalizationField"in n?(o=Lt(e,{type:"field",target:h,field:a,resultType:c}).field,u=n.onStatisticNormalizationField):o=Lt(e,{type:"field",target:h,field:a,resultType:c}).field,Lt(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:o,inNormalizationField:u,inFieldIndex:l,statisticType:r})}}(s,t);const o=Nt(s,r,a,i);let l=null;const u=Bt(s,r,a),c=bt(e.geometryType);let h=e.labelsVisible&&e.labelingInfo||[],f=[];if(n){if("selection"===n.type)throw new N(vt,"Mapview does not support `selection` reduction type",n);if(n.symbol){const e=new A({symbol:n.symbol,visualVariables:"visualVariables"in a?a.visualVariables:null});l=Nt(s,r,e,i)}f=n&&n.labelsVisible&&n.labelingInfo||[]}h=Tt(h,c),f=Tt(f,c);let d=0;const p=[...h.map((e=>Rt(a,s,e,"feature",d++,i))),...f.map((e=>Rt(a,s,e,"aggregate",d++,i)))];return{type:"symbol",target:r,attributes:s,aggregateFields:t,storage:u,mesh:{matcher:o,labels:{type:"simple",classes:p},aggregateMatcher:l}}}}}function Bt(e,t,i){switch(i.type){case"dot-density":return function(e,t,i){return i&&i.length?{type:"dot-density",mapping:i.map(((i,s)=>{const{field:n,fieldIndex:r}=It(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t});return{binding:s,field:n,fieldIndex:r}})),target:t}:{type:"dot-density",mapping:[],target:t}}(e,t,i.attributes);case"simple":case"class-breaks":case"unique-value":case"dictionary":return function(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t};const s={storage:!0},n="numeric";return{type:"visual-variable",mapping:tt(i).map((i=>{var r;const a=j(i.type),{field:o,fieldIndex:l}=It(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:s,resultType:n});switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:a,field:o,fieldIndex:l,normalizationField:It(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field,valueRepresentation:null!=(r=i.valueRepresentation)?r:null};case"color":return{type:"color",binding:a,field:o,fieldIndex:l,normalizationField:It(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field};case"opacity":return{type:"opacity",binding:a,field:o,fieldIndex:l,normalizationField:It(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field};case"rotation":return{type:"rotation",binding:a,field:o,fieldIndex:l}}})).filter((e=>e)),target:t}}(e,t,i.visualVariables);case"heatmap":return null}}function Nt(e,t,i,s=!1){const n=W(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return function(e,t,i,s=!1){const n=t.getSymbols();return{type:"simple",symbol:zt(n.length?n[0]:null,t,s),isDotDensity:i}}(0,i,"dot-density"===i.type,s);case"class-breaks":return function(e,t,i,s=!1){const n={mesh:!0,use:"renderer.field"},r=i.backgroundFillSymbol,{field:a,fieldIndex:o}=It(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:n}),l=i.normalizationType,u="log"===l?"esriNormalizeByLog":"percent-of-total"===l?"esriNormalizeByPercentOfTotal":"field"===l?"esriNormalizeByField":null,c=i.classBreakInfos.map((e=>({symbol:zt(e.symbol,i,s),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:a,fieldIndex:o,backgroundFillSymbol:zt(r,i,s),defaultSymbol:zt(i.defaultSymbol,i,s),intervals:c,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:u,isMaxInclusive:i.isMaxInclusive}}(n,t,i,s);case"unique-value":return function(e,t,i,s=!1){const n=[],r=i.backgroundFillSymbol,a={target:t,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new N(vt,"Expected renderer.field to be a string",i);const{field:o,fieldIndex:l}=It(e,{...a,field:i.field,valueExpression:i.valueExpression});for(const e of i.uniqueValueInfos)n.push({value:""+e.value,symbol:zt(e.symbol,i,s)});return{type:"map",attributes:e.fields,field:o,fieldIndex:l,field2:It(e,{...a,field:i.field2}).field,field3:It(e,{...a,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:zt(r,i),defaultSymbol:zt(i.defaultSymbol,i),map:n}}(n,t,i,s);case"dictionary":return function(e,t,i=!1){return{type:"dictionary",renderer:t.toJSON()}}(0,i,s)}}export{_e as A,Ee as C,Oe as D,ke as G,Fe as H,Ae as J,We as K,_t as M,ze as P,zt as S,Te as T,Ve as W,Nt as a,xe as b,ae as c,oe as d,le as e,bt as f,ct as g,ft as h,ut as i,et as j,dt as m,ie as n,ue as o,re as r,ce as s,je as u,Me as z};
