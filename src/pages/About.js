import React from 'react';
import Skills from '../components/Skills';
import MyMap from '../components/MyMap';
import MyPhoto from '../components/MyPhoto';
import MyReviews from '../components/Review';

function About() {
  return (
    <div>
      <Skills />
      <MyReviews />
      <MyMap />
      <MyPhoto />
    </div>
  );
}

export default About;