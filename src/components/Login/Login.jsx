import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';


const Login = () => {
    const { signIn , signInWithGoogle , signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'



    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');
        setSuccess('');
        if (password.length < 6) {
            setError('Password Must be 6 character atleast')
            return;
        }

        signIn(email, password)
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


    const handleGoogleSignIn = () => {
       

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

    return (
        <Container className='w-25 mx-auto'>
            <h3 className='text-center'>Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

               <div className='d-flex justify-content-center'>
               <Button variant="secondary" type="submit">
                    Login
                </Button>
               </div>
                <br />

                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <hr />
                <p className='text-center'>Or</p>
                <div className="my-4 d-flex">
                    
                    <Button onClick={handleGoogleSignIn} variant="outline-dark" className="me-2">
                       Login With Gmail  <FaGoogle />
                    </Button>
                    <Button onClick={handleGithubSignIn} variant="outline-dark">
                       Login With Github  <FaGithub></FaGithub>
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

export default Login;