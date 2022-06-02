import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//<div>  <div/>
//<div/>
//<br/>
ReactDOM.render( //進入點
 
   <React.StrictMode>
    <App /> 
    {/* <App></App> */}
  </React.StrictMode>,
  document.getElementById('root') //div的root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
