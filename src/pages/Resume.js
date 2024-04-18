import React, { useState, useEffect } from 'react';

function Resume() {
  /* const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    // Function to fetch resume data from LinkedIn API
    const fetchResumeData = async () => {
      try {
        // Make API request to LinkedIn API using access token
        const response = await fetch('https://api.linkedin.com/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Replace accessToken with your actual access token
          },
        });

        // Check if response is successful
        if (response.ok) {
          const data = await response.json();
          // Set resume data in state
          setResumeData(data);
        } else {
          // Handle error response
          console.error('Error fetching resume data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching resume data:', error.message);
      }
    };

    // Call fetchResumeData function
    fetchResumeData();
  }, []); // Run effect only once on component mount */

  return (
    <h1>Resume</h1>
  );
}

export default Resume;
