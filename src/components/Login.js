import React from 'react'
import './login.css'
import Group3 from './Group 3.png'
import {useNavigate } from 'react-router-dom';

function Login() {

const navigate = useNavigate();

const handleButtonClick = () => {
  if(document.getElementById('mail').value===""){
       alert("Enter email and password");
  }
  else if(document.getElementById('mail').value==="Admin" && document.getElementById('pass').value==="123")
  navigate('/Dashboard');
else{
  alert("wrong password or email");
}
};


  return (
        <div>
        <img className="logo" src={Group3} alt="" />
        <div >
            <input type="email" placeholder="E-mail"  id="mail"/>
        </div>
        <div>
        <input type="password" placeholder="Password"  id="pass"/>
        </div>
        <div className="sumbit">
        <button type="submit" value="Submit" onClick={handleButtonClick}>Login</button>
        </div>
        <div className="forgot">
            <a href='/'> Forgot Password? </a>
        </div>
        </div>
  )
}

export default Login
