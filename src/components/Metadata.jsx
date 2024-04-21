import React, { useState, useEffect } from 'react';
import Popover from '@mui/material/Popover';

const Metadata = ({ photo }) => {
  const [photoInfo, setPhotoInfo] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const fetchPhotoInfo = async () => {
      try {
        const response = await fetch(
          `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&photo_id=${photo.id}&format=json&nojsoncallback=1`
        );
        const data = await response.json();
        if (data.stat === 'ok') {
          setPhotoInfo(data.photo);
        }
      } catch (error) {
        console.error('Error fetching photo info:', error);
      }
    };

    fetchPhotoInfo();
  }, [photo.id]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="photo-item">
      <img
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        alt={photo.title}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
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
