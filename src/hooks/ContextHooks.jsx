import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const useThemeStore = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};

export default useThemeStore;
