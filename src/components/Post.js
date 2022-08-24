import { Avatar } from '@mui/material';
import React, {forwardRef} from 'react';
import "./Post.css";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import PostButton from './PostButton';
import { useSelector } from 'react-redux';
import { selectUserName, selectUserPhoto } from '../features/userSlice';

const Post = forwardRef(({displayName, userName, verified, details, postImg}, ref)  => {
  const photo = useSelector(selectUserPhoto);
  return (

    <div className='post' ref={ref}>
      <div className='post__avatar'>
        <Avatar src={photo}
         />
      </div>
      <div className='post__body'>
        <div className='post__heading'>
            <h3>{displayName}</h3>
            {verified && <VerifiedIcon className='verified__icon' />}
            <span>@{userName}</span>
        </div>
        <div className='post__details'>
            <span>{details }</span>
            <img className='post__img' src={postImg} />
        </div>
        
        <div className='post__buttons'>
                  <PostButton Icon={ ChatBubbleOutlineOutlinedIcon } text="46" />
                  <PostButton Icon={RepeatOutlinedIcon } text="558" />
                  <PostButton Icon={FavoriteBorderOutlinedIcon} text="7869" />
                  <PostButton Icon={FileUploadOutlinedIcon }  />
                  
                  
                  
                  
                  
        </div>
      </div>
    </div>
  )
})

export default Post
