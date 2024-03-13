import React, { useEffect, useState } from "react";
import VirtualList from "rc-virtual-list";
import { Avatar, List } from "antd";
import { post } from "../../NewRequest";
import axios from "axios";
const ContainerHeight = 400;

const App: React.FC = () => {
  const [data, setData]: any = useState([]);

  const appendData = () => {
    axios
      .all([
        axios({
          url: "https://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true",
        }),
        // axios({
        //   url: "api1" + "_next/data/vzsSTpnlgMD-SRVNe-ISS/index.json",
        // }),
      ])
      .then((data) => {
        console.log(data);
        const [img, data1] = [
          data[0]?.data,
          data[1]?.data.pageProps.homeResult.filter.subjects,
        ];
        console.log("====================================");
        let data_1: any[] = [];
        img.forEach((item: any, id: any) => {
          console.log(item);
          data_1 = [...data_1, { cover: item, id, title: id }];
          // data_1.push();
        });

        setData(data_1);
        console.log(img);
        console.log(data1);
        console.log("====================================");
      });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    post("api1" + "_next/data/vzsSTpnlgMD-SRVNe-ISS/index.json", "", "").then(
      (data: any) => {
        console.log("====================================");
        console.log(data);
        console.log("====================================");
      }
    );
  }, []);
  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

 
  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="id"
        onScroll={onScroll}
      >
        {(item: any) => (
          <List.Item key={item.title}>
            <List.Item.Meta
              avatar={<Avatar src={item.cover} />}
              title={<a href="https://ant.design">{item.title}</a>}
              // description={item.star}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default App;
