import{ao as e,n as t,a as o,bp as i,bX as r,bY as n,bZ as a,u as l,b_ as s,b$ as c}from"../main.js";import{t as f,a as m,h as u,S as y}from"./CIMSymbolHelper-7d5efe80.js";import{U as p,v as h,q as g,k as d}from"./quantizationUtils-f6795336.js";function S(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers;return t&&1===t.length?S(t[0]):null}case"CIMVectorMarker":{const t=e.markerGraphics;if(!t||1!==t.length)return null;const o=t[0];if(!o)return null;const i=o.geometry;if(!i)return null;const r=o.symbol;return!r||"CIMPolygonSymbol"!==r.type&&"CIMLineSymbol"!==r.type?null:{geom:i,asFill:"CIMPolygonSymbol"===r.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function v(e){let t=1/0,o=-1/0,i=1/0,r=-1/0;for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>o&&(o=e[0]),e[1]<i&&(i=e[1]),e[1]>r&&(r=e[1]);return new f(t,i,o-t,r-i)}function b(e){let t=1/0,o=-1/0,i=1/0,r=-1/0;for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>o&&(o=e[0]),e[1]<i&&(i=e[1]),e[1]>r&&(r=e[1]);return[t,i,o,r]}function N(t){return t?t.rings?b(t.rings):t.paths?b(t.paths):e(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function k(e,t,o,i,r){const[n,a,l,s]=e;if(l<n||s<a)return[0,0,0];const c=l-n,f=s-a,m=Math.floor(31.5),u=(128-2*(m+1))/Math.max(c,f),y=Math.round(c*u)+2*m,p=Math.round(f*u)+2*m;let h=1;t&&(h=p/u/(t.ymax-t.ymin));let g=0,d=0;if(i)if(r){if(t&&o&&t.ymax-t.ymin>0){const e=(t.xmax-t.xmin)/(t.ymax-t.ymin);g=i.x/(o*e),d=i.y/o}}else g=i.x,d=i.y;return g=.5*(t.xmax+t.xmin)+g*(t.xmax-t.xmin),d=.5*(t.ymax+t.ymin)+d*(t.ymax-t.ymin),g-=n,d-=a,g*=u,d*=u,g+=m,d+=m,[h,g/y-.5,-(d/p-.5)]}function O(e){const t=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),o=v(t),i=Math.floor(31.5),r=(128-2*(i+1))/Math.max(o.width,o.height),n=Math.round(o.width*r)+2*i,a=Math.round(o.height*r)+2*i,l=[];for(const n of t)if(n&&n.length>1){const t=[];for(const e of n){let[n,a]=e;n-=o.x,a-=o.y,n*=r,a*=r,n+=i-.5,a+=i-.5,t.push([n,a])}if(e.asFill){const e=t.length-1;t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}l.push(t)}const s=function(e,t,o,i){const r=t*o,n=new Array(r),a=i*i+1;for(let e=0;e<r;++e)n[e]=a;for(const r of e){const e=r.length;for(let a=1;a<e;++a){const e=r[a-1],l=r[a];let s,c,f,m;e[0]<l[0]?(s=e[0],c=l[0]):(s=l[0],c=e[0]),e[1]<l[1]?(f=e[1],m=l[1]):(f=l[1],m=e[1]);let u=Math.floor(s)-i,y=Math.floor(c)+i,p=Math.floor(f)-i,h=Math.floor(m)+i;u<0&&(u=0),y>t&&(y=t),p<0&&(p=0),h>o&&(h=o);const g=l[0]-e[0],d=l[1]-e[1],S=g*g+d*d;for(let i=u;i<y;i++)for(let r=p;r<h;r++){let a,s,c=(i-e[0])*g+(r-e[1])*d;c<0?(a=e[0],s=e[1]):c>S?(a=l[0],s=l[1]):(c/=S,a=e[0]+c*g,s=e[1]+c*d);const f=(i-a)*(i-a)+(r-s)*(r-s),m=(o-r-1)*t+i;f<n[m]&&(n[m]=f)}}}for(let e=0;e<r;++e)n[e]=Math.sqrt(n[e]);return n}(l,n,a,i);return e.asFill&&function(e,t,o,i,r){for(const n of e){const e=n.length;for(let a=1;a<e;++a){const e=n[a-1],l=n[a];let s,c,f,m;e[0]<l[0]?(s=e[0],c=l[0]):(s=l[0],c=e[0]),e[1]<l[1]?(f=e[1],m=l[1]):(f=l[1],m=e[1]);let u=Math.floor(s),y=Math.floor(c)+1,p=Math.floor(f),h=Math.floor(m)+1;u<i&&(u=i),y>t-i&&(y=t-i),p<i&&(p=i),h>o-i&&(h=o-i);for(let n=p;n<h;++n){if(e[1]>n==l[1]>n)continue;const a=(o-n-1)*t;for(let t=u;t<y;++t)t<(l[0]-e[0])*(n-e[1])/(l[1]-e[1])+e[0]&&(r[a+t]=-r[a+t]);for(let e=i;e<u;++e)r[a+e]=-r[a+e]}}}}(l,n,a,i,s),[C(s,i),n,a]}function C(e,t){const o=2*t,i=e.length,r=new Uint8Array(4*i);for(let t=0;t<i;++t){const i=.5-e[t]/o;m(i,r,4*t)}return r}function x(e,o,i,r,n){const a=e.referencesGeometry()&&n?P(o,r,n):o,l=e.repurposeFeature(a);try{return e.evaluate({...i,$feature:l})}catch(e){return t.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}const M=new Map;function P(e,t,o){const{transform:i,hasZ:r,hasM:n}=o;M.has(t)||M.set(t,L(t));const a=M.get(t)(e.geometry,i,r,n);return{...e,geometry:a}}function L(e){const i={};switch(e){case"esriGeometryPoint":return(e,t,o,r)=>d(t,i,e,o,r);case"esriGeometryPolygon":return(e,t,o,r)=>g(t,i,e,o,r);case"esriGeometryPolyline":return(e,t,o,r)=>h(t,i,e,o,r);case"esriGeometryMultipoint":return(e,t,o,r)=>p(t,i,e,o,r);default:return t.getLogger("esri.views.2d.support.arcadeOnDemand").error(new o("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}const w=t.getLogger("esri.symbols.cim.cimAnalyzer");function I(e){switch(e){case"Butt":return 0;case"Square":return 2;case"Round":default:return 1}}function X(e){switch(e){case"Bevel":return 0;case"Miter":return 2;case"Round":default:return 1}}function z(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function J(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function H(e,t,o,i){let r;e[t]?r=e[t]:(r={},e[t]=r),r[o]=i}function Y(e){const t=e.markerPlacement;return t&&t.angleToLine?1:0}async function $(e,t,o,r){const n=null!=o?o:[];if(!e)return n;let a,l;const s={};if("CIMSymbolReference"!==e.type)return w.error("Expect cim type to be 'CIMSymbolReference'"),n;if(a=e.symbol,l=e.primitiveOverrides,l){const e=[];for(const o of l){const r=o.valueExpressionInfo;if(r&&t){const n=r.expression,a=i(n,t.spatialReference,t.fields).then((e=>{e&&H(s,o.primitiveName,o.propertyName,e)}));e.push(a)}else null!=o.value&&H(s,o.primitiveName,o.propertyName,o.value)}await Promise.all(e)}switch(a.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,o,i,r,n){if(!e)return;const a=e.symbolLayers;if(!a)return;let l;const s=u.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(l=1);let c=a.length;for(;c--;){const f=a[c];if(!f||!1===f.enable)continue;const m=[];switch(y.findApplicableOverrides(f,t,m),f.type){case"CIMSolidFill":R(f,o,m,i,r);break;case"CIMPictureFill":A(f,o,m,i,r);break;case"CIMHatchFill":F(f,o,m,i,r);break;case"CIMGradientFill":G(f,o,m,i,r);break;case"CIMSolidStroke":W(f,o,m,i,r,"CIMPolygonSymbol"===e.type,s);break;case"CIMPictureStroke":T(f,o,m,i,r,"CIMPolygonSymbol"===e.type,s);break;case"CIMGradientStroke":j(f,o,m,i,r,"CIMPolygonSymbol"===e.type,s);break;case"CIMCharacterMarker":if(D(f,o,m,i,r))break;break;case"CIMPictureMarker":if(D(f,o,m,i,r))break;"CIMLineSymbol"===e.type&&(l=Y(f)),U(f,o,m,i,r,l,s);break;case"CIMVectorMarker":if(D(f,o,m,i,r))break;"CIMLineSymbol"===e.type&&(l=Y(f)),q(f,o,m,i,r,l,s,n);break;default:w.error("Cannot analyze CIM layer",f.type)}}}(a,l,s,t,n,r)}return n}function R(e,t,o,i,a){const l=e.primitiveName,s=r(e.color),[c,f]=te(o,l),m=n(JSON.stringify(e)+f).toString();a.push({type:"fill",templateHash:m,materialHash:c?()=>m:m,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:K(l,t,"Color",i,s,_),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:e.effects})}function A(e,t,o,i,a){const l=e.primitiveName,s=e.tintColor?r(e.tintColor):{r:255,g:255,b:255,a:1},[c,f]=te(o,l),m=n(JSON.stringify(e)+f).toString(),u=n(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();a.push({type:"fill",templateHash:m,materialHash:c?()=>u:u,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:K(l,t,"TintColor",i,s,_),height:K(l,t,"Height",i,e.height),scaleX:K(l,t,"ScaleX",i,e.scaleX),angle:K(l,t,"Rotation",i,e.rotation),offsetX:K(l,t,"OffsetX",i,e.offsetX),offsetY:K(l,t,"OffsetY",i,e.offsetY)})}function F(e,t,o,i,r){const a=["Rotation","OffsetX","OffsetY"],l=o.filter((t=>t.primitiveName!==e.primitiveName&&-1===a.indexOf(t.propertyName))),s=e.primitiveName,[c,f]=te(o,s),m=n(JSON.stringify(e)+f).toString(),u=n(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();r.push({type:"fill",templateHash:m,materialHash:c?Q(u,t,l,i):u,cim:e,materialOverrides:l,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:K(s,t,"Separation",i,e.separation),scaleX:1,angle:K(s,t,"Rotation",i,e.rotation),offsetX:K(s,t,"OffsetX",i,e.offsetX),offsetY:K(s,t,"OffsetY",i,e.offsetY)})}function G(e,t,o,i,r){const a=e.primitiveName,[l,s]=te(o,a),c=n(JSON.stringify(e)+s).toString();r.push({type:"fill",templateHash:c,materialHash:l?Q(c,t,o,i):c,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function W(e,t,o,i,a,l,s){const c=e.primitiveName,f=r(e.color),m=void 0!==e.width?e.width:4,u=I(e.capStyle),y=X(e.joinStyle),p=e.miterLimit,[h,g]=te(o,c),d=n(JSON.stringify(e)+g).toString();a.push({type:"line",templateHash:d,materialHash:h?()=>d:d,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:e.effects,color:K(c,t,"Color",i,f,_),width:K(c,t,"Width",i,m),cap:K(c,t,"CapStyle",i,u),join:K(c,t,"JoinStyle",i,y),miterLimit:K(c,t,"MiterLimit",i,p),referenceWidth:s,zOrder:Z(e.name),isDashed:!1})}function T(e,t,o,i,a,l,s){const c=n(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),f=e.primitiveName,m=r(e.tintColor),u=void 0!==e.width?e.width:4,y=I(e.capStyle),p=X(e.joinStyle),h=e.miterLimit,[g,d]=te(o,f),S=n(JSON.stringify(e)+d).toString();a.push({type:"line",templateHash:S,materialHash:g?()=>c:c,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:e.effects,color:K(f,t,"TintColor",i,m,_),width:K(f,t,"Width",i,u),cap:K(f,t,"CapStyle",i,y),join:K(f,t,"JoinStyle",i,p),miterLimit:K(f,t,"MiterLimit",i,h),referenceWidth:s,zOrder:Z(e.name),isDashed:!1})}function j(e,t,o,i,r,a,l){const s=e.primitiveName,c=void 0!==e.width?e.width:4,f=I(e.capStyle),m=X(e.joinStyle),u=e.miterLimit,[y,p]=te(o,s),h=n(JSON.stringify(e)+p).toString();r.push({type:"line",templateHash:h,materialHash:y?Q(h,t,o,i):h,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},width:K(s,t,"Width",i,c),cap:K(s,t,"CapStyle",i,f),join:K(s,t,"JoinStyle",i,m),miterLimit:K(s,t,"MiterLimit",i,u),referenceWidth:l,zOrder:Z(e.name),isDashed:!1})}function D(e,t,o,i,r){const a=e.markerPlacement;if(!a||"CIMMarkerPlacementInsidePolygon"!==a.type)return!1;const l=a,s=["Rotation","OffsetX","OffsetY"],c=o.filter((t=>t.primitiveName!==e.primitiveName&&-1===s.indexOf(t.propertyName))),[f,m]=te(o,l.primitiveName),u=n(JSON.stringify(e)+m).toString();return r.push({type:"fill",templateHash:u,materialHash:f?Q(u,t,c,i):u,cim:e,materialOverrides:c,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:K(l.primitiveName,t,"StepY",i,l.stepY),scaleX:1,angle:K(l.primitiveName,t,"GridAngle",i,l.gridAngle),offsetX:K(l.primitiveName,t,"OffsetX",i,l.offsetX),offsetY:K(l.primitiveName,t,"OffsetY",i,l.offsetY)}),!0}function U(e,t,o,i,a,l,s){const c=e.primitiveName,f=e.size,m=e.scaleX,u=e.rotation,y=e.offsetX,p=e.offsetY,h=r(e.tintColor),g=n(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),[d,S]=te(o,c),v=n(JSON.stringify(e)+S).toString();a.push({type:"marker",templateHash:v,materialHash:d?()=>g:g,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:!1,alignment:l,size:K(c,t,"Size",i,f),scaleX:K(c,t,"ScaleX",i,m),rotation:K(c,t,"Rotation",i,u),offsetX:K(c,t,"OffsetX",i,y),offsetY:K(c,t,"OffsetY",i,p),color:K(c,t,"TintColor",i,h,_),anchorPoint:e.anchorPoint,isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:s,sizeRatio:1,markerPlacement:e.markerPlacement})}function q(e,t,o,i,r,n,a,l){const s=e.markerGraphics;if(!s)return;let c=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(c=t.ymax-t.ymin)}for(const f of s)if(f){const s=f.symbol;if(!s)continue;switch(s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":B(e,f,o,t,i,r,n,a,c,l);break;case"CIMTextSymbol":E(e,f,t,o,i,r,n,a,c)}}}function E(e,t,o,i,l,s,c,f,m){y.findApplicableOverrides(t,i,[]);const p=t.geometry;if(!("x"in p)||!("y"in p))return;const h=t.symbol,g=function(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}(h),d=function(e){let t="normal",o="normal";if(e){const i=e.toLowerCase();-1!==i.indexOf("italic")?t="italic":-1!==i.indexOf("oblique")&&(t="oblique"),-1!==i.indexOf("bold")?o="bold":-1!==i.indexOf("light")&&(o="lighter")}return{style:t,weight:o}}(h.fontStyleName);h.font={family:h.fontFamilyName,decoration:g,...d};const S=e.frame,v=p.x-.5*(S.xmin+S.xmax),b=p.y-.5*(S.ymin+S.ymax),N=e.size/m,k=e.primitiveName,O=(h.height||0)*N,C=h.angle||0,x=((h.offsetX||0)+v)*N,M=((h.offsetY||0)+b)*N,P=r(u.getFillColor(h));let L=r(u.getStrokeColor(h)),w=u.getStrokeWidth(h);w||(L=r(u.getFillColor(h.haloSymbol)),w=h.haloSize*N);let I="";for(const e of i)e.primitiveName===k&&void 0!==e.value&&(I+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`);const X=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),H=n(JSON.stringify(t)+X+I).toString();s.push({type:"text",templateHash:H,materialHash:()=>n(JSON.stringify(h.font)).toString(),cim:h,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,alignment:c,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:h.fontFamilyName,decoration:"none",weight:"normal",style:"normal",size:K(k,o,"Size",l,O),angle:K(k,o,"Rotation",l,C),offsetX:K(k,o,"OffsetX",l,x),offsetY:K(k,o,"OffsetY",l,M),horizontalAlignment:z(h.horizontalAlignment),verticalAlignment:J(h.verticalAlignment),text:K(t.primitiveName,o,"TextString",l,t.textString,a,h.textCase),color:P,outlineColor:L,outlineSize:w,referenceSize:f,sizeRatio:1,markerPlacement:e.markerPlacement})}function B(e,t,o,i,a,l,s,c,f,m){const y=t.symbol,p=t.geometry;if(!p)return;const h=y.symbolLayers;if(!h)return;if(m)return void V(e,t,i,o,a,l,s,c,f);let g=h.length;for(;g--;){const m=h[g];if(m&&!1!==m.enable)switch(m.type){case"CIMSolidFill":case"CIMSolidStroke":{const y=N(p);if(!y)continue;const[h,g,d]=k(y,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),S="CIMSolidFill"===m.type,v={type:"sdf",geom:p,asFill:S},b=e.primitiveName,O=e.size,C=e.rotation||0,x=e.offsetX,M=e.offsetY,P=m.primitiveName,L=r(S?u.getFillColor(m):u.getStrokeColor(m)),w=S?{r:0,g:0,b:0,a:0}:r(u.getStrokeColor(m)),I=u.getStrokeWidth(m);if(!S&&!I)break;let X=!1,z="";for(const e of o)e.primitiveName!==P&&e.primitiveName!==b||(void 0!==e.value?z+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(X=!0));const J=JSON.stringify({...e,markerGraphics:null}),H=n(JSON.stringify(v)).toString(),Y={type:"marker",templateHash:n(JSON.stringify(t)+JSON.stringify(m)+J+z).toString(),materialHash:X?()=>H:H,cim:v,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:s,anchorPoint:{x:g,y:d},isAbsoluteAnchorPoint:!1,size:K(e.primitiveName,i,"Size",a,O),rotation:K(e.primitiveName,i,"Rotation",a,C),offsetX:K(e.primitiveName,i,"OffsetX",a,x),offsetY:K(e.primitiveName,i,"OffsetY",a,M),scaleX:1,frameHeight:f,rotateClockwise:e.rotateClockwise,referenceSize:c,sizeRatio:h,color:K(P,i,"Color",a,L,_),outlineColor:K(P,i,"Color",a,w,_),outlineWidth:K(P,i,"Width",a,I),markerPlacement:e.markerPlacement};l.push(Y);break}default:V(e,t,i,o,a,l,s,c,f)}}}function V(e,t,o,i,r,a,s,c,f){const m=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath,effects:e.effects}}(e,t);let y=[];const p=["Rotation","OffsetX","OffsetY"];y=i.filter((t=>t.primitiveName!==e.primitiveName||-1===p.indexOf(t.propertyName)));let h="";for(const e of i)void 0!==e.value&&(h+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`);const[g,d,S]=u.getTextureAnchor(m),v=e.primitiveName,b=e.rotation||0,N=e.offsetX||0,k=e.offsetY||0,O=n(JSON.stringify(m)+h).toString(),C={type:"marker",templateHash:O,materialHash:0===y.length?O:Q(O,o,y,r),cim:m,materialOverrides:y,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:s,anchorPoint:{x:g,y:d},isAbsoluteAnchorPoint:!1,size:e.size,rotation:K(v,o,"Rotation",r,b),offsetX:K(v,o,"OffsetX",r,N),offsetY:K(v,o,"OffsetY",r,k),color:{r:0,g:0,b:0,a:0},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:f,rotateClockwise:e.rotateClockwise,referenceSize:c,sizeRatio:S/l(e.size),markerPlacement:e.markerPlacement};a.push(C)}function Z(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function _(e){if(!e||0===e.length)return null;const t=new c(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function K(e,t,o,i,r,n,a){const l=t[e];if(l){const e=l[o];if("string"==typeof e||"number"==typeof e||e instanceof Array)return n?n.call(null,e,a):e;if(null!=e&&e instanceof s)return(t,o,l)=>{let s=x(e,t,{$view:l},i.geometryType,o);return null!==s&&n&&(s=n.call(null,s,a)),null!==s?s:r}}return r}function Q(e,t,o,i){for(const e of o)if(e.valueExpressionInfo){const o=t[e.primitiveName]&&t[e.primitiveName][e.propertyName];o instanceof s&&(e.fn=(e,t,r)=>x(o,e,{$view:r},i.geometryType,t))}return(t,i,r)=>{for(const e of o)e.fn&&(e.value=e.fn(t,i,r));return n(e+y.buildOverrideKey(o)).toString()}}function ee(e,t){if(!t||0===t.length)return e;const o=JSON.parse(JSON.stringify(e));return y.applyOverrides(o,t),o}function te(e,t){let o=!1,i="";for(const r of e)r.primitiveName===t&&(void 0!==r.value?i+=`-${r.primitiveName}-${r.propertyName}-${JSON.stringify(r.value)}`:r.valueExpressionInfo&&(o=!0));return[o,i]}export{ee as T,O as a,$ as k,S as r,x as s};
