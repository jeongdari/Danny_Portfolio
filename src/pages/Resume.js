import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';



function Resume() {
  

  const accessToken = 'YOUR_OAUTH_ACCESS_TOKEN';
  
  axios.get('https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,positions)', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => {
    // Handle successful response
    console.log('LinkedIn API Response:', response.data);
  
    // Extract work experience data
    const positions = response.data.positions;
  
    // Process the work experience data as needed
    positions.forEach(position => {
      console.log('Company:', position.companyName);
      console.log('Title:', position.title);
      console.log('Start Date:', position.startDate);
      console.log('End Date:', position.endDate || 'Present');
      console.log('Description:', position.description);
      console.log('---');
    });
  
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching work experience data:', error);
  });


  return (
    <div>
      <NavBar />
      <h2>Resume</h2>
      
        <h3>Work Experience</h3>
       
      <Footer />
    </div>
  );
}

export default Resume;
