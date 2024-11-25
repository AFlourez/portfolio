import React, { useState } from 'react';
import './Carousel.scss';
import { projects } from '../../data/projects';
import Slide from '../Slide/Slide';
import SlideIndicator from '../SlideIndicator/SlideIndicator';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  //Si clique sur rightArrow (nextSlide), alors passer a l'image suivante avec "animation: 3s ease-in 1s infinite reverse both running slidein;"
  // comme paramètre si clique sur leftArrow (prevSlide) alors aller a l'image précedente avec "animation: 3s linear 1s infinite running slidein;"


  return (
    <div className="carousel">
          <Slide
            image={projects[currentIndex].image}
            title={projects[currentIndex].title}
            description={projects[currentIndex].description}
            lienGitHub={projects[currentIndex].lienGitHub}
            lienSite={projects[currentIndex].lienSite}
            technologies={projects[currentIndex].technoprojet}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
      <SlideIndicator currentIndex={currentIndex} totalSlides={projects.length} />
    </div>
  );
};

export default Carousel;
