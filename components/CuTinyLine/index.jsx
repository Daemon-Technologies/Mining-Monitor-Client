import React, { useState, useEffect } from 'react';
import  TinyLine  from "@ant-design/charts/lib/tinyLine";

const CuTinyLine = ({ data }) => {
  var config = {
    height: 60,
    width: 300,
    autoFit: true,
    data: data,
    smooth: true,
    tooltip:{
      showTitle: true,
      /*
      customContent: function customContent(title, items) {
        console.log(title,items)
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
          htmlStr += '<div class="g2-tooltip-item" style="margin-bottom:8px;display:flex;justify-content:space-between;">\n                <span class="g2-tooltip-item-label" style="margin-right: 12px;">'
            .concat("Rate of Return", '</span>\n                <span class="g2-tooltip-item-value">')
            .concat(
              parseFloat(item.value).toFixed(1) + "%" + 
              '</span>\n              </div>',
            );
        });
        htmlStr += '</div>';
        return htmlStr;
      },
      */
      
    },
  };
  return <TinyLine {...config} />;
};

export default CuTinyLine;
