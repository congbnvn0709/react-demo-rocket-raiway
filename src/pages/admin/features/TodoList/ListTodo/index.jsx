import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "../Todo";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "./listTodoSice";
import { useSelector } from "react-redux";
import {
  todoList,
  todoRemainingSelector,
} from "../../../../../stores/selector";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPrioriry] = useState("Medium");
  const listTodo = useSelector(todoRemainingSelector);
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPrioriry(value);
  };
  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      name: todoName,
      priority,
      completed: false,
    };
    dispatch(addTodo(todo));
    setTodoName("");
    setPrioriry("Medium");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {listTodo.map((item) => (
          <Todo
            id={item.id}
            key={item.id}
            name={item.name}
            prioriry={item.priority}
            completed={item.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }}>
          <Input value={todoName} onChange={handleChangeInput} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
