import React from "react";
import ScrollButton from '../../components/ScrollButton/ScrollButton'; // Importez le composant ScrollButton
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <p>Bonjour, </p>
        <p>Je suis <span className="highlight">A</span>lexis, </p>
        <h1>Developpeur Front-end</h1>
        <p className="under-text">
          HTML, CSS, JavaScript, React, Git/GitHub, NodeJS, Express, MongoDB, les API REST
        </p>

        <ScrollButton targetId="contact">Me contacter</ScrollButton>
      </div>
      <div className="home-right">
        <span className="highlighted-logo">A</span>
      </div>
    </div>
  );
};

export default Home;
