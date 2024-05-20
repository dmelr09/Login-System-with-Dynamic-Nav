import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Call the handleLogout function to log the user out
    handleLogout();

    // Redirect to the home page after logout
    navigate("/");
  };

  return (
    <div>
      <h1> This is the Sign Out page! </h1>
    </div>
  );
};

export default SignOut;
