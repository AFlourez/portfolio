import React from 'react';
import './Character.scss';

const Character = ({ activeSection }) => {
  // Détermine la position en fonction de la section active
  const getPosition = () => {
    switch (activeSection) {
      case 'home':
        return '0%';
      case 'portfolio':
        return '33%';
      case 'about':
        return '66%';
      case 'contact':
        return '100%';
      default:
        return '0%';
    }
  };

  return (
    <div className="character" style={{ top: getPosition() }}>
      {/* Ici tu pourrais ajouter une image ou un petit personnage stylisé */}
      <span role="img" aria-label="character">👤</span>
    </div>
  );
};

export default Character;
