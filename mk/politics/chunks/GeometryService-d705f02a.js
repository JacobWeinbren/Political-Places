import{c_ as e,d2 as t,L as r,av as n,dj as s,aT as i,c3 as o,bB as a,V as l,W as N,X as c,dk as u,cI as p,cy as f,co as y,c$ as m}from"../main.js";import{a as T}from"./ProjectParameters-0bba9aa5.js";async function I(n,s,i){const o=e(n),a={...o.query,f:"json",...s.toJSON()},l=t(a,i);return r(o.path+"/areasAndLengths",l).then((e=>e.data))}function g(e){return{geometryType:n(e[0]),geometries:e.map((e=>e.toJSON()))}}function S(e,t,r){const n=s(t);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=r,t}))}async function d(n,s,o,a){const l=s[0].spatialReference,N=e(n),c={...N.query,f:"json",sr:JSON.stringify(l.toJSON()),polygons:JSON.stringify(g(s).geometries),polylines:JSON.stringify(g(o).geometries)},u=t(c,a);return r(N.path+"/autoComplete",u).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new i({spatialReference:l,rings:e})))))}async function _(n,s,o){const a=e(n),l={...a.query,f:"json",...s.toJSON()},N=s.outSpatialReference||s.geometries[0].spatialReference,c=t(l,o);return r(a.path+"/buffer",c).then((e=>(e.data.geometries||[]).map((({rings:e})=>new i({spatialReference:N,rings:e})))))}async function O(n,s,i){const a=s[0].spatialReference,l=e(n),N={...l.query,f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(g(s))},c=t(N,i);return r(l.path+"/convexHull",c).then((({data:e})=>o(e.geometry).set({spatialReference:a})))}async function R(t,s,i,a){const l=e(t),N=s[0].spatialReference,c={...a,query:{...l.query,f:"json",sr:JSON.stringify(N),target:JSON.stringify({geometryType:n(s[0]),geometries:s}),cutter:JSON.stringify(i)}},u=await r(l.path+"/cut",c),{cutIndexes:p,geometries:f=[]}=u.data;return{cutIndexes:p,geometries:f.map((e=>{const t=o(e);return t.spatialReference=N,t}))}}async function U(n,s,i){const a=s.geometries[0].spatialReference,l=e(n),N={...l.query,f:"json",...s.toJSON()},c=t(N,i);return r(l.path+"/densify",c).then((({data:e})=>(e.geometries||[]).map((e=>o(e).set({spatialReference:a})))))}async function h(t,s,i,a){const l=s[0].spatialReference,N=e(t);let c={query:{...N.query,f:"json",sr:JSON.stringify(l.toJSON()),geometries:JSON.stringify(g(s)),geometry:JSON.stringify({geometryType:n(i),geometry:i.toJSON()})}};return a&&(c={...a,...c}),r(N.path+"/difference",c).then((({data:e})=>(e.geometries||[]).map((e=>o(e).set({spatialReference:l})))))}async function E(n,s,i){const o=e(n),a={...o.query,f:"json",...s.toJSON()},l=t(a,i);return r(o.path+"/distance",l).then((({data:e})=>e&&e.distance))}const A=new a({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});async function J(n,s,i){const o={};null!=s.sr&&"object"==typeof s.sr?o.sr=s.sr.wkid||JSON.stringify(s.sr):o.sr=s.sr,o.strings=JSON.stringify(s.strings);const a=s.conversionType||"mgrs";o.conversionType=A.toJSON(a),o.conversionMode=s.conversionMode;const l=e(n),N={...l.query,f:"json",...o},c=t(N,i);return r(l.path+"/fromGeoCoordinateString",c).then((({data:e})=>e.coordinates))}let v=class extends p{constructor(e){super(e),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};l([N({type:String,json:{write:!0}})],v.prototype,"deviationUnit",void 0),l([N({json:{read:{reader:e=>e?e.map((e=>o(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],v.prototype,"geometries",void 0),l([N({type:Number,json:{write:!0}})],v.prototype,"maxDeviation",void 0),v=l([c("esri.rest.support.GeneralizeParameters")],v),v.from=u(v);var w=v;const j=new a({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});async function D(s,i,a){const l=(i=w.from(i)).toJSON(),N=function(e){const{geometries:t,deviationUnit:r,maxDeviation:s}=e.toJSON(),i={maxDeviation:s};return t&&t.length&&(i.geometries=JSON.stringify({geometryType:n(t[0]),geometries:t}),i.sr=JSON.stringify(t[0].spatialReference)),j.write(r,i,"deviationUnit"),i}(i),c=e(s),u={...c.query,f:"json",...N},p=l.geometries[0].spatialReference,f=t(u,a);return r(c.path+"/generalize",f).then((({data:e})=>(e.geometries||[]).map((e=>o(e).set({spatialReference:p})))))}async function L(s,i,a,l){const N=i[0].spatialReference,c=e(s),u={...c.query,f:"json",sr:JSON.stringify(N.toJSON()),geometries:JSON.stringify(g(i)),geometry:JSON.stringify({geometryType:n(a),geometry:a.toJSON()})},p=t(u,l);return r(c.path+"/intersect",p).then((({data:e})=>(e.geometries||[]).map((e=>o(e).set({spatialReference:N})))))}function C(n,s,i){const a=s.map((e=>e.toJSON())),l=s[0].spatialReference,N=e(n),c={...N.query,f:"json",sr:l.wkid?l.wkid:JSON.stringify(l.toJSON()),polygons:JSON.stringify(a)},u=t(c,i);return r(N.path+"/labelPoints",u).then((({data:e})=>(e.labelPoints||[]).map((e=>o(e).set({spatialReference:l})))))}let M=class extends p{constructor(e){super(e),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};l([N({type:String,json:{write:!0}})],M.prototype,"calculationType",void 0),l([N({type:Boolean,json:{write:!0}})],M.prototype,"geodesic",void 0),l([N({json:{write:!0}})],M.prototype,"lengthUnit",void 0),l([N({type:[f],json:{read:{reader:e=>e?e.map((e=>o(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],M.prototype,"polylines",void 0),M=l([c("esri.rest.support.LengthsParameters")],M),M.from=u(M);var q=M;const G=new a({preserveShape:"preserve-shape"});async function x(n,s,i){const o=function(e){const{polylines:t,lengthUnit:r,geodesic:n,calculationType:s}=e.toJSON(),i={};i.polylines=JSON.stringify(t);const o=e.polylines[0].spatialReference;return i.sr=o.wkid?o.wkid:JSON.stringify(o.toJSON()),r&&(i.lengthUnit=r),n&&(i.geodesic=n),s&&(i.calculationType=G.toJSON(s)),i}(s=q.from(s)),a=e(n),l={...a.query,f:"json",...o},N=t(l,i);return r(a.path+"/lengths",N).then((({data:e})=>e))}let H=class extends p{constructor(e){super(e),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};l([N({type:Number,json:{write:!0}})],H.prototype,"bevelRatio",void 0),l([N({json:{read:{reader:e=>e?e.map((e=>o(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],H.prototype,"geometries",void 0),l([N({type:Number,json:{write:!0}})],H.prototype,"offsetDistance",void 0),l([N({type:String,json:{write:!0}})],H.prototype,"offsetHow",void 0),l([N({type:String,json:{write:!0}})],H.prototype,"offsetUnit",void 0),H=l([c("esri.rest.support.OffsetParameters")],H),H.from=u(H);var b=H;const Y=new a({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),B=new a({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});async function F(s,i,a){const l=function(e){const{geometries:t,bevelRatio:r,offsetDistance:s,offsetHow:i,offsetUnit:o}=e.toJSON(),a={bevelRatio:r,offsetDistance:s};return t&&t.length&&(a.geometries=JSON.stringify({geometryType:n(t[0]),geometries:t}),a.sr=JSON.stringify(t[0].spatialReference)),i&&(a.offsetHow=Y.toJSON(i)),o&&(a.offsetUnit=B.toJSON(o)),a}(i=b.from(i)),N=e(s),c={...N.query,f:"json",...l},u=i.geometries[0].spatialReference,p=t(c,a);return r(N.path+"/offset",p).then((({data:e})=>(e.geometries||[]).map((e=>o(e).set({spatialReference:u})))))}const K=u(T);async function k(s,i,o){i=K(i);const a=e(s),l={...a.query,f:"json",...i.toJSON()},N=i.outSpatialReference,c=n(i.geometries[0]),u=t(l,o);return r(a.path+"/project",u).then((({data:{geometries:e}})=>S(e,c,N)))}let P=class extends p{constructor(e){super(e),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};l([N({json:{read:{reader:e=>e?e.map((e=>o(e))):null},write:{writer:(e,t)=>{t.geometries1=e.map((e=>e.toJSON()))}}}})],P.prototype,"geometries1",void 0),l([N({json:{read:{reader:e=>e?e.map((e=>o(e))):null},write:{writer:(e,t)=>{t.geometries2=e.map((e=>e.toJSON()))}}}})],P.prototype,"geometries2",void 0),l([N({type:String,json:{write:!0}})],P.prototype,"relation",void 0),l([N({type:String,json:{write:!0}})],P.prototype,"relationParameter",void 0),P=l([c("esri.rest.support.RelationParameters")],P),P.from=u(P);var Q=P;const V=new a({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});async function z(s,i,o){const a=function(e){const{geometries1:t,geometries2:r,relation:s,relationParameter:i}=e.toJSON(),o={};if(t&&t.length){o.geometries1=JSON.stringify({geometryType:n(t[0]),geometries:t});const e=t[0].spatialReference;o.sr=e.wkid?e.wkid:JSON.stringify(e)}return r&&r.length>0&&(o.geometries2=JSON.stringify({geometryType:n(r[0]),geometries:r})),s&&(o.relation=V.toJSON(s)),i&&(o.relationParam=i),o}(i=Q.from(i)),l=e(s),N={...l.query,f:"json",...a},c=t(N,o);return r(l.path+"/relation",c).then((({data:e})=>e.relations))}async function W(s,i,a,l){const N=i.spatialReference,c=e(s),u={...c.query,f:"json",sr:JSON.stringify(N.toJSON()),target:JSON.stringify({geometryType:n(i),geometry:i.toJSON()}),reshaper:JSON.stringify(a.toJSON())},p=t(u,l);return r(c.path+"/reshape",p).then((({data:e})=>o(e.geometry).set({spatialReference:N})))}async function X(n,s,i){const o={};null!=s.sr&&"object"==typeof s.sr?o.sr=s.sr.wkid||JSON.stringify(s.sr):o.sr=s.sr,o.coordinates=JSON.stringify(s.coordinates);const a=s.conversionType||"mgrs";o.conversionType=A.toJSON(a),o.conversionMode=s.conversionMode,o.numOfDigits=s.numOfDigits,o.rounding=s.rounding,o.addSpaces=s.addSpaces;const l=e(n),N={...l.query,f:"json",...o},c=t(N,i);return r(l.path+"/toGeoCoordinateString",c).then((({data:e})=>e.strings))}let $=class extends p{constructor(e){super(e),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};l([N({type:String,json:{write:!0}})],$.prototype,"extendHow",void 0),l([N({type:[f],json:{read:{reader:e=>e?e.map((e=>o(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],$.prototype,"polylines",void 0),l([N({json:{read:{reader:e=>e?o(e):null},write:{writer:(e,t)=>{t.trimExtendTo=e.toJSON()}}}})],$.prototype,"trimExtendTo",void 0),$=l([c("esri.rest.support.TrimExtendParameters")],$),$.from=u($);var Z=$;const ee=new a({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});async function te(n,s,i){const o=function(e){const{extendHow:t,polylines:r,trimExtendTo:n}=e.toJSON(),s={};return s.extendHow=ee.toJSON(t),r&&r.length&&(s.polylines=JSON.stringify(r),s.sr=JSON.stringify(r[0].spatialReference)),n&&(s.trimExtendTo=JSON.stringify(n)),s}(s=Z.from(s)),a=e(n),l={...a.query,f:"json",...o},N=s.sr,c=t(l,i);return r(a.path+"/trimExtend",c).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new f({spatialReference:N,paths:e})))))}async function re(n,s,i){const a=s[0].spatialReference,l=e(n),N={...l.query,f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(g(s))},c=t(N,i);return r(l.path+"/union",c).then((({data:e})=>o(e.geometry).set({spatialReference:a})))}let ne=class extends m{constructor(e){super(e),this.url=null}areasAndLengths(e,t){return I(this.url,e,t)}autoComplete(e,t,r){return d(this.url,e,t,r)}buffer(e,t){return _(this.url,e,t)}convexHull(e,t){return O(this.url,e,t)}cut(e,t,r){return R(this.url,e,t,r)}densify(e,t){return U(this.url,e,t)}difference(e,t,r){return h(this.url,e,t,r)}distance(e,t){return E(this.url,e,t)}fromGeoCoordinateString(e,t){return J(this.url,e,t)}generalize(e,t){return D(this.url,e,t)}intersect(e,t,r){return L(this.url,e,t,r)}labelPoints(e,t){return C(this.url,e,t)}lengths(e,t){return x(this.url,e,t)}offset(e,t){return F(this.url,e,t)}project(e,t){return k(this.url,e,t)}relation(e,t){return z(this.url,e,t)}reshape(e,t,r){return W(this.url,e,t,r)}simplify(e,t){return async function(e,t,s){const i="string"==typeof e?y(e):e,o=t[0].spatialReference,a=n(t[0]),l={...s,query:{...i.query,f:"json",sr:o.wkid?o.wkid:JSON.stringify(o),geometries:JSON.stringify(g(t))}},{data:N}=await r(i.path+"/simplify",l);return S(N.geometries,a,o)}(this.url,e,t)}toGeoCoordinateString(e,t){return X(this.url,e,t)}trimExtend(e,t){return te(this.url,e,t)}union(e,t){return re(this.url,e,t)}};ne.UNIT_METER=9001,ne.UNIT_GERMAN_METER=9031,ne.UNIT_FOOT=9002,ne.UNIT_SURVEY_FOOT=9003,ne.UNIT_CLARKE_FOOT=9005,ne.UNIT_FATHOM=9014,ne.UNIT_NAUTICAL_MILE=9030,ne.UNIT_SURVEY_CHAIN=9033,ne.UNIT_SURVEY_LINK=9034,ne.UNIT_SURVEY_MILE=9035,ne.UNIT_KILOMETER=9036,ne.UNIT_CLARKE_YARD=9037,ne.UNIT_CLARKE_CHAIN=9038,ne.UNIT_CLARKE_LINK=9039,ne.UNIT_SEARS_YARD=9040,ne.UNIT_SEARS_FOOT=9041,ne.UNIT_SEARS_CHAIN=9042,ne.UNIT_SEARS_LINK=9043,ne.UNIT_BENOIT_1895A_YARD=9050,ne.UNIT_BENOIT_1895A_FOOT=9051,ne.UNIT_BENOIT_1895A_CHAIN=9052,ne.UNIT_BENOIT_1895A_LINK=9053,ne.UNIT_BENOIT_1895B_YARD=9060,ne.UNIT_BENOIT_1895B_FOOT=9061,ne.UNIT_BENOIT_1895B_CHAIN=9062,ne.UNIT_BENOIT_1895B_LINK=9063,ne.UNIT_INDIAN_FOOT=9080,ne.UNIT_INDIAN_1937_FOOT=9081,ne.UNIT_INDIAN_1962_FOOT=9082,ne.UNIT_INDIAN_1975_FOOT=9083,ne.UNIT_INDIAN_YARD=9084,ne.UNIT_INDIAN_1937_YARD=9085,ne.UNIT_INDIAN_1962_YARD=9086,ne.UNIT_INDIAN_1975_YARD=9087,ne.UNIT_FOOT_1865=9070,ne.UNIT_RADIAN=9101,ne.UNIT_DEGREE=9102,ne.UNIT_ARCMINUTE=9103,ne.UNIT_ARCSECOND=9104,ne.UNIT_GRAD=9105,ne.UNIT_GON=9106,ne.UNIT_MICRORADIAN=9109,ne.UNIT_ARCMINUTE_CENTESIMAL=9112,ne.UNIT_ARCSECOND_CENTESIMAL=9113,ne.UNIT_MIL6400=9114,ne.UNIT_BRITISH_1936_FOOT=9095,ne.UNIT_GOLDCOAST_FOOT=9094,ne.UNIT_INTERNATIONAL_CHAIN=109003,ne.UNIT_INTERNATIONAL_LINK=109004,ne.UNIT_INTERNATIONAL_YARD=109001,ne.UNIT_STATUTE_MILE=9093,ne.UNIT_SURVEY_YARD=109002,ne.UNIT_50KILOMETER_LENGTH=109030,ne.UNIT_150KILOMETER_LENGTH=109031,ne.UNIT_DECIMETER=109005,ne.UNIT_CENTIMETER=109006,ne.UNIT_MILLIMETER=109007,ne.UNIT_INTERNATIONAL_INCH=109008,ne.UNIT_US_SURVEY_INCH=109009,ne.UNIT_INTERNATIONAL_ROD=109010,ne.UNIT_US_SURVEY_ROD=109011,ne.UNIT_US_NAUTICAL_MILE=109012,ne.UNIT_UK_NAUTICAL_MILE=109013,ne.UNIT_SQUARE_INCHES="esriSquareInches",ne.UNIT_SQUARE_FEET="esriSquareFeet",ne.UNIT_SQUARE_YARDS="esriSquareYards",ne.UNIT_ACRES="esriAcres",ne.UNIT_SQUARE_MILES="esriSquareMiles",ne.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",ne.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",ne.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",ne.UNIT_SQUARE_METERS="esriSquareMeters",ne.UNIT_ARES="esriAres",ne.UNIT_HECTARES="esriHectares",ne.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",l([N()],ne.prototype,"url",void 0),ne=l([c("esri.tasks.GeometryService")],ne);var se=ne;export{se as default};
