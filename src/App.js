import logo from './logo.svg';
import './App.css';
import MemoDemo from './hooks/memo/MemoDemo';
import UseCallBackDemo from './hooks/useCallback/useCallBackDemo';

function App() {
  return (
    <div className="App">
      {/* <MemoDemo></MemoDemo> */}
      <UseCallBackDemo></UseCallBackDemo>
    </div>
  );
}

export default App;
