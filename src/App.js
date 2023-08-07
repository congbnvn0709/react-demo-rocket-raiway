import logo from './logo.svg';
import './App.css';
import PropChildren from './PropChildren/PropChildren';
import { useContext, useState } from 'react';
import ThemeContextGlobal, { ThemeContext } from './ThemeContext/ThemeContext';
import useThemeStore from './hooks/ContextHooks';

function App() {
  const { toggleTheme } = useThemeStore();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      {/* <button onClick={toggleTheme}>Toggle theme</button> */}
      {/* <PropChildren name="child" theme={theme}>
        <p>Lorem</p>
      </PropChildren> */}
      <PropChildren name="child">
        <p>Lorem</p>
      </PropChildren>
    </div>
  );
}

export default App;
