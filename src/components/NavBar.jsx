import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import logo from '../assets/image/logo2.png';
import navIcon1 from '../assets/image/nav-icon1.svg';
import navIcon2 from '../assets/image/nav-icon2.svg';
import navIcon3 from '../assets/image/nav-icon3.svg';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current location
  const [emailSubject, setEmailSubject] = useState(''); // State to store email subject

  // Function to handle "Let's Connect" button click
  const handleConnectClick = () => {
    const emailAddress = 'dannyjeong.au@gmail.com'; 
    const subject = encodeURIComponent(emailSubject);
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;
    window.location.href = mailtoLink;
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className={location.pathname === '/home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active navbar-link' : 'navbar-link'}>About</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className={location.pathname === '/portfolio' ? 'active navbar-link' : 'navbar-link'}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/resume" className={location.pathname === '/resume' ? 'active navbar-link' : 'navbar-link'}>Resume</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/danny-jeong-brisbane/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn"/> </a>
              <a href="https://www.facebook.com/jeongdari" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook"/> </a>
              <a href="https://www.instagram.com/orang_dari_korea/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Inatagram"/> </a>
            </div>
            <button className='vvd' onClick={handleConnectClick}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;