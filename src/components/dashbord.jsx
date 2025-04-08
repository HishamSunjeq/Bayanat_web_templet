import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Dashbord() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/sign-in');
  };

  return (
    <>
    </>
  );
}

export default Dashbord;
