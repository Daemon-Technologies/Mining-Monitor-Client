import { Col, Row, Card, Table } from "antd";
import { Statistic } from "antd";
import MultiLine from "./MultiLine";
import SingleLine from "./SingleLine";
import { thousands } from "../utils/index.js";

import CuScatter from "./CuScatter";
const columns = [
  {
    title: "Height",
    dataIndex: "stacks_block_height",
    key: "stacks_block_height",
    width: 10,
  },
  {
    title: "Winner STX Address",
    dataIndex: "stx_address",
    key: "stx_address",
    ellipsis: true,
    width: 53,
  },
  {
    title: "Burn-Fee",
    dataIndex: "burn_fee",
    key: "burn_fee",
    width: 15,
  },
];

const minerTable = ({ data }) => {
  //            <MultiLine data={data.minersBurnFee20}/>
  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <a className="margin-right">← Previous</a>;
    }
    if (type === "next") {
      return <a className="margin-left">Next →</a>;
    }
    return originalElement;
  }
  let datasource = data.table.map((value, index) => {
    return {
      ...value,
      burn_fee: thousands(value.burn_fee),
      stacks_block_height: thousands(value.stacks_block_height),
    };
  });
  return (
    <Card
      bordered={false}
      bodyStyle={{ padding: "20px 24px 8px 24px" }}
      style={{ height: 600 }}
      hoverable
      title={"Burn Fee Table"}
    >
      <Row style={{ marginBottom: 10 }}>
        <Col sm={24} xs={24} style={{ marginBottom: 10, height: 200 }}>
          <CuScatter data={data.minersBurnFee20} />
        </Col>
      </Row>
      <Table
        size="small"
        columns={columns}
        dataSource={datasource}
        pagination={{
          pageSize: 5,
          position: ["bottomCenter"],
          itemRender: itemRender,
        }}
        rowClassName="table-row"
        rowKey={(item) => item.stacks_block_height}
      />
    </Card>
  );
};

export default minerTable;
