import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontFamily: 'Segoe UI, sans-serif',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '1.5rem',
  };

  const linkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  };

  const linkHoverStyle = {
    color: '#1abc9c',
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = linkHoverStyle.color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = linkStyle.color;
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Expense Tracker</div>
      <div style={linkContainerStyle}>
        <Link to="/" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</Link>
        <Link to="/about" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About</Link>
        <Link to="/history" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>History</Link>
        <Link to="/expense" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Expense</Link>
        <Link to="/tracking" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Tracking</Link>
        <Link to="/overview" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Overview</Link>
        <Link to="/prediction" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Prediction</Link>
        <Link to="/login" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
