import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <h1>TOEIC Gamification</h1>
      </div>

      {/* Menu */}
      <div className="navbar-menu">
        <Link to="/login">Đăng Nhập</Link>
        <Link to="/register">Đăng Ký</Link>
      </div>
    </nav>
  );
};

export default Navbar;
