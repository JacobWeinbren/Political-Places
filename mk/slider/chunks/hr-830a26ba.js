import{ig as e,ih as a}from"../main.js";import{a as s}from"./moment-58f06ac5.js";var t,n={};t=a,function(e){
//! moment.js locale configuration
function a(e,a,s){var t=e+" ";switch(s){case"ss":return t+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return a?"jedna minuta":"jedne minute";case"mm":return t+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return t+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return t+=1===e?"dan":"dana";case"MM":return t+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return t+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}e.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"Do MMMM YYYY",LLL:"Do MMMM YYYY H:mm",LLLL:"dddd, Do MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:return"[prošlu] [nedjelju] [u] LT";case 3:return"[prošlu] [srijedu] [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:a,m:a,mm:a,h:a,hh:a,d:"dan",dd:a,M:"mjesec",MM:a,y:"godinu",yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}("function"==typeof e?s.exports:t.moment);var r=n,u=Object.freeze(Object.assign(Object.create(null),n,{default:r}));export{u as h};
