import{V as t,W as r,X as e,cI as o,av as s}from"../main.js";let i=class extends o{constructor(t){super(t),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const t=this.geometries.map((function(t){return t.toJSON()})),r=this.geometries[0],e={};return e.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),e.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference.toJSON()),e.geometries=JSON.stringify({geometryType:s(r),geometries:t}),this.transformation&&(e.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(e.transformForward=this.transformForward),e}};t([r()],i.prototype,"geometries",void 0),t([r({json:{read:{source:"outSR"}}})],i.prototype,"outSpatialReference",void 0),t([r()],i.prototype,"transformation",void 0),t([r()],i.prototype,"transformForward",void 0),i=t([e("esri.rest.support.ProjectParameters")],i);var a=i;export{a};