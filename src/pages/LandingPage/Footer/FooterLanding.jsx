import { Col, Row } from "antd";
import React from "react";
import "./FooterLanding.css";

const FooterLanding = () => {
  return (
    <Row wrap className="footer-content">
      <Col span={6}>
        <h4>CHĂM SÓC KHÁCH HÀNG</h4>
        <p>Trung tâm trợ giúp</p>
        <p>Hướng dẫn mua</p>
        <p>Chính sách vận chuyển</p>
      </Col>
      <Col span={6}>
        <h4>VỀ CHÚNG TÔI</h4>
        <p>Giới thiệu về Shop</p>
        <p>Tuyển dụng</p>
        <p>Điều khoản Shop</p>
      </Col>
      <Col span={6}>
        <h4>DANH MỤC</h4>
        <p>Điện thoại</p>
        <p>Quần áo</p>
        <p>Giày dép</p>
      </Col>
      <Col span={6}>
        <h4>THEO DÕI CHÚNG TÔI TRÊN</h4>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>LinkedIn</p>
      </Col>
    </Row>
  );
};

export default FooterLanding;
