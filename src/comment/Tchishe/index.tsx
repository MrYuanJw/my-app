import React, { createContext, useEffect, useRef, useState } from "react";
import Dome from "./dome";
export const GuaContext: any = createContext(null);

const App = () => {
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

  const obj = {
    prop: 42,
    data: {
      num: 99,
    },
  };

  Object.freeze(obj);

  obj.data.num = 33;
  // Throws an error in strict mode

  console.log(obj.data.num);
  // Expected output: 42

  return (
    <>
      <div onClick={() => setCount((pre) => pre + 1)}>{count}</div>
      <div>
        <GuaContext.Provider value={{count, setCount}}>
          <Dome></Dome>
        </GuaContext.Provider>
      </div>
    </>
  );
};

export default App;
