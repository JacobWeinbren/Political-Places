import{d0 as e,V as t,W as r,d1 as s,X as i,cI as o,b3 as a,bB as n,bO as l,cY as p,cZ as u,aS as c,ca as d,bh as m,a4 as y,cy as h,r as f,a as v,d2 as g,L as T,d3 as N,cQ as A,c_ as w}from"../main.js";import{a as b}from"./GPMessage-c934afe5.js";class M{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach((e=>{const s=this._options[e];if(s){const i="boolean"!=typeof s&&s.name?s.name:e,o="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=o&&(r[i]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(o)?o.join(","):"object"==typeof o?JSON.stringify(o):o)}else r[e]=t[e]}),this),r}}function O(e){return new M(e)}const S=e()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"});e()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),e()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),e()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),e()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"});const B=e()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"});e()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),e()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"});const j=e()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"});var U;let R=U=class extends o{constructor(e){super(e),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new U(a({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};t([r({type:[Object],json:{write:!0}})],R.prototype,"attributeParameterValues",void 0),t([r({type:String,json:{write:!0}})],R.prototype,"description",void 0),t([r({type:String,json:{write:!0}})],R.prototype,"distanceAttributeName",void 0),t([r({type:String,json:{write:!0}})],R.prototype,"id",void 0),t([r({type:String,json:{write:!0}})],R.prototype,"impedanceAttributeName",void 0),t([r({type:String,json:{write:!0}})],R.prototype,"name",void 0),t([r({type:[String],json:{write:!0}})],R.prototype,"restrictionAttributeNames",void 0),t([r({type:Number,json:{write:!0}})],R.prototype,"simplificationTolerance",void 0),t([s(S)],R.prototype,"simplificationToleranceUnits",void 0),t([r({type:String,json:{write:!0}})],R.prototype,"timeAttributeName",void 0),t([s(j)],R.prototype,"type",void 0),t([r({type:Boolean,json:{write:!0}})],R.prototype,"useHierarchy",void 0),t([s(B)],R.prototype,"uturnAtJunctions",void 0),R=U=t([i("esri.rest.support.TravelMode")],R);var D=R;let k=class extends o{constructor(e){super(e),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};t([r()],k.prototype,"currentVersion",void 0),t([r()],k.prototype,"defaultTravelMode",void 0),t([r()],k.prototype,"directionsLanguage",void 0),t([r()],k.prototype,"directionsSupportedLanguages",void 0),t([r()],k.prototype,"directionsTimeAttribute",void 0),t([r()],k.prototype,"hasZ",void 0),t([r()],k.prototype,"impedance",void 0),t([r()],k.prototype,"networkDataset",void 0),t([r({type:[D]})],k.prototype,"supportedTravelModes",void 0),k=t([i("esri.rest.support.NetworkServiceDescription")],k);var P=k;const E=new n({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let I=class extends b{constructor(e){super(e),this.type=null}};t([r({type:String,json:{read:E.read,write:E.write}})],I.prototype,"type",void 0),I=t([i("esri.rest.support.NAMessage")],I);var x=I;let F=class extends u{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach((e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));const r=c.fromJSON(t.spatialReference);return e.map((e=>{const t=d.fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return t.geometry&&!s&&(m(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map((t=>{const r=new d({geometry:new y({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>m(e))),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map((({strings:e})=>e))}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,i=0,o=0;const a=[];let n,l,p,u,c,d,m,y,h=0,f=0,v=0;if(c=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),c||(c=[]),0===parseInt(c[h],32)){h=2;const e=parseInt(c[h],32);h++,d=parseInt(c[h],32),h++,1&e&&(f=c.indexOf("|")+1,m=parseInt(c[f],32),f++),2&e&&(v=c.indexOf("|",f)+1,y=parseInt(c[v],32),v++)}else d=parseInt(c[h],32),h++;for(;h<c.length&&"|"!==c[h];){n=parseInt(c[h],32)+r,h++,r=n,l=parseInt(c[h],32)+s,h++,s=l;const e=[n/d,l/d];f&&(u=parseInt(c[f],32)+i,f++,i=u,e.push(u/m)),v&&(p=parseInt(c[v],32)+o,v++,o=p,e.push(p/y)),a.push(e)}return{paths:[a],hasZ:f>0,hasM:v>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach((e=>{e.paths.forEach((e=>{r=r.concat(e)}))}));const s=[];let i=[0,0];return r.forEach((e=>{e[0]===i[0]&&e[1]===i[1]||(s.push(e),i=e)})),new h({paths:[s]},t)}};t([r({type:l,json:{read:{source:"summary.envelope"}}})],F.prototype,"extent",void 0),t([r()],F.prototype,"features",void 0),t([p("features")],F.prototype,"readFeatures",null),t([r()],F.prototype,"geometryType",void 0),t([r({readOnly:!0})],F.prototype,"mergedGeometry",null),t([r()],F.prototype,"routeId",void 0),t([r()],F.prototype,"routeName",void 0),t([r({value:null,readOnly:!0})],F.prototype,"strings",null),t([r({json:{read:{source:"summary.totalDriveTime"}}})],F.prototype,"totalDriveTime",void 0),t([r({json:{read:{source:"summary.totalLength"}}})],F.prototype,"totalLength",void 0),t([r({json:{read:{source:"summary.totalTime"}}})],F.prototype,"totalTime",void 0),F=t([i("esri.rest.support.DirectionsFeatureSet")],F);var L=F;let J=class extends o{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};t([r({type:L,json:{write:!0}})],J.prototype,"directions",void 0),t([r({type:d,json:{write:!0}})],J.prototype,"route",void 0),t([r({type:String,json:{write:!0}})],J.prototype,"routeName",void 0),t([r({type:[d],json:{write:!0}})],J.prototype,"stops",void 0),J=t([i("esri.rest.support.RouteResult")],J);var _=J;function C(e){return e&&u.fromJSON(e).features.map((e=>e))}let G=class extends o{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return C(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return C(e)}readPolygonBarriers(e){return C(e)}};t([r({aliasOf:"pointBarriers"})],G.prototype,"barriers",void 0),t([r({type:[x]})],G.prototype,"messages",void 0),t([r({type:[d]})],G.prototype,"pointBarriers",void 0),t([p("pointBarriers",["barriers","pointBarriers"])],G.prototype,"readPointBarriers",null),t([r({type:[d]})],G.prototype,"polylineBarriers",void 0),t([p("polylineBarriers")],G.prototype,"readPolylineBarriers",null),t([r({type:[d]})],G.prototype,"polygonBarriers",void 0),t([p("polygonBarriers")],G.prototype,"readPolygonBarriers",null),t([r({type:[_]})],G.prototype,"routeResults",void 0),G=t([i("esri.rest.support.RouteResultsContainer")],G);var V=G;function Z(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}function H(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function z(e){const t=[],r=[],{directions:s=[],routes:{features:i=[],spatialReference:o=null}={},stops:{features:a=[],spatialReference:n=null}={},barriers:l,polygonBarriers:p,polylineBarriers:u,messages:c}=e.data,d="esri.tasks.RouteTask.NULL_ROUTE_NAME";let m,y,h=!0;const f=i&&o||a&&n||l&&l.spatialReference||p&&p.spatialReference||u&&u.spatialReference;s.forEach((e=>{t.push(m=e.routeName),r[m]={directions:e}})),i.forEach((e=>{-1===t.indexOf(m=e.attributes.Name)&&(t.push(m),r[m]={}),e.geometry&&(e.geometry.spatialReference=f),r[m].route=e})),a.forEach((e=>{y=e.attributes,-1===t.indexOf(m=y.RouteName||d)&&(t.push(m),r[m]={}),m!==d&&(h=!1),e.geometry&&(e.geometry.spatialReference=f),null==r[m].stops&&(r[m].stops=[]),r[m].stops.push(e)})),a.length>0&&!0===h&&(r[t[0]].stops=r[d].stops,delete r[d],t.splice(t.indexOf(d),1));const v=t.map((e=>(r[e].routeName=e===d?null:e,r[e])));return V.fromJSON({routeResults:v,pointBarriers:l,polygonBarriers:p,polylineBarriers:u,messages:c})}function K(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(f(e)&&e.hasZ)return!0}return!1}async function W(e,t,r){if(!e)throw new v("network-service:missing-url","Url to Network service is missing");const s=g({f:"json",token:t},r),{data:i}=await T(e,s);i.supportedTravelModes||(i.supportedTravelModes=[]);for(let e=0;e<i.supportedTravelModes.length;e++)i.supportedTravelModes[e].id||(i.supportedTravelModes[e].id=i.supportedTravelModes[e].itemId);const o=i.currentVersion>=10.4?async function(e,t,r){try{const s=g({f:"json",token:t},r),i=N(e)+"/retrieveTravelModes",{data:{supportedTravelModes:o,defaultTravelMode:a}}=await T(i,s);return{supportedTravelModes:o,defaultTravelMode:a}}catch(e){throw new v("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e,t,r):async function(e,t){var r,s;const i=g({f:"json"},t),{data:o}=await T(e.replace(/\/rest\/.*$/i,"/info"),i);if(!o||!o.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:a}=o,n=N(a)+"/sharing/rest/portals/self",{data:l}=await T(n,i),p=A("helperServices.routingUtilities.url",l);if(!p)return{supportedTravelModes:[],defaultTravelMode:null};const u=w(a),c=/\/solve$/i.test(u.path)?"Route":/\/solveclosestfacility$/i.test(u.path)?"ClosestFacility":"ServiceAreas",d=g({f:"json",serviceName:c},t),m=N(p)+"/GetTravelModes/execute",y=await T(m,d),h=[];let f=null;if(null!=y&&null!=(r=y.data)&&null!=(s=r.results)&&s.length){const e=y.data.results;for(const t of e){var v;if("supportedTravelModes"===t.paramName){if(null!=(v=t.value)&&v.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);h.push(t)}}else"defaultTravelMode"===t.paramName&&(f=t.value)}}return{supportedTravelModes:h,defaultTravelMode:f}}(e,r),{defaultTravelMode:a,supportedTravelModes:n}=await o;return i.defaultTravelMode=a,i.supportedTravelModes=n,P.fromJSON(i)}export{W as a,L as c,K as d,z as f,x as i,O as o,H as p,Z as u};
