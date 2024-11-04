import { Input } from "antd";
import React, { useMemo } from "react";
import Index from "./index";

export default function MemoDemo() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  // use useMemo hook to menmozie prop user
  const user = useMemo(
    () => ({
      name,
    }),
    [name]
  );
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="wrap" style={{ margin: 10 }}>
        <label>Name</label>
        <Input
          onChange={handleChangeName}
          name="name"
          value={name}
          style={{ width: 200, marginBottom: 10 }}
        ></Input>
        <br></br>
        <label>Email</label>
        <Input
          onChange={handleChangeEmail}
          name="email"
          value={email}
          style={{ width: 200 }}
        ></Input>
        <Index name={name} user={user}></Index>
      </div>
    </>
  );
}
