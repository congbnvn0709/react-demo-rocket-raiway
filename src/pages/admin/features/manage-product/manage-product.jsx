import {
  Col,
  Row,
  Form,
  Input,
  Button,
  Select,
  Table,
  Pagination,
  Space,
} from "antd";
import {
  SearchOutlined,
  EyeOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import "./product.css";
import productService from "../../../../services/productService";
import { Utils } from "../../../../core/utils/function";
import { useEffect, useState } from "react";
function ManageProduct() {
  const listProductType = [
    { key: "PHONE", name: "Điện thoại" },
    { key: "COMPUTER", name: "Máy tính" },
    { key: "CLOTHES", name: "Quần áo" },
    { key: "FOOT_WEAR", name: "Giày dép" },
  ];
  const COLUMN = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "priceStr",
      key: "priceStr",
    },
    {
      title: "Product Type",
      dataIndex: "productType",
      key: "productType",
    },
    {
      title: "Action",
      key: "Action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <EyeOutlined
              style={{ cursor: "pointer" }}
              onClick={(item) => onDetail(record)}
            />
            <EditOutlined
              style={{ cursor: "pointer" }}
              onClick={(item) => onDetail(record)}
            />
            <DeleteOutlined
              style={{ cursor: "pointer" }}
              onClick={(item) => onDetail(record)}
            />
          </Space>
        );
      },
    },
  ];

  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  const [totalElement, setTotalElement] = useState([]);
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(5);

  const handleSearch = async (form) => {
    const body = {
      ...form,
      page: page,
      size: rowPerPage,
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
  const changePage = (page, pageSize) => {
    if (pageSize !== rowPerPage) {
      setPage(1);
    } else {
      setPage(page);
    }
    setRowPerPage(pageSize);
  };

  const onDetail = (item) => {
    console.log(item);
  };
  const onEdit = (item) => {
    console.log(item);
  };
  const onDelete = (item) => {
    console.log(item);
  };
  useEffect(() => {
    handleSearch(form);
  }, [rowPerPage, page]);
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
              fieldNames={{ label: "name", value: "key" }}
              options={listProductType}
              maxTagCount="responsive"
            ></Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SearchOutlined />}
              onClick={() => setPage(1)}
            >
              Search
            </Button>
          </Form.Item>
        </Col>
      </Form>
      <Table
        className="custom-table"
        dataSource={dataSource}
        rowKey="id"
        columns={COLUMN}
        scroll={{
          y: 350,
        }}
        pagination={{
          total: totalElement,
          showSizeChanger: true,
          current: page,
          defaultPageSize: rowPerPage,
          pageSizeOptions: [5, 10, 15],
          onChange: (page, rowPerPage) => changePage(page, rowPerPage),
        }}
      >
        {/* <Table.Column key="name" title="Name" dataIndex="name"></Table.Column>
        <Table.Column
          key="priceStr"
          title="Price"
          dataIndex="priceStr"
        ></Table.Column>
        <Table.Column
          key="productType"
          title="Product Type"
          dataIndex="productType"
        ></Table.Column>
        <Table.Column
          key="action"
          title="Action"
          dataIndex="action"
          align="center"
          render={(_, record) => {
            return (
              <Space size="middle">
                <EyeOutlined
                  style={{ cursor: "pointer" }}
                  onClick={(item) => onDetail(record)}
                />
                <EditOutlined
                  style={{ cursor: "pointer" }}
                  onClick={(item) => onEdit(record)}
                />
                <DeleteOutlined
                  style={{ cursor: "pointer" }}
                  onClick={(item) => onDelete(record)}
                />
              </Space>
            );
          }}
        ></Table.Column> */}
      </Table>
    </Row>
  );
}

export default ManageProduct;
