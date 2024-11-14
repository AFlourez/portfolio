import React, { useState } from 'react';
import './Slide.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const Slide = ({ image, title, description, lienGitHub, onPrev, onNext }) => {
  // Utiliser les positions de départ et de fin du touché
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Commence le swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  // Fin du swipe
  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  // Gère la direction du swipe
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      onNext(); // Swipe vers la gauche, aller au suivant
    }
    if (touchStartX - touchEndX < -50) {
      onPrev(); // Swipe vers la droite, aller au précédent
    }
  };

  return (
    <div
      className="slide"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="image-container">
        <img src={image} alt={`Image du projet ${title}`} className="slide-image" />
      </div>
      <div className="text-container">
        <div>
          <h3>{title}</h3>
          <p className="slide-description">{description}</p>
        </div>
        <div className="icon-link">
          <a href={lienGitHub} className="slide-icon-github" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a href={image} className="slide-icon-image" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faImage} />
          </a>
        </div>
      </div>

      {/* Flèche gauche */}
      <div className="arrow-icon left" onClick={onPrev}>
        {"<"}
      </div>

      {/* Flèche droite */}
      <div className="arrow-icon right" onClick={onNext}>
        {">"}
      </div>
    </div>
  );
};

export default Slide;
