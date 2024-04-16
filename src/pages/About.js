import React from 'react';


function About() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const mapStyles = {
    width: '100%',
    height: '400px',
    position: 'relative'
  };
  return (
    <div>
      <h2>About Me</h2>
      <p>I am ~~~~~.</p>
      <iframe
        width="450"
        height="250"
        frameBorder="0"
        style={{ border: '0', width: '100%', height: '400px', position: 'relative' }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=${apiKey}&PARAMETERS`}
        allowFullScreen
      ></iframe>
      
    </div>
  );
}

export default About;