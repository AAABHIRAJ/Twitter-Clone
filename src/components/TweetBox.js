import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "./TweetBox.css";
import db from "../firebase";
import { collection, addDoc,serverTimestamp  } from "firebase/firestore";
import { selectUserEmail, selectUserName, selectUserPhoto } from '../features/userSlice';
import { useSelector } from "react-redux";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImg, setTweetImg] = useState("");
  const email = useSelector(selectUserEmail);
  const name = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);
  
  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: {name},
      userName: {email},
      verified: "true",
      details: { tweetMessage },
      postImg: { tweetImg },
      timestamp: serverTimestamp(),

    });

    setTweetImg("");
    setTweetMessage("");
  }

  return (
      <div className='tweetbox'>
         <Avatar className='tweetbox__avatar' src={photo} />
          <form>
            <div>
              <div className='tweetbox__input'>
            <input
              className='tweetbox__inputText'
              value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
              placeholder="What's happening?"
              type="text"
              
           />
            <input
              value={tweetImg}
              onChange={(e) => setTweetImg(e.target.value)}
              className='tweetbox__inputImage'
              placeholder='Enter Image Url here (Optional)'
              type="text"
            />              
                </div>
            </div>
                
          <button onClick={sendTweet} type='submit'>Tweet</button>
        </form>
         


      </div>
  )
}

export default TweetBox
