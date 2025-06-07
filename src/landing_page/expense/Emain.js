import React, { useState } from 'react';

function Emain() {
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    description: '',
    category: 'Food',
    autoCategorize: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expense added:", formData);
    // Add submission logic here (e.g. send to backend or update state)
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    minHeight: '100vh',
    background: 'linear-gradient(to right,rgb(243, 249, 250), #ffffff)',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1.2rem',
  };

  const labelStyle = {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#333',
  };

  const inputStyle = {
    padding: '0.8rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const checkboxStyle = {
    marginRight: '0.5rem',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.8rem 1.2rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#007bff' }}>
          Add New Expense
        </h2>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Shopping">Shopping</option>
            <option value="Health">Health</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div style={{ ...inputGroupStyle, flexDirection: 'row', alignItems: 'center' }}>
          <input
            type="checkbox"
            name="autoCategorize"
            checked={formData.autoCategorize}
            onChange={handleChange}
            style={checkboxStyle}
          />
          <label style={labelStyle}>Enable AI Auto-Categorization</label>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default Emain;
