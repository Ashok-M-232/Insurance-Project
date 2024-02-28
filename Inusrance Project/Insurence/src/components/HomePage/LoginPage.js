import React, { useState } from 'react';
import './LoginForm.css'; // Your custom CSS file
import { Link } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulating a delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Authentication successful');
    } catch (error) {
      console.error('Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="loginForm ">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:
          <input
            type="text"
            id="username"
            className='form-control'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /></label>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:
          <input
            type="password"
            id="password"
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> </label>
          {/* <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'} Password
          </span> */}
        </div>

        <button type="submit" className="btn" disabled={isLoading}>Login
        </button>

        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
