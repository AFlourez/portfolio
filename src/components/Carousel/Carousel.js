// src/components/Carousel/Carousel.js
import React, { useState } from 'react';
import './Carousel.scss';
import { projects } from '../../data/projects';
import Slide from '../Slide/Slide';
import SlideIndicator from '../SlideIndicator/SlideIndicator';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverDirection, setHoverDirection] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="carousel">
      <Slide
        image={projects[currentIndex].image}
        title={projects[currentIndex].title}
        description={projects[currentIndex].description}
        lienGitHub={projects[currentIndex].lienGitHub}
        onPrev={prevSlide}
        onNext={nextSlide}
        hoverDirection={hoverDirection}
        setHoverDirection={setHoverDirection}
      />

      <SlideIndicator currentIndex={currentIndex} totalSlides={projects.length} />
    </div>
  );
};

export default Carousel;
