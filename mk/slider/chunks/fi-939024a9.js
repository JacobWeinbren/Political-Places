import{ig as e,ih as a}from"../main.js";import{a as u}from"./moment-58f06ac5.js";var t,n={};t=a,function(e){
//! moment.js locale configuration
var a="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),u=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",a[7],a[8],a[9]];function t(e,t,n,i){var s="";switch(n){case"s":return i?"muutaman sekunnin":"muutama sekunti";case"ss":s=i?"sekunnin":"sekuntia";break;case"m":return i?"minuutin":"minuutti";case"mm":s=i?"minuutin":"minuuttia";break;case"h":return i?"tunnin":"tunti";case"hh":s=i?"tunnin":"tuntia";break;case"d":return i?"päivän":"päivä";case"dd":s=i?"päivän":"päivää";break;case"M":return i?"kuukauden":"kuukausi";case"MM":s=i?"kuukauden":"kuukautta";break;case"y":return i?"vuoden":"vuosi";case"yy":s=i?"vuoden":"vuotta"}return s=function(e,t){return e<10?t?u[e]:a[e]:e}(e,i)+" "+s}e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}("function"==typeof e?u.exports:t.moment);var i=n,s=Object.freeze(Object.assign(Object.create(null),n,{default:i}));export{s as f};
