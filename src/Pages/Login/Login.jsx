import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setError("Invalid email or password.");
      return;
    }

    const updatedUser = { ...storedUser, isLoggedIn: true };
    localStorage.setItem("userData", JSON.stringify(updatedUser));

    console.log("Login successful", { email });

    setEmail("");
    setPassword("");
    setError("");

    navigate("/");
  };

  return (
    <>
      <div className='login-page'>
        <form className='login-main' onSubmit={handleSubmit}>
          <div className="login-head-sec">
            <h1 className='login-heading'>Login</h1>
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="login-content-sec">
            <div className='login-sec'>
              <label className='login-label' htmlFor='userEmail'>Email:</label>
              <input
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                type="email"  
                className='login-input'
                id='userEmail'
              />
            </div>
            <div className='login-sec'>
              <label className='login-label' htmlFor='userPassword'>Password:</label>
              <input
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                type="password"  
                className='login-input'
                id='userPassword'
              />
            </div>
          </div>
          <div className='login-button-sec'>
            <input type="submit" className='login-button' value="Login" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;