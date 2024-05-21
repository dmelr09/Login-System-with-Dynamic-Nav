import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ username, handleLogout }) {
  console.log("NavBar username prop:", username); // Debugging statement

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SpecialDeals">Special Deals</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        {username ? (
          <>
            <Link to="/profile" className="navbar-button">
              My Profile
            </Link>
            <Link to="/" onClick={handleLogout} className="navbar-button">
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" className="navbar-button">
              Register
            </Link>
            <Link to="/signin" className="navbar-button">
              Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
