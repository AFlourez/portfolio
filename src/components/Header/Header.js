import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEye, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const scrollToSection = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo-header">
        <h1>A</h1>
      </div>
      <nav className="header-links">
        <ul>
          <li>
            <a onClick={() => scrollToSection('home')}>
              <FontAwesomeIcon icon={faHouse} className="icon" />
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('portfolio')}>
              <FontAwesomeIcon icon={faEye} className="icon" />
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('about')}>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')}>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
          </li>
        </ul>
      </nav>
      <nav className="header-links-social">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/alexis-flourez-6a708b1b0/" id="linkedin" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/AFlourez" id="gitHub" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} className="icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
