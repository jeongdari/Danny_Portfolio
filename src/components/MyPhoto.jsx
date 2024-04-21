import React, { useState, useEffect } from 'react';
import Metadata from '../components/Metadata';
import '../App.css';

const MyPhoto = () => {
  const [photos, setPhotos] = useState([]);
  const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
  const userId = '200457983@N05';

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1`
        );
        const data = await response.json();
        setPhotos(data.photos.photo);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, [apiKey, userId]);

  return (
    <section className="photo" id="photos">
    <div className='my-photo-container'>
      <h2>My Flickr Gallery</h2>
      <div className="photo-grid">
        {photos.map((photo) => (
          <Metadata key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  </section>
);
};

export default MyPhoto;