// src/components/Carousel/Carousel.jsx
import React, { useState } from 'react';
import { projects } from '../../data/projects';
import "../Carousel/Carousel.scss"
import SlideShow from '../SlideShow/SlideShow';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="carousel">
      <SlideShow
        currentIndex={currentIndex}
        totalSlides={projects.length}
        projects={projects}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </div>
  );
};

export default Carousel;
