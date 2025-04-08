import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import { ThemeProvider } from "./themes/context/ThemeContext";
import Dashbord from "./components/dashbord";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
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

            {/* Management */}
            <Route path="/management" element={<div>Management Page</div>} />
            
            {/* Report */}
            <Route path="/report/account-Report" element={<div>Account Report Page</div>} />
            <Route path="/report/statement-information" element={<div>Account Report Page</div>} />

            
            {/* Admin */}
            <Route path="/admin/iban-page" element={<div>IBAN Page</div>} />
            <Route path="/admin/validation-page" element={<div>Validation Page</div>} />
            <Route path="/admin/roles" element={<div>Roles Page</div>} />
            <Route path="/admin/roles-management" element={<div>Roles Management Page</div>} />
            <Route path="/admin/user-role" element={<div>User Role Page</div>} />
            <Route path="/admin/profile" element={<div>Profile Page</div>} />
            <Route path="/admin/authorization-management" element={<div>Authorization Management Page</div>} />
            <Route path="/admin/stages" element={<div>Stages Page</div>} />
            <Route path="/admin/add-user" element={<div>Add User Page</div>} />
            <Route path="/admin/add-new-bank" element={<div>Add new bank Page</div>} />
            <Route path="/admin/add-new-transaction-type'" element={<div>Add new transaction type Page</div>} />
            <Route path="/admin/batch-management" element={<div>Batch management Page</div>} />
            <Route path="/admin/batches" element={<div>BatchesPage</div>} />
            
            {/* Configration */}
            <Route path="/configration" element={<div>Configration Page</div>} />
            
            
          </Route>
          
          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
