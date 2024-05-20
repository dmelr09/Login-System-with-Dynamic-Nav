import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ username, handleLogout }) {
  console.log("NavBar username prop:", username); // Debugging statement

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/SpecialDeals">Special Deals</Link>
        </li>
        {/* Check if username exists */}
        {username && (
          <>
            {/* Display "My Profile" and "Sign Out" buttons */}
            <Link to="/profile" className="navbar-button">
              My Profile
            </Link>
            <Link
              to="/signout"
              onClick={handleLogout}
              className="navbar-button"
            >
              Sign Out
            </Link>
          </>
        )}
      </ul>

      {/* Conditional rendering for right-aligned buttons */}
      {!username && (
        <div className="navbar-right">
          <Link to="/register" className="navbar-button">
            Register
          </Link>
          <Link to="/signin" className="navbar-button">
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
