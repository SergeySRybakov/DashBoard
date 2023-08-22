import React from "react";

const TooltipComp = ({ pointInfo }) => {
  return {
    html: `<div>
      <div className="tooltip-header">${pointInfo.argumentText}</div>
      <div className="tooltip-body">
        <div className="series-name">
          <span className="top-series-name">${pointInfo.points[0].seriesName}</span>:{" "}
        </div>
        <div className="value-text">
          <span className="top-series-value">${pointInfo.points[0].valueText}</span>
        </div>
        <div className="series-name">
          <span className="bottom-series-name">${pointInfo.points[1].seriesName}</span>:{" "}
        </div>
        <div className="value-text">
          <span className="bottom-series-value">${pointInfo.points[1].valueText}</span>%{" "}
        </div>
      </div>
    </div>`,
  };
};

export default TooltipComp;
