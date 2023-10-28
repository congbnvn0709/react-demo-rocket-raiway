import React, { useEffect } from "react";
import Paragraph from "../Paragraph/Paragraph";

const PropChildren = (props) => {
  const { onIncrement } = props;

  useEffect(() => {
    console.log("render prop children");
  });

  return (
    <div>
      <Paragraph />
      <button onClick={onIncrement}>Tăng dần</button>
    </div>
  );
};

export default React.memo(PropChildren);
