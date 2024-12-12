import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // 임시 데이터로 결과 저장
    const fakePrediction = "Skin Condition A"; // 백엔드 연결 전에 임시 데이터 사용
    sessionStorage.setItem("uploadedImage", URL.createObjectURL(formData.photo));
    sessionStorage.setItem("prediction", fakePrediction);

    // 결과 페이지로 이동
    window.location.href = "/result";
  };

  return (
    <form id="diagnosisForm" onSubmit={handleSubmit}>
      <h2>Diagnosis Form</h2>
      <label>
        Gender
        <input
          type="text"
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Age
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Affected Area
        <input
          type="text"
          name="location"
          id="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Upload Photo
        <input
          type="file"
          name="photo"
          id="photo"
          onChange={handleFileChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DiagnosisForm;
