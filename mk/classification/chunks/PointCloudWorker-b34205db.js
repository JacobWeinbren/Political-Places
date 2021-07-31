import{a as e,n as t,b2 as r,r as n,t as o,g0 as i,aR as a,fa as s,g1 as c}from"../main.js";import{w as l}from"./quat-03f628ae.js";import{t as u,n as f}from"./vec3f32-76b0f595.js";import{a as d,b,d as g}from"./PointCloudUniqueValueRenderer-61332c2c.js";import"./vec4-92f0d9d2.js";function y(){const e=new Float32Array(4);return e[3]=1,e}Object.freeze({__proto__:null,create:y,clone:function(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,r,n){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o},createView:function(e,t){return new Float32Array(e,t,4)}});const w=!0,p=0,h=10,m=10,U=12,v=16;function C(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+p,h)),version:t.getUint16(r+m,w),checksum:t.getUint32(r+U,w)}}const A=0,I=4,M=8,F=16,O=24,B=32,S=40,T=48,z=56,x=64,D=72,L=80,V=84,k=88;function E(e,t){return{sizeLo:e.getUint32(t+A,w),sizeHi:e.getUint32(t+I,w),minX:e.getFloat64(t+M,w),minY:e.getFloat64(t+F,w),minZ:e.getFloat64(t+O,w),maxX:e.getFloat64(t+B,w),maxY:e.getFloat64(t+S,w),maxZ:e.getFloat64(t+T,w),errorX:e.getFloat64(t+z,w),errorY:e.getFloat64(t+x,w),errorZ:e.getFloat64(t+D,w),count:e.getUint32(t+L,w),reserved:e.getUint32(t+V,w)}}function P(t){const r=new DataView(t,0);let n=0;const{identifier:o,version:i}=C(t,r,n);if(n+=v,"LEPCC     "!==o)throw new e("lepcc-decode-error","Bad identifier");if(i>1)throw new e("lepcc-decode-error","Unknown version");const a=E(r,n);if(n+=k,a.sizeHi*2**32+a.sizeLo!==t.byteLength)throw new e("lepcc-decode-error","Bad size");const s=new Float64Array(3*a.count),c=[],l=[],u=[],f=[];if(n=R(t,n,c),n=R(t,n,l),n=R(t,n,u),n=R(t,n,f),n!==t.byteLength)throw new e("lepcc-decode-error","Bad length");let d=0,b=0;for(let e=0;e<c.length;e++){b+=c[e];let t=0;for(let r=0;r<l[e];r++){t+=u[d];const e=f[d];s[3*d]=Math.min(a.maxX,a.minX+2*a.errorX*t),s[3*d+1]=Math.min(a.maxY,a.minY+2*a.errorY*b),s[3*d+2]=Math.min(a.maxZ,a.minZ+2*a.errorZ*e),d++}}return{errorX:a.errorX,errorY:a.errorY,errorZ:a.errorZ,result:s}}function R(e,t,r){const n=[];t=_(e,t,n);const o=[];for(let i=0;i<n.length;i++){o.length=0,t=_(e,t,o);for(let e=0;e<o.length;e++)r.push(o[e]+n[i])}return t}function _(t,r,n){const o=new DataView(t,r),i=o.getUint8(0),a=31&i,s=!!(32&i),c=(192&i)>>6;let l=0;if(0===c)l=o.getUint32(1,w),r+=5;else if(1===c)l=o.getUint16(1,w),r+=3;else{if(2!==c)throw new e("lepcc-decode-error","Bad count type");l=o.getUint8(1),r+=2}if(s)throw new e("lepcc-decode-error","LUT not implemented");const u=Math.ceil(l*a/8),f=new Uint8Array(t,r,u);let d=0,b=0,g=0;const y=-1>>>32-a;for(let e=0;e<l;e++){for(;b<a;)d|=f[g]<<b,b+=8,g+=1;n[e]=d&y,d>>>=a,b-=a,b+a>32&&(d|=f[g-1]>>8-b)}return r+g}const j=0,Y=4,X=8,Z=12,N=14,q=15,J=16;function H(e,t){return{sizeLo:e.getUint32(t+j,w),sizeHi:e.getUint32(t+Y,w),count:e.getUint32(t+X,w),colorMapCount:e.getUint16(t+Z,w),lookupMethod:e.getUint8(t+N),compressionMethod:e.getUint8(t+q)}}const $=0,G=4,W=8,K=12,Q=14,ee=15,te=16;function re(e,t){return{sizeLo:e.getUint32(t+$,w),sizeHi:e.getUint32(t+G,w),count:e.getUint32(t+W,w),scaleFactor:e.getUint16(t+K,w),bitsPerPoint:e.getUint8(t+Q),reserved:e.getUint8(t+ee)}}const ne=t.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function oe(t,r,n){let o="",i=0;for(;i<n;){const a=t[r+i];if(a<128)o+=String.fromCharCode(a),i++;else if(a>=192&&a<224){if(i+1>=n)throw new e("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const s=(31&a)<<6|63&t[r+i+1];o+=String.fromCharCode(s),i+=2}else if(a>=224&&a<240){if(i+2>=n)throw new e("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(15&a)<<12|(63&t[r+i+1])<<6|63&t[r+i+2];o+=String.fromCharCode(s),i+=3}else{if(!(a>=240&&a<248))throw new e("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new e("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(7&a)<<18|(63&t[r+i+1])<<12|(63&t[r+i+2])<<6|63&t[r+i+3];if(s>=65536){const e=55296+(s-65536>>10),t=56320+(1023&s);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(s);i+=4}}}return o}function ie(e,t){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let n=0;for(let o=0;o<t.length;o++){const i=t[o],a=i.valueType||i.type,s=fe[a];r.fields[i.property]=s(e,n),n+=ue[a].BYTES_PER_ELEMENT}return r.byteCount=n,r}function ae(e,t){return new ue[t.valueType](e,t.byteOffset,t.count*t.valuesPerElement)}function se(t,r,n){if(r!==t&&ne.error(`Invalid ${n} buffer size\n expected: ${t}, actual: ${r})`),r<t)throw new e("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:r})}const ce={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function le(t,n,o){if("lepcc-rgb"===t.encoding)return function(t){const r=new DataView(t,0);let n=0;const{identifier:o,version:i}=C(t,r,n);if(n+=v,"ClusterRGB"!==o)throw new e("lepcc-decode-error","Bad identifier");if(i>1)throw new e("lepcc-decode-error","Unknown version");const a=H(r,n);if(n+=J,a.sizeHi*2**32+a.sizeLo!==t.byteLength)throw new e("lepcc-decode-error","Bad size");if((2===a.lookupMethod||1===a.lookupMethod)&&0===a.compressionMethod){if(3*a.colorMapCount+a.count+n!==t.byteLength||a.colorMapCount>256)throw new e("lepcc-decode-error","Bad count");const r=new Uint8Array(t,n,3*a.colorMapCount),o=new Uint8Array(t,n+3*a.colorMapCount,a.count),i=new Uint8Array(3*a.count);for(let e=0;e<a.count;e++){const t=o[e];i[3*e]=r[3*t],i[3*e+1]=r[3*t+1],i[3*e+2]=r[3*t+2]}return i}if(0===a.lookupMethod&&0===a.compressionMethod){if(3*a.count+n!==t.byteLength||0!==a.colorMapCount)throw new e("lepcc-decode-error","Bad count");return new Uint8Array(t,n).slice()}if(a.lookupMethod<=2&&1===a.compressionMethod){if(n+3!==t.byteLength||1!==a.colorMapCount)throw new e("lepcc-decode-error","Bad count");const o=r.getUint8(n),i=r.getUint8(n+1),s=r.getUint8(n+2),c=new Uint8Array(3*a.count);for(let e=0;e<a.count;e++)c[3*e]=o,c[3*e+1]=i,c[3*e+2]=s;return c}throw new e("lepcc-decode-error","Bad method "+a.lookupMethod+","+a.compressionMethod)}(n);if("lepcc-intensity"===t.encoding)return function(t){const r=new DataView(t,0);let n=0;const{identifier:o,version:i}=C(t,r,n);if(n+=v,"Intensity "!==o)throw new e("lepcc-decode-error","Bad identifier");if(i>1)throw new e("lepcc-decode-error","Unknown version");const a=re(r,n);if(n+=te,a.sizeHi*2**32+a.sizeLo!==t.byteLength)throw new e("lepcc-decode-error","Bad size");const s=new Uint16Array(a.count);if(8===a.bitsPerPoint){if(a.count+n!==t.byteLength)throw new e("lepcc-decode-error","Bad size");const r=new Uint8Array(t,n,a.count);for(let e=0;e<a.count;e++)s[e]=r[e]*a.scaleFactor}else if(16===a.bitsPerPoint){if(2*a.count+n!==t.byteLength)throw new e("lepcc-decode-error","Bad size");const r=new Uint16Array(t,n,a.count);for(let e=0;e<a.count;e++)s[e]=r[e]*a.scaleFactor}else{const r=[];if(_(t,n,r)!==t.byteLength)throw new e("lepcc-decode-error","Bad size");for(let e=0;e<a.count;e++)s[e]=r[e]*a.scaleFactor}return s}(n);if(null!=t.encoding&&""!==t.encoding)throw new e("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(ne.warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(ne.warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const i=function(t,n,o){const i=null!=n.header?ie(t,n.header):{byteOffset:0,byteCount:0,fields:{count:o}},a={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let s=i.byteCount;for(let t=0;t<n.ordering.length;t++){const o=n.ordering[t],c=r(n[o]);if(c.count=i.fields.count,"String"===c.valueType){if(c.byteOffset=s,c.byteCount=i.fields[o+"ByteCount"],"UTF-8"!==c.encoding)throw new e("unsupported-encoding","Unsupported String encoding.",{encoding:c.encoding})}else{if(!de(c.valueType))throw new e("unsupported-value-type","Unsupported binary valueType",{valueType:c.valueType});{const e=be(c.valueType);s+=s%e!=0?e-s%e:0,c.byteOffset=s,c.byteCount=e*c.valuesPerElement*c.count}}s+=c.byteCount,a.entries[o]=c}return a.byteCount=s-a.byteOffset,a}(n,t,o);se(i.byteOffset+i.byteCount,n.byteLength,"attribute");const a=i.entries.attributeValues||i.entries.objectIds;if(a){if("String"===a.valueType){const t=i.entries.attributeByteCounts,r=ae(n,t),o=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(n,a);return function(t,r,n){const o=[];let i,a,s=0;for(a=0;a<t;a+=1){if(i=r[a],i>0){if(o.push(oe(n,s,i-1)),0!==n[s+i-1])throw new e("string-array-error","Invalid string array: missing null termination.")}else o.push(null);s+=i}return o}(t.count,r,o)}return ae(n,a)}throw new e("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const ue={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},fe={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function de(e){return ue.hasOwnProperty(e)}function be(e){return de(e)?ue[e].BYTES_PER_ELEMENT:0}function ge(e,t){if(null==e.encoding||""===e.encoding){const r=function(e,t){const r=ie(e,t&&t.header);let n=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},i=r.fields,a=null!=i.vertexCount?i.vertexCount:i.count;for(const e of t.ordering){if(!t.vertexAttributes[e])continue;const r={...t.vertexAttributes[e],byteOffset:n,count:a},i=ce[e]?ce[e]:"_"+e;o.vertexAttributes[i]=r,n+=be(r.valueType)*r.valuesPerElement*a}const s=i.faceCount;if(t.faces&&s){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const r={...t.faces[e],byteOffset:n,count:s};o.faces[e]=r,n+=be(r.valueType)*r.valuesPerElement*s}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const r={...t.featureAttributes[e],byteOffset:n,count:c};o.featureAttributes[e]=r,n+=("UInt64"===r.valueType?8:be(r.valueType))*r.valuesPerElement*c}}return se(n,e.byteLength,"geometry"),o.byteCount=n-o.byteOffset,o}(t,e);if(o(r.vertexAttributes.position))return;const n=ae(t,r.vertexAttributes.position),i=r.header.fields,a=[i.offsetX,i.offsetY,i.offsetZ],s=[i.scaleX,i.scaleY,i.scaleZ],c=n.length/3,l=new Float64Array(3*c);for(let e=0;e<c;e++)l[3*e]=n[3*e]*s[0]+a[0],l[3*e+1]=n[3*e+1]*s[1]+a[1],l[3*e+2]=n[3*e+2]*s[2]+a[2];return l}if("lepcc-xyz"===e.encoding)return P(t).result}function ye(e,t,r){return n(e)&&e.attributeInfo.useElevation?function(e,t){const r=new Float64Array(t);for(let n=0;n<t;n++)r[n]=e[3*n+2];return r}(t,r):n(e)?le(e.attributeInfo.storageInfo,e.buffer,r):null}function we(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function pe(e){let t=0;for(const r of e||[])t|=1<<r;return t}class he{transform(e){const t=this._transform(e),r=[t.points.buffer,t.rgb.buffer];n(t.pointIdFilterMap)&&r.push(t.pointIdFilterMap.buffer);for(const e of t.attributes)"buffer"in e.values&&i(e.values.buffer)&&e.values.buffer!==t.rgb.buffer&&r.push(e.values.buffer);return Promise.resolve({result:t,transferList:r})}_transform(e){const t=ge(e.schema,e.geometryBuffer);let r=t.length/3,o=null;const i=[],s=ye(e.primaryAttributeData,t,r);n(e.primaryAttributeData)&&s&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:s});const c=ye(e.modulationAttributeData,t,r);n(e.modulationAttributeData)&&c&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:c});let l=function(e,t,r,n){const{rendererJSON:o,isRGBRenderer:i}=e;let a=null,s=null;if(t&&i)a=t;else if(t&&"pointCloudUniqueValueRenderer"===o.type){s=d.fromJSON(o);const e=s.colorUniqueValueInfos;a=new Uint8Array(3*n);const r=we(s.fieldTransformType);for(let o=0;o<n;o++){const n=(r?r(t[o]):t[o])+"";for(let t=0;t<e.length;t++)if(e[t].values.indexOf(n)>=0){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===o.type){s=b.fromJSON(o);const e=s.stops;a=new Uint8Array(3*n);const r=we(s.fieldTransformType);for(let o=0;o<n;o++){const n=r?r(t[o]):t[o],i=e.length-1;if(n<e[0].value)a[3*o]=e[0].color.r,a[3*o+1]=e[0].color.g,a[3*o+2]=e[0].color.b;else if(n>=e[i].value)a[3*o]=e[i].color.r,a[3*o+1]=e[i].color.g,a[3*o+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(n<e[t].value){const r=(n-e[t-1].value)/(e[t].value-e[t-1].value);a[3*o]=e[t].color.r*r+e[t-1].color.r*(1-r),a[3*o+1]=e[t].color.g*r+e[t-1].color.g*(1-r),a[3*o+2]=e[t].color.b*r+e[t-1].color.b*(1-r);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o.type){s=g.fromJSON(o);const e=s.colorClassBreakInfos;a=new Uint8Array(3*n);const r=we(s.fieldTransformType);for(let o=0;o<n;o++){const n=r?r(t[o]):t[o];for(let t=0;t<e.length;t++)if(n>=e[t].minValue&&n<=e[t].maxValue){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else{a=new Uint8Array(3*n);for(let e=0;e<a.length;e++)a[e]=255}if(r&&s&&s.colorModulation){const e=s.colorModulation.minValue,t=s.colorModulation.maxValue,o=.3;for(let i=0;i<n;i++){const n=r[i],s=n>=t?1:n<=e?o:o+(1-o)*(n-e)/(t-e);a[3*i]=s*a[3*i],a[3*i+1]=s*a[3*i+1],a[3*i+2]=s*a[3*i+2]}}return a}(e.rendererInfo,s,c,r);if(e.filterInfo&&e.filterInfo.length>0&&n(e.filterAttributesData)){const n=e.filterAttributesData.map((e=>{const n=ye(e,t,r),o={attributeInfo:e.attributeInfo,values:n};return i.push(o),o}));o=new Uint32Array(r),r=function(e,t,r,n,o){const i=e.length/3;let a=0;for(let s=0;s<i;s++){let i=!0;for(let e=0;e<n.length&&i;e++){const{filterJSON:t}=n[e],r=o[e].values[s];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;-1!==t.values.indexOf(r)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=pe(t.requiredSetBits),n=pe(t.requiredClearBits);(r&e)===e&&0==(r&n)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&r,n=r>>>4&15,o=n>1,a=1===e,s=e===n;let c=!1;for(const e of t.includedReturns)if("last"===e&&s||"firstOfMany"===e&&a&&o||"lastOfMany"===e&&s&&o||"single"===e&&!o){c=!0;break}c||(i=!1);break}}}i&&(r[a]=s,e[3*a]=e[3*s],e[3*a+1]=e[3*s+1],e[3*a+2]=e[3*s+2],t[3*a]=t[3*s],t[3*a+1]=t[3*s+1],t[3*a+2]=t[3*s+2],a++)}return a}(t,l,o,e.filterInfo,n)}for(const n of e.userAttributesData){const e=ye(n,t,r);i.push({attributeInfo:n.attributeInfo,values:e})}3*r<l.length&&(l=new Uint8Array(l.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(t,r,e.elevationOffset);const u=this._transformCoordinates(t,r,e.obb,a.fromJSON(e.inSR),a.fromJSON(e.outSR));return{obb:e.obb,points:u,rgb:l,attributes:i,pointIdFilterMap:o}}_transformCoordinates(e,t,r,n,o){if(!s(e,n,0,e,o,0,t))throw Error("Can't reproject");const i=u(r.center[0],r.center[1],r.center[2]),a=f(),d=f();l(me,r.quaternion);const b=new Float32Array(3*t);for(let n=0;n<t;n++)a[0]=e[3*n]-i[0],a[1]=e[3*n+1]-i[1],a[2]=e[3*n+2]-i[2],c(d,a,me),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(d[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(d[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(d[2])),b[3*n]=a[0],b[3*n+1]=a[1],b[3*n+2]=a[2];return b}_applyElevationOffsetInPlace(e,t,r){if(0!==r)for(let n=0;n<t;n++)e[3*n+2]+=r}}const me=y();function Ue(){return new he}export{Ue as default};
