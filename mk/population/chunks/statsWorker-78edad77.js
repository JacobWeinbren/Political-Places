import{dR as a,aS as e,eA as i}from"../main.js";import{o as t,i as n,r as l,u as o,s}from"./utils-e7f3fb2b.js";let r=null;async function u(a){const{attribute:e,featuresJSON:i}=a,{normalizationType:s,normalizationField:r,minValue:u,maxValue:c,fieldType:f}=e,p=await m({field:e.field,valueExpression:e.valueExpression,normalizationType:s,normalizationField:r,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams},i),d=t({normalizationType:s,normalizationField:r,minValue:u,maxValue:c}),v="string"===f?n({values:p,supportsNullCount:d}):l({values:p,minValue:u,maxValue:c,useSampleStdDev:!s,supportsNullCount:d});return o(v,"date"===f)}async function m(t,n){if(!n)return[];const l=t.field,o=t.valueExpression,u=t.normalizationType,m=t.normalizationField,c=t.normalizationTotal,f=[],p=t.viewInfoParams;let d=null,v=null;if(o){if(!r){const{arcadeUtils:e}=await a();r=e}d=r.createFunction(o),v=p&&r.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new e(p.spatialReference)})}return n.forEach((a=>{const e=a.attributes;let t;if(o){const e=r.createExecContext(a,v);t=r.executeFunction(d,e)}else e&&(t=e[l]);if(u&&i(t)){const a=e&&parseFloat(e[m]);t=s(t,u,a,c)}f.push(t)})),f}export{m as getDataValues,u as summaryStatistics};
