import React from 'react';
import '../App.css';
import { Chrono } from "react-chrono";
import Data from '../components/Data'; // Importing data containing education and experience details

// Functional component for displaying education and experience timeline
const Experience = () => {
  return (
    <>     
      <div className="ChronoContainer">
        <div className="Chrono">
        <section className="chrono" id="chrono">
        <h2>Education & Experience</h2>
      </section>
          <Chrono
            className="ChronoApp"
            items={Data} // Data array containing timeline items
            mode="VERTICAL" // Display mode of the timeline
            slideShow // Enable slideshow mode
            slideItemDuration={3000} // Slideshow duration per item (3 seconds)
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
    </>
  );
}

export default Experience;