import React from 'react';

function Pmain() {
  const pageStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f2f5',
    padding: '1rem',
  };

  const containerStyle = {
    width: '750px',           // wider container
    fontFamily: 'Segoe UI, sans-serif',
    background: '#fafafa',
    padding: '3rem 3rem 4rem',
    borderRadius: '12px',
    boxShadow: '0 6px 30px rgba(0,0,0,0.15)',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '2.5rem',       // bigger heading
    fontWeight: '700',
    marginBottom: '2rem',
    textAlign: 'center',
  };

  const descriptionStyle = {
    textAlign: 'center',
    marginBottom: '2.5rem',
    color: '#555',
    fontSize: '1.25rem',
  };

  const yAxisLabelsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    padding: '0 1rem',
    color: '#888',
    fontSize: '1rem',          // larger labels
    fontWeight: '600',
  };

  const chartContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '220px',           // taller chart
    padding: '0 1rem',
    borderLeft: '2px solid #999',
    borderBottom: '2px solid #999',
    marginBottom: '2rem',
  };

  const barStyle = (height, color) => ({
    width: '60px',             // wider bars
    height: `${height}px`,
    backgroundColor: color,
    borderRadius: '8px 8px 0 0',
    margin: '0 12px',
    position: 'relative',
  });

  const labelStyle = {
    textAlign: 'center',
    marginTop: '12px',
    fontWeight: '700',
    color: '#444',
    fontSize: '1.1rem',
  };

  const valueTextStyle = {
    fontSize: '1rem',
    color: '#666',
    marginTop: '8px',
  };

  const predictions = [
    {
      month: 'June 2025',
      date: '2025-06-30',
      predicted: 449,
      rangeLow: 382,
      rangeHigh: 517,
      barHeight: 150,
    },
    {
      month: 'July 2025',
      date: '2025-07-31',
      predicted: 449,
      rangeLow: 382,
      rangeHigh: 517,
      barHeight: 150,
    },
    {
      month: 'August 2025',
      date: '2025-08-31',
      predicted: 449,
      rangeLow: 382,
      rangeHigh: 517,
      barHeight: 150,
    },
  ];

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Predictive Analytics</h1>
        <p style={descriptionStyle}>
          Forecasted spending based on your current patterns
        </p>

        <div style={yAxisLabelsStyle}>
          <span>0</span>
          <span>150</span>
          <span>300</span>
          <span>450</span>
          <span>600</span>
        </div>

        <div style={chartContainerStyle}>
          {predictions.map(({ month, date, predicted, rangeLow, rangeHigh, barHeight }) => (
            <div key={date} style={{ textAlign: 'center' }}>
              <div style={{ ...barStyle(barHeight, '#7f8c8d') }} title={`Predicted: ₹${predicted}`}>
                <div
                  style={{
                    position: 'absolute',
                    top: `${(1 - rangeHigh / 600) * 220}px`,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    backgroundColor: '#bdc3c7',
                    opacity: 0.7,
                  }}
                  title={`Range High: ₹${rangeHigh}`}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: `${(1 - rangeLow / 600) * 220}px`,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    backgroundColor: '#bdc3c7',
                    opacity: 0.7,
                  }}
                  title={`Range Low: ₹${rangeLow}`}
                />
              </div>
              <div style={labelStyle}>{month}</div>
              <div style={valueTextStyle}>Predicted: ₹ {predicted}</div>
              <div style={valueTextStyle}>Range: ₹ {rangeLow} - ₹ {rangeHigh}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pmain;
