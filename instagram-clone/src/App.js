import React,{ useState,useEffect} from 'react';
import './App.css';

// import SignIn from './pagelog.js';
// import Post from './Post';
// import { db,auth } from './firebase'
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import { Input } from '@mui/material';
// import ImageUpload from './ImageUpload';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import Sign from './pagelog';
import Ig from './ig';
import Ig2 from './ig2';
import Header from './login';
import Sign from './pagelog';
import Header2 from './login2';

// import { BrowserRouter,Route,Routes,Router,useRoutes,Link,Outlet } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

 function Approuter () {
  return (
  <Routes>
  <Route path="/" element={< Header/>}/>
    <Route path='/about' element={<Ig/>} />
    <Route path='/home' element={<Ig2/>} />
    {/* <Route path></Route> */}
  </Routes>
  );
};
export default Approuter;

// export default App;
