import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Hello, I'm Danny Jeong</h2>
        <p style={styles.paragraph}>Welcome to my portfolio!</p>
        <p style={styles.paragraph}>I'm a passionate web developer with expertise in React, Node.js, and more.</p>
        <p style={styles.paragraph}>Feel free to explore my projects and learn more about me.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa', // Light gray background
  },
  content: {
    textAlign: 'center',
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40', // Dark gray color
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 10,
    color: '#495057', // Medium gray color
  },
};

export default Home;
