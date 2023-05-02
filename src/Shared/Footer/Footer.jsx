import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-light p-5">
                <Container>
                    
                    <Row>
                        <Col>
                            <h4>Contact Us</h4>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" size="sm" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" size="sm" placeholder="Enter name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" size="sm" rows={3} />
                                </Form.Group>

                                <Button className='mt-3' variant="secondary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col sm={6}>
                            <p>Copyright © {new Date().getFullYear()}
                                <span> Fusion Cuisine</span>
                            </p>
                        </Col>
                        <Col sm={6} className="d-flex justify-content-end">
                            <p className='px-2 fw-bold'>Some Useful Links:</p>
                            <ul className="list-inline text-light">
                                <li className="list-inline-item" ><a className='text-decoration-none text-white' href="#">Home</a></li>
                                <li className="list-inline-item"><a className='text-decoration-none text-white' href="#">About</a></li>
                                <li className="list-inline-item"><a className='text-decoration-none text-white' href="#">Contact</a></li>
                                <li className="list-inline-item"><a className='text-decoration-none text-white' href="#">Blog</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;