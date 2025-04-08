import { Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./themes/context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Routes>
          {AppRoutes}
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
