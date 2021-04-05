import React, { useState, useEffect } from "react";
import Scatter from "@ant-design/charts/lib/scatter";
import {thousands} from "../../utils/index.js"

const CuScatter = ({ data }) => {
  var config = {
    appendPadding: 30,
    data: data,
    xField: "height",
    yField: "fee",
    colorField: "address",
    size: 5,
    shape: "circle",
    yAxis: {
      label:{
        formatter: function(v){
          return ''.concat(thousands(v), " Sats")
        }
      }
    },
    xAxis: {
      grid: { line: { style: { stroke: "#eee" } } },
      line: { style: { stroke: "#e1e9ef" } },
    },
  };
  return <Scatter {...config} />;
};

export default CuScatter;
