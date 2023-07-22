import { Button, Form, Input, Modal, Select } from "antd";
import { useEffect } from "react";
import productService from "../../../../services/productService";
import "./modal-cu-css.css";
import { showMessage } from "../../../../core/helpers/showMessage";
function ModalCU(props) {
  const listProductType = [
    { key: "PHONE", name: "Điện thoại" },
    { key: "COMPUTER", name: "Máy tính" },
    { key: "CLOTHES", name: "Quần áo" },
    { key: "FOOT_WEAR", name: "Giày dép" },
  ];
  const [form] = Form.useForm();
  const { isModalOpen, setModalOpen, productId, setProductId, setPage } = props;
  const handleOk = () => {
    doSaveData(form.getFieldsValue());
  };
  const handleCancel = () => {
    setModalOpen(false);
    setProductId(null);
  };
  const getProductDetail = async () => {
    if (productId) {
      const res = await productService.getProductById(productId);
      form.setFieldsValue(res);
    } else {
      form.resetFields();
    }
  };
  const doSaveData = async (body) => {
    if (productId) {
      await productService.updateProduct(body);
    } else {
      await productService.createProduct(body);
    }
    showMessage.success(
      `${productId ? "Update" : "Create"} product successfully`
    );
    // handleSearch({ page: 1 });
    setPage(1);
    setModalOpen(false);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Modal
      title={productId ? "Update Product" : "Create Product"}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[
        <Button onClick={handleCancel}>Cancel</Button>,
        <Button onClick={handleOk} type="primary">
          Save
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        size="large"
        autoComplete="off"
        onFinish={doSaveData}
      >
        <Form.Item label="Product Name" name="name" required>
          <Input></Input>
        </Form.Item>
        <Form.Item label="Price" name="price" required>
          <Input></Input>
        </Form.Item>
        <Form.Item label="Product Type" name="productType" required>
          <Select
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
        <Form.Item label="Link Image" name="image" required>
          <Input></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalCU;
