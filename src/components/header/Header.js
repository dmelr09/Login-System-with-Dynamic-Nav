import React from "react";
import logo from "../../images/soilLogo3.png"; // Adjusted import path
import "./Header.css"; // Import the CSS file for styling

// Functional component for the header
function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="company-name"></div>
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
    </header>
  );
}

export default Header;
