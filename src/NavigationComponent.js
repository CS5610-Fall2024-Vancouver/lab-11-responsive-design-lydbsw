import React from "react";
import { Link } from "react-router-dom";
import "./NavigationComponent.css";

const NavigationComponent = ({
  isAuthenticated,
  handleLogin,
  handleLogout,
}) => {
  return (
    <nav className="navigation">
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/tasks">Tasks</Link>
      </div>
      <div className="auth-buttons">
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default NavigationComponent;