import React from "react";
import RadioButton from "../_shared/RadioButton/RadioButton";

const SelectDataSource = ({ onDataSourceChange }) => {
  return (
    <form>
      Source of data:
      <RadioButton
        id="src-test"
        name="data-source"
        label="Test Data"
        value="test"
        defaultChecked={true}
        onChange={onDataSourceChange}
      />
      <RadioButton
        id="src-server"
        name="data-source"
        label="Server Data"
        value="server"
        onChange={onDataSourceChange}
      />
    </form>
  );
};

export default SelectDataSource;
