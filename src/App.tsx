import { Button } from "antd";
import React, { useCallback, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
// import Excel from './excel';
import routes from "./router";
import { useRoutes } from "react-router";
import { useNavigate } from "react-router-dom";
// const Excel = React.lazy(
//   () => import(/* webpackChunkName: "lazyComponent"*/ "./excel")
// );

function App() {
  const [messages] = useState([
    { id: "001", title: "消息1", content: "锄禾日当午", hishty: "demo" },
    { id: "002", title: "消息2", content: "汗滴禾下土", hishty: "details" },
    { id: "003", title: "消息3", content: "谁知盘中餐", hishty: "mine" },
    { id: "004", title: "消息4", content: "粒粒皆辛苦", hishty: "GGGG" },
  ]);
  const [store, setStore] = useState(false);
  const navigate = useNavigate();

  const element = useRoutes(routes);
  const debounce = (func: (arg0: any) => void, wait = 800) => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    return function (e: any) {
      clearTimeout(timeout); // 每次触发时先清除上一次的定时器,然后重新计时
      timeout = setTimeout(() => {
        func(e);
      }, wait);
      // 多少ms后, 执行函数;
    };
  };

  const Buttons = useCallback(() => {
    const load = useCallback(
      debounce((e) => toParams(e), 500),
      []
    );
    const toParams = (item: {
      id: any;
      title: any;
      content: any;
      hishty: any;
    }) => {
      console.log(1);

      const { id, title, content, hishty } = item;
      navigate(hishty, {
        replace: false,
        state: {
          id: id,
          title: title,
          content: content,
        },
      });
    };

    return (
      <>
        {messages.map((item) => {
          return (
            <div key={item.id}>
              <Button onClick={() => load(item)}>{item.hishty}</Button>
            </div>
          );
        })}
      </>
    );
  }, [messages]);

  const yincang = () => {
    setStore(!store);
  };

  return (
    <div className="App">
      <React.Suspense fallback={<div>正在加载中</div>}>
        <div hidden={store}>
          <Buttons />
        </div>
        <Button onClick={yincang}>{!store ? "↑" : "↓"}</Button>
        <Button
          onClick={() => {
            navigate("");
          }}
        >
          home
        </Button>
        {element}
      </React.Suspense>
    </div>
  );
}

export default App;
