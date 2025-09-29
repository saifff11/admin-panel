import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Typography } from "@mui/material";

const CustomLegend = ({ payload }) => {
  const total = payload.reduce((sum, entry) => sum + entry.payload.value, 0);

  return (
    <ul className="tw-list-none tw-p-0 tw-mt-6 tw-space-y-3">
      {payload.map((entry, index) => {
        const percentage = ((entry.payload.value / total) * 100).toFixed(0);
        return (
          <li key={`item-${index}`} className="tw-flex tw-items-center">
            <span
              className="tw-w-3 tw-h-3 tw-rounded-full tw-mr-3"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="tw-text-gray-600 tw-mb-3">{entry.payload.name}</span>
            <span className="tw-font-semibold tw-ml-auto tw-mb-3">{`${percentage}% (${entry.payload.users} Users)`}</span>
          </li>
        );
      })}
    </ul>
  );
};

const UserDistributionChart = ({ data }) => {
  return (
    <div className="tw-bg-white tw-p-4 tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-sm ">
      <Typography variant="h6" className="!tw-font-semibold !tw-mb-6 !tw-mt-2">
        User Distribution
      </Typography>

      <div style={{ width: "100%", height: 200 }} className="!tw-flex !tw-flex-col !tw-items-center">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60} // This creates the donut hole
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <CustomLegend
        payload={data.map((item) => ({ color: item.color, payload: item }))}
      />
    </div>
  );
};

export default UserDistributionChart;
