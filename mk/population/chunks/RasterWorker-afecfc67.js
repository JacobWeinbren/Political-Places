import{r as e,cp as r,g as t,gR as s}from"../main.js";import{u as o,s as i,v as a,y as n,O as l,b as c}from"./pixelUtils-07299408.js";import{S as m,T as f}from"./RasterSymbolizer-95646cb9.js";import{y as d,G as p,D as u}from"./rasterProjectionHelper-3ffa388e.js";import{d as S,m as h,h as x}from"./dataUtils-11bcc5e6.js";import{f as O}from"./utils-b7c0de29.js";class b{convertVectorFieldData(r){const t=o.fromJSON(r.pixelBlock),s=S(t,r.type);return Promise.resolve(e(s)&&s.toJSON())}async decode(e){const r=await m(e.data,e.options);return r&&r.toJSON()}symbolize(t){t.pixelBlock=o.fromJSON(t.pixelBlock),t.extent=t.extent?r.fromJSON(t.extent):null;const s=this.symbolizer.symbolize(t);return Promise.resolve(e(s)&&s.toJSON())}async updateSymbolizer(e){var r;this.symbolizer=f.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(r){const t=this.symbolizer.simpleStretch(o.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(e(t)&&t.toJSON())}estimateStatisticsHistograms(e){const r=i(o.fromJSON(e.srcPixelBlock));return Promise.resolve(r)}split(e){const r=a(o.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return r&&r.forEach(((e,t)=>{r.set(t,null==e?void 0:e.toJSON())})),Promise.resolve(r)}async mosaicAndTransform(e){var r;const s=e.srcPixelBlocks.map((e=>e?new o(e):null)),i=n(s,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let a,m=i;return e.coefs&&(m=l(i,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(a=c(e.destDimension,e.gcsGrid),m=t(h(m,e.isUV?"vector-uv":"vector-magdir",a))),{pixelBlock:null==(r=m)?void 0:r.toJSON(),localNorthDirections:a}}async createStreamlinesMesh(e,r){const t={data:new Float32Array(e.flowData.buffer),width:e.flowData.width,height:e.flowData.height},{vertexData:s,indexData:o}=await x(e.rendererSettings,t,r.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=r.fromJSON(e.projectedExtent),o=r.fromJSON(e.srcBufferExtent);let i=null;e.datumTransformationSteps&&(i=new s({steps:e.datumTransformationSteps})),(e.includeGCSGrid||d(t.spatialReference,o.spatialReference,i))&&await p();const a=e.rasterTransform?O(e.rasterTransform):null;return u({...e,projectedExtent:t,srcBufferExtent:o,datumTransformation:i,rasterTransform:a})}}export{b as default};
