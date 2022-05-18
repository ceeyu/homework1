import Button from '@material-ui/core/Button'
// import CounterButton from './CounterButton'
const changeText=(event)=>{
    console.log(event.target)
//     // if(!event.target.innerText.includes('被點了'))       
         event.target.innerText = event.target.innerText + "被點了"
    
   }


   const multiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i)
    output.push(<Button variant="contained" color="primary" onClick={ changeText }>第{i}個按鍵</Button>)

    // output.push(<Button  variant="contained" color="primary" onClick={changeText}>第{i}個按鍵</Button>)
    // output.push(<CounterButton >第{i}個按鍵</CounterButton>)
    return output;
   }

export default multiButton;//再回傳回去(default在一個js只能回傳一次)

