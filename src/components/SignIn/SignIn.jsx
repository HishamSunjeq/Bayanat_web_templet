import React, { useState, useEffect } from 'react';
import './SignIn.css';
import logo from '../../assets/Bayanat_logo.jpg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ThemeToggle from '../../themes/components/ThemeToggle';

function SignIn() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashbord');
    }
  }, [isAuthenticated, navigate]);

  // Add animation effect when component mounts
  useEffect(() => {
    const container = document.querySelector('.sign-in-container');
    if (container) {
      container.classList.add('fade-in');
      
      return () => {
        container.classList.remove('fade-in');
      };
    }
  }, []);

  // Add no-scroll class to body when SignIn component mounts
  useEffect(() => {
    document.body.classList.add('no-scroll');
    
    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Use demo account
  const useDemoAccount = () => {
    setFormData({
      username: 'demo',
      password: 'demo12'
    });
    // Clear any errors
    setErrors({});
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    // Log form data to console as per PRD requirement
    console.log('Form submitted:', formData);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (formData.username === 'demo' && formData.password === 'demo12') {
        setLoginSuccess(true);
        
        login({ username: formData.username });
        
        setTimeout(() => {
          navigate('/dashbord');
        }, 1000);
      } else {
        setErrors({ general: 'Invalid username or password. Try using the demo account.' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'An unexpected error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-in-container container-fluid">
      <div className="row vh-100">
        {/* Left Column - Branding */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center left-column">
          <div className="text-center">
            {/* Logo with white background circle */}
            <div className="logo-container mb-4">
              <img src={logo} alt="Company Logo" className="logo-image" />
            </div>
            <h2 className="text-white mb-3 animate-text">Welcome to Bayanat</h2>
            <p className="text-white-50 lead animate-text-delay">Your Professional Digital Transformation Platform</p>
            <div className="mt-5">
              <div className="d-flex justify-content-center">
                <div className="feature-item mx-3 animate-feature">
                  <i className="bi bi-shield-lock text-white mb-2" style={{ fontSize: '2rem' }}></i>  
                  <p className="text-white-50 small">Enterprise Security</p>
                </div>
                <div className="feature-item mx-3 animate-feature" style={{ animationDelay: '0.2s' }}>
                  <i className="bi bi-graph-up text-white mb-2" style={{ fontSize: '2rem' }}></i>
                  <p className="text-white-50 small">Advanced Analytics</p>
                </div>
                <div className="feature-item mx-3 animate-feature" style={{ animationDelay: '0.4s' }}>
                  <i className="bi bi-gear text-white mb-2" style={{ fontSize: '2rem' }}></i>
                  <p className="text-white-50 small">Powerful Tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sign In Form */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center right-column p-4">
          <div className={`card p-4 p-md-5 shadow-lg ${loginSuccess ? 'login-success' : ''}`} style={{ width: '100%', maxWidth: '450px', borderRadius: '10px', border: 'none' }}>
          <div className="theme-toggle-wrapper">
              <ThemeToggle />
            </div>
            <div className="text-center mb-4 d-block d-lg-none">
              <div className="logo-container-mobile mx-auto">
                <img src={logo} alt="Company Logo" className="logo-image-mobile" />
              </div>
            </div>
            
            <h3 className="mb-4 text-center fw-bold text-light">Sign In</h3>
            
            {errors.general && (
              <div className="alert alert-danger animate-alert" role="alert">
                {errors.general}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {/* Username with Icon */}
              <div className={`input-group mb-3 ${errors.username ? 'has-error' : ''}`}>
                <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                <input
                  type="text"
                  className={`form-control form-control-lg ${errors.username ? 'is-invalid' : ''}`}
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="username"
                  disabled={loading}
                />
              </div>
              {errors.username && <div className="text-danger mb-3 animate-error">{errors.username}</div>}
              
              {/* Password with Icon and Show/Hide Toggle */}
              <div className={`input-group mb-3 ${errors.password ? 'has-error' : ''}`}>
                <span className="input-group-text"><i className="bi bi-lock-fill" style={{ color: '#cc0000' }}></i></span>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  disabled={loading}
                />
                <button 
                  className="input-group-text password-toggle" 
                  type="button" 
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  disabled={loading}
                >
                  <i className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"}`} style={{ color: '#cc0000' }}></i>
                </button>
              </div>
              {errors.password && <div className="text-danger mb-3 animate-error">{errors.password}</div>}
              
              {/* Sign In Button */}
              <button 
                type="submit" 
                className="btn btn-danger btn-lg w-100 mt-3 mb-3 sign-in-button" 
                disabled={loading}
              >
                {loading ? (
                  <span>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Signing In...
                  </span>
                ) : 'Sign In'}
              </button>
              
              {/* Demo Account Button */}
              <div className="text-center mb-3">
                <button 
                  type="button"
                  className="btn btn-link text-decoration-none demo-account-link"
                  onClick={useDemoAccount}
                  disabled={loading}
                >
                  <i className="bi bi-person-badge me-1"></i> Use Demo Account
                </button>
              </div>
              </form>
            <div className="mt-4 pt-3 border-top text-center">
              <p className="text-white small mb-0">&copy; 2025 Bayanat. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
