import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./Courses";
import Login_fc from "./Login_fc";
import Register_fc from "./Register_fc";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login_fc />} />
            <Route path='/register' element={<Register_fc />} />
            <Route path='/courses' element={<Courses />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;