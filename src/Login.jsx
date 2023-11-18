// Login.js
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './assets/hospital.css';
import hospitalLogo from './assets/hosp.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const shortIconStyle = {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  };

  const hospitalNameStyle = {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '0 2px',
  };

  const headerStyle = {
    backgroundColor: '#082567',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('*All fields are required');
      return;
    }

    axios
      .post('https://hos-backend.onrender.com/Login', { email, password })
      .then((response) => {
        console.log(response.data);
        if (response.data === 'Success') {
          // Set authentication status on successful login
          localStorage.setItem('isAuthenticated', 'true');
          navigate('/pdashboard');
        } else {
          setErrorMessage('Account does not exist');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hos">
      <header className="navbar navbar-expand-lg navbar-light px-2" style={headerStyle}>
        <div style={hospitalNameStyle}>
          <img src={hospitalLogo} alt="Hospital Logo" style={shortIconStyle} />
          <span>People Tree Hospital</span>
        </div>
        <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
          <li className="nav-item">
            <Link to="/admin" className="nav-link text-light">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link text-light">
              Patient
            </Link>
          </li>
        </ul>
      </header>
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="sh">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
            />
          </div>
          <div className="sh">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
            />
          </div>
          <button type="submit" className="manage">
            Login
          </button>
          <div style={{ color: 'red' }}>{message}</div>
        </form>
        <br />
        <p>Dont Have an Account</p>
        <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Login;
