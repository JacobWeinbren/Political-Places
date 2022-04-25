import{c5 as e,gV as t,r as n}from"../main.js";import"./vec4f64-cad87e7c.js";var o,r;function i(t){return e(`esri/libs/i3s/${t}`)}let s;var a,f,c,l,u;async function d(e){await P();const t=[e.geometryBuffer];return{result:L(e,t),transferList:t}}async function m(e){var n;await P();const o=[e.geometryBuffer],{geometryBuffer:r}=e,i=r.byteLength,s=g._malloc(i),a=new Uint8Array(g.HEAPU8.buffer,s,i);a.set(new Uint8Array(r));const f=g.dracoDecompressPointCloudData(s,a.byteLength);if(g._free(s),f.error.length>0)throw`i3s.wasm: ${f.error}`;const c=(null==(n=f.featureIds)?void 0:n.length)>0?t(f.featureIds):null,l=t(f.positions);return c&&o.push(c.buffer),o.push(l.buffer),{result:{positions:l,featureIds:c},transferList:o}}async function y(e){await P(),A(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function b(e){await P(),w(e)}async function h(e){await P(),g.setLegacySchema(e.context,e.jsonSchema)}function E(e){I(e)}let p,g;function w(e){const t=e.modifications,n=g._malloc(8*t.length),o=new Float64Array(g.HEAPU8.buffer,n,t.length);for(let e=0;e<t.length;++e)o[e]=t[e];g.setModifications(e.context,n,t.length,e.isGeodetic),g._free(n)}function L(e,r){if(!g)return null;const{context:i,localOrigin:s,globalTrafo:a,mbs:f,obb:c,elevationOffset:l,geometryBuffer:u,geometryDescriptor:d,indexToVertexProjector:m,vertexToRenderProjector:y}=e,b=g._malloc(u.byteLength),h=g._malloc(33*Float64Array.BYTES_PER_ELEMENT),E=new Uint8Array(g.HEAPU8.buffer,b,u.byteLength);E.set(new Uint8Array(u));const p=new Float64Array(g.HEAPU8.buffer,h,33);_(p,s);let w=p.byteOffset+3*p.BYTES_PER_ELEMENT,L=new Float64Array(p.buffer,w);_(L,a),w+=16*p.BYTES_PER_ELEMENT,L=new Float64Array(p.buffer,w),_(L,f),w+=4*p.BYTES_PER_ELEMENT,n(c)&&(L=new Float64Array(p.buffer,w),_(L,c.center),w+=3*p.BYTES_PER_ELEMENT,L=new Float64Array(p.buffer,w),_(L,c.halfSize),w+=3*p.BYTES_PER_ELEMENT,L=new Float64Array(p.buffer,w),_(L,c.quaternion));const U=d,A={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:U.featureIndex},I=g.process(i,!!e.obb,b,E.byteLength,U,A,h,l,m,y,e.normalReferenceFrame);if(g._free(h),g._free(b),I.error.length>0)throw`i3s.wasm: ${I.error}`;if(I.discarded)return null;const P=I.componentOffsets.length>0?t(I.componentOffsets):null,F=I.featureIds.length>0?t(I.featureIds):null,R=t(I.interleavedVertedData).buffer,T=I.indicesType===o.Int16?t(new Uint16Array(I.indices.buffer,I.indices.byteOffset,I.indices.byteLength/2)):t(new Uint32Array(I.indices.buffer,I.indices.byteOffset,I.indices.byteLength/4)),M=t(I.positions),C=I.positionIndicesType===o.Int16?t(new Uint16Array(I.positionIndices.buffer,I.positionIndices.byteOffset,I.positionIndices.byteLength/2)):t(new Uint32Array(I.positionIndices.buffer,I.positionIndices.byteOffset,I.positionIndices.byteLength/4)),S={layout:e.layouts[0],interleavedVertexData:R,indices:T,hasColors:I.hasColors,hasModifications:I.hasModifications,positionData:{data:M,indices:C}};return F&&r.push(F.buffer),P&&r.push(P.buffer),r.push(R),r.push(T.buffer),r.push(M.buffer),r.push(C.buffer),{componentOffsets:P,featureIds:F,transformedGeometry:S,obb:I.obb}}function U(e){return 0===e?f.Unmodified:1===e?f.PotentiallyModified:2===e?f.Culled:f.Unknown}function A(e){const{context:t,buffer:n}=e,o=g._malloc(n.byteLength),r=n.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(g.HEAPU8.buffer,o,r),s=new Float64Array(n);i.set(s),g.filterOBBs(t,o,r),s.set(i),g._free(o)}function I(e){g&&g.destroy(e)}function _(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function P(){return g?Promise.resolve():(p||(p=(s||(s=new Promise((e=>import("./i3s-77233470.js").then((e=>e.i)).then((({default:t})=>{const n=t({locateFile:i,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>Promise.reject(e)))),s).then((e=>{g=e,p=null}))),p)}!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(o||(o={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(r||(r={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(a||(a={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(f||(f={})),function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(c||(c={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(l||(l={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(u||(u={}));const F={transform:L,destroy:I};export{E as destroyContext,m as dracoDecompressPointCloudData,y as filterObbsForModifications,A as filterObbsForModificationsSync,P as initialize,U as interpretObbModificationResults,d as process,h as setLegacySchema,b as setModifications,w as setModificationsSync,F as test};
