import React from 'react';
import { Link } from 'react-router-dom';
import hospitalLogo from './assets/hosp.jpg';
import emergency from './assets/emergency.jpg';
import surgery from './assets/surgery.jpg';
import radiology from './assets/radiology.jpg';
import ctscan from './assets/ctscan.jpg';
import ultra from './assets/ultra.jpg';
import xray from './assets/xray.jpg';

const largeIconStyle = {
  width: '80px',
  height: '80px',
  marginRight: '10px',
};
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

const footerStyle = {
  backgroundColor: '#082567',
  padding: '20px',
  color: 'white',
};

const serviceBoxStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

const servicesGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  backgroundColor: '#082567',
};

const serviceInfo = [
  {
    name: 'Emergency Care',
    image: emergency,
    description: '24/7 Emergency Care Services',
  },
  {
    name: 'Surgery Services',
    image: surgery,
    description: 'State-of-the-Art Surgical Procedures',
  },
  {
    name: 'Radiology and Imaging',
    image: radiology,
    description: 'Advanced Radiology and Imaging',
  },
  {
    name: 'X-ray Services',
    image: xray,
    description: 'High-Quality X-ray Machines',
  },
  {
    name: 'Ultrasound Services',
    image: ultra,
    description: 'Modern Ultrasound Machines',
  },
  {
    name: 'CT Scan',
    image: ctscan,
    description: 'Cutting-Edge CT Scan Services',
  },
];

const bodyStyle = {
  backgroundImage: `url('./assets/home.jpg)`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  fontFamily: 'Arial, sans-serif',
};

function Home() {
  return (
      <div style={bodyStyle}>
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
        <div style={{ padding: '20px', color: '#082567',height: '600px',marginRight:'150px' }}>
      <h2>Hospital Information</h2>
      <p>
        Welcome to People Tree Hospital. We are committed to providing high-quality healthcare services to our patients.
      </p>
      <p>
        Our services include:
      </p>
      <ul>
        <li>Emergency Care available 24/7</li>
        <li>State-of-the-Art Surgical Procedures</li>
        <li>Advanced Radiology and Imaging Services</li>
        <li>High-Quality X-ray Machines</li>
        <li>Modern Ultrasound Machines</li>
        <li>Cutting-Edge CT Scan Services</li>
      </ul>
      <p>
        Your health and well-being are our top priorities. We look forward to serving you and providing the care you need.
      </p>
        </div>
        <footer style={footerStyle}>
          <h4>Hospital Services</h4>
          <div style={servicesGrid}>
            {serviceInfo.map((service, index) => (
              <div style={serviceBoxStyle} key={index}>
                <img src={service.image} alt={service.name} style={largeIconStyle} />
                <span style={{ paddingTop: '5px' }}>{service.name}</span>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </footer>
      </div>
  );
}

export default Home;
