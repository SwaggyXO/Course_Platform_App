import axios from 'axios';
import React, {Component , useState} from 'react'
import { Container, Row, Col, Image, FormControl} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Link, Navigate, useNavigate} from 'react-router-dom';

export default function Register_fc() {

    const link = 'http://localhost:5500/course/register';
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    async function Register(e) {
        e.preventDefault();

        const config = {
            username: username ? username: undefined,
            email: email ? email: undefined,
            contact: contact ? contact: undefined,
            password: password ? password: undefined,
            headers: { 'content-type': 'application/json;charset=UTF-8' },
        }

        await axios.post(link, config).then(() => {
            navigate('/');
        })
    }

    return (
        <Container>
                <Row>
                    <Col className='col-md-4 reg-left-div'>
                        <div className='reg-main-left'>
                            <div className='reg-left-content'>
                                <div className='img-div'>
                                
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col className='col-md-8 reg-right-div'>
                        <div className='reg-main-right'>
                            <div className='reg-right-content'>
                                <Image src='' ></Image>
                                <div className='form-title'>
                                    <h2>New here? Register below</h2>
                                </div>
                                <div className='input-div'>
                                    <Col className='col-lg-6 col-md-6 col-sm-6 col-6 input'>
                                        <FormControl type="text" name="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)}  required />
                                    </Col>
                                    <Col className='col-lg-6 col-md-6 col-sm-6 col-6 input'>
                                        <FormControl type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </Col>
                                    <Col className='col-lg-6 col-md-6 col-sm-6 col-6 input'>
                                        <FormControl type="text" name="contact" placeholder="Enter your contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                                    </Col>
                                    <Col className='col-lg-6 col-md-6 col-sm-6 col-6 input'>
                                        <FormControl type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
                                    </Col>
                                    <div className='button'>
                                        <Button  className='btn reg-submit-btn' onClick={Register}> Register </Button>
                                    </div>
                                </div>
                                <p className='reg-form-end'> Already have an account? <Link to="/"> Login </Link> </p>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    )
}