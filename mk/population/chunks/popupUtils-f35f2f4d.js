import{r as e,ei as d,e2 as p}from"../main.js";async function l(l,t=l.popupTemplate){if(!e(t))return[];const i=await t.getRequiredFields(l.fieldsIndex),{lastEditInfoEnabled:n}=t,{objectIdField:a,typeIdField:s,globalIdField:u,relationships:o}=l;if(i.includes("*"))return["*"];const f=n?await d(l):[],r=p(l.fieldsIndex,[...i,...f]);return s&&r.push(s),r&&a&&l.fieldsIndex.has(a)&&-1===r.indexOf(a)&&r.push(a),r&&u&&l.fieldsIndex.has(u)&&-1===r.indexOf(u)&&r.push(u),o&&o.forEach((e=>{const{keyField:d}=e;r&&d&&l.fieldsIndex.has(d)&&-1===r.indexOf(d)&&r.push(d)})),r}function t(d,p){return d.popupTemplate?d.popupTemplate:e(p)&&p.defaultPopupTemplateEnabled&&e(d.defaultPopupTemplate)?d.defaultPopupTemplate:null}export{t as d,l as t};
