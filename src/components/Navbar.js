import React from 'react';
//import {Link } from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './css/Navbar.css';

function Akshat() {
    return (
        <>
           <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container className='container'>
  <Navbar.Brand href="#home" className = 'H1'>Nogozo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto, tabLeft">
      <Nav.Link href="#features" className = 'tabs'>Features</Nav.Link>
      <Nav.Link href="#myOrders" className = 'tabs'>My Orders</Nav.Link>
      <Nav.Link href="#myoffers" className = 'tabs'>My Offers</Nav.Link>
      <Nav.Link href="#contactus" className = 'tabs'>Contact Us</Nav.Link>
      <Nav.Link href="#login" className = 'tabs'>Log In </Nav.Link>
    </Nav>
    <Nav>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Akshat;
