import{T as t}from"../main.js";const e=(()=>{if(!("document"in globalThis))return()=>null;const t=document.createElement("canvas"),e=t.getContext("2d");return t.height=512,t.width=1,n=>{e.clearRect(0,0,1,t.height);const r=e.createLinearGradient(0,0,0,t.height);for(const{ratio:t,color:e}of n)r.addColorStop(Math.max(t,.001),`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`);return e.fillStyle=r,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}})();function n(t,e,n,r){const{blurRadius:a,fieldOffset:o,field:i}=e,c=new Float64Array(n*r),f=function(t){const e=Math.round(3*t),n=2*t*t,r=new Float64Array(2*e+1);for(let a=0;a<=r.length;a++)r[a]=Math.exp(-((a-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return r}(a),u=Math.round(3*a);let h,l=Number.NEGATIVE_INFINITY;const s=function(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e:t=>1}(i,o),d=new Set;for(const e of t){const t=e.getCursor();for(;t.next();){const e=t.getObjectId();if(d.has(e))continue;d.add(e);const a=t.readLegacyPointGeometry(),o=128;if(a.x<-o||a.x>=n+o||a.y<-o||a.y>r+o)continue;const i=+s(t),g=Math.round(a.x)-u,m=Math.round(a.y)-u,y=Math.max(0,g),M=Math.max(0,m),b=Math.min(r,Math.round(a.y)+u),x=Math.min(n,Math.round(a.x)+u);for(let t=M;t<b;t++){const e=f[t-m];for(let r=y;r<x;r++){const a=f[r-g];h=c[t*n+r]+=e*a*i,h>l&&(l=h)}}}}return{matrix:c.buffer,max:l}}function r(e,n,r,a,o,i){e.canvas.width=e.canvas.height=n,e.clearRect(0,0,n,n);const c=e.getImageData(0,0,n,n);r&&a&&c.data.set(new Uint8ClampedArray(function(e,n,r,a,o){const i=new Uint32Array(e*e),c="buffer"in n?n:new Float64Array(n),f="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),u=f.length/(o-a);for(let e=0;e<c.length;e++){const n=c[e],r=Math.floor((n-a)*u);i[e]=f[t(r,0,f.length-1)]}return i.buffer}(n,r,a,o,i))),e.putImageData(c,0,0)}export{r as a,e,n as r};
