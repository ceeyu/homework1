
var dataUrl = 'https://wic.heo.taipei/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D'; 
// var data = $.getJSON(dataUrl); 
var stationno=[ "C0AD1"  , "C0AD0","C0AD4", "318", "01A17"];
var stationname=["八里","三芝","土城","大安福州山","坪林"];
var stationtime=["202204271600","202204271600","202204271600", "202204271602","201911130140"];
var rain=["0","0","0","0","0"];
// var data ={[
//     {
//         "stationNo": "C0AD1",
//         "stationName": "八里",
//         "recTime": "202204271600",
//         "rain": 0
//     },
//     {
//         "stationNo": "C0AD0",
//         "stationName": "三芝",
//         "recTime": "202204271600",
//         "rain": 0
//     },
//     {
//         "stationNo": "C0AD4",
//         "stationName": "土城",
//         "recTime": "202204271600",
//         "rain": 0
//     },
//     {
//         "stationNo": "318",
//         "stationName": "大安福州山",
//         "recTime": "202204271602",
//         "rain": 0
//     },
//     {
//         "stationNo": "01A17",
//         "stationName": "坪林",
//         "recTime": "201911130140",
//         "rain": 0
//     } ] };


$("#contain").html(htmlCode);
htmlCode="";
for(let i=1;i<=21;i++)
    {
        htmlCode+='<h1=';
        htmlCode+=i;
        htmlCode+=">";
        htmlCode+=stationno[i];
        htmlCode+="</h1>";
    }

console.log(stationno[0]);

console.log(stationname[0])


