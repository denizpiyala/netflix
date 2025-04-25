import React from 'react'
import './Login.scss'
import logo from '../../../assets/logo.png'

const Login = () => {
  return (
    <div className='Login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>Sign In</h1>
        <form >
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button>Sign In</button>
          <div className="form-help">
            <div className="remember">
              <input type='checkbox' />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Login
