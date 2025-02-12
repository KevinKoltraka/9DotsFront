import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./main.scss";

const data = [
  { month: "Jan", score: 45 },
  { month: "Feb", score: 50 },
  { month: "Mar", score: 60 },
  { month: "Apr", score: 75 },
  { month: "May", score: 85 },
];

const ReputationChart = () => {
  return (
    <div className="chart-container">
      <h3>Reputation Progress</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReputationChart;
