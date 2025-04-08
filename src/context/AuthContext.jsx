import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Provider component that wraps the app and makes auth object available to any child component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in from localStorage on initial load
  useEffect(function() {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Login function
  function login(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
    setCurrentUser(userData);
    return true;
  }

  // Logout function
  function logout() {
    localStorage.removeItem('user');
    setCurrentUser(null);
  }

  // Value object that will be passed to consumers of this context
  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
