import React from 'react';

function Hmain() {
  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#eaeaea',
    padding: '1rem',
  };

  const containerStyle = {
    width: '90%',
    maxWidth: '900px',
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f4f4f4',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#ccc',
    color: '#333',
    padding: '12px',
    textAlign: 'left',
    fontSize: '1rem',
  };

  const tdStyle = {
    padding: '12px',
    borderBottom: '1px solid #ddd',
    fontSize: '1rem',
  };

  const buttonStyle = {
    marginRight: '0.5rem',
    padding: '6px 12px',
    fontSize: '0.9rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#3498db',
    color: '#fff',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e74c3c',
    color: '#fff',
  };

  const expenses = [
    {
      date: '04 Jun 2025',
      description: 'Jio Recharge',
      category: 'Bills',
      amount: 599,
    },
  ];

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Expense History</h1>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp, index) => (
              <tr key={index}>
                <td style={tdStyle}>{exp.date}</td>
                <td style={tdStyle}>{exp.description}</td>
                <td style={tdStyle}>{exp.category}</td>
                <td style={tdStyle}>₹ {exp.amount}</td>
                <td style={tdStyle}>
                  <button style={editButtonStyle}>Edit</button>
                  <button style={deleteButtonStyle}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hmain;
