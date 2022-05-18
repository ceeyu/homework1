// // import logo from './logo.svg';
// import './App.css';
// import MultiButton from './cgu_multiButton' //自己的function  class
// import HelloCgu from './HelloCgu'

// // import CounterButton from './CounterButton'
// //  App.js -- > main
// // called HelloCgu()
// // called mutiButton() 
// // called class function
// function App() {
//   return (
  
//   <div className="App">
//   {HelloCgu()} 
//   {/* 呼叫函式 變成html格式*/}
//   {/* { CounterButton()} */}
//   { MultiButton(10)}
  
//   </div>
//   );
//  }
//  export default App;
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }


// import logo from './logo.svg';

import './App.css';
// import Header from './login';
import SignIn from './pagelog.js';

// import MultiButton from './cgu_multiButton' //自己的function  class
// import HelloCgu from './HelloCgu'
// import CounterButton from './CounterButton'
//  App.js -- > main
// called HelloCgu()
// called mutiButton() 
// called class function
function App() {
  return (
    <div className="App">
    {SignIn()}
   </div>
   );

  // <div className="App">
  //  {<Header></Header>}
 
  // </div>
  // );
 }
 export default App;


