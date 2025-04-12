import { Routes } from "react-router-dom";
import "./App.css";
import "./themes";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
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
