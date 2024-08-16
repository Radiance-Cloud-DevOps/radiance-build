import React from "react";

const InputField = ({ placeholder, height, width, name, value, onChange }) => {
  const inputStyles = {
    height: height,
    width: width,
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      style={inputStyles}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;


