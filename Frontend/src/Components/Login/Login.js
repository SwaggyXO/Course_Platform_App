import axios from 'axios';
import React, {Component , useState} from 'react'
import { Container, Row, Col, Image, FormControl} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Link, Navigate, useNavigate} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: ""
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    onLogin = () => {
        axios.post('http://localhost:5500/course/', {
            username: this.state.username,
            password: this.state.password,
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
        }).then(() => {
            this.props.history.push('/dashboard');
          }).catch((err) => {
            console.log(err);
          });
    };

    render() {

        return(
            <Container>
                <Row>
                    <Col className='col-md-6 left-div'>
                        <div className='main-left'>
                            <div className='main-content'>
                                <Image src='' ></Image>
                                <div className='form-title'>
                                    <h2>Login and start learning</h2>
                                </div>
                                <div className='input-div'>
                                    <Col className='col-lg-6 col-md-6 col-sm-6 col-6 input'>
                                        <FormControl type="text" name="username" placeholder="Enter your username" value={this.state.username} onChange={this.onChange} required />
                                    </Col>
                                    <Col className='col-lg-6 col-md-6 col-sm-6 col-6 input'>
                                        <FormControl type="password" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.onChange} required />
                                    </Col>
                                    <div className='button'>
                                        <Button onClick={this.onLogin} className='btn submit-btn'> Login </Button>
                                    </div>
                                </div>
                                <p className='form-end'> Click here to <Link to="/register"> register! </Link> </p>
                            </div>
                        </div>
                    </Col>

                    <div className='col-md-6 right-div'>
                        <div className='main-right'>
                            <div className='img-div'>
                                
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        )
    }


}

export default Login;