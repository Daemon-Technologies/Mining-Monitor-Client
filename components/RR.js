import { Card, Radio, Tooltip } from "antd";
import MultiColoum from "./MultiColoum";
import { useState } from "react";
const RR = ({ data }) => {
  const [queryType, setQueryType] = useState("r100");
  const [dataSource, setDataSource] = useState(data.r100);
  const handleChangeQuery = (e) => {
    setQueryType(e.target.value);
    switch (e.target.value) {
      case "all":
        setDataSource(data.all);
        break;
      case "r1000":
        setDataSource(data.r1000);
        break;
      case "r100":
        setDataSource(data.r100);
        break;
    }
  };
  const notice = <div className="flex flex-column"><span>notice title</span><span>notice content</span></div>;
  return (
    <Card
      bordered={false}
      bodyStyle={{ padding: "20px 24px 8px 24px" }}
      style={{ height: 600 }}
      hoverable
      title={"Rate of Return Per Miner"}
      extra={
        <div className="flex align-center">
          <Tooltip title={notice} color="#fafafa">
            <div className="flex align-center margin-right text-grey ">
              {/* <span>info</span> */}
              <span className="cuIcon-info margin-left-sm"></span>
            </div>
          </Tooltip>

          <div>
            <Radio.Group
              value={queryType}
              onChange={handleChangeQuery}
              buttonStyle="solid"
            >
              <Radio.Button value="r100">Recent 100</Radio.Button>
              <Radio.Button value="r1000">Recent 1000</Radio.Button>
              <Radio.Button value="all">All</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      }
    >
      <MultiColoum data={dataSource} />
    </Card>
  );
};

export default RR;
