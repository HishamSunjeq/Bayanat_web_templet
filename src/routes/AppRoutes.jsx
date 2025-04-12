import { Route, Navigate } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import Dashboard from "../components/Dashboard/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import MainLayout from "../components/Layout/MainLayout";
import Configuration from "../components/Configuration/Configuration";

// All application routes defined in one place
const AppRoutes = [
  // Auth Routes
  <Route key="root" path="/" element={<Navigate to="/sign-in" replace />} />,
  <Route key="sign-in" path="/sign-in" element={<SignIn />} />,
  
  // Protected Routes with shared layout
  <Route 
    key="protected"
    path="/"
    element={
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    }
  >
    {/* Dashboard */}
    <Route key="dashboard" path="/dashboard" element={<Dashboard />} />
    
    {/* Payment Creation routes */}
    <Route key="multiple-transaction" path="/payment-creation/multiple-transaction" element={<div>Multiple Transaction Page</div>} />
    <Route key="direct-debit" path="/payment-creation/direct-debit" element={<div>Direct Debit Page</div>} />
    <Route key="upload-excel" path="/payment-creation/upload-excel" element={<div>Upload Excel File Page</div>} />
    <Route key="new-mandate" path="/payment-creation/new-mandate" element={<div>New Mandate Page</div>} />
    <Route key="direct-debit-with-mandate" path="/payment-creation/direct-debit-with-mandate" element={<div>Direct Debit with Mandate Page</div>} />
    <Route key="create-free-text" path="/payment-creation/create-free-text" element={<div>Create Free Text Page</div>} />
    <Route key="new-institution-transfer" path="/payment-creation/new-institution-transfer" element={<div>New Institution Transfer Page</div>} />
    <Route key="single-credit-transfer" path="/payment-creation/single-credit-transfer" element={<div>Single Credit Transfer Page</div>} />

    {/* Management */}
    <Route key="management" path="/management" element={<div>Management Page</div>} />
    
    {/* Report */}
    <Route key="account-report" path="/report/account-Report" element={<div>Account Report Page</div>} />
    <Route key="statement-information" path="/report/statement-information" element={<div>Account Report Page</div>} />

    {/* Admin */}
    <Route key="iban-page" path="/admin/iban-page" element={<div>IBAN Page</div>} />
    <Route key="validation-page" path="/admin/validation-page" element={<div>Validation Page</div>} />
    <Route key="roles" path="/admin/roles" element={<div>Roles Page</div>} />
    <Route key="roles-management" path="/admin/roles-management" element={<div>Roles Management Page</div>} />
    <Route key="user-role" path="/admin/user-role" element={<div>User Role Page</div>} />
    <Route key="profile" path="/admin/profile" element={<div>Profile Page</div>} />
    <Route key="authorization-management" path="/admin/authorization-management" element={<div>Authorization Management Page</div>} />
    <Route key="stages" path="/admin/stages" element={<div>Stages Page</div>} />
    <Route key="add-user" path="/admin/add-user" element={<div>Add User Page</div>} />
    <Route key="add-new-bank" path="/admin/add-new-bank" element={<div>Add new bank Page</div>} />
    <Route key="add-new-transaction-type" path="/admin/add-new-transaction-type" element={<div>Add new transaction type Page</div>} />
    <Route key="batch-management" path="/admin/batch-management" element={<div>Batch management Page</div>} />
    <Route key="batches" path="/admin/batches" element={<div>BatchesPage</div>} />
    
    {/* Configuration */}
    <Route key="configuration" path="/configration" element={<Configuration />} />
  </Route>,
  
  // Catch-all route
  <Route key="not-found" path="*" element={<Navigate to="/sign-in" replace />} />
];

export default AppRoutes;
