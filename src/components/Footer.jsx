import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'; 
import logo from '../assets/image/logo2.png';
import navIcon1 from '../assets/image/nav-icon1.svg';
import navIcon2 from '../assets/image/nav-icon2.svg';
import navIcon3 from '../assets/image/nav-icon3.svg';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col as={Link} to="/home" xs={12} md={6} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <img src={logo} alt="Logo" />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
          <div className='social-icon'>
              <a href="https://www.linkedin.com/in/danny-jeong-brisbane/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn"/> </a>
              <a href="https://www.facebook.com/jeongdari" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook"/> </a>
              <a href="https://www.instagram.com/orang_dari_korea/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Inatagram"/> </a>
            </div>
          </Col>
        </Row>
      </Container>
      <p>CopyRight © 2024 All rights reserved by Danny Jeong. </p>
    </footer>
  );
}

export default Footer;