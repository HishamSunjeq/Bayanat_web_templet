import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../themes/context/ThemeContext';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();
  const { darkMode } = useTheme();
  const [expandedMenus, setExpandedMenus] = useState(() => {
    const savedState = localStorage.getItem('sidebarExpandedMenus');
    return savedState ? JSON.parse(savedState) : {};
  });

  useEffect(() => {
    localStorage.setItem('sidebarExpandedMenus', JSON.stringify(expandedMenus));
  }, [expandedMenus]);

  useEffect(() => {
    const newExpandedState = { ...expandedMenus };
    let stateChanged = false;

    menuItems.forEach(item => {
      if (item.submenu && isSubmenuActive(item.submenu) && !expandedMenus[item.title]) {
        newExpandedState[item.title] = true;
        stateChanged = true;
      }
    });

    if (stateChanged) {
      setExpandedMenus(newExpandedState);
    }
  }, [location.pathname]);

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/dashbord',
      icon: 'fas fa-tachometer-alt'
    },
    {
      title: 'Payment Creation',
      icon: 'fas fa-chart-bar',
      submenu: [
        { title: 'Multiple Transaction', path: '/payment-creation/multiple-transaction' },
        { title: 'Direct Debit', path: '/payment-creation/direct-debit' },
        { title: 'Upload Excel File', path: '/payment-creation/upload-excel' },
        { title: 'New Mandate', path: '/payment-creation/new-mandate' },
        { title: 'Direct Debit with Mandate', path: '/payment-creation/direct-debit-with-mandate' },
        { title: 'Create Free Text', path: '/payment-creation/create-free-text' },
        { title: 'New Institution Transfer', path: '/payment-creation/new-institution-transfer' },
        { title: 'Single Credit Transfer', path: '/payment-creation/single-credit-transfer' }
      ]
    },
    {
      title: 'Analytics',
      path: '/analytics',
      icon: 'fas fa-chart-line',
      submenu: [
        { title: 'Performance', path: '/analytics/performance' },
        { title: 'Statistics', path: '/analytics/statistics' },
        { title: 'Trends', path: '/analytics/trends' }
      ]
    },
    {
      title: 'Users',
      path: '/users',
      icon: 'fas fa-users',
      submenu: [
        { title: 'User Management', path: '/users/management' },
        { title: 'Roles & Permissions', path: '/users/roles' }
      ]
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: 'fas fa-cog',
      submenu: [
        { title: 'General', path: '/settings/general' },
        { title: 'Security', path: '/settings/security' },
        { title: 'Notifications', path: '/settings/notifications' }
      ]
    }
  ];

  const toggleSubmenu = (title) => {
    setExpandedMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const isSubmenuActive = (submenu) => {
    return submenu.some(item => location.pathname === item.path || location.pathname.startsWith(item.path + '/'));
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-menu">
        <ul>
          {menuItems.map((item) => (
            <li key={item.title}>
              {item.submenu ? (
                <>
                  <div 
                    className={`menu-item ${isSubmenuActive(item.submenu) ? 'active' : ''}`}
                    onClick={() => toggleSubmenu(item.title)}
                  >
                    <div className="menu-icon">
                      <i className={item.icon}></i>
                    </div>
                    <span>{item.title}</span>
                    <div className="submenu-arrow">
                      <i className={`fas ${expandedMenus[item.title] ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                    </div>
                  </div>
                  {expandedMenus[item.title] && (
                    <ul className="submenu">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link 
                            to={subItem.path} 
                            className={isActive(subItem.path) ? 'active' : ''}
                            onClick={toggleSidebar}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link 
                  to={item.path} 
                  className={`menu-item ${isActive(item.path) ? 'active' : ''}`}
                  onClick={toggleSidebar}
                >
                  <div className="menu-icon">
                    <i className={item.icon}></i>
                  </div>
                  <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;