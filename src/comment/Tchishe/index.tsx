import React, { createContext, Suspense } from "react";
import Zizhujian from "./zizhujian";
import { Button } from "antd";
export const GuaContext: any = createContext(null);

const App = () => {
  const obj: any = {
    prop: 42,
    data: {
      num: 99,
    },
  };
  console.log("666666666666666666");

  Object.freeze(obj);
  var obj1: any = {
    a: 1,
    b: 2,
    c: 3,
  };
  obj1[Symbol.iterator] = function* () {
    var keys = Object.keys(obj1);
    for (var k of keys) {
      yield [k, obj1[k]];
    }
  };
  const obj2 = { ...obj1 };
  obj1.b = 88888;
  obj2.a = "552g";
  console.log(obj1, obj2);
  console.log(obj);

  for (var [k, v] of obj1) {
    console.log(k, v);
  }

  obj.data.num = 33;
  // Throws an error in strict mode

  console.log(obj.data.num);
  // Expected output: 42
  const fun1 = (a: number, b: number) => {
    return a + b;
  };
  fun1(1, 2);
  const arr = [1, 2, 3];
  arr.push(8, 9);
  let arrr = arr.concat(5, [6]);
  console.log(arrr);
   const map1 = new Map([["dgfg",124],["dgfg1",124]])
   const set1 = new Set(["dgfg",124,124,124,124,'ddadsgfqqq'])
   console.log(set1);
   map1.set('ggggh',1)
   console.log(map1);
   map1.forEach((e,i)=>{
    console.log(e,i);
   })
   set1.forEach((e,i)=>{
    console.log(e,i);
    
   })
  arr.shift();
  arr.splice(1, 1, 2);
  arr.slice(1, 3);
  console.log(arr);

  const Dome3 = () => {
    console.log("====================================");
    console.log("dome3测试");
    console.log("====================================");
    return (
      <>
        <div>dome3测试</div>
      </>
    );
  };
  const Dome4 = () => {
    console.log("====================================");
    console.log("dome4测试");
    console.log("====================================");
    return (
      <>
        <div>dome4测试</div>
      </>
    );
  };
  const nestedArray = [1, [2, [3, 4], 5], 6];

  const DiArray = (arr: any[]) => {
    let NewArray: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        NewArray = NewArray.concat(DiArray(arr[i]));
      } else {
        NewArray.push(arr[i]);
      }
    }
    return NewArray;
  };
  console.log(DiArray(nestedArray));

  const BTn = () => {
    new Array(100000).fill(1);
    new Array(20000).fill(1);
  };
  return (
    <>
      <div>
        <div>````````````````````````````</div>
        <Suspense fallback={<div>Loading...</div>}>
          <Zizhujian />
        </Suspense>
      </div>

      <Dome3 />

      <Dome4></Dome4>
      <Button onClick={BTn}>测试</Button>
    </>
  );
};

export default App;
