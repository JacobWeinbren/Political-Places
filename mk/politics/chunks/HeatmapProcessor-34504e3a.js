import{V as e,X as t,bK as s,r as i,A as r}from"../main.js";import{o as a}from"./heatmapUtils-5c3a424b.js";import{o}from"./definitions-8d307e62.js";import{p as n}from"./BaseProcessor-147cd51e.js";import{l as d}from"./tileUtils-a8480010.js";class l{constructor(e,t){this.offset=e,this.extent=t}}let h=class extends n{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const i=t.schema.processors[0];"heatmap"===i.type&&s(this._schema,i)&&(e.mesh=!0,this._schema=i)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,s){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const n=this._tileKeyToFeatureSets.get(e.key.id);if(i(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&n.set(t.addOrUpdate.instance,t),t.end){const t=[],i=function(e){const t=e.key,s=new Map,i=256,r=o,a=e.tileInfoView.tileInfo.isWrappable;return s.set(d(t,-1,-1,a).id,new l([-r,-r],[r-i,r-i,r,r])),s.set(d(t,0,-1,a).id,new l([0,-r],[0,r-i,r,r])),s.set(d(t,1,-1,a).id,new l([r,-r],[0,r-i,i,r])),s.set(d(t,-1,0,a).id,new l([-r,0],[r-i,0,r,r])),s.set(d(t,1,0,a).id,new l([r,0],[0,0,i,r])),s.set(d(t,-1,1,a).id,new l([-r,r],[r-i,0,r,i])),s.set(d(t,0,1,a).id,new l([0,r],[0,0,r,i])),s.set(d(t,1,1,a).id,new l([r,r],[0,0,i,i])),s}(e);this._tileKeyToFeatureSets.forEach(((s,a)=>{if(a===e.key.id)s.forEach((e=>r(e.addOrUpdate,(e=>t.push(e)))));else if(i.has(a)){const e=i.get(a),[o,n]=e.offset;s.forEach((e=>r(e.addOrUpdate,(e=>{const s=e.transform(o,n,1,1);t.push(s)}))))}}));const n=a(t,this._schema.mesh,512,512),h={tileKey:e.key.id,intensityInfo:n},c=[n.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",h,{...s,transferList:c})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};h=e([t("esri.views.2d.layers.features.processors.HeatmapProcessor")],h);var c=h;export{c as default};
