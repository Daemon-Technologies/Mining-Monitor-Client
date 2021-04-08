import React from "react";
import Line from "@ant-design/charts/lib/line";

const CuLine = ({ data }) => {
  const formatData = data.map((item, index) => {
    return { index, value: item };
  });

  var config = {
    data: formatData,
    smooth: true,
    xField: "index",
    yField: "value",
    xAxis: false,
    nice: true,
    //  {
    //   label: null,
    //   grid: null,
    //   tickLine: null,
    //   subTickLine:null
    // },
    yAxis: {
      label: null,
      grid: null,
      tickLine: null,
    },
    lineStyle: {
      fill: "#fff",
      stroke: "#007AFF",
      lineWidth: 3,
    },
  };

  return <Line {...config} />;
};

export default CuLine;
