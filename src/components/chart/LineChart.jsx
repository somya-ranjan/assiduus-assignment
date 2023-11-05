import React, { memo } from "react";
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from "recharts";

function CustomLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data[0].graph}
        margin={{ left: 8, right: 8 }}
      >
        <XAxis
          dataKey="_id"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: "13px", fill: "var(--secondary-text-color)" }}
        />
        <Tooltip />
        <Line
          type={"monotone"}
          dataKey="total"
          stroke="var(--highlight-bg)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default memo(CustomLineChart);
