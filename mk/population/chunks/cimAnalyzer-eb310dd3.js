import{ao as e,n as t,a as o,bZ as i,b_ as r,b$ as n,c0 as a,br as l,c1 as s,c2 as c,c3 as f,u as m,c4 as u,c5 as y}from"../main.js";import{t as p,a as h,h as g,S as d}from"./CIMSymbolHelper-1275dcaf.js";function S(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers;return t&&1===t.length?S(t[0]):null}case"CIMVectorMarker":{const t=e.markerGraphics;if(!t||1!==t.length)return null;const o=t[0];if(!o)return null;const i=o.geometry;if(!i)return null;const r=o.symbol;return!r||"CIMPolygonSymbol"!==r.type&&"CIMLineSymbol"!==r.type?null:{geom:i,asFill:"CIMPolygonSymbol"===r.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function v(e){let t=1/0,o=-1/0,i=1/0,r=-1/0;for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>o&&(o=e[0]),e[1]<i&&(i=e[1]),e[1]>r&&(r=e[1]);return new p(t,i,o-t,r-i)}function b(e){let t=1/0,o=-1/0,i=1/0,r=-1/0;for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>o&&(o=e[0]),e[1]<i&&(i=e[1]),e[1]>r&&(r=e[1]);return[t,i,o,r]}function N(t){return t?t.rings?b(t.rings):t.paths?b(t.paths):e(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function k(e,t,o,i,r){const[n,a,l,s]=e;if(l<n||s<a)return[0,0,0];const c=l-n,f=s-a,m=Math.floor(31.5),u=(128-2*(m+1))/Math.max(c,f),y=Math.round(c*u)+2*m,p=Math.round(f*u)+2*m;let h=1;t&&(h=p/u/(t.ymax-t.ymin));let g=0,d=0;if(i)if(r){if(t&&o&&t.ymax-t.ymin>0){const e=(t.xmax-t.xmin)/(t.ymax-t.ymin);g=i.x/(o*e),d=i.y/o}}else g=i.x,d=i.y;return g=.5*(t.xmax+t.xmin)+g*(t.xmax-t.xmin),d=.5*(t.ymax+t.ymin)+d*(t.ymax-t.ymin),g-=n,d-=a,g*=u,d*=u,g+=m,d+=m,[h,g/y-.5,-(d/p-.5)]}function O(e){const t=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),o=v(t),i=Math.floor(31.5),r=(128-2*(i+1))/Math.max(o.width,o.height),n=Math.round(o.width*r)+2*i,a=Math.round(o.height*r)+2*i,l=[];for(const n of t)if(n&&n.length>1){const t=[];for(const e of n){let[n,a]=e;n-=o.x,a-=o.y,n*=r,a*=r,n+=i-.5,a+=i-.5,t.push([n,a])}if(e.asFill){const e=t.length-1;t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}l.push(t)}const s=function(e,t,o,i){const r=t*o,n=new Array(r),a=i*i+1;for(let e=0;e<r;++e)n[e]=a;for(const r of e){const e=r.length;for(let a=1;a<e;++a){const e=r[a-1],l=r[a];let s,c,f,m;e[0]<l[0]?(s=e[0],c=l[0]):(s=l[0],c=e[0]),e[1]<l[1]?(f=e[1],m=l[1]):(f=l[1],m=e[1]);let u=Math.floor(s)-i,y=Math.floor(c)+i,p=Math.floor(f)-i,h=Math.floor(m)+i;u<0&&(u=0),y>t&&(y=t),p<0&&(p=0),h>o&&(h=o);const g=l[0]-e[0],d=l[1]-e[1],S=g*g+d*d;for(let i=u;i<y;i++)for(let r=p;r<h;r++){let a,s,c=(i-e[0])*g+(r-e[1])*d;c<0?(a=e[0],s=e[1]):c>S?(a=l[0],s=l[1]):(c/=S,a=e[0]+c*g,s=e[1]+c*d);const f=(i-a)*(i-a)+(r-s)*(r-s),m=(o-r-1)*t+i;f<n[m]&&(n[m]=f)}}}for(let e=0;e<r;++e)n[e]=Math.sqrt(n[e]);return n}(l,n,a,i);return e.asFill&&function(e,t,o,i,r){for(const n of e){const e=n.length;for(let a=1;a<e;++a){const e=n[a-1],l=n[a];let s,c,f,m;e[0]<l[0]?(s=e[0],c=l[0]):(s=l[0],c=e[0]),e[1]<l[1]?(f=e[1],m=l[1]):(f=l[1],m=e[1]);let u=Math.floor(s),y=Math.floor(c)+1,p=Math.floor(f),h=Math.floor(m)+1;u<i&&(u=i),y>t-i&&(y=t-i),p<i&&(p=i),h>o-i&&(h=o-i);for(let n=p;n<h;++n){if(e[1]>n==l[1]>n)continue;const a=(o-n-1)*t;for(let t=u;t<y;++t)t<(l[0]-e[0])*(n-e[1])/(l[1]-e[1])+e[0]&&(r[a+t]=-r[a+t]);for(let e=i;e<u;++e)r[a+e]=-r[a+e]}}}}(l,n,a,i,s),[C(s,i),n,a]}function C(e,t){const o=2*t,i=e.length,r=new Uint8Array(4*i);for(let t=0;t<i;++t){const i=.5-e[t]/o;h(i,r,4*t)}return r}function x(e,o,i,r,n){const a=e.referencesGeometry()&&n?P(o,r,n):o,l=e.repurposeFeature(a);try{return e.evaluate({...i,$feature:l})}catch(e){return t.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}const M=new Map;function P(e,t,o){const{transform:i,hasZ:r,hasM:n}=o;M.has(t)||M.set(t,L(t));const a=M.get(t)(e.geometry,i,r,n);return{...e,geometry:a}}function L(e){const l={};switch(e){case"esriGeometryPoint":return(e,t,o,i)=>a(t,l,e,o,i);case"esriGeometryPolygon":return(e,t,o,i)=>n(t,l,e,o,i);case"esriGeometryPolyline":return(e,t,o,i)=>r(t,l,e,o,i);case"esriGeometryMultipoint":return(e,t,o,r)=>i(t,l,e,o,r);default:return t.getLogger("esri.views.2d.support.arcadeOnDemand").error(new o("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}const w=t.getLogger("esri.symbols.cim.cimAnalyzer");function I(e){switch(e){case"Butt":return 0;case"Square":return 2;case"Round":default:return 1}}function X(e){switch(e){case"Bevel":return 0;case"Miter":return 2;case"Round":default:return 1}}function z(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function J(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function H(e,t,o,i){let r;e[t]?r=e[t]:(r={},e[t]=r),r[o]=i}function Y(e){const t=e.markerPlacement;return t&&t.angleToLine?1:0}async function $(e,t,o,i){const r=null!=o?o:[];if(!e)return r;let n,a;const s={};if("CIMSymbolReference"!==e.type)return w.error("Expect cim type to be 'CIMSymbolReference'"),r;if(n=e.symbol,a=e.primitiveOverrides,a){const e=[];for(const o of a){const i=o.valueExpressionInfo;if(i&&t){const r=i.expression,n=l(r,t.spatialReference,t.fields).then((e=>{e&&H(s,o.primitiveName,o.propertyName,e)}));e.push(n)}else null!=o.value&&H(s,o.primitiveName,o.propertyName,o.value)}await Promise.all(e)}switch(n.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,o,i,r,n){if(!e)return;const a=e.symbolLayers;if(!a)return;let l;const s=g.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(l=1);let c=a.length;for(;c--;){const f=a[c];if(!f||!1===f.enable)continue;const m=[];switch(d.findApplicableOverrides(f,t,m),f.type){case"CIMSolidFill":R(f,o,m,i,r);break;case"CIMPictureFill":A(f,o,m,i,r);break;case"CIMHatchFill":F(f,o,m,i,r);break;case"CIMGradientFill":G(f,o,m,i,r);break;case"CIMSolidStroke":W(f,o,m,i,r,"CIMPolygonSymbol"===e.type,s);break;case"CIMPictureStroke":T(f,o,m,i,r,"CIMPolygonSymbol"===e.type,s);break;case"CIMGradientStroke":j(f,o,m,i,r,"CIMPolygonSymbol"===e.type,s);break;case"CIMCharacterMarker":if(D(f,o,m,i,r))break;break;case"CIMPictureMarker":if(D(f,o,m,i,r))break;"CIMLineSymbol"===e.type&&(l=Y(f)),U(f,o,m,i,r,l,s);break;case"CIMVectorMarker":if(D(f,o,m,i,r))break;"CIMLineSymbol"===e.type&&(l=Y(f)),E(f,o,m,i,r,l,s,n);break;default:w.error("Cannot analyze CIM layer",f.type)}}}(n,a,s,t,r,i)}return r}function R(e,t,o,i,r){const n=e.primitiveName,a=s(e.color),[l,f]=te(o,n),m=c(JSON.stringify(e)+f).toString();r.push({type:"fill",templateHash:m,materialHash:l?()=>m:m,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:K(n,t,"Color",i,a,_),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:e.effects})}function A(e,t,o,i,r){const n=e.primitiveName,a=e.tintColor?s(e.tintColor):{r:255,g:255,b:255,a:1},[l,f]=te(o,n),m=c(JSON.stringify(e)+f).toString(),u=c(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();r.push({type:"fill",templateHash:m,materialHash:l?()=>u:u,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:K(n,t,"TintColor",i,a,_),height:K(n,t,"Height",i,e.height),scaleX:K(n,t,"ScaleX",i,e.scaleX),angle:K(n,t,"Rotation",i,e.rotation),offsetX:K(n,t,"OffsetX",i,e.offsetX),offsetY:K(n,t,"OffsetY",i,e.offsetY)})}function F(e,t,o,i,r){const n=["Rotation","OffsetX","OffsetY"],a=o.filter((t=>t.primitiveName!==e.primitiveName&&-1===n.indexOf(t.propertyName))),l=e.primitiveName,[s,f]=te(o,l),m=c(JSON.stringify(e)+f).toString(),u=c(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();r.push({type:"fill",templateHash:m,materialHash:s?Q(u,t,a,i):u,cim:e,materialOverrides:a,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:K(l,t,"Separation",i,e.separation),scaleX:1,angle:K(l,t,"Rotation",i,e.rotation),offsetX:K(l,t,"OffsetX",i,e.offsetX),offsetY:K(l,t,"OffsetY",i,e.offsetY)})}function G(e,t,o,i,r){const n=e.primitiveName,[a,l]=te(o,n),s=c(JSON.stringify(e)+l).toString();r.push({type:"fill",templateHash:s,materialHash:a?Q(s,t,o,i):s,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function W(e,t,o,i,r,n,a){const l=e.primitiveName,f=s(e.color),m=void 0!==e.width?e.width:4,u=I(e.capStyle),y=X(e.joinStyle),p=e.miterLimit,[h,g]=te(o,l),d=c(JSON.stringify(e)+g).toString();r.push({type:"line",templateHash:d,materialHash:h?()=>d:d,cim:e,materialOverrides:null,isOutline:n,colorLocked:e.colorLocked,effects:e.effects,color:K(l,t,"Color",i,f,_),width:K(l,t,"Width",i,m),cap:K(l,t,"CapStyle",i,u),join:K(l,t,"JoinStyle",i,y),miterLimit:K(l,t,"MiterLimit",i,p),referenceWidth:a,zOrder:Z(e.name),isDashed:!1})}function T(e,t,o,i,r,n,a){const l=c(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),f=e.primitiveName,m=s(e.tintColor),u=void 0!==e.width?e.width:4,y=I(e.capStyle),p=X(e.joinStyle),h=e.miterLimit,[g,d]=te(o,f),S=c(JSON.stringify(e)+d).toString();r.push({type:"line",templateHash:S,materialHash:g?()=>l:l,cim:e,materialOverrides:null,isOutline:n,colorLocked:e.colorLocked,effects:e.effects,color:K(f,t,"TintColor",i,m,_),width:K(f,t,"Width",i,u),cap:K(f,t,"CapStyle",i,y),join:K(f,t,"JoinStyle",i,p),miterLimit:K(f,t,"MiterLimit",i,h),referenceWidth:a,zOrder:Z(e.name),isDashed:!1})}function j(e,t,o,i,r,n,a){const l=e.primitiveName,s=void 0!==e.width?e.width:4,f=I(e.capStyle),m=X(e.joinStyle),u=e.miterLimit,[y,p]=te(o,l),h=c(JSON.stringify(e)+p).toString();r.push({type:"line",templateHash:h,materialHash:y?Q(h,t,o,i):h,cim:e,materialOverrides:null,isOutline:n,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},width:K(l,t,"Width",i,s),cap:K(l,t,"CapStyle",i,f),join:K(l,t,"JoinStyle",i,m),miterLimit:K(l,t,"MiterLimit",i,u),referenceWidth:a,zOrder:Z(e.name),isDashed:!1})}function D(e,t,o,i,r){const n=e.markerPlacement;if(!n||"CIMMarkerPlacementInsidePolygon"!==n.type)return!1;const a=n,l=["Rotation","OffsetX","OffsetY"],s=o.filter((t=>t.primitiveName!==e.primitiveName&&-1===l.indexOf(t.propertyName))),[f,m]=te(o,a.primitiveName),u=c(JSON.stringify(e)+m).toString();return r.push({type:"fill",templateHash:u,materialHash:f?Q(u,t,s,i):u,cim:e,materialOverrides:s,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:K(a.primitiveName,t,"StepY",i,a.stepY),scaleX:1,angle:K(a.primitiveName,t,"GridAngle",i,a.gridAngle),offsetX:K(a.primitiveName,t,"OffsetX",i,a.offsetX),offsetY:K(a.primitiveName,t,"OffsetY",i,a.offsetY)}),!0}function U(e,t,o,i,r,n,a){const l=e.primitiveName,f=e.size,m=e.scaleX,u=e.rotation,y=e.offsetX,p=e.offsetY,h=s(e.tintColor),g=c(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),[d,S]=te(o,l),v=c(JSON.stringify(e)+S).toString();r.push({type:"marker",templateHash:v,materialHash:d?()=>g:g,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:!1,alignment:n,size:K(l,t,"Size",i,f),scaleX:K(l,t,"ScaleX",i,m),rotation:K(l,t,"Rotation",i,u),offsetX:K(l,t,"OffsetX",i,y),offsetY:K(l,t,"OffsetY",i,p),color:K(l,t,"TintColor",i,h,_),anchorPoint:e.anchorPoint,isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:a,sizeRatio:1,markerPlacement:e.markerPlacement})}function E(e,t,o,i,r,n,a,l){const s=e.markerGraphics;if(!s)return;let c=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(c=t.ymax-t.ymin)}for(const f of s)if(f){const s=f.symbol;if(!s)continue;switch(s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":B(e,f,o,t,i,r,n,a,c,l);break;case"CIMTextSymbol":q(e,f,t,o,i,r,n,a,c)}}}function q(e,t,o,i,r,n,a,l,m){d.findApplicableOverrides(t,i,[]);const u=t.geometry;if(!("x"in u)||!("y"in u))return;const y=t.symbol,p=function(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}(y),h=function(e){let t="normal",o="normal";if(e){const i=e.toLowerCase();-1!==i.indexOf("italic")?t="italic":-1!==i.indexOf("oblique")&&(t="oblique"),-1!==i.indexOf("bold")?o="bold":-1!==i.indexOf("light")&&(o="lighter")}return{style:t,weight:o}}(y.fontStyleName);y.font={family:y.fontFamilyName,decoration:p,...h};const S=e.frame,v=u.x-.5*(S.xmin+S.xmax),b=u.y-.5*(S.ymin+S.ymax),N=e.size/m,k=e.primitiveName,O=(y.height||0)*N,C=y.angle||0,x=((y.offsetX||0)+v)*N,M=((y.offsetY||0)+b)*N,P=s(g.getFillColor(y));let L=s(g.getStrokeColor(y)),w=g.getStrokeWidth(y);w||(L=s(g.getFillColor(y.haloSymbol)),w=y.haloSize*N);let I="";for(const e of i)e.primitiveName===k&&void 0!==e.value&&(I+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`);const X=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),H=c(JSON.stringify(t)+X+I).toString();n.push({type:"text",templateHash:H,materialHash:()=>c(JSON.stringify(y.font)).toString(),cim:y,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,alignment:a,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:y.fontFamilyName,decoration:"none",weight:"normal",style:"normal",size:K(k,o,"Size",r,O),angle:K(k,o,"Rotation",r,C),offsetX:K(k,o,"OffsetX",r,x),offsetY:K(k,o,"OffsetY",r,M),horizontalAlignment:z(y.horizontalAlignment),verticalAlignment:J(y.verticalAlignment),text:K(t.primitiveName,o,"TextString",r,t.textString,f,y.textCase),color:P,outlineColor:L,outlineSize:w,referenceSize:l,sizeRatio:1,markerPlacement:e.markerPlacement})}function B(e,t,o,i,r,n,a,l,f,m){const u=t.symbol,y=t.geometry;if(!y)return;const p=u.symbolLayers;if(!p)return;if(m)return void V(e,t,i,o,r,n,a,l,f);let h=p.length;for(;h--;){const m=p[h];if(m&&!1!==m.enable)switch(m.type){case"CIMSolidFill":case"CIMSolidStroke":{const u=N(y);if(!u)continue;const[p,h,d]=k(u,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),S="CIMSolidFill"===m.type,v={type:"sdf",geom:y,asFill:S},b=e.primitiveName,O=e.size,C=e.rotation||0,x=e.offsetX,M=e.offsetY,P=m.primitiveName,L=s(S?g.getFillColor(m):g.getStrokeColor(m)),w=S?{r:0,g:0,b:0,a:0}:s(g.getStrokeColor(m)),I=g.getStrokeWidth(m);if(!S&&!I)break;let X=!1,z="";for(const e of o)e.primitiveName!==P&&e.primitiveName!==b||(void 0!==e.value?z+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(X=!0));const J=JSON.stringify({...e,markerGraphics:null}),H=c(JSON.stringify(v)).toString(),Y={type:"marker",templateHash:c(JSON.stringify(t)+JSON.stringify(m)+J+z).toString(),materialHash:X?()=>H:H,cim:v,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:a,anchorPoint:{x:h,y:d},isAbsoluteAnchorPoint:!1,size:K(e.primitiveName,i,"Size",r,O),rotation:K(e.primitiveName,i,"Rotation",r,C),offsetX:K(e.primitiveName,i,"OffsetX",r,x),offsetY:K(e.primitiveName,i,"OffsetY",r,M),scaleX:1,frameHeight:f,rotateClockwise:e.rotateClockwise,referenceSize:l,sizeRatio:p,color:K(P,i,"Color",r,L,_),outlineColor:K(P,i,"Color",r,w,_),outlineWidth:K(P,i,"Width",r,I),markerPlacement:e.markerPlacement};n.push(Y);break}default:V(e,t,i,o,r,n,a,l,f)}}}function V(e,t,o,i,r,n,a,l,s){const f=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath,effects:e.effects}}(e,t);let u=[];const y=["Rotation","OffsetX","OffsetY"];u=i.filter((t=>t.primitiveName!==e.primitiveName||-1===y.indexOf(t.propertyName)));let p="";for(const e of i)void 0!==e.value&&(p+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`);const[h,d,S]=g.getTextureAnchor(f),v=e.primitiveName,b=e.rotation||0,N=e.offsetX||0,k=e.offsetY||0,O=c(JSON.stringify(f)+p).toString(),C={type:"marker",templateHash:O,materialHash:0===u.length?O:Q(O,o,u,r),cim:f,materialOverrides:u,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:a,anchorPoint:{x:h,y:d},isAbsoluteAnchorPoint:!1,size:e.size,rotation:K(v,o,"Rotation",r,b),offsetX:K(v,o,"OffsetX",r,N),offsetY:K(v,o,"OffsetY",r,k),color:{r:0,g:0,b:0,a:0},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:s,rotateClockwise:e.rotateClockwise,referenceSize:l,sizeRatio:S/m(e.size),markerPlacement:e.markerPlacement};n.push(C)}function Z(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function _(e){if(!e||0===e.length)return null;const t=new y(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function K(e,t,o,i,r,n,a){const l=t[e];if(l){const e=l[o];if("string"==typeof e||"number"==typeof e||e instanceof Array)return n?n.call(null,e,a):e;if(null!=e&&e instanceof u)return(t,o,l)=>{let s=x(e,t,{$view:l},i.geometryType,o);return null!==s&&n&&(s=n.call(null,s,a)),null!==s?s:r}}return r}function Q(e,t,o,i){for(const e of o)if(e.valueExpressionInfo){const o=t[e.primitiveName]&&t[e.primitiveName][e.propertyName];o instanceof u&&(e.fn=(e,t,r)=>x(o,e,{$view:r},i.geometryType,t))}return(t,i,r)=>{for(const e of o)e.fn&&(e.value=e.fn(t,i,r));return c(e+d.buildOverrideKey(o)).toString()}}function ee(e,t){if(!t||0===t.length)return e;const o=JSON.parse(JSON.stringify(e));return d.applyOverrides(o,t),o}function te(e,t){let o=!1,i="";for(const r of e)r.primitiveName===t&&(void 0!==r.value?i+=`-${r.primitiveName}-${r.propertyName}-${JSON.stringify(r.value)}`:r.valueExpressionInfo&&(o=!0));return[o,i]}export{ee as T,O as a,$ as k,S as r,x as s};
