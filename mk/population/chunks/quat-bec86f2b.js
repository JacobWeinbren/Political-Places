import{fj as t,fk as n,fl as r,fm as e,eS as a,$ as s,a7 as o,fn as c}from"../main.js";import{a as u,r as i,s as f,l as h,_ as M,j as l,x as m,q as _,g as p,D as q,E as d}from"./vec4-d96d501a.js";function I(){return[1,0,0,0,1,0,0,0,1]}function j(t,n){return new Float64Array(t,n,9)}function A(){return[0,0,0,1]}function g(t){return[t[0],t[1],t[2],t[3]]}function x(t,n){return new Float64Array(t,n,4)}Object.freeze({__proto__:null,create:I,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,n,r,e,a,s,o,c,u){return[t,n,r,e,a,s,o,c,u]},createView:j});const P=[0,0,0,1];function b(t,n,r){r*=.5;const e=Math.sin(r);return t[0]=e*n[0],t[1]=e*n[1],t[2]=e*n[2],t[3]=Math.cos(r),t}function y(n,r){const e=2*Math.acos(r[3]),a=Math.sin(e/2);return a>t?(n[0]=r[0]/a,n[1]=r[1]/a,n[2]=r[2]/a):(n[0]=1,n[1]=0,n[2]=0),e}function w(t,n,r){const e=n[0],a=n[1],s=n[2],o=n[3],c=r[0],u=r[1],i=r[2],f=r[3];return t[0]=e*f+o*c+a*i-s*u,t[1]=a*f+o*u+s*c-e*i,t[2]=s*f+o*i+e*u-a*c,t[3]=o*f-e*c-a*u-s*i,t}function z(n,r,e,a){const s=r[0],o=r[1],c=r[2],u=r[3];let i,f,h,M,l,m=e[0],_=e[1],p=e[2],q=e[3];return f=s*m+o*_+c*p+u*q,f<0&&(f=-f,m=-m,_=-_,p=-p,q=-q),1-f>t?(i=Math.acos(f),h=Math.sin(i),M=Math.sin((1-a)*i)/h,l=Math.sin(a*i)/h):(M=1-a,l=a),n[0]=M*s+l*m,n[1]=M*o+l*_,n[2]=M*c+l*p,n[3]=M*u+l*q,n}function E(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function V(t,n){const r=n[0]+n[4]+n[8];let e;if(r>0)e=Math.sqrt(r+1),t[3]=.5*e,e=.5/e,t[0]=(n[5]-n[7])*e,t[1]=(n[6]-n[2])*e,t[2]=(n[1]-n[3])*e;else{let r=0;n[4]>n[0]&&(r=1),n[8]>n[3*r+r]&&(r=2);const a=(r+1)%3,s=(r+2)%3;e=Math.sqrt(n[3*r+r]-n[3*a+a]-n[3*s+s]+1),t[r]=.5*e,e=.5/e,t[3]=(n[3*a+s]-n[3*s+a])*e,t[a]=(n[3*a+r]+n[3*r+a])*e,t[s]=(n[3*s+r]+n[3*r+s])*e}return t}function O(t,n,r,e){const a=.5*Math.PI/180;n*=a,r*=a,e*=a;const s=Math.sin(n),o=Math.cos(n),c=Math.sin(r),u=Math.cos(r),i=Math.sin(e),f=Math.cos(e);return t[0]=s*u*f-o*c*i,t[1]=o*c*f+s*u*i,t[2]=o*u*i-s*c*f,t[3]=o*u*f+s*c*i,t}Object.freeze({__proto__:null,create:A,clone:g,fromValues:function(t,n,r,e){return[t,n,r,e]},createView:x,IDENTITY:P});const T=u,v=i,D=f,F=w,L=h,Y=M,k=l,N=m,S=N,W=_,X=W,Z=p,$=q,B=d;const C=s(),G=o(1,0,0),H=o(0,1,0);const J=[0,0,0,1],K=[0,0,0,1];const Q=[1,0,0,0,1,0,0,0,1];Object.freeze({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:b,getAxisAngle:y,multiply:w,rotateX:function(t,n,r){r*=.5;const e=n[0],a=n[1],s=n[2],o=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=e*u+o*c,t[1]=a*u+s*c,t[2]=s*u-a*c,t[3]=o*u-e*c,t},rotateY:function(t,n,r){r*=.5;const e=n[0],a=n[1],s=n[2],o=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=e*u-s*c,t[1]=a*u+o*c,t[2]=s*u+e*c,t[3]=o*u-a*c,t},rotateZ:function(t,n,r){r*=.5;const e=n[0],a=n[1],s=n[2],o=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=e*u+a*c,t[1]=a*u-e*c,t[2]=s*u+o*c,t[3]=o*u-s*c,t},calculateW:function(t,n){const r=n[0],e=n[1],a=n[2];return t[0]=r,t[1]=e,t[2]=a,t[3]=Math.sqrt(Math.abs(1-r*r-e*e-a*a)),t},slerp:z,random:function(t){const n=c(),r=c(),e=c(),a=Math.sqrt(1-n),s=Math.sqrt(n);return t[0]=a*Math.sin(2*Math.PI*r),t[1]=a*Math.cos(2*Math.PI*r),t[2]=s*Math.sin(2*Math.PI*e),t[3]=s*Math.cos(2*Math.PI*e),t},invert:function(t,n){const r=n[0],e=n[1],a=n[2],s=n[3],o=r*r+e*e+a*a+s*s,c=o?1/o:0;return t[0]=-r*c,t[1]=-e*c,t[2]=-a*c,t[3]=s*c,t},conjugate:E,fromMat3:V,fromEuler:O,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:T,set:v,add:D,mul:F,scale:L,dot:Y,lerp:k,length:N,len:S,squaredLength:W,sqrLen:X,normalize:Z,exactEquals:$,equals:B,rotationTo:function(t,s,o){const c=n(s,o);return c<-.999999?(r(C,G,s),e(C)<1e-6&&r(C,H,s),a(C,C),b(t,C,Math.PI),t):c>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(r(C,s,o),t[0]=C[0],t[1]=C[1],t[2]=C[2],t[3]=1+c,Z(t,t))},sqlerp:function(t,n,r,e,a,s){return z(J,n,a,s),z(K,r,e,s),z(t,J,K,2*s*(1-s)),t},setAxes:function(t,n,r,e){const a=Q;return a[0]=r[0],a[3]=r[1],a[6]=r[2],a[1]=e[0],a[4]=e[1],a[7]=e[2],a[2]=-n[0],a[5]=-n[1],a[8]=-n[2],Z(t,V(t,a))}});export{b as A,O as C,y as I,$ as N,w as P,A as a,P as b,x as c,I as e,g as r,j as t,E as w};
