import React from 'react';

const ScrollButton = ({ targetId, children }) => {
  const handleScroll = () => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleScroll} className="scroll-button">
      {children}
    </button>
  );
};

export default ScrollButton;
