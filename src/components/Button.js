import React from "react";

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <button onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
