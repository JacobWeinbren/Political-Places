import{is as e,it as r}from"../main.js";import{a as s}from"./moment-bb4e8c29.js";var a,t={};a=r,function(e){
//! moment.js locale configuration
var r="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function s(e,r,s,a){var t=e;switch(s){case"s":return a||r?"néhány másodperc":"néhány másodperce";case"ss":return t+(a||r)?" másodperc":" másodperce";case"m":return"egy"+(a||r?" perc":" perce");case"mm":return t+(a||r?" perc":" perce");case"h":return"egy"+(a||r?" óra":" órája");case"hh":return t+(a||r?" óra":" órája");case"d":return"egy"+(a||r?" nap":" napja");case"dd":return t+(a||r?" nap":" napja");case"M":return"egy"+(a||r?" hónap":" hónapja");case"MM":return t+(a||r?" hónap":" hónapja");case"y":return"egy"+(a||r?" év":" éve");case"yy":return t+(a||r?" év":" éve")}return""}function a(e){return(e?"":"[múlt] ")+"["+r[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,r,s){return e<12?!0===s?"de":"DE":!0===s?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return a.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return a.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:s,ss:s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}("function"==typeof e?s.exports:a.moment);var n=t,m=Object.freeze(Object.assign(Object.create(null),t,{default:n}));export{m as h};
