import React, { useState } from 'react';

const ToggleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section">
      <h2 onClick={toggle}>
        {title}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>{isOpen ? '▼' : '▶'}</span>
      </h2>
      <div className={`section-content ${isOpen ? 'expanded' : 'collapsed'}`}>
        {children}
      </div>
    </div>
  );
};

export default ToggleSection;
