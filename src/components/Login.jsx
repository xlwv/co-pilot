import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); 

        console.log('Form submitted!');
      };
    return (
        <>
            <div className="login-main">
                <Container fliid className='login-content'>
                 <span className='login-heading'>LOG IN</span>
                 
                 <Form onSubmit={handleSubmit} action="/post" className='login-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='form-labletxt'>Email </Form.Label>
        <Form.Control className='form-inputtxt' type="email" placeholder="Enter your email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='form-labletxt'>Password</Form.Label>
        <Form.Control className='form-inputtxt' type="password" placeholder="Enter your Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button variant="primary" type="submit" className='login-btn'>
        Log In
      </Button>
    </Form>
    <span className='tnc'>Privacy Policy | T&C</span>
    <span className='allrights'>All rights reserved 2024 © PMO360 | WaysAhead Global Portfolio</span>
                </Container>
            </div>
        </>

    );}