import React from "react";
import PropTypes from "prop-types";
import RadioButton from "../_shared/RadioButton/RadioButton";
import { TEST_DATA, SERVER_DATA } from "../../constants/dataSource";

const SelectDataSource = ({ onDataSourceChange }) => {
  return (
    <form>
      Source of data:
      <RadioButton
        id="src-test"
        name="data-source"
        label="Test Data"
        value={TEST_DATA}
        defaultChecked={true}
        onChange={onDataSourceChange}
      />
      <RadioButton
        id="src-server"
        name="data-source"
        label="Server Data"
        value={SERVER_DATA}
        onChange={onDataSourceChange}
      />
    </form>
  );
};

SelectDataSource.propTypes = {
  onDataSourceChange: PropTypes.func.isRequired,
};

export default SelectDataSource;
