import React from 'react';

function Header({ currentStep }) {
  return (
    <header>
      <h3>Chose Services</h3>
      <p>Step {currentStep}/2</p>
    </header>
  );
}

export default Header;
