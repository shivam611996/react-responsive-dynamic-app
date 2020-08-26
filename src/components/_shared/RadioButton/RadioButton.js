import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({ id, name, label, value, defaultChecked, onChange }) => {
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

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool,
};

export default RadioButton;
