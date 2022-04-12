var s_time;
var d_time;
var s=0;
var count=100; 
var s;
//  $(.) $(#) $()
$(document).ready(function(){
    // 一開始網頁執行
    image_list = $('img')
    // console.log(image_list); 
        s_time=new Date().getTime();
        // 取得現在的時間
        createImg();
        document.addEventListener('keyup',insert);
        document.addEventListener('keyup',deleteImg);
        interval=window.setInterval(end,500);
        // 每0.5秒偵測
});

var sizeList=[];
var size;
var deleteCounter=0;
function move(){
    $(".trail").find("img").animate({left:"97%"},8000);
    // 動畫移動時間
}
function deleteImg(lokey){
    // lokey是自訂義的
    let del_node = document.createElement("img");
    del_node.src = "word/"+(lokey.keyCode-65)+".jpg";
    // user要按的node
    for (var x =0 ; x<=5 ; x++){
        if($(".trail")[x].children[0])
        // 判斷賽到有沒有圖片，有圖片=true
            var last = $(".trail")[x].children[0];
            // 自訂義變數抓最後的位置
        else
            last=0;
            // 沒有圖片的時候
        if(sizeList[sizeList.length-1]==0)
            sizeList.pop();
        if (last.src == del_node.src){
            // 判斷最後一個字是不是user打得
            let maxValue=0;
            let maxIndex=0;
            
            for(let i=0;i<=5;i++)
            {
                if($(".trail")[i].children[0]) 
                {   
                if(parseInt($(".trail")[i].children[0].offsetLeft)>maxValue)
                // 判斷位置
                    {
                        maxValue=parseInt($(".trail")[i].children[0].offsetLeft);
                        maxIndex=i;
                        // 找到的話把index=賽道位置
                    }
                    // console.log("tsexs");
                }
                console.log(";hooh",parseInt(maxValue));
                // 測試用
            }
            console.log("maxindex",parseInt(maxIndex));
            console.log("x",parseInt(x));
            if(x==maxIndex)
            {
            $(".trail")[x].removeChild(last);
            // 內建移除child的方法
            sizeList[sizeList.length-1]--;
            break;
            }
            continue;
        }
    }
    console.log(last);
}
var trigger=true;
function insert()
{
    if(trigger)
    interval2=window.setInterval(createImg, 677);
    trigger=false;
}
function createImg(lokey){ 
    let num=[1,2,3,4,5,6] ;
    // 宣告array 
    // console.log(total_s);
    let cur=[1,2,3,4,5,6];
    // 6個賽道代表六個random
    size=Math.random()*6;
    // 產生0-6個亂數
    sizeList.unshift(size);
        for (let i=0 ; i<=size ; i++){
                    num[i] = Math.floor(Math.random()*26);
        }
        // for(let i=0;i<size;i++)
        // {
        //     if(num[i]==cur[0]||num[i]==cur[1]||num[i]==cur[2]||num[i]==cur[3]||num[i]==cur[4]||num[i]==cur[5])
        //     {
                
        //         num[i] = Math.floor(num[i]+7/2);
        //         if(num[i]>=25)
        //             num[i]=10;
        //     }
        // }
        cur=num;
        for (let x = 0 ; x <=size ; x++){
            let newNode =  document.createElement("img"); 
            newNode.src="word/"+num[x]+".jpg";
            // 取對應的src
            $(".trail")[x].append(newNode);
            // append是加到array的最後
        }
        count--;
    // let cur=num;
    move();
}
function end(s){
        for(var y = 0 ; y <= 5 ; y++){
            if($(".trail")[y].children[0]){
                // children代表img，children是html自定義的
            var pos = $(".trail")[y].children[0];
            // 當children對應到最後的時候(arr[0]的位置)
            if(pos.style.left >= "97%" ){
                // 回傳一個string
                var r=confirm("是否要再玩一局");
                if (r==true){
                 window.location.reload();//F5=重新整理
                }
                else{
                    window.close();
                    // 關掉頁面
                }
                clearInterval(interval2);//判斷creatImg
                clearInterval(interval);//判斷是否輸
                break;
            }
        } 
    }
}