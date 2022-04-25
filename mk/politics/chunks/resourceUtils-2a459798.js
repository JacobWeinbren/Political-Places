import{eH as e,eI as t,e as a,r,t as s,eJ as o,C as n}from"../main.js";async function c(a,r={},s){await a.load(s);const o=e(a.itemUrl,"resources"),{start:n=1,num:c=10,sortOrder:i="asc",sortField:l="created"}=r,u={query:{start:n,num:c,sortOrder:i,sortField:l,token:a.apiKey},signal:t(s,"signal")},p=await a.portal._request(o,u);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:e,size:t,resource:r})=>({created:new Date(e),size:t,resource:a.resourceFromPath(r)})))}}async function i(s,o,n,c){if(!s.hasPath())throw new a(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const i=s.portalItem;await i.load(c);const l=e(i.userItemUrl,"add"===o?"addResources":"updateResources"),[u,d]=p(s.path),m=await h(n),f=new FormData;return u&&"."!==u&&f.append("resourcesPrefix",u),f.append("fileName",d),f.append("file",m,d),f.append("f","json"),r(c)&&c.access&&f.append("access",c.access),await i.portal._request(l,{method:"post",body:f,signal:t(c,"signal")}),s}async function l(r,s,o){if(!s.hasPath())throw new a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await r.load(o);const n=e(r.userItemUrl,"removeResources");await r.portal._request(n,{method:"post",query:{resource:s.path},signal:t(o,"signal")}),s.portalItem=null}async function u(a,r){await a.load(r);const s=e(a.userItemUrl,"removeResources");return a.portal._request(s,{method:"post",query:{deleteAll:!0},signal:t(r,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,a]=m(e),[r,s]=p(t);return[r,s,a]}function m(e){const t=o(e);return s(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function h(e){return e instanceof Blob?e:(await n(e.url,{responseType:"blob"})).data}function f(t,a){if(!t.hasPath())return null;const[r,,s]=d(t.path);return t.portalItem.resourceFromPath(e(r,a+s))}function w(t,a){if(!t.hasPath())return null;const[r,,s]=d(t.path);return t.portalItem.resourceFromPath(e(r,a+s))}export{i as addOrUpdateResource,h as contentToBlob,c as fetchResources,f as getSiblingOfSameType,w as getSiblingOfSameTypeI,u as removeAllResources,l as removeResource,d as splitPrefixFileNameAndExtension};
