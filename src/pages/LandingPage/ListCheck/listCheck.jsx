import { Checkbox } from "antd";
import React from "react";

const ListCheck = (props) => {
  const { listOptions } = props;
  return <Checkbox.Group options={listOptions} />;
};

export default ListCheck;
