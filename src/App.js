import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
        <div className="mainContainer">
          <div id="home">
            <Home />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
