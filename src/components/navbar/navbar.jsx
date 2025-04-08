import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';
import ThemeToggle from '../../themes/components/ThemeToggle';
import logo from '../../assets/Bayanat_logo.jpg';

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
      <div className="">
        <h3>Bayanat</h3>
      </div>
        <div className='logo'>        
         <img src={logo} alt="Company Logo" className="logo-image" />
        </div>
        <div className="navbar-welcome">
          <h2>Welcome, <span className="user-name">{currentUser?.username || 'User'}</span></h2>
        </div>

        <div className="navbar-actions">
          <button className="logout-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
          <div className="theme-toggle-wrapper">
  <ThemeToggle />
</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
