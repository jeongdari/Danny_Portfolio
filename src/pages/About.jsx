import React from 'react';
import Header from '../components/Header';
import MyMap from '../components/MyMap';
import MyPhoto from '../components/MyPhoto';
import Footer from '../components/Footer';
import IntroAbout from '../components/IntroAbout';


function About() {  
  return (
    <div>
      <Header />
      <IntroAbout />      
      <MyPhoto /> 
      <MyMap />  
      <Footer />
    </div>
  );
}

export default About;