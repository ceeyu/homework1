function change(){
     var header = document.getElementById("num1");
     //getElementsByTagName item(0)是表示array數值(不一定只有一個)
     
     header.innerHTML="CSIE@CGU";
     // innerHTML或innerText都可以
     var para = document.getElementById("num2"); 
     para.innerHTML= "怎麼這麼棒!!.";


    
}


function myFunction() { 
     var btn = document.createElement("BUTTON"); 
     btn.innerHTML = "CLICK ME”"; 
     // btn.setAttribute("id", "btn"); 
     
   }
   document.body.appendChild(btn).addEventListener("click", change);

