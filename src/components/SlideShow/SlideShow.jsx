import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';

// Mapping des icônes
const techIcons = {
  HTML: <FontAwesomeIcon icon={faHtml5} />,
  CSS: <FontAwesomeIcon icon={faCss3Alt} />,
  JavaScript: <FontAwesomeIcon icon={faJs} />,
  React: <FontAwesomeIcon icon={faReact} />,
  NodeJs: <FontAwesomeIcon icon={faNode} />,
  Express: <FontAwesomeIcon icon={faServer} />,
  MongoDB: <FontAwesomeIcon icon={faDatabase} />,
};

const Slide = ({ image, title, description, lienGitHub, technologies }) => {
  return (
    <div className="slide">
      <div className="image-container">
        <img src={image} alt={`Image du projet ${title}`} className="slide-image" />
      </div>
      <div className="text-container">
        <h3>{title}</h3>
        <p className="slide-description">{description}</p>
        <div className="technologies-container">
          {technologies.map((tech) => (
            <span key={tech} className="tech-icon">
              {techIcons[tech] || tech}
            </span>
          ))}
        </div>
        <div className="icon-link">
          {lienGitHub && (
            <a href={lienGitHub} className="slide-icon-github" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          )}
          <a href={image} className="slide-icon-image" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faImage} />
          </a>
        </div>
      </div>
    </div>
  );
};

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

const SlideShow = ({ currentIndex, totalSlides, projects, onPrev, onNext }) => {
  const [touchStartX, setTouchStartX] = useState(null); // Position initiale du toucher
  const [touchEndX, setTouchEndX] = useState(null); // Position finale du toucher

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX); // Capturer la position initiale
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX); // Capturer la position actuelle
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const threshold = 50; // Distance minimale pour détecter un swipe

    if (distance > threshold) {
      onNext(); // Swipe vers la gauche
    } else if (distance < -threshold) {
      onPrev(); // Swipe vers la droite
    }

    // Réinitialiser les positions
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="slide-show"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Slide
        image={projects[currentIndex].image}
        title={projects[currentIndex].title}
        description={projects[currentIndex].description}
        lienGitHub={projects[currentIndex].lienGitHub}
        technologies={projects[currentIndex].technoprojet}
      />
      <SlideIndicator currentIndex={currentIndex} totalSlides={totalSlides} />
      <div className="arrow-icon left" onClick={onPrev}>
        {"<"}
      </div>
      <div className="arrow-icon right" onClick={onNext}>
        {">"}
      </div>
    </div>
  );
};

export default SlideShow;
