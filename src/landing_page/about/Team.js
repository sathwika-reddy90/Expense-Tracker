import React from 'react';

function Team() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: '#2c3e50',
    textAlign: 'center',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    minWidth: '250px',
    maxWidth: '300px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'scale(1.03)',
  };

  const memberNameStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#34495e',
  };

  const rollNumberStyle = {
    fontSize: '1rem',
    color: '#7f8c8d',
  };

  const teamMembers = [
    { name: 'Boyapally Sindhu Reddy', roll: '23P65A6704' },
    { name: 'Gopu Mary Ashwitha', roll: '22P61A6764' },
    { name: 'Bhukya Sunil', roll: '22P61A6720' }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Our Team</h1>
      <div style={cardContainerStyle}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={memberNameStyle}>{member.name}</div>
            <div style={rollNumberStyle}>{member.roll}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
