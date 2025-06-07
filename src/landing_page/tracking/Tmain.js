import React from 'react';

function Tmain() {
  const containerStyle = {
    maxWidth: '600px',
    margin: '3rem auto',
    fontFamily: 'Segoe UI, sans-serif',
    background: '#fefefe',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '2rem',
    color: '#222',
    textAlign: 'center',
  };

  const categoryStyle = {
    marginBottom: '1.8rem',
  };

  const categoryNameStyle = {
    fontWeight: '600',
    fontSize: '1.2rem',
    color: '#444',
    marginBottom: '0.3rem',
  };

  const amountStyle = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '0.3rem',
  };

  const progressBarBackground = {
    width: '100%',
    height: '12px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '0.5rem',
  };

  const progressBarFill = (percent) => ({
    width: `${percent}%`,
    height: '100%',
    backgroundColor: '#808080', // Gray color
    borderRadius: '8px 0 0 8px',
    transition: 'width 0.5s ease-in-out',
  });

  const remainingStyle = {
    fontSize: '0.9rem',
    color: '#999',
  };

  const budgetData = [
    { category: 'Food', spent: 299, budget: 5000 },
    { category: 'Transport', spent: 0, budget: 3000 },
    { category: 'Entertainment', spent: 0, budget: 2000 },
    { category: 'Bills', spent: 599, budget: 10000 },
    { category: 'Housing', spent: 0, budget: 15000 },
    { category: 'Other', spent: 0, budget: 5000 },
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Budget Tracking</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
        Monitor your spending against budgets
      </p>

      {budgetData.map(({ category, spent, budget }) => {
        const percentSpent = ((spent / budget) * 100).toFixed(0);
        const remaining = budget - spent;

        return (
          <div key={category} style={categoryStyle}>
            <div style={categoryNameStyle}>{category}</div>
            <div style={amountStyle}>
              ₹ {spent.toLocaleString()} of ₹ {budget.toLocaleString()}
            </div>
            <div style={progressBarBackground}>
              <div style={progressBarFill(percentSpent)} />
            </div>
            <div style={amountStyle}>{percentSpent}% spent</div>
            <div style={remainingStyle}>₹ {remaining.toLocaleString()} remaining</div>
          </div>
        );
      })}
    </div>
  );
}

export default Tmain;
