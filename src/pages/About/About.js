import React from 'react';
import ToggleSection from '../../components/ToggleSelection/ToggleSelection.js';
import './About.scss';
import CVImage from '../../asset/CV - Flourez Alexis.png';

const About = () => (
  <div className="about">
    <h1 className="title-about">À propos de moi</h1>
    <div className="content">
      <ToggleSection title="Formation">
        <p>Développement Web (2024)</p>
        <p>Bac professionnel comptabilité (2011-2014)</p>
      </ToggleSection>

      <ToggleSection title="Expérience professionnelle">
        <p>Concepteur Vendeur chez Cuisinella (2022-2024)</p>
        <p>Intérim (2020-2021)</p>
        <p>Technicien Fibre Optique (2020-2020)</p>
        <p>Fonctionnaire dans la restauration hospitalière (2014-2020)</p>
      </ToggleSection>

      <ToggleSection title="Objectifs">
        <p>Allier mes compétences en développement informatique et en commerce pour concevoir des solutions innovantes et orientées client.</p>
      </ToggleSection>

      <ToggleSection title="Centre d'intérêts">
        <p>Culture japonaise</p>
        <p>Musique</p>
        <p>Jeux vidéos (Jeu de rôle / stratégie)</p>
      </ToggleSection>

      <ToggleSection title="Compétences">
        <ul>
          <li>Gestion de projet</li>
          <li>Polyvalence</li>
          <li>Contact humain</li>
          <li>Informatique</li>
          <li>Autonomie</li>
        </ul>
      </ToggleSection>

      <div className="cv-section">
      <a href={CVImage} target="_blank" rel="noopener noreferrer">
        <h2>Mon CV</h2>
          Consulter mon CV
        </a>
      </div>
    </div>
  </div>
);

export default About;
