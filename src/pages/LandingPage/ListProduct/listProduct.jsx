import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../../slices/landingSlice";

function listProduct() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(searchProduct());
  }, []);
  return (
    <div>
      <h1>List Product</h1>
    </div>
  );
}

export default listProduct;
