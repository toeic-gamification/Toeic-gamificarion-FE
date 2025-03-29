import React, { useState } from "react";
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../../components/LanguageSwitcher";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="admin-header">
      {/* Logo & Page Title */}
      <div className="logo">
        <h1>🚀 TOEIC Gamification</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>
          <FaSearch />
        </button>
      </div>

      {/* Header Actions */}
      <div className="header-actions">
        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Notifications */}
        <div className="notifications">
          <FaBell onClick={() => setShowNotifications(!showNotifications)} />
          {showNotifications && (
            <div className="notification-dropdown">
              <ul>
                <li>📢 New course update</li>
                <li>🏆 You earned 50 XP</li>
                <li>🎮 Upcoming minigame event</li>
              </ul>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <Link to="/admin/profile">
            <FaUserCircle />
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
