import React from "react";
import Line from "@ant-design/charts/lib/line";
import { thousands } from "../../utils/index.js";

const CuLine = ({ data, latestBlock }) => {
  const formatData = data.map((item, index) => {
    return { height: latestBlock - 19 + index, value: item };
  });

  var config = {
    data: formatData,
    smooth: true,
    xField: "height",
    yField: "value",
    xAxis: false,
    nice: true,
    appendPadding: [5, 0, 0, 0],
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
    tooltip: {
      showTitle: true,

      customContent: function customContent(title, items) {
        var _field$data;
        var field = items === null || items === void 0 ? void 0 : items[0];
        var htmlStr = '<div style="margin:10px 0;font-weight:700;">'.concat(
          field === null || field === void 0
            ? void 0
            : (_field$data = field.data) === null || _field$data === void 0
            ? void 0
            : "Block Height:" + thousands(_field$data.height),
          '</div><div class="g2-tooltip-items">'
        );
        items.forEach(function (item) {
          htmlStr += '<div class="g2-tooltip-item" style="margin-bottom:8px;display:flex;">\n'
            .concat(
              '<span class="g2-tooltip-item-value">' +
                "Total Spent: " +
                thousands(item.value) +
                " Sats" +
                "</span>\n"
            )
            .concat("</div>");
        });
        htmlStr += "</div>";
        //console.log(htmlStr)
        return htmlStr;
      },
    },
  };

  return <Line {...config} />;
};

export default CuLine;
