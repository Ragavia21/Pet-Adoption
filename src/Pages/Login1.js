import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login1 = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Store login status in localStorage when the user logs in
    localStorage.setItem('isLoggedIn', 'true');
    
    // Navigate to home page
    navigate('/');
  };

  return (
    <div>
      <div className="wrapper register">
        <a href="">
          <span className="icon-close">
            <ion-icon name="close-outline"></ion-icon>
          </span>
        </a>

        <h2>Login</h2>

        <div className="input-box">
          <span className="icon-close"><i className='bx bx-user'></i></span>
          <input type="text" required />
          <label>Username</label>
        </div>

        <div className="input-box">
          <span className="icon-close">
            <ion-icon name="lock-closed-outline"></ion-icon>
          </span>
          <input type="password" required />
          <label>Password</label>
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" /> Remember me</label>
        </div>

        <button type="submit" className="btn" onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default Login1;
