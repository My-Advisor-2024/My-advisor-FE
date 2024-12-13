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
