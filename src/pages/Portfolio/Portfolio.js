import React from 'react';
import './Portfolio.scss';
import Carousel from '../../components/Carousel/Carousel'; // Assurez-vous que le chemin d'importation est correct

const Portfolio = () => {
  return (
    <div className="portfolio">
        <h2>Mes Projets</h2>
      <Carousel />
    </div>
  );
};

export default Portfolio;

