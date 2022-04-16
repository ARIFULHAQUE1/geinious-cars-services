import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
      const navigate = useNavigate()
      const handleForm=event=>{
            event.preventDefault()
      }
      const navigateLogin= ()=>{
            navigate('/login')
      }
      return (
            <div className='container mx-auto w-50'>
            <h3 className='text-center text-info'>Register</h3>
            <Form onSubmit={handleForm}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control  type="text" placeholder="Enter Name" />
                        <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                        </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  type="password" placeholder="Password" />
                  </Form.Group>
                  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group> */}
                  <Button variant="primary" type="submit">
                        Register
                  </Button>
            </Form>
            <p>Already Client ?<Link to='/login' onClick={navigateLogin} className='text-danger text-decoration-none'> Login</Link></p>
      </div>
      );
};

export default Register;