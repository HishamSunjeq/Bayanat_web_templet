import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import { ThemeProvider } from "./themes/context/ThemeContext";
import ThemeToggle from "./themes/components/ThemeToggle";
import Dashbord from "./components/dashbord";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" replace />} />
          <Route path="/sign-in" element={<SignIn />} />
          
          {/* Protected routes with shared layout */}
          <Route 
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            {/* Dashboard */}
            <Route path="/dashbord" element={<Dashbord />} />
            
            {/* Payment Creation routes */}
            <Route path="/payment-creation/multiple-transaction" element={<div>Multiple Transaction Page</div>} />
            <Route path="/payment-creation/direct-debit" element={<div>Direct Debit Page</div>} />
            <Route path="/payment-creation/upload-excel" element={<div>Upload Excel File Page</div>} />
            <Route path="/payment-creation/new-mandate" element={<div>New Mandate Page</div>} />
            <Route path="/payment-creation/direct-debit-with-mandate" element={<div>Direct Debit with Mandate Page</div>} />
            <Route path="/payment-creation/create-free-text" element={<div>Create Free Text Page</div>} />
            <Route path="/payment-creation/new-institution-transfer" element={<div>New Institution Transfer Page</div>} />
            <Route path="/payment-creation/single-credit-transfer" element={<div>Single Credit Transfer Page</div>} />
            
            {/* Analytics routes */}
            <Route path="/analytics/performance" element={<div>Performance Analytics Page</div>} />
            <Route path="/analytics/statistics" element={<div>Statistics Page</div>} />
            <Route path="/analytics/trends" element={<div>Trends Page</div>} />
            
            {/* Users routes */}
            <Route path="/users/management" element={<div>User Management Page</div>} />
            <Route path="/users/roles" element={<div>Roles & Permissions Page</div>} />
            
            {/* Settings routes */}
            <Route path="/settings/general" element={<div>General Settings Page</div>} />
            <Route path="/settings/security" element={<div>Security Settings Page</div>} />
            <Route path="/settings/notifications" element={<div>Notifications Settings Page</div>} />
            
            {/* Reports */}
            <Route path="/reports" element={<div>Reports Page</div>} />
          </Route>
          
          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
