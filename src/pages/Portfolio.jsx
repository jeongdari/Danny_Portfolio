import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import IntroPortfolio from '../components/IntroPortfolio';

function Portfolio() {
  return (
    <div>
      <NavBar />
      <IntroPortfolio />
      <Projects />
      <Footer />    
    </div>
  );
}

export default Portfolio;