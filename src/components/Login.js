import React from 'react';
import '../css/login.css';



function Login() {
 

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>
          Email
          <input
            name="email"
            type="text"
    
          />
        </label>
        <label>
          Password:  
        </label>
        <input
            name="password"
            type="password"
  ></input>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Sign up</a> here.
        </p>
      </form>
    </div>
)}

export default Login;