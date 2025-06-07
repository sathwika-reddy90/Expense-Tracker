import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ExpensePage from './landing_page/expense/ExpensePage';
import OverviewPage from './landing_page/overview/OverviewPage';
import TrackingPage from './landing_page/tracking/TrackingPage';
import PredictionPage from './landing_page/prediction/PredictionPage';
import HistoryPage from './landing_page/history/HistoryPage';
import LoginPage from './landing_page/login/LoginPage'; 
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/expense" element={<ExpensePage/>} />
      <Route path="/overview" element={<OverviewPage/>} />
      <Route path="/tracking" element={<TrackingPage/>} />
      <Route path="/prediction" element={<PredictionPage/>} />
      <Route path="/history" element={<HistoryPage/>} />
      <Route path="/login" element={<LoginPage/>} /> 
    </Routes>
    <Footer/>
  </BrowserRouter>
);
 