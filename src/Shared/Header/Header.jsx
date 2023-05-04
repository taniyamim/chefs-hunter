import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/fusion-cuisine-low-resolution-logo-black-on-transparent-background.png'
import logo2 from '../../assets/fusion-cuisine-logo.png'
import './Header.css'
import { Link, NavLink} from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const userTooltip = (
        <Tooltip>
            {user?.displayName}
        </Tooltip>
    );
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(eroor))




    }

    return (
        <div className='text-center container p-4 mt-3'>

            <img className='w-25 mb-5' src={logo} alt="" />

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto d-flex align-items-center justify-content-evenly">
                            <img className='logo-img mx-3' src={logo2} alt="" />
                            <div className=" d-flex align-items-center gap-3">

                                <Nav.Link>
                                    <NavLink
                                        className='text-decoration-none text-dark'
                                        to="/"
                                        activeClassName='active'
                                    >
                                        Home
                                    </NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink
                                        className='text-decoration-none text-dark'
                                        to="/blog"
                                        activeClassName='active'
                                    >
                                        Blog
                                    </NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink
                                        className='text-decoration-none text-dark'
                                        to="/register"
                                        activeClassName='active'
                                    >
                                        Register
                                    </NavLink>
                                </Nav.Link>




                            </div>


                        </Nav>
                        <Nav>
                            {user && (
                                <OverlayTrigger placement="bottom" overlay={userTooltip}>
                                    <Nav.Link href="#deets">
                                        <img src={user.photoURL} className='rounded-circle w-50' alt="" />
                                    </Nav.Link>
                                </OverlayTrigger>
                            )}
                            {
                                user ?
                                    <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
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