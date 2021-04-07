import React, { useState, useEffect } from 'react';
import Pie from '@ant-design/charts/lib/pie';
import {thousands} from "../../utils/index.js"
const DemoPie = ({data}) => {
  
  let datasource = data.map((value, index)=> {
    return {...value}
  })
  datasource.sort((a, b)=>  b.number - a.number )
  var config = {
    data: datasource,
    appendPadding: 10,
    angleField: 'number',
    radius: 0.8,
    innerRadius: 0.54,
    legend:{
      layout:"vertical",
      position: "right",
    },
    colorField: "address",
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
        fontSize: data.length >= 20 ? "10" : data.length >= 10 ? "15" : "20",
      },
      autoRotate: false,
      content: "{value}",
    },
    statistic: {
      title: false,
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
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
        var htmlStr = '<div class="g2-tooltip-items">'
        items.forEach(function (item) {
          //console.log(item)
          if (item.name == "address") {

          }
          else{
            htmlStr += '<div class="g2-tooltip-list-item" style="margin-bottom:8px;">\n'
              .concat(`<span class="g2-tooltip-maker" style="background: ${item.color}; width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 2px"> </span>\n`)
              .concat(`<span class="g2-tooltip-name" > ${item.name} Blocks Won:</span>\n`) 
              .concat('<span class="g2-tooltip-value" style="display: inline-block; float: right; margin-left: 5px;">' + thousands(item.value) + '</span>\n')
              .concat('</div>');
          }
        });
        htmlStr += '</div>';
        //console.log(htmlStr)
        return htmlStr;
      },
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;