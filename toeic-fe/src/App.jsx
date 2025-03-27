// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // Sử dụng Routes và Route từ react-router-dom
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Dashboard, Users, Courses } from "./pages"; // Import các trang từ index.js

const App = () => {
  return (
    <div>
      <Topbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />{" "}
            {/* Đảm bảo thêm route cho "/" */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
