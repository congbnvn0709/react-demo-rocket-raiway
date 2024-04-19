import React, { useEffect, useRef, useState } from "react";
import { UploadOutlined, CloseOutlined } from "@ant-design/icons";
import "./style.css";
import { Form } from "antd";

const UploadFile = ({ fileSelect }) => {
  const inputRef = useRef();
  const [imgUrl, setImageUrl] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onSelectedFile = (event) => {
    if (event.target.files && event.target.files.length) {
      console.log("Selected file", event.target.value);
      fileSelect(event.target.files[0]);
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  const removeImage = () => {
    setImageUrl(null);
    fileSelect(null);
  };
  useEffect(() => {}, []);
  return (
    <>
      {imgUrl ? (
        <div className="image-box">
          <img className="preview-image" src={imgUrl}></img>
          <button className="btn-close" onClick={removeImage}>
            x
          </button>
        </div>
      ) : (
        <>
          <input
            id="file"
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onSelectedFile}
            style={{ display: "none" }}
          />
          <button className="file-btn" onClick={handleClick}>
            <UploadOutlined />
            <span style={{ marginLeft: "10px" }}>Upload File</span>
          </button>
        </>
      )}
    </>
  );
};

export default UploadFile;
