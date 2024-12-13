import React, { useEffect, useState } from "react";
import "../styles/DiagnosisForm.css";

const Result = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    // 세션 스토리지에서 데이터 가져오기
    setUploadedImage(sessionStorage.getItem("uploadedImage"));
    setPrediction(sessionStorage.getItem("prediction"));
  }, []);

  return (
    <div className="container">
      <h1>Diagnosis Result</h1>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded Preview" />}
      <p>{prediction ? `AI Prediction: ${prediction}` : "No data available."}</p>
      <button onClick={() => (window.location.href = "/")}>Back to Home</button>
    </div>
  );
};

export default Result;
