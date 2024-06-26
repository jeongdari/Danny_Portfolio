import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import logo from '../assets/image/logo2.png';
import navIcon1 from '../assets/image/nav-icon1.svg';
import navIcon2 from '../assets/image/nav-icon2.svg';
import navIcon3 from '../assets/image/nav-icon3.svg';

// NavBar component definition
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

  // Effect hook to handle scroll event
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);// Update scrolled state when page is scrolled back to the top      
      } else {
        setScrolled(false);// Update scrolled state when page is scrolled back to the top
      }
    };
    // Add event listener for scroll
    window.addEventListener("scroll", onScroll);
    // Clean up by removing event listener when component is unmounted
    return () => window.removeEventListener("scroll", onScroll);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

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
            {/* Navbar links with active class based on current location */}
            <Nav.Link as={Link} to="/home" className={location.pathname === '/home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active navbar-link' : 'navbar-link'}>About</Nav.Link>
            <Nav.Link as={Link} to="/resume" className={location.pathname === '/resume' ? 'active navbar-link' : 'navbar-link'}>Resume</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className={location.pathname === '/portfolio' ? 'active navbar-link' : 'navbar-link'}>Portfolio</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className='social-icon'>
              {/* Social media icons with links */}
              <a href="https://www.linkedin.com/in/danny-jeong-brisbane/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn"/> </a>
              <a href="https://www.facebook.com/jeongdari" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook"/> </a>
              <a href="https://www.instagram.com/orang_dari_korea/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Inatagram"/> </a>
            </div>
            {/* "Let's Connect" button with click handler */}
            <button className='vvd' onClick={handleConnectClick}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;