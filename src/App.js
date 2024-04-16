import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './pages/About';
import MyReviews from './components/Review';
import MyMap from './components/MyMap';
import MyPhoto from './components/MyPhoto';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (    
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <About />
      <MyReviews />
      <MyMap />
      <MyPhoto />
      <Footer />
    </div>
  );
}

export default App;
