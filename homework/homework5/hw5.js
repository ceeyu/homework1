var dataUrl = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=30&%24format=JSON";
var stationdata=["台北車站","三重站","新北產業園區站","新莊副都心站","長庚醫院站","體育大學站","泰山貴和站","泰山站","林口站","山鼻站","坑口站","機場第一航廈站","橫山站","大園站","機場旅館站","機場第二航廈站","領航站","高鐵桃園站","桃園體育園區站","興南站","環北站"];
// var data = $.getJSON(dataUrl);
var priceUrl = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?$format=JSON";

var counter=0;
var htmlCode2="";
$.getJSON(dataUrl, function() {
    format: "json"
}).done(function(data) {
    console.log(data[0].TravelTimes);
    // for(let i=0;i<21;i++)
    // {
    //     if()//向右
    //     {
    //     htmlCode2+='<div class="row"><div class="col-3"><div class="station start" id="stop1">'
    //     htmlCode2+=stationdata[counter];
    //     htmlCode2+='</div><span class="verticalLine" id='
    //     htmlCode2+=i;
    //     htmlCode2+='>&#129047;300秒</span></div>';
    //     htmlCode2+='</div>';
    //     }
    //     else()
    //     {

    //     }
    // }
    // $('.start').html(htmlCode2);
    var idno = 0;
    var index = 0;
    for (var i = 0; i < 20; i++) {
        idno = i + 1;
        let m=0;
        let htmlCode='';
        let s=0;
        m=data[0].TravelTimes[index].RunTime/60;
        s=data[0].TravelTimes[index].RunTime%60;
        if(idno%4==0){
            htmlCode+=m +'分'+ s + "秒";
            htmlCode+="<div>";
            htmlCode+="<i class='bi bi-arrow-down'></i>";
            htmlCode+="</div>";
        }
        else if(idno<=7&&idno>=5 ||idno>=13&& idno<=15)
        {
            htmlCode+='<i class="bi bi-arrow-left"></i>';
            htmlCode+=m +'分'+ s + "秒";
        }
        else
        {
        htmlCode+=m +'分'+ s + "秒";
       
        htmlCode+="<i class='bi bi-arrow-right fa-8x;'>";
        htmlCode+="</i>";
        }
        $("#" + idno).html(htmlCode);
        index = index + (20 - i);
    }
});$.getJSON(priceUrl, function() {
    format: "json"
}).done(function(price) {
    let htmlCode3="";
    for(let i=1;i<=21;i++)
    {
        htmlCode3+='<option value=';
        htmlCode3+=i;
        htmlCode3+=">";
        htmlCode3+=stationdata[i-1];
        htmlCode3+="</option>";
    }
    $("#start").html(htmlCode3);
    htmlCode3="";
    for(let i=1;i<=21;i++)
    {
        htmlCode3+='<option value=';
        htmlCode3+=i;
        htmlCode3+=">";
        htmlCode3+=stationdata[i-1];
        htmlCode3+="</option>";
    }
    $("#end").html(htmlCode3);
    $("#send").click(function() {
        var start_S = $("#start").val();
        var end_S = $("#end").val();
        var diff = Math.abs(start_S - end_S);
        if (diff == 1) {
            $("#price").html("價格： " + price[0].Fares[0].Price + "元");
        }
        if (diff > 1 && diff <= 4) {
            $("#price").html("價格： " + price[3].Fares[0].Price + "元");
        }
        if (diff == 5) {
            $("#price").html("價格： " + price[4].Fares[0].Price + "元");
        }
        if (diff > 5 && diff <= 8) {
            $("#price").html("價格： " + price[7].Fares[0].Price + "元");
        }
        if (diff == 9) {
            $("#price").html("價格： " + price[8].Fares[0].Price + "元");
        }
        if (diff == 10) {
            $("#price").html("價格： " + price[9].Fares[0].Price + "元");
        }
        if (diff > 10) {
            $("#price").html("價格： " + price[12].Fares[0].Price + "元");
        }
    });
});