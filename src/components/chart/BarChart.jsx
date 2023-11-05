import React, { memo } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

function CustomBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data[0].graph}
        barSize={20}
        margin={{ left: 16, right: 16 }}
      >
        <Tooltip cursor={{ fill: "transparent" }} />
        <XAxis
          dataKey="_id"
          type="category"
          axisLine={false}
          tickLine={false}
          scale="point"
          tick={{ fontSize: "13px", fill: "var(--secondary-text-color)" }}
        />
        <Bar dataKey="total" fill="var(--highlight-bg)" radius={[5, 5, 5, 5]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default memo(CustomBarChart);
