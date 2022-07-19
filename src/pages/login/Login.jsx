import React, { useRef, useContext } from "react";
import { AuthContext } from "../../state/AuthContext";
import { loginCall } from "../../actionCalls";
import "./Login.css";
const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };
  
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Secret social media</h3>
          <span className="loginDesc">Our own social media app</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">Login here</p>
            <input
              type="email"
              className="loginInput"
              placeholder="email"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="password"
              minLength={6}
              ref={password}
            />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
