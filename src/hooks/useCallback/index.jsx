import { Button } from "antd";
import React, { memo, useEffect } from "react";

export default memo(function index({ onInCrement }) {
  console.log("render");
  return (
    <>
      <Button type="primary" onClick={onInCrement}>
        Click increment
      </Button>
    </>
  );
});
