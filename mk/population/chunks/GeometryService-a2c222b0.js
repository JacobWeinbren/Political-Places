import{dE as e,eh as t,C as r,aB as n,bO as s,aC as i,cd as o,Z as a,_ as l,a0 as N,ew as c,cg as u,cH as p,bz as f,ee as y}from"../main.js";import{r as m,o as T,n as I}from"./project-da517e89.js";const g=new o({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});const _=new o({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});let d=class extends u{constructor(e){super(e),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};a([l({type:String,json:{write:!0}})],d.prototype,"deviationUnit",void 0),a([l({json:{read:{reader:e=>e?e.map((e=>s(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],d.prototype,"geometries",void 0),a([l({type:Number,json:{write:!0}})],d.prototype,"maxDeviation",void 0),d=a([N("esri.rest.support.GeneralizeParameters")],d),d.from=c(d);const S=d;async function O(n,o,a){const l=(o=S.from(o)).toJSON(),N=function(e){const{geometries:t,deviationUnit:r,maxDeviation:n}=e.toJSON(),s={maxDeviation:n};return t&&t.length&&(s.geometries=JSON.stringify({geometryType:i(t[0]),geometries:t}),s.sr=JSON.stringify(t[0].spatialReference)),_.write(r,s,"deviationUnit"),s}(o),c=e(n),u={...c.query,f:"json",...N},p=l.geometries[0].spatialReference,f=t(u,a);return r(c.path+"/generalize",f).then((({data:e})=>(e.geometries||[]).map((e=>s(e).set({spatialReference:p})))))}const R=new o({preserveShape:"preserve-shape"});let U=class extends u{constructor(e){super(e),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};a([l({type:String,json:{write:!0}})],U.prototype,"calculationType",void 0),a([l({type:Boolean,json:{write:!0}})],U.prototype,"geodesic",void 0),a([l({json:{write:!0}})],U.prototype,"lengthUnit",void 0),a([l({type:[p],json:{read:{reader:e=>e?e.map((e=>s(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],U.prototype,"polylines",void 0),U=a([N("esri.rest.support.LengthsParameters")],U),U.from=c(U);const h=U;async function E(n,s,i){const o=function(e){const{polylines:t,lengthUnit:r,geodesic:n,calculationType:s}=e.toJSON(),i={};i.polylines=JSON.stringify(t);const o=e.polylines[0].spatialReference;return i.sr=o.wkid?o.wkid:JSON.stringify(o.toJSON()),r&&(i.lengthUnit=r),n&&(i.geodesic=n),s&&(i.calculationType=R.toJSON(s)),i}(s=h.from(s)),a=e(n),l={...a.query,f:"json",...o},N=t(l,i);return r(a.path+"/lengths",N).then((({data:e})=>e))}const A=new o({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),J=new o({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let w=class extends u{constructor(e){super(e),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};a([l({type:Number,json:{write:!0}})],w.prototype,"bevelRatio",void 0),a([l({json:{read:{reader:e=>e?e.map((e=>s(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],w.prototype,"geometries",void 0),a([l({type:Number,json:{write:!0}})],w.prototype,"offsetDistance",void 0),a([l({type:String,json:{write:!0}})],w.prototype,"offsetHow",void 0),a([l({type:String,json:{write:!0}})],w.prototype,"offsetUnit",void 0),w=a([N("esri.rest.support.OffsetParameters")],w),w.from=c(w);const v=w;async function j(n,o,a){const l=function(e){const{geometries:t,bevelRatio:r,offsetDistance:n,offsetHow:s,offsetUnit:o}=e.toJSON(),a={bevelRatio:r,offsetDistance:n};return t&&t.length&&(a.geometries=JSON.stringify({geometryType:i(t[0]),geometries:t}),a.sr=JSON.stringify(t[0].spatialReference)),s&&(a.offsetHow=A.toJSON(s)),o&&(a.offsetUnit=J.toJSON(o)),a}(o=v.from(o)),N=e(n),c={...N.query,f:"json",...l},u=o.geometries[0].spatialReference,p=t(c,a);return r(N.path+"/offset",p).then((({data:e})=>(e.geometries||[]).map((e=>s(e).set({spatialReference:u})))))}const D=new o({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});let C=class extends u{constructor(e){super(e),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};a([l({json:{read:{reader:e=>e?e.map((e=>s(e))):null},write:{writer:(e,t)=>{t.geometries1=e.map((e=>e.toJSON()))}}}})],C.prototype,"geometries1",void 0),a([l({json:{read:{reader:e=>e?e.map((e=>s(e))):null},write:{writer:(e,t)=>{t.geometries2=e.map((e=>e.toJSON()))}}}})],C.prototype,"geometries2",void 0),a([l({type:String,json:{write:!0}})],C.prototype,"relation",void 0),a([l({type:String,json:{write:!0}})],C.prototype,"relationParameter",void 0),C=a([N("esri.rest.support.RelationParameters")],C),C.from=c(C);const L=C;async function M(n,s,o){const a=function(e){const{geometries1:t,geometries2:r,relation:n,relationParameter:s}=e.toJSON(),o={};if(t&&t.length){o.geometries1=JSON.stringify({geometryType:i(t[0]),geometries:t});const e=t[0].spatialReference;o.sr=e.wkid?e.wkid:JSON.stringify(e)}return r&&r.length>0&&(o.geometries2=JSON.stringify({geometryType:i(r[0]),geometries:r})),n&&(o.relation=D.toJSON(n)),s&&(o.relationParam=s),o}(s=L.from(s)),l=e(n),N={...l.query,f:"json",...a},c=t(N,o);return r(l.path+"/relation",c).then((({data:e})=>e.relations))}const q=new o({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});let G=class extends u{constructor(e){super(e),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};a([l({type:String,json:{write:!0}})],G.prototype,"extendHow",void 0),a([l({type:[p],json:{read:{reader:e=>e?e.map((e=>s(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],G.prototype,"polylines",void 0),a([l({json:{read:{reader:e=>e?s(e):null},write:{writer:(e,t)=>{t.trimExtendTo=e.toJSON()}}}})],G.prototype,"trimExtendTo",void 0),G=a([N("esri.rest.support.TrimExtendParameters")],G),G.from=c(G);const x=G;async function H(n,s,i){const o=function(e){const{extendHow:t,polylines:r,trimExtendTo:n}=e.toJSON(),s={};return s.extendHow=q.toJSON(t),r&&r.length&&(s.polylines=JSON.stringify(r),s.sr=JSON.stringify(r[0].spatialReference)),n&&(s.trimExtendTo=JSON.stringify(n)),s}(s=x.from(s)),a=e(n),l={...a.query,f:"json",...o},N=s.sr,c=t(l,i);return r(a.path+"/trimExtend",c).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new p({spatialReference:N,paths:e})))))}let b=class extends y{constructor(e){super(e),this.url=null}areasAndLengths(n,s){return async function(n,s,i){const o=e(n),a={...o.query,f:"json",...s.toJSON()},l=t(a,i);return r(o.path+"/areasAndLengths",l).then((e=>e.data))}(this.url,n,s)}autoComplete(s,i,o){return async function(s,i,o,a){const l=i[0].spatialReference,N=e(s),c={...N.query,f:"json",sr:JSON.stringify(l.toJSON()),polygons:JSON.stringify(m(i).geometries),polylines:JSON.stringify(m(o).geometries)},u=t(c,a);return r(N.path+"/autoComplete",u).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new n({spatialReference:l,rings:e})))))}(this.url,s,i,o)}buffer(s,i){return async function(s,i,o){const a=e(s),l={...a.query,f:"json",...i.toJSON()},N=i.outSpatialReference||i.geometries[0].spatialReference,c=t(l,o);return r(a.path+"/buffer",c).then((e=>(e.data.geometries||[]).map((({rings:e})=>new n({spatialReference:N,rings:e})))))}(this.url,s,i)}convexHull(n,i){return async function(n,i,o){const a=i[0].spatialReference,l=e(n),N={...l.query,f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(m(i))},c=t(N,o);return r(l.path+"/convexHull",c).then((({data:e})=>s(e.geometry).set({spatialReference:a})))}(this.url,n,i)}cut(t,n,o){return async function(t,n,o,a){const l=e(t),N=n[0].spatialReference,c={...a,query:{...l.query,f:"json",sr:JSON.stringify(N),target:JSON.stringify({geometryType:i(n[0]),geometries:n}),cutter:JSON.stringify(o)}},u=await r(l.path+"/cut",c),{cutIndexes:p,geometries:f=[]}=u.data;return{cutIndexes:p,geometries:f.map((e=>{const t=s(e);return t.spatialReference=N,t}))}}(this.url,t,n,o)}densify(n,i){return async function(n,i,o){const a=i.geometries[0].spatialReference,l=e(n),N={...l.query,f:"json",...i.toJSON()},c=t(N,o);return r(l.path+"/densify",c).then((({data:e})=>(e.geometries||[]).map((e=>s(e).set({spatialReference:a})))))}(this.url,n,i)}difference(t,n,o){return async function(t,n,o,a){const l=n[0].spatialReference,N=e(t);let c={query:{...N.query,f:"json",sr:JSON.stringify(l.toJSON()),geometries:JSON.stringify(m(n)),geometry:JSON.stringify({geometryType:i(o),geometry:o.toJSON()})}};return a&&(c={...a,...c}),r(N.path+"/difference",c).then((({data:e})=>(e.geometries||[]).map((e=>s(e).set({spatialReference:l})))))}(this.url,t,n,o)}distance(n,s){return async function(n,s,i){const o=e(n),a={...o.query,f:"json",...s.toJSON()},l=t(a,i);return r(o.path+"/distance",l).then((({data:e})=>e&&e.distance))}(this.url,n,s)}fromGeoCoordinateString(n,s){return async function(n,s,i){const o={};null!=s.sr&&"object"==typeof s.sr?o.sr=s.sr.wkid||JSON.stringify(s.sr):o.sr=s.sr,o.strings=JSON.stringify(s.strings);const a=s.conversionType||"mgrs";o.conversionType=g.toJSON(a),o.conversionMode=s.conversionMode;const l=e(n),N={...l.query,f:"json",...o},c=t(N,i);return r(l.path+"/fromGeoCoordinateString",c).then((({data:e})=>e.coordinates))}(this.url,n,s)}generalize(e,t){return O(this.url,e,t)}intersect(n,o,a){return async function(n,o,a,l){const N=o[0].spatialReference,c=e(n),u={...c.query,f:"json",sr:JSON.stringify(N.toJSON()),geometries:JSON.stringify(m(o)),geometry:JSON.stringify({geometryType:i(a),geometry:a.toJSON()})},p=t(u,l);return r(c.path+"/intersect",p).then((({data:e})=>(e.geometries||[]).map((e=>s(e).set({spatialReference:N})))))}(this.url,n,o,a)}labelPoints(n,i){return function(n,i,o){const a=i.map((e=>e.toJSON())),l=i[0].spatialReference,N=e(n),c={...N.query,f:"json",sr:l.wkid?l.wkid:JSON.stringify(l.toJSON()),polygons:JSON.stringify(a)},u=t(c,o);return r(N.path+"/labelPoints",u).then((({data:e})=>(e.labelPoints||[]).map((e=>s(e).set({spatialReference:l})))))}(this.url,n,i)}lengths(e,t){return E(this.url,e,t)}offset(e,t){return j(this.url,e,t)}project(e,t){return I(this.url,e,t)}relation(e,t){return M(this.url,e,t)}reshape(n,o,a){return async function(n,o,a,l){const N=o.spatialReference,c=e(n),u={...c.query,f:"json",sr:JSON.stringify(N.toJSON()),target:JSON.stringify({geometryType:i(o),geometry:o.toJSON()}),reshaper:JSON.stringify(a.toJSON())},p=t(u,l);return r(c.path+"/reshape",p).then((({data:e})=>s(e.geometry).set({spatialReference:N})))}(this.url,n,o,a)}simplify(e,t){return async function(e,t,n){const s="string"==typeof e?f(e):e,o=t[0].spatialReference,a=i(t[0]),l={...n,query:{...s.query,f:"json",sr:o.wkid?o.wkid:JSON.stringify(o),geometries:JSON.stringify(m(t))}},{data:N}=await r(s.path+"/simplify",l);return T(N.geometries,a,o)}(this.url,e,t)}toGeoCoordinateString(n,s){return async function(n,s,i){const o={};null!=s.sr&&"object"==typeof s.sr?o.sr=s.sr.wkid||JSON.stringify(s.sr):o.sr=s.sr,o.coordinates=JSON.stringify(s.coordinates);const a=s.conversionType||"mgrs";o.conversionType=g.toJSON(a),o.conversionMode=s.conversionMode,o.numOfDigits=s.numOfDigits,o.rounding=s.rounding,o.addSpaces=s.addSpaces;const l=e(n),N={...l.query,f:"json",...o},c=t(N,i);return r(l.path+"/toGeoCoordinateString",c).then((({data:e})=>e.strings))}(this.url,n,s)}trimExtend(e,t){return H(this.url,e,t)}union(n,i){return async function(n,i,o){const a=i[0].spatialReference,l=e(n),N={...l.query,f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(m(i))},c=t(N,o);return r(l.path+"/union",c).then((({data:e})=>s(e.geometry).set({spatialReference:a})))}(this.url,n,i)}};b.UNIT_METER=9001,b.UNIT_GERMAN_METER=9031,b.UNIT_FOOT=9002,b.UNIT_SURVEY_FOOT=9003,b.UNIT_CLARKE_FOOT=9005,b.UNIT_FATHOM=9014,b.UNIT_NAUTICAL_MILE=9030,b.UNIT_SURVEY_CHAIN=9033,b.UNIT_SURVEY_LINK=9034,b.UNIT_SURVEY_MILE=9035,b.UNIT_KILOMETER=9036,b.UNIT_CLARKE_YARD=9037,b.UNIT_CLARKE_CHAIN=9038,b.UNIT_CLARKE_LINK=9039,b.UNIT_SEARS_YARD=9040,b.UNIT_SEARS_FOOT=9041,b.UNIT_SEARS_CHAIN=9042,b.UNIT_SEARS_LINK=9043,b.UNIT_BENOIT_1895A_YARD=9050,b.UNIT_BENOIT_1895A_FOOT=9051,b.UNIT_BENOIT_1895A_CHAIN=9052,b.UNIT_BENOIT_1895A_LINK=9053,b.UNIT_BENOIT_1895B_YARD=9060,b.UNIT_BENOIT_1895B_FOOT=9061,b.UNIT_BENOIT_1895B_CHAIN=9062,b.UNIT_BENOIT_1895B_LINK=9063,b.UNIT_INDIAN_FOOT=9080,b.UNIT_INDIAN_1937_FOOT=9081,b.UNIT_INDIAN_1962_FOOT=9082,b.UNIT_INDIAN_1975_FOOT=9083,b.UNIT_INDIAN_YARD=9084,b.UNIT_INDIAN_1937_YARD=9085,b.UNIT_INDIAN_1962_YARD=9086,b.UNIT_INDIAN_1975_YARD=9087,b.UNIT_FOOT_1865=9070,b.UNIT_RADIAN=9101,b.UNIT_DEGREE=9102,b.UNIT_ARCMINUTE=9103,b.UNIT_ARCSECOND=9104,b.UNIT_GRAD=9105,b.UNIT_GON=9106,b.UNIT_MICRORADIAN=9109,b.UNIT_ARCMINUTE_CENTESIMAL=9112,b.UNIT_ARCSECOND_CENTESIMAL=9113,b.UNIT_MIL6400=9114,b.UNIT_BRITISH_1936_FOOT=9095,b.UNIT_GOLDCOAST_FOOT=9094,b.UNIT_INTERNATIONAL_CHAIN=109003,b.UNIT_INTERNATIONAL_LINK=109004,b.UNIT_INTERNATIONAL_YARD=109001,b.UNIT_STATUTE_MILE=9093,b.UNIT_SURVEY_YARD=109002,b.UNIT_50KILOMETER_LENGTH=109030,b.UNIT_150KILOMETER_LENGTH=109031,b.UNIT_DECIMETER=109005,b.UNIT_CENTIMETER=109006,b.UNIT_MILLIMETER=109007,b.UNIT_INTERNATIONAL_INCH=109008,b.UNIT_US_SURVEY_INCH=109009,b.UNIT_INTERNATIONAL_ROD=109010,b.UNIT_US_SURVEY_ROD=109011,b.UNIT_US_NAUTICAL_MILE=109012,b.UNIT_UK_NAUTICAL_MILE=109013,b.UNIT_SQUARE_INCHES="esriSquareInches",b.UNIT_SQUARE_FEET="esriSquareFeet",b.UNIT_SQUARE_YARDS="esriSquareYards",b.UNIT_ACRES="esriAcres",b.UNIT_SQUARE_MILES="esriSquareMiles",b.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",b.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",b.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",b.UNIT_SQUARE_METERS="esriSquareMeters",b.UNIT_ARES="esriAres",b.UNIT_HECTARES="esriHectares",b.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",a([l()],b.prototype,"url",void 0),b=a([N("esri.tasks.GeometryService")],b);const Y=b;export{Y as default};
