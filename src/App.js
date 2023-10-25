import logo from './logo.svg';
import './App.css';
import PropChildren from './PropChildren/PropChildren';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ThemeContextGlobal, { ThemeContext } from './ThemeContext/ThemeContext';
import useThemeStore from './hooks/ContextHooks';
import IntroVideo from './videos/IntroVideo';
import { Button } from 'antd';

function App() {
  const { toggleTheme } = useThemeStore();
  const video = useRef();
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log(video.current);
  });
  const handlePlayVideo = () => {
    // video.current.remove() // nó chỉ public 2 method là play và pause 
    video.current.play();
  }
  const handlePauseVideo = () => {
    video.current.pause();
  }

  const increamentCount = useCallback(() => {
    setCount((pre) => pre + 1);
  }, [])

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
      <h1>
        {count}
      </h1>
      <PropChildren name="child" onIncrement={increamentCount}>
        <p>Lorem</p>
      </PropChildren>
    </div>
  );
}

export default App;
