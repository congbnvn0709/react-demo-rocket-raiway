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
  Modal,
} from "antd";
import {
  SearchOutlined,
  EyeOutlined,
  DeleteOutlined,
  PlusOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import "./product.css";
import productService from "../../../../services/productService";
import { Utils } from "../../../../core/utils/function";
import { useEffect, useState } from "react";
import ProductDetail from "./product-detail/product-detail";
import ModalCU from "./modal-cu/modal-cu";
import { showMessage } from "../../../../core/helpers/showMessage";
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
              onClick={(item) => onEdit(record)}
            />
            <DeleteOutlined
              style={{ cursor: "pointer" }}
              onClick={(item) => onDelete(record)}
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
  const [openDetail, setOpenDetail] = useState(false);
  const [isOpenCU, setOpenCU] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const [productId, setProductId] = useState(null);

  const handleSearch = async (form) => {
    const body = {
      page: page,
      size: rowPerPage,
      sortField: "createDate",
      sortType: "desc",
      ...form,
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
    setOpenDetail(true);
    setDataDetail(item);
  };
  const onEdit = (item) => {
    setOpenCU(true);
    setProductId(item.id);
  };
  const onDelete = (item) => {
    const { confirm } = Modal;
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      // content: 'Some descriptions',ks
      onOk() {
        deleteItem(item);
      },
      centered: true,
    });
  };

  const deleteItem = async (item) => {
    const res = await productService.deleteProduct(item.id);
    showMessage.success("Delete item success");
    setPage(1);
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
      <Button
        icon={<PlusOutlined />}
        type="primary"
        style={{ marginBottom: "10px" }}
        onClick={() => setOpenCU(true)}
      >
        Add
      </Button>
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
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
      ></Table>
      {openDetail ? (
        <ProductDetail
          isOpenDetail={openDetail}
          setOpenDetail={setOpenDetail}
          dataProduct={dataDetail}
        />
      ) : null}
      {isOpenCU ? (
        <ModalCU
          isModalOpen={isOpenCU}
          setModalOpen={setOpenCU}
          productId={productId}
          setProductId={setProductId}
          setPage={setPage}
        />
      ) : null}
    </Row>
  );
}

export default ManageProduct;
