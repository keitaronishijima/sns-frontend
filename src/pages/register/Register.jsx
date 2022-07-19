import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfrimation = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirmation match
    if (password.current.value !== passwordConfrimation.current.value) {
      passwordConfrimation.current.setCustomVAlidity("Bad password");
    } else {
      try {
        //register api
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
            <p className="loginMsg">Register here</p>
            <input
              type="text"
              required
              className="loginInput"
              placeholder="user name"
              ref={username}
            />
            <input
              type="email"
              required
              className="loginInput"
              placeholder="email"
              ref={email}
            />
            <input
              type="password"
              required
              className="loginInput"
              placeholder="password"
              minLength={6}
              ref={password}
            />
            <input
              type="password"
              required
              className="loginInput"
              placeholder="password confirmation"
              minLength={6}
              ref={passwordConfrimation}
            />
            <button className="loginButton" type="submit">
              Sign up
            </button>
            <button className="loginRegisterButton">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
