import{a8 as e,aB as n,cF as t,cE as a,cn as o}from"../main.js";const s={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(n,t,a){const o=n.hasZ(t),s=n.hasM(t),i=new e({x:n.getPointX(t),y:n.getPointY(t),spatialReference:a});return o&&(i.z=n.getPointZ(t)),s&&(i.m=n.getPointM(t)),i.cache._geVersion=t,i},exportPolygon:function(e,t,a){const o=new n({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:a});return o.cache._geVersion=t,o},exportPolyline:function(e,n,a){const o=new t({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:a});return o.cache._geVersion=n,o},exportMultipoint:function(e,n,t){const o=new a({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return o.cache._geVersion=n,o},exportExtent:function(e,n,t){const a=e.hasZ(n),s=e.hasM(n),i=new o({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(a){const t=e.getZExtent(n);i.zmin=t.vmin,i.zmax=t.vmax}if(s){const t=e.getMExtent(n);i.mmin=t.vmin,i.mmax=t.vmax}return i.cache._geVersion=n,i}};export{s as hydratedAdapter};
