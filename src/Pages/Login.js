// Login.jsx
import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/');
  };

  const handleReadMoreClick1 = () => {
    navigate('/Login1');
  };
  return (
    <div>
      <div class="wrapper register">
    <a href="index.html"><span class="icon-close"><ion-icon name="close-outline"></ion-icon></span></a>

<h2>Registration</h2>

<div class="input-box">
    <span class="icon-close"><i class='bx bx-user'></i></span>
    <input type="text" required/>
    <label>Username</label>
</div>

<div class="input-box">
    <span class="icon-close"><i class='bx bx-envelope'></i></span>
    <input type="email" required/>
    <label>Email</label>
</div>
<div class="input-box">
    <span class="icon-close"><ion-icon name="lock-closed-outline"></ion-icon></span>
    <input type="password" required/>
    <label>Password</label>
</div>
<div class="remember-forgot">
    <label><input type="checkbox"/>Remember me</label>
</div>
<a href=""><button type="submit" class="btn" onClick={handleReadMoreClick}>Register</button></a>
<div class="login-register">
  <p>Already have an account?<a href="" class="register-link"><button class="btn" onClick={handleReadMoreClick1}>Login</button>
    
   </a>
  </p>
 </div>
</div>
</div>
  );
}

export default Login;
