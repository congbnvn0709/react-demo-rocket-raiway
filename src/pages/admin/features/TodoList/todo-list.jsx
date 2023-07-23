import { Typography, Divider } from "antd";
import TodoList from "./ListTodo";
import Filters from "./Filter";

const { Title } = Typography;

function TodoListDemo() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "100%",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default TodoListDemo;
