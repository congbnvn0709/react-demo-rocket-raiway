import { Input, InputNumber } from "antd";
import React, { useCallback, useState } from "react";
import Index from "./index";
export default function UseCallBackDemo() {
  const [inputValue, setInputValue] = React.useState(0);
  const [result, setResult] = useState(0);

  const handleChangeInput = (value) => {
    setInputValue(value);
  };
  const calculateValue = useCallback(()=>{
    setResult((prev)=> prev + inputValue);
  },[inputValue])
  return (
    <>
      <div className="wrap" style={{margin:10}}>
        <InputNumber value={inputValue} onChange={handleChangeInput} />
        <p>{result}</p>
        <Index onInCrement={calculateValue}></Index>
      </div>
    </>
  );
}
