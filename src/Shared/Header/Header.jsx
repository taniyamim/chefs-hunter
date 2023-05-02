import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/fusion-cuisine-low-resolution-logo-black-on-transparent-background.png'
import logo2 from '../../assets/fusion-cuisine-logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='text-center border container p-4 mt-3'>

            <img className='w-25 mb-5' src={logo} alt="" />
            
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto d-flex align-items-center">
                          <img className='logo-img' src={logo2} alt="" />
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Nav.Link href="#chefs">Chefs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Button variant="secondary">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;