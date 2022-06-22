import React from 'react';
//可以打rfce 得到基本樣態
import './Post.css';
import Avatar from '@mui/material/Avatar';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import SvgIcon from '@mui/material/SvgIcon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

// function FavoriteBorder(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

// const HomeIcon = createSvgIcon(
//   <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
//   'Home',
// );
const click=(event)=>{
  console.log(event.target)
       event.target.innerHTML= 
      //  <IconButton color="secondary" >
       <FavoriteIcon fontSize='large' color="primary" />
    //  </IconButton>
} 
const click2=(event)=>{
  console.log(event.target)
       event.target.innerHTML= 
      //  <IconButton color="secondary" >
       <FavoriteBorderIcon fontSize='large' color="primary" />
    //  </IconButton>
} 



function Post({ username ,caption, imgUrl}) {
  return (
    <div className="post">
      <div className="post__header">
          <Avatar
          className="post__avatar"
          alt='RafehQazi'
          src= "./anya.png"
          />

          <h3>{username}</h3>
          {/* header -> avatar + username */}
      </div>
     
      

     <img class="post__image" src={imgUrl} alt=""></img>
      {/* image */}
     
      {/* <FavoriteBorderIcon className="love" type="button"/>  */}
        <div>
        <IconButton color="primary" onClick={click} >
          <FavoriteBorderIcon fontSize='large' />
        </IconButton>
        <IconButton color="primary" onClick={click2} >
          <FavoriteIcon fontSize='large' />
        </IconButton>
        
        </div>

        

        
      {/* <img class="love" src ="https://www.nicepng.com/png/detail/170-1704470_like-love-heart-like-love-heart-instagram-heart.png" alt="" style="width:50px"></img> */}
 
      <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
      {/* username + caption */}
      
      <h4 className='post__comment'> <strong>{username}</strong>  <span className="post__comment">Meeee Toooooo</span></h4>
    </div>
  )
}

export default Post
