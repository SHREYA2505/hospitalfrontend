// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/Sidebar.css';
import AppointmentList from './appointment';
import hospitalLogo from './assets/hosp.jpg';
import DoctorList from './doctor';
import EquipmentList from './equipment';
import PatientList from './patient';
import StaffList from './staff';

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [logoutMessage, setLogoutMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = localStorage.getItem('adminToken') === 'valid';

      if (!isAuthenticated) {
        navigate('/admin');
      }

      setLoading(false);
    };

    checkAuthentication();
  }, [navigate]);

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };

  useEffect(() => {
    if (logoutMessage) {
      const confirmLogout = window.confirm(logoutMessage);
      setLogoutMessage(null);

      if (confirmLogout) {
        localStorage.removeItem('adminToken');
        navigate('/home');
      }
    }
  }, [logoutMessage, navigate]);

  const handleLogout = () => {
    setLogoutMessage('Click OK to logout');
  };

  const shortIconStyle = {
    width: '25px',
    height: '25px',
    marginRight: '10px',
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'AppointmentList':
        return <AppointmentList />;
      case 'DoctorList':
        return <DoctorList />;
      case 'EquipmentList':
        return <EquipmentList />;
      case 'PatientList':
        return <PatientList />;
      case 'StaffList':
        return <StaffList />;
      default:
        return null;
    }
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-links">
          <div className="hospital-info" style={{ display: 'flex', alignItems: 'center', paddingBottom: '25px' }}>
            <img src={hospitalLogo} alt="Hospital Logo" style={shortIconStyle} />
            <h2 style={{ marginBottom: 0 }}>People Tree Hospital</h2>
          </div>
          <ul>
            <li>
              <a onClick={() => handleComponentChange('AppointmentList')} href="#appointment">
                Appointment List
              </a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('DoctorList')} href="#doctor">
                Doctor List
              </a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('EquipmentList')} href="#equipment">
                Equipment List
              </a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('PatientList')} href="#patient">
                Patient List
              </a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('StaffList')} href="#Staff">
                Staff List
              </a>
            </li>
          </ul>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
      <div className="main-content" style={{ width: '75%', margin: '0 auto' }}>
        {renderSelectedComponent()}
        {/* Other content specific to the Dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;
