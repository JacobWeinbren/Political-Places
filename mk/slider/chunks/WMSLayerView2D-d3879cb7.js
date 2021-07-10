import{V as e,W as t,dO as r,X as i,a,n as s,dA as o,g as n,bV as p}from"../main.js";import{t as m}from"./BitmapContainer-d377adb9.js";import{l as h,d}from"./LayerView-e8d7095f.js";import{S as l}from"./ExportStrategy-b103e865.js";import{l as c}from"./ExportWMSImageParameters-ec3805f8.js";import"./WGLContainer-bd762bdd.js";import"./definitions-666095f0.js";import"./VertexArrayObject-c99777e0.js";import"./Texture-7c424e46.js";import"./Utils-c8d61350.js";import"./ShaderCompiler-730f6903.js";import"./config-a192e994.js";import"./GeometryUtils-d8d541eb.js";import"./MaterialKey-9efa2578.js";import"./Container-294be792.js";import"./mat4f32-85cc7f8e.js";import"./earcut-c458cc7d.js";import"./Bitmap-2d329013.js";const u=s=>{let o=class extends s{initialize(){this.exportImageParameters=new c({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new a("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:r}=t;if(!r)return Promise.reject(new a("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));const i=this.createFetchPopupFeaturesQuery(e);if(!i)return Promise.resolve([]);const{extent:s,width:o,height:n,x:p,y:m}=i;if(!(s&&o&&n))throw new a("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:o,height:n});const h=t.fetchFeatureInfo(s,o,n,p,m);return Promise.resolve(h?[h]:[])}};return e([t()],o.prototype,"exportImageParameters",void 0),e([t({readOnly:!0})],o.prototype,"exportImageVersion",null),e([t()],o.prototype,"layer",void 0),e([t(r)],o.prototype,"timeExtent",void 0),o=e([i("esri.layers.mixins.WMSLayerView")],o),o},y=s.getLogger("esri.views.2d.layers.WMSLayerView2D");let g=class extends(u(o(h(d)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new a("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{n(e)||y.error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this._bitmapContainer=new m,this.container.addChild(this._bitmapContainer),this.strategy=new l({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:a}=e,{spatialReference:s}=t;let o=null,n=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:d,y:l}=e,c=d+h*t,u=l-h*r;return i>=d&&i<=c&&a<=l&&a>=u&&(o=new p({xmin:d,ymin:u,xmax:c,ymax:l,spatialReference:s}),n=t,m=r,!0)})),!o)return null;const h=o.width/n,d=Math.round((i-o.xmin)/h),l=Math.round((o.ymax-a)/h);return{extent:o,width:n,height:m,x:d,y:l}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};e([t()],g.prototype,"strategy",void 0),e([t()],g.prototype,"updating",void 0),g=e([i("esri.views.2d.layers.WMSLayerView2D")],g);var f=g;export default f;
