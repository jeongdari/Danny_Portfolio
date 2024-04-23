import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { Container, Row, Col } from 'react-bootstrap';

function Repo() {
  const [repositories, setRepositories] = useState([]); // State to store repositories data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle error

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        // Fetch repositories data
        const reposResponse = await fetch('https://api.github.com/user/repos', {
          headers: {
            Authorization: process.env.REACT_APP_GITHUB_TOKEN,
          },
        });
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories data');
        }
        const reposData = await reposResponse.json();
        // Map over repositories to extract necessary information
        const formattedRepos = reposData.map((repo) => ({
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          description: repo.description || 'No description provided',
          language: repo.language || 'Unknown',
        }));

        setRepositories(formattedRepos); // Set formatted repositories data to state
      } catch (error) {
        setError(error.message); // Handle fetch error
      } finally {
        setLoading(false); // Set loading state to false after fetch completion
      }
    };

    fetchRepo(); // Invoke fetchRepo function on component mount
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Column configuration for MUI DataTable
  const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'name',
      label: 'Name',
      options: {
        filter: true,
        sort: true,
        // to display as clickable link
        customBodyRender: (value, tableMeta, updateValue) => (
          <a
            href={repositories[tableMeta.rowIndex].url}  // Access the URL from repositories data
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ),
      },
    },
    {
      name: 'description',
      label: 'Description',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'language',
      label: 'Language',
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  // Options configuration for MUI DataTable
  const options = {
    filterType: 'checkbox',
    tableBodyStyles: {
      backgroundColor: '#f5f5f5',
    }
  };

  return (
    <section className="repo" id="Repos">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              {loading ? (
                <p>Loading GitHub Repo data...</p> // Display loading message while data is being fetched
              ) : (
                <div>
                  <h2>GitHub REPOSITORIES</h2>
                  <p>
                    Here are some of the projects I've been developing and experimenting with. While these repositories are primarily for practice and ongoing development, they serve as a testament to my evolving skill set. As I continue to add new projects regularly, each contributes to furthering my proficiency and capabilities.
                  </p>
                  <MUIDataTable
                    data={repositories}
                    columns={columns}
                    options={options}
                  />
                </div>
              )}

              {error && <p>Error: {error}</p>} {/* Display error message if fetch fails */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Repo;
