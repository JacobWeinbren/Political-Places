import{L as t,u as e}from"../main.js";function i(i,n,h){const a=i.thumbnail&&i.thumbnail.url;return a?t(a,{responseType:"image"}).then((t=>{const i=function(t,i){const n=!/\\.svg$/i.test(t.src)&&i&&i.disableUpsampling,h=Math.max(t.width,t.height);let a=i&&null!=i.maxSize?e(i.maxSize):120;n&&(a=Math.min(h,a));const o=Math.min(a,i&&null!=i.size?e(i.size):h);if(o!==h){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=o,t.height=o/e):(t.width=o*e,t.height=o)}return t}(t.data,h);return h&&h.node?(h.node.appendChild(i),h.node):i})):i.fetchSymbol().then((t=>n(t,h)))}export{i as previewWebStyleSymbol};
