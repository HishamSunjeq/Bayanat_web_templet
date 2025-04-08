import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import { ThemeProvider } from "./themes/context/ThemeContext";
import ThemeToggle from "./themes/components/ThemeToggle";
import Dashbord from "./components/dashbord";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Structure from "./components/Structure/Structure";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" replace />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route 
            path="/dashbord" 
            element={
              <ProtectedRoute>
                <Structure>
                  <Dashbord />
                </Structure>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/reports" 
            element={
              <ProtectedRoute>
                <Structure>
                  <div>Reports Page</div>
                </Structure>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <ProtectedRoute>
                <Structure>
                  <div>Analytics Page</div>
                </Structure>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute>
                <Structure>
                  <div>Settings Page</div>
                </Structure>
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
