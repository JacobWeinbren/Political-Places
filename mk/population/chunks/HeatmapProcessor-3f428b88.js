import{V as e,X as t,bK as s,r as i,A as a}from"../main.js";import{o as r}from"./heatmapUtils-5c913537.js";import{o}from"./definitions-bd7968b3.js";import{p as n}from"./BaseProcessor-a8629a07.js";import{l as d}from"./tileUtils-a2fe343e.js";class l{constructor(e,t){this.offset=e,this.extent=t}}let h=class extends n{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const i=t.schema.processors[0];"heatmap"===i.type&&s(this._schema,i)&&(e.mesh=!0,this._schema=i)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,s){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const n=this._tileKeyToFeatureSets.get(e.key.id);if(i(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&n.set(t.addOrUpdate.instance,t),t.end){const t=[],i=function(e){const t=e.key,s=new Map,i=256,a=o,r=e.tileInfoView.tileInfo.isWrappable;return s.set(d(t,-1,-1,r).id,new l([-a,-a],[a-i,a-i,a,a])),s.set(d(t,0,-1,r).id,new l([0,-a],[0,a-i,a,a])),s.set(d(t,1,-1,r).id,new l([a,-a],[0,a-i,i,a])),s.set(d(t,-1,0,r).id,new l([-a,0],[a-i,0,a,a])),s.set(d(t,1,0,r).id,new l([a,0],[0,0,i,a])),s.set(d(t,-1,1,r).id,new l([-a,a],[a-i,0,a,i])),s.set(d(t,0,1,r).id,new l([0,a],[0,0,a,i])),s.set(d(t,1,1,r).id,new l([a,a],[0,0,i,i])),s}(e);this._tileKeyToFeatureSets.forEach(((s,r)=>{if(r===e.key.id)s.forEach((e=>a(e.addOrUpdate,(e=>t.push(e)))));else if(i.has(r)){const e=i.get(r),[o,n]=e.offset;s.forEach((e=>a(e.addOrUpdate,(e=>{const s=e.transform(o,n,1,1);t.push(s)}))))}}));const n=r(t,this._schema.mesh,512,512),h={tileKey:e.key.id,intensityInfo:n},p=[n.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",h,{...s,transferList:p})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};h=e([t("esri.views.2d.layers.features.processors.HeatmapProcessor")],h);var p=h;export{p as default};
