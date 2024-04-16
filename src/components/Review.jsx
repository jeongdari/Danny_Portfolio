import React, { useEffect, useState } from 'react';

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Make a request to retrieve reviews for a specific user (replace with your user ID)
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?query=my+reviews&key=${apiKey}`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const reviewList = data.results.map((result) => ({
            placeName: result.name,
            review: result.formatted_address, // Use appropriate field for review content
          }));
          setReviews(reviewList);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [apiKey]);

  return (
    <div>
      <h2>My Google Maps Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.placeName}</strong>: {review.review}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReviews;

