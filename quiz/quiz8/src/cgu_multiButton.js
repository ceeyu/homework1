// import Button from '@material-ui/core/Button'
const changeText=(event)=>{
    console.log(event.target)
    // if(!event.target.innerText.includes('被點了'))       
         event.target.innerText = event.target.innerText + "被點了"
    
   }
   const multiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i)
    output.push(<button  variant="contained" color="primary" onClick={changeText}>第{i}個按鍵</button>)
    return output;
   }

export default multiButton;//再回傳回去(default在一個js只能回傳一次)