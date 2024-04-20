import React, { useState, useEffect } from 'react';

function GitHubProfile() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: process.env.REACT_APP_GITHUB_TOKEN, // Replace with your GitHub token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub profile data');
        }

        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchGitHubUserData();
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div>
      {userData ? (
        <div>
          <p>GitHub Username: {userData.login}</p>
          <p>Name: {userData.name}</p>
          <p>Location: {userData.location}</p>
          {/* Display other relevant profile information */}
        </div>
      ) : (
        <p>Loading GitHub profile data...</p>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default GitHubProfile;