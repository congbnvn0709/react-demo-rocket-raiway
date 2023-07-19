import { Button, Form, Input, Radio } from "antd";

function Login() {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      layout="vertical"
      size="large"
      autoComplete="off"
      style={{
        width: 450,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50% )",
      }}
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Enter the username" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Enter the password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" style={{ width: "100%" }} htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
