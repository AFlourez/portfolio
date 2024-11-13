// src/components/Carousel/SlideIndicator.js
import React from 'react';
import './SlideIndicator.scss';

const SlideIndicator = ({ currentIndex, totalSlides }) => {
  return (
    <div className="slide-indicator">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <span
          key={index}
          className={`dot ${index === currentIndex ? 'active' : ''}`}
        ></span>
      ))}
    </div>
  );
};

export default SlideIndicator;
