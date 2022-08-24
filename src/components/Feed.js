import React, { useEffect, useState } from 'react';
import "./Feed.css";
import Post from './Post';
import TweetBox from './TweetBox';
import { collection, getDocs,orderBy, query } from "firebase/firestore";
import db from "../firebase";
import FlipMove from 'react-flip-move';


function Feed() {
 

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postref = collection(db, "posts");
    const orderedRef = query(postref, orderBy("timestamp", "desc"));

    getDocs(orderedRef)
      .then((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return [doc.data(), doc.id];
          })
        )
    })

  }, [posts]);

  console.log("PostData>>>>", posts);

  return (
    <div className='feed'>
      <h1 className='feed__heading'>Home</h1>
      <TweetBox />

      <FlipMove>
        {posts.map((post) => {
          return <Post
                    key={post[1]}
                    displayName={post[0].displayName.name}
                    userName={post[0].userName.email}
                    verified={post[0].verified}
                    details={post[0].details.tweetMessage}
                    postImg={post[0].postImg.tweetImg}
                  />
        })}
      </FlipMove> 
    </div>
  )
}

export default Feed;
