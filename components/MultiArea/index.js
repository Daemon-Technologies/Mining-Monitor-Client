import { Button } from 'antd';
import { Layout, Menu, Breadcrumb} from 'antd';
import Area  from "@ant-design/charts/lib/area";
import React, { useState, useEffect } from 'react';
import { thousands } from "../../utils/index.js"

const DemoArea = ({data}) => {
  var config = {
    data: data,
    xField: 'height',
    yField: 'burn_fee',
    seriesField: 'address',
    yAxis: {
      nice: true,
      line: { style: { stroke: "#e1e9ef" } },
      label: {
        formatter: function formatter(v){
            return ''.concat(parseInt(v)/1000000000, 'B Sats')
        }
      }
    },
    slider: {
      start: 0.4,
      end: 1,
      trendCfg: { isArea: true },
      style:{
        backgroundColor: "#fff",
        marginTop: 20
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
            : ''.concat("Block Height : ", _field$data.height) ,
          '</div><div class="g2-tooltip-items">',
        );
        items.forEach(function (item) {
          htmlStr += '<div class="g2-tooltip-list-item" style="margin-bottom:8px;">\n'
            .concat(`<span class="g2-tooltip-maker" style="background: ${item.color}; width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 8px"> </span>\n`)
            .concat(`<span class="g2-tooltip-name" > ${item.data.address} : </span>\n`) 
            .concat('<span class="g2-tooltip-value" style="display: inline-block; float: right; margin-left: 20px;">' + thousands(parseInt(item.data.burn_fee)) + " Sats"+ '</span>\n')
            .concat('</div>');
        });
        htmlStr += '</div>';
        //console.log(htmlStr)
        return htmlStr;
      },
      
      
    },
  };
  return <Area {...config} />;
};


export default DemoArea;