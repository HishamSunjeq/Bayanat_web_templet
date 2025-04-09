import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();
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
      path: '/dashboard',
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
      title: 'Management',
      path: '/management',
      icon: 'fa-solid fa-list-check',
    },
    {
      title: 'Report',
      path: '/report',
      icon: 'fa-solid fa-flag',
      submenu: [
        { title: 'Account Report', path: '/report/account-Report' },
        { title: 'Statement Information', path: '/report/statement-information' }
      ]
    },
    {
      title: 'Admin',
      path: '/admin',
      icon: 'fa-solid fa-user-tie',
      submenu: [
        { title: 'IBAN page', path: '/admin/iban-page' },
        { title: 'Validation page', path: '/admin/validation-page' },
        { title: 'Roles', path: '/admin/roles' },
        { title: 'Roles Management', path: '/admin/roles-management' },
        { title: 'User Role', path: '/admin/user-role' },
        { title: 'Profile', path: '/admin/profile' },
        { title: 'Authorization Management', path: '/admin/authorization-management' },
        { title: 'Stages', path: '/admin/stages' },
        { title: 'Add User', path: '/admin/add-user' },
        { title: 'Add new bank', path: '/admin/add-new-bank' },
        { title: 'Add new transaction type', path: '/admin/add-new-transaction-type' },
        { title: 'Batch management', path: '/admin/batch-management' },
        { title: 'Batches', path: '/admin/batches' }
      ]
    },
    {
      title: 'Configration',
      path: '/configration',
      icon: 'fa-solid fa-cog',
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

  const handleLinkClick = () => {
    if (window.innerWidth < 991.98) {
      toggleSidebar();
    }
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
                            onClick={handleLinkClick}
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
                  onClick={handleLinkClick}
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