import{ir as _,is as e}from"../main.js";import{a as t}from"./moment-3076642d.js";var s,a={};s=e,function(_){function e(_,e,t){var s,a;return"m"===t?e?"хвилина":"хвилину":"h"===t?e?"година":"годину":_+" "+(s=+_,a={ss:e?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:e?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:e?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[t].split("_"),s%10==1&&s%100!=11?a[0]:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?a[1]:a[2])}function t(_){return function(){return _+"о"+(11===this.hours()?"б":"")+"] LT"}}_.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:function(_,e){var t={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};return!0===_?t.nominative.slice(1,7).concat(t.nominative.slice(0,1)):_?t[/(\[[ВвУу]\]) ?dddd/.test(e)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(e)?"genitive":"nominative"][_.day()]:t.nominative},weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:t("[Сьогодні "),nextDay:t("[Завтра "),lastDay:t("[Вчора "),nextWeek:t("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return t("[Минулої] dddd [").call(this);case 1:case 2:case 4:return t("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",ss:e,m:e,mm:e,h:"годину",hh:e,d:"день",dd:e,M:"місяць",MM:e,y:"рік",yy:e},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(_){return/^(дня|вечора)$/.test(_)},meridiem:function(_,e,t){return _<4?"ночі":_<12?"ранку":_<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(_,e){switch(e){case"M":case"d":case"DDD":case"w":case"W":return _+"-й";case"D":return _+"-го";default:return _}},week:{dow:1,doy:7}})}("function"==typeof _?t.exports:s.moment);var n=a,i=Object.freeze(Object.assign(Object.create(null),a,{default:n}));export{i as u};
