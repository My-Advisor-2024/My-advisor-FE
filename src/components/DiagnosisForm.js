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

    // 서버 요청 시뮬레이션 (임시)
    console.log("Submitting form:", data);

    // 세션 스토리지에 데이터 저장 (백엔드 연결 시 대체 가능)
    sessionStorage.setItem("uploadedImage", URL.createObjectURL(formData.photo));
    sessionStorage.setItem("prediction", "AI Predicted Skin Condition");

    // 결과 페이지로 이동
    window.location.href = "/result";
  };

  return (
    <form id="diagnosisForm" onSubmit={handleSubmit}>
      <h1>Diagnosis Form</h1>
      <div>
        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Affected Area</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Upload Photo</label>
        <input type="file" onChange={handleFileChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DiagnosisForm;
