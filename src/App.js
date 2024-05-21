import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import NavBar from "./components/nav/NavBar";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import SpecialDeals from "./pages/SpecialDeals";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import MyProfile from "./pages/MyProfile";
import "./App.css";
import SignOut from "./pages/SignOut";

function App() {
  // State to manage user authentication
  const [username, setUsername] = useState(null);
  const [name, setName] = useState(null);

  // Function to handle user login
  const handleLogin = ({ email, name }) => {
    setUsername(email); // Set the username state to the user's email
    setName(name); // Set the name state to the user's name
  };
  // Function to handle user logout
  const handleLogout = () => {
    // Logic to logout the user
    setUsername(null);
    setName(null);
    alert("You have been signed out!");
  };

  return (
    <div className="App">
      <Router>
        <Header />
        {/* Pass username and handleLogout as props to NavBar */}
        <NavBar username={username} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home name={name} username={username} />} />
          <Route path="/SpecialDeals" element={<SpecialDeals />} />
          <Route
            path="/Register"
            element={<Register handleLogin={handleLogin} />}
          />
          <Route
            path="/SignIn"
            element={<SignIn handleLogin={handleLogin} />}
          />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route
            path="/SignOut"
            element={<SignOut handleLogout={handleLogout} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
