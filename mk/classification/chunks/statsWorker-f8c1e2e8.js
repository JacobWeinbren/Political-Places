import{dM as a,aR as e,er as i}from"../main.js";import{o as n,i as t,r as o,u as l,s}from"./utils-95c5283a.js";import"eng/classification.json";let r=null;async function u(a){const{attribute:e,featuresJSON:i}=a,{normalizationType:s,normalizationField:r,minValue:u,maxValue:c,fieldType:f}=e,p=await m({field:e.field,valueExpression:e.valueExpression,normalizationType:s,normalizationField:r,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams},i),d=n({normalizationType:s,normalizationField:r,minValue:u,maxValue:c}),v="string"===f?t({values:p,supportsNullCount:d}):o({values:p,minValue:u,maxValue:c,useSampleStdDev:!s,supportsNullCount:d});return l(v,"date"===f)}async function m(n,t){if(!t)return[];const o=n.field,l=n.valueExpression,u=n.normalizationType,m=n.normalizationField,c=n.normalizationTotal,f=[],p=n.viewInfoParams;let d=null,v=null;if(l){if(!r){const{arcadeUtils:e}=await a();r=e}d=r.createFunction(l),v=p&&r.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new e(p.spatialReference)})}return t.forEach((a=>{const e=a.attributes;let n;if(l){const e=r.createExecContext(a,v);n=r.executeFunction(d,e)}else e&&(n=e[o]);if(u&&i(n)){const a=e&&parseFloat(e[m]);n=s(n,u,a,c)}f.push(n)})),f}export{m as getDataValues,u as summaryStatistics};
