import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../../slices/landingSlice";
import { Card, Col, Divider, Row, Select } from "antd";
import "./listProduct.css";
import ListCheck from "../ListCheck/listCheck";
function ListProduct() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Row className="content">
      <Col span={6} className="content-left">
        <Card title="Bộ lọc tìm kiếm" bordered={false}>
          <span>Theo danh mục</span>
          <ListCheck />
          <Divider />
          <span>Đơn vị vận chuyển</span>
          <ListCheck />
          <Divider />
          <span>Tình trạng</span>
          <ListCheck />
          <Divider />
          <span>Giá</span>
        </Card>
      </Col>
      <Col span={17}>
        <Row>
          <Col span={24} className="tool-bar">
            <div style={{ marginRight: 20, marginLeft: 20 }}>Sort By</div>
            <div style={{ marginRight: 20 }}>
              <Select
                placeholder="Date"
                style={{ width: 150 }}
                onChange={handleChange}
                options={[
                  { value: "ASC", label: "Old Date" },
                  { value: "DESC", label: "New Date" },
                ]}
              />
            </div>
            <div>
              <Select
                placeholder="Price"
                style={{ width: 150 }}
                onChange={handleChange}
                options={[
                  { value: "ASC", label: "Low to Hight" },
                  { value: "DESC", label: "Hight to Large" },
                ]}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ListProduct;
