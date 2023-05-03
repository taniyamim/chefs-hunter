import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/fusion-cuisine-low-resolution-logo-black-on-transparent-background.png'
import logo2 from '../../assets/fusion-cuisine-logo.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='text-center container p-4 mt-3'>

            <img className='w-25 mb-5' src={logo} alt="" />

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto d-flex align-items-center">
                            <img className='logo-img' src={logo2} alt="" />
                            <Nav.Link href="#features">
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link className='text-decoration-none' href="#pricing">
                                <Link className='text-decoration-none' to="/blog">Blog</Link>
                            </Nav.Link>
                            <Nav.Link href="#register">
                                <Link to="/register">Register</Link>
                            </Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user && <Nav.Link href="#deets"> <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle> </Nav.Link>
                            }
                            {
                                user ?
                                    <Button variant="secondary">Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;