import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
