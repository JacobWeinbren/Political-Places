import{J as e,d as a,$ as r,t}from"./CIMSymbolHelper-cbb4397a.js";import{r as i,m as n}from"./cimAnalyzer-7a366be2.js";import{ce as s}from"../main.js";class m{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(s,m,o){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===s.type||"esriSFS"===s.type){const[a,r,t]=e.rasterizeSimpleFill(this._rasterizationCanvas,s.style,m);return{size:[r,t],image:new Uint32Array(a.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===s.type||"esriSLS"===s.type||"line"===s.type&&s.dashTemplate){let r,t;if("simple-line"===s.type||"esriSLS"===s.type)switch(r=a(s.style,s.cap),s.cap){case"butt":t="Butt";break;case"square":t="Square";break;default:t="Round"}else r=s.dashTemplate,t=s.cim.capStyle;const[i,n,m]=e.rasterizeSimpleLine(r,t);return{size:[n,m],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let l,c,f;if("simple-marker"===s.type||"esriSMS"===s.type||"line-marker"===s.type?(l=r.fromSimpleMarker(s),f=i(l)):s.cim&&"CIMHatchFill"===s.cim.type?(l=r.fromCIMHatchFill(s.cim),c=new t(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):s.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===s.cim.markerPlacement.type?(l=r.fromCIMInsidePolygon(s.cim),c=new t(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):(l=s.cim,f=i(l)),f&&!o){const[e,a,r]=n(f);return e?{size:[a,r],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[h,p,u,y,d]=r.rasterize(this._rasterizationCanvas,l,c,this._resourceManager,!o);return h?{size:[p,u],image:new Uint32Array(h.buffer),sdf:!1,simplePattern:!1,anchorX:y,anchorY:d}:null}rasterizeImageResource(e,a,r,t){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=a;const i=this._rasterizationCanvas.getContext("2d");r instanceof ImageData?i.putImageData(r,0,0):(r.setAttribute("width",`${e}px`),r.setAttribute("height",`${a}px`),i.drawImage(r,0,0,e,a));const n=i.getImageData(0,0,e,a),m=new Uint8Array(n.data);if(t)for(const e of t)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[a,r,t,i]=e.oldColor,[n,s,o,l]=e.newColor;if(a===n&&r===s&&t===o&&i===l)continue;for(let e=0;e<m.length;e+=4)a===m[e]&&r===m[e+1]&&t===m[e+2]&&i===m[e+3]&&(m[e]=n,m[e+1]=s,m[e+2]=o,m[e+3]=l)}let o;for(let e=0;e<m.length;e+=4)o=m[e+3]/255,m[e]=m[e]*o,m[e+1]=m[e+1]*o,m[e+2]=m[e+2]*o;let l=m,c=e,f=a;const h=512;if(c>=h||f>=h){const r=c/f;r>1?(c=h,f=Math.round(h/r)):(f=h,c=Math.round(h*r)),l=new Uint8Array(4*c*f);const t=new Uint8ClampedArray(l.buffer);s(m,e,a,t,c,f,!1)}return{size:[c,f],image:new Uint32Array(l.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}export{m};