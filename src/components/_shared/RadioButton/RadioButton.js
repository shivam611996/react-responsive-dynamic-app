import React from "react";

const RadioButtom = ({ id, name, label, value, defaultChecked, onChange }) => {
  return (
    <>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default RadioButtom;
