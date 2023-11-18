import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Admin from './admin';
import Dashboard1 from './dashboard1';
import Pdashboard from './pdashboard';
import './assets/style.css';
import Dashboard from './dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/pdashboard" element={<Pdashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
