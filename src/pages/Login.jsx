import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <label>
          Email:
          <input type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" required />
        </label>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
