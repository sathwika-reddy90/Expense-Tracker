import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function Omain() {
  // Data for two years, four months total
  const data = [
    { month: '2024-05', expenses: 650 },
    { month: '2024-06', expenses: 720 },
    { month: '2025-05', expenses: 800 },
    { month: '2025-06', expenses: 997 },
  ];

  // Calculate total expenses across all months
  const totalExpenses = data.reduce((sum, item) => sum + item.expenses, 0);

  const containerStyle = {
    maxWidth: '700px',
    margin: '3rem auto',
    fontFamily: 'Segoe UI, sans-serif',
    background: '#f9f9f9',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };

  const totalStyle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <div style={totalStyle}>Total Expenses: ₹ {totalExpenses.toLocaleString()}</div>
      <div style={headingStyle}>Monthly Expenses (2024 & 2025)</div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `₹ ${value.toLocaleString()}`} />
          <Legend />
          <Bar dataKey="expenses" fill="#808080" barSize={40} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Omain;
