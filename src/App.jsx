import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="*" element={<Navigate to="/sign-in" replace />} /> */}
      </Routes>
    </>
  );
}

export default App;
