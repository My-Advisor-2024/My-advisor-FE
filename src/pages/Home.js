import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/diagnosis-form");
  };

  return (
    <Container>
      <h1>Welcome to My Advisor</h1>
      <Button text="Start Diagnosis" onClick={handleStart} />
    </Container>
  );
};

export default Home;
