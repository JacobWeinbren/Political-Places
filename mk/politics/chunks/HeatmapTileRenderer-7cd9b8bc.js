import{V as t,X as e}from"../main.js";import{a as i,n}from"./heatmapUtils-0015507e.js";import{n as s}from"./BitmapTileContainer-1a6a3a8e.js";import{o as r}from"./BaseTileRenderer-5c88fe04.js";import"./Bitmap-dbc97fb1.js";import"./VertexArrayObject-e3941b8a.js";import"./Texture-c105cc80.js";import"./Container-f8952d6a.js";import"./mat4f32-2308129f.js";import"./TileContainer-6dc496fb.js";import"./Utils-55d7c2c6.js";import"./WGLContainer-30df383f.js";import"./definitions-8d307e62.js";import"./ShaderCompiler-cae75718.js";import"./config-31d4f506.js";import"./GeometryUtils-9ff4b746.js";import"./MaterialKey-429f10e7.js";import"./earcut-0cc318b8.js";class a{constructor(){this.gradient=null,this.height=512,this.width=512}render(t){i(t,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let o=class extends r{constructor(t){super(t),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new s(t.tileInfoView)}createTile(t){const e=this._container.createTile(t);return this.tileInfoView.getTileCoords(e.bitmap,t),e.bitmap.resolution=this.tileInfoView.getTileResolution(t),e}onConfigUpdate(){const t=this.layer.renderer;if("heatmap"===t.type){const{minPixelIntensity:e,maxPixelIntensity:i}=t;this._intensityInfo.minPixelIntensity=e,this._intensityInfo.maxPixelIntensity=i,this._gradient=n(t.toJSON()),this.tiles.forEach((t=>{const n=t.bitmap.source;n&&(n.minPixelIntensity=e,n.maxPixelIntensity=i,n.gradient=this._gradient,t.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&"heatmap"===t.type}onTileData(t){const e=this.tiles.get(t.tileKey);if(!e)return;const i=t.intensityInfo,{minPixelIntensity:n,maxPixelIntensity:s}=this._intensityInfo,r=e.bitmap.source||new a;r.intensities=i&&i.matrix||null,r.minPixelIntensity=n,r.maxPixelIntensity=s,r.gradient=this._gradient,e.bitmap.source=r,this._container.addChild(e),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}};o=t([e("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);var l=o;export{l as default};