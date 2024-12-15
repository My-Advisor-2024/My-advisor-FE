import React, { useState } from "react";
import Container from "../components/Container";
import InputField from "../components/InputField";
import Button from "../components/Button";

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
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        const result = await response.json();

        const reader = new FileReader();
        reader.onload = function (e) {
          const base64Image = e.target.result;
          sessionStorage.setItem("uploadedImage", base64Image);
          sessionStorage.setItem("prediction", result.prediction);
          window.location.href = "/result";
        };
        reader.readAsDataURL(formData.photo);
      } else {
        alert("폼 제출에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("폼 제출 중 오류가 발생했습니다:", error);
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <Container>
      <h1>My-advisor</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Gender"
          type="select"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
          ]}
        />
        <InputField
          label="Age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <InputField
          label="Affected Area"
          type="select"
          name="location"
          value={formData.location}
          onChange={handleChange}
          options={[
            { value: "upper extremity", label: "Upper Extremity" },
            { value: "posterior torso", label: "Posterior Torso" },
            { value: "lower extremity", label: "Lower Extremity" },
            { value: "trunk", label: "Trunk" },
            { value: "lateral torso", label: "Lateral Torso" },
            { value: "head/neck", label: "Head/Neck" },
            { value: "palms/soles", label: "Palms/Soles" },
            { value: "oral/genital", label: "Oral/Genital" },
          ]}
        />
        <label>Upload Photo</label>
        <input type="file" onChange={handleFileChange} required />
        <Button text="Submit" type="submit" />
      </form>
    </Container>
  );
};

export default DiagnosisForm;
