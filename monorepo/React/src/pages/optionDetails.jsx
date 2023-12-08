// src/OptionDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function OptionDetail() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <>
      <Header currentStep={'2'} />
      <div>
        <button className="back-button"  onClick={handleBackToHome}>
          Back to main selection
        </button>
      </div>
      <Footer />
    </>
  );
}

export default OptionDetail;