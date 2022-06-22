import React,{ useState,useEffect} from 'react';
import './App.css';
import SignIn from './pagelog.js';
import Post from './Post';
import { db,auth } from './firebase'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid, Input } from '@mui/material';
import ImageUpload from './ImageUpload';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import {Link} from 'react-router-dom';


// import { BrowserRouter,Route,Routes,Router,useRoutes,Link,Outlet } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const fi={
     position:'fixed',
     top:'90%',
     left:'0px',
     width: 600,
     height : 200,
     // margin:"px",
     padding:"20px",
     fontSize:"30px",
     background:"#d3d3d3"
}

// function getModalStyle() {

//   const top = 50;
//   const left = 50;
//   return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//   };
// }
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));


function Ig2() {
  // const [modalStyle] = useState(getModalStyle);
  // const classes = useStyles();
  const [posts,setPosts] = useState([]);
  const [open,setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username,setUsername] = useState(''); 
  const [email,setEmail] = useState(''); 
  const [password,setPassword] = useState('');
  const [user,setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=> { 
      if(authUser) {
        //user logged in
        console.log(authUser); //輸出是誰
        setUser(authUser);


      } else {
        // user logged out
        setUser(null);
      }


    })

    return () =>{
      // perform some cleanup actions
      unsubscribe();
    }
  },[user,username]);
 

  useEffect(() => {
    // this is where the code run
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      //every time a new post is added, this code fire
      setPosts(snapshot.docs.map(doc => ({
        id:doc.id, 
        post: doc.data()
      })));
      // 類似for迴圈
    })
  }, []);
  // []:run完reset

    const signUp = (event) =>{
      event.preventDefault();

      auth
      .createUserWithEmailAndPassword(email,password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch((error) =>alert(error.message))

      setOpen(false);
    }

    const signIn = (event) => {
      event.preventDefault();

      auth
        .signInWithEmailAndPassword(email,password)
        .catch((error) =>alert(error.message))
      setOpenSignIn(false);

    }


  return (
    
    <div className="app">
      
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
           
        />
      
      </div>

      
     
      {
        posts.map(({id,post}) => (
          <Post key={id} username={post.username} caption={post.caption} imgUrl={post.imgUrl} comment={post.comments}/>
        ))
      }

     
      <Post  username="Xian" caption="my final project" imgUrl="https://p9.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/268e89da781c4d2baebcf1f1d35c7ed8?from=pc"/>
      <Post  username="Hsien" caption="Also me beside lots of exams" imgUrl="https://i.ytimg.com/vi/VFGB3BMN8CY/sddefault.jpg"/>
      <Post  username="Shao" caption="It's all the life like" imgUrl="https://img.youxi369.com/article/contents/2022/05/16/small_2022051615551829.png"/>
      <Post username="ceeyu" caption="Anya Forgert: Wakuwaku" imgUrl="https://i.ytimg.com/vi/r664qGPtkeo/maxresdefault.jpg"/>
      <Post  username="venassa" caption="Anya Forger: Ho "imgUrl="https://www.peekme.cc/upload/fr/wKx/e4f05c6e581540bdb34b69b745d46c3e.jpg"/>
      <Post  username="Yuu" caption="Anya Forgert: zzZ" imgUrl="https://inews.gtimg.com/newsapp_bt/0/14927661189/1000"/>
      <div style={fi}> <Link to={"/"}>個人頁面</Link>  <Link to={"/home"}>home</Link></div>
    </div>
    
  );
} 
export default Ig2;

// export default App;
