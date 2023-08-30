import { log } from "console";
import React from "react";

export default function index() {
  var arr = [1, 2, "hello", 34, 2, 5, 34, "hello", 2];
  const unique = (arr: Iterable<unknown> | null | undefined) => {
    return [...new Set(arr)];
  };
  const unique1 = (arr: any) => {
    return arr.filter((item: any, index: any, array: string | any[]) => {
      console.log("====================================");
      console.log(array);
      console.log("====================================");
      return array.indexOf(item) === index;
    });
  };
  console.log('====================================');
  console.log(111111111111);
  console.log('====================================');
  //   const unique2 = (arr: any[], key: string | number) => {
  //     const res = new Map();
  //     return arr.filter((item) => !res.has(item[key]) && res.set(item[key], 1));
  //   };

  console.log(unique(arr));
  console.log(unique1(arr));
  return <div>1111111111</div>;
}
