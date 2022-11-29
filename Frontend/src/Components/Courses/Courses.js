import axios from 'axios';
import React, {Component , useEffect, useState} from 'react'
import { Container, Row, Col, Image, FormControl} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {Link, Navigate, useLocation, useNavigate, useRoutes} from 'react-router-dom';
import Course_details from './Course_details'

export default function Courses() {

  const link = 'http://localhost:5500/course/home:uL_id'
  const [courses, setCourses] = useState([])
  const [title, setTitle] = useState('')
  const [descp, setDescp] = useState('')
  const [start_date, setStartDate] = useState('')
  const [end_date, setEndDate] = useState('')

  useEffect(() => {
    getCourses();
  }, [])

  async function getCourses() {
    const data = await axios.get(link)
    setCourses(data.data.allCourses)
    console.log(data.data.allCourses)
  }

  const renderCourses = () => {
    let coursesArr = [...courses]

    return coursesArr.map((course, i) => {
      return <Course_details key={i} course={course} />
    })
  }

  return (
    <Container style={{fontFamily: "'Montserrat', sans-serif", backgroundColor: '#F9F5EB', minHeight:'100vh', padding: '0', margin: '0'}}>
      <div style={{textAlign: 'center', backgroundColor: '#1c3878'}}>
        <h2 style={{padding: '35px 35px', fontWeight: 'bolder', color: '#F9F5EB'}}>Here are the available courses: </h2>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap:'wrap', gap: '8vh' ,padding:'40px 40px'}}>
        {renderCourses()}
      </div>
    </Container>
  )
}
