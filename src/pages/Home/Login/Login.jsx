import React, { useState } from "react";
import "./Login.scss";
import logo from "../../../assets/logo.png";

const Login = () => {
  const [signState, setSignState] = useState("sign in");
  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "sign up" ? (
            <input type="text" placeholder="Your Name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "sign in" ? (
            <p>
              New To Netflix?<span onClick={()=>{setSignState("sign up")}}>sign up now</span>
            </p>
          ) : (
            <p>
              Already have account? <span onClick={()=>{setSignState("sign in")}}>sign in now</span>
              
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
