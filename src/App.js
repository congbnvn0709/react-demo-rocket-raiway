import logo from './logo.svg';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import toDoReducer from './reducer/todoReducer';

function App() {
  const todoListState = useSelector(state => state.todo);
  console.log('todoListState', todoListState);
  return (
    <>
      App component
    </>
  );
}

export default App;
