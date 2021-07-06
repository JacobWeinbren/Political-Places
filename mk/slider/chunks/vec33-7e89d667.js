import{n as e}from"../main.js";function t(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t){return new Float64Array(e,t,16)}const f=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:t,clone:r,fromValues:function(e,t,r,n,f,o,u,d,c,s,i,a,p,l,y,B){return[e,t,r,n,f,o,u,d,c,s,i,a,p,l,y,B]},createView:n,IDENTITY:f});const o=e.getLogger("esri.views.3d.support.buffer.math");function u(e,t,r){if(e.count!==t.count)return void o.error("source and destination buffers need to have the same number of elements");const n=e.count,f=r[0],u=r[1],d=r[2],c=r[4],s=r[5],i=r[6],a=r[8],p=r[9],l=r[10],y=r[12],B=r[13],m=r[14],S=e.typedBuffer,h=e.typedBufferStride,_=t.typedBuffer,b=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*h,r=e*b,n=_[r],o=_[r+1],v=_[r+2];S[t]=f*n+c*o+a*v+y,S[t+1]=u*n+s*o+p*v+B,S[t+2]=d*n+i*o+l*v+m}}function d(e,t,r){if(e.count!==t.count)return void o.error("source and destination buffers need to have the same number of elements");const n=e.count,f=r[0],u=r[1],d=r[2],c=r[3],s=r[4],i=r[5],a=r[6],p=r[7],l=r[8],y=e.typedBuffer,B=e.typedBufferStride,m=t.typedBuffer,S=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*B,r=e*S,n=m[r],o=m[r+1],h=m[r+2];y[t]=f*n+c*o+a*h,y[t+1]=u*n+s*o+p*h,y[t+2]=d*n+i*o+l*h}}function c(e,t,r){const n=Math.min(e.count,t.count),f=e.typedBuffer,o=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*d;f[t]=r*u[n],f[t+1]=r*u[n+1],f[t+2]=r*u[n+2]}}function s(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,u=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*f,r=e*u,d=o[r],c=o[r+1],s=o[r+2],i=Math.sqrt(d*d+c*c+s*s);if(i>0){const e=1/i;n[t]=e*d,n[t+1]=e*c,n[t+2]=e*s}}}function i(e,t,r){const n=Math.min(e.count,t.count),f=e.typedBuffer,o=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*d;f[t]=u[n]>>r,f[t+1]=u[n+1]>>r,f[t+2]=u[n+2]>>r}}function a(e,t,r){const n=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,u=t.typedBufferStride,d=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*f,s=(r&&r.srcIndex?r.srcIndex:0)*u;for(let e=0;e<d;++e)n[c]=o[s],n[c+1]=o[s+1],n[c+2]=o[s+2],c+=f,s+=u}function p(e,t,r,n,f){var o,u;const d=e.typedBuffer,c=e.typedBufferStride,s=null!=(o=null==f?void 0:f.count)?o:e.count;let i=(null!=(u=null==f?void 0:f.dstIndex)?u:0)*c;for(let e=0;e<s;++e)d[i]=t,d[i+1]=r,d[i+2]=n,i+=c}Object.freeze({__proto__:null,transformMat4:u,transformMat3:d,scale:c,normalize:s,shiftRight:i}),Object.freeze({__proto__:null,copy:a,fill:p});export{u as a,f as b,a as c,o as d,t as e,d as f,r as g,p as h,i as n,s as o,c as r,n as t};
