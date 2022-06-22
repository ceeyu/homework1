import React from "react";
// import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
// import React,{ useState,useEffect} from 'react';
import './App.css';
import SignIn from './pagelog.js';
import Post from './Post';
import { db,auth } from './firebase'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import ImageUpload from './ImageUpload';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import SignInSide from './pagelog';
// import {Link} from 'react-router-dom';
class Header2 extends React.Component {
    style1 = {
		padding: '5px',
        // border: 'none',
        // border:'1px',
        borderRadius : '5px',
        margin: '12px',
	}; 
	style2 = {
		
        position: 'fixed',
        bottom:  '200px',
        right: '40%',
        width: '250px',
        height: '300px', 
        background: 'rgb(255, 255, 255)',
        border: '1px solid #333',
        padding: '12px',
        textAlign: 'center',
        borderRadius : '5px',
        boxShadow: '0 0 10px rgba(0,0,0,1.00)'
	};		
	style3 = {
		backgroundColor :'rgb(41, 36, 33)',
	 };		
  
     
  render() {
    // const Navigate=useNavigate();
    // function fuckcj() {
    //     useNavigate('/about');
    // }
    return (
       
      
   
        
        <div style={this.style3} >
       
         
        

		<form  >
        <center>
             <img 
                className="app__headerImage"
                   alt=""
                   width="20%"
                />
        </center>
			<div style={this.style2}>
            <h1>hello</h1>
      
      <Post username="ceeyu" caption="Anya Forgert: Wakuwaku" imgUrl="https://i.ytimg.com/vi/r664qGPtkeo/maxresdefault.jpg"/>
      <Post  username="venassa" caption="Anya Forger: Ho "imgUrl="https://www.peekme.cc/upload/fr/wKx/e4f05c6e581540bdb34b69b745d46c3e.jpg"/>
      <Post  username="ray" caption="Anya Forgert: zzZ" imgUrl="https://inews.gtimg.com/newsapp_bt/0/14927661189/1000"/>

            <h1>login</h1>
            <label >
                帳號
                <input type="text" name="name" style={this.style1} />
            </label>
                <div>
                <label>
                    密碼
                </label>
                <input type="password"  style={this.style1} />
                </div>
                <div>
            <input type="submit" value="hihi" />
            {/* <Button onClick={fuckcj}>text</Button> */}
            <Button><Link to={'/about'}>主頁面</Link></Button>
                </div>
			</div>
		</form>
        </div>
    
    );
  }
}

export default Header2;