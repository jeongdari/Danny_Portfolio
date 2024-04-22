import React, { useState, useEffect } from 'react';
import Metadata from '../components/Metadata';
import '../App.css';

// MyPhoto component definition
const MyPhoto = () => {
  // State hook to manage the array of photos retrieved from Flickr API
  const [photos, setPhotos] = useState([]);  
  const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
  const userId = '200457983@N05'; // Flickr user ID

  // useEffect hook to fetch photos from Flickr API when component mounts or when 'apiKey' or 'userId' changes
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Fetching photos using Flickr API's 'flickr.people.getPhotos' method
        const response = await fetch(
          `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1`
        );
        const data = await response.json(); // Parsing JSON response
        setPhotos(data.photos.photo); // Setting retrieved photos to state
      } catch (error) {
        console.error('Error fetching photos:', error); // Logging error if fetch fails
      }
    };

    fetchPhotos();
  }, [apiKey, userId]); // Dependency array ensures effect runs when 'apiKey' or 'userId' changes

  // Rendering section containing Flickr photo gallery
  return (
    <section className="photo" id="photos">
    <div className='my-photo-container'>
      <h2>My Flickr Gallery</h2>
      <div className="photo-grid">
        {/* Mapping over 'photos' array and rendering Metadata component for each photo */}
        {photos.map((photo) => (
          <Metadata key={photo.id} photo={photo} /> // Passing 'photo' object as prop to Metadata component
        ))}
      </div>
    </div>
  </section>
);
};

export default MyPhoto;