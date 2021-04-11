import React from "react";
import Pie from "@ant-design/charts/lib/pie";
import { thousands } from "../../utils/index.js";
const DemoPie = ({ data }) => {
  let datasource = data.map((value, index) => {
    return { ...value };
  });
  datasource.sort((a, b) => b.number - a.number);
  var config = {
    data: datasource,
    appendPadding: 0,
    width: 545,
    height: 500,
    angleField: "number",
    radius: 0.8,
    innerRadius: 0.64,
    legend: {
      layout: "vertical",
      position: "bottom",
      itemWidth: 200,
      itemName: {
        formatter: (text, item) => {
          const formatName = `${text.slice(0, 10)}......${text.slice(-10)}`;
          return formatName;
        },
      },
      pageNavigator: {  // 分页按钮配置，但是没起效果。
        marker: {
          style: {
            // 非激活，不可点击态时的填充色设置
            inactiveFill: "#ccc",
            inactiveOpacity: 0.45,
            // 默认填充色设置
            fill: "#1a90ff",
            opacity: 0.8,
            size: 50,
          },
        },
        text: {
          style: {
            fill: "#1a90ff",
            fontSize: 8,
          },
        },
      },
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
    tooltip: {
      showTitle: true,
      customContent: function customContent(title, items) {
        var _field$data;
        var field = items === null || items === void 0 ? void 0 : items[0];
        var formatterInfo = {
          RR: function UV(value) {
            return value + "%";
          },
        };
        var htmlStr = '<div class="g2-tooltip-items">';
        items.forEach(function (item) {
          //console.log(item)
          if (item.name == "address") {
          } else {
            htmlStr += '<div class="g2-tooltip-list-item" style="margin-bottom:8px;">\n'
              .concat(
                `<span class="g2-tooltip-maker" style="background: ${item.color}; width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 2px"> </span>\n`
              )
              .concat(
                `<span class="g2-tooltip-name" > ${item.name} Blocks Won:</span>\n`
              )
              .concat(
                '<span class="g2-tooltip-value" style="display: inline-block; float: right; margin-left: 5px;">' +
                  thousands(item.value) +
                  "</span>\n"
              )
              .concat("</div>");
          }
        });
        htmlStr += "</div>";
        //console.log(htmlStr)
        return htmlStr;
      },
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
