import{V as e,X as t}from"../main.js";import{a as i,n}from"./heatmapUtils-b2f9e62e.js";import{n as s}from"./BitmapTileContainer-f0c6113f.js";import{o as r}from"./BaseTileRenderer-f5bbeef7.js";import"./Bitmap-384836be.js";import"./VertexArrayObject-4b3f3910.js";import"./Texture-cf3a29a3.js";import"./Container-8a6a7aff.js";import"./mat4f32-b5b66fd7.js";import"./TileContainer-5081b886.js";import"./Utils-d750d03c.js";import"./WGLContainer-6108f277.js";import"./definitions-53d29f17.js";import"./ShaderCompiler-0c54d830.js";import"./config-4e1ab712.js";import"./GeometryUtils-c4c7ed43.js";import"./MaterialKey-3ce37902.js";import"./earcut-1a691bec.js";class a{constructor(){this.gradient=null,this.height=512,this.width=512}render(e){i(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let o=class extends r{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new s(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:i}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=i,this._gradient=n(e.toJSON()),this.tiles.forEach((e=>{const n=e.bitmap.source;n&&(n.minPixelIntensity=t,n.maxPixelIntensity=i,n.gradient=this._gradient,e.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minPixelIntensity:n,maxPixelIntensity:s}=this._intensityInfo,r=t.bitmap.source||new a;r.intensities=i&&i.matrix||null,r.minPixelIntensity=n,r.maxPixelIntensity=s,r.gradient=this._gradient,t.bitmap.source=r,this._container.addChild(t),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}};o=e([t("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);var l=o;export{l as default};
