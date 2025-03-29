import React from "react";
import { Link } from "react-router-dom"; // Chỉ cần Link từ react-router-dom để điều hướng

const Topbar = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Users</Link>
      <Link to="/courses">Courses</Link>
    </div>
  );
};

export default Topbar;
