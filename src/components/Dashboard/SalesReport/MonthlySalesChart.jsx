import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Helper function to get month name from month code
const getMonthName = (monthCode) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const year = monthCode.year;
  const month = monthCode.month - 1; // Adjust for zero-based indexing
  return `${months[month]} ${year}`;
};

const MonthlySalesChart = ({ data }) => {
  const chartData = data.map((entry) => ({
    month: getMonthName(entry._id),
    totalSales: entry.totalSales,
  }));

  return (
    <LineChart width={500} height={300} data={chartData}>
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="totalSales" name="Total Sales" stroke="#8884d8" />
    </LineChart>
  );
};

export default MonthlySalesChart;
