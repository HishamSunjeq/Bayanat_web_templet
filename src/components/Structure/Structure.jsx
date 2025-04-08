import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { useTheme } from '../../themes/context/ThemeContext';
import './Structure.css';

function Structure({ children }) {
  const { darkMode } = useTheme();
  
  return (
    <div className={`structure-container ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <Navbar />
      <div className="structure-content">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Structure;
