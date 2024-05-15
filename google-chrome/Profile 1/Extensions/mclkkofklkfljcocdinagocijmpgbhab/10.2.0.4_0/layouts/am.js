(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var f=function(a,b,c){return a.call.apply(a.bind,arguments)},g=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}},k=function(a,b,c){k=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:g;return k.apply(null,arguments)},m=function(a){var b=
["google","elements","keyboard","hangulTransform"],c=l;b[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)b.length||void 0===a?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=a},n=function(){this.g="\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(" ");
this.i={"\u1104":"\u1104","\u1108":"\u1108","\u110d":"\u110d"};for(var a=0;a<this.g.length;a++)this.i[this.g[a]]=String.fromCharCode(4520+a);this.C={"\u1169\u1161":"\u116a","\u1169\u1162":"\u116b","\u1169\u1175":"\u116c","\u116e\u1165":"\u116f","\u116e\u1166":"\u1170","\u116e\u1175":"\u1171","\u1173\u1175":"\u1174"};this.I=/[\u11a8-\u11c3]/g;this.H=RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175","g");this.F=/[\uac00-\ud7af]/g;this.G=/([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
this.u=RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])");this.m=RegExp("([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))");this.o=RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))");this.v=RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))");this.h={"\u1107":"\u3142","\u110c":"\u3148",
"\u1103":"\u3137","\u1100":"\u3131","\u1109":"\u3145","\u116d":"\u315b","\u1167":"\u3155","\u1163":"\u3151","\u1162":"\u3150","\u1166":"\u3154","\u1106":"\u3141","\u1102":"\u3134","\u110b":"\u3147","\u1105":"\u3139","\u1112":"\u314e","\u1169":"\u3157","\u1165":"\u3153","\u1161":"\u314f","\u1175":"\u3163","\u110f":"\u314b","\u1110":"\u314c","\u110e":"\u314a","\u1111":"\u314d","\u1172":"\u3160","\u116e":"\u315c","\u1173":"\u3161","\u1108":"\u3143","\u110d":"\u3149","\u1104":"\u3138","\u1101":"\u3132",
"\u110a":"\u3146","\u1164":"\u3152","\u1168":"\u3156"};this.j={};for(var b in this.h)this.j[this.h[b]]=b},p=function(a,b){return b.replace(a.I,function(c){return a.g[c.charCodeAt(0)-4519-1]})},q=function(a,b){return b.replace(a.H,function(c){return a.C[c]})},l=this||self;n.prototype.B=function(a){a=a.charCodeAt(0)-44032;var b=4519+a%28;return String.fromCharCode(4352+a/588)+String.fromCharCode(4449+a%588/28)+(4519==b?"":String.fromCharCode(b))};n.prototype.A=function(a){return String.fromCharCode(28*(21*(a.charCodeAt(0)-4352)+(a.charCodeAt(1)-4449))+(3<=a.length?a.charCodeAt(2)-4519:0)+44032)};n.prototype.D=function(a,b,c,d){return b+this.i[c]+d};
(function(){var a=new n;m(function(b){b=b.replace("\u001d","");for(var c="",d=0,e;e=b.charAt(d);++d){var h=a.j[e];c+=h?h:e}b=c.replace(a.F,k(a.B,a));c=k(a.D,a);b=q(a,p(a,b)).replace(a.u,c).replace(a.m,c).replace(a.o,c).replace(a.v,c).replace(a.G,k(a.A,a));c="";for(d=0;e=b.charAt(d);++d)h=a.h[e],c+=h?h:e;return c})})();new n;google.elements.keyboard.loadme({id:"am",title:"\u130d\u12d5\u12dd",mappings:{"":{"":"`1234567890-=\u1245\u12cd\u12a5\u122d\u1275\u12ed\u12a1\u12a2\u12a6\u1355[]\\\u12a0\u1235\u12f5\u134d\u130d\u1205\u1305\u12ad\u120d\u1364'\u12dd\u123d\u127d\u126d\u1265\u1295\u121d\u1363./"},s:{"":'~!@#$%^&*()_+\u1245\u12cd\u12a4\u122d\u1325\u12ed\u12a1\u12a5\u12a6\u1335{}|\u12d0\u133d\u12f5\u134d\u130d\u1215\u1305\u12bd\u120d\u1361"\u12e5\u123d\u132d\u126d\u1265\u129d\u121d\u2039\u203a?'},l:{"":"`1234567890-=\u1245\u12cd\u12a4\u122d\u1325\u12ed\u12a1\u12a5\u12a6\u1335[]\\\u12d0\u133d\u12f5\u134d\u130d\u1215\u1305\u12bd\u120d\u1361'\u12e5\u123d\u132d\u126d\u1265\u129d\u121d,./"},
sl:{"":'~!@#$%^&*()_+\u1245\u12cd\u12a5\u122d\u1275\u12ed\u12a1\u12a2\u12a6\u1355{}|\u12a0\u1235\u12f5\u134d\u130d\u1205\u1305\u12ad\u120d\u1364"\u12dd\u123d\u127d\u126d\u1265\u1295\u121d<>?'},c:{"":"`\u1369\u136a\u136b\u136c\u136d\u136e\u136f\u1370\u13710-=\u1255\u12cd\u12a5\u122d\u1275\u12ed\u12a1\u12a2\u12a6\u1355[]\\\u12a0\u1225\u12fd\u134d\u131d\u1285\u1305\u2dcd\u120d\u1364'\u2db5\u2da5\u2dad\u126d\u1265\u1295\u121d\u1363./"},sc:{"":'~\u1369\u136a\u136b\u136c\u136d\u136e\u136f\u1370\u13710_+\u2dc5\u12cd\u12a4\u122d\u1325\u12ed\u12a1\u12a5\u12a6\u1335{}|\u12d0\u1345\u12fd\u134d\u2ddd\u1285\u1305\u2dd5\u120d\u1361"\u2db5\u2da5\u2dbd\u126d\u1265\u129d\u121d\u2039\u203a?'}},
transform:{"\u128a\u001d?\u12a5":"\u128c","\u1221\u001d?\u12a0":"\u1227","\u1222\u001d?\u12a5":"\u1224","\u124a\u001d?\u12a5":"\u124c","\u125a\u001d?\u12a5":"\u125c","\u1281\u001d?\u12a0":"\u128b","\u1281\u001d?\u12a1\u001d?":"\u128d","\u1281\u001d?\u12a2\u001d?":"\u128a","\u1281\u001d?\u12a5":"\u1288","\u1281\u001d?\u12a4\u001d?":"\u128c","\u1282\u001d?\u12a5":"\u1284","\u1284\u001d?\u12a4\u001d?":"\u1288","\u1280\u001d?\u12a6\u001d?":"\u1287","\u1286\u001d?\u12a0":"\u1287","\u12d2\u001d?\u12a5":"\u12d4",
"\u12b2\u001d?\u12a5":"\u12b4","\u12c2\u001d?\u12a5":"\u12c2","\u1312\u001d?\u12a5":"\u1314","\u2d94\u001d?\u12a5":"\u2d95","\u1342\u001d?\u12a5":"\u1344","\u1346\u001d?\u12a0":"\u1347","\u1381\u001d?\u12a5":"\u1382","\u1385\u001d?\u12a5":"\u1386","\u138b\u001d?\u12a5":"\u138a","\u138f\u001d?\u12a5":"\u138e","\u1372\u001d?0":"\u137b","\u1201\u001d?\u12a0":"\u128b","\u1201\u001d?\u12a1\u001d?":"\u128d","\u1201\u001d?\u12a2\u001d?":"\u128a","\u1201\u001d?\u12a5":"\u1288","\u1201\u001d?\u12a4\u001d?":"\u128c",
"\u1202\u001d?\u12a5":"\u1204","\u1206\u001d?\u12a0":"\u1207","\u1209\u001d?\u12a0":"\u120f","\u120a\u001d?\u12a5":"\u120c","\u120e\u001d?\u12a0":"\u2d80","\u1211\u001d?\u12a0":"\u1217","\u1212\u001d?\u12a5":"\u1214","\u1219\u001d?\u12a0":"\u121f","\u121a\u001d?\u12a5":"\u121c","\u121e\u001d?\u12a0":"\u2d81","\u121d\u12ed\u12a0":"\u1359","\u1225\u001d?\u12a0":"\u1223","\u1225\u001d?\u12a1\u001d?":"\u1221","\u1225\u001d?\u12a2\u001d?":"\u1222","\u1225\u001d?\u12a4\u001d?":"\u1224","\u1225\u001d?\u12a5":"\u1220",
"\u1225\u001d?\u12a6\u001d?":"\u1226","\u1229\u001d?\u12a0":"\u122f","\u122a\u001d?\u12a5":"\u122c","\u122e\u001d?\u12a0":"\u2d82","\u122d\u12ed\u12a0":"\u1358","\u1231\u001d?\u12a0":"\u1237","\u1232\u001d?\u12a5":"\u1234","\u1236\u001d?\u12a0":"\u2d83","\u1239\u001d?\u12a0":"\u123f","\u123a\u001d?\u12a5":"\u123c","\u123e\u001d?\u12a0":"\u2d84","\u1241\u001d?\u12a0":"\u124b","\u1241\u001d?\u12a1\u001d?":"\u124d","\u1241\u001d?\u12a2\u001d?":"\u124a","\u1241\u001d?\u12a4\u001d?":"\u124c","\u1241\u001d?\u12a5":"\u1248",
"\u1242\u001d?\u12a5":"\u1244","\u1246\u001d?\u12a0":"\u1247","\u1246\u001d?\u12a6\u001d?":"\u1248","\u1255\u12a1\u001d?\u12a0":"\u125b","\u1255\u12a1\u001d?\u12a2\u001d?":"\u125a","\u1255\u12a1\u001d?\u12a4\u001d?":"\u125c","\u1255\u12a1\u001d?\u12a5":"\u1258","\u1255\u12a1\u001d?\u12a1\u001d?":"\u1251","\u1252\u001d?\u12a5":"\u1254","\u1261\u001d?\u12a0":"\u1267","\u1262\u001d?\u12a5":"\u1264","\u1266\u001d?\u12a0":"\u2d85","\u1269\u001d?\u12a0":"\u126f","\u126a\u001d?\u12a5":"\u126c","\u1271\u001d?\u12a0":"\u1277",
"\u1272\u001d?\u12a5":"\u1274","\u1276\u001d?\u12a0":"\u2d86","\u1279\u001d?\u12a0":"\u127f","\u127a\u001d?\u12a5":"\u127c","\u127e\u001d?\u12a0":"\u2d87","\u1286\u001d?\u12a6\u001d?":"\u1288","\u1205\u1205\u12a0":"\u1283","\u1205\u1205\u12a1\u001d?":"\u1281","\u1205\u1205\u12a2\u001d?":"\u1282","\u1205\u1205\u12a4\u001d?":"\u1284","\u1205\u1205\u12a5":"\u1280","\u1205\u1205\u12a6\u001d?":"\u1286","\u1291\u001d?\u12a0":"\u1297","\u1292\u001d?\u12a5":"\u1294","\u1296\u001d?\u12a0":"\u2d88","\u1299\u001d?\u12a0":"\u129f",
"\u129a\u001d?\u12a5":"\u129c","\u129e\u001d?\u12a0":"\u2d89","\u12a2\u001d?\u12a5":"\u12a4","\u12d5\u001d?\u12a5":"\u12d0","\u12d5\u001d?\u12a1\u001d?":"\u12d1","\u12d5\u001d?\u12a2\u001d?":"\u12d2","\u12d5\u001d?\u12a0":"\u12d3","\u12d5\u001d?\u12a6\u001d?":"\u12d6","\u12d3\u001d?\u12a0":"\u12d0","\u12a9\u001d?\u12a0":"\u12b3","\u12a9\u001d?\u12a1\u001d?":"\u12b5","\u12a9\u001d?\u12a2\u001d?":"\u12b2","\u12a9\u001d?\u12a4\u001d?":"\u12b4","\u12a9\u001d?\u12a5":"\u12b0","\u12aa\u001d?\u12a5":"\u12ac",
"\u12ae\u001d?\u12a0":"\u12af","\u12ae\u001d?\u12a6\u001d?":"\u12b0","\u12b9\u001d?\u12a0":"\u12c3","\u12b9\u001d?\u12a1\u001d?":"\u12c5","\u12b9\u001d?\u12a2\u001d?":"\u12c2","\u12b9\u001d?\u12a4\u001d?":"\u12c4","\u12ba\u001d?\u12a5":"\u12bc","\u12be\u001d?\u12a6\u001d?":"\u12c0","\u12ca\u001d?\u12a5":"\u12cc","\u12ce\u001d?\u12a0":"\u12cf","\u12d9\u001d?\u12a0":"\u12df","\u12da\u001d?\u12a5":"\u12dc","\u12de\u001d?\u12a0":"\u2d8b","\u12e1\u001d?\u12a0":"\u12e7","\u12e2\u001d?\u12a5":"\u12e4","\u12ea\u001d?\u12a5":"\u12ec",
"\u12ee\u001d?\u12a0":"\u12ef","\u12f1\u001d?\u12a0":"\u12f7","\u12f2\u001d?\u12a5":"\u12f4","\u12f6\u001d?\u12a0":"\u2d8c","\u12f9\u001d?\u12a0":"\u12ff","\u12fa\u001d?\u12a5":"\u12fc","\u12fe\u001d?\u12a0":"\u2d8d","\u1301\u001d?\u12a0":"\u1307","\u1302\u001d?\u12a5":"\u1304","\u1306\u001d?\u12a0":"\u2d8e","\u1309\u001d?\u12a0":"\u1313","\u1309\u001d?\u12a1\u001d?":"\u1315","\u1309\u001d?\u12a2\u001d?":"\u1312","\u1309\u001d?\u12a4\u001d?":"\u1314","\u1309\u001d?\u12a5":"\u1310","\u130a\u001d?\u12a5":"\u130c",
"\u130e\u001d?\u12a0":"\u130f","\u130e\u001d?\u12a6\u001d?":"\u1310","\u1319\u001d?\u12a0":"\u131f","\u1319\u001d?\u12a1\u001d?":"\u2d96","\u1319\u001d?\u12a2\u001d?":"\u2d94","\u1319\u001d?\u12a4\u001d?":"\u2d95","\u1319\u001d?\u12a5":"\u2d93","\u131a\u001d?\u12a5":"\u131c","\u1321\u001d?\u12a0":"\u1327","\u1322\u001d?\u12a5":"\u1324","\u1326\u001d?\u12a0":"\u2d8f","\u1329\u001d?\u12a0":"\u132f","\u132e\u001d?\u12a0":"\u2d90","\u1331\u001d?\u12a0":"\u1337","\u1336\u001d?\u12a0":"\u2d91","\u1339\u001d?\u12a0":"\u133f",
"\u133a\u001d?\u12a5":"\u133c","\u1345\u001d?\u12a1\u001d?":"\u1341","\u1345\u001d?\u12a2\u001d?":"\u1342","\u1345\u001d?\u12a4\u001d?":"\u1344","\u1345\u001d?\u12a5":"\u1340","\u1345\u001d?\u12a6\u001d?":"\u1346","\u134d\u12ed\u12a0":"\u135a","\u1349\u001d?\u12a0":"\u134f","\u134a\u001d?\u12a5":"\u134c","\u1351\u001d?\u12a0":"\u1357","\u1352\u001d?\u12a5":"\u1354","\u1356\u001d?\u12a0":"\u2d92","\u2da2\u001d?\u12a5":"\u2da4","\u2daa\u001d?\u12a5":"\u2dac","\u2db2\u001d?\u12a5":"\u2db4","\u2dba\u001d?\u12a5":"\u2dbc",
"\u2dc2\u001d?\u12a5":"\u2dc4","\u2dca\u001d?\u12a5":"\u2dcc","\u2dd2\u001d?\u12a5":"\u2dd4","\u2dda\u001d?\u12a5":"\u2ddc","`\u121d\u12a1\u001d?":"\u1383","`\u121d\u12a2\u001d?":"\u1381","`\u121d\u12a4\u001d?":"\u1382","`\u121d\u12a5":"\u1380","`\u1265\u12a1\u001d?":"\u1387","`\u1265\u12a2\u001d?":"\u1385","`\u1265\u12a4\u001d?":"\u1386","`\u1265\u12a5":"\u1384","`\u134d\u12a1\u001d?":"\u1389","`\u134d\u12a2\u001d?":"\u138b","`\u134d\u12a4\u001d?":"\u138a","`\u134d\u12a5":"\u1388","`\u1355\u12a1\u001d?":"\u138d",
"`\u1355\u12a2\u001d?":"\u138f","`\u1355\u12a4\u001d?":"\u138e","`\u1355\u12a5":"\u138c","\u1365\u001d?\u1363":",","\u00ab\u001d?\u2039":"<","\u00bb\u001d?\u203a":">","`\u1361#":"\u1368","`\u1361\\+":"\u1360","\u1369\u001d?0":"\u1372","\u136a\u001d?0":"\u1373","\u136b\u001d?0":"\u1374","\u136c\u001d?0":"\u1375","\u136d\u001d?0":"\u1376","\u136e\u001d?0":"\u1377","\u136f\u001d?0":"\u1378","\u1370\u001d?0":"\u1379","\u1371\u001d?0":"\u137a","\u1205\u12a0":"\u1203","\u1205\u12a1\u001d?":"\u1201","\u1205\u12a2\u001d?":"\u1202",
"\u1205\u12a4\u001d?":"\u1204","\u1205\u12a5":"\u1200","\u1205\u12a6\u001d?":"\u1206","\u120d\u12a0":"\u120b","\u120d\u12a1\u001d?":"\u1209","\u120d\u12a2\u001d?":"\u120a","\u120d\u12a4\u001d?":"\u120c","\u120d\u12a5":"\u1208","\u120d\u12a6\u001d?":"\u120e","\u1215\u12a0":"\u1213","\u1215\u12a1\u001d?":"\u1211","\u1215\u12a2\u001d?":"\u1212","\u1215\u12a4\u001d?":"\u1214","\u1215\u12a5":"\u1210","\u1215\u12a6\u001d?":"\u1216","\u121d\u12a0":"\u121b","\u121d\u12a1\u001d?":"\u1219","\u121d\u12a2\u001d?":"\u121a",
"\u121d\u12a4\u001d?":"\u121c","\u121d\u12a5":"\u1218","\u121d\u12a6\u001d?":"\u121e","\u1235\u1235":"\u1225","\u122d\u12a0":"\u122b","\u122d\u12a1\u001d?":"\u1229","\u122d\u12a2\u001d?":"\u122a","\u122d\u12a4\u001d?":"\u122c","\u122d\u12a5":"\u1228","\u122d\u12a6\u001d?":"\u122e","\u1235\u12a0":"\u1233","\u1235\u12a1\u001d?":"\u1231","\u1235\u12a2\u001d?":"\u1232","\u1235\u12a4\u001d?":"\u1234","\u1235\u12a5":"\u1230","\u1235\u12a6\u001d?":"\u1236","\u123d\u12a0":"\u123b","\u123d\u12a1\u001d?":"\u1239",
"\u123d\u12a2\u001d?":"\u123a","\u123d\u12a4\u001d?":"\u123c","\u123d\u12a5":"\u1238","\u123d\u12a6\u001d?":"\u123e","\u1245\u12a0":"\u1243","\u1245\u12a1\u001d?":"\u1241","\u1245\u12a2\u001d?":"\u1242","\u1245\u12a4\u001d?":"\u1244","\u1245\u12a5":"\u1240","\u1245\u12a6\u001d?":"\u1246","\u1255\u12a0":"\u1253","\u1255\u12a2\u001d?":"\u1252","\u1255\u12a4\u001d?":"\u1254","\u1255\u12a5":"\u1250","\u1255\u12a6\u001d?":"\u1256","\u1265\u12a0":"\u1263","\u1265\u12a1\u001d?":"\u1261","\u1265\u12a2\u001d?":"\u1262",
"\u1265\u12a4\u001d?":"\u1264","\u1265\u12a5":"\u1260","\u1265\u12a6\u001d?":"\u1266","\u126d\u12a0":"\u126b","\u126d\u12a1\u001d?":"\u1269","\u126d\u12a2\u001d?":"\u126a","\u126d\u12a4\u001d?":"\u126c","\u126d\u12a5":"\u1268","\u126d\u12a6\u001d?":"\u126e","\u1275\u12a0":"\u1273","\u1275\u12a1\u001d?":"\u1271","\u1275\u12a2\u001d?":"\u1272","\u1275\u12a4\u001d?":"\u1274","\u1275\u12a5":"\u1270","\u1275\u12a6\u001d?":"\u1276","\u127d\u12a0":"\u127b","\u127d\u12a1\u001d?":"\u1279","\u127d\u12a2\u001d?":"\u127a",
"\u127d\u12a4\u001d?":"\u127c","\u127d\u12a5":"\u1278","\u127d\u12a6\u001d?":"\u127e","\u1285\u12a0":"\u1283","\u1285\u12a1\u001d?":"\u1281","\u1285\u12a2\u001d?":"\u1282","\u1285\u12a4\u001d?":"\u1284","\u1285\u12a5":"\u1280","\u1285\u12a6\u001d?":"\u1286","\u1295\u12a0":"\u1293","\u1295\u12a1\u001d?":"\u1291","\u1295\u12a2\u001d?":"\u1292","\u1295\u12a4\u001d?":"\u1294","\u1295\u12a5":"\u1290","\u1295\u12a6\u001d?":"\u1296","\u129d\u12a0":"\u129b","\u129d\u12a1\u001d?":"\u1299","\u129d\u12a2\u001d?":"\u129a",
"\u129d\u12a4\u001d?":"\u129c","\u129d\u12a5":"\u1298","\u129d\u12a6\u001d?":"\u129e","\u12a0\u12a1\u001d?":"\u12a1","\u12a0\u12a2\u001d?":"\u12a2","\u12a0\u12a6\u001d?":"\u12a6","\u12d0\u001d?\u12a1\u001d?":"\u12d1","\u12d0\u001d?\u12a2\u001d?":"\u12d2","\u12d0\u001d?\u12a0":"\u12d3","\u12d0\u001d?\u12a6\u001d?":"\u12d6","\u12a1\u001d?\u12a1\u001d?":"\u12d1","\u12a2\u001d?\u12a2\u001d?":"\u12d2","\u12a0\u12a0":"\u12d3","\u12a6\u001d?\u12a6\u001d?":"\u12d6","\u12a5\u12a1\u001d?":"\u12a1","\u12a5\u12a2\u001d?":"\u12a2",
"\u12a5\u12a0":"\u12a3","\u12a5\u12a6\u001d?":"\u12a6","\u12a5\u12a5":"\u12d5","\u12a0\u12a5":"\u12a7","\u12ad\u12a0":"\u12ab","\u12ad\u12a1\u001d?":"\u12a9","\u12ad\u12a2\u001d?":"\u12aa","\u12ad\u12a4\u001d?":"\u12ac","\u12ad\u12a5":"\u12a8","\u12ad\u12a6\u001d?":"\u12ae","\u12bd\u12a0":"\u12bb","\u12bd\u12a1\u001d?":"\u12b9","\u12bd\u12a2\u001d?":"\u12ba","\u12bd\u12a4\u001d?":"\u12bc","\u12bd\u12a5":"\u12b8","\u12bd\u12a6\u001d?":"\u12be","\u12cd\u12a0":"\u12cb","\u12cd\u12a1\u001d?":"\u12c9",
"\u12cd\u12a2\u001d?":"\u12ca","\u12cd\u12a4\u001d?":"\u12cc","\u12cd\u12a5":"\u12c8","\u12cd\u12a6\u001d?":"\u12ce","\u12dd\u12a0":"\u12db","\u12dd\u12a1\u001d?":"\u12d9","\u12dd\u12a2\u001d?":"\u12da","\u12dd\u12a4\u001d?":"\u12dc","\u12dd\u12a5":"\u12d8","\u12dd\u12a6\u001d?":"\u12de","\u12e5\u12a0":"\u12e3","\u12e5\u12a1\u001d?":"\u12e1","\u12e5\u12a2\u001d?":"\u12e2","\u12e5\u12a4\u001d?":"\u12e4","\u12e5\u12a5":"\u12e0","\u12e5\u12a6\u001d?":"\u12e6","\u12ed\u12a0":"\u12eb","\u12ed\u12a1\u001d?":"\u12e9",
"\u12ed\u12a2\u001d?":"\u12ea","\u12ed\u12a4\u001d?":"\u12ec","\u12ed\u12a5":"\u12e8","\u12ed\u12a6\u001d?":"\u12ee","\u12f5\u12a0":"\u12f3","\u12f5\u12a1\u001d?":"\u12f1","\u12f5\u12a2\u001d?":"\u12f2","\u12f5\u12a4\u001d?":"\u12f4","\u12f5\u12a5":"\u12f0","\u12f5\u12a6\u001d?":"\u12f6","\u12fd\u12a0":"\u12fb","\u12fd\u12a1\u001d?":"\u12f9","\u12fd\u12a2\u001d?":"\u12fa","\u12fd\u12a4\u001d?":"\u12fc","\u12fd\u12a5":"\u12f8","\u12fd\u12a6\u001d?":"\u12fe","\u1305\u12a0":"\u1303","\u1305\u12a1\u001d?":"\u1301",
"\u1305\u12a2\u001d?":"\u1302","\u1305\u12a4\u001d?":"\u1304","\u1305\u12a5":"\u1300","\u1305\u12a6\u001d?":"\u1306","\u130d\u12a0":"\u130b","\u130d\u12a1\u001d?":"\u1309","\u130d\u12a2\u001d?":"\u130a","\u130d\u12a4\u001d?":"\u130c","\u130d\u12a5":"\u1308","\u130d\u12a6\u001d?":"\u130e","\u131d\u12a0":"\u131b","\u131d\u12a1\u001d?":"\u1319","\u131d\u12a2\u001d?":"\u131a","\u131d\u12a4\u001d?":"\u131c","\u131d\u12a5":"\u1318","\u131d\u12a6\u001d?":"\u131e","\u1325\u12a0":"\u1323","\u1325\u12a1\u001d?":"\u1321",
"\u1325\u12a2\u001d?":"\u1322","\u1325\u12a4\u001d?":"\u1324","\u1325\u12a5":"\u1320","\u1325\u12a6\u001d?":"\u1326","\u132d\u12a0":"\u132b","\u132d\u12a1\u001d?":"\u1329","\u132d\u12a2\u001d?":"\u132a","\u132d\u12a4\u001d?":"\u132c","\u132d\u12a5":"\u1328","\u132d\u12a6\u001d?":"\u132e","\u1335\u12a0":"\u1333","\u1335\u12a1\u001d?":"\u1331","\u1335\u12a2\u001d?":"\u1332","\u1335\u12a4\u001d?":"\u1334","\u1335\u12a5":"\u1330","\u1335\u12a6\u001d?":"\u1336","\u133d\u12a0":"\u133b","\u133d\u12a1\u001d?":"\u1339",
"\u133d\u12a2\u001d?":"\u133a","\u133d\u12a4\u001d?":"\u133c","\u133d\u12a5":"\u1338","\u133d\u12a6\u001d?":"\u133e","\u1345\u001d?\u12a0":"\u1343","\u133d\u133d":"\u1345","\u134d\u12a0":"\u134b","\u134d\u12a1\u001d?":"\u1349","\u134d\u12a2\u001d?":"\u134a","\u134d\u12a4\u001d?":"\u134c","\u134d\u12a5":"\u1348","\u134d\u12a6\u001d?":"\u134e","\u1355\u12a0":"\u1353","\u1355\u12a1\u001d?":"\u1351","\u1355\u12a2\u001d?":"\u1352","\u1355\u12a4\u001d?":"\u1354","\u1355\u12a5":"\u1350","\u1355\u12a6\u001d?":"\u1356",
"\u2da5\u12a0":"\u2da3","\u2da5\u12a1\u001d?":"\u2da1","\u2da5\u12a2\u001d?":"\u2da2","\u2da5\u12a4\u001d?":"\u2da4","\u2da5\u12a5":"\u2da0","\u2da5\u12a6\u001d?":"\u2da6","\u2dad\u12a0":"\u2dab","\u2dad\u12a1\u001d?":"\u2da9","\u2dad\u12a2\u001d?":"\u2daa","\u2dad\u12a4\u001d?":"\u2dac","\u2dad\u12a5":"\u2da8","\u2dad\u12a6\u001d?":"\u2dae","\u2db5\u12a0":"\u2db3","\u2db5\u12a1\u001d?":"\u2db1","\u2db5\u12a2\u001d?":"\u2db2","\u2db5\u12a4\u001d?":"\u2db4","\u2db5\u12a5":"\u2db0","\u2db5\u12a6\u001d?":"\u2db6",
"\u2dbd\u12a0":"\u2dbb","\u2dbd\u12a1\u001d?":"\u2db9","\u2dbd\u12a2\u001d?":"\u2dba","\u2dbd\u12a4\u001d?":"\u2dbc","\u2dbd\u12a5":"\u2db8","\u2dbd\u12a6\u001d?":"\u2dbe","\u2dc5\u12a0":"\u2dc3","\u2dc5\u12a1\u001d?":"\u2dc1","\u2dc5\u12a2\u001d?":"\u2dc2","\u2dc5\u12a4\u001d?":"\u2dc4","\u2dc5\u12a5":"\u2dc0","\u2dc5\u12a6\u001d?":"\u2dc6","\u2dcd\u12a0":"\u2dcb","\u2dcd\u12a1\u001d?":"\u2dc9","\u2dcd\u12a2\u001d?":"\u2dca","\u2dcd\u12a4\u001d?":"\u2dcc","\u2dcd\u12a5":"\u2dc8","\u2dcd\u12a6\u001d?":"\u2dce",
"\u2dd5\u12a0":"\u2dd3","\u2dd5\u12a1\u001d?":"\u2dd1","\u2dd5\u12a2\u001d?":"\u2dd2","\u2dd5\u12a4\u001d?":"\u2dd4","\u2dd5\u12a5":"\u2dd0","\u2dd5\u12a6\u001d?":"\u2dd6","\u2ddd\u12a0":"\u2ddb","\u2ddd\u12a1\u001d?":"\u2dd9","\u2ddd\u12a2\u001d?":"\u2dda","\u2ddd\u12a4\u001d?":"\u2ddc","\u2ddd\u12a5":"\u2dd8","\u2ddd\u12a6\u001d?":"\u2dde","_\u001d?0":"\u1399","_\u001d?2":"\u1391","_\u001d?3":"\u1392","_\u001d?4":"\u1393","_\u001d?5":"\u1394","_\u001d?6":"\u1395","_\u001d?7":"\u1396","_\u001d?8":"\u1397",
"_\u001d?9":"\u1398","_\u001d?_\u001d?":"_","'!":"\u00a1","\u1363\u1363":"\u1365",":-":"\u1366","\u1361\u1361":"\u1362","\u1364\u1364":";","\u2039\u2039":"\u00ab","\u203a\u203a":"\u00bb","\u1361-":"\u1366","`\\?":"\u1367","'1":"\u1369","'2":"\u136a","'3":"\u136b","'4":"\u136c","'5":"\u136d","'6":"\u136e","'7":"\u136f","'8":"\u1370","'9":"\u1371"}});}).call(this);
