import React from "react";
import Paragraph from "../Paragraph/Paragraph";

const PropChildren = (props) => {
  const { theme, children } = props;
  return (
    <div>
      <Paragraph theme={theme} />
    </div>
  );
};

export default PropChildren;
