import{V as e,W as a,cZ as i,aT as t,X as l}from"../main.js";import{r}from"./serviceTileInfoProperty-e38096a1.js";import{j as o}from"./TilemapCache-e6b60a50.js";const p=p=>{let n=class extends p{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,a){return null!=a.minLOD&&null!=a.maxLOD?e:0}readMaxScale(e,a){return null!=a.minLOD&&null!=a.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,a){return a.capabilities&&a.capabilities.indexOf("Tilemap")>-1?new o({layer:this}):null}};return e([a({json:{read:{source:"copyrightText"}}})],n.prototype,"copyright",void 0),e([a()],n.prototype,"minScale",void 0),e([i("service","minScale")],n.prototype,"readMinScale",null),e([a()],n.prototype,"maxScale",void 0),e([i("service","maxScale")],n.prototype,"readMaxScale",null),e([a({type:t})],n.prototype,"spatialReference",void 0),e([a({readOnly:!0})],n.prototype,"supportsBlankTile",null),e([a(r)],n.prototype,"tileInfo",void 0),e([a()],n.prototype,"tilemapCache",void 0),e([i("service","tilemapCache",["capabilities"])],n.prototype,"readTilemapCache",null),e([a()],n.prototype,"version",void 0),n=e([l("esri.layers.mixins.ArcGISCachedService")],n),n};export{p as s};
