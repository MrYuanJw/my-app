// index.tsx
import { Button, Table } from "antd";
import React, { useState, useEffect, useMemo } from "react";
import ExcelJS from "exceljs";
import FileSaver from "file-saver";
var dataSource: any[] = [];

for (let i = 1; i < 30000; i++) {
  dataSource.push({
    key: i,
    name: `name-${i}`,
    age: 18,
    tag: "小羽同学",
    value1: `value1-${i}`,
    value2: `value2-${i}`,
    value3: `value3-${i}`,
  });
}

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "标签",
    dataIndex: "tag",
    key: "tag",
  },
  {
    title: "value1",
    dataIndex: "value1",
    key: "value1",
  },
  {
    title: "value2",
    dataIndex: "value2",
    key: "value2",
  },
  {
    title: "value3",
    dataIndex: "value3",
    key: "value3",
  },
];
console.log(44444);

export default function Excel() {
  const Newhistory = useMemo(() => {
    const { content } = history.state.usr;
    return content;
  }, [history]);
  console.log(history);
  
  const Time = () => {
    const [showTime, setShowTime] = useState(Date.now());
    const updateShowTime = () => {
      setShowTime(Date.now());
      requestAnimationFrame(updateShowTime);
    };
    useEffect(() => {
      updateShowTime();
    }, []);
    return (
      <>
        <p>{showTime}</p>
      </>
    );
  };

  // 主线程导出Excel
  const mainExportExcel = () => {
    // 创建工作簿
    const workbook = new ExcelJS.Workbook();
    // 添加工作表
    const worksheet = workbook.addWorksheet("sheet1");

    // 设置表格内容
    const _titleCell = worksheet.getCell("A1");
    _titleCell.value = "Hello ExcelJS!";

    const workBookColumns = columns.map((item) => ({
      header: item.title,
      key: item.key,
      width: 32,
    }));
    worksheet.columns = workBookColumns;
    worksheet.addRows(dataSource);

    // 导出表格
    workbook.xlsx.writeBuffer().then((buffer) => {
      let _file = new Blob([buffer], {
        type: "application/octet-stream",
      });
      FileSaver.saveAs(_file, "ExcelJS.xlsx");
    });
  };
  const OnMYYworker = () => {
    console.log("1");
    // const Mk = new MYYworker()
    // const y: any = 'jjjj', k: any = '3333333'
    // Mk.postMessage({ y, k })
    // Mk.onmessage = (e: any) => {
    //     console.log(e, '1111111');
    // }
    // console.log(Mk);
  };
  // 子线程导出Excel
  const workerExportExcel = async () => {
    const file: any = await new Promise((resolve) => {
      // const myWorker = new MMworker();
      const myWorker = new Worker(
        new URL("./excel.worker.ts", import.meta.url)
      );
      myWorker.postMessage({
        columns,
        dataSource,
      });
      myWorker.onmessage = (e: { data: { data: unknown } }) => {
        resolve(e.data.data); // 关闭worker线程
        myWorker.terminate();
      };
    });
    FileSaver.saveAs(file, "ExcelJS.xlsx");
  };

  return (
    <div>
      <Button onClick={mainExportExcel}>导出全部</Button>
      <Button onClick={workerExportExcel}>worker导出全部</Button>
      <Button onClick={OnMYYworker}>MYYworker</Button>
      <div>{Newhistory}</div>
      <Time />
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
