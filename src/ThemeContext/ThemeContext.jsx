import { createContext, useCallback, useState } from "react";
import React from "react";

export const ThemeContext = createContext();

export const ThemeContextGlobal = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };
  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextGlobal;
