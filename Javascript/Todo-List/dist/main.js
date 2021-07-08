(()=>{"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n){e(1,arguments);var r=t(n);return!isNaN(r)}var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var o,i={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function d(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var c=e.defaultWidth,d=a.width?String(a.width):e.defaultWidth;r=e.values[d]||e.values[c]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function s(e){return function(t,n){var r=String(t),a=n||{},o=a.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],c=r.match(i);if(!c)return null;var d,s=c[0],u=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(s))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(s))return n}(u),d=e.valueCallback?e.valueCallback(d):d,{value:d=a.valueCallback?a.valueCallback(d):d,rest:r.slice(s.length)}}}const u={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:i,formatRelative:function(e,t,n,r){return c[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:d({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:d({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:d({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(o={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(o.matchPattern);if(!a)return null;var i=a[0],c=n.match(o.parsePattern);if(!c)return null;var d=o.valueCallback?o.valueCallback(c[0]):c[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(i.length)}}),era:s({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:s({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function l(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function m(n,r){e(2,arguments);var a=t(n).getTime(),o=l(r);return new Date(a+o)}function f(t,n){e(2,arguments);var r=l(n);return m(t,-r)}function p(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const h=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return p("yy"===t?r%100:r,t.length)},g=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):p(n+1,2)},v=function(e,t){return p(e.getUTCDate(),t.length)},y=function(e,t){return p(e.getUTCHours()%12||12,t.length)},b=function(e,t){return p(e.getUTCHours(),t.length)},w=function(e,t){return p(e.getUTCMinutes(),t.length)},E=function(e,t){return p(e.getUTCSeconds(),t.length)},C=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return p(Math.floor(r*Math.pow(10,n-3)),t.length)};var x=864e5;function T(n){e(1,arguments);var r=1,a=t(n),o=a.getUTCDay(),i=(o<r?7:0)+o-r;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function D(n){e(1,arguments);var r=t(n),a=r.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=T(o),c=new Date(0);c.setUTCFullYear(a,0,4),c.setUTCHours(0,0,0,0);var d=T(c);return r.getTime()>=i.getTime()?a+1:r.getTime()>=d.getTime()?a:a-1}function M(t){e(1,arguments);var n=D(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=T(r);return a}var N=6048e5;function L(n,r){e(1,arguments);var a=r||{},o=a.locale,i=o&&o.options&&o.options.weekStartsOn,c=null==i?0:l(i),d=null==a.weekStartsOn?c:l(a.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=t(n),u=s.getUTCDay(),m=(u<d?7:0)+u-d;return s.setUTCDate(s.getUTCDate()-m),s.setUTCHours(0,0,0,0),s}function k(n,r){e(1,arguments);var a=t(n,r),o=a.getUTCFullYear(),i=r||{},c=i.locale,d=c&&c.options&&c.options.firstWeekContainsDate,s=null==d?1:l(d),u=null==i.firstWeekContainsDate?s:l(i.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(o+1,0,u),m.setUTCHours(0,0,0,0);var f=L(m,r),p=new Date(0);p.setUTCFullYear(o,0,u),p.setUTCHours(0,0,0,0);var h=L(p,r);return a.getTime()>=f.getTime()?o+1:a.getTime()>=h.getTime()?o:o-1}function S(t,n){e(1,arguments);var r=n||{},a=r.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:l(o),c=null==r.firstWeekContainsDate?i:l(r.firstWeekContainsDate),d=k(t,n),s=new Date(0);s.setUTCFullYear(d,0,c),s.setUTCHours(0,0,0,0);var u=L(s,n);return u}var P=6048e5;function q(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+p(o,2)}function U(e,t){return e%60==0?(e>0?"-":"+")+p(Math.abs(e)/60,2):j(e,t)}function j(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+p(Math.floor(a/60),2)+n+p(a%60,2)}const W={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return h(e,t)},Y:function(e,t,n,r){var a=k(e,r),o=a>0?a:1-a;return"YY"===t?p(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):p(o,t.length)},R:function(e,t){return p(D(e),t.length)},u:function(e,t){return p(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return p(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return p(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return g(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return p(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(n,r,a,o){var i=function(n,r){e(1,arguments);var a=t(n),o=L(a,r).getTime()-S(a,r).getTime();return Math.round(o/P)+1}(n,o);return"wo"===r?a.ordinalNumber(i,{unit:"week"}):p(i,r.length)},I:function(n,r,a){var o=function(n){e(1,arguments);var r=t(n),a=T(r).getTime()-M(r).getTime();return Math.round(a/N)+1}(n);return"Io"===r?a.ordinalNumber(o,{unit:"week"}):p(o,r.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):v(e,t)},D:function(n,r,a){var o=function(n){e(1,arguments);var r=t(n),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=r.getTime(),i=a-o;return Math.floor(i/x)+1}(n);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):p(o,r.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return p(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return p(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return p(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):b(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):p(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):p(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):w(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):E(e,t)},S:function(e,t){return C(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return U(a);case"XXXX":case"XX":return j(a);case"XXXXX":case"XXX":default:return j(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return U(a);case"xxxx":case"xx":return j(a);case"xxxxx":case"xxx":default:return j(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+q(a,":");case"OOOO":default:return"GMT"+j(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+q(a,":");case"zzzz":default:return"GMT"+j(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return p(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return p((r._originalDate||e).getTime(),t.length)}};function B(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function I(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const Y={p:I,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return B(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",B(a,t)).replace("{{time}}",I(o,t))}};function O(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var H=["D","DD"],$=["YY","YYYY"];function z(e){return-1!==H.indexOf(e)}function F(e){return-1!==$.indexOf(e)}function A(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var X=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,J=/''/g,R=/[a-zA-Z]/;function _(r,a,o){e(2,arguments);var i=String(a),c=o||{},d=c.locale||u,s=d.options&&d.options.firstWeekContainsDate,m=null==s?1:l(s),p=null==c.firstWeekContainsDate?m:l(c.firstWeekContainsDate);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=d.options&&d.options.weekStartsOn,g=null==h?0:l(h),v=null==c.weekStartsOn?g:l(c.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var y=t(r);if(!n(y))throw new RangeError("Invalid time value");var b=O(y),w=f(y,b),E={firstWeekContainsDate:p,weekStartsOn:v,locale:d,_originalDate:y},C=i.match(Q).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Y[t])(e,d.formatLong,E):e})).join("").match(X).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return V(e);var n=W[t];if(n)return!c.useAdditionalWeekYearTokens&&F(e)&&A(e,a,r),!c.useAdditionalDayOfYearTokens&&z(e)&&A(e,a,r),n(w,e,d.localize,E);if(t.match(R))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return C}function V(e){return e.match(G)[1].replace(J,"'")}let Z,K=[];function ee(){K=JSON.parse(localStorage.getItem("projects"))}function te(){localStorage.setItem("projects",JSON.stringify(K)),localStorage.setItem("currentProject",JSON.stringify(Z)),ee()}const ne=function(e){return`${e}_${Math.random().toString(36).substr(2,9)}`},re=(e,t)=>{const n=((e,t)=>({name:e,description:t,list:[],id:ne("project")}))(e,t);return K.unshift(n),n};function ae(){document.getElementById("blur").style.display="block"}function oe(){document.getElementById("blur").style.display="none"}function ie(e){e.preventDefault();const{target:t}=e,n=t[0].value,r=t[1].value,a=Ie(re(n,r));document.getElementById("project-container").prepend(a),de(),te()}function ce(){document.getElementById("main").appendChild(function(){const e=document.createElement("form");e.id="project-form";const t=document.createElement("ul"),n=document.createElement("li"),r=document.createElement("label");r.textContent="Name: ";const a=document.createElement("input");a.maxLength="30",a.required=!0,n.append(r,a);const o=document.createElement("li"),i=document.createElement("label");i.textContent="Description: ";const c=document.createElement("textarea");c.required=!0,o.append(i,c);const d=document.createElement("li"),s=document.createElement("button"),u=document.createElement("button");return s.type="submit",s.textContent="Submit",u.addEventListener("click",de),u.textContent="Cancel",d.append(s,u),e.addEventListener("submit",ie),n.className="project-form-list-title",o.className="project-form-list-description",d.className="project-form-buttons",t.append(n,o,d),e.appendChild(t),e}()),ae()}function de(){const e=document.getElementById("project-form");document.getElementById("main").removeChild(e),oe()}re("Example Project","Modify or add your own");const se=(e,t,n,r,a)=>({name:e,description:t,addedDate:n,dueDate:r,priority:a,id:ne("note")});function ue(e,t){t.list.unshift(e)}function le(e){e.preventDefault();const{target:t}=e,n=t[0].value,r=t[1].value,a=t[2].value,o=t[3].value,i=_(new Date,"yyyy-MM-dd"),c=se(n,r,i,a,o);ue(c,Z);const d=K.findIndex((e=>e.id===Z.id));K.splice(d,1,Z);const s=Me(c);document.getElementById("notes-container").prepend(s),fe(),te()}function me(){document.getElementById("main").appendChild(function(){const e=document.createElement("form");e.id="note-form";const t=document.createElement("ul"),n=document.createElement("li"),r=document.createElement("label");r.textContent="Name: ";const a=document.createElement("input");a.id="note-form-title",a.maxLength="30",a.required=!0,n.append(r,a);const o=document.createElement("li"),i=document.createElement("label");i.textContent="Description: ";const c=document.createElement("textarea");c.id="note-form-description",c.required=!0,o.append(i,c);const d=document.createElement("li"),s=document.createElement("label");s.textContent="Date Due: ";const u=document.createElement("input");u.type="date",u.id="note-form-date",u.required=!0,d.append(s,u);const l=document.createElement("li"),m=document.createElement("label");m.textContent="Priority: ";const f=document.createElement("select");f.id="note-form-priority",f.required=!0,l.append(m,f);const p=document.createElement("option"),h=document.createElement("option"),g=document.createElement("option");p.value="3",h.value="2",g.value="1",p.textContent="High",h.textContent="Medium",g.textContent="Low",f.append(p,h,g);const v=document.createElement("li"),y=document.createElement("button"),b=document.createElement("button");return y.type="submit",y.textContent="Submit",b.addEventListener("click",fe),b.textContent="Cancel",v.append(y,b),n.className="note-form-list-title",o.className="note-form-list-description",l.className="note-form-list-priority",v.className="note-form-buttons",e.addEventListener("submit",le),t.append(n,o,d,l,v),e.appendChild(t),e}()),ae()}function fe(){const e=document.getElementById("note-form");document.getElementById("main").removeChild(e),oe()}function pe(){const e=document.querySelector(".note-form-edit");document.getElementById("main").removeChild(e),oe()}function he(e){e.preventDefault();const{target:t}=e,n=t[0].value,r=t[1].value,a=t[2].value,o=t[3].value,i=document.getElementById(`${t.id}`),c=i.querySelector(".note-title"),d=i.querySelector(".note-description"),s=i.querySelector(".note-date-due");switch(c.textContent=`${n}`,d.textContent=`${r}`,s.textContent=`${a}`,o){case"3":i.style.border="4px solid rgb(235, 0, 0)",i.dataset.priority="high";break;case"2":i.style.border="4px solid rgb(255, 233, 38)",i.dataset.priority="medium";break;case"1":i.style.border="4px solid rgb(34, 234, 18)",i.dataset.priority="low"}!function(e,t,n,r,a){const o=K.findIndex((e=>e.name===Z.name)),i=K[o].list.findIndex((e=>e.id===a));K[o].list[i].title=e.innerText,K[o].list[i].description=t.innerText,K[o].list[i].dueDate=n.innerText,K[o].list[i].priority=r,Z=K[o],te()}(c,d,s,o,t.id),pe()}const ge=function({target:e}){const t=e.parentNode.parentNode.id;document.getElementById("main").appendChild(function(e){const t=document.createElement("form");t.classList.add("note-form-edit"),t.id=`${e}`;const n=document.createElement("ul"),r=document.createElement("li"),a=document.createElement("label");a.textContent="Name: ";const o=document.createElement("input");o.classList.add("note-form-edit-title"),o.maxLength="30",o.required=!0,r.append(a,o);const i=document.createElement("li"),c=document.createElement("label");c.textContent="Description: ";const d=document.createElement("textarea");d.classList.add("note-form-edit-description"),d.required=!0,i.append(c,d);const s=document.createElement("li"),u=document.createElement("label");u.textContent="Date Due: ";const l=document.createElement("input");l.type="date",l.classList.add("note-form-edit-date"),l.required=!0,s.append(u,l);const m=document.createElement("li"),f=document.createElement("label");f.textContent="Priority: ";const p=document.createElement("select");p.classList.add("note-form-edit-priority"),p.required=!0,m.append(f,p);const h=document.createElement("option"),g=document.createElement("option"),v=document.createElement("option");h.value="3",g.value="2",v.value="1",h.textContent="High",g.textContent="Medium",v.textContent="Low",p.append(h,g,v);const y=document.createElement("li"),b=document.createElement("button"),w=document.createElement("button");return b.type="submit",b.textContent="Save",w.addEventListener("click",pe),w.textContent="Cancel",y.append(b,w),r.className="note-form-list-title",i.className="note-form-list-description",m.className="note-form-list-priority",y.className="note-form-buttons",t.addEventListener("submit",he),n.append(r,i,s,m,y),t.appendChild(n),t}(t));const n=e.parentNode.parentNode.querySelector(".note-title"),r=e.parentNode.parentNode.querySelector(".dates").querySelector(".note-date").querySelector(".note-date-due"),a=e.parentNode.parentNode,o=e.parentNode.parentNode.querySelector(".note-description"),i=document.querySelector(".note-form-edit-title"),c=document.querySelector(".note-form-edit-date"),d=document.querySelector(".note-form-edit-priority"),s=document.querySelector(".note-form-edit-description");switch(i.value=`${n.textContent}`,c.value=`${r.textContent}`,s.value=`${o.textContent}`,a.dataset.priority){case"high":d[0].selected="selected";break;case"medium":d[1].selected="selected";break;case"low":d[2].selected="selected"}ae()};function ve(){Ue(document.getElementById("notes-container"));const e=document.getElementById("main");e.removeChild(e.lastChild);const t=Ne(Z);e.appendChild(t);const n=K.findIndex((e=>Z.id===e.id));K.splice(n,1,Z),te()}function ye(){Z.list.sort(((e,t)=>{const n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?-1:n>r?1:0})),ve()}function be(){Z.list.sort(((e,t)=>{const n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?1:n>r?-1:0})),ve()}function we(){Z.list.sort(((e,t)=>{const n=e.dueDate,r=t.dueDate;return n<r?-1:n>r?1:0})),ve()}function Ee(){Z.list.sort(((e,t)=>{const n=e.dueDate,r=t.dueDate;return n<r?1:n>r?-1:0})),ve()}function Ce(){Z.list.sort(((e,t)=>{const n=e.dueDate,r=t.dueDate;return n<r?-1:n>r?1:0})),ve()}function xe(){Z.list.sort(((e,t)=>{const n=e.dueDate,r=t.dueDate;return n<r?1:n>r?-1:0})),ve()}function Te(){Z.list.sort(((e,t)=>{const n=e.priority,r=t.priority;return n<r?1:n>r?-1:0})),ve()}function De(){Z.list.sort(((e,t)=>{const n=e.priority,r=t.priority;return n<r?-1:n>r?1:0})),ve()}function Me(e){const t=document.createElement("div");t.classList.add("todo-card"),t.id=e.id;const n=document.createElement("h3");n.textContent=`${e.name}`,n.classList.add("note-title");const r=document.createElement("div"),a=document.createElement("p"),o=document.createElement("p");a.textContent="Date added: ",o.textContent=`${e.addedDate}`,r.classList.add("note-date-added"),r.append(a,o);const i=document.createElement("div"),c=document.createElement("p"),d=document.createElement("p");c.textContent="Date due: ",d.textContent=`${e.dueDate}`,i.classList.add("note-date"),i.append(c,d),d.classList.add("note-date-due");const s=document.createElement("div");switch(s.append(i,r),s.classList.add("dates"),e.priority){case"3":t.style.border="4px solid rgb(235, 0, 0)",t.dataset.priority="high";break;case"2":t.style.border="4px solid rgb(255, 233, 38)",t.dataset.priority="medium";break;case"1":t.style.border="4px solid rgb(34, 234, 18)",t.dataset.priority="low"}const u=document.createElement("p");u.textContent=`${e.description}`,u.classList.add("note-description"),u.style.display="none";const l=document.createElement("button");l.textContent="+ Description",l.addEventListener("click",ke),l.classList.add("expand-note"),l.id=`${e.description}`;const m=document.createElement("button");m.textContent="Edit",m.addEventListener("click",ge),m.classList.add("edit-note");const f=document.createElement("button");f.textContent="Delete",f.addEventListener("click",Le),f.classList.add("remove-note");const p=document.createElement("div");return p.classList.add("todo-card-buttons"),p.append(l,m,f),t.append(n,s,u,p),t}function Ne(e){const t=document.createElement("div");t.id="notes";const n=document.createElement("div");n.id="notes-header";const r=document.createElement("h1");r.id="notes-title";const a=document.createElement("p");a.id="notes-sub";const o=document.createElement("button");o.id="notes-sort-title";const i=document.createElement("button");o.id="notes-sort-title-reverse";const c=document.createElement("button");c.id="notes-sort-due-date";const d=document.createElement("button");d.id="notes-sort-due-date-reverse";const s=document.createElement("button");s.id="notes-sort-added-date";const u=document.createElement("button");u.id="notes-sort-added-date-reverse";const l=document.createElement("button");l.id="notes-sort-priority";const m=document.createElement("button");m.id="notes-sort-priority-reverse";const f=document.createElement("button");f.id="notes-button";const p=document.createElement("section");p.id="notes-container",o.addEventListener("click",ye),o.textContent="A-Z v",i.addEventListener("click",be),i.textContent="A-Z ^",c.addEventListener("click",we),c.textContent="Due Date v",d.addEventListener("click",Ee),d.textContent="Due Date ^",s.addEventListener("click",Ce),s.textContent="Date Added v",u.addEventListener("click",xe),u.textContent="Date Added ^",l.addEventListener("click",Te),l.textContent="Priority v",m.addEventListener("click",De),m.textContent="Priority ^",f.addEventListener("click",me),f.textContent="Add",f.id="add-note";const h=document.createElement("div");return h.id="todos-buttons",h.append(o,i,c,d,s,u,l,m,f),n.append(r,a,h),Z&&(r.textContent=`${Z.name} notes`,a.textContent=`${Z.description}`,t.append(n,p),e.list.forEach((e=>{const t=Me(e);p.appendChild(t)}))),t}function Le({target:e}){const{id:t}=e.parentNode,n=Z.list.findIndex((e=>e.id===t));Z.list.splice(n,1),e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode),te()}function ke({target:e}){e.parentNode.parentNode.querySelector(".note-description").style.display="block",e.textContent="- Description",e.removeEventListener("click",ke),e.addEventListener("click",Se)}function Se({target:e}){e.parentNode.parentNode.querySelector(".note-description").style.display="none",e.textContent="+ Description",e.removeEventListener("click",Se),e.addEventListener("click",ke)}function Pe(e){Z=e}function qe({target:e}){const t=K.find((t=>t.id===e.parentNode.id));if(t.id===Z.id)return;Pe(t);const n=document.getElementById("notes-container");n&&Ue(n);const r=document.getElementById("main");r.removeChild(r.lastChild);const a=Ne(t);r.appendChild(a),te()}function Ue(e){e.innerHTML=""}function je(){const e=document.querySelector(".project-form-edit");document.getElementById("main").removeChild(e),oe()}function We(e){e.preventDefault();const{target:t}=e,n=t[0].value,r=t[1].value,a=document.getElementById(`${t.id}`).querySelector(".project-title"),o=document.getElementById("notes-title"),i=document.getElementById("notes-sub");a.textContent=`${n}`,function(e,t,n){const r=K.findIndex((e=>e.id===n));K[r].name=e.innerText,K[r].description=t,te()}(a,r,t.id),je(),""!==Z&&Z.id===t.id&&(o.textContent=`${n} notes`,i.textContent=`${r}`)}const Be=function(e){e.stopPropagation();const{target:t}=e,n=t.parentNode.parentNode.id,r=K.findIndex((e=>e.id===n)),{description:a}=K[r];document.getElementById("main").appendChild(function(e){const t=document.createElement("form");t.classList.add("project-form-edit"),t.id=`${e}`;const n=document.createElement("ul"),r=document.createElement("li"),a=document.createElement("label");a.textContent="Name: ";const o=document.createElement("input");o.classList.add("project-form-edit-title"),o.maxLength="30",o.required=!0,r.append(a,o);const i=document.createElement("li"),c=document.createElement("label");c.textContent="Description: ";const d=document.createElement("textarea");d.classList.add("project-form-edit-description"),d.maxLength="300",d.required=!0,i.append(c,d);const s=document.createElement("li"),u=document.createElement("button"),l=document.createElement("button");return u.type="submit",u.textContent="Save",l.addEventListener("click",je),l.textContent="Cancel",s.append(u,l),t.addEventListener("submit",We),n.append(r,i,s),t.appendChild(n),r.className="project-form-list-title",i.className="project-form-list-description",s.className="project-form-buttons",t}(n));const o=t.parentNode.parentNode.querySelector(".project-title"),i=document.querySelector(".project-form-edit-title"),c=document.querySelector(".project-form-edit-description");i.value=`${o.textContent}`,c.value=`${a}`,ae()};function Ie(e){const t=document.createElement("div");t.classList.add("project-card"),t.id=`${e.id}`,t.addEventListener("click",qe);const n=document.createElement("p");n.classList.add("project-title"),n.textContent=`${e.name}`;const r=document.createElement("p");r.textContent=`${e.description}`,r.classList.add("project-description");const a=document.createElement("div");a.classList.add("project-buttons");const o=document.createElement("button");o.textContent="Edit",o.addEventListener("click",Be),o.classList.add("edit-project");const i=document.createElement("button");return i.textContent="Delete",i.id=`${e.id}`,i.classList.add("remove-project"),i.addEventListener("click",Ye),a.append(o,i),t.append(n,a),t}function Ye(e){e.stopPropagation();const{target:t}=e,{id:n}=t.parentNode.parentNode,r=K.findIndex((e=>e.id===n));if(t.parentNode.parentNode.parentNode.removeChild(t.parentNode.parentNode),!Z)return K.splice(r,1),void te();if(K[r].id===Z.id){K.splice(r,1);const e=document.getElementById("notes-container"),t=document.getElementById("notes-header");if(e.innerHTML="",t.innerHTML="",K.length>0){const[e]=K;Z=e;const t=Ne(Z),n=document.getElementById("main");n.removeChild(n.lastChild),n.appendChild(t)}else Z=""}else K.splice(r,1);te()}Pe(K[0]),ue(se("Example Note","An example todo",_(new Date,"yyyy-MM-dd"),_(new Date(2022,5,6),"yyyy-MM-dd"),"1"),Z),localStorage.getItem("projects")?(ee(),Z=JSON.parse(localStorage.getItem("currentProject"))):te(),document.getElementById("content").append(function(){const e=document.createElement("header"),t=document.createElement("h1");return t.textContent="Notes App - Todo-List",t.id="page-title",e.appendChild(t),e}(),function(){const e=document.createElement("section");return e.id="main",e.append(function(){const e=document.createElement("div");e.id="projects";const t=document.createElement("div"),n=document.createElement("h2");n.textContent="Projects",n.id="projects-heading";const r=document.createElement("button");r.textContent="Add",r.id="add-project",r.addEventListener("click",ce);const a=document.createElement("section");return a.id="project-container",t.append(n,r),e.append(t,a),K.forEach((e=>{const t=Ie(e);a.appendChild(t)})),e}(),Ne(Z)),e}(),function(){const e=document.createElement("footer"),t=document.createElement("p"),n=document.createElement("p");return n.id="source",t.innerHTML='Made by <a href="https://github.com/arcadesproject"> arcadesproject<img id="git" alt="github icon" src="../src/assets/git.png"></a>',n.innerHTML='<a href="https://github.com/arcadesproject/The_Odin_Project/tree/main/Javascript/Todo-List"> source',e.append(t,n),e}(),function(){const e=document.createElement("div");return e.id="blur",e}())})();