import React, { useContext } from "react";
import { GuaContext } from "./index";
import { Button } from "antd";
const dome = () => {
  const { count, setCount }:any = useContext(GuaContext);
  return (
    <>
      <div>子组件的{count}</div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      ></Button>
    </>
  );
};
export default dome;
