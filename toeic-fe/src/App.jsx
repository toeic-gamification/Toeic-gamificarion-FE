import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<h1>Home Page</h1>} />{" "}
      {/* Thêm route mặc định */}
    </Routes>
  );
}

export default App;
