import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import IntroPortfolio from '../components/IntroPortfolio';
import GitHubProfile from '../components/GitHubProfile';
import Repo from '../components/Repo';

function Portfolio() {
  return (
    <div>
      <Header />
      <IntroPortfolio />
      <GitHubProfile />
      <Repo />
      <Projects />
      <Footer />    
    </div>
  );
}

export default Portfolio;