import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; // Import Axios
import { useCookies } from '../hooks/useCookies';

export const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { setCookie } = useCookies();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!userName || !password) {
            setError("Username and password are required.");
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post(`https://pmo.waysaheadglobal.com/api/Authentications`, {
                username: userName,
                password: password
            });

            if (!response.data) {
                throw new Error('Login failed');
            }

            // Assuming the response contains a token, store it securely
            // For example, you can use localStorage or sessionStorage
            console.log(response.data);
            setCookie('firstName', response.data.firstName, 7);
            setCookie('lastName', response.data.lastName, 8);
            setCookie('designation', response.data.designation, 8);
            setCookie('picture', response.data.picture, 8);
            // Redirect to dashboard upon successful login
            window.location.href = '/dashboard';
        } catch (error) {
            setError("Login failed. Please check your credentials and try again.");
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="login-main">
            <Container className='left-grad'></Container>
                <Container fluid className='login-content'>
                    <span className='login-heading'>LOG IN</span>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <Form onSubmit={handleSubmit} className='login-form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='form-labletxt'>Email </Form.Label>
                            <Form.Control className='form-inputtxt' type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='form-labletxt'>Password</Form.Label>
                            <Form.Control className='form-inputtxt' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='login-btn' disabled={isLoading}>
                            {isLoading ? 'Logging In...' : 'Log In'}
                        </Button>
                    </Form>

                    <span className='tnc'>Privacy Policy | T&C</span>
                    <span className='allrights'>All rights reserved 2024 © PMO360 | WaysAhead Global Portfolio</span>
                </Container>
                <Container className='left-grad1'></Container>
            </div>
        </>
    );
};
