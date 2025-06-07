import React from 'react';

function Amain() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#2c3e50',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '12px',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    textAlign: 'justify',
    color: '#333',
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Expense Tracker Using Pridictive An</h1>
      <img
        src="/money-management (1).jpg" // Add your image URL here
        alt="Expense Tracker"
        style={imageStyle}
      />
      <p style={paragraphStyle}>
        An AI-based personal expense tracker using predictive analysis is a smart financial management tool that allows users to log, categorize, and visualize their daily or monthly expenses while leveraging machine learning to forecast future spending patterns. The system collects historical transaction data—manually entered or auto-synced—and uses predictive models like linear regression, ARIMA, or LSTM to estimate upcoming expenses, detect unusual spending behavior, and generate personalized budget alerts. By integrating features like automatic recurring expense detection, category-wise analysis, and NLP-based classification of expense descriptions, the tracker can offer insights such as likely end-of-month totals or highlight overspending trends. The frontend can be built using React or Next.js with intuitive graphs using Chart.js or Recharts, while the backend might use Node.js/Express or Django connected to a database like MongoDB or PostgreSQL. AI models can be trained using Python with libraries such as scikit-learn, TensorFlow, or Facebook Prophet, and then served through REST APIs or Flask apps. Additional features like OCR receipt scanning, voice-based input via speech recognition, and savings suggestions based on spending behavior enhance usability. This kind of intelligent expense tracker helps users not only monitor but also improve their financial habits with real-time feedback and forward-looking insights.
      </p>
    </div>
  );
}

export default Amain;
