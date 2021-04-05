import { Col, Row, Card } from "antd";
import { Statistic } from "antd";
import MiniArea from "./MiniArea";
import CuTinyLine from "./CuTinyLine";
import {thousands} from '../utils/index.js'

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 8,
  xl: 8,
};

const renderCardContent = (props) => {
  const {
    title,
    titleInfo,
    diagram,
    extraLabel,
    extraValue,
    valueStyle = { fontSize: "0.6rem", color: "#374151" },
    prefix = "",
  } = props;
  return (
    <div>
      <div>
        <Statistic
          title={title}
          value={titleInfo}
          valueStyle={valueStyle}
        />
      </div>
      <div style={{ height: 50 || "auto" }}>{diagram}</div>
      <div style={{ marginTop: 5, paddingTop: 9 }}>
        <div
          style={{
            margin: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          className="flex flex-column"
        >
          <span className="text-sm text-grey">{extraLabel}</span>
          <span className="text-bold text-black text-lg">{thousands(extraValue)}</span>
        </div>
      </div>
    </div>
  );
};

const renderCuCardContent = (props) => {
  const { title, titleInfo, diagram, extraLabel, extraValue } = props;
  return (
    <div>
      <div className="flex text-grey text-sm">
        <div>{title}</div>
        <div className="margin-left-sm">{titleInfo}</div>
      </div>
      <div style={{ height: 50 || "auto", marginTop: "2rem" }}>{diagram}</div>
      <div style={{ marginTop: 5, paddingTop: 9 }}>
        <div
          style={{
            margin: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          className="flex flex-column"
        >
          <span className="text-sm text-grey">{extraLabel}</span>
          <span className="text-bold text-black text-lg">{thousands(extraValue)}</span>
        </div>
      </div>
    </div>
  );
};

const currentStatusRow = ({ data }) => {
  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <Card
          bordered={false}
          bodyStyle={{ padding: "20px 24px 8px 24px" }}
          hoverable
        >
          {renderCardContent({
            title: "Current Bitcoin Block:",
            titleInfo: data.current_block.bitcoin_block.block_height,
            prefix: "#",

            diagram: <div></div>,
            extraLabel: "Current Stacks Height",
            extraValue: data.current_block.stacks_block_height,
          })}
        </Card>
      </Col>
      <Col {...topColResponsiveProps}>
        <Card
          bordered={false}
          bodyStyle={{ padding: "20px 24px 8px 24px" }}
          hoverable
          style={{ height: "100%" }}
        >
          {renderCuCardContent({
            title: "Average Spent per Block:",
            titleInfo: thousands(data.current_burn_fee.avg) + ' Sats',
            diagram: <CuTinyLine data={data.current_burn_fee.data_20} />,
            extraLabel: "Total Spent by Miners",
            extraValue: thousands(data.current_burn_fee.data_20[19]) + ' Sats',
          })}
        </Card>
      </Col>
      <Col {...topColResponsiveProps}>
        <Card
          bordered={false}
          bodyStyle={{ padding: "20px 24px 8px 24px" }}
          hoverable
          style={{ height: "100%" }}
        >
          {renderCuCardContent({
            title: "Average Miner Amount:",
            titleInfo: data.current_miner.avg,
            diagram: <CuTinyLine data={data.current_miner.data_20} />,
            extraLabel: "Participating Miners",
            extraValue: data.current_miner.data_20[19],
          })}
        </Card>
      </Col>
    </Row>
  );
};

export default currentStatusRow;
