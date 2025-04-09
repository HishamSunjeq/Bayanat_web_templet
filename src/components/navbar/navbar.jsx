import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";
import ThemeToggle from "../../themes/components/ThemeToggle";
import logo from "../../assets/Bayanat_logo.jpg";

function Navbar({ isSidebarOpen, toggleSidebar }) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/sign-in");
  };

  return (
    <nav className="navbar">
      <div className="navbar-row">
        {/* Left Column */}
        <div className="navbar-col navbar-left">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <i className={`fas ${isSidebarOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
          <div className="logo">
            <Link to="/dashboard">
              <img src={logo} alt="Company Logo" className="logo-image" />
            </Link>
          </div>
          <h3 className="navbar-title">
            <span className="title-highlight">Bayanat</span>
          </h3>
        </div>

        {/* Right Column */}
        <div className="navbar-col navbar-right">
          <div className="navbar-welcome">
            <h2>
              Welcome,{" "}
              <span className="user-name">
                {currentUser?.username || "User"}
              </span>
            </h2>
          </div>
          <div className="navbar-actions">
            <button className="logout-btn" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
            <div className="theme-toggle">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
