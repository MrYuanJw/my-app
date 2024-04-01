import React, { createContext, useEffect, useRef, useState } from "react";

import Dome from "./dome";
export const GuaContext: any = createContext(null);
const zizhujian = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  useEffect(() => {
    countRef.current = count;
  }, [count]);
  useEffect(() => {
    const setTime = setInterval(() => {
      console.log(countRef.current, "----count-setInterval");
    }, 1000);
    return () => {
      clearInterval(setTime);
    };
  }, []); // 加上依赖项
  return (
    <>
      <GuaContext.Provider value={{ count, setCount }}>
        <Dome></Dome>
      </GuaContext.Provider>
      <div>````````````````````````````</div>
    </>
  );
};

export default React.memo(zizhujian);
