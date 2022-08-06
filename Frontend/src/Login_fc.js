import axios from 'axios';
import React, {Component , useState} from 'react'
import { Container, Row, Col, Image, FormControl} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom';
import Courses from './Courses'

export default function Login_fc() {

    const link = 'http://localhost:5500/course/';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState()
    const navigate = useNavigate();
    
    async function Login(e) {
        e.preventDefault();

        const config = {
            username : username ? username : undefined,
            password : password ? password : undefined,
            headers: { 'content-type': 'application/json;charset=UTF-8' },
        }

        await axios.post(link, config).then(() => {
            navigate('/courses')
        })

    }

    const userLogin = () => {
        return <Row>
            <Col className='col-md-6 left-div'>
                <div className='main-left'>
                    <div className='main-content'>
                        <Image src='' ></Image>
                        <div className='form-title'>
                            <h2>Login and start learning</h2>
                        </div>
                        <div className='input-div'>
                            <Col className='col-lg-6 col-md-6 col-sm-6 col-6 input'>
                                <FormControl type="text" name="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-sm-6 col-6 input'>
                                <FormControl type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </Col>
                            <div className='button'>
                                <Button onClick={Login} className='btn submit-btn'> Login </Button>
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
    }

    // const Login = (e) => {
    //     e.preventDefault();
    //     const config = {
    //         url: link,
    //         headers: { 'content-type': 'application/json;charset=UTF-8' },
    //     }
    //     const data = {username, password};

    //     axios.post(config, data).then((res) => {
    //         navigate('/dashboard', true);
    //     }).catch((err) => {
    //         console.log(err);
    //     })

    // }

    return (
        <Container>
            {userLogin()}
        </Container>
    )
}
