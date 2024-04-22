import React, { useState, useEffect } from 'react';
import Popover from '@mui/material/Popover';

// Metadata component definition
const Metadata = ({ photo }) => {
  // State hooks to manage photo information and popover anchor element
  const [photoInfo, setPhotoInfo] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  // useEffect hook to fetch photo information when the component mounts or 'photo.id' changes
  useEffect(() => {
    const fetchPhotoInfo = async () => {
      try {
        // Fetching photo information from Flickr API using the provided photo ID and API key
        const response = await fetch(
          `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&photo_id=${photo.id}&format=json&nojsoncallback=1`
        );
        const data = await response.json();
        // Checking if API response is successful
        if (data.stat === 'ok') {
          setPhotoInfo(data.photo); // Setting retrieved photo information to state
        }
      } catch (error) {
        console.error('Error fetching photo info:', error); // Logging error if fetch fails
      }
    };

    fetchPhotoInfo();
  }, [photo.id]); // Dependency array ensures effect runs when 'photo.id' changes

  // Event handler to open popover and set anchor element
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Setting anchor element to current target (clicked image)
  };
  
  // Event handler to close popover
  const handleClose = () => {
    setAnchorEl(null); // Clearing anchor element to close popover
  };

  const open = Boolean(anchorEl); // Boolean flag to determine popover visibility

  return (
    <div className="photo-item">
      {/* Render image with onClick event to trigger popover */}
      <img
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        alt={photo.title}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      {/* Popover component displays photo metadata when open */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {/* Display photo metadata if available */}
        {photoInfo && (
          <div style={{ padding: '10px' }}>
            <p>Title: {photoInfo.title && photoInfo.title._content}</p>
            <p>Taken On: {photoInfo.dates && photoInfo.dates.taken}</p>
            <p>Taken At: {photoInfo.location && photoInfo.location.country && photoInfo.location.country._content}</p>
          </div>
        )}
      </Popover>
    </div>
  );
};

export default Metadata;
