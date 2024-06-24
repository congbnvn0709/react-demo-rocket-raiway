import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { useTheme } from './store/store';
function App() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div className={"App " + (theme === 'light' ? 'lightTheme' : 'darkTheme')}>
      <p>Losum</p>
      <Button type='primary' onClick={setTheme}>Toggle Theme</Button>
    </div >
  );
}

export default App;
