import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Cmain() {
  const data = [
    { category: 'Entertainment', amount: 450 },
    { category: 'Bills', amount: 600 },
    { category: 'Food', amount: 750 },
  ];

  const containerStyle = {
    maxWidth: '600px',
    margin: '3rem auto',
    fontFamily: 'Segoe UI, sans-serif',
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '2rem',
    color: '#222',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Spending by Category</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip formatter={(value) => `₹ ${value}`} />
          <Bar dataKey="amount" fill="#808080" barSize={50} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Cmain;
