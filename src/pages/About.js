import React from 'react';
import NavBar from '../components/NavBar';
import MyMap from '../components/MyMap';
import MyPhoto from '../components/MyPhoto';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import IntroAbout from '../components/IntroAbout';


function About() {  
  return (
    <div>
      <NavBar />
      <IntroAbout />
      <Skills />
      <MyMap />
      <MyPhoto />   
      <Footer />
    </div>
  );
}

export default About;