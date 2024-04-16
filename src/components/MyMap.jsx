import React from 'react';

function MyMap() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // Function to construct the URL for the Google Maps Embed API
  const getGoogleMapsEmbedUrl = () => {
    const parameters = {
      q: 'LOCATION', // Specify your location query here
      key: apiKey,
      zoom: 10, // Specify the initial zoom level
      // Additional parameters can be added here
    };

    const queryString = new URLSearchParams(parameters).toString();
    return `https://www.google.com/maps/embed/v1/place?${queryString}`;
  };

  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <iframe
        title="Google Maps Embed"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: '0' }}
        src={getGoogleMapsEmbedUrl()}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MyMap;