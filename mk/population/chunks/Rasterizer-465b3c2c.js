import{b as e,h as r,t as a}from"./CIMSymbolHelper-08e81b2e.js";import{r as t,a as n}from"./cimAnalyzer-a778e754.js";import{c4 as i}from"../main.js";class s{dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(i,s,o){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===i.type||"esriSFS"===i.type){const[r,a,t]=e.rasterizeSimpleFill(this._rasterizationCanvas,i.style,s);return{size:[a,t],image:new Uint32Array(r.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===i.type||"esriSLS"===i.type){const[r,a,t]=e.rasterizeSimpleLine(i.style,i.cap);return{size:[a,t],image:new Uint32Array(r.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let m,l,f;if("simple-marker"===i.type||"esriSMS"===i.type||"line-marker"===i.type?(m=r.fromSimpleMarker(i),f=t(m)):"CIMHatchFill"===i.type?(m=r.fromCIMHatchFill(i),l=new a(m.frame.xmin,-m.frame.ymax,m.frame.xmax-m.frame.xmin,m.frame.ymax-m.frame.ymin)):i.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===i.markerPlacement.type?(m=r.fromCIMInsidePolygon(i),l=new a(m.frame.xmin,-m.frame.ymax,m.frame.xmax-m.frame.xmin,m.frame.ymax-m.frame.ymin)):(m=i,f=t(m)),f&&!o){const[e,r,a]=n(f);return e?{size:[r,a],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[c,h,p,y,u]=r.rasterize(this._rasterizationCanvas,m,l,!o);return c?{size:[h,p],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:y,anchorY:u}:null}rasterizeImageResource(e,r,a,t){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=r;const n=this._rasterizationCanvas.getContext("2d");a instanceof ImageData?n.putImageData(a,0,0):(a.setAttribute("width",`${e}px`),a.setAttribute("height",`${r}px`),n.drawImage(a,0,0,e,r));const s=n.getImageData(0,0,e,r),o=new Uint8Array(s.data);if(t)for(const e of t)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[r,a,t,n]=e.oldColor,[i,s,m,l]=e.newColor;if(r===i&&a===s&&t===m&&n===l)continue;for(let e=0;e<o.length;e+=4)r===o[e]&&a===o[e+1]&&t===o[e+2]&&n===o[e+3]&&(o[e]=i,o[e+1]=s,o[e+2]=m,o[e+3]=l)}let m;for(let e=0;e<o.length;e+=4)m=o[e+3]/255,o[e]=o[e]*m,o[e+1]=o[e+1]*m,o[e+2]=o[e+2]*m;let l=o,f=e,c=r;const h=512;if(f>=h||c>=h){const a=f/c;a>1?(f=h,c=Math.round(h/a)):(c=h,f=Math.round(h*a)),l=new Uint8Array(4*f*c);const t=new Uint8ClampedArray(l.buffer);i(o,e,r,t,f,c,!1)}return{size:[f,c],image:new Uint32Array(l.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}export{s as o};
