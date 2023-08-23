import React from "react";

const TooltipComp = ({ pointInfo }) => {
  return (
    <div>
      <div className="tooltip-header">{pointInfo.argumentText}</div>
      <div className="tooltip-body">
        <div className="series-name">
          <span className="top-series-name">
            {pointInfo.points[0].seriesName}: {pointInfo.points[0].valueText}
          </span>
        </div>
        <div className="series-name">
          <span className="bottom-series-name">
            {pointInfo.points[1].seriesName}: {pointInfo.points[1].valueText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TooltipComp;
