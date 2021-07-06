import{dJ as e,dK as n,dL as t,a,bP as i,cb as o,c9 as r,bZ as s,r as l,a4 as c,dM as x}from"../main.js";const u=5e-4,f=function(e,n){const t=(e.isWGS84||e.isWebMercator)&&(n.isWGS84||n.isWebMercator);return!(e.equals(n)||t)},m={3395:20037508.342789244,3410:17334193.943686873,3832:3339584.723798206,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,8858:7396237.374497803,8859:2465412.4581659334,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53025:7276828.3848298555,53031:10384677.558821043,53034:20015086.79602057,53036:7389443.187332862,53037:2463147.729110953,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54025:7311399.09166516,54031:10396310.810074743,54034:20037508.342789244,54050:808820.9223376509,54053:1920897.3915568967,54079:20037508.342789244,54080:20037508.342789244,54099:13524439.768288724,54100:20037508.342789244,54101:20037508.342789244,102038:4297258.582585486,102299:5013965.117483125};async function h(){if(e()||!n())return null;await t()}function p(n,t,i){if(!f(n.spatialReference,t))return null;if(!e())throw new a("rasterprojectionhelper-projectResolution","projection engine is not loaded");return i?x(t,n.spatialReference,n):x(n.spatialReference,t,n)}function y(n,t,s,l=null){if(n.spatialReference.equals(t))return n;const c=f(n.spatialReference,t);if(c&&!e())throw new a("rasterprojectionhelper-projectResolution","projection engine is not loaded");const x=s.center,u=new i({xmin:x.x-n.x/2,xmax:x.x+n.x/2,ymin:x.y-n.y/2,ymax:x.y+n.y/2,spatialReference:n.spatialReference}),m=c?o(u,t,l):r(u,t);return null==m?null:{x:m.xmax-m.xmin,y:m.ymax-m.ymin}}function M(e,n=.01){return s(e)?n/s(e):0}function d(n,t,i=null,s=!0){const l=n.spatialReference;if(l.equals(t))return n;const c=f(l,t);if(c&&!e())throw new a("rasterprojectionhelper-projectResolution","projection engine is not loaded");const x=c?o(n,t,i):r(n,t);if(x&&s&&t.isGeographic){const[e,t]=j(l,!0),a=M(l);a&&null!=e&&null!=t&&(Math.abs(n.x-e)<a&&Math.abs(180-x.x)<u?x.x-=360:Math.abs(n.x-t)<a&&Math.abs(180+x.x)<u&&(x.x+=360))}return x}function w(e){const n=b(e[0].spatialReference);if(e.length<2||!l(n))return e[0];let{xmin:t,xmax:a,ymin:o,ymax:r}=e[0];for(let t=1;t<e.length;t++){const i=e[t];a=i.xmax+n*t,o=Math.min(o,i.ymin),r=Math.max(r,i.ymax)}return new i({xmin:t,xmax:a,ymin:o,ymax:r,spatialReference:e[0].spatialReference})}function g(e,n,t=null,a=!0){if(e.spatialReference.equals(n))return e;const i=v(e),o=b(e.spatialReference,!0);return l(o)&&0!==i?w(e.clone().normalize().map((e=>R(e,n,t,a)))):R(e,n,t,a)}function R(n,t,i=null,s=!0){const l=n.spatialReference;if(l.equals(t))return n;const x=f(l,t);if(x&&!e())throw new a("rasterprojectionhelper-projectExtent","projection engine is not loaded");const m=x?o(n,t,i):r(n,t);let[h,p]=j(l,!0);if(m&&s&&l.isWebMercator&&t.isGeographic&&null!=h&&null!=p){const e=.001,a=1e3;if(Math.abs(n.xmin-h)<e&&Math.abs(p-n.xmax)>a&&Math.abs(180-m.xmax)<u){m.xmin=-180;const e=[];e.push(new c(n.xmax,n.ymin,l)),e.push(new c(n.xmax,(n.ymin+n.ymax)/2,l)),e.push(new c(n.xmax,n.ymax,l));const a=e.map((e=>d(e,t,i))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));m.xmax=Math.max.apply(null,a)}if(Math.abs(n.xmax-p)<e&&Math.abs(h-n.xmin)>a&&Math.abs(180+m.xmin)<u){m.xmax=180;const e=[];e.push(new c(n.xmin,n.ymin,l)),e.push(new c(n.xmin,(n.ymin+n.ymax)/2,l)),e.push(new c(n.xmin,n.ymax,l));const a=e.map((e=>d(e,t,i))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));m.xmin=Math.min.apply(null,a)}}[h,p]=j(t,!0);const y=M(t);return y&&null!=h&&null!=p&&(Math.abs(m.xmin-h)<y&&(m.xmin=h),Math.abs(m.xmax-p)<y&&(m.xmax=p)),m}function b(e,n=!1){const t=n?20037508.342787:20037508.342788905;return e.isWebMercator?2*t:e.wkid&&e.isGeographic?360:2*m[e.wkid]||null}function j(e,n=!1){const t=[],a=b(e,n);return l(a)&&(t.push(-a/2),t.push(a/2)),t}function S(e,n,t,a){let i=(e-n)/t;return i-Math.floor(i)!=0?i=Math.floor(i):a&&(i-=1),i}function v(e,n=!1){const t=b(e.spatialReference);if(!l(t))return 0;const a=n?0:-t/2;return S(e.xmax,a,t,!0)-S(e.xmin,a,t,!1)}function N(e){const n=e.storageInfo.origin.x,t=b(e.spatialReference,!0);if(!l(t))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const a=t/2,{nativePixelSize:i,storageInfo:o,extent:r}=e,{maximumPyramidLevel:s,blockWidth:c,pyramidScalingFactor:x}=o;let u=i.x;const f=[],m=l(e.transform)&&"gcs-shift"===e.transform.type,h=n+a,p=m?t-n:a-n;for(let e=0;e<=s;e++){const e=(r.xmax-n)/u/c,a=e-Math.floor(e)==0?e:Math.ceil(e),i=(t/2-n)/u/c,o=i-Math.floor(i)==0?i:Math.ceil(i),s=Math.floor(h/u/c),l=Math.round(h/u)%c,m=(c-Math.round(p/u)%c)%c;f.push({resolutionX:u,blockWidth:c,datsetColumnCount:a,worldColumnCountFromOrigin:o,leftMargin:l,rightPadding:m,originColumnOffset:s}),u*=x}return{originX:n,halfWorldWidth:a,pyramidsInfo:f,hasGCSSShiftTransform:m}}function W(n,t,i,o=null,r=null,s=!1,x=[32,32]){if(f(n.spatialReference,t.spatialReference)&&!e())throw new a("rasterprojectionhelper-projectResolution","projection engine is not loaded");if(!(n&&t&&i))return null;const{xmin:u,ymin:m,xmax:h,ymax:p}=n,y=n.spatialReference,M=t.spatialReference,w=b(M);s=s||"gcs-shift"===(null==r?void 0:r.type);const g={x:x[0]*i.x,y:x[1]*i.y},R={cols:Math.ceil((h-u)/g.x-.1)+1,rows:Math.ceil((p-m)/g.y-.1)+1},j=g.x,S=g.y,v=[];let N,W=!1;for(let e=0;e<R.cols;e++){const n=[];for(let a=0;a<R.rows;a++){let i=d(new c({x:u+j*e,y:p-S*a,spatialReference:y}),M,o);r&&(i=r.inverseTransform(i)),n.push(i),e>0&&s&&i&&N[a]&&l(w)&&i.x<N[a].x&&(i.x+=w),i?(v.push((i.x-t.xmin)/(t.xmax-t.xmin)),v.push((t.ymax-i.y)/(t.ymax-t.ymin))):(v.push(NaN),v.push(NaN),W=!0)}N=n}const z=function(e,n){const t=(e[0]+e[4]+e[4*n.cols]+e[4*n.cols+4])/4,a=(e[1]+e[5]+e[4*n.rows+1]+e[4*n.rows+5])/4;return[Math.abs(t-e[2*n.rows+2]),Math.abs(a-e[2*n.rows+3])]}(v,R),G=new Float32Array((R.cols-1)*(R.rows-1)*2*6),P=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),C=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let e=0;e<R.cols-1;e++){for(let n=0;n<R.rows-1;n++){let t=e*R.rows*2+2*n;const a=v[t],i=v[t+1],o=v[t+2],r=v[t+3];t+=2*R.rows;const s=v[t],l=v[t+1],c=v[t+2],x=v[t+3];let u=0,f=12*(n*(R.cols-1)+e);for(let e=0;e<3;e++)G[f++]=P[u++]*a+P[u++]*o+P[u++]*c;u=0;for(let e=0;e<3;e++)G[f++]=P[u++]*i+P[u++]*r+P[u++]*x;u=0;for(let e=0;e<3;e++)G[f++]=C[u++]*a+C[u++]*s+C[u++]*c;u=0;for(let e=0;e<3;e++)G[f++]=C[u++]*i+C[u++]*l+C[u++]*x}if(W)for(let e=0;e<G.length;e++)isNaN(G[e])&&(G[e]=-1)}return{offsets:v,error:z,coefficients:G,spacing:x,size:[R.cols-1,R.rows-1]}}function z(e){const n=e.clone().normalize();return 1===n.length?n[0]:w(n)}function G(e,n,t){const{storageInfo:a,pixelSize:i}=n;let o,r=!1;const{pyramidResolutions:s}=a;if(l(s)&&s.length){const a=(e.x+e.y)/2,l=s[s.length-1],x=(l.x+l.y)/2,u=(i.x+i.y)/2;if(a<=u)o=0;else if(a>=x)o=s.length,r=a/x>8;else{let e,n=u;for(let i=1;i<=s.length;i++){if(e=(s[i-1].x+s[i-1].y)/2,a<=e){a===e?o=i:"down"===t?(o=i-1,r=a/n>8):o="up"===t||a-n>e-a||a/n>2?i:i-1;break}n=e}}const f=0===o?i:s[o-1];return{pyramidLevel:o,pyramidResolution:new c({x:f.x,y:f.y,spatialReference:n.spatialReference}),excessiveReading:r}}const x=Math.log(e.x/i.x)/Math.LN2,u=Math.log(e.y/i.y)/Math.LN2,f=n.storageInfo.maximumPyramidLevel||0;o="down"===t?Math.floor(Math.min(x,u)):"up"===t?Math.ceil(Math.max(x,u)):Math.round((x+u)/2),o<0?o=0:o>f&&(r=o>f+3,o=f);const m=2**o;return{pyramidLevel:o,pyramidResolution:new c({x:m*n.nativePixelSize.x,y:m*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:r}}function P(e,n,t=512,a=!0){const{extent:i,spatialReference:o,pixelSize:r}=e,l=y(new c({x:r.x,y:r.y,spatialReference:o}),n,i);if(null==l)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const x=(l.x+l.y)/2,u=s(n),f=x*u*96*39.37,m=n.isGeographic?256/t*295828763.7958547:256/t*591657527.591555;let h=!1;const p=g(i,n);a&&(n.isGeographic||n.isWebMercator)&&(h=p.xmin*p.xmax<0);let M,d=f;const w=1.001;if(h){d=m;const e=n.isGeographic?1341104507446289e-21:.29858214164761665,t=e*(96*u*39.37),a=n.isGeographic?4326:3857;M=y(new c({x:e,y:e,spatialReference:{wkid:a}}),o,p),M.x*=d/t,M.y*=d/t}else{M={x:r.x,y:r.y};const n=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2);let t=0;for(;d<m*(w/2)&&t<n;)t++,d*=2,M.x*=2,M.y*=2;Math.max(d,m)/Math.min(d,m)<=w&&(d=m)}const R=[d],b=[{x:M.x,y:M.y}],j=Math.min(70.5310735,f)/w;for(;d>=j;)d/=2,M.x/=2,M.y/=2,R.push(d),b.push({x:M.x,y:M.y});return{projectedPixelSize:l,scales:R,srcResolutions:b,isCustomTilingScheme:!h}}export{G as C,W as G,P as L,p as M,z as P,v as W,y as g,g as j,d as w,h as y,N as z};
