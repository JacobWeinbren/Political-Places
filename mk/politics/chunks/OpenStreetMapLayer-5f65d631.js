import{V as e,W as t,ck as r,de as o,X as p,bO as a,aS as i}from"../main.js";import{x as s}from"./WebTileLayer-78130891.js";let n=class extends s{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.subDomains=["a","b","c"],this.fullExtent=new a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,i.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};e([t({type:r,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"portalItem",void 0),e([t({type:Boolean,json:{read:!1,write:!1}})],n.prototype,"isReference",void 0),e([t({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"refreshInterval",null),e([t({type:o,json:{write:!1}})],n.prototype,"tileInfo",void 0),e([t({type:["show","hide"]})],n.prototype,"listMode",void 0),e([t({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"subDomains",void 0),e([t({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"fullExtent",void 0),e([t({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"urlTemplate",void 0),e([t({type:["OpenStreetMap"]})],n.prototype,"operationalLayerType",void 0),e([t({json:{read:!1}})],n.prototype,"type",void 0),e([t({json:{read:!1,write:!1}})],n.prototype,"copyright",void 0),e([t({json:{read:!1,write:!1}})],n.prototype,"wmtsInfo",void 0),n=e([p("esri.layers.OpenStreetMapLayer")],n);var l=n;export{l as default};
