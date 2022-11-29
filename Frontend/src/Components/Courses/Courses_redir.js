import axios from 'axios';
import React, {Component , useEffect, useState} from 'react'
import { Container, Row, Col, Image, FormControl} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {Link, Navigate, useLocation, useNavigate, useRoutes} from 'react-router-dom';

export default function Courses_redir() {

    const link = 'http://localhost:5500/course/home_redir:username';
    const [uL_ID, setULID] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() =>{
        getOneUser();
    }, [])

    async function getOneUser() {
        const data = await axios.get(link)
        // console.log(data.data.oneUserDets._id)
        setULID(data.data.oneUserDets._id)
        setUsername(data.data.oneUserDets.username);
    }

    const uLID = uL_ID;
    console.log(uL_ID)

    const uName = username;
    console.log(uName);

    const navigate = useNavigate();

    const onClickFunc = () => {
        navigate(`/home${uLID}`);
    }

  return (
    <div>
        <h5>Redirecting {username} in 5, 4, 3, 2, 1....</h5>
        <Button className='btn btn-primary' onClick={onClickFunc} >Click here to go to the dashboard</Button>
    </div>
  )
}
