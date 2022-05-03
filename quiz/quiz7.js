// fetch("quiz7.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));

// console.log(data);
// var dataUrl = 'https://wic.heo.taipei/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D'; 
// var data = $.getJSON(dataUrl); 
var stationno=[ "C0AD1"  , "C0AD0","C0AD4", "318", "01A17"];
var stationname=["八里","三芝","土城","大安福州山","坪林"];
var stationtime=["2022年04月27日16點00分","2022年04月27日16點00分","2022年04月27日16點00分", "2022年04月27日16點02分","2019年11月13日01點40分"];
var rain=["0","0","0","0","0"]; 
// $(document).ready(function(){

// }
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


let htmlCode="";
for(let i=0;i<5;i++)
    {
        // htmlCode+="<h2>地點</h2>"
        htmlCode+="<h2>";
        htmlCode+= stationname[i];
        htmlCode+="</h2>";
        htmlCode+="<h3>";
        htmlCode+=stationtime[i];
        htmlCode+="</h3>";

        htmlCode+="<h3>即時雨量";
        htmlCode+=rain[i];
        htmlCode+="</h3>";
    }
$("#contain").html(htmlCode);


