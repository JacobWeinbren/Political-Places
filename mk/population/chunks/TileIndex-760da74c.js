import{be as e,g as t}from"../main.js";import{j as l}from"./TilemapCache-1fb40580.js";class r{constructor(e){if(e instanceof l)this._tilemapCache=e;else{if(!e||!("index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index}}dataKey(l,r){if(this._tilemapCache){const{level:i,row:o,col:a}=l,h=new e(l);return this._tilemapCache.fetchAvailabilityUpsample(i,o,a,h,r).then((()=>(h.world=l.world,h))).catch((e=>{if(t(e))throw e;return null}))}return this._getIndexedDataKey(l)}forEach(e,t,l,r,i){this._callback=i,this._maxLevel=t+e,this._forEach(this._tilemap,t,l,r)}_forEach(e,t,l,r){0!==e&&(this._callback(t,l,r),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*l,2*r),this._forEach(e[1],t+1,2*l,2*r+1),this._forEach(e[2],t+1,2*l+1,2*r),this._forEach(e[3],t+1,2*l+1,2*r+1)))}_getIndexedDataKey(t){const l=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return Promise.resolve(null);let r=t;for(;0!==r.level;)r=new e(r.level-1,r.row>>1,r.col>>1,r.world),l.push(r);let i,o,a=this._tilemap,h=l.pop();if(1===a)return Promise.resolve(h);for(;l.length;)if(i=l.pop(),o=(1&i.col)+((1&i.row)<<1),a){if(0===a[o]){h=null;break}if(1===a[o]){h=i;break}h=i,a=a[o]}return Promise.resolve(h)}}export{r};
