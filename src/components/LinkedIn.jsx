const accessToken = 'AQWVHwWwsNACr2N6wbJ8b_HLiQ6DN7N-wQWNpScb1hklOmNuGwT-KUQnonz_5o0VbxdolNpTUaTjPcM1Dk_X5azIL7whUHs1DsftYuBLq1YKvZECuHOyEX9anBULQh74SwwlLuV3SXfOWOZr2yE8GorEfOSBXmnTpPy4FRNflxdpirvgfr2LiGBGM45Fi91RyS_46rj6OkNwj5sqcsdEBNLaoadbDTQsqD2-N5g5jmcGYTjOdzZ_QjksLcAKf3iJrhY84Kz66q5CseKmKb7_yeJMY3hW1o77yUpLm4XnnxawVIEnXp4hBNgU5Ph-NUT8G6XIwGZFFWBFTa0eJXHkB6THn6XV0w';

// Make an API request to retrieve work experience data
fetch('https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);

  // Extract and display work experience information
  const workExperience = data.positions;
  console.log(workExperience);

  // Render work experience data on your webpage
  renderWorkExperience(workExperience);
})
.catch(error => {
  console.error('Error fetching work experience data:', error);
});

function renderWorkExperience(workExperience) {
  // Example: Render work experience data on the webpage
  const workExperienceList = document.getElementById('workExperienceList');

  workExperience.forEach(position => {
    const listItem = document.createElement('li');
    listItem.textContent = `${position.title} at ${position.companyName} (${position.startDate} - ${position.endDate})`;
    workExperienceList.appendChild(listItem);
  });
}