import axios from 'axios';
import React, {Component , useEffect, useState} from 'react'
import { Container, Row, Col, Image, FormControl} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

export default function Course_details({course}) {

    const enrollNow = () => {
        
    }


  return (
    <Card className='course-card' style={{ width: '30vh', backgroundColor: '#1c3878', color: '#F9F5EB', boxShadow:'-5px 5px 0 5px #607da9', borderRadius: '10px'}}>
        <Card.Img variant="top" src="" />
        <Card.Body style={{textAlign: 'center'}}>
            <Card.Title style={{fontWeight: 'bold'}}>{course.title}</Card.Title>
            <Card.Text>
                {course.descp}
            </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush' style={{textAlign: 'center'}}>
            <ListGroup.Item style={{backgroundColor: '#ed8e50', color: 'white'}} >Start date: {course.start_date}</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: '#ed8e50', color: 'white'}}>End date: {course.end_date}</ListGroup.Item>
        </ListGroup>
        <Card.Body style={{textAlign: 'center'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{padding: '10px 15px'}}>
                    <Button style={{color: '#F9F5EB', fontSize: '1.2rem'}}>Know More</Button>
                </div>
                <div style={{padding: '10px 15px'}}>
                    <Button style={{color: '#F9F5EB', fontSize: '1.2rem'}} onClick={enrollNow} >Enroll Now!</Button>
                </div>
            </div>
            {/* <Card.Link style={{textDecoration: 'underline', color: '#F9F5EB', fontSize: '1.2rem'}} href="#">Know More</Card.Link>
            <Card.Link style={{textDecoration: 'underline', color: '#F9F5EB', fontSize: '1.2rem'}} href="#">Enroll Now!</Card.Link> */}
        </Card.Body>
    </Card>
  )
}