import { Col, Row, Form, Input, Button, Select, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { COLUMN } from "./colums";
import "./product.css";
import productService from "../../../../services/productService";
import { Utils } from "../../../../core/utils/function";
import { useState } from "react";
function ManageProduct() {
  const listProductType = [
    { key: "PHONE", name: "Điện thoại" },
    { key: "COMPUTER", name: "Máy tính" },
    { key: "CLOTHES", name: "Quần áo" },
    { key: "FOOT_WEAR", name: "Giày dép" },
  ];

  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  const [totalElement, setTotalElement] = useState([]);
  const handleChange = (e) => {
    console.log(e);
    console.log(form.getFieldsValue("productType"));
  };

  const handleSearch = async (form) => {
    const body = {
      ...form,
      page: 1,
      size: 5,
      sortField: "id",
      sortType: "desc",
    };

    const { content, totalElements } = await productService.searchProduct(body);
    const dataMap = content.map((item) => {
      const createdDateStr = Utils.formatDateDDMMYYYY(item.createDate);
      const priceStr = Utils.formatNumberWithComma(item.price || 0);
      return { ...item, createdDateStr, priceStr };
    });
    setDataSource(dataMap);
    setTotalElement(totalElements);
  };
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} wrap>
      <Form
        form={form}
        layout="vertical"
        size="large"
        onFinish={handleSearch}
        style={{ width: "100%", display: "flex", alignItems: "flex-end" }}
      >
        <Col span={8}>
          <Form.Item label="Product Name" name="name">
            <Input placeholder="Enter the product name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Product Type" name="productType">
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              onChange={handleChange}
              fieldNames={{ label: "name", value: "key" }}
              options={listProductType}
              maxTagCount="responsive"
            ></Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
              Search
            </Button>
          </Form.Item>
        </Col>
      </Form>
      <Table
        className="custom-table"
        columns={COLUMN}
        dataSource={dataSource}
        rowKey="id"
        pagination={{ total: totalElement, pageSizeOptions: [5, 10, 15, 20] }}
      ></Table>
    </Row>
  );
}

export default ManageProduct;
