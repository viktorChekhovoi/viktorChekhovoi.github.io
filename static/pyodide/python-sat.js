var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="python-sat.data";var REMOTE_PACKAGE_BASE="python-sat.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","pysat",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/pysat","examples",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","python_sat-0.1.6.dev6-py3.8.egg-info",true,true);Module["FS_createPath"]("/","bin",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:1008112,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1297,2245,3026,3849,4739,6215,7823,9290,10799,12319,13458,14890,16116,17194,18107,19001,20114,21148,22062,23324,24756,26114,27458,28746,30064,31355,32460,33682,35170,36691,37951,39149,40454,41174,42242,43333,44348,45248,46333,47268,48220,49011,49736,50765,51872,52789,53918,54958,56084,57056,58104,59047,60166,60852,61917,63026,63998,65107,66059,67166,68187,69223,70352,71459,72547,73698,74733,75916,76935,78054,79086,80005,80641,81278,81976,82875,83800,84749,85669,86595,87546,88432,89377,90342,91311,92267,93261,94396,95540,96659,97673,98790,99969,101128,102293,103403,104575,105735,106855,108010,109175,110371,111506,112659,113767,114923,115947,117037,118080,119216,120348,121549,122646,123746,124886,126081,127179,128179,129508,130577,131627,132714,133767,134817,135931,137044,138155,139527,140921,142231,143836,145249,146932,148498,150013,151264,152477,153881,154967,156587,158214,159815,161344,162951,164446,165796,167350,168918,170388,171883,173387,174637,176016,177412,179008,180427,181956,182920,184244,185650,187238,188410,189518,190843,192366,193908,195160,196666,198020,199596,201159,202537,204088,205743,207119,208668,210177,211632,213165,214781,216087,217273,218845,220308,221279,222668,223933,225059,226167,227459,229094,230460,232125,233747,235291,236379,237686,238737,240247,241636,242625,243746,245160,246632,248002,249666,251179,252494,253897,255215,256061,256741,257448,258172,258872,259571,260313,260964,261711,262345,263090,263726,264262,264913,265459,266481,267396,268335,269272,270526,271838,273247,274411,275440,276649,277503,278444,279561,280388,281604,283203,284808,286464,287935,288686,289680,291093,292588,294083,295666,297099,297673,298371,299979,301545,302781,303901,304809,305657,306597,307342,307864,308556,309436,310406,311337,312177,313139,314220,315797,317290,318692,320088,321475,322749,324177,325745,327190,328569,330111,331702,333216,334488,336069,337365,338953,340487,341953,343193,344484,345739,347146,348733,350341,351981,353555,355030,356577,357751,358941,360497,361961,363073,364591,366153,367636,369198,370731,372399,373908,375424,377023,378306,379894,381280,382454,383846,385319,386712,387691,388863,390201,391495,393046,394468,396035,397471,399040,400473,402024,403378,404837,406228,407494,408971,410618,411750,413096,414424,415585,416895,418145,419418,420843,422378,423853,425487,426926,428070,429600,431165,432767,434324,435809,437412,438907,440124,441429,442965,444606,446194,447573,449052,450335,451429,452950,453997,455470,457044,458538,459985,461439,462847,464045,465662,467202,468826,470311,471843,473391,474952,476178,477768,479363,480620,482096,483381,484588,485919,487046,488225,489839,491380,492885,494495,495973,497528,499e3,500578,501912,503547,505009,506572,508152,509422,510946,512244,513426,514770,516149,517768,519215,520545,522038,523338,524770,526292,527907,529390,530946,532457,533929,535142,536551,537770,539342,540834,542269,543839,545354,546880,548201,549762,551376,552904,554199,555391,556693,558022,559621,561135,562673,564177,565767,567297,568758,570306,571917,573387,574771,575870,577295,578397,579866,580911,581896,583161,584343,585605,586624,587737,588865,590141,591106,592313,593611,594729,595696,596839,598266,599215,600298,601629,602770,603772,604920,606294,607306,608263,609431,610805,611756,612873,614016,614940,615844,616706,617651,618514,619411,620294,621175,621966,622598,623786,625090,626310,627342,628378,629460,630600,631542,632575,633672,634573,635838,637165,638258,639617,640691,642059,643303,644593,645876,647095,648444,649247,650458,651629,652935,654367,655717,655742,655767,656035,657325,658518,659606,660808,662293,663592,664915,666190,667462,668828,669972,671184,672420,673492,674705,675844,676872,678245,679537,680906,682313,683602,684888,686002,687084,688208,689240,690372,691701,692791,693814,695e3,696157,697318,698421,699572,700655,701773,702879,703821,705113,706231,707401,708376,709513,710825,711882,713105,714185,715312,716643,718038,719233,720503,721732,722952,724080,725038,726341,727805,729050,730121,731381,732599,733423,734525,735807,736975,738059,739245,740403,741418,742417,743286,744301,745420,746480,747357,748285,749192,750190,750875,751728,752716,753712,754498,755338,756306,757276,758064,758967,759991,760668,761607,762470,763453,764131,765039,765945,766975,767677,768503,769461,770356,771163,772065,772894,773710,774590,775507,776474,777179,778118,779075,780514,781745,782916,784190,785437,786621,787799,789069,790444,791596,792851,794089,795538,796758,798053,799246,800434,801579,803007,804282,805514,806829,807944,809018,810337,811628,813006,814272,815513,816753,817976,819238,820539,821821,822914,824266,825653,826977,828170,829284,830523,831751,832864,834358,835559,836775,838028,839259,840494,841705,842942,844019,845371,846669,847745,849170,850476,851724,853047,854141,855618,856916,858176,859453,860691,861935,863073,864209,865302,866404,867609,868867,870094,871348,872570,873903,875197,876387,877612,878787,880004,881287,882609,883771,884915,886185,887442,888584,889656,890814,892105,893170,894162,895307,896336,897266,898381,899475,900622,901900,903201,903881,905098,906444,907754,909001,910234,911444,912600,913879,915076,916619,917625,918959,920234,921425,922791,923870,925180,926237,927663,928930,930180,931404,932678,933920,935202,936455,937674,938772,940272,941570,942826,943990,945209,946384,947613,948836,950243,951493,952700,953931,955174,956443,957601,958781,959904,961325,962530,963719,965118,966392,967626,968882,970090,971525,972917,974190,975428,976722,977996,979068,980299,981405,982408,983695,984872,986106,987229,988555,989835,991087,992261,993449,994651,995922,997205,998542,999681,1000862,1002141,1003373,1004560,1005606,1006711,1007904],sizes:[1297,948,781,823,890,1476,1608,1467,1509,1520,1139,1432,1226,1078,913,894,1113,1034,914,1262,1432,1358,1344,1288,1318,1291,1105,1222,1488,1521,1260,1198,1305,720,1068,1091,1015,900,1085,935,952,791,725,1029,1107,917,1129,1040,1126,972,1048,943,1119,686,1065,1109,972,1109,952,1107,1021,1036,1129,1107,1088,1151,1035,1183,1019,1119,1032,919,636,637,698,899,925,949,920,926,951,886,945,965,969,956,994,1135,1144,1119,1014,1117,1179,1159,1165,1110,1172,1160,1120,1155,1165,1196,1135,1153,1108,1156,1024,1090,1043,1136,1132,1201,1097,1100,1140,1195,1098,1e3,1329,1069,1050,1087,1053,1050,1114,1113,1111,1372,1394,1310,1605,1413,1683,1566,1515,1251,1213,1404,1086,1620,1627,1601,1529,1607,1495,1350,1554,1568,1470,1495,1504,1250,1379,1396,1596,1419,1529,964,1324,1406,1588,1172,1108,1325,1523,1542,1252,1506,1354,1576,1563,1378,1551,1655,1376,1549,1509,1455,1533,1616,1306,1186,1572,1463,971,1389,1265,1126,1108,1292,1635,1366,1665,1622,1544,1088,1307,1051,1510,1389,989,1121,1414,1472,1370,1664,1513,1315,1403,1318,846,680,707,724,700,699,742,651,747,634,745,636,536,651,546,1022,915,939,937,1254,1312,1409,1164,1029,1209,854,941,1117,827,1216,1599,1605,1656,1471,751,994,1413,1495,1495,1583,1433,574,698,1608,1566,1236,1120,908,848,940,745,522,692,880,970,931,840,962,1081,1577,1493,1402,1396,1387,1274,1428,1568,1445,1379,1542,1591,1514,1272,1581,1296,1588,1534,1466,1240,1291,1255,1407,1587,1608,1640,1574,1475,1547,1174,1190,1556,1464,1112,1518,1562,1483,1562,1533,1668,1509,1516,1599,1283,1588,1386,1174,1392,1473,1393,979,1172,1338,1294,1551,1422,1567,1436,1569,1433,1551,1354,1459,1391,1266,1477,1647,1132,1346,1328,1161,1310,1250,1273,1425,1535,1475,1634,1439,1144,1530,1565,1602,1557,1485,1603,1495,1217,1305,1536,1641,1588,1379,1479,1283,1094,1521,1047,1473,1574,1494,1447,1454,1408,1198,1617,1540,1624,1485,1532,1548,1561,1226,1590,1595,1257,1476,1285,1207,1331,1127,1179,1614,1541,1505,1610,1478,1555,1472,1578,1334,1635,1462,1563,1580,1270,1524,1298,1182,1344,1379,1619,1447,1330,1493,1300,1432,1522,1615,1483,1556,1511,1472,1213,1409,1219,1572,1492,1435,1570,1515,1526,1321,1561,1614,1528,1295,1192,1302,1329,1599,1514,1538,1504,1590,1530,1461,1548,1611,1470,1384,1099,1425,1102,1469,1045,985,1265,1182,1262,1019,1113,1128,1276,965,1207,1298,1118,967,1143,1427,949,1083,1331,1141,1002,1148,1374,1012,957,1168,1374,951,1117,1143,924,904,862,945,863,897,883,881,791,632,1188,1304,1220,1032,1036,1082,1140,942,1033,1097,901,1265,1327,1093,1359,1074,1368,1244,1290,1283,1219,1349,803,1211,1171,1306,1432,1350,25,25,268,1290,1193,1088,1202,1485,1299,1323,1275,1272,1366,1144,1212,1236,1072,1213,1139,1028,1373,1292,1369,1407,1289,1286,1114,1082,1124,1032,1132,1329,1090,1023,1186,1157,1161,1103,1151,1083,1118,1106,942,1292,1118,1170,975,1137,1312,1057,1223,1080,1127,1331,1395,1195,1270,1229,1220,1128,958,1303,1464,1245,1071,1260,1218,824,1102,1282,1168,1084,1186,1158,1015,999,869,1015,1119,1060,877,928,907,998,685,853,988,996,786,840,968,970,788,903,1024,677,939,863,983,678,908,906,1030,702,826,958,895,807,902,829,816,880,917,967,705,939,957,1439,1231,1171,1274,1247,1184,1178,1270,1375,1152,1255,1238,1449,1220,1295,1193,1188,1145,1428,1275,1232,1315,1115,1074,1319,1291,1378,1266,1241,1240,1223,1262,1301,1282,1093,1352,1387,1324,1193,1114,1239,1228,1113,1494,1201,1216,1253,1231,1235,1211,1237,1077,1352,1298,1076,1425,1306,1248,1323,1094,1477,1298,1260,1277,1238,1244,1138,1136,1093,1102,1205,1258,1227,1254,1222,1333,1294,1190,1225,1175,1217,1283,1322,1162,1144,1270,1257,1142,1072,1158,1291,1065,992,1145,1029,930,1115,1094,1147,1278,1301,680,1217,1346,1310,1247,1233,1210,1156,1279,1197,1543,1006,1334,1275,1191,1366,1079,1310,1057,1426,1267,1250,1224,1274,1242,1282,1253,1219,1098,1500,1298,1256,1164,1219,1175,1229,1223,1407,1250,1207,1231,1243,1269,1158,1180,1123,1421,1205,1189,1399,1274,1234,1256,1208,1435,1392,1273,1238,1294,1274,1072,1231,1106,1003,1287,1177,1234,1123,1326,1280,1252,1174,1188,1202,1271,1283,1337,1139,1181,1279,1232,1187,1046,1105,1193,208],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_python-sat.data")}Module["addRunDependency"]("datafile_python-sat.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/pycard.so",start:0,end:63994,audio:0},{filename:"/lib/python3.8/site-packages/pysolvers.so",start:63994,end:1074795,audio:0},{filename:"/lib/python3.8/site-packages/pysat/__init__.py",start:1074795,end:1075448,audio:0},{filename:"/lib/python3.8/site-packages/pysat/_fileio.py",start:1075448,end:1081262,audio:0},{filename:"/lib/python3.8/site-packages/pysat/_utils.py",start:1081262,end:1082602,audio:0},{filename:"/lib/python3.8/site-packages/pysat/card.py",start:1082602,end:1111015,audio:0},{filename:"/lib/python3.8/site-packages/pysat/formula.py",start:1111015,end:1178358,audio:0},{filename:"/lib/python3.8/site-packages/pysat/pb.py",start:1178358,end:1193433,audio:0},{filename:"/lib/python3.8/site-packages/pysat/solvers.py",start:1193433,end:1308605,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/__init__.py",start:1308605,end:1308605,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/fm.py",start:1308605,end:1326378,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/genhard.py",start:1326378,end:1345368,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/hitman.py",start:1345368,end:1358764,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/hornify.py",start:1358764,end:1361344,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/lbx.py",start:1361344,end:1381762,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/lsu.py",start:1381762,end:1397024,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/mcsls.py",start:1397024,end:1416522,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/models.py",start:1416522,end:1421809,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/musx.py",start:1421809,end:1432329,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/rc2.py",start:1432329,end:1496037,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/sudoku.py",start:1496037,end:1510908,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/usage.py",start:1510908,end:1513091,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/PKG-INFO",start:1513091,end:1514368,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/SOURCES.txt",start:1514368,end:1518391,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/dependency_links.txt",start:1518391,end:1518392,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/requires.txt",start:1518392,end:1518449,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/top_level.txt",start:1518449,end:1518472,audio:0},{filename:"/bin/fm.py",start:1518472,end:1536248,audio:0},{filename:"/bin/genhard.py",start:1536248,end:1555241,audio:0},{filename:"/bin/lbx.py",start:1555241,end:1575662,audio:0},{filename:"/bin/lsu.py",start:1575662,end:1590927,audio:0},{filename:"/bin/mcsls.py",start:1590927,end:1610428,audio:0},{filename:"/bin/models.py",start:1610428,end:1615718,audio:0},{filename:"/bin/musx.py",start:1615718,end:1626241,audio:0},{filename:"/bin/rc2.py",start:1626241,end:1689952,audio:0}],remote_package_size:1012208,package_uuid:"8a5884e1-c97e-445c-a2e8-453d757f3a4d"})})();