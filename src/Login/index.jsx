import React, { useState } from 'react';
import './index.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='login-main-page-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='login-form-container'>
        <div className='login-from-field'>
          <label className='login-lable' htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
            className='login-input-field'
          />
        </div>
        <div className='login-from-field'>
          <label className='login-lable' htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className='login-input-field'
          />
        </div>
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
