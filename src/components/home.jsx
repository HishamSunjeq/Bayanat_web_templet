import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/sign-in');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-danger text-white">
              <h3 className="mb-0">Bayanat Dashboard</h3>
            </div>
            <div className="card-body">
              <h4 className="mb-4">Welcome, {currentUser?.username || 'User'}!</h4>
              <p>You have successfully logged in to the Bayanat platform.</p>
              <p>This is a simple home page demonstrating protected routes.</p>
              <button 
                className="btn btn-danger mt-3" 
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
