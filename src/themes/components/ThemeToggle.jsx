import React from 'react';
import { useTheme } from '../../themes/context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme} 
      aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
    >
      <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
    </button>
  );
};

export default ThemeToggle;
