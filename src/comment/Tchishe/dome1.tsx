import React, { useContext } from "react";
import { Button } from "antd";
import { GuaContext } from "./zizhujian";
export default function dome1() {
  const { count, setCount }: any = useContext(GuaContext);
  return (
    <div>
      输出{count}
      <div>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >加一</Button>
      </div>
    </div>
  );
}
