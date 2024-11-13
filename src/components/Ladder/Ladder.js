import React from 'react';
import './Ladder.scss';

const Ladder = ({ activeSection }) => {
  return (
    <div className="ladder">
      <div className={`platform ${activeSection === 'home' ? 'active' : ''}`} id="home" />
      <div className={`platform ${activeSection === 'portfolio' ? 'active' : ''}`} id="portfolio" />
      <div className={`platform ${activeSection === 'about' ? 'active' : ''}`} id="about" />
      <div className={`platform ${activeSection === 'contact' ? 'active' : ''}`} id="contact" />
    </div>
  );
};

export default Ladder;
