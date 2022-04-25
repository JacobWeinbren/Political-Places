import{r as e,a8 as t}from"../main.js";import{B as n,N as r,Z as o}from"./rasterProjectionHelper-589555c9.js";const l=new Map,c=new class{constructor(e=15e3,t=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=e,this._interval=Math.min(e,t)}decreaseRefCount(e,t){const n=e+"/"+t,r=this._cachedBlocks;if(r.has(n)){const e=r.get(n);return e.refCount--,e.refCount<=0&&(r.delete(n),e.controller&&e.controller.abort()),e.refCount}return 0}getBlock(e,t){const n=e+"/"+t,r=this._cachedBlocks;if(r.has(n)){const e=r.get(n);return e.ts=Date.now(),e.refCount++,r.delete(n),r.set(n,e),e.block}return null}putBlock(e,t,n,r=null){const o=this._cachedBlocks,l=e+"/"+t;if(o.has(l)){const e=o.get(l);e.ts=Date.now(),e.refCount++}else o.set(l,{block:n,ts:Date.now(),refCount:1,controller:r});this._trim(),this._updateTimer()}deleteBlock(e,t){const n=this._cachedBlocks,r=e+"/"+t;n.has(r)&&n.delete(r)}updateMaxSize(e){this._size=e,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(null!=this._timer)return;const e=this._cachedBlocks;this._timer=setInterval((()=>{const t=Array.from(e),n=Date.now();for(let r=0;r<t.length&&t[r][1].ts<=n-this._duration;r++)e.delete(t[r][0]);0===e.size&&this._clearTimer()}),this._interval)}_trim(){const e=this._cachedBlocks;if(-1===this._size||this._size>=e.size)return;const t=Array.from(e);for(let n=0;n<t.length-this._size;n++)e.delete(t[n][0])}_clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null)}};function s(e,t){return null==t?e:`${e}?sliceId=${t}`}function i(e,t){const n={extent:null,rasterInfo:t,cache:new Map};if(l.has(e)){const t=l.get(e);return t.push(n),t.length-1}return l.set(e,[n]),0}function a(e,t){if(l.has(e)){const n=l.get(e);n[t]=null,n.some((e=>null!=e))||l.delete(e)}}function h(e,t,n){if(!l.has(e))return null==t?c.decreaseRefCount(e,n):0;const r=l.get(e);if(null==r[t])return c.decreaseRefCount(e,n);const o=r[t].cache;if(o.has(n)){const e=o.get(n);if(e.refCount--,0===e.refCount){o.delete(n);for(let e=0;e<r.length;e++)r[e]&&r[e].cache.has(n)&&r[e].cache.delete(n);e.controller&&e.controller.abort()}return e.refCount}return 0}function u(e,t,n){if(!l.has(e))return null==t?c.getBlock(e,n):null;const r=l.get(e);if(null==r[t]){for(let e=0;e<r.length;e++)if(r[e]&&r[e].cache.has(n)){const t=r[e].cache.get(n);return t.refCount++,t.block}return c.getBlock(e,n)}const o=r[t].cache;if(o.has(n)){const e=o.get(n);return e.refCount++,e.block}for(let e=0;e<r.length;e++)if(e!==t&&r[e]&&r[e]&&r[e].cache.has(n)){const t=r[e].cache.get(n);return t.refCount++,o.set(n,t),t.block}return null}function f(e,t,n,r,o=null){if(!l.has(e))return void(null==t&&c.putBlock(e,n,r,o));const s=l.get(e);if(null==s[t])return void c.putBlock(e,n,r,o);const i={refCount:1,block:r,isResolved:!1,isRejected:!1,controller:o};r.then((()=>i.isResolved=!0)).catch((()=>i.isRejected=!0)),s[t].cache.set(n,i)}function m(e,t,n){if(!l.has(e))return void(null==t&&c.deleteBlock(e,n));const r=l.get(e);null!=r[t]?r[t].cache.delete(n):c.deleteBlock(e,n)}function d(e,t){if(!l.has(e))return null;const n=l.get(e);return null==n[t]?null:n[t]}function x(l,c,s,i,a,h,u=null){const f=d(l,c),m=f.extent,{cache:x,rasterInfo:_}=f;if(m&&m.xmin===s.xmin&&m.xmax===s.xmax&&m.ymin===s.ymin&&m.ymax===s.ymax)return;const g=s.clone().normalize(),{spatialReference:k,transform:y}=_,p=new Set;for(let l=0;l<g.length;l++){const c=g[l];if(c.xmax-c.xmin<=i||c.ymax-c.ymin<=i)continue;let s=n(c,k,u);e(y)&&(s=y.inverseTransform(s));const f=new t({x:i,y:i,spatialReference:c.spatialReference});if(null==a&&!(a=r(f,k,c,u)))return;const{pyramidLevel:m,pyramidResolution:d,excessiveReading:x}=o(a,_,h||"closest");if(x)return;const{storageInfo:B}=_,{origin:C}=B,M={x:Math.max(0,Math.floor((s.xmin-C.x)/d.x)),y:Math.max(0,Math.floor((C.y-s.ymax)/d.y))},R=Math.ceil((s.xmax-s.xmin)/d.x-.1),v=Math.ceil((s.ymax-s.ymin)/d.y-.1),z=m>0?B.pyramidBlockWidth:B.blockWidth,b=m>0?B.pyramidBlockHeight:B.blockHeight,w=1,j=Math.max(0,Math.floor(M.x/z)-w),I=Math.max(0,Math.floor(M.y/b)-w),T=Math.floor((M.x+R-1)/z)+w,$=Math.floor((M.y+v-1)/b)+w;for(let e=I;e<=$;e++)for(let t=j;t<=T;t++)p.add(`${m}/${e}/${t}`)}x.forEach(((e,t)=>{if(!p.has(t)){const e=x.get(t);(null==e||e.isResolved||e.isRejected)&&x.delete(t)}})),f.extent={xmin:s.xmin,ymin:s.ymin,xmax:s.xmax,ymax:s.ymax}}export{m as d,x as g,h,s as i,u as m,i as s,a as u,f as x};
