import React, { useState, useEffect } from "react";
import TinyLine from "@ant-design/charts/lib/tinyLine";

const CuTinyLine = ({ data }) => {
  //console.log(data);
  var config = {
    height: 60,
    width: 300,
    autoFit: true,
    data,
    smooth: true,
    lineStyle: {
      fill: "#fff",
      stroke: "#007AFF",
      lineWidth: 3,
    },
    tooltip: {
      showTitle: true,
      showContent: true,
      position: "top",
      showCrosshairs: true,
      customContent: function customContent(title, data) {
        let value = "";
        if (data.length) {
          value = data[0].value;
        }
        return `<div class='tooltip-container'>${value}</div>`;
      },
    },
  };
  return <TinyLine {...config} />;
};

export default CuTinyLine;
