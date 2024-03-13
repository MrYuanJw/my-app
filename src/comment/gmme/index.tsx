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
        }
      }, time * 1e3);
    });
  }

  console.log(unique(arr));
  console.log(unique1(arr));

  const arr1 = [
    { id: 1, name: "部门A", parentId: 0 },
    { id: 2, name: "部门B", parentId: 1 },
    { id: 3, name: "部门C", parentId: 1 },
    { id: 4, name: "部门D", parentId: 2 },
    { id: 5, name: "部门E", parentId: 2 },
    { id: 6, name: "部门F", parentId: 3 },
  ];
//   [
//     {
//         id: 1,
//         name: '部门A',
//         children: [
//           {
//               id: 2,
//               name: '部门B',
//               children: [
//                   {
//                       id: 4,
//                       name: '部门D',
//                       children: []
//                   },
//                   {
//                       id: 5,
//                       name: '部门E',
//                       children: []
//                   }
//               ]
//           },
//           {
//               id: 3,
//               name: '部门C',
//               children: [
//                 	{
//                       id: 6,
//                       name: '部门F',
//                       children
//                   }
//               ]
//           }
//         ]
//     }
// ]


  function convert(arr: any[]) {
    const map: any = {};
    const tree: any[] = [];

    // 将每个节点以 id 为键存储到 map 对象中
    arr.forEach((item) => {
      map[item.id] = { ...item, children: [] };
    });

    // 遍历数组，将每个节点添加到其父节点的 children 数组中
    arr.forEach((item) => {
      if (item.parentId !== 0) {
        map[item.parentId].children.push(map[item.id]);
      } else {
        tree.push(map[item.id]);
      }
    });
    return tree;
  }

  function convert1(arr: any[]) {
    const nodeParent = new Map();
    const result: any = [];

    // 构建映射关系
    arr.forEach((node: { children: never[]; id: any }) => {
      node.children = [];
      nodeParent.set(node.id, node);
    });
    console.log('====================================');
    console.log(nodeParent);
    console.log('====================================');
    // 构建树形结构
    arr.forEach((node) => {
      const parentId = node.parentId;
      const parentNode = nodeParent.get(parentId);
      console.log('====================================');
      console.log(parentNode);
      console.log('====================================');
      if (parentNode) {
        parentNode.children.push(node);
      } else {
        result.push(node);
      }
    });
    return result;
  }

  console.log("====================================");
  console.log(convert(arr1));
  console.log(convert1(arr1));
  console.log("====================================");
  return <div>1111111111</div>;
}
