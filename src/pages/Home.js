// Home.js
import React from "react";
import "./Home.css"; // Import the CSS file

function Home({ username }) {
  return (
    <div>
      {username ? <h2>Welcome, {username}!</h2> : <h1>This is home.</h1>}

      <p>
        This page will display information regarding organic foods and
        nutritional advice
      </p>
    </div>
  );
}

export default Home;
