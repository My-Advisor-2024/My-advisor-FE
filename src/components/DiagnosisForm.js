import React, { useState } from "react";
import "../styles/DiagnosisForm.css";

const DiagnosisForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    location: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("gender", formData.gender);
    data.append("age", formData.age);
    data.append("location", formData.location);
    data.append("photo", formData.photo);
  
    try {
      // 서버에 데이터 전송
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: data,
      });
  
      if (response.ok) {
        const result = await response.json();
  
        // 파일을 Base64로 변환하여 세션 스토리지에 저장
        const reader = new FileReader();
        reader.onload = function (e) {
          const base64Image = e.target.result; // Base64 인코딩된 이미지 데이터
          sessionStorage.setItem("uploadedImage", base64Image); // Base64 이미지 저장
          sessionStorage.setItem("prediction", result.prediction); // 예측 결과 저장
  
          // 결과 화면으로 이동
          window.location.href = "/result";
        };
        reader.readAsDataURL(formData.photo); // 파일을 Base64로 변환
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="container">
      <h1>My-advisor</h1>
      <form onSubmit={handleSubmit}>
        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label>Affected Area</label>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Affected Area
          </option>
          <option value="upper extremity">Upper Extremity</option>
          <option value="posterior torso">Posterior Torso</option>
          <option value="lower extremity">Lower Extremity</option>
          <option value="trunk">Trunk</option>
          <option value="lateral torso">Lateral Torso</option>
          <option value="head/neck">Head/Neck</option>
          <option value="palms/soles">Palms/Soles</option>
          <option value="oral/genital">Oral/Genital</option>
        </select>

        <label>Upload Photo</label>
        <input type="file" onChange={handleFileChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiagnosisForm;
