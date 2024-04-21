import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import IntroPortfolio from '../components/IntroPortfolio';
import Repo from '../components/Repo';

function Portfolio() {
  return (
    <div>
      <Header />
      <IntroPortfolio />
      <Repo />
      <Projects />
      <Footer />    
    </div>
  );
}

export default Portfolio;