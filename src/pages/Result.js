import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Button from "../components/Button";

const Result = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    setUploadedImage(sessionStorage.getItem("uploadedImage"));
    setPrediction(sessionStorage.getItem("prediction"));
  }, []);

  return (
    <Container>
      <h1>Diagnosis Result</h1>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded Preview" />}
      <p>{prediction ? `AI Prediction: ${prediction}` : "No data available."}</p>
      <Button text="Back to Home" onClick={() => (window.location.href = "/")} />
    </Container>
  );
};

export default Result;
