import{ig as e,ih as r}from"../main.js";import{a as t}from"./moment-58f06ac5.js";var s,a={};s=r,function(e){
//! moment.js locale configuration
var r="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),t="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");function s(e){return e>1&&e<5}function a(e,r,t,a){var n=e+" ";switch(t){case"s":return r||a?"pár sekúnd":"pár sekundami";case"ss":return r||a?n+(s(e)?"sekundy":"sekúnd"):n+"sekundami";case"m":return r?"minúta":a?"minútu":"minútou";case"mm":return r||a?n+(s(e)?"minúty":"minút"):n+"minútami";case"h":return r?"hodina":a?"hodinu":"hodinou";case"hh":return r||a?n+(s(e)?"hodiny":"hodín"):n+"hodinami";case"d":return r||a?"deň":"dňom";case"dd":return r||a?n+(s(e)?"dni":"dní"):n+"dňami";case"M":return r||a?"mesiac":"mesiacom";case"MM":return r||a?n+(s(e)?"mesiace":"mesiacov"):n+"mesiacmi";case"y":return r||a?"rok":"rokom";case"yy":return r||a?n+(s(e)?"roky":"rokov"):n+"rokmi"}}e.defineLocale("sk",{months:r,monthsShort:t,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}("function"==typeof e?t.exports:s.moment);var n=a,o=Object.freeze(Object.assign(Object.create(null),a,{default:n}));export{o as s};
