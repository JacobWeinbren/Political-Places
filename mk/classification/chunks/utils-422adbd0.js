import"../main.js";function n(n){const l=null!=n.normalizationField||null!=n.normalizationType,t=null!=n.minValue||null!=n.maxValue,e=!!n.sqlExpression&&n.supportsSQLExpression;return!l&&!t&&!e}function l(n){const{values:l,supportsNullCount:t}=n,e=l.filter((n=>null!=n)).length,u={count:e};return t&&(u.nullcount=l.length-e),u}function t(n){const{values:l,useSampleStdDev:t,supportsNullCount:e}=n;let u=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=null,r=null,i=null,s=null,c=0;const m=null==n.minValue?-1/0:n.minValue,f=null==n.maxValue?1/0:n.maxValue;for(const n of l)Number.isFinite(n)?n>=m&&n<=f&&(o+=n,u=Math.min(u,n),a=Math.max(a,n),c++):"string"==typeof n&&c++;if(c&&null!=o){r=o/c;let n=0;for(const t of l)Number.isFinite(t)&&t>=m&&t<=f&&(n+=(t-r)**2);s=t?c>1?n/(c-1):0:c>0?n/c:0,i=Math.sqrt(s)}else u=null,a=null;const p={avg:r,count:c,max:a,min:u,stddev:i,sum:o,variance:s};return e&&(p.nullcount=l.length-c),p}function e(n,l){return l?(["avg","stddev","variance"].forEach((l=>{null!=n[l]&&(n[l]=Math.ceil(n[l]))})),n):n}function u(n,l,t,e){let u=null;switch(l){case"log":0!==n&&(u=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(e)&&0!==e&&(u=n/e*100);break;case"field":Number.isFinite(t)&&0!==t&&(u=n/t);break;case"natural-log":n>0&&(u=Math.log(n));break;case"square-root":n>0&&(u=n**.5)}return u}export{l as i,n as o,t as r,u as s,e as u};