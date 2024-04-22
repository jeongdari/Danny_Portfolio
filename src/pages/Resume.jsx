import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'react-vertical-timeline-component/style.min.css';
import IntroResume from '../components/IntroResume';
import Skills from '../components/Skills';
import Experience from '../components/Experience';


const Resume = () => {
  return (
    <>
      <Header />
      <IntroResume />
      <Skills />  
      <Experience />
      <Footer />
    </>
  );
}

export default Resume;