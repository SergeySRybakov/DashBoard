import React from "react";
import "./Overview.css";
import TooltipComp from "./Tooltip";
import Chart, {
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Series,
  Tooltip,
  ValueAxis,
  ConstantLine,
  Label,
} from "devextreme-react/chart";

const Overview = ({ i, base, complaintsData }) => {
  let complaintsDataNew = [...complaintsData];

  const data = complaintsDataNew.sort((a, b) => b.count - a.count);
  const totalCount = data.reduce((prevValue, item) => prevValue + item.count, 0);

  let cumulativeCount = 0;

  const dataArray = data.map(item => {
    cumulativeCount += item.count;
    return {
      complaint: item.complaint,
      count: item.count,
      cumulativePercentage: Math.round((cumulativeCount * 100) / totalCount),
    };
  });

  function customizeTooltip(pointInfo) {
    return <Tooltip pointInfo={pointInfo} />;
  }

  function customizePercentageText({ valueText }) {
    return `${valueText}%`;
  }

  return (
    <Chart
      title={base[0] ? base[0] : "Pizza Shop Complaints"}
      dataSource={dataArray}
      palette="Harmony Light"
      id="chart"
    >
      <CommonSeriesSettings argumentField="complaint" />
      <Series
        name="Complaint frequency"
        valueField="count"
        axis="frequency"
        type="bar"
        color="#fac29a"
      />
      <Series
        name="Cumulative percentage"
        valueField="cumulativePercentage"
        axis="percentage"
        type="spline"
        color="#6b71c3"
      />

      <ArgumentAxis>
        <Label overlappingBehavior="stagger" />
      </ArgumentAxis>

      <ValueAxis name="frequency" position="left" tickInterval={base[1] ? base[1] : 300} />

      <ValueAxis
        name="percentage"
        position="right"
        tickInterval={base[2] ? base[2] : 20}
        showZero={true}
        valueMarginsEnabled={false}
      >
        <Label customizeText={customizePercentageText} />
        <ConstantLine value={base[3] ? base[3] : 80} width={2} color="#fc3535" dashStyle="dash">
          <Label visible={false} />
        </ConstantLine>
      </ValueAxis>

      <Tooltip enabled={true} shared={true} customizeTooltip={customizeTooltip} />

      <Legend verticalAlignment="top" horizontalAlignment="center" />
    </Chart>
  );
};

export default Overview;
