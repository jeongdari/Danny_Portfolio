import React, { useState, useEffect } from 'react';
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
    <div className='my-photo-container'>
      <h2>My Flickr Gallery</h2>
      <div className="photo-grid">
        {photos.map((photo) => (
          <img
            key={photo.id}
            className="photo-item"
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt={photo.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPhoto;