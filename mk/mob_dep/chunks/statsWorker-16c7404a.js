import{ex as a,ey as e,ez as i,eA as n,dS as t,aT as l,eB as o,eC as s}from"../main.js";let r=null;async function u(t){const{attribute:l,featuresJSON:o}=t,{normalizationType:s,normalizationField:r,minValue:u,maxValue:c,fieldType:f}=l,p=await m({field:l.field,valueExpression:l.valueExpression,normalizationType:s,normalizationField:r,normalizationTotal:l.normalizationTotal,viewInfoParams:l.viewInfoParams},o),d=a({normalizationType:s,normalizationField:r,minValue:u,maxValue:c}),z="string"===f?e({values:p,supportsNullCount:d}):i({values:p,minValue:u,maxValue:c,useSampleStdDev:!s,supportsNullCount:d});return n(z,"date"===f)}async function m(a,e){if(!e)return[];const i=a.field,n=a.valueExpression,u=a.normalizationType,m=a.normalizationField,c=a.normalizationTotal,f=[],p=a.viewInfoParams;let d=null,z=null;if(n){if(!r){const{arcadeUtils:a}=await t();r=a}d=r.createFunction(n),z=p&&r.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new l(p.spatialReference)})}return e.forEach((a=>{const e=a.attributes;let t;if(n){const e=r.createExecContext(a,z);t=r.executeFunction(d,e)}else e&&(t=e[i]);if(u&&o(t)){const a=e&&parseFloat(e[m]);t=s(t,u,a,c)}f.push(t)})),f}export{m as getDataValues,u as summaryStatistics};