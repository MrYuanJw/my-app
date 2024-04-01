import React, {  useContext } from "react";
import Dome1 from "./dome1";
import { GuaContext } from "./zizhujian";
const dome = () => {
  const { count }: any = useContext(GuaContext);
  console.log("====================================");
  console.log("5555555555555555");
  console.log("====================================");
  return (
    <>
      <div>子组件的{count}</div>
      <div>-----------------------</div>
      <div>
        子子组件
        <Dome1></Dome1>
      </div>
    </>
  );
};
export default dome;
