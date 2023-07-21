import { Button, Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  WindowsOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
function Admin() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth");
  if (!auth) {
    return <Navigate to={"/login"} />;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [collapsed, setCollapsed] = React.useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const changeMenu = (e) => {
    console.log(e);
    navigate(e.key);
  };
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["manage-product"]}
          onClick={changeMenu}
          items={[
            {
              key: "manage-product",
              icon: <WindowsOutlined />,
              label: "Manage Products",
            },
            {
              key: "todo",
              icon: <VideoCameraOutlined />,
              label: "Todo List",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Admin;
