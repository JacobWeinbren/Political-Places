import{iy as a,iz as e}from"../main.js";import{a as s}from"./moment-52742a1d.js";var n,t={};n=e,function(a){
//! moment.js locale configuration
var e={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};a.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),meridiem:function(a,e,s){return a<12?s?"öö":"ÖÖ":s?"ös":"ÖS"},meridiemParse:/öö|ÖÖ|ös|ÖS/,isPM:function(a){return"ös"===a||"ÖS"===a},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",w:"bir hafta",ww:"%d hafta",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function(a,s){switch(s){case"d":case"D":case"Do":case"DD":return a;default:if(0===a)return a+"'ıncı";var n=a%10;return a+(e[n]||e[a%100-n]||e[a>=100?100:null])}},week:{dow:1,doy:7}})}("function"==typeof a?s.exports:n.moment);var i=t,r=Object.freeze(Object.assign(Object.create(null),t,{default:i}));export{r as t};
