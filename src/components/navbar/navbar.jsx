import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/sign-in');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-welcome">
          <h2>Welcome, <span className="user-name">{currentUser?.username || 'User'}</span></h2>
        </div>
        <div className="navbar-actions">
          <button className="logout-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
