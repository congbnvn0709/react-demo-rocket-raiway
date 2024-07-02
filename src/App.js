import './App.css';
import { Button } from 'antd';
import { useTheme } from './store/store';
import Layout from './layouts/Layout';
function App() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div className={"App " + (theme === 'light' ? 'lightTheme' : 'darkTheme')}>
      <Layout />
      <Button type='primary' onClick={setTheme}>Toggle Theme</Button>
    </div >
  );
}

export default App;
