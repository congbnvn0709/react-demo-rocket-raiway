import { Button, Form, Input, Modal, Select } from "antd";
import { useEffect } from "react";
import productService from "../../../../../services/productService";
import "./modal-cu-css.css";
import { showMessage } from "../../../../../core/helpers/showMessage";
import { message } from "antd";
import React, { useState } from "react";
import UploadFile from "../../../../../components/UploadFile/UploadFile";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

function ModalCU(props) {
  const listProductType = [
    { key: "PHONE", name: "Điện thoại" },
    { key: "COMPUTER", name: "Máy tính" },
    { key: "CLOTHES", name: "Quần áo" },
    { key: "FOOT_WEAR", name: "Giày dép" },
  ];
  const [form] = Form.useForm();
  const { isModalOpen, setModalOpen, productId, setProductId, setPage } = props;
  const [fileSelect, setFileSelect] = useState(null);

  const getFileSelect = (fileSelect) => {
    console.log(fileSelect);
    setFileSelect(fileSelect);
    form.setFieldValue("image", fileSelect);
    form.validateFields();
    console.log("value", form.getFieldsValue());
  };

  const handleOk = () => {
    form.setFieldValue("image", fileSelect);
    console.log("value", form.getFieldsValue());
    console.log(form.getFieldsError());
    console.log(Object.values(form.getFieldsError()));
    const fieldsError = form.getFieldsError();
    if (!fieldsError.length) {
      // doSaveData(form.getFieldsValue());
    }
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
    const formData = new FormData();
    formData.append("image", body.image);
    formData.append("name", body.name);
    formData.append("price", body.price);
    formData.append("productType", body.productType);

    if (productId) {
      await productService.updateProduct(formData);
    } else {
      await productService.createProduct(formData);
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
      destroyOnClose
      footer={[
        <Button onClick={handleCancel} key="cancel">
          Cancel
        </Button>,
        <Button
          onClick={handleOk}
          type="primary"
          htmlType="submit"
          form="form-cu"
          key="submit"
        >
          Save
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        size="large"
        autoComplete="off"
        preserve={false}
        scrollToFirstError={true}
        id="form-cu"
        onFinish={doSaveData}
      >
        <Form.Item
          label="Product Name"
          name="name"
          required
          rules={[
            {
              required: true,
              message: "Product Name is required",
            },
          ]}
        >
          <Input placeholder="Nhập tên sản phẩm"></Input>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          required
          rules={[
            {
              required: true,
              message: "Price is required",
            },
          ]}
        >
          <Input placeholder="Nhập giá sản phẩm"></Input>
        </Form.Item>
        <Form.Item
          label="Product Type"
          name="productType"
          required
          rules={[
            {
              required: true,
              message: "ProductType is required",
            },
          ]}
        >
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
        <Form.Item
          label="Image"
          name="image"
          rules={[
            {
              required: fileSelect ? false : true,
              message: !fileSelect ? "Image is required" : "",
            },
          ]}
        >
          <UploadFile fileSelect={getFileSelect} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalCU;
