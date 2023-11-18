// Pdashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate,Link  } from 'react-router-dom';
import hospitalLogo from './assets/hosp.jpg';
import axios from 'axios';
import './assets/patientdash.css';

const Pdashboard = () => {
  // Check authentication status before rendering the page
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (logout) {
      // Clear authentication status on logout
      localStorage.removeItem('isAuthenticated');
      // Redirect to the login page
      navigate('/login');
    }
  }, [logout, navigate]);

  const handleLogout = () => {
    setLogout(true);
  };

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get('https://hos-backend.onrender.com/doctors')
      .then((response) => setDoctors(response.data.data))
      .catch((error) => console.error('Error fetching doctors:', error));
  }, []);

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

  return (
    <div>
      <header className="navbar navbar-expand-lg navbar-light px-2" style={headerStyle}>
        <div style={hospitalNameStyle}>
          <img src={hospitalLogo} alt="Hospital Logo" style={shortIconStyle} />
          <span>People Tree Hospital</span>
        </div>
        <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
        <li className="nav-item">
            <Link to="/dashboard1" className="nav-link text-light">
              Book an Appointment
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-link text-light">
              Logout
            </button>
          </li>
        </ul>
      </header>
      <h1>DOCTOR INFO</h1>
      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="doctor-box">
            <p>Name:{doctor.name}</p>
            <p>Email: {doctor.email}</p>
            <p>Mobile: {doctor.mobile}</p>
            <p>Speciality: {doctor.speciality}</p>
            <p>Shiftstart: {doctor.shiftstart} </p>
            <p>Shiftend: {doctor.shiftend} </p>
            <p>Available Slots: {doctor.slot}</p>
            <p>Appointments Left: {doctor.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pdashboard;
