function change(){
     var header = document.getElementById("num1");
     //getElementsByTagName item(0)是表示array數值(不一定只有一個)
     header.innerHTML="CSIE@CGU";

     // innerHTML或innerText都可以
     var para = document.getElementById("num2");   
     para.innerHTML= "怎麼這麼棒!!.";
     var btn = document.createElement("BUTTON"); 
     btn.innerHTML = "Try it";
     btn.setAttribute("id", "btn"); 
     document.body.appendChild(btn); 
}     

     // function myFunction() {

     //      {
     //           var btn = document.createElement("BUTTON"); 
     //           btn.innerHTML = "CLICK ME ”;
     //           btn.setAttribute("id", "btn"); 
     //           document.body.appendChild(btn);

     //           // var btn = document.createElement("BUTTON");
     //           // // document是js定義的class，後面是函式(面試不要這樣說)
     //           // btn.innerHTML = "Try it";
     //           // // document.createElement("BUTTON").innerHTML是給予他一段文字，也是一個函式
     //           // btn.setAttribute("id", "btn");
     //           // document.appendChild(btn).addEventListener("click", change);
     //           // // java是click，html是onclick
     //           // // 前面是新增一個button的小孩，後面是觸發事件，change函式沒有括號
     //      }
     // }
    



