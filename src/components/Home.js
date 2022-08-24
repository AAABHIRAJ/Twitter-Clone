import React, { useEffect } from 'react';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widget from './Widget';
import "./Home.css";
import { useDispatch, useSelector } from 'react-redux';
import {  login, selectUserEmail } from '../features/userSlice';
import Login from './Login';
import { getAuth,  onAuthStateChanged  } from "firebase/auth";


function Home() {
    
    const dispatch = useDispatch();
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, ((user) => {
            if (user) {
                dispatch(login({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
            }
        }))
    }, [])
    
    
    const userEmail = useSelector(selectUserEmail);
    console.log("User from aaaaaaaaaaaaaaa", userEmail);

  return (
      <div className='home'>
          {!userEmail ? <Login /> :
         <>
            <Sidebar />
            <Feed />
            <Widget />
          </>}
       
    </div>
  )
}

export default Home;
