import{dK as n}from"../main.js";function e(n,e,r){const o=e.flatten((({sublayers:n})=>n)).length;return o!==n.length||(!!n.some((n=>n.originIdOf("minScale")>r||n.originIdOf("maxScale")>r||n.originIdOf("renderer")>r||n.originIdOf("labelingInfo")>r||n.originIdOf("opacity")>r||n.originIdOf("labelsVisible")>r||n.originIdOf("source")>r))||!i(n,e))}function r(e,r,o){return!!e.some((e=>{const r=e.source;return!(!r||"map-layer"===r.type&&r.mapLayerId===e.id&&(!r.gdbVersion||r.gdbVersion===o.gdbVersion))||e.originIdOf("renderer")>n.SERVICE||e.originIdOf("labelingInfo")>n.SERVICE||e.originIdOf("opacity")>n.SERVICE||e.originIdOf("labelsVisible")>n.SERVICE}))||!i(e,r)}function i(n,e){if(!n||!n.length)return!0;const r=e.slice().reverse().flatten((({sublayers:n})=>n&&n.toArray().reverse())).map((n=>n.id)).toArray();if(n.length>r.length)return!1;let i=0;const o=r.length;for(const{id:e}of n){for(;i<o&&r[i]!==e;)i++;if(i>=o)return!1}return!0}function o(n){return!!n&&n.some((n=>null!=n.minScale||n.layerDefinition&&null!=n.layerDefinition.minScale))}export{e,r as n,o};