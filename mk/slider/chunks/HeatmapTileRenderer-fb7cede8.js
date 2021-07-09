import{im as e,V as t,X as i,io as n}from"../main.js";import{n as s}from"./BitmapTileContainer-110affa3.js";import{o as r}from"./BaseTileRenderer-208d6fb3.js";import"./Bitmap-e51696fb.js";import"./VertexArrayObject-175f9e00.js";import"./Texture-de2c3ed0.js";import"./Container-783a9c35.js";import"./mat4f32-cfee47e9.js";import"./TileContainer-4c3e4436.js";import"./Utils-ec7f800e.js";import"./WGLContainer-af8003e9.js";import"./definitions-2e4d5fbc.js";import"./ShaderCompiler-1db8cc9f.js";import"./config-be6ab4aa.js";import"./GeometryUtils-650cb5e0.js";import"./MaterialKey-dc8991b4.js";import"./earcut-4936b6c5.js";class a{constructor(){this.gradient=null,this.height=512,this.width=512}render(t){e(t,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let o=class extends r{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new s(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:i}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=i,this._gradient=n(e.toJSON()),this.tiles.forEach((e=>{const n=e.bitmap.source;n&&(n.minPixelIntensity=t,n.maxPixelIntensity=i,n.gradient=this._gradient,e.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minPixelIntensity:n,maxPixelIntensity:s}=this._intensityInfo,r=t.bitmap.source||new a;r.intensities=i&&i.matrix||null,r.minPixelIntensity=n,r.maxPixelIntensity=s,r.gradient=this._gradient,t.bitmap.source=r,this._container.addChild(t),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}};o=t([i("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);var l=o;export default l;
