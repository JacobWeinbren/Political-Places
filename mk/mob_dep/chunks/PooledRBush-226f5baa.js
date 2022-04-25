import{eo as t,fg as i,fh as n,fi as e,fj as h}from"../main.js";class s{constructor(t=9,i){this.compareMinX=l,this.compareMinY=c,this._toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),g.prune(),M.prune(),X.prune(),Y.prune()}all(t){this._all(this.data,t)}search(t,i){let n=this.data;const e=this._toBBox;if(p(t,n))for(g.clear();n;){for(let h=0,s=n.children.length;h<s;h++){const s=n.children[h],a=n.leaf?e(s):s;p(t,a)&&(n.leaf?i(s):x(t,a)?this._all(s,i):g.push(s))}n=g.pop()}}collides(t){let i=this.data;const n=this._toBBox;if(!p(t,i))return!1;for(g.clear();i;){for(let e=0,h=i.children.length;e<h;e++){const h=i.children[e],s=i.leaf?n(h):h;if(p(t,s)){if(i.leaf||x(t,s))return!0;g.push(h)}}i=g.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){const t=this.data;this.data=i,i=t}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new w([]),this}remove(t){if(!t)return this;let e,h=this.data,s=null,a=0,r=!1;const o=this._toBBox(t);for(X.clear(),Y.clear();h||X.length>0;){var l;if(h||(h=i(X.pop()),s=X.data[X.length-1],a=null!=(l=Y.pop())?l:0,r=!0),h.leaf&&(e=n(h.children,t,h.children.length,h.indexHint),-1!==e))return h.children.splice(e,1),X.push(h),this._condense(X),this;r||h.leaf||!x(h,o)?s?(a++,h=s.children[a],r=!1):h=null:(X.push(h),Y.push(a),a=0,s=h,h=h.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,i){let n=t;for(M.clear();n;){var e;if(!0===n.leaf)for(const t of n.children)i(t);else M.pushArray(n.children);n=null!=(e=M.pop())?e:null}}_build(t,i,n,e){const h=n-i+1;let s=this._maxEntries;if(h<=s){const e=new w(t.slice(i,n+1));return a(e,this._toBBox),e}e||(e=Math.ceil(Math.log(h)/Math.log(s)),s=Math.ceil(h/s**(e-1)));const r=new b([]);r.height=e;const o=Math.ceil(h/s),l=o*Math.ceil(Math.sqrt(s));_(t,i,n,l,this.compareMinX);for(let h=i;h<=n;h+=l){const i=Math.min(h+l-1,n);_(t,h,i,o,this.compareMinY);for(let n=h;n<=i;n+=o){const h=Math.min(n+o-1,i);r.children.push(this._build(t,n,h,e-1))}}return a(r,this._toBBox),r}_chooseSubtree(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,h=1/0;for(let s=0,a=i.children.length;s<a;s++){const a=i.children[s],r=m(a),o=d(t,a)-r;o<h?(h=o,e=r<e?r:e,n=a):o===h&&r<e&&(e=r,n=a)}i=n||i.children[0]}return i}_insert(t,i,n){const e=this._toBBox,h=n?t:e(t);X.clear();const s=this._chooseSubtree(h,this.data,i,X);for(s.children.push(t),o(s,h);i>=0&&X.data[i].children.length>this._maxEntries;)this._split(X,i),i--;this._adjustParentBBoxes(h,X,i)}_split(t,i){const n=t.data[i],e=n.children.length,h=this._minEntries;this._chooseSplitAxis(n,h,e);const s=this._chooseSplitIndex(n,h,e);if(!s)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(s,n.children.length-s),o=n.leaf?new w(r):new b(r);o.height=n.height,a(n,this._toBBox),a(o,this._toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,i){this.data=new b([t,i]),this.data.height=t.height+1,a(this.data,this._toBBox)}_chooseSplitIndex(t,i,n){let e,h,s;e=h=1/0;for(let a=i;a<=n-i;a++){const i=r(t,0,a,this._toBBox),o=r(t,a,n,this._toBBox),l=f(i,o),c=m(i)+m(o);l<e?(e=l,s=a,h=c<h?c:h):l===e&&c<h&&(h=c,s=a)}return s}_chooseSplitAxis(t,i,n){const e=t.leaf?this.compareMinX:l,h=t.leaf?this.compareMinY:c;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,h)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const h=this._toBBox,s=r(t,0,i,h),a=r(t,n-i,n,h);let l=u(s)+u(a);for(let e=i;e<n-i;e++){const i=t.children[e];o(s,t.leaf?h(i):i),l+=u(s)}for(let e=n-i-1;e>=i;e--){const i=t.children[e];o(a,t.leaf?h(i):i),l+=u(a)}return l}_adjustParentBBoxes(t,i,n){for(let e=n;e>=0;e--)o(i.data[e],t)}_condense(t){for(let i=t.length-1;i>=0;i--){const e=t.data[i];if(0===e.children.length)if(i>0){const h=t.data[i-1],s=h.children;s.splice(n(s,e,s.length,h.indexHint),1)}else this.clear();else a(e,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,i){r(t,0,t.children.length,i,t)}function r(t,i,n,e,h){h||(h=new w([])),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(let s,a=i;a<n;a++)s=t.children[a],o(h,t.leaf?e(s):s);return h}function o(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function l(t,i){return t.minX-i.minX}function c(t,i){return t.minY-i.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function f(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),h=Math.min(t.maxX,i.maxX),s=Math.min(t.maxY,i.maxY);return Math.max(0,h-n)*Math.max(0,s-e)}function x(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function p(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function _(t,n,h,s,a){const r=[n,h];for(;r.length;){const n=i(r.pop()),h=i(r.pop());if(n-h<=s)continue;const o=h+Math.ceil((n-h)/s/2)*s;e(t,o,h,n,a),r.push(h,o,o,n)}}const g=new t,M=new t,X=new t,Y=new t({deallocator:void 0});class B extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new h}}class w extends B{constructor(t){super(),this.children=t,this.leaf=!0}}class b extends B{constructor(t){super(),this.children=t,this.leaf=!1}}export{s as h};