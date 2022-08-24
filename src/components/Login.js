import React from 'react';
import "./Login.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from '../features/userSlice';
// import { useNavigate } from 'react-router-dom';

function Login() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((authUser) => {
                const user = authUser.user;
                dispatch(login({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))

                console.log(authUser);
            })
            .catch((err) => {
            alert(err.message);
            })
        
        // navigate("/home");
    }

   

  return (
    <div className='login'>
        <div className='login__image'>
              <img alt="" src='https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png' />
              <TwitterIcon  className='login__imageIcon'/>
          </div>
          <div className='login__body'>
              <TwitterIcon className='login__bodyIcon' />
              <h1> Happening now </h1>
              <h4>Join Twitter today.</h4>
              <div onClick={googleLogin} className='login__button'>
                <span className='login__bodyButton'>Sign in with Google</span>
                <img alt="" className='google__icon' src='https://tantech.ie/wp-content/uploads/2022/03/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png' />
              </div>
          </div>
    </div>
  )
}

export default Login;
