import { Col, Modal, Row } from "antd";

function ProductDetail(props) {
  const { isOpenDetail, setOpenDetail, dataProduct } = props;

  const handleCancel = () => {
    setOpenDetail(false);
  };
  return (
    <Modal
      title="Product Detail"
      open={isOpenDetail}
      onCancel={handleCancel}
      footer={null}
    >
      <Row gutter={16} style={{ marginBottom: 10, marginTop: 20 }}>
        <Col span={6}>Product Name: </Col>
        <Col>{dataProduct.name}</Col>
      </Row>
      <Row gutter={16} style={{ marginBottom: 10 }}>
        <Col span={6}>Price: </Col>
        <Col>{dataProduct.price}</Col>
      </Row>
      <Row gutter={16} style={{ marginBottom: 10 }}>
        <Col span={6}>Product Type: </Col>
        <Col>{dataProduct.productType}</Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>Image</Col>
        <Col
          style={{
            width: "200px",
            height: "200px",
          }}
        >
          <img
            style={{ width: "100%", objectFit: "cover" }}
            src={dataProduct.image}
            alt=""
          />
        </Col>
      </Row>
    </Modal>
  );
}
export default ProductDetail;
