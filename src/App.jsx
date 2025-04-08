import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="*" element={<Navigate to="/sign-in" replace />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
