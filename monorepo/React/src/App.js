import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import OptionDetail from './pages/optionDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/option/:index" element={<OptionDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Header currentStep={'1'} />
      <Body />
      <Footer />
    </>
  );
}

export default App;