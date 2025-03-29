import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import TeacherRoutes from "./TeacherRoutes";
import StudentRoutes from "./StudentRoutes";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const AppRoutes = ({ role }) => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            role === "admin" ? (
              <AdminRoutes role={role} />
            ) : role === "teacher" ? (
              <TeacherRoutes role={role} />
            ) : (
              <StudentRoutes role={role} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
