import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const Paragraph = () => {
  const context = useContext(ThemeContext);
  return (
    <div className={context.theme}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis totam
      magnam repellendus quas impedit, error dolor id, exercitationem veritatis
      sequi aliquam. Error saepe iusto consectetur ipsam est aliquid aut maxime!
    </div>
  );
};

export default Paragraph;
