import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./SignIn.css";
import graphicSVG from "../images/signin.svg";

function SignIn({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogIn = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      alert("Login successful!");
      console.log("email is: " + user.email); // Access user's email property
      handleLogin(user.email); // Call handleLogin with the logged-in user's email
      navigate("/"); // Redirect to home page after successful login
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="signin-main">
      <div className="login-container">
        <div className="left-section">
          <br />
          <h2 className="slogan">
            Cultivating a healthier tomorrow, one login at a time.
          </h2>
          <br />
          <br />
          <br />
          <div className="left-bottom-section">
            <img src={graphicSVG} alt="Graphic" className="graphic-image" />
          </div>
        </div>

        <div className="right-section">
          <h1 className="slogan-2">Login for more content!</h1>
          <form className="login-form">
            <label>
              Email:
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" onClick={handleLogIn}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
