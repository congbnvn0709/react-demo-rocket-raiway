import logo from './logo.svg';
import './App.css';
import PropChildren from './PropChildren/PropChildren';
import { useContext, useEffect, useRef, useState } from 'react';
import ThemeContextGlobal, { ThemeContext } from './ThemeContext/ThemeContext';
import useThemeStore from './hooks/ContextHooks';
import IntroVideo from './videos/IntroVideo';
import { Button } from 'antd';

function App() {
  const { toggleTheme } = useThemeStore();
  const video = useRef();

  useEffect(() => {
    console.log(video.current);
  });
  const handlePlayVideo = () => {
    // video.current.remove() // nó chỉ public 2 method là play và pause 
    video.current.play();
  }
  const handlePauseVideo = () => {
    video.current.pause();
  }
  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      {/* <button onClick={toggleTheme}>Toggle theme</button> */}
      {/* <PropChildren name="child" theme={theme}>
        <p>Lorem</p>
      </PropChildren> */}
      <IntroVideo ref={video} />
      <Button type='primary' onClick={handlePlayVideo}>Play</Button>
      <Button type='primary' onClick={handlePauseVideo}>Pause</Button>
      <PropChildren name="child">
        <p>Lorem</p>
      </PropChildren>
    </div>
  );
}

export default App;
