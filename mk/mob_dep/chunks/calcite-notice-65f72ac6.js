import{i5 as t,i6 as i,i7 as e,i8 as a,i9 as n,ia as o,ib as s}from"../main.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */var r;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function c(t){const i=function(t,i){function e(t){return t?t.closest(i)||e((a=function(t){return t.getRootNode()}(t),a.host||null)):null;var a}return e(t)}(t,"[dir]");return i?i.getAttribute("dir"):"ltr"}!function(t){t.green="checkCircle",t.yellow="exclamationMarkTriangle",t.red="exclamationMarkTriangle",t.blue="lightbulb"}(r||(r={}));function l(t,i,e){i&&!Array.isArray(i)&&"string"!=typeof i&&(e=i,i=null);const a=i?Array.isArray(i)?i.map((t=>`[slot="${t}"]`)).join(","):`[slot="${i}"]`:":not([slot])";return(null==e?void 0:e.all)?function(t,i,e){let a=":not([slot])"===i?m(t,":not([slot])"):Array.from(t.querySelectorAll(i));a=e&&!1===e.direct?a:a.filter((i=>i.parentElement===t)),a=(null==e?void 0:e.matches)?a.filter((t=>null==t?void 0:t.matches(e.matches))):a;const n=null==e?void 0:e.selector;return n?a.map((t=>Array.from(t.querySelectorAll(n)))).reduce(((t,i)=>[...t,...i]),[]).filter((t=>!!t)):a}(t,a,e):function(t,i,e){let a=":not([slot])"===i?m(t,":not([slot])")[0]||null:t.querySelector(i);a=e&&!1===e.direct||(null==a?void 0:a.parentElement)===t?a:null,a=(null==e?void 0:e.matches)?(null==a?void 0:a.matches(e.matches))?a:null:a;const n=null==e?void 0:e.selector;return n?null==a?void 0:a.querySelector(n):a}(t,a,e)}function m(t,i){return t?Array.from(t.children||[]).filter((t=>null==t?void 0:t.matches(i))):[]}function d(t,i,e){return"string"==typeof i&&""!==i?i:""===i?t[e]:void 0}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */function h(t,i,e){const a=function(t){return"intersection"===t?window.IntersectionObserver:"mutation"===t?window.MutationObserver:window.ResizeObserver}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */(t);return new a(i,e)}const f=new Set;let u;const p={childList:!0};function g(i){i.forEach((({target:i})=>{t(i)}))}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const b="flip-rtl",w={},k={},v={s:16,m:24,l:32};async function x({icon:t,scale:i}){const e=v[i],a=function(t){const i=!isNaN(Number(t.charAt(0))),e=t.split("-");if(1===e.length)return i?`i${t}`:t;return e.map(((t,e)=>0===e?i?`i${t.toUpperCase()}`:t:t.charAt(0).toUpperCase()+t.slice(1))).join("")}(t),n="F"===a.charAt(a.length-1),s=`${n?a.substring(0,a.length-1):a}${e}${n?"F":""}`;if(w[s])return w[s];k[s]||(k[s]=fetch(o(`./assets/icon/${s}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${s}" is not a valid calcite-ui-icon name`),""))));const r=await k[s];return w[s]=r,r}let y=class extends i{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:i,pathData:n,scale:o,textLabel:s}=this,r=c(t),l=v[o],m=!!s,d=[].concat(n||"");return e(a,{"aria-hidden":(!m).toString(),"aria-label":m?s:null,role:m?"img":null},e("svg",{class:{[b]:"rtl"===r&&i,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${l} ${l}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((t=>e("path","string"==typeof t?{d:t}:{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:i,visible:e}=this;t&&e&&(this.pathData=await x({icon:t,scale:i}))}waitUntilVisible(t){this.intersectionObserver=h("intersection",(i=>{i.forEach((i=>{i.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){height:2rem;width:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}"}};function D(){if("undefined"==typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,y)}))}y=n(y,[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]),D();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const z="Close",_="title",C="message",I="link",A="actions-end",E="actions-end",q="notice-close",O="container",$="notice-content",N="notice-icon";let R=class extends i{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteNoticeClose=s(this,"calciteNoticeClose",7),this.calciteNoticeOpen=s(this,"calciteNoticeOpen",7),this.active=!1,this.color="blue",this.dismissible=!1,this.intlClose=z,this.scale="m",this.width="auto",this.close=()=>{this.active=!1,this.calciteNoticeClose.emit()}}updateRequestedIcon(){this.requestedIcon=d(r,this.icon,this.color)}connectedCallback(){var t;t=this,u||(u=h("mutation",g)),u.observe(t.el,p)}disconnectedCallback(){!function(t){f.delete(t.el),g(u.takeRecords()),u.disconnect();for(const[t]of f.entries())u.observe(t,p)}(this)}componentWillLoad(){this.requestedIcon=d(r,this.icon,this.color)}render(){const{el:t}=this,i=e("button",{"aria-label":this.intlClose,class:q,onClick:this.close,ref:t=>this.closeButton=t},e("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"})),a=l(t,A);return e("div",{class:O},this.requestedIcon?e("div",{class:N},e("calcite-icon",{icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"})):null,e("div",{class:$},e("slot",{name:_}),e("slot",{name:C}),e("slot",{name:I})),a?e("div",{class:E},e("slot",{name:A})):null,this.dismissible?i:null)}async setFocus(){const t=this.el.querySelector("calcite-link");(this.closeButton||t)&&(t?t.setFocus():this.closeButton&&this.closeButton.focus())}get el(){return this}static get watchers(){return{icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-left:auto;margin-right:auto;display:none;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{pointer-events:none;margin-top:0px;margin-bottom:0px;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;width:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;max-height:0;text-align:start;-webkit-transition:var(--calcite-animation-timing);transition:var(--calcite-animation-timing);-webkit-border-start:0px solid;border-inline-start:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{pointer-events:auto;display:-ms-flexbox;display:flex;max-height:100%;-ms-flex-align:center;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);-webkit-margin-end:var(--calcite-notice-spacing-token-small);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;min-width:0px;-ms-flex-direction:column;flex-direction:column;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){-webkit-padding-start:var(--calcite-notice-spacing-token-large);padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto}.notice-close{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}"}};function S(){if("undefined"==typeof customElements)return;["calcite-notice","calcite-icon"].forEach((t=>{switch(t){case"calcite-notice":customElements.get(t)||customElements.define(t,R);break;case"calcite-icon":customElements.get(t)||D()}}))}R=n(R,[1,"calcite-notice",{active:[1540],color:[513],dismissible:[516],icon:[520],intlClose:[1,"intl-close"],scale:[513],width:[513],setFocus:[64]}]),S();const j=R,B=S;export{j as CalciteNotice,B as defineCustomElement};
