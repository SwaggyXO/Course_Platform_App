import axios from 'axios';
import React, {Component , useState} from 'react'
import { Container, Row, Col, Image, FormControl} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: "",
          email: "",
          contact: "",
          password: ""
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onRegister = () => {
        axios.post('http://localhost:5500/course/register', {
            username: this.state.username,
            email: this.state.email,
            contact: this.state.contact,
            password: this.state.password
        })
    };

    render(){
        return(
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
                                        <FormControl type="text" name="username" placeholder="Enter your username" value={this.state.username} onChange={this.onChange} required />
                                    </Col>
                                    <Col className='col-lg-6 col-md-6 col-sm-6 col-6 input'>
                                        <FormControl type="email" name="email" placeholder="Enter your email" value={this.state.email} onChange={this.onChange} required />
                                    </Col>
                                    <Col className='col-lg-6 col-md-6 col-sm-6 col-6 input'>
                                        <FormControl type="text" name="contact" placeholder="Enter your contact" value={this.state.contact} onChange={this.onChange} />
                                    </Col>
                                    <Col className='col-lg-6 col-md-6 col-sm-6 col-6 input'>
                                        <FormControl type="password" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.onChange} required />
                                    </Col>
                                    <div className='button'>
                                        <Button onClick={this.onRegister} className='btn reg-submit-btn'> Register </Button>
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
}

export default Register;