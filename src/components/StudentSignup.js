import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/LoginSignup.css'

export default function StudentSignup() {
    const linkstyle = {
      'textDecoration' : 'none'
    }
  
    const navigate = useNavigate();
  
    // login Variables
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    // signup variables
    const [supEmail, setSupEmail] = useState();
    const [supPassword, setSupPassword] = useState();
    const [cnfPassword, setCnfPassword] = useState();
  
    const handleSignupSubmit = (e) =>{
      e.preventDefault();
      axios.post('http://localhost:5000/student/signup', {email : supEmail, password : supPassword, cnfPassword : cnfPassword})
      .then(res =>{
        console.log(res)
        if(res.status === 201){
          navigate('/startquiz');
        }
      })
      .catch(err => console.log(err));
    }
  
    const handleLoginSubmit = (e)=> {
      e.preventDefault();
      try{
        axios.post('http://localhost:5000/student/login', {email : email, password : password})
        .then(res =>{
          console.log(res)
          if(res.status === 201){
            navigate('/startquiz');
          }
        })
        .catch(err => console.log(err));
      }
      catch(error){
        console.log("Here is the error:", error);
      }
  
    }
  
    const [activeForm, setActiveForm] = useState('login');
  
    const handleSlideChange = (form) => {
      setActiveForm(form);
    };
  
    return (
      <div className="wrapper">
        <div className='screen'></div>
        <div className="title-text">
          <div className={`title ${activeForm === 'signup' ? 'login' : 'signup'}`}>{activeForm === 'login' ? 'Login Form' : 'Signup Form'}</div>
          <div className={`title ${activeForm === 'signup' ? 'login' : 'signup'}`}>{activeForm === 'signup' ? 'Signup Form' : 'Login Form'}</div>
  
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <Link to="/student/login" style={linkstyle} className={`slide login ${activeForm === 'login' ? 'active' : ''}`} onClick={() => handleSlideChange('login')}>Login</Link>
            <Link to="/student/signup" style={linkstyle} className={`slide signup ${activeForm === 'signup' ? 'active' : ''}`} onClick={() => handleSlideChange('signup')}>Signup</Link>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            {activeForm === 'login' ? (
              <form onSubmit={handleLoginSubmit} className="login">
                {/* Login form fields */}
                <div className="field">
                  <input type="text" placeholder="Email Address" name='email' autoComplete="email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" name='password' autoComplete="current-password" onChange={(e)=> setPassword(e.target.value)} required />
                </div>
                {/* <div className="pass-link"><a href="#">Forgot password?</a></div> */}
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">Not a member? <Link to="/signup">Signup now</Link></div>
              </form>
            ) : (
              <form onSubmit={handleSignupSubmit} className="signup">
                {/* Signup form fields */}
                <div className="field">
                  <input type="text" placeholder="Email Address" name='supEmail' autoComplete="email" onChange={(e)=> setSupEmail(e.target.value)} required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" name='supPassword' autoComplete="current-password" onChange={(e)=> setSupPassword(e.target.value)} required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Confirm password" name='cnfPassword' autoComplete="current-password" onChange={(e)=> setCnfPassword(e.target.value)} required />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Signup" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  };
