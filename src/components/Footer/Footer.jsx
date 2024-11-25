import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Flourez Alexis - Tous droits réservés</p>
      <ul className="footer-links">
        <li><a href="#about">À propos</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
