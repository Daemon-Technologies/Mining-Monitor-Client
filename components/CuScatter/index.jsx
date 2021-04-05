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
            : ''.concat("Address : ", _field$data.address) ,
          '</div><div class="g2-tooltip-items">',
        );
        items.forEach(function (item) {
          //console.log(item)
          if (item.name == "address") {

          }
          else{
            htmlStr += '<div class="g2-tooltip-list-item" style="margin-bottom:8px;">\n'
              .concat(`<span class="g2-tooltip-maker" style="background: ${item.color}; width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 8px"> </span>\n`)
              .concat(`<span class="g2-tooltip-name" > ${item.name} : </span>\n`) 
              .concat('<span class="g2-tooltip-value" style="display: inline-block; float: right; margin-left: 10px;">' + thousands(item.value) + '</span>\n')
              .concat('</div>');
          }
        });
        htmlStr += '</div>';
        //console.log(htmlStr)
        return htmlStr;
      },
    },
  };
  return <Scatter {...config} />;
};

export default CuScatter;
