import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Col,
  Divider,
  InputNumber,
  Pagination,
  Row,
  Select,
} from "antd";
import "./listProduct.css";
import ListCheck from "../ListCheck/listCheck";
import { filterSelector } from "../../../selectors/filterSelector";
import {
  ListDelivery,
  lisStatus,
  listCategories,
} from "../../../core/constants/data";
import {
  filterByPrice,
  onPageChange,
  searchProduct,
  sortProduct,
} from "../../../slices/landingSlice";
function ListProduct() {
  const dispatch = useDispatch();
  const {
    productType,
    shippingUnit,
    status,
    minPrice,
    maxPrice,
    lisProduct,
    name,
    page,
    totalElements,
    sortType,
    sortField,
  } = useSelector(filterSelector);

  const [sortDate, setSortDate] = useState(null);
  const [sortPrice, setSortPrice] = useState(null);

  const handleChange = (value) => {
    setSortDate(value);
    setSortPrice(null);
    dispatch(
      sortProduct({ sortType: value || "DESC", sortField: "createDate" })
    );
  };
  const handleSortPrice = (val) => {
    setSortPrice(val);
    setSortDate(null);
    dispatch(
      sortProduct({
        sortType: val || "DESC",
        sortField: val ? "price" : "createDate",
      })
    );
  };
  const onChangeMinPrice = (e) => {
    dispatch(filterByPrice, { priceName: "minPrice", value: e });
  };

  const onChangMaxPrice = (e) => {
    dispatch(filterByPrice, { priceName: "maxPrice", value: e });
  };
  const changePage = (page) => {
    dispatch(onPageChange(page));
  };
  const handleClickSearch = () => {
    const body = {
      name,
      productType,
      shippingUnit,
      status,
      minPrice,
      maxPrice,
      page,
      size: 6,
      sortField,
      sortType,
    };
    dispatch(searchProduct(body));
  };
  return (
    <Row className="content">
      <Col span={6} className="content-left">
        <Card title="Bộ lọc tìm kiếm" bordered={false}>
          <span style={{ fontWeight: 500 }}>Theo danh mục</span>
          <ListCheck listOptions={listCategories} name="productType" />
          <Divider />
          <span style={{ fontWeight: 500 }}>Đơn vị vận chuyển</span>
          <ListCheck listOptions={ListDelivery} name="shippingUnit" />
          <Divider />
          <span style={{ fontWeight: 500 }}>Tình trạng</span>
          <ListCheck listOptions={lisStatus} name="status" />
          <Divider />
          <section className="price-content">
            <span style={{ marginBottom: 10, fontWeight: 500 }}>
              Khoảng giá
            </span>
            <section
              style={{
                marginBottom: 10,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputNumber
                min={0}
                onChange={onChangeMinPrice}
                style={{ marginRight: "10px", width: "7rem" }}
                placeholder="Enter min price"
              />
              <InputNumber
                min={0}
                onChange={onChangMaxPrice}
                placeholder="Enter max price"
                style={{ width: "7rem" }}
              />
            </section>

            <Button type="primary" onClick={handleClickSearch}>
              Áp dụng
            </Button>
          </section>
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
                value={sortDate}
                options={[
                  { value: "ASC", label: "Old Date" },
                  { value: "DESC", label: "New Date" },
                ]}
                allowClear
              />
            </div>
            <div>
              <Select
                placeholder="Price"
                style={{ width: 150 }}
                onChange={handleSortPrice}
                allowClear
                value={sortPrice}
                options={[
                  { value: "ASC", label: "Low to Hight" },
                  { value: "DESC", label: "Hight to Large" },
                ]}
              />
            </div>
          </Col>
        </Row>
        <Row wrap style={{ marginTop: 16 }} gutter={[16, 16]}>
          {lisProduct.length
            ? lisProduct.map((item) => (
                <Col span={8} className="product-list" key={item.id}>
                  <Card
                    bordered={false}
                    style={{
                      width: 270,
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      srcSet=""
                      className="img-product"
                    />
                    <p>Giá: {item.price}</p>
                    <p>
                      Tình trạng:&nbsp;
                      {item.status === "NEW" ? "Mới" : "Đã qua sử dụng"}
                    </p>
                    <p>
                      Đơn vị vận chuyển:{" "}
                      {
                        ListDelivery.find(
                          (el) => el.value === item.shippingUnit
                        )?.label
                      }
                    </p>
                    <p>
                      Danh mục:{" "}
                      {
                        listCategories.find(
                          (el) => el.value === item.productType
                        ).label
                      }
                    </p>
                  </Card>
                </Col>
              ))
            : null}
        </Row>
        <Pagination
          current={page}
          onChange={changePage}
          total={totalElements}
          defaultPageSize={6}
          style={{ marginTop: 10, marginBottom: 10, textAlign: "center" }}
        />
      </Col>
    </Row>
  );
}

export default ListProduct;
