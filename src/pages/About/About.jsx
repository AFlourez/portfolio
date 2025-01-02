import React from 'react';
import ToggleSection from '../../components/ToggleSelection/ToggleSelection.jsx';
import './About.scss';
import CVImage from '../../asset/CV Alexis Flourez.pdf';

const About = () => (
  <div className="about">
    <h1 className="title-about">À propos de moi</h1>
    <div className="content">
      <ToggleSection title="Formation">
        <p>Développeur Informatique RNCP 5 (2024)</p>
        <p>Bac professionnel comptabilité (2011-2014)</p>
      </ToggleSection>

      <ToggleSection title="Expérience professionnelle">
        <p>Concepteur Vendeur chez Cuisinella (2022-2024)</p>
        <p>Intérim (2020-2021)</p>
        <p>Technicien Fibre Optique (2020-2020)</p>
        <p>Fonctionnaire dans la restauration hospitalière (2014-2020)</p>
      </ToggleSection>

      <ToggleSection title="Objectifs">
        <p>Fort d'une expérience en gestion de projet et relation client, je me suis formé au développement web pour exercer un métier qui me passionne.</p>
      </ToggleSection>

      <ToggleSection title="Centre d'intérêts">
        <p>Culture japonaise</p>
        <p>Musique</p>
        <p>Nouvelle technologie</p>
      </ToggleSection>

      <ToggleSection title="Qualités">
        <ul>
          <li>Optimiste</li>
          <li>Ponctualité</li>
          <li>Adaptabilité</li>
          <li>Esprit d’équipe</li>
          <li>Écoute</li>
        </ul>
      </ToggleSection>

      <div className="cv-section">
      <a href={CVImage} type="application/json" target="_blank" rel="noopener noreferrer">
        <h2>Mon CV</h2>
          Consulter mon CV
        </a>
      </div>
    </div>
  </div>
);

export default About;
