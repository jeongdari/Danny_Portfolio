import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import 'react-vertical-timeline-component/style.min.css';
import IntroResume from '../components/IntroResume';
import GitHubProfile from '../components/GitHubProfile';
import { Chrono } from "react-chrono";
import Data from '../components/Data';
import Skills from '../components/Skills';


const Resume = () => {
  return (
    <>
      <NavBar />
      <IntroResume />
      <Skills />
      <GitHubProfile />
      <div className="ChronoContainer">
      <div className="Chrono">
        <Chrono 
          className="ChronoApp"
          items={Data}
          mode="VERTICAL"
          slideShow
          slideItemDuration={3000}
          cardHeight={250}
          cardWidth={600}
          fontSizes={{
            title: "1.5rem",
            cardTitle: "1.4rem",
            cardSubtitle: "1.2rem",
            cardDetailedText: "1.1rem"
          }}
          contentDetailsHeight={150}
        />
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Resume;