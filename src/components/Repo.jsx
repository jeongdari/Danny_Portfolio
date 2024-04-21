import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

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
        // Map over repositories to extract necessary information
        const formattedRepos = reposData.map((repo) => ({
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          description: repo.description || 'No description provided',
          language: repo.language || 'Unknown',
        }));

        setRepositories(formattedRepos);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepo();
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

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
                <p>Loading GitHub Repo data...</p>
              ) : (
                <div>
                  <h2>GitHub Repositories</h2>
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

              {error && <p>Error: {error}</p>}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Repo;
