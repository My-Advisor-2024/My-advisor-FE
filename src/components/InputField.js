import React from "react";

const InputField = ({ label, type, name, value, onChange, options }) => {
  return (
    <div>
      <label>{label}</label>
      {type === "select" ? (
        <select name={name} value={value} onChange={onChange} required>
          <option value="" disabled>
            {`Select ${label}`}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={`Enter your ${label.toLowerCase()}`}
          value={value}
          onChange={onChange}
          required
        />
      )}
    </div>
  );
};

export default InputField;
