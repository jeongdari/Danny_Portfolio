import React, { useState, useEffect } from 'react';

function Repo() {  
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        // Fetch repositories data
        const reposResponse = await fetch('https://api.github.com/user/repos', {
          headers: {
            Authorization: process.env.REACT_APP_GITHUB_TOKEN, // Replace with your GitHub token
          },
        });
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories data');
        }
        const reposData = await reposResponse.json();
        setRepositories(reposData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepo();
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div>
      {loading ? (
        <p>Loading GitHub Repo data...</p>
      ) : (
        <div>
          <h2>GitHub Repositories</h2>
          <ul>
            {repositories.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default Repo;
