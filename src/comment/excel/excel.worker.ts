// excel.worker.ts
import ExcelJS from "exceljs";

// onmessage事件
onmessage = (e) => {
  console.log(e);

  const {
    data: { columns, dataSource },
  } = e;
  console.log(111111111111111);

  console.log(columns, dataSource);

  // 创建工作簿
  const workbook = new ExcelJS.Workbook();
  // 添加工作表
  const worksheet = workbook.addWorksheet("sheet1");

  // 设置表格内容
  const _titleCell = worksheet.getCell("A1");
  _titleCell.value = "Hello ExcelJS!";

  const workBookColumns = columns.map((item: { title: any; key: any }) => ({
    header: item.title,
    key: item.key,
    width: 32,
  }));
  console.log('====================================');
  console.log(workBookColumns,'ddddddddddddd');
  console.log('====================================');
  worksheet.columns = workBookColumns;
  worksheet.addRows(dataSource);
  console.log(worksheet,'133333333333');
  console.log(workbook,'444444444444444444444444444444444444444');

  // 导出表格
  workbook.xlsx.writeBuffer().then((buffer) => {
    console.log('====================================');
    console.log(88888888888);
    console.log('====================================');
    let _file = new Blob([buffer], {
      type: "application/octet-stream",
    });
    // 将获取的数据通过postMessage发送到主线程
    self.postMessage({
      data: _file,
      name: "worker test",
    });
    self.close();
  });
};

console.log("%c是是是", "color:#fff; background:#00897b ");

// worker.js（worker线程）
