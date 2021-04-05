import React, { useState, useEffect } from "react";
import Bar from "@ant-design/charts/lib/bar";
import { getColor } from "../../utils/index.js";

const DemoBar = ({ data }) => {
  let datasource = data.map((value, index) => {
    return {
      ...value,
      RR: (parseFloat(value.RR)*100),
    };
  });
  datasource.sort((a, b) => b.RR - a.RR);
  var config = {
    data: datasource,
    xField: "RR",
    yField: "address",
    seriesField: 'address',
    xAxis: {
      line: { style: { stroke: "#e1e9ef" } },
      label: {
        formatter: function formatter(v){
          return ''.concat(parseFloat(v), "%")
        }
      }
    },
    yAxis: {
      label: {
        formatter: function formatter(v){
          return ''.concat(v.slice(0,10), "...")
        }
      }
    },
    tooltip:{
      showTitle: true,
      
      customContent: function customContent(title, items) {
        var _field$data;
        var field = items === null || items === void 0 ? void 0 : items[0];
        var formatterInfo = {
          RR: function UV(value) {
            return value + '%';
          },
        };
        var htmlStr = '<div style="margin:10px 0;font-weight:700;">'.concat(
          field === null || field === void 0
            ? void 0
            : (_field$data = field.data) === null || _field$data === void 0
            ? void 0
            : _field$data.address,
          '</div><div class="g2-tooltip-items">',
        );
        items.forEach(function (item) {
          htmlStr += '<div class="g2-tooltip-item" style="margin-bottom:8px;display:flex;">\n'
            .concat(`<span class="g2-tooltip-item-maker" style="background: ${item.color}; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px"> </span>\n`)
            .concat('<span class="g2-tooltip-item-label" style="margin-right: 12px;"> Rate of Return </span>\n') 
            .concat('<span class="g2-tooltip-item-value">' + parseFloat(item.value).toFixed(1) + "%" + '</span>\n')
            .concat('</div>');
        });
        htmlStr += '</div>';
        //console.log(htmlStr)
        return htmlStr;
      },
      
    },
    legend: false,
  };
  return <Bar {...config} />;
};

export default DemoBar;
