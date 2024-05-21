import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1> This is the Sign Out page! </h1>
    </div>
  );
};

export default SignOut;
