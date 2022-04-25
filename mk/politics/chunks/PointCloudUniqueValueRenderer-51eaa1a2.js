import{Z as e,_ as t,a0 as o,cg as i,cd as r,eg as s,ef as l,b3 as n,bf as p,gO as a,gP as d,gQ as u}from"../main.js";var c;let y=c=class extends i{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new c({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e([t({type:String,json:{write:!0}})],y.prototype,"field",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"minValue",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"maxValue",void 0),y=c=e([o("esri.renderers.support.pointCloud.ColorModulation")],y);const h=y,f=new r({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let m=class extends i{};e([t({type:f.apiValues,readOnly:!0,nonNullable:!0,json:{type:f.jsonValues,read:!1,write:f.write}})],m.prototype,"type",void 0),m=e([o("esri.renderers.support.pointCloud.PointSizeAlgorithm")],m);const b=m;var v;let T=v=class extends b{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new v({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e([s({pointCloudFixedSizeAlgorithm:"fixed-size"})],T.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],T.prototype,"size",void 0),e([t({type:Boolean,json:{write:!0}})],T.prototype,"useRealWorldSymbolSizes",void 0),T=v=e([o("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],T);const w=T;var g;let V=g=class extends b{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new g({scaleFactor:this.scaleFactor})}};e([s({pointCloudSplatAlgorithm:"splat"})],V.prototype,"type",void 0),e([t({type:Number,value:1,nonNullable:!0,json:{write:!0}})],V.prototype,"scaleFactor",void 0),V=g=e([o("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],V);const j={key:"type",base:b,typeMap:{"fixed-size":w,splat:V}},C=l()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let S=class extends i{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:n(this.pointSizeAlgorithm),colorModulation:n(this.colorModulation),pointsPerInch:n(this.pointsPerInch)}}};e([t({type:C.apiValues,readOnly:!0,nonNullable:!0,json:{type:C.jsonValues,read:!1,write:C.write}})],S.prototype,"type",void 0),e([t({types:j,json:{write:!0}})],S.prototype,"pointSizeAlgorithm",void 0),e([t({type:h,json:{write:!0}})],S.prototype,"colorModulation",void 0),e([t({json:{write:!0},nonNullable:!0,type:Number})],S.prototype,"pointsPerInch",void 0),S=e([o("esri.renderers.PointCloudRenderer")],S),(S||(S={})).fieldTransformTypeKebabDict=new r({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const x=S;var z;let P=z=class extends i{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new z({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:n(this.color)})}};e([t({type:String,json:{write:!0}})],P.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],P.prototype,"label",void 0),e([t({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],P.prototype,"minValue",void 0),e([t({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],P.prototype,"maxValue",void 0),e([t({type:p,json:{type:[a],write:!0}})],P.prototype,"color",void 0),P=z=e([o("esri.renderers.support.pointCloud.ColorClassBreakInfo")],P);const R=P;var O;let I=O=class extends x{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new O({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:n(this.colorClassBreakInfos),legendOptions:n(this.legendOptions)})}};e([s({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],I.prototype,"type",void 0),e([t({json:{write:!0},type:String})],I.prototype,"field",void 0),e([t({type:d,json:{write:!0}})],I.prototype,"legendOptions",void 0),e([t({type:x.fieldTransformTypeKebabDict.apiValues,json:{type:x.fieldTransformTypeKebabDict.jsonValues,read:x.fieldTransformTypeKebabDict.read,write:x.fieldTransformTypeKebabDict.write}})],I.prototype,"fieldTransformType",void 0),e([t({type:[R],json:{write:!0}})],I.prototype,"colorClassBreakInfos",void 0),I=O=e([o("esri.renderers.PointCloudClassBreaksRenderer")],I);const N=I;var D;let K=D=class extends x{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new D({...this.cloneProperties(),field:n(this.field),fieldTransformType:n(this.fieldTransformType),stops:n(this.stops),legendOptions:n(this.legendOptions)})}};e([s({pointCloudStretchRenderer:"point-cloud-stretch"})],K.prototype,"type",void 0),e([t({json:{write:!0},type:String})],K.prototype,"field",void 0),e([t({type:d,json:{write:!0}})],K.prototype,"legendOptions",void 0),e([t({type:x.fieldTransformTypeKebabDict.apiValues,json:{type:x.fieldTransformTypeKebabDict.jsonValues,read:x.fieldTransformTypeKebabDict.read,write:x.fieldTransformTypeKebabDict.write}})],K.prototype,"fieldTransformType",void 0),e([t({type:[u],json:{write:!0}})],K.prototype,"stops",void 0),K=D=e([o("esri.renderers.PointCloudStretchRenderer")],K);const k=K;var B;let q=B=class extends i{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new B({description:this.description,label:this.label,values:n(this.values),color:n(this.color)})}};e([t({type:String,json:{write:!0}})],q.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],q.prototype,"label",void 0),e([t({type:[String],json:{write:!0}})],q.prototype,"values",void 0),e([t({type:p,json:{type:[a],write:!0}})],q.prototype,"color",void 0),q=B=e([o("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],q);const A=q;var M;let F=M=class extends x{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new M({...this.cloneProperties(),field:n(this.field),fieldTransformType:n(this.fieldTransformType),colorUniqueValueInfos:n(this.colorUniqueValueInfos),legendOptions:n(this.legendOptions)})}};e([s({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],F.prototype,"type",void 0),e([t({json:{write:!0},type:String})],F.prototype,"field",void 0),e([t({type:x.fieldTransformTypeKebabDict.apiValues,json:{type:x.fieldTransformTypeKebabDict.jsonValues,read:x.fieldTransformTypeKebabDict.read,write:x.fieldTransformTypeKebabDict.write}})],F.prototype,"fieldTransformType",void 0),e([t({type:[A],json:{write:!0}})],F.prototype,"colorUniqueValueInfos",void 0),e([t({type:d,json:{write:!0}})],F.prototype,"legendOptions",void 0),F=M=e([o("esri.renderers.PointCloudUniqueValueRenderer")],F);const U=F;export{U as a,k as b,x as c,N as d};
