import{bv as n}from"../main.js";function t(t,f,i){var u;const c=t.byteLength/(4*f),s=new Uint32Array(t,0,c*f);let a=new Uint32Array(c);const h=null!=(u=null==i?void 0:i.minReduction)?u:0,g=(null==i?void 0:i.originalIndices)||null,y=g?g.length:0,d=(null==i?void 0:i.componentOffsets)||null;let w=0;if(d)for(let n=0;n<d.length-1;n++){const t=d[n+1]-d[n];t>w&&(w=t)}else w=c;const A=Math.floor(1.1*w)+1;(null==o||o.length<2*A)&&(o=new Uint32Array(n(2*A)));for(let n=0;n<2*A;n++)o[n]=0;let U=0;const b=!!d&&!!g,m=b?y:c,v=b?new Uint32Array(y):null,p=1.96;let M=0!==h?Math.ceil(4*p*p/(h*h)*h*(1-h)):m,q=1,j=d?d[1]:m;for(let n=0;n<m;n++){if(n===M){const t=1-U/n;if(t+p*Math.sqrt(t*(1-t)/n)<h)return null;M*=2}if(n===j){for(let n=0;n<2*A;n++)o[n]=0;if(g)for(let n=d[q-1];n<d[q];n++)v[n]=a[g[n]];j=d[++q]}const t=b?g[n]:n,l=t*f,i=r(s,l,f);let u=i%A,c=U;for(;0!==o[2*u+1];){if(o[2*u]===i){const n=o[2*u+1]-1;if(e(s,l,n*f,f)){c=a[n];break}}u++,u>=A&&(u-=A)}c===U&&(o[2*u]=i,o[2*u+1]=t+1,U++),a[t]=c}if(0!==h&&1-U/c<h)return null;if(b){for(let n=d[q-1];n<v.length;n++)v[n]=a[g[n]];a=v}const k=new Uint32Array(f*U);U=0;for(let n=0;n<m;n++)a[n]===U&&(l(s,(b?g[n]:n)*f,k,U*f,f),U++);if(g&&!b){const n=new Uint32Array(y);for(let t=0;t<n.length;t++)n[t]=a[g[t]];a=n}return{buffer:k.buffer,indices:a,uniqueCount:U}}function e(n,t,e,l){for(let r=0;r<l;r++)if(n[t+r]!==n[e+r])return!1;return!0}function l(n,t,e,l,r){for(let o=0;o<r;o++)e[l+o]=n[t+o]}function r(n,t,e){let l=0;for(let r=0;r<e;r++)l=n[t+r]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let o=null;export{t as n};