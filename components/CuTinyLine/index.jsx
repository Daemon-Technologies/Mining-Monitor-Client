import React, { useState, useEffect } from "react";
import TinyLine from "@ant-design/charts/lib/tinyLine";

const CuTinyLine = ({ data }) => {
  console.log(data);
  var config = {
    height: 60,
    width: 300,
    autoFit: true,
    data,
    smooth: true,
    tooltip: {
      showTitle: true,
      showContent: true,
      position: "top",
      showCrosshairs: true,
      customContent: function customContent(title, data) {
        let value = "";
        if (data.length) {
          value = data[0].value;
          console.log(value);
        }
        return `<div class='tooltip-container'>${value}</div>`;
      },
    },
  };
  return <TinyLine {...config} />;
};

export default CuTinyLine;
