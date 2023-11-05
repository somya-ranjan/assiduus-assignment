import React, { memo } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

function StackedBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data.graph}
        margin={{ left: 21, right: 21 }}
        barSize={20}
      >
        <Tooltip cursor={{ fill: "transparent" }} />
        <XAxis
          dataKey="_id"
          axisLine={false}
          tickLine={false}
          scale="point"
          tick={{ fontSize: "13px", fill: "var(--secondary-text-color)" }}
        />
        <Bar
          dataKey="out"
          fill="var(--highlight-bg)"
          radius={[0, 0, 5, 5]}
          stackId="a"
        />
        <Bar
          dataKey="in"
          fill="var(--second-highlight-bg)"
          radius={[5, 5, 0, 0]}
          stackId="a"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default memo(StackedBarChart);
