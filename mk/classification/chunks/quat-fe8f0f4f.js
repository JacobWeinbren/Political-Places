import{e_ as t,eU as n,eV as r,fr as e,eP as a,$ as o,a7 as s,e$ as c}from"../main.js";import{a as u,r as i,s as h,l as f,_ as M,j as l,x as _,q as m,g as p,D as q,E as I}from"./vec4-074584e1.js";function A(){return[1,0,0,0,1,0,0,0,1]}function P(t,n){return new Float64Array(t,n,9)}function d(){return[0,0,0,1]}function g(t){return[t[0],t[1],t[2],t[3]]}function j(t,n){return new Float64Array(t,n,4)}Object.freeze({__proto__:null,create:A,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,n,r,e,a,o,s,c,u){return[t,n,r,e,a,o,s,c,u]},createView:P});const x=[0,0,0,1];function b(t,n,r){r*=.5;const e=Math.sin(r);return t[0]=e*n[0],t[1]=e*n[1],t[2]=e*n[2],t[3]=Math.cos(r),t}function y(n,r){const e=2*Math.acos(r[3]),a=Math.sin(e/2);return a>t?(n[0]=r[0]/a,n[1]=r[1]/a,n[2]=r[2]/a):(n[0]=1,n[1]=0,n[2]=0),e}function V(t,n,r){const e=n[0],a=n[1],o=n[2],s=n[3],c=r[0],u=r[1],i=r[2],h=r[3];return t[0]=e*h+s*c+a*i-o*u,t[1]=a*h+s*u+o*c-e*i,t[2]=o*h+s*i+e*u-a*c,t[3]=s*h-e*c-a*u-o*i,t}function w(n,r,e,a){const o=r[0],s=r[1],c=r[2],u=r[3];let i,h,f,M,l,_=e[0],m=e[1],p=e[2],q=e[3];return h=o*_+s*m+c*p+u*q,h<0&&(h=-h,_=-_,m=-m,p=-p,q=-q),1-h>t?(i=Math.acos(h),f=Math.sin(i),M=Math.sin((1-a)*i)/f,l=Math.sin(a*i)/f):(M=1-a,l=a),n[0]=M*o+l*_,n[1]=M*s+l*m,n[2]=M*c+l*p,n[3]=M*u+l*q,n}function z(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function E(t,n){const r=n[0]+n[4]+n[8];let e;if(r>0)e=Math.sqrt(r+1),t[3]=.5*e,e=.5/e,t[0]=(n[5]-n[7])*e,t[1]=(n[6]-n[2])*e,t[2]=(n[1]-n[3])*e;else{let r=0;n[4]>n[0]&&(r=1),n[8]>n[3*r+r]&&(r=2);const a=(r+1)%3,o=(r+2)%3;e=Math.sqrt(n[3*r+r]-n[3*a+a]-n[3*o+o]+1),t[r]=.5*e,e=.5/e,t[3]=(n[3*a+o]-n[3*o+a])*e,t[a]=(n[3*a+r]+n[3*r+a])*e,t[o]=(n[3*o+r]+n[3*r+o])*e}return t}function O(t,n,r,e){const a=.5*Math.PI/180;n*=a,r*=a,e*=a;const o=Math.sin(n),s=Math.cos(n),c=Math.sin(r),u=Math.cos(r),i=Math.sin(e),h=Math.cos(e);return t[0]=o*u*h-s*c*i,t[1]=s*c*h+o*u*i,t[2]=s*u*i-o*c*h,t[3]=s*u*h+o*c*i,t}Object.freeze({__proto__:null,create:d,clone:g,fromValues:function(t,n,r,e){return[t,n,r,e]},createView:j,IDENTITY:x});const T=u,v=i,D=h,F=V,L=f,Y=M,$=l,N=_,U=N,W=m,X=W,Z=p,k=q,B=I;const C=o(),G=s(1,0,0),H=s(0,1,0);const J=[0,0,0,1],K=[0,0,0,1];const Q=[1,0,0,0,1,0,0,0,1];Object.freeze({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:b,getAxisAngle:y,multiply:V,rotateX:function(t,n,r){r*=.5;const e=n[0],a=n[1],o=n[2],s=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=e*u+s*c,t[1]=a*u+o*c,t[2]=o*u-a*c,t[3]=s*u-e*c,t},rotateY:function(t,n,r){r*=.5;const e=n[0],a=n[1],o=n[2],s=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=e*u-o*c,t[1]=a*u+s*c,t[2]=o*u+e*c,t[3]=s*u-a*c,t},rotateZ:function(t,n,r){r*=.5;const e=n[0],a=n[1],o=n[2],s=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=e*u+a*c,t[1]=a*u-e*c,t[2]=o*u+s*c,t[3]=s*u-o*c,t},calculateW:function(t,n){const r=n[0],e=n[1],a=n[2];return t[0]=r,t[1]=e,t[2]=a,t[3]=Math.sqrt(Math.abs(1-r*r-e*e-a*a)),t},slerp:w,random:function(t){const n=c(),r=c(),e=c(),a=Math.sqrt(1-n),o=Math.sqrt(n);return t[0]=a*Math.sin(2*Math.PI*r),t[1]=a*Math.cos(2*Math.PI*r),t[2]=o*Math.sin(2*Math.PI*e),t[3]=o*Math.cos(2*Math.PI*e),t},invert:function(t,n){const r=n[0],e=n[1],a=n[2],o=n[3],s=r*r+e*e+a*a+o*o,c=s?1/s:0;return t[0]=-r*c,t[1]=-e*c,t[2]=-a*c,t[3]=o*c,t},conjugate:z,fromMat3:E,fromEuler:O,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:T,set:v,add:D,mul:F,scale:L,dot:Y,lerp:$,length:N,len:U,squaredLength:W,sqrLen:X,normalize:Z,exactEquals:k,equals:B,rotationTo:function(t,o,s){const c=n(o,s);return c<-.999999?(r(C,G,o),e(C)<1e-6&&r(C,H,o),a(C,C),b(t,C,Math.PI),t):c>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(r(C,o,s),t[0]=C[0],t[1]=C[1],t[2]=C[2],t[3]=1+c,Z(t,t))},sqlerp:function(t,n,r,e,a,o){return w(J,n,a,o),w(K,r,e,o),w(t,J,K,2*o*(1-o)),t},setAxes:function(t,n,r,e){const a=Q;return a[0]=r[0],a[3]=r[1],a[6]=r[2],a[1]=e[0],a[4]=e[1],a[7]=e[2],a[2]=-n[0],a[5]=-n[1],a[8]=-n[2],Z(t,E(t,a))}});export{b as A,O as C,y as I,k as N,V as P,A as a,j as b,x as c,d as e,g as r,P as t,z as w};