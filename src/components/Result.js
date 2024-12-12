import React from "react";

const Result = () => {
  const uploadedImage = sessionStorage.getItem("uploadedImage");
  const prediction = sessionStorage.getItem("prediction");

  return (
    <div>
      <h2>Diagnosis Result</h2>
      <p>Prediction: {prediction}</p>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
    </div>
  );
};

export default Result;
