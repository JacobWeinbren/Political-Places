import{r as t}from"../main.js";import{u as e}from"./pixelUtils-69c2c010.js";const i=180/Math.PI,n=function(t){return t&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0},r=new Map;function a(t,e){return r.get(t)/r.get(e)||1}function o(t){return(450-t)%360}function s(t,e="geographic"){const[n,r]=t,a=Math.sqrt(n*n+r*r);let s=Math.atan2(r,n)*i;return s=(360+s)%360,"geographic"===e&&(s=o(s)),[a,s]}function h(t,e="geographic"){let n=t[1];"geographic"===e&&(n=o(n)),n%=360;const r=t[0];return[r*Math.cos(n/i),r*Math.sin(n/i)]}function l(t,i,r="geographic",a=1){if(!n(t))return t;const{pixels:o,width:l,height:c}=t,p=l*c,u=o[0],x=o[1],m=e.createEmptyBand(t.pixelType,p),f=e.createEmptyBand(t.pixelType,p);let d=0;for(let t=0;t<c;t++)for(let t=0;t<l;t++)"vector-uv"===i?([m[d],f[d]]=s([u[d],x[d]],r),m[d]*=a):([m[d],f[d]]=h([u[d],x[d]],r),m[d]*=a,f[d]*=a),d++;const g=new e({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[m,f]});return g.updateStatistics(),g}function c(t,e,i=1){if(1===i||!n(t))return t;const r=t.clone(),{pixels:a,width:o,height:s}=r,h=a[0],l=a[1];let c=0;for(let t=0;t<s;t++)for(let t=0;t<o;t++)"vector-uv"===e?(h[c]*=i,l[c]*=i):h[c]*=i,c++;return r.updateStatistics(),r}function p(e,i,n,r,a){if(!t(a)||!a.spatialReference.equals(e.spatialReference))return{extent:e,width:i,height:n,resolution:e.width/i};const o=a.xmin,s=a.ymax;r=Math.max(r||0,30);const h=Math.ceil(i*(1/r)),l=Math.ceil(n*(1/r)),c=((e.xmax-e.xmin)/h+(e.ymax-e.ymin)/l)/2;return e.xmin=o+Math.floor((e.xmin-o)/c)*c,e.xmax=o+Math.ceil((e.xmax-o)/c)*c,e.ymin=s+Math.floor((e.ymin-s)/c)*c,e.ymax=s+Math.ceil((e.ymax-s)/c)*c,{extent:e,width:Math.round(e.width/c),height:Math.round(e.height/c),resolution:c}}r.set("meter-per-second",1),r.set("kilometer-per-hour",.277778),r.set("knots",.514444),r.set("feet-per-second",.3048),r.set("mile-per-hour",.44704);export{c,l,a as o,p};
