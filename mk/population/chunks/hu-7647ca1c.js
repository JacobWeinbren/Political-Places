import{iy as e,iz as r}from"../main.js";import{a}from"./moment-bbe742bd.js";var s,t={};s=r,function(e){
//! moment.js locale configuration
var r="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function a(e,r,a,s){var t=e;switch(a){case"s":return s||r?"néhány másodperc":"néhány másodperce";case"ss":return t+(s||r)?" másodperc":" másodperce";case"m":return"egy"+(s||r?" perc":" perce");case"mm":return t+(s||r?" perc":" perce");case"h":return"egy"+(s||r?" óra":" órája");case"hh":return t+(s||r?" óra":" órája");case"d":return"egy"+(s||r?" nap":" napja");case"dd":return t+(s||r?" nap":" napja");case"M":return"egy"+(s||r?" hónap":" hónapja");case"MM":return t+(s||r?" hónap":" hónapja");case"y":return"egy"+(s||r?" év":" éve");case"yy":return t+(s||r?" év":" éve")}return""}function s(e){return(e?"":"[múlt] ")+"["+r[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,r,a){return e<12?!0===a?"de":"DE":!0===a?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return s.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return s.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}("function"==typeof e?a.exports:s.moment);var n=t,m=Object.freeze(Object.assign(Object.create(null),t,{default:n}));export{m as h};
