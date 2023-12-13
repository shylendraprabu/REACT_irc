import React, { useState } from 'react';
import glogo from './assets/images/google.png';
import flogo from './assets/images/facebook.webp';
import ilogo from './assets/images/Instagram.png';
import Lottie from 'react-lottie';
import Music from './assets/images/Animation - 1702449603444.json';
import './assets/css/Login.css'; 

const Login = () => {
  const [isLogin, setLogin] = useState(true);

  const toggleForm = () => {
    setLogin(!isLogin);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Music,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <div className="hero">
      <Lottie options={defaultOptions} height={50} width={50}/>
      <div className="form-box">
        <h3>Login to Explore World</h3>
        <div className="button-box">
          <div id="btn" style={{left:isLogin ? '0' : '110px'}}></div>
          <button type="button" className={`toggle-btn ${isLogin ? 'active':''}`} onClick={toggleForm}>Log In</button>
          <button type="button" className={`toggle-btn ${isLogin ? 'active':''}`} onClick={toggleForm}>Sign Up</button>
        </div>
        <div className='social-icons'>
          <button type="button" className='social-btn'><img src={glogo} className="social-icons img" alt=''/></button>
          <button type="button" className='social-btn'><img src={flogo} className="social-icons img" alt=''/></button>
          <button type="button" className='social-btn'><img src={ilogo} className="social-icons img" alt=''/></button>
          <center><bold>Or</bold></center>
          </div>   
        {isLogin ? (
          <form className="input-group">
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="password" className="input-field" placeholder="Password" required />
            <input type="checkbox" className="chech-box" /><span><a href="."><b style={{ textDecoration: 'none' }}>Forget Password</b></a></span>
            <button type="submit" className="submit-btn" ><a href="." style={{ textDecoration: 'none' }}>Log In</a></button>
          </form>
        ) : (
          <form className="input-group">
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="password" className="input-field" placeholder="Enter Password" required />
            <input type="password" className="input-field" placeholder="Conform Password" required />
            <input type="checkbox" className="chech-box" /><span><a href='.'><b>I agree to terms & conditions</b></a></span>
            <button type="submit" className="submit-btn"><a href=".">Sign Up</a></button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
