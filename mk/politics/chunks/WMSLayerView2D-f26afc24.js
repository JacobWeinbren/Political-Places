import{V as e,W as t,dN as r,X as i,a,n as s,dz as o,g as n,bO as p}from"../main.js";import{t as m}from"./BitmapContainer-9adb3043.js";import{l as h,d}from"./LayerView-33a2657c.js";import{S as l}from"./ExportStrategy-1ead8fec.js";import{l as u}from"./ExportWMSImageParameters-9867f186.js";import"./WGLContainer-a8df79e7.js";import"./definitions-8d307e62.js";import"./VertexArrayObject-45b080fe.js";import"./Texture-869d32a8.js";import"./Utils-100690b3.js";import"./ShaderCompiler-b26096ad.js";import"./config-31d4f506.js";import"./GeometryUtils-9ff4b746.js";import"./MaterialKey-8e40704a.js";import"./Container-8707ff0b.js";import"./mat4f32-2308129f.js";import"./earcut-0cc318b8.js";import"./Bitmap-cde57f46.js";const c=s=>{let o=class extends s{initialize(){this.exportImageParameters=new u({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new a("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:r}=t;if(!r)return Promise.reject(new a("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));const i=this.createFetchPopupFeaturesQuery(e);if(!i)return Promise.resolve([]);const{extent:s,width:o,height:n,x:p,y:m}=i;if(!(s&&o&&n))throw new a("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:o,height:n});const h=t.fetchFeatureInfo(s,o,n,p,m);return Promise.resolve(h?[h]:[])}};return e([t()],o.prototype,"exportImageParameters",void 0),e([t({readOnly:!0})],o.prototype,"exportImageVersion",null),e([t()],o.prototype,"layer",void 0),e([t(r)],o.prototype,"timeExtent",void 0),o=e([i("esri.layers.mixins.WMSLayerView")],o),o},y=s.getLogger("esri.views.2d.layers.WMSLayerView2D");let f=class extends(c(o(h(d)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new a("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{n(e)||y.error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this._bitmapContainer=new m,this.container.addChild(this._bitmapContainer),this.strategy=new l({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:a}=e,{spatialReference:s}=t;let o=null,n=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:d,y:l}=e,u=d+h*t,c=l-h*r;return i>=d&&i<=u&&a<=l&&a>=c&&(o=new p({xmin:d,ymin:c,xmax:u,ymax:l,spatialReference:s}),n=t,m=r,!0)})),!o)return null;const h=o.width/n,d=Math.round((i-o.xmin)/h),l=Math.round((o.ymax-a)/h);return{extent:o,width:n,height:m,x:d,y:l}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};e([t()],f.prototype,"strategy",void 0),e([t()],f.prototype,"updating",void 0),f=e([i("esri.views.2d.layers.WMSLayerView2D")],f);var g=f;export{g as default};
