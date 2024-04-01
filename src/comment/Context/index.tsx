import React, { useState, createContext, useContext } from "react";
const StateContext: any = createContext(null);

const StateProvider: any = (props: any) => {
  console.log("StateProvider render");
  console.log(props);
  
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  return (
    <>
      <StateContext.Provider value={{ count1, setCount1, count2, setCount2 }}>
        <>{props.children}</>
      </StateContext.Provider>
    </>
  );
};

const Counter1 = () => {
  console.log("count1 render");

  const { count1, setCount1 }: any = useContext(StateContext);
  return (
    <>
      <div>Count1: {count1}</div>
      <button onClick={() => setCount1((n: number) => n + 1)}>setCount1</button>
    </>
  );
};

const Counter2 = () => {
  console.log("count2 render");

  const { count2, setCount2 }: any = useContext(StateContext);

  return (
    <>
      <div>Count2: {count2}</div>
      <button onClick={() => setCount2((n: number) => n + 1)}>setCount2</button>
    </>
  );
};

const Context = () => {
  return (
    <>
      <StateProvider>
        <Counter1 />
        <Counter2 />
      </StateProvider>
    </>
  );
};

export default React.memo(Context);
