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

  // Function to handle user login
  const handleLogin = (username) => {
    // Logic to authenticate the user
    setUsername(username);
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Logic to logout the user
    setUsername(null);
    alert("You have been signed out!");
  };

  return (
    <div className="App">
      <Router>
        <Header />
        {/* Pass username and handleLogout as props to NavBar */}
        <NavBar username={username} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
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

/* <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar username={username} logoutUser={logoutUser} />
        <main role="main">
          <div className="container my-3">
            <Routes>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/login" element={<Login loginUser={loginUser} />} />
              <Route
                path="/profile"
                element={<MyProfile username={username} />}
              />
              <Route path="/forum" element={<Forum username={username} />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </div>*/
