import{f7 as t,f1 as n,f2 as r,fA as e,eY as a,$ as o,a7 as s,f8 as c}from"../main.js";import{a as u,r as i,s as f,l as h,_ as M,j as l,x as m,q as _,g as p,D as q,E as A}from"./vec4-252847a5.js";function I(){return[1,0,0,0,1,0,0,0,1]}function d(t,n){return new Float64Array(t,n,9)}function g(){return[0,0,0,1]}function j(t){return[t[0],t[1],t[2],t[3]]}function x(t,n){return new Float64Array(t,n,4)}Object.freeze({__proto__:null,create:I,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,n,r,e,a,o,s,c,u){return[t,n,r,e,a,o,s,c,u]},createView:d});const P=[0,0,0,1];function b(t,n,r){r*=.5;const e=Math.sin(r);return t[0]=e*n[0],t[1]=e*n[1],t[2]=e*n[2],t[3]=Math.cos(r),t}function y(n,r){const e=2*Math.acos(r[3]),a=Math.sin(e/2);return a>t?(n[0]=r[0]/a,n[1]=r[1]/a,n[2]=r[2]/a):(n[0]=1,n[1]=0,n[2]=0),e}function w(t,n,r){const e=n[0],a=n[1],o=n[2],s=n[3],c=r[0],u=r[1],i=r[2],f=r[3];return t[0]=e*f+s*c+a*i-o*u,t[1]=a*f+s*u+o*c-e*i,t[2]=o*f+s*i+e*u-a*c,t[3]=s*f-e*c-a*u-o*i,t}function z(n,r,e,a){const o=r[0],s=r[1],c=r[2],u=r[3];let i,f,h,M,l,m=e[0],_=e[1],p=e[2],q=e[3];return f=o*m+s*_+c*p+u*q,f<0&&(f=-f,m=-m,_=-_,p=-p,q=-q),1-f>t?(i=Math.acos(f),h=Math.sin(i),M=Math.sin((1-a)*i)/h,l=Math.sin(a*i)/h):(M=1-a,l=a),n[0]=M*o+l*m,n[1]=M*s+l*_,n[2]=M*c+l*p,n[3]=M*u+l*q,n}function E(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function V(t,n){const r=n[0]+n[4]+n[8];let e;if(r>0)e=Math.sqrt(r+1),t[3]=.5*e,e=.5/e,t[0]=(n[5]-n[7])*e,t[1]=(n[6]-n[2])*e,t[2]=(n[1]-n[3])*e;else{let r=0;n[4]>n[0]&&(r=1),n[8]>n[3*r+r]&&(r=2);const a=(r+1)%3,o=(r+2)%3;e=Math.sqrt(n[3*r+r]-n[3*a+a]-n[3*o+o]+1),t[r]=.5*e,e=.5/e,t[3]=(n[3*a+o]-n[3*o+a])*e,t[a]=(n[3*a+r]+n[3*r+a])*e,t[o]=(n[3*o+r]+n[3*r+o])*e}return t}function O(t,n,r,e){const a=.5*Math.PI/180;n*=a,r*=a,e*=a;const o=Math.sin(n),s=Math.cos(n),c=Math.sin(r),u=Math.cos(r),i=Math.sin(e),f=Math.cos(e);return t[0]=o*u*f-s*c*i,t[1]=s*c*f+o*u*i,t[2]=s*u*i-o*c*f,t[3]=s*u*f+o*c*i,t}Object.freeze({__proto__:null,create:g,clone:j,fromValues:function(t,n,r,e){return[t,n,r,e]},createView:x,IDENTITY:P});const T=u,Y=i,v=f,D=w,F=h,L=M,N=l,W=m,X=W,Z=_,$=Z,k=p,B=q,C=A;const G=o(),H=s(1,0,0),J=s(0,1,0);const K=[0,0,0,1],Q=[0,0,0,1];const R=[1,0,0,0,1,0,0,0,1];Object.freeze({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:b,getAxisAngle:y,multiply:w,rotateX:function(t,n,r){r*=.5;const e=n[0],a=n[1],o=n[2],s=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=e*u+s*c,t[1]=a*u+o*c,t[2]=o*u-a*c,t[3]=s*u-e*c,t},rotateY:function(t,n,r){r*=.5;const e=n[0],a=n[1],o=n[2],s=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=e*u-o*c,t[1]=a*u+s*c,t[2]=o*u+e*c,t[3]=s*u-a*c,t},rotateZ:function(t,n,r){r*=.5;const e=n[0],a=n[1],o=n[2],s=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=e*u+a*c,t[1]=a*u-e*c,t[2]=o*u+s*c,t[3]=s*u-o*c,t},calculateW:function(t,n){const r=n[0],e=n[1],a=n[2];return t[0]=r,t[1]=e,t[2]=a,t[3]=Math.sqrt(Math.abs(1-r*r-e*e-a*a)),t},slerp:z,random:function(t){const n=c(),r=c(),e=c(),a=Math.sqrt(1-n),o=Math.sqrt(n);return t[0]=a*Math.sin(2*Math.PI*r),t[1]=a*Math.cos(2*Math.PI*r),t[2]=o*Math.sin(2*Math.PI*e),t[3]=o*Math.cos(2*Math.PI*e),t},invert:function(t,n){const r=n[0],e=n[1],a=n[2],o=n[3],s=r*r+e*e+a*a+o*o,c=s?1/s:0;return t[0]=-r*c,t[1]=-e*c,t[2]=-a*c,t[3]=o*c,t},conjugate:E,fromMat3:V,fromEuler:O,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:T,set:Y,add:v,mul:D,scale:F,dot:L,lerp:N,length:W,len:X,squaredLength:Z,sqrLen:$,normalize:k,exactEquals:B,equals:C,rotationTo:function(t,o,s){const c=n(o,s);return c<-.999999?(r(G,H,o),e(G)<1e-6&&r(G,J,o),a(G,G),b(t,G,Math.PI),t):c>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(r(G,o,s),t[0]=G[0],t[1]=G[1],t[2]=G[2],t[3]=1+c,k(t,t))},sqlerp:function(t,n,r,e,a,o){return z(K,n,a,o),z(Q,r,e,o),z(t,K,Q,2*o*(1-o)),t},setAxes:function(t,n,r,e){const a=R;return a[0]=r[0],a[3]=r[1],a[6]=r[2],a[1]=e[0],a[4]=e[1],a[7]=e[2],a[2]=-n[0],a[5]=-n[1],a[8]=-n[2],k(t,V(t,a))}});export{b as A,O as C,y as I,B as N,w as P,I as a,x as b,P as c,g as e,j as r,d as t,E as w};
