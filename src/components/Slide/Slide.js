import React from 'react';
import './Slide.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Slide = ({ image, title, description, lienGitHub, onPrev, onNext }) => {
  return (
    <div className="slide">
      <div className="image-container">
        <img src={image} alt={`Image du projet ${title}`} className="slide-image" />
      </div>
      <div className="text-container">
        <h3>{title}</h3>
        <p className="slide-description">{description}</p>
        <a href={lienGitHub} className="slide-icon-github" target='_blank' rel="noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
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
