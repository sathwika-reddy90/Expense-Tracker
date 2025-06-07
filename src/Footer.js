import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '1rem 2rem',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    fontFamily: 'Segoe UI, sans-serif',
  };

  return (
    <footer style={footerStyle}>
      &copy; {new Date().getFullYear()} Expense AI. All rights reserved.
    </footer>
  );
}

export default Footer;
