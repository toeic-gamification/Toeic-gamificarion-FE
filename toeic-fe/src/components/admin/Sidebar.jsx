import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBook,
  FaGamepad,
  FaCogs,
  FaChartBar,
  FaGift,
  FaClipboardList,
  FaTasks, // Thêm import này
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>🎯 Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin/dashboard">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/users">
            <FaUsers /> Management Users
          </Link>
        </li>
        <li>
          <Link to="/admin/courses">
            <FaBook /> Management Courses
          </Link>
        </li>
        <li>
          <Link to="/admin/tests">
            <FaClipboardList /> Management Tests
          </Link>
        </li>
        <li>
          <Link to="/admin/games">
            <FaGamepad /> Management Games
          </Link>
        </li>
        <li>
          <Link to="/admin/quests">
            <FaTasks /> Management Quests
          </Link>
        </li>
        <li>
          <Link to="/admin/items">
            <FaGift /> Management Items
          </Link>
        </li>
        <li>
          <Link to="/admin/items">
            <FaGift /> Management Notifications
          </Link>
        </li>
        <li>
          <Link to="/admin/rewards">
            <FaGift /> Rewards & XP
          </Link>
        </li>
        <li>
          <Link to="/admin/statistics">
            <FaChartBar /> Statistics
          </Link>
        </li>
        <li>
          <Link to="/admin/settings">
            <FaCogs /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
