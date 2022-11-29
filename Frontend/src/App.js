import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import Login_fc from "./Components/Login/Login_fc";
import Register_fc from "./Components/Register/Register_fc";
import Course_redir from "./Components/Courses/Courses_redir"

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login_fc />} />
            <Route path='/register' element={<Register_fc />} />
            <Route path='/home_redir:username' element={<Course_redir />} />
            <Route path='/home:uL_id' element={<Courses />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;