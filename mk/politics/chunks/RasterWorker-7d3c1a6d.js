import{bO as e}from"../main.js";import{u as s,r,C as o,d as t,T as i}from"./pixelUtils-be0d48af.js";import{T as l,N as m}from"./RasterSymbolizer-91a42263.js";import"./LercCodec-3b1cad63.js";class n{async decode(e){const s=await l(e.data,e.options);return s&&s.toJSON()}symbolize(r){r.pixelBlock=s.fromJSON(r.pixelBlock),r.extent=r.extent?e.fromJSON(r.extent):null;const o=this.symbolizer.symbolize(r);return Promise.resolve(o&&o.toJSON())}async updateSymbolizer(e){var s;this.symbolizer=m.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(s=this.symbolizer)?void 0:s.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const r=this.symbolizer.simpleStretch(s.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(r&&r.toJSON())}estimateStatisticsHistograms(e){const o=r(s.fromJSON(e.srcPixelBlock));return Promise.resolve(o)}split(e){const r=o(s.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return r&&r.forEach(((e,s)=>{r.set(s,null==e?void 0:e.toJSON())})),Promise.resolve(r)}async mosaicAndTransform(e){const r=e.srcPixelBlocks.map((e=>e?new s(e):null)),o=t(r,e.srcMosaicSize,null,null,e.alignmentInfo);if(!e.coefs)return o&&o.toJSON();const l=i(o,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return l&&l.toJSON()}}export{n as default};
