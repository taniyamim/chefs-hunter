import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';


const Register = () => {
    const { createUser , signInWithGoogle , signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'
    const [accepted, setAccepted] = useState(false);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password Must be 6 character atleast')
            return;
        }

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                event.target.reset();
                setSuccess('user added')
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }



    const handleGoogleSignUp = () => {
        

        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('user login successful')
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {

        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('user login successful')
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto my-5'>
            <h3 className='text-center'>Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicNam">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmai">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <Button variant="secondary" disabled={!accepted} type="submit">
                        Register
                    </Button>
                </div>

                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>

                <hr />
                <p className='text-center'>Or</p>
                <div className="my-4 d-flex">

                    <Button onClick={handleGoogleSignUp} variant="outline-dark" className="me-2">
                        Register With Gmail  <FaGoogle />
                    </Button>
                    <Button onClick={handleGithubSignIn} variant="outline-dark">
                        Register With Github  <FaGithub></FaGithub>
                    </Button>
                </div>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;