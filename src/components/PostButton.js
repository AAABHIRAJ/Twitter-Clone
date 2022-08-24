import React from 'react';
import "./PostButton.css";

function PostButton({Icon, text}) {
  return (
    <div className='postbutton'>
          <Icon  className="postbutton__icon"/>
          <span>{ text }</span>
    </div>
  )
}

export default PostButton;
