import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <div className="bg-light min-h-screen grid place-items-center">
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
