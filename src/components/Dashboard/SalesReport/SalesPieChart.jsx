import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const SalesPieChart = ({ data }) => {
  const presentMonthSale = data.presentMonthSale || 0;
  const previousMonthSale = data.previousMonthSale || 0;

  const pieData = [
    { name: 'Present Month', value: presentMonthSale },
    { name: 'Previous Month', value: previousMonthSale },
  ];

  const COLORS = ['#0088FE', '#FFBB28']; // Colors for the pie chart

  return (
    <PieChart width={500} height={300}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default SalesPieChart;
