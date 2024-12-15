import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/diagnosis-form");
  };

  return (
    <div className="container">
      <h1>Welcome to My Advisor</h1>
      <button onClick={handleStart}>Start Diagnosis</button>
    </div>
  );
};

export default Home;
