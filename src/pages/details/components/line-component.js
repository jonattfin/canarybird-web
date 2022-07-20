import React from "react";
import { Line } from "@nivo/line";
import { NoSsr } from "@mui/material";

const commonProperties = {
  height: 320,
  width: 600,
  margin: { left: 50, bottom: 50 },
  animate: true,
  enableSlices: "x",
};

export default function Component({ data }) {
  return (
    <NoSsr>
      <Line
        {...commonProperties}
        data={data}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          precision: "day",
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: "linear",
        }}
        axisLeft={{
          legend: "linear scale",
          legendOffset: 12,
        }}
        axisBottom={{
          format: "%b %d",
          tickValues: "every 1 month",
          legend: "time scale",
          legendOffset: -12,
        }}
        pointBorderWidth={1}
        pointBorderColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        pointSize={1}
        useMesh={true}
        markers={[
          {
            axis: "y",
            value: 150,
            lineStyle: { stroke: "#FF1493", strokeWidth: 3 },
            legend: "y marker",
            legendOrientation: "vertical",
          },
        ]}
      />
    </NoSsr>
  );
}
