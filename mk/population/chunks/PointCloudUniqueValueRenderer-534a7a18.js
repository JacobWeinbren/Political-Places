import{V as e,W as t,X as o,cI as i,bB as r,d1 as s,d0 as l,b3 as n,b$ as p,gb as a,gc as d,gd as u}from"../main.js";var c;let y=c=class extends i{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new c({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e([t({type:String,json:{write:!0}})],y.prototype,"field",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"minValue",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"maxValue",void 0),y=c=e([o("esri.renderers.support.pointCloud.ColorModulation")],y);var h=y;const f=new r({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let m=class extends i{};e([t({type:f.apiValues,readOnly:!0,nonNullable:!0,json:{type:f.jsonValues,read:!1,write:f.write}})],m.prototype,"type",void 0),m=e([o("esri.renderers.support.pointCloud.PointSizeAlgorithm")],m);var b,v=m;let T=b=class extends v{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new b({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e([s({pointCloudFixedSizeAlgorithm:"fixed-size"})],T.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],T.prototype,"size",void 0),e([t({type:Boolean,json:{write:!0}})],T.prototype,"useRealWorldSymbolSizes",void 0),T=b=e([o("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],T);var w,g=T;let V=w=class extends v{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new w({scaleFactor:this.scaleFactor})}};e([s({pointCloudSplatAlgorithm:"splat"})],V.prototype,"type",void 0),e([t({type:Number,value:1,nonNullable:!0,json:{write:!0}})],V.prototype,"scaleFactor",void 0),V=w=e([o("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],V);const j={key:"type",base:v,typeMap:{"fixed-size":g,splat:V}},C=l()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let S=class extends i{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:n(this.pointSizeAlgorithm),colorModulation:n(this.colorModulation),pointsPerInch:n(this.pointsPerInch)}}};e([t({type:C.apiValues,readOnly:!0,nonNullable:!0,json:{type:C.jsonValues,read:!1,write:C.write}})],S.prototype,"type",void 0),e([t({types:j,json:{write:!0}})],S.prototype,"pointSizeAlgorithm",void 0),e([t({type:h,json:{write:!0}})],S.prototype,"colorModulation",void 0),e([t({json:{write:!0},nonNullable:!0,type:Number})],S.prototype,"pointsPerInch",void 0),S=e([o("esri.renderers.PointCloudRenderer")],S),(S||(S={})).fieldTransformTypeKebabDict=new r({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var x,z=S;let R=x=class extends i{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new x({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:n(this.color)})}};e([t({type:String,json:{write:!0}})],R.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],R.prototype,"label",void 0),e([t({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],R.prototype,"minValue",void 0),e([t({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],R.prototype,"maxValue",void 0),e([t({type:p,json:{type:[a],write:!0}})],R.prototype,"color",void 0),R=x=e([o("esri.renderers.support.pointCloud.ColorClassBreakInfo")],R);var I,P=R;let N=I=class extends z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new I({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:n(this.colorClassBreakInfos),legendOptions:n(this.legendOptions)})}};e([s({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],N.prototype,"type",void 0),e([t({json:{write:!0},type:String})],N.prototype,"field",void 0),e([t({type:d,json:{write:!0}})],N.prototype,"legendOptions",void 0),e([t({type:z.fieldTransformTypeKebabDict.apiValues,json:{type:z.fieldTransformTypeKebabDict.jsonValues,read:z.fieldTransformTypeKebabDict.read,write:z.fieldTransformTypeKebabDict.write}})],N.prototype,"fieldTransformType",void 0),e([t({type:[P],json:{write:!0}})],N.prototype,"colorClassBreakInfos",void 0),N=I=e([o("esri.renderers.PointCloudClassBreaksRenderer")],N);var O,B=N;let D=O=class extends z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new O({...this.cloneProperties(),field:n(this.field),fieldTransformType:n(this.fieldTransformType),stops:n(this.stops),legendOptions:n(this.legendOptions)})}};e([s({pointCloudStretchRenderer:"point-cloud-stretch"})],D.prototype,"type",void 0),e([t({json:{write:!0},type:String})],D.prototype,"field",void 0),e([t({type:d,json:{write:!0}})],D.prototype,"legendOptions",void 0),e([t({type:z.fieldTransformTypeKebabDict.apiValues,json:{type:z.fieldTransformTypeKebabDict.jsonValues,read:z.fieldTransformTypeKebabDict.read,write:z.fieldTransformTypeKebabDict.write}})],D.prototype,"fieldTransformType",void 0),e([t({type:[u],json:{write:!0}})],D.prototype,"stops",void 0),D=O=e([o("esri.renderers.PointCloudStretchRenderer")],D);var K,k=D;let q=K=class extends i{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new K({description:this.description,label:this.label,values:n(this.values),color:n(this.color)})}};e([t({type:String,json:{write:!0}})],q.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],q.prototype,"label",void 0),e([t({type:[String],json:{write:!0}})],q.prototype,"values",void 0),e([t({type:p,json:{type:[a],write:!0}})],q.prototype,"color",void 0),q=K=e([o("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],q);var A,M=q;let F=A=class extends z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new A({...this.cloneProperties(),field:n(this.field),fieldTransformType:n(this.fieldTransformType),colorUniqueValueInfos:n(this.colorUniqueValueInfos),legendOptions:n(this.legendOptions)})}};e([s({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],F.prototype,"type",void 0),e([t({json:{write:!0},type:String})],F.prototype,"field",void 0),e([t({type:z.fieldTransformTypeKebabDict.apiValues,json:{type:z.fieldTransformTypeKebabDict.jsonValues,read:z.fieldTransformTypeKebabDict.read,write:z.fieldTransformTypeKebabDict.write}})],F.prototype,"fieldTransformType",void 0),e([t({type:[M],json:{write:!0}})],F.prototype,"colorUniqueValueInfos",void 0),e([t({type:d,json:{write:!0}})],F.prototype,"legendOptions",void 0),F=A=e([o("esri.renderers.PointCloudUniqueValueRenderer")],F);var U=F;export{U as a,k as b,z as c,B as d};