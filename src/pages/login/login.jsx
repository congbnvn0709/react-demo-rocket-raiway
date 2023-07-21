import { Button, Form, Input, Radio } from "antd";
import background from "../../assets/images/back_ground-login.png";
import authService from "../../services/loginSerice";
import "./login.css";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onSubmit = (valueForm) => {
    doLogin(valueForm);
  };

  const doLogin = async (data) => {
    const res = await authService.login(data);
    if (res) {
      localStorage.setItem("auth", res.token);
      navigate("/manage-product");
    } else {
      navigate("/login");
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Form
        form={form}
        layout="vertical"
        size="large"
        className="login-form"
        autoComplete="off"
        onFinish={onSubmit}
        style={{
          width: 450,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50% )",
        }}
      >
        <Form.Item
          style={{ color: "#fff" }}
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Enter the username" />
        </Form.Item>
        <Form.Item
          style={{ color: "#fff" }}
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
    </div>
  );
}

export default Login;
