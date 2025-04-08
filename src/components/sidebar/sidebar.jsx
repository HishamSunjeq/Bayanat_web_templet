import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../themes/context/ThemeContext';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const { darkMode } = useTheme();
  const [expandedMenus, setExpandedMenus] = useState(() => {
    // Initialize from localStorage if available
    const savedState = localStorage.getItem('sidebarExpandedMenus');
    return savedState ? JSON.parse(savedState) : {};
  });

  // Save expanded state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sidebarExpandedMenus', JSON.stringify(expandedMenus));
  }, [expandedMenus]);

  // Auto-expand menus when a submenu item is active
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
        { title: 'Direct debit', path: '/payment-creation/direct-debit' },
        { title: 'Upload Excel File', path: '/payment-creation/upload-excel' },
        { title: 'New Mandate', path: '/payment-creation/new-mandate' },
        { title: 'Direct debit with mandate', path: '/payment-creation/direct-debit-with-mandate' },
        { title: 'Create Free Text', path: '/payment-creation/create-free-text' },
        { title: 'New institution transfer', path: '/payment-creation/new-institution-transfer' },
        { title: 'Single credit transfer', path: '/payment-creation/single-credit-transfer' }
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
    <div className="sidebar">
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
