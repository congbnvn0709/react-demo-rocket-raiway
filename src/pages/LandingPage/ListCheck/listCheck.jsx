import { Checkbox } from "antd";
import React from "react";
import "./listCheck.css";
import { useDispatch } from "react-redux";
import { filterByListCheck } from "../../../slices/landingSlice";

const ListCheck = (props) => {
  const { listOptions, name } = props;
  const dispatch = useDispatch();
  const handleChangeCheck = (e) => {
    dispatch(filterByListCheck({ filterBy: name, value: e }));
  };
  return (
    <Checkbox.Group
      options={listOptions}
      name={name}
      onChange={handleChangeCheck}
      className="check"
      style={{ display: "flex", flexDirection: "column", padding: 10 }}
    />
  );
};

export default ListCheck;
