import React, { useState } from "react";
import graphicSVG from "../images/graphicSVG.svg";
import "./Register.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// 2. Create a registration page for new users.
// - Define state variables for user inputs
// - Handle user registration and store data in localStorage
// - Render registration form and associated elements

function Register({ handleLogin }) {
  // Define state variables for storing user input.
  const [name, setName] = useState(""); // Store user's name
  const [email, setEmail] = useState(""); // Store user's email
  const [password, setPassword] = useState(""); // Store user's password

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle user sign-up process.
  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Store user registration data in localStorage.
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    // Provide feedback to the user upon successful account creation.
    alert("Account created successfully!");

    navigate("/");
  };

  // Render sign-up form.
  return (
    <div className="register-main">
      <div className="register-container">
        <div className="left-section">
          <br />
          <h2 className="slogan">
            Nature's goodness, delivered to your doorstep.
          </h2>
          <br />
          <br />
          <br />
          <div className="left-bottom-section">
            <img src={graphicSVG} alt="Graphic" className="graphic-image" />
          </div>
        </div>

        <div className="right-section">
          {/* Registration form */}
          <h1 className="slogan-2">Register with us!</h1>
          <form className="registration-form">
            {/* Input fields */}
            <label>
              Username:
              <input
                type="text"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state on input change
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              />
            </label>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  name="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                />
              </label>
            </div>
            <button onClick={handleSignUp} type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
