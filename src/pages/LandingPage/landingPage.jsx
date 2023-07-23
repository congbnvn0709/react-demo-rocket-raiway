import { Input, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import { searchProduct } from "../../slices/landingSlice";
import { useDispatch } from "react-redux";

function LandingPage() {
  const headerStyle = {
    color: "#fff",
    height: 100,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#f94f2f",
  };

  const contentStyle = {
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    top: "100px",
    left: 0,
    right: 0,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };

  const footerStyle = {
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    color: "#fff",
    backgroundColor: "#7dbcea",
  };
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(searchProduct(e.target.value));
  };
  return (
    <Layout>
      <Header style={headerStyle}>
        <Input onChange={handleSearch} />
      </Header>
      <Content style={contentStyle}>Content</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
}

export default LandingPage;
