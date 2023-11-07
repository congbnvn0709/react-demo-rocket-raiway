import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import toDoReducer from './reducer/todoReducer';
import { addTodoList } from './actions/todoList';

function App() {
  const todoListState = useSelector(state => state.todo.toDoList);
  const dispatch = useDispatch();
  console.log('todoListState', todoListState);
  const handleAdd = () => {
    dispatch(addTodoList(1))
  }

  return (
    <>
      {todoListState.map((item, index) => {
        return (
          < div key={index} >
            {item}
          </div >
        )
      })}
      <button onClick={handleAdd}>thêm mới</button>
    </>
  );
}

export default App;
