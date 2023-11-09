import React from "react";
import { sendRequest } from "../../request";

export default function index() {
  const arr = [1, 2, "hello", 34, 2, 5, 34, "hello", 2];
  const unique = (arr: Iterable<unknown> | null | undefined) => {
    return [...new Set(arr)];
  };
  const unique1 = (arr: any) => {
    return arr.filter((item: any, index: any, array: string | any[]) => {
      return array.indexOf(item) === index;
    });
  };

  // 设计一个函数，可以限制请求的并发，同时请求结束之后，调用callback函数
  // sendRequest(requestList:,limits,callback):void
  sendRequest(
    [
      () => request("1"),

      () => request("2"),

      () => request("3"),

      () => request("4"),
    ],

    3, //并发数

    (res: any) => {
      console.log(res);
    }
  );

  // 其中request 可以是：
  function request(url: string, time = 1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("请求结束：" + url);
        if (Math.random() > 0.5) {
          resolve("成功");
        } else {
          reject("错误;");
        }}, time * 1e3);
    });
  }

  console.log(unique(arr));
  console.log(unique1(arr));
  return <div>1111111111</div>;
}
